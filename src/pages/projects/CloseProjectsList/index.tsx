import ClosePItem from './ClosePItem';

export interface CloseProject {
    id: number;
    name: string;
    smallDescription: string;
    imageUrl: string;
    projectUrl: string;
    tags: string[];
    details: string[];
}

interface CloseProjectsListProps {
    onProjectClick: (id: number) => void;
}

function CloseProjectsList({ onProjectClick }: CloseProjectsListProps) {
    const closeProjects: CloseProject[] = [
        {
            id: 1,
            name: 'Dining Philosophers',
            smallDescription:
                'Five guys, five forks, zero starvation. I made them behave.',
            imageUrl:
                'https://assets.leetcode.com/uploads/2019/09/24/an_illustration_of_the_dining_philosophers_problem.png',
            projectUrl: 'https://github.com/Ybouali/Philosopher',
            tags: ['C++', 'threads', 'deadlock'],
            details: [
                "One mutex wasn't enough—so I invented a waiter.",
                'They eat forever now. No drama.',
                "Click 'replay crash' to watch them choke first.",
            ],
        },

        {
            id: 2,
            name: 'Docker Inception',
            smallDescription:
                "Six containers in one box: WordPress thinks it's alone, Redis thinks it's the boss.",
            imageUrl: 'https://cestoliv.com/projects/imgs/42/inception.webp',
            projectUrl: 'https://github.com/Ybouali/Inception',
            tags: [
                'Docker',
                'Redis',
                'Nginx',
                'MariaDB',
                'WordPress',
                'FTPS',
                'Adminer',
            ],
            details: [
                'Everything talks. No one crashes. Magic.',
                'Run make up and it just... works.',
                'Docker Compose file is tiny—feels like cheating.',
            ],
        },

        {
            id: 3,
            name: 'STL from Scratch',
            smallDescription: 'Map, vector, stack—I wrote them. GCC cried.',
            imageUrl:
                'https://codedamn-blog.s3.amazonaws.com/wp-content/uploads/2022/11/22002523/STL-in-C.jpg',
            projectUrl: 'https://github.com/noone/mystl',
            tags: ['C++17', 'allocator', 'no libc++'],
            details: [
                'No templates stolen. All original pain.',
                'Faster insert? Yeah. Memory leak? Nope.',
                'Compile it. Run it. Hate me.',
            ],
        },

        {
            id: 4,
            name: 'MiniShell',
            smallDescription:
                'A shell that survives cat | wc | grep. My cat survived too.',
            imageUrl:
                'https://builtin.com/sites/www.builtin.com/files/2023-01/terminal-commands.jpg',
            projectUrl: 'https://github.com/noone/minish',
            tags: ['C', 'POSIX', 'signals'],
            details: [
                'Pipes, quotes, jobs—full Bourne.',
                'SIGINT works. SIGTSTP too. No segfaults.',
                'Try: ping google &; now kill me.',
            ],
        },

        {
            id: 5,
            name: 'FT-WebServer',
            smallDescription:
                "Built Nginx in C++. Served 500 sim users. Zero leaks. I'm tired.",
            imageUrl:
                'https://webhostinggeeks.com/blog/wp-content/uploads/2023/05/Nginx_server.png',
            projectUrl: 'https://github.com/noone/ftserver',
            tags: ['C++', 'epoll', 'HTTP'],
            details: [
                'Event loop. No threads. 8kb code.',
                './ftserver :8080 — then hit it with siege.',
                'It laughed. Then answered. Then I went to sleep.',
            ],
        },
    ];

    return (
        <div className="flex flex-col  mt-8 px-4 gap-4 w-full ">
            {closeProjects.map((project) => (
                <ClosePItem
                    key={project.id}
                    project={project}
                    onClick={onProjectClick}
                />
            ))}
        </div>
    );
}

export default CloseProjectsList;
