import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

type MarkdownBodyProps = {
    content: string;
    className?: string;
};

function MarkdownBody({ content, className = '' }: MarkdownBodyProps) {
    return (
        <div
            className={`prose-owl text-owl-text leading-relaxed space-y-4 ${className}`}
        >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                    h2: ({ children }) => (
                        <h2 className="text-xl font-semibold text-owl-green mt-8 mb-3">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-lg font-semibold text-owl-cyan mt-6 mb-2">
                            {children}
                        </h3>
                    ),
                    p: ({ children }) => (
                        <p className="text-owl-text/90">{children}</p>
                    ),
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            className="text-owl-blue hover:text-owl-cyan underline underline-offset-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {children}
                        </a>
                    ),
                    strong: ({ children }) => (
                        <strong className="text-owl-orange font-semibold">
                            {children}
                        </strong>
                    ),
                    code: ({ className: codeClass, children }) => {
                        const isBlock = Boolean(codeClass);
                        if (!isBlock) {
                            return (
                                <code className="font-mono text-sm text-owl-orange bg-owl-bg px-1.5 py-0.5 rounded border border-owl-border">
                                    {children}
                                </code>
                            );
                        }
                        return (
                            <code className={`${codeClass} font-mono text-sm`}>
                                {children}
                            </code>
                        );
                    },
                    pre: ({ children }) => (
                        <pre className="bg-owl-bg border border-owl-border rounded-md p-4 overflow-x-auto custom-scrollbar text-sm">
                            {children}
                        </pre>
                    ),
                    ul: ({ children }) => (
                        <ul className="list-disc pl-5 space-y-1 text-owl-text/90">
                            {children}
                        </ul>
                    ),
                    li: ({ children }) => (
                        <li className="marker:text-owl-purple">{children}</li>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

export default MarkdownBody;
