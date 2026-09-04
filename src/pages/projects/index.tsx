import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
    DeveloperInfo,
    ExportDefault,
    ImportDisplay,
    MainForScreen,
} from '../../components';
import PageSeo from '../../components/PageSeo';
import {
    projects,
    uniqueProjectTags,
    uniqueProjectTechnologies,
    type ProjectStatus,
} from '../../data/projects';
import ProjectCard from './components/ProjectCard';
import ProjectCaseStudy from './components/ProjectCaseStudy';

const STATUS_FILTERS: { id: 'all' | ProjectStatus; label: string }[] = [
    { id: 'all', label: 'all' },
    { id: 'live', label: 'live' },
    { id: 'dev', label: 'wip' },
    { id: 'archived', label: 'archived' },
];

function Projects() {
    const { id } = useParams();
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState<'all' | ProjectStatus>('all');
    const [tag, setTag] = useState<string | null>(null);
    const [tech, setTech] = useState<string | null>(null);

    const tags = useMemo(() => uniqueProjectTags(), []);
    const techs = useMemo(() => uniqueProjectTechnologies(), []);

    const filtered = useMemo(() => {
        const needle = query.trim().toLowerCase();
        return projects.filter((project) => {
            if (status !== 'all' && project.status !== status) return false;
            if (tag && !project.tags.includes(tag)) return false;
            if (tech && !project.technologies.includes(tech)) return false;
            if (!needle) return true;
            const haystack = [
                project.title,
                project.description,
                ...project.tags,
                ...project.technologies,
            ]
                .join(' ')
                .toLowerCase();
            return haystack.includes(needle);
        });
    }, [query, status, tag, tech]);

    const featured = filtered.filter((project) => project.featured);
    const rest = filtered.filter((project) => !project.featured);

    return (
        <MainForScreen>
            {!id && (
                <PageSeo
                    title="Projects | Yassine Bouali"
                    description="Here be projects — a Night Owl catalogue of systems, experiments, and 1337-era spells."
                    path="/projects"
                />
            )}
            <div className="w-full max-w-6xl mx-auto pb-16">
                <div className="flex flex-col items-start gap-6">
                    <DeveloperInfo
                        labelOne="from"
                        labelTwo="description"
                        valueOne="projects.json"
                        valueTwo={
                            id
                                ? 'A single file from the spellbook'
                                : 'Here be projects'
                        }
                    />
                    <ImportDisplay
                        imports={['projects']}
                        fromPath="./data/projects.json"
                    />

                    {id ? (
                        <ProjectCaseStudy />
                    ) : (
                        <>
                            <div className="w-full flex flex-col gap-4">
                                <p className="text-owl-text-muted max-w-2xl">
                                    Every card below is a record in{' '}
                                    <span className="font-mono text-owl-green">
                                        src/data/projects.json
                                    </span>
                                    . Edit the JSON, refresh, ship. No JSX
                                    archaeology required.
                                </p>

                                <div className="flex items-center gap-3 bg-owl-surface border border-owl-border rounded-lg px-3 py-2">
                                    <MagnifyingGlassIcon className="w-5 h-5 text-owl-text-muted shrink-0" />
                                    <input
                                        value={query}
                                        onChange={(e) =>
                                            setQuery(e.target.value)
                                        }
                                        placeholder="grep -i 'rag | docker | pong'"
                                        className="flex-1 bg-transparent outline-none text-owl-text placeholder:text-owl-text-muted font-mono text-sm"
                                    />
                                    <span className="hidden sm:inline text-[10px] font-mono text-owl-text-muted border border-owl-border rounded px-1.5 py-0.5">
                                        {filtered.length} files
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {STATUS_FILTERS.map((filter) => (
                                        <button
                                            key={filter.id}
                                            type="button"
                                            onClick={() =>
                                                setStatus(filter.id)
                                            }
                                            className={`font-mono text-xs px-3 py-1.5 rounded border cursor-pointer transition-colors ${
                                                status === filter.id
                                                    ? 'bg-owl-blue text-owl-bg border-owl-blue'
                                                    : 'bg-owl-surface text-owl-text-muted border-owl-border hover:border-owl-cyan hover:text-owl-cyan'
                                            }`}
                                        >
                                            {filter.label}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {tags.map((item) => (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() =>
                                                setTag(
                                                    tag === item ? null : item
                                                )
                                            }
                                            className={`font-mono text-[11px] px-2 py-1 rounded border cursor-pointer ${
                                                tag === item
                                                    ? 'border-owl-purple text-owl-purple bg-owl-purple/10'
                                                    : 'border-owl-border text-owl-text-muted hover:border-owl-purple hover:text-owl-purple'
                                            }`}
                                        >
                                            #{item}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {techs.map((item) => (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() =>
                                                setTech(
                                                    tech === item ? null : item
                                                )
                                            }
                                            className={`font-mono text-[11px] px-2 py-1 rounded border cursor-pointer ${
                                                tech === item
                                                    ? 'border-owl-keyword text-owl-keyword bg-owl-keyword/10'
                                                    : 'border-owl-border text-owl-text-muted hover:border-owl-keyword hover:text-owl-keyword'
                                            }`}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {filtered.length === 0 ? (
                                <div className="w-full py-16 text-center border border-dashed border-owl-border rounded-lg">
                                    <p className="font-mono text-owl-orange mb-2">
                                        0 matches
                                    </p>
                                    <p className="text-owl-text-muted">
                                        No spells in this grep. Try a broader
                                        incantation — or you&apos;re off the
                                        beaten path.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    {featured.length > 0 &&
                                        status === 'all' &&
                                        !query &&
                                        !tag &&
                                        !tech && (
                                            <section className="w-full">
                                                <h2 className="font-mono text-sm text-owl-comment mb-4">
                                                    {'// pinned'}
                                                </h2>
                                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                                                    {featured.map((project) => (
                                                        <ProjectCard
                                                            key={project.id}
                                                            project={project}
                                                        />
                                                    ))}
                                                </div>
                                            </section>
                                        )}

                                    <section className="w-full">
                                        {featured.length > 0 &&
                                        status === 'all' &&
                                        !query &&
                                        !tag &&
                                        !tech ? (
                                            <h2 className="font-mono text-sm text-owl-comment mb-4">
                                                {'// the rest of the tree'}
                                            </h2>
                                        ) : null}
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                                            {(featured.length > 0 &&
                                            status === 'all' &&
                                            !query &&
                                            !tag &&
                                            !tech
                                                ? rest
                                                : filtered
                                            ).map((project) => (
                                                <ProjectCard
                                                    key={project.id}
                                                    project={project}
                                                />
                                            ))}
                                        </div>
                                    </section>
                                </>
                            )}
                        </>
                    )}

                    <ExportDefault
                        moduleName={id ? id.replace(/-/g, '_') : 'Projects'}
                    />
                </div>
            </div>
        </MainForScreen>
    );
}

export default Projects;
