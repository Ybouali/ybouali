import { CheckIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { useMemo, useRef, useState, type ReactNode } from 'react';
import {
    countCodeLines,
    extractCodeLanguage,
    reactNodeToText,
} from '../utils/markdown';

const LANGUAGE_LABELS: Record<string, string> = {
    ts: 'TypeScript',
    typescript: 'TypeScript',
    tsx: 'TSX',
    js: 'JavaScript',
    javascript: 'JavaScript',
    jsx: 'JSX',
    python: 'Python',
    py: 'Python',
    bash: 'bash',
    sh: 'bash',
    shell: 'shell',
    zsh: 'zsh',
    json: 'JSON',
    yaml: 'YAML',
    yml: 'YAML',
    md: 'Markdown',
    markdown: 'Markdown',
    html: 'HTML',
    css: 'CSS',
    sql: 'SQL',
    go: 'Go',
    rust: 'Rust',
    java: 'Java',
    c: 'C',
    cpp: 'C++',
    csharp: 'C#',
    php: 'PHP',
    ruby: 'Ruby',
    swift: 'Swift',
    kotlin: 'Kotlin',
    dockerfile: 'Dockerfile',
    docker: 'Docker',
    graphql: 'GraphQL',
    xml: 'XML',
    toml: 'TOML',
    ini: 'INI',
    env: 'env',
    text: 'text',
    plaintext: 'text',
    tree: 'tree',
    console: 'terminal',
    terminal: 'terminal',
};

type CodeBlockProps = {
    children: ReactNode;
};

function languageLabel(language: string): string {
    if (!language) return 'code';
    return LANGUAGE_LABELS[language.toLowerCase()] ?? language;
}

async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        const ok = document.execCommand('copy');
        textarea.remove();
        return ok;
    }
}

function CodeBlock({ children }: CodeBlockProps) {
    const preRef = useRef<HTMLPreElement>(null);
    const [copied, setCopied] = useState(false);

    const language = useMemo(() => extractCodeLanguage(children), [children]);
    const lineCount = useMemo(() => countCodeLines(children), [children]);
    const showLineNumbers = lineCount >= 4;
    const isTerminal = ['bash', 'sh', 'shell', 'zsh', 'console', 'terminal'].includes(
        language.toLowerCase()
    );

    const copyCode = async () => {
        const text =
            preRef.current?.textContent ??
            reactNodeToText(children).replace(/\n$/, '');

        const copiedOk = await copyToClipboard(text);
        if (!copiedOk) return;

        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
    };

    return (
        <div className="article-code group my-6 overflow-hidden border border-owl-border bg-owl-bg min-w-0">
            <div className="flex items-center justify-between gap-3 border-b border-owl-border px-3 py-1.5">
                <div className="flex min-w-0 items-center gap-2">
                    {isTerminal && (
                        <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-owl-green"
                            aria-hidden
                        />
                    )}
                    <span className="truncate font-mono text-[11px] uppercase tracking-wider text-owl-comment">
                        {languageLabel(language)}
                    </span>
                </div>
                <button
                    type="button"
                    onClick={() => {
                        void copyCode();
                    }}
                    className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 font-mono text-[11px] text-owl-text-muted transition-colors hover:text-owl-cyan"
                    aria-label={copied ? 'Copied' : 'Copy code'}
                >
                    {copied ? (
                        <CheckIcon className="h-3.5 w-3.5 text-owl-green" />
                    ) : (
                        <ClipboardDocumentIcon className="h-3.5 w-3.5" />
                    )}
                    <span className={copied ? 'text-owl-green' : undefined}>
                        {copied ? 'Copied' : 'Copy'}
                    </span>
                </button>
            </div>

            <div className="flex min-w-0 overflow-x-auto custom-scrollbar">
                {showLineNumbers && (
                    <div
                        aria-hidden
                        className="select-none border-r border-owl-border bg-owl-bg py-3 pl-3 pr-2 font-mono text-[12px] leading-6 text-owl-comment/80"
                    >
                        {Array.from({ length: lineCount }, (_, index) => (
                            <div key={index} className="text-right">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                        ))}
                    </div>
                )}
                <pre
                    ref={preRef}
                    className="m-0 min-w-0 flex-1 px-4 py-3 font-mono text-[13px] leading-6"
                >
                    {children}
                </pre>
            </div>
        </div>
    );
}

export default CodeBlock;
