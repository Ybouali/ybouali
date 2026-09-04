import educationData from './education.json';

export interface Education {
    id: string;
    school: string;
    dates: string;
    description: string;
    degree: string;
    fieldOfStudy: string;
    location: string;
    urlSchool: string;
    urlLogo: string;
}

export const educations: Education[] = educationData as Education[];
