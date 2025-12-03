import type { CloseProject } from '../CloseProjectsList';
import ClosePItem from '../components/ClosePItem';

interface LiveProjectsListProps {
    onProjectClick: (project: CloseProject) => void;
}

function LiveProjectsList({ onProjectClick }: LiveProjectsListProps) {
    const liveProjects: CloseProject[] = [
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
            liveUrl: 'https://example.com/dining-philosophers',
        },
    ];

    return (
        <div className="flex flex-col  mt-8 px-4 gap-4 w-full ">
            {liveProjects.map((project) => (
                <ClosePItem
                    key={project.id}
                    project={project}
                    onClick={onProjectClick}
                />
            ))}
        </div>
    );
}

export default LiveProjectsList;
