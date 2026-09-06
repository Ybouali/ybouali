import { useEffect, useState } from 'react';
import type { TocHeading } from '../../../utils/markdown';

type TableOfContentsProps = {
    headings: TocHeading[];
};

function TocLinks({
    headings,
    activeId,
    onSelect,
}: {
    headings: TocHeading[];
    activeId: string;
    onSelect: (id: string) => void;
}) {
    return (
        <ul className="flex list-none flex-col gap-1.5 p-0">
            {headings.map((heading) => {
                const isActive = heading.id === activeId;
                return (
                    <li
                        key={heading.id}
                        className={heading.level === 3 ? 'pl-3' : undefined}
                    >
                        <button
                            type="button"
                            onClick={() => onSelect(heading.id)}
                            className={`w-full cursor-pointer border-l py-0.5 pl-3 text-left font-mono text-xs leading-snug transition-colors ${
                                isActive
                                    ? 'border-owl-cyan text-owl-cyan'
                                    : 'border-owl-border text-owl-text-muted hover:border-owl-blue hover:text-owl-blue'
                            }`}
                        >
                            {heading.text}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState(headings[0]?.id ?? '');

    useEffect(() => {
        if (headings.length === 0) return undefined;

        const elements = headings
            .map((heading) => document.getElementById(heading.id))
            .filter((el): el is HTMLElement => el !== null);

        if (elements.length === 0) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    );

                if (visible[0]?.target.id) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                rootMargin: '-20% 0px -65% 0px',
                threshold: [0, 1],
            }
        );

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, [headings]);

    const scrollToHeading = (id: string) => {
        const target = document.getElementById(id);
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveId(id);
    };

    return (
        <>
            <div className="mb-8 w-full max-w-3xl xl:hidden">
                <details className="border border-owl-border bg-owl-surface">
                    <summary className="cursor-pointer px-4 py-3 font-mono text-xs uppercase tracking-widest text-owl-comment">
                        On this page
                    </summary>
                    <nav
                        aria-label="Table of contents"
                        className="border-t border-owl-border px-4 py-3"
                    >
                        <TocLinks
                            headings={headings}
                            activeId={activeId}
                            onSelect={scrollToHeading}
                        />
                    </nav>
                </details>
            </div>

            <aside className="hidden w-52 shrink-0 xl:block">
                <div className="sticky top-6">
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-owl-comment">
                        {'// on this page'}
                    </p>
                    <nav aria-label="Table of contents">
                        <TocLinks
                            headings={headings}
                            activeId={activeId}
                            onSelect={scrollToHeading}
                        />
                    </nav>
                </div>
            </aside>
        </>
    );
}

export default TableOfContents;
