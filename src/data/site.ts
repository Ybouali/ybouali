import siteData from './site.json';

export interface SiteContent {
    name: string;
    role: string;
    location: string;
    since: string;
    mantra: string;
    principle: string;
    about: string;
    hero: string;
    statusLine: string;
    email: string;
    photo: string;
    photoHover: string;
    cvUrl: string;
    cvPdfUrl: string;
    socials: {
        github: string;
        linkedin: string;
        instagram: string;
    };
    skills: Record<string, string[]>;
}

export const site: SiteContent = siteData as SiteContent;
