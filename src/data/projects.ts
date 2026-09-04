import projectsData from './projects.json';

export type ProjectStatus = 'live' | 'dev' | 'archived';

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    tags: string[];
    status: ProjectStatus;
    featured: boolean;
    demoUrl: string;
    repoUrl: string;
    caseStudy: string;
}

export const projects: Project[] = projectsData as Project[];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectById(id: string): Project | undefined {
    return projects.find((project) => project.id === id);
}

export function uniqueProjectTags(): string[] {
    return [...new Set(projects.flatMap((project) => project.tags))].sort();
}

export function uniqueProjectTechnologies(): string[] {
    return [...new Set(projects.flatMap((project) => project.technologies))].sort();
}
