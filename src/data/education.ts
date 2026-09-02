export interface Education {
    id: string;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    description: string;
}

export const educations: Education[] = [
    {
        id: '1',
        institution: '1337 Coding School (UM6P)',
        degree: 'Software Engineering',
        fieldOfStudy: 'Computer Science',
        startDate: '2022',
        endDate: 'Present',
        description: 'Peer-to-peer software engineering school. Developed a deep understanding of C/C++, algorithms, system programming, networking, and modern web architectures through hands-on project-based learning.'
    },
    // Adding placeholder for any other implied degrees if any, but sticking to 1337 as requested.
];
