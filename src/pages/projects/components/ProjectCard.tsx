import { useNavigate } from 'react-router-dom';
import type { Project } from '../../../data/projects';
import StatusBadge from './StatusBadge';
import { useAppContext } from '../../../context/useAppContext';

type ProjectCardProps = {
    project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
    const navigate = useNavigate();
    const { pages, addPageToNavbar } = useAppContext();

    const openProject = () => {
        const page = pages.find((p) => p.path === '/projects');
        if (page) addPageToNavbar(page);
        navigate(`/projects/${project.id}`);
    };

    return (
        <article
            onClick={openProject}
            className="group cursor-pointer bg-owl-surface border border-owl-border rounded-lg overflow-hidden hover:border-owl-cyan/60 transition-colors flex flex-col h-full"
        >
            <div className="relative aspect-[16/9] overflow-hidden bg-owl-bg">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                    <StatusBadge status={project.status} />
                    {project.featured && (
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-owl-purple text-owl-bg">
                            pinned
                        </span>
                    )}
                </div>
            </div>
            <div className="p-4 flex flex-col gap-3 flex-1">
                <div>
                    <h3 className="text-lg font-semibold text-owl-blue group-hover:text-owl-cyan transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-owl-text-muted mt-2 line-clamp-3">
                        {project.description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-1 bg-owl-bg text-owl-keyword rounded border border-owl-keyword/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
