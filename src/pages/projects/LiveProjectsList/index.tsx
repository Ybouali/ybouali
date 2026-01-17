import { liveProjects } from '../../../data/LiveProject';
import type { CloseProject } from '../CloseProjectsList';
import ClosePItem from '../components/ClosePItem';

interface LiveProjectsListProps {
    onProjectClick: (project: CloseProject) => void;
}

function LiveProjectsList({ onProjectClick }: LiveProjectsListProps) {
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
