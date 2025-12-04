import type { BlogPost } from '../pages/blogs/ListBlogs';

export const posts: BlogPost[] = [
    {
        title: 'The Future of AI in Everyday Life',
        blurb: 'Exploring how AI tools like Grok are changing how we work and play.',
        whyItMatters:
            'Understanding AI helps you stay ahead in a tech-driven world, boosting productivity and creativity.',
        content:
            'Full post content here: AI is evolving rapidly. Tools like Grok from xAI are making complex tasks simpler. For example, in coding, AI can suggest interfaces like this one. In daily life, it assists with planning and creativity. The key is ethical integration...',
        date: '2025-12-04',
        author: 'You',
        tags: ['AI', 'tech', 'future'],
        imageUrl: '/images/ai-future.jpg',
    },
    {
        title: 'Building Your First Blog with TypeScript',
        blurb: "A beginner's guide to setting up interfaces and rendering content.",
        whyItMatters:
            'Strong typing prevents errors and makes your code scalable as your blog grows.',
        content:
            'Full post content here: Start by defining your interfaces in TypeScript. For a blog, include fields like title, blurb, and content. Then, create an array of posts and render them in React. Add optional fields for dates and tags to enhance functionality...',
        date: '2025-11-28',
        tags: ['TypeScript', 'web-dev', 'blogging'],
        imageUrl: '/images/typescript-blog.jpg',
    },
];
