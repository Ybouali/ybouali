export interface Experience {
    id: string;
    organization: string;
    role: string;
    startDate: string;
    endDate: string;
    technologies: string[];
    responsibilities: string[];
    url?: string;
}

export const experiences: Experience[] = [
    {
        id: '1',
        organization: 'Koolskools',
        role: 'Full Stack Engineer',
        startDate: '2023', // Update with actual date if known, user didn't specify beyond existing Koolskools exp.
        endDate: 'Present',
        technologies: ['FastAPI', 'React', 'PostgreSQL', 'Docker'],
        responsibilities: [
            'Architected and implemented a scalable GMAO SaaS platform for industrial maintenance.',
            'Developed high-performance backend APIs utilizing FastAPI and PostgreSQL.',
            'Containerized infrastructure using Docker for seamless deployments.'
        ],
        url: 'https://koolskools.com' // Example, can be removed if not needed
    },
    // We can add more based on user's actual CV, but for now we centralize what is available/implied.
];
