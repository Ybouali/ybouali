// src/lib/latex-cv-parser.ts

export interface CvEntry {
  heading: string;
  subtitle?: string;
  meta?: string;
  description?: string;
  bullets: string[];
}

export interface CvSection {
  title: string;
  /** Plain text of the section's loose content (lines joined by \n). */
  body: string;
  /** Same content split on `\\` / blank lines. */
  lines: string[];
  bullets: string[];
  entries: CvEntry[];
}

export interface CvHeader {
  name: string;
  role: string;
  details: string[];
}

export interface CvDocument {
  header: CvHeader;
  sections: CvSection[];
  parsed: boolean;
}

const BREAK = "\u0001";
const EMPTY_HEADER: CvHeader = { name: "", role: "", details: [] };

/* ---------- low-level helpers ---------- */

/** Remove `% comments` but keep escaped `\%`. */
const stripComments = (s: string) => s.replace(/(^|[^\\])%.*$/gm, "$1");

/** Read a balanced `{...}` group starting at or after `from`. */
function readGroup(
  src: string,
  from: number,
): { text: string; end: number } | null {
  let i = from;
  while (i < src.length && /\s/.test(src[i])) i++;
  if (src[i] !== "{") return null;
  let depth = 0;
  for (let j = i; j < src.length; j++) {
    const c = src[j];
    if (c === "\\") {
      j++;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}" && --depth === 0)
      return { text: src.slice(i + 1, j), end: j + 1 };
  }
  return null;
}

function readGroups(
  src: string,
  from: number,
  n: number,
): { args: string[]; end: number } | null {
  const args: string[] = [];
  let pos = from;
  for (let k = 0; k < n; k++) {
    const g = readGroup(src, pos);
    if (!g) return null;
    args.push(g.text);
    pos = g.end;
  }
  return { args, end: pos };
}

/** LaTeX fragment -> plain text. `\\` and blank lines become "\n". */
export function clean(s: string): string {
  let out = s;
  out = out.replace(/\\(?:begin|end)\{[^}]*\}(?:\[[^\]]*\])?/g, "");
  out = out.replace(/\\pagestyle\{[^}]*\}/g, "");
  out = out.replace(/\\href\{[^{}]*\}\{((?:[^{}]|\{[^{}]*\})*)\}/g, "$1");
  out = out.replace(/\\url\{([^{}]*)\}/g, "$1");
  // \skillrow{Label}{a, b, c}  ->  "Label: a, b, c" on its own line
  out = out.replace(
    /\\skillrow\{([^{}]*)\}\{((?:[^{}]|\{[^{}]*\})*)\}/g,
    `$1: $2${BREAK}`,
  );
  out = out.replace(/\\textbullet\b(?:\s*\{\})?/g, " • ");
  out = out.replace(/\\\\(?:\[[^\]]*\])?/g, BREAK);
  out = out.replace(/\n[ \t]*\n\s*/g, BREAK).replace(/\n/g, " ");
  out = out.replace(
    /\\(?:hfill|newline|linebreak|par|noindent|indent)\b/g,
    " ",
  );
  out = out.replace(/\\[hv]space\*?\{[^}]*\}/g, " ");
  out = out.replace(/\\[,;!:]/g, " ");
  out = out.replace(/\\q?quad\b/g, " ");

  // unwrap \cmd{text}, innermost first
  let prev: string;
  do {
    prev = out;
    out = out.replace(/\\[a-zA-Z]+\*?\{([^{}]*)\}/g, "$1");
  } while (out !== prev);

  out = out.replace(/\\([%$&#_{}])/g, "$1");
  out = out.replace(/\\ /g, " ");
  out = out.replace(/\\[a-zA-Z@]+\*?/g, " ");
  out = out.replace(/---/g, "—").replace(/--/g, "–");
  out = out.replace(/~/g, " ");
  out = out.replace(/[{}]/g, "");
  out = out.replace(/[ \t]+/g, " ");
  // eslint-disable-next-line no-control-regex
  out = out.replace(/ ?\u0001 ?/g, "\n").replace(/\n{2,}/g, "\n");
  return out.trim();
}

/** Split "A, B (x, y) · C" into items without breaking inside parentheses. */
export function splitList(s: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = "";
  for (const ch of s) {
    if (ch === "(") depth++;
    else if (ch === ")") depth = Math.max(0, depth - 1);
    if (depth === 0 && /[,;·•]/.test(ch)) {
      out.push(cur);
      cur = "";
    } else cur += ch;
  }
  out.push(cur);
  return out.map((t) => t.trim()).filter(Boolean);
}

function getBody(source: string): string {
  const b = source.indexOf("\\begin{document}");
  const e = source.lastIndexOf("\\end{document}");
  if (b === -1) return source;
  return source.slice(
    b + "\\begin{document}".length,
    e !== -1 ? e : source.length,
  );
}

/* ---------- sections ---------- */

interface SectionHeader {
  title: string;
  start: number;
  contentStart: number;
}

const TITLE = String.raw`((?:[^{}]|\{[^{}]*\})+)`;
const SECTION_RES = [
  new RegExp(String.raw`\\section\*?\{${TITLE}\}`, "g"),
  new RegExp(String.raw`\\cvsection(?:\*?\[[^\]]*\])?\{${TITLE}\}`, "g"),
  new RegExp(String.raw`\\begin\{rSection\}\{${TITLE}\}`, "g"),
];

function findSections(source: string): SectionHeader[] {
  const found: SectionHeader[] = [];
  for (const re of SECTION_RES) {
    for (const m of source.matchAll(re)) {
      found.push({
        title: m[1],
        start: m.index!,
        contentStart: m.index! + m[0].length,
      });
    }
  }
  return found.sort((a, b) => a.start - b.start);
}

/* ---------- entries ---------- */

type EntryFields = {
  heading: string;
  subtitle?: string;
  meta?: string;
  description?: string;
};

/** Macro name -> argument count + how arguments map onto an entry. */
const ENTRY_MACROS: Record<
  string,
  { n: number; map: (a: string[]) => EntryFields }
> = {
  // \resumeEntry{title}{org}{dates}
  resumeEntry: {
    n: 3,
    map: (a) => ({ heading: a[0], subtitle: a[1], meta: a[2] }),
  },
  // \projectEntry{name}{description}{link or status}
  projectEntry: {
    n: 3,
    map: (a) => ({ heading: a[0], description: a[1], meta: a[2] }),
  },
  cvevent: {
    n: 4,
    map: (a) => ({ heading: a[0], subtitle: a[1], meta: a[2] }),
  },
  rSubsection: {
    n: 4,
    map: (a) => ({ heading: a[0], meta: a[1], subtitle: a[2] }),
  },
};

const ENTRY_RE = new RegExp(
  String.raw`\\(?:${Object.keys(ENTRY_MACROS).join("|")})\b|\\item\[`,
  "g",
);

function extractBullets(src: string): { bullets: string[]; rest: string } {
  const bullets: string[] = [];

  // \resumeItem{...} (balanced braces)
  let rest = "";
  let last = 0;
  const re = /\\resumeItem\b/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src)) !== null) {
    const g = readGroup(src, m.index + m[0].length);
    if (!g) continue;
    rest += src.slice(last, m.index);
    last = g.end;
    re.lastIndex = g.end;
    const t = clean(g.text);
    if (t) bullets.push(t);
  }
  rest += src.slice(last);

  // plain \item text
  rest = rest.replace(
    /\\item\s+([\s\S]*?)(?=\\item\b|\\end\{|$)/g,
    (_, t: string) => {
      const c = clean(t);
      if (c) bullets.push(c);
      return "";
    },
  );

  return { bullets, rest };
}

