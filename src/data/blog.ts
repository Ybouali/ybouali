export type BlogCategory = 'Engineering' | 'Ideas' | 'Universe' | 'Chaos';

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Markdown string
    date: string;
    author: string;
    category: BlogCategory;
    tags: string[];
    readingTime: string;
    featuredImage?: string;
}

export const blogs: BlogPost[] = [
    {
        id: '1',
        slug: 'why-i-redesigned-my-portfolio',
        title: 'Why I Redesigned My Portfolio – From Inspiration to Identity',
        excerpt: 'That old portfolio? 😏 Definitely not me! (UI) 🚀',
        date: '2026-01-17',
        author: 'Yassine Bouali',
        category: 'Ideas',
        tags: ['Design', 'Personal', 'Portfolio'],
        readingTime: '3 min read',
        content: `
The old portfolio wasn't really mine.
It was someone else's layout I liked to inspire from it.
Nothing wrong with it — but it never felt personal.

So I started over.
I wanted something that actually feels like me.
Something built from scratch, with my own flow and my own voice.
No borrowed pieces this time.

Just clean, honest lines that tell my story.

### The Night Owl Shift

I spend 90% of my time inside an IDE (specifically, with the Night Owl theme). It's calm, it's focused, and the syntax highlighting makes sense. 
I realized my portfolio shouldn't just be a corporate landing page; it should reflect the environment where I do my best work.

So, I brought the editor to the web.

\`\`\`typescript
const me = {
  role: "Software Engineer",
  focus: ["Backend", "AI/RAG", "Industrial IT"],
  status: "Building"
};
\`\`\`

This is me now.
Welcome inside.
`
    }
];
