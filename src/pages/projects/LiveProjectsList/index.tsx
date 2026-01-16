import type { CloseProject } from '../CloseProjectsList';
import ClosePItem from '../components/ClosePItem';

interface LiveProjectsListProps {
    onProjectClick: (project: CloseProject) => void;
}

function LiveProjectsList({ onProjectClick }: LiveProjectsListProps) {
    const liveProjects: CloseProject[] = [
        {
            id: 1,
            name: 'My Portfolio',
            smallDescription: 'My current portfolio',
            imageUrl: '/src/assets/img/projects/protfolio.png',
            projectUrl: 'https://github.com/Ybouali/',
            tags: ['Type script', 'react', 'vite'],
            details: [
                'Take this portfolio, make it yours, slap your info on it — go wild! 🔥💪🎨',
                'Show some love with a GitHub star pleeease 🥺👉👈✨⭐',
            ],
            liveUrl: '',
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
