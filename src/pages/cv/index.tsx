// src/pages/cv/index.tsx
import { memo, useState } from "react";
import { site } from "../../data/site";
import { DownloadIcon } from "../../components";
import PageSeo from "../../components/PageSeo";
import cvSource from "../../../cv/Yassine_Bouali_CV.tex?raw";
import {
  parseCv,
  type CvEntry,
  type CvHeader,
  type CvSection,
} from "../../lib/latex-cv-parser";

const FILE_BASE = "Yassine_Bouali_CV";
const doc = parseCv(cvSource);
const sourceLines = cvSource.split(/\r?\n/);

// Same family the LaTeX build uses (TeX Gyre Heros, a Helvetica clone).
const PAPER_FONT =
  '"TeX Gyre Heros","Helvetica Neue",Helvetica,Arial,"Liberation Sans",sans-serif';

const INK = "text-[#1b1f27]";
const MUTED = "text-[#4a5160]";
const ACCENT = "text-[#2f4b8a]";

/* ---------- The sheet ---------- */

function hrefFor(p: string): string | null {
  if (/^[^\s@]+@[^\s@]+\.[a-z]+$/i.test(p)) return `mailto:${p}`;
  if (
    /^(https?:\/\/)?(www\.)?[a-z0-9-]+(\.[a-z0-9-]+)*\.(com|dev|io|org)(\/\S*)?$/i.test(
      p,
    )
  )
    return p.startsWith("http") ? p : `https://${p}`;
  return null;
}

function DetailLine({ line }: { line: string }) {
  const parts = line
    .split("•")
    .map((s) => s.trim())
    .filter(Boolean);
  return (
    <p className={`text-[13px] ${MUTED}`}>
      {parts.map((p, i) => {
        const href = hrefFor(p);
        return (
          <span key={i}>
            {i > 0 && <span className="mx-2 text-[#a3a9b8]">•</span>}
            {href ? (
              <a
                href={href}
                className="underline decoration-[#c4c9d4] underline-offset-2 hover:decoration-[#2f4b8a] focus-visible:outline focus-visible:outline-[#2f4b8a]"
              >
                {p}
              </a>
            ) : (
              p
            )}
          </span>
        );
      })}
    </p>
  );
}

function Bullets({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="mt-1 list-disc space-y-0.5 pl-5 marker:text-[#2f4b8a]">
      {items.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}

function Entry({ entry }: { entry: CvEntry }) {
  return (
    <div className="mt-3 first:mt-0 break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-bold">{entry.heading}</h3>
        {entry.meta && (
          <span className={`text-[13px] tabular-nums ${MUTED}`}>
            {entry.meta}
          </span>
        )}
      </div>
      {entry.subtitle && <p className={`italic ${MUTED}`}>{entry.subtitle}</p>}
      {entry.description && <p className="mt-0.5">{entry.description}</p>}
      <Bullets items={entry.bullets} />
    </div>
  );
}

function SectionBody({ section }: { section: CvSection }) {
  if (section.entries.length)
    return (
      <>
        {section.entries.map((e, i) => (
          <Entry key={i} entry={e} />
        ))}
      </>
    );
  if (section.bullets.length) return <Bullets items={section.bullets} />;

  const labelled = /^[^:]{1,24}:/;
  if (section.lines.length && section.lines.every((l) => labelled.test(l))) {
    return (
      <dl className="grid grid-cols-[7.5rem_1fr] gap-x-4 gap-y-0.5">
        {section.lines.map((l, i) => {
          const idx = l.indexOf(":");
          return (
            <div key={i} className="contents">
              <dt className="font-bold">{l.slice(0, idx)}</dt>
              <dd>{l.slice(idx + 1).trim()}</dd>
            </div>
          );
        })}
      </dl>
    );
  }
  return (
    <>
      {section.lines.map((l, i) => (
        <p key={i}>{l}</p>
      ))}
    </>
  );
}

const Sheet = memo(function Sheet({
  header,
  sections,
}: {
  header: CvHeader;
  sections: CvSection[];
}) {
  return (
    <article
      id="cv-printable"
      style={{ fontFamily: PAPER_FONT }}
      className={`mx-auto w-full max-w-[794px] bg-white ${INK} text-[14.5px] leading-[1.45] shadow-2xl shadow-black/50 ring-1 ring-black/10 px-[clamp(1.25rem,6vw,3.6rem)] py-[clamp(1.5rem,5vw,3.2rem)] print:shadow-none`}
    >
      <header className="mb-1">
        <h1 className="text-[34px] font-bold leading-none tracking-tight">
          {header.name}
        </h1>
        {header.role && (
          <p className={`mt-1.5 text-[17px] font-semibold ${ACCENT}`}>
            {header.role}
          </p>
        )}
        <div className="mt-2 space-y-0.5">
          {header.details.map((d, i) => (
            <DetailLine key={i} line={d} />
          ))}
        </div>
      </header>

      {sections.map((s, i) => (
        <section key={i} className="mt-5">
          <h2 className="mb-2 border-b border-[#b9c3da] pb-0.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#2f4b8a]">
            {s.title}
          </h2>
          <SectionBody section={s} />
        </section>
      ))}
    </article>
  );
});

/* ---------- LaTeX source ---------- */

const TOKEN_RE =
  /(%[^\n]*)|(\$[^$]*\$)|(\\[a-zA-Z@]+\*?)|(\\[^a-zA-Z@])|([{}])|([^\\%${}]+)/g;

function highlightLine(line: string): React.ReactNode[] {
  if (!line) return [<span key="b">&nbsp;</span>];
  const out: React.ReactNode[] = [];
  let i = 0;
  let m: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(line)) !== null) {
    const [, comment, math, cmd, esc, brace, text] = m;
    const cls = comment
      ? "text-owl-comment italic"
      : math
        ? "text-owl-cyan"
        : cmd || esc
          ? "text-owl-blue font-semibold"
          : brace
            ? "text-owl-text-muted"
            : "text-owl-text/90";
    out.push(
      <span key={i++} className={cls}>
        {comment || math || cmd || esc || brace || text}
      </span>,
    );
  }
  return out;
}

