import type { CloseProject } from '../pages/projects/CloseProjectsList';

import fProjectImage from '/assets/img/projects/protfolio.png';

export const liveProjects: CloseProject[] = [
    {
        id: 1,
        name: 'My Portfolio',
        smallDescription: 'My current portfolio',
        imageUrl: fProjectImage,
        projectUrl: 'https://github.com/Ybouali/ybouali',
        tags: ['Type script', 'react', 'vite'],
        details: [
            'Take this portfolio, make it yours, slap your info on it — go wild! 🔥💪🎨',
            'Show some love with a GitHub star pleeease 🥺👉👈✨⭐',
        ],
        liveUrl: '',
    },
];
