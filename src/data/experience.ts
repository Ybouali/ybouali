import experienceData from './experience.json';

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

export const experiences: Experience[] = experienceData as Experience[];
