export type ProjectCategory = 'Backend' | 'AI / RAG' | 'Full Stack' | 'Mobile' | 'Infrastructure' | 'Systems' | '1337';

export interface Project {
    id: string;
    name: string;
    slug: string;
    smallDescription: string;
    problem?: string;
    solution?: string;
    role?: string;
    architecture?: string;
    challenges?: string;
    imageUrl: string;
    projectUrl?: string; // GitHub
    liveUrl?: string;
    tags: string[];
    categories: ProjectCategory[];
    details: string[];
    status?: 'Completed' | 'In Progress' | 'Maintained' | 'Archived';
}

export const projects: Project[] = [
    {
        id: '1',
        name: 'GMAO SaaS Platform',
        slug: 'gmao-saas-platform',
        smallDescription: 'Industrial maintenance management system built for scalability.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
        projectUrl: 'https://github.com/ybouali',
        liveUrl: '',
        tags: ['FastAPI', 'PostgreSQL', 'Docker', 'React'],
        categories: ['Backend', 'Full Stack', 'Infrastructure'],
        details: [
            'Architected a multi-tenant backend using FastAPI and PostgreSQL.',
            'Implemented role-based access control and maintenance scheduling workflows.',
            'Containerized the entire stack for predictable deployments.',
        ],
        problem: 'Managing industrial maintenance requires coordinating between technicians, machinery state, and inventory. Existing solutions were too slow or too difficult to integrate with modern web apps.',
        solution: 'Built a modular SaaS platform focused on high-performance APIs and role-based workflows to streamline the maintenance process.',
        role: 'Full Stack / Backend Engineer',
        architecture: 'FastAPI backend handling business logic and REST endpoints, PostgreSQL for relational data mapping of tenants and maintenance logs, Docker for containerization.',
        status: 'Completed'
    },
    {
        id: '2',
        name: 'Document Processing RAG Pipeline',
        slug: 'document-processing-rag-pipeline',
        smallDescription: 'Asynchronous document ingestion and retrieval augmented generation system.',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
        projectUrl: 'https://github.com/ybouali',
        liveUrl: '',
        tags: ['Python', 'LangChain', 'Kafka', 'Temporal'],
        categories: ['AI / RAG', 'Backend', 'Systems'],
        details: [
            'Built a distributed ingestion pipeline using Temporal workflows.',
            'Integrated LangChain for semantic chunking and vector embedding.',
            'Processed complex PDF documents into structured context for LLMs.',
        ],
        problem: 'Ingesting massive amounts of unstructured PDFs for LLM context window often resulted in timeouts, lost data, and poor retrieval accuracy due to bad chunking.',
        solution: 'Designed an asynchronous, fault-tolerant ingestion pipeline. Used Temporal to orchestrate the chunking, embedding, and storing processes reliably.',
        role: 'Backend Engineer',
        architecture: 'Temporal handles workflow orchestration. Kafka manages message queues between services. LangChain provides the vectorization and chunking algorithms before storing in a vector DB.',
        status: 'Maintained'
    },
    {
        id: '3',
        name: 'SCADA Data Connector',
        slug: 'scada-data-connector',
        smallDescription: 'Real-time telemetry aggregation for industrial PLCs.',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
        projectUrl: 'https://github.com/ybouali',
        liveUrl: '',
        tags: ['Python', 'Redis', 'Kafka', 'Industrial IT'],
        categories: ['Infrastructure', 'Systems', 'Backend'],
        details: [
            'Bridged the gap between legacy industrial equipment and modern web dashboards.',
            'Handled high-throughput sensor data using Redis streams and Kafka.',
            'Ensured fault-tolerance and automatic reconnection strategies.',
        ],
        role: 'Systems Engineer',
        status: 'Completed'
    },
    {
        id: '4',
        name: 'ft_transcendence',
        slug: 'ft-transcendence',
        smallDescription: 'Real-time multiplayer Pong game with social features.',
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
        projectUrl: 'https://github.com/ybouali/ft_transcendence',
        tags: ['NestJS', 'Vue.js', 'PostgreSQL', 'WebSockets', 'Docker'],
        categories: ['Full Stack', 'Backend', '1337'],
        details: [
            'Built a complete SPA with a NestJS backend and Vue.js frontend.',
            'Implemented real-time gameplay and chat using WebSockets.',
            'Integrated OAuth2 authentication and 2FA.',
        ],
        status: 'Completed'
    },
    {
        id: '5',
        name: 'Developer Portfolio',
        slug: 'developer-portfolio',
        smallDescription: 'My personal developer portfolio.',
        imageUrl: '/assets/img/projects/protfolio.png',
        projectUrl: 'https://github.com/ybouali/ybouali',
        liveUrl: 'https://ybouali.dev',
        tags: ['TypeScript', 'React', 'TailwindCSS'],
        categories: ['Full Stack'],
        details: [
            'State-driven IDE aesthetic with proper SEO routing.',
            'Optimized for performance and accessibility.',
        ],
        status: 'Maintained'
    },
];
