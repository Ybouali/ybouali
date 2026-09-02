import type { CloseProject } from '../pages/projects/CloseProjectsList';

import fProjectImage from '/assets/img/projects/protfolio.png';

export const liveProjects: CloseProject[] = [
    {
        id: 1,
        name: 'GMAO SaaS Platform',
        smallDescription: 'Industrial maintenance management system built for scalability.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
        projectUrl: 'https://github.com/ybouali',
        tags: ['FastAPI', 'PostgreSQL', 'Docker', 'React'],
        details: [
            'Architected a multi-tenant backend using FastAPI and PostgreSQL.',
            'Implemented role-based access control and maintenance scheduling workflows.',
            'Containerized the entire stack for predictable deployments.',
        ],
        liveUrl: '',
    },
    {
        id: 2,
        name: 'Document Processing RAG Pipeline',
        smallDescription: 'Asynchronous document ingestion and retrieval augmented generation system.',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
        projectUrl: 'https://github.com/ybouali',
        tags: ['Python', 'LangChain', 'Kafka', 'Temporal'],
        details: [
            'Built a distributed ingestion pipeline using Temporal workflows.',
            'Integrated LangChain for semantic chunking and vector embedding.',
            'Processed complex PDF documents into structured context for LLMs.',
        ],
        liveUrl: '',
    },
    {
        id: 3,
        name: 'SCADA Data Connector',
        smallDescription: 'Real-time telemetry aggregation for industrial PLCs.',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
        projectUrl: 'https://github.com/ybouali',
        tags: ['Python', 'Redis', 'Kafka', 'Industrial IT'],
        details: [
            'Bridged the gap between legacy industrial equipment and modern web dashboards.',
            'Handled high-throughput sensor data using Redis streams and Kafka.',
            'Ensured fault-tolerance and automatic reconnection strategies.',
        ],
        liveUrl: '',
    },
    {
        id: 4,
        name: 'Developer Portfolio',
        smallDescription: 'My personal developer portfolio.',
        imageUrl: fProjectImage,
        projectUrl: 'https://github.com/Ybouali/ybouali',
        tags: ['TypeScript', 'React', 'TailwindCSS'],
        details: [
            'State-driven IDE aesthetic with proper SEO routing.',
            'Optimized for performance and accessibility.',
        ],
        liveUrl: 'https://ybouali.dev',
    },
];
