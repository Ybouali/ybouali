import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import CodeBlock from './CodeBlock';
import {
    createHeadingIdFactory,
    reactNodeToText,
} from '../utils/markdown';

type MarkdownBodyProps = {
    content: string;
    className?: string;
};

type CalloutKind = 'note' | 'warning' | 'important' | 'quote';

function detectCallout(text: string): CalloutKind {
    const start = text.trimStart().toLowerCase();
    if (start.startsWith('warning:') || start.startsWith('caution:')) {
        return 'warning';
    }
    if (start.startsWith('important:') || start.startsWith('danger:')) {
        return 'important';
    }
    if (start.startsWith('note:') || start.startsWith('tip:')) {
        return 'note';
    }
    return 'quote';
}

const CALLOUT_STYLES: Record<CalloutKind, string> = {
    quote: 'border-owl-purple text-owl-text-muted',
    note: 'border-owl-cyan bg-owl-cyan/5 text-owl-text',
    warning: 'border-owl-warning bg-owl-warning/5 text-owl-text',
    important: 'border-owl-error bg-owl-error/5 text-owl-text',
};

function MarkdownBody({ content, className = '' }: MarkdownBodyProps) {
    const headingId = createHeadingIdFactory();

    const components: Components = {
        h1: ({ children }) => (
            <h1 className="mt-10 mb-4 scroll-mt-24 text-2xl font-bold tracking-tight text-owl-text md:text-3xl">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2
                id={headingId(reactNodeToText(children))}
                className="mt-10 mb-3 scroll-mt-24 border-b border-owl-border pb-2 text-xl font-semibold tracking-tight text-owl-text md:text-2xl"
            >
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3
                id={headingId(reactNodeToText(children))}
                className="mt-8 mb-2 scroll-mt-24 text-lg font-semibold text-owl-cyan md:text-xl"
            >
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="mt-6 mb-2 scroll-mt-24 font-semibold text-owl-blue">
                {children}
            </h4>
        ),
        p: ({ children }) => (
            <p className="my-4 text-base leading-8 text-owl-text/90 md:text-[1.05rem]">
                {children}
            </p>
        ),
        a: ({ href, children }) => {
            const external = Boolean(href && /^https?:\/\//.test(href));
            return (
                <a
                    href={href}
                    className="text-owl-blue underline decoration-owl-blue/40 underline-offset-2 transition-colors hover:text-owl-cyan hover:decoration-owl-cyan"
                    {...(external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                >
                    {children}
                </a>
            );
        },
        strong: ({ children }) => (
            <strong className="font-semibold text-owl-orange">{children}</strong>
        ),
        em: ({ children }) => <em className="text-owl-text">{children}</em>,
        code: ({ className: codeClass, children }) => {
            const isBlock = Boolean(
                codeClass &&
                    (codeClass.includes('hljs') ||
                        codeClass.includes('language-'))
            );
            if (isBlock) {
                return (
                    <code
                        className={`${codeClass ?? ''} font-mono text-[13px] leading-6`}
                    >
                        {children}
                    </code>
                );
            }
            return (
                <code className="rounded-sm border border-owl-border bg-owl-bg px-1.5 py-0.5 font-mono text-[0.85em] text-owl-orange">
                    {children}
                </code>
            );
        },
        pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
        ul: ({ children }) => (
            <ul className="my-4 list-disc space-y-2 pl-5 text-owl-text/90 marker:text-owl-purple">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="my-4 list-decimal space-y-2 pl-5 text-owl-text/90 marker:text-owl-cyan">
                {children}
            </ol>
        ),
        li: ({ children }) => <li className="pl-1 leading-7">{children}</li>,
        blockquote: ({ children }) => {
            const kind = detectCallout(reactNodeToText(children));
            return (
                <blockquote
                    className={`my-6 border-l-2 px-4 py-3 text-[0.95rem] leading-7 ${CALLOUT_STYLES[kind]}`}
                >
                    {children}
                </blockquote>
            );
        },
        img: ({ src, alt, title }) => (
            <figure className="my-8 min-w-0">
                <img
                    src={src}
                    alt={alt ?? ''}
                    title={title}
                    className="h-auto w-full border border-owl-border object-contain"
                />
                {title && (
                    <figcaption className="mt-2 font-mono text-xs text-owl-comment">
                        {title}
                    </figcaption>
                )}
            </figure>
        ),
        hr: () => <hr className="my-10 border-owl-border" />,
        table: ({ children }) => (
            <div className="custom-scrollbar my-6 min-w-0 overflow-x-auto border border-owl-border">
                <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                    {children}
                </table>
            </div>
        ),
        thead: ({ children }) => (
            <thead className="bg-owl-surface">{children}</thead>
        ),
        th: ({ children }) => (
            <th className="border-b border-owl-border px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-wider text-owl-comment">
                {children}
            </th>
        ),
        td: ({ children }) => (
            <td className="border-b border-owl-border px-3 py-2 align-top text-owl-text/90">
                {children}
            </td>
        ),
    };

    return (
        <div className={`article-prose text-owl-text ${className}`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={components}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

export default MarkdownBody;
