import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useNavigate, useParams } from 'react-router-dom';
import { getProjectById } from '../../../data/projects';
import MarkdownBody from '../../../components/MarkdownBody';
import PageSeo from '../../../components/PageSeo';
import StatusBadge from './StatusBadge';
import { Card } from '../../../components';

function ProjectCaseStudy() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = id ? getProjectById(id) : undefined;

    if (!project) {
        return (
            <div className="max-w-3xl mx-auto py-16 px-2 text-center">
                <p className="font-mono text-owl-orange text-sm mb-2">
                    404 — file not found
                </p>
                <h1 className="text-2xl font-bold text-owl-text mb-4">
                    You&apos;re off the beaten path
                </h1>
                <p className="text-owl-text-muted mb-6">
                    That project id isn&apos;t in{' '}
                    <code className="text-owl-green">projects.json</code>. Maybe
                    it was never committed.
                </p>
                <button
                    type="button"
                    onClick={() => navigate('/projects')}
                    className="font-mono text-sm text-owl-blue hover:text-owl-cyan cursor-pointer"
                >
                    ← back to here-be-projects
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto pb-16">
            <PageSeo
                title={`${project.title} | Yassine Bouali`}
                description={project.description}
                path={`/projects/${project.id}`}
            />
            <button
                type="button"
                onClick={() => navigate('/projects')}
                className="inline-flex items-center gap-2 font-mono text-sm text-owl-text-muted hover:text-owl-cyan mb-6 cursor-pointer"
            >
                <ArrowLeftIcon className="w-4 h-4" />
                cd ../projects
            </button>

            <Card className="overflow-hidden p-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 md:h-72 object-cover border-b border-owl-border"
                />
                <div className="p-5 md:p-8 flex flex-col gap-5">
                    <div className="flex flex-wrap items-center gap-2">
                        <StatusBadge status={project.status} />
                        {project.featured && (
                            <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-owl-purple text-owl-bg">
                                pinned
                            </span>
                        )}
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-owl-text">
                            {project.title}
                        </h1>
                        <p className="text-owl-text-muted mt-2">
                            {project.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs font-mono px-2 py-1 bg-owl-bg text-owl-keyword rounded border border-owl-keyword/20"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-mono px-2 py-1 bg-owl-bg text-owl-purple rounded border border-owl-purple/20"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-mono text-sm text-owl-green hover:text-owl-cyan"
                            >
                                Open demo
                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                            </a>
                        )}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-mono text-sm text-owl-blue hover:text-owl-cyan"
                            >
                                View source
                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                    <div className="border-t border-owl-border pt-6">
                        <p className="font-mono text-xs text-owl-comment mb-4">
                            {'// case study'}
                        </p>
                        <MarkdownBody content={project.caseStudy} />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ProjectCaseStudy;
