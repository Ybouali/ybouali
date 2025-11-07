interface IconsTypeProject  {
    languageC?: boolean;
    languageCPP?: boolean;
    redisTec?: boolean;
    wordPressTec?: boolean;
    ftpTec?: boolean;
    adminerTec?: boolean;
    pontainerTec?: boolean;
    tailwindcss?: boolean;
    languageTS?: boolean;
    languageJS?: boolean;
    mariadb?: boolean;
    docker?: boolean;
    react?: boolean;
    nginx?: boolean;
    flutterTec?: boolean;
}

interface ProjectType {
    title: string;
    description: string;
    linkGithubProject: string;
    Icons: IconsTypeProject;
}

export interface ProjectCardType {
    mode: boolean;
    data: ProjectType;
}
