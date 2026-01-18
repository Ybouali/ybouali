import type { BlogPost } from '../pages/blogs/ListBlogs';

import homeImage from '/assets/img/blog/why/home.png';
import projectsImage from '/assets/img/blog/why/projects.png';
import contactMeImage from '/assets/img/blog/why/contact_me.png';

export const posts: BlogPost[] = [
    {
        title: 'Why I Redesesign My Portfolio – From Inspiration to Identity',
        titleFile: 'Why I Redesesign',
        blurb: 'That old portfolio? 😏 Definitely not me! (UI) 🚀',

        content: `The old portfolio wasn’t really mine.
        It was someone else’s layout I liked to inspire from it.
        Nothing wrong with it — but it never felt personal.

        So I started over.
        I wanted something that actually feels like me.
        Something built from scratch, with my own flow and my own voice.
        No borrowed pieces this time.

        Just clean, honest lines that tell my story.

        This is me now.
        Welcome inside.`,
        date: '2026-01-17',
        author: 'Author',
        imageUrl: [homeImage, projectsImage, contactMeImage],
    },
];
