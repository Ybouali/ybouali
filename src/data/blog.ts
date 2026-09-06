import blogsData from './blog.json';

export type BlogCategory = 'Engineering' | 'Ideas' | 'Universe' | 'Chaos';

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: BlogCategory;
    tags: string[];
    readingTime: string;
    featuredImage?: string;
    updatedAt?: string;
}

export const blogs: BlogPost[] = blogsData as BlogPost[];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogs.find((post) => post.slug === slug);
}

export function formatPostDate(value: string): string {
    const parsed = new Date(`${value}T00:00:00Z`);
    if (Number.isNaN(parsed.getTime())) {
        return value;
    }

    return parsed.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
    });
}

function byDateDesc(a: BlogPost, b: BlogPost): number {
    return b.date.localeCompare(a.date);
}

export function getAdjacentPosts(slug: string): {
    previous: BlogPost | undefined;
    next: BlogPost | undefined;
} {
    const ordered = [...blogs].sort(byDateDesc);
    const index = ordered.findIndex((post) => post.slug === slug);

    if (index === -1) {
        return { previous: undefined, next: undefined };
    }

    return {
        next: ordered[index - 1],
        previous: ordered[index + 1],
    };
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
    const others = blogs.filter((candidate) => candidate.id !== post.id);
    if (others.length === 0) {
        return [];
    }

    const scored = others.map((candidate) => {
        const tagScore = candidate.tags.filter((tag) =>
            post.tags.includes(tag)
        ).length;
        const categoryScore = candidate.category === post.category ? 2 : 0;
        return { candidate, score: tagScore + categoryScore };
    });

    scored.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return byDateDesc(a.candidate, b.candidate);
    });

    const related = scored.filter((item) => item.score > 0).slice(0, limit);
    if (related.length > 0) {
        return related.map((item) => item.candidate);
    }

    return [...others].sort(byDateDesc).slice(0, limit);
}