// Lines write themselves in top to bottom (~1.1s total, however long the file),
// then a caret blinks on the last line. Replays each time the tab opens.
const CODE_CSS = `
@keyframes cv-line-in {
  from { opacity: 0; transform: translateX(-10px); filter: blur(2px); }
  to   { opacity: 1; transform: none; filter: none; }
}
@keyframes cv-caret { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
.cv-line  { animation: cv-line-in 420ms cubic-bezier(.2,.7,.2,1) both; }
.cv-caret { display: inline-block; width: 7px; height: 1.1em; margin-left: 2px;
            vertical-align: text-bottom; background: currentColor;
            animation: cv-caret 1s steps(1) infinite; }
@media (prefers-reduced-motion: reduce) {
  .cv-line { animation: none; }
  .cv-caret { animation: none; }
}
`;

const REVEAL_MS = 1100;

const CvSource = memo(function CvSource() {
  const last = sourceLines.length - 1;
  const step = REVEAL_MS / Math.max(sourceLines.length, 1);
  return (
    <div className="min-w-max py-3">
      <style>{CODE_CSS}</style>
      {sourceLines.map((line, i) => (
        <div
          key={i}
          style={{ animationDelay: `${Math.round(i * step)}ms` }}
          className="cv-line flex gap-3 px-4 font-mono text-[13px] leading-relaxed hover:bg-owl-bg/30"
        >
          <span className="w-10 shrink-0 select-none text-right text-xs text-owl-comment/50">
            {i + 1}
          </span>
          <span className="whitespace-pre">
            {highlightLine(line)}
            {i === last && (
              <span aria-hidden="true" className="cv-caret text-owl-cyan" />
            )}
          </span>
        </div>
      ))}
    </div>
  );
});

/* ---------- Page ---------- */

type View = "rendered" | "source";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-owl-blue";

export default function CvPage() {
  const [view, setView] = useState<View>("rendered");
  const [copied, setCopied] = useState(false);

  const copySource = async () => {
    try {
      await navigator.clipboard.writeText(cvSource);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable: ignore */
    }
  };

  const tab = (id: View, label: string) => (
    <button
      role="tab"
      aria-selected={view === id}
      onClick={() => setView(id)}
      className={`rounded px-3.5 py-1.5 font-sans text-sm transition-colors ${focusRing} ${
        view === id
          ? "bg-owl-surface text-owl-text shadow-sm"
          : "text-owl-text-muted hover:text-owl-text"
      }`}
    >
      {label}
    </button>
  );

  const btn = `inline-flex items-center gap-2 rounded px-4 py-2 font-sans text-sm transition-colors ${focusRing}`;

  return (
    <>
      <PageSeo
        title="CV | Yassine Bouali"
        description="Yassine Bouali — Backend Software Engineer. CV with the LaTeX source behind it."
        path="/cv"
      />

      <div className="h-full w-full overflow-y-auto bg-owl-bg">
        <div className="sticky top-0 z-30 border-b border-owl-border bg-owl-bg/85 backdrop-blur">
          <div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-between gap-3 px-4 py-3">
            <div
              role="tablist"
              aria-label="CV view"
              className="flex gap-1 rounded-md border border-owl-border bg-owl-bg p-1"
            >
              {tab("rendered", "CV")}
              {tab("source", "LaTeX source")}
            </div>

            <div className="flex items-center gap-2">
              {view === "source" && (
                <button
                  onClick={copySource}
                  className={`${btn} border border-owl-border text-owl-text hover:border-owl-blue/50`}
                >
                  {copied ? "Copied" : "Copy source"}
                </button>
              )}
              <a
                href={site.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btn} border border-owl-border text-owl-text hover:border-owl-blue/50`}
              >
                Open PDF
              </a>
              <a
                href={site.cvPdfUrl}
                download={`${FILE_BASE}.pdf`}
                className={`${btn} bg-owl-blue font-semibold text-white hover:brightness-110`}
              >
                <DownloadIcon className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <main className="px-3 py-8 md:py-12">
          {view === "rendered" ? (
            doc.parsed ? (
              <Sheet header={doc.header} sections={doc.sections} />
            ) : (
              <p className="py-16 text-center font-sans text-owl-text-muted">
                Couldn’t read the CV source. Check cv/{FILE_BASE}.tex.
              </p>
            )
          ) : (
            <div className="mx-auto max-w-[1000px] overflow-auto rounded-lg border border-owl-border bg-owl-surface">
              <CvSource />
            </div>
          )}
        </main>
      </div>
    </>
  );
}
