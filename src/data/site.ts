import siteData from "./site.json";

export interface SiteContent {
  "@type": string;
  "@id": string;
  name: string;
  role: string;
  url: string;
  image: string[];
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
    x: string;
  };
  sameAs: string[];
  knowsAbout: string[];
  skills: Record<string, string[]>;
}

export const site: SiteContent = siteData as SiteContent;
