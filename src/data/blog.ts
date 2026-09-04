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
}

export const blogs: BlogPost[] = blogsData as BlogPost[];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogs.find((post) => post.slug === slug);
}
