import whoIAmData from './who-i-am.json';

export interface Developer {
    name: string;
    role: string;
    focus: string[];
    introduction: string;
}

export interface JourneyStage {
    date: string;
    category: string;
    title: string;
    organization: string;
    description: string;
    technologies: string[];
    current: boolean;
}

export interface WhatIBuildCategory {
    category: string;
    description: string;
}

export interface TechStack {
    [key: string]: string[];
}

export interface WhoIAm {
    developer: Developer;
    philosophy: string[];
    journey: JourneyStage[];
    whatIBuild: WhatIBuildCategory[];
    currentFocus: string[];
    techStack: TechStack;
    easterEggs: string[];
}

export const whoIAm: WhoIAm = whoIAmData;
