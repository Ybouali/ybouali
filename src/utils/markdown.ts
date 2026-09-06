import type { ReactNode } from 'react';
import { Children, isValidElement } from 'react';

export type TocHeading = {
    id: string;
    text: string;
    level: 2 | 3;
};

export function reactNodeToText(node: ReactNode): string {
    if (node == null || typeof node === 'boolean') {
        return '';
    }
    if (typeof node === 'string' || typeof node === 'number') {
        return String(node);
    }
    if (Array.isArray(node)) {
        return node.map(reactNodeToText).join('');
    }
    if (isValidElement<{ children?: ReactNode }>(node)) {
        return reactNodeToText(node.props.children);
    }
    return '';
}

export function slugifyHeading(text: string): string {
    const slug = text
        .toLowerCase()
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

    return slug || 'section';
}

export function uniqueSlug(base: string, used: Map<string, number>): string {
    const count = used.get(base) ?? 0;
    used.set(base, count + 1);
    return count === 0 ? base : `${base}-${count + 1}`;
}

export function createHeadingIdFactory(): (text: string) => string {
    const used = new Map<string, number>();
    return (text: string) => uniqueSlug(slugifyHeading(text), used);
}

function stripCodeFences(markdown: string): string {
    return markdown.replace(/```[\s\S]*?```/g, '');
}

function cleanHeadingText(raw: string): string {
    return raw
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/[*_`~]/g, '')
        .trim();
}

export function extractHeadings(markdown: string): TocHeading[] {
    const headingId = createHeadingIdFactory();
    const headings: TocHeading[] = [];

    for (const line of stripCodeFences(markdown).split('\n')) {
        const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
        if (!match) continue;

        const level = match[1].length === 2 ? 2 : 3;
        const text = cleanHeadingText(match[2]);
        if (!text) continue;

        headings.push({
            id: headingId(text),
            text,
            level,
        });
    }

    return headings;
}

export function shouldShowToc(
    headings: TocHeading[],
    markdown: string
): boolean {
    if (headings.length >= 3) return true;

    const words = stripCodeFences(markdown)
        .split(/\s+/)
        .filter(Boolean).length;

    return headings.length >= 2 && words >= 400;
}

export function countCodeLines(children: ReactNode): number {
    const text = reactNodeToText(children).replace(/\n$/, '');
    if (!text) return 0;
    return text.split('\n').length;
}

export function extractCodeLanguage(children: ReactNode): string {
    let language = '';

    Children.forEach(children, (child) => {
        if (language) return;
        if (!isValidElement<{ className?: string; children?: ReactNode }>(child)) {
            return;
        }

        const match = /language-([\w+-]+)/.exec(child.props.className ?? '');
        if (match) {
            language = match[1];
            return;
        }

        if (child.props.children) {
            language = extractCodeLanguage(child.props.children);
        }
    });

    return language;
}