function parseEntry(block: string): CvEntry | null {
  const cmd = /^\\([a-zA-Z]+)/.exec(block)?.[1];
  let fields: EntryFields = { heading: "" };
  let rest = block;

  if (cmd === "item") {
    const close = block.indexOf("]");
    if (close === -1) return null;
    fields = { heading: clean(block.slice(6, close)) };
    rest = block.slice(close + 1);
  } else if (cmd && ENTRY_MACROS[cmd]) {
    const spec = ENTRY_MACROS[cmd];
    const g = readGroups(block, cmd.length + 1, spec.n);
    if (!g) return null;
    const f = spec.map(g.args);
    fields = {
      heading: clean(f.heading),
      subtitle: f.subtitle ? clean(f.subtitle) : undefined,
      meta: f.meta ? clean(f.meta) : undefined,
      description: f.description ? clean(f.description) : undefined,
    };
    rest = block.slice(g.end);
  } else return null;

  const { bullets } = extractBullets(rest);
  if (!fields.heading && !bullets.length) return null;
  return {
    heading: fields.heading,
    subtitle: fields.subtitle || undefined,
    meta: fields.meta || undefined,
    description: fields.description || undefined,
    bullets,
  };
}

function parseSection(title: string, raw: string): CvSection {
  const content = raw.replace(/\\end\{rSection\}/g, "");
  const marks = [...content.matchAll(ENTRY_RE)];

  const headEnd = marks.length ? marks[0].index! : content.length;
  const entries: CvEntry[] = [];
  marks.forEach((m, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].index! : content.length;
    const e = parseEntry(content.slice(m.index!, end));
    if (e) entries.push(e);
  });

  const { bullets, rest } = extractBullets(content.slice(0, headEnd));
  const lines = clean(rest)
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  return {
    title: clean(title),
    body: lines.join("\n"),
    lines,
    bullets,
    entries,
  };
}

function parseHeader(src: string): CvHeader {
  const lines = clean(src)
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  return {
    name: lines[0] ?? "",
    role: lines[1] ?? "",
    details: lines.slice(2),
  };
}

/* ---------- public API ---------- */

export function parseCv(source: string): CvDocument {
  const body = stripComments(getBody(source));
  const headers = findSections(body);
  if (!headers.length)
    return { header: EMPTY_HEADER, sections: [], parsed: false };

  const sections = headers.map((h, i) => {
    const end = i + 1 < headers.length ? headers[i + 1].start : body.length;
    return parseSection(h.title, body.slice(h.contentStart, end));
  });

  return {
    header: parseHeader(body.slice(0, headers[0].start)),
    sections,
    parsed: true,
  };
}
