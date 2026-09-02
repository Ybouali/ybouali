import { motion } from 'framer-motion';
import { MainForScreen } from '../../components';
import { projects } from '../../data/projects';
import { blogs } from '../../data/blog';
import { experiences } from '../../data/experience';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

function Main() {
    const navigate = useNavigate();
    const { pages, addPageToNavbar } = useAppContext();
    
    const handleNavigate = (path: string) => {
        const page = pages.find(p => p.path === path);
        if (page) {
            addPageToNavbar(page);
        }
        navigate(path);
    };

    const featuredProjects = projects.filter(p => ['1', '2'].includes(p.id));
    const recentBlogs = blogs.slice(0, 2);

    return (
        <MainForScreen>
            <div className="w-full max-w-4xl mx-auto py-12 px-6 flex flex-col gap-16">
                
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl md:text-5xl font-bold text-owl-text tracking-tight">Yassine Bouali</h1>
                        <h2 className="text-xl text-owl-primary font-mono">Software Engineer</h2>
                    </div>
                    <p className="text-lg text-owl-text-muted leading-relaxed max-w-2xl">
                        I build real software systems. My focus spans <span className="text-owl-keyword">Backend Engineering</span>, <span className="text-owl-string">AI / RAG Pipelines</span>, and <span className="text-owl-accent">Industrial IT</span>. I believe every piece of code deserves a second refactor.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <button onClick={() => handleNavigate('/projects')} className="px-5 py-2 bg-owl-surface hover:bg-owl-surface-hover border border-owl-border text-owl-text font-mono text-sm rounded transition-colors cursor-pointer">
                            View Projects
                        </button>
                        <button onClick={() => handleNavigate('/contact')} className="px-5 py-2 bg-transparent hover:bg-owl-surface text-owl-primary border border-owl-primary/30 font-mono text-sm rounded transition-colors cursor-pointer">
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                {/* Featured Projects */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex justify-between items-end border-b border-owl-border pb-2">
                        <h3 className="text-xl font-bold text-owl-text">Featured Projects</h3>
                        <button onClick={() => handleNavigate('/projects')} className="text-sm font-mono text-owl-text-muted hover:text-owl-primary cursor-pointer">View all →</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featuredProjects.map(project => (
                            <div key={project.id} className="bg-owl-surface border border-owl-border rounded p-5 flex flex-col gap-4 hover:border-owl-keyword transition-colors group cursor-pointer" onClick={() => handleNavigate(`/projects`)}>
                                <div>
                                    <h4 className="text-lg font-bold text-owl-primary group-hover:text-owl-keyword transition-colors">{project.name}</h4>
                                    <p className="text-sm text-owl-text-muted mt-2 line-clamp-2">{project.smallDescription}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-owl-bg text-owl-keyword rounded border border-owl-keyword/20">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Preview */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex justify-between items-end border-b border-owl-border pb-2">
                        <h3 className="text-xl font-bold text-owl-text">Experience</h3>
                        <button onClick={() => handleNavigate('/about')} className="text-sm font-mono text-owl-text-muted hover:text-owl-primary cursor-pointer">About me →</button>
                    </div>
                    <div className="flex flex-col gap-4">
                        {experiences.map(exp => (
                            <div key={exp.id} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 bg-owl-surface p-4 rounded border border-owl-border">
                                <div className="text-sm font-mono text-owl-text-muted min-w-[120px] pt-1">
                                    {exp.startDate} — {exp.endDate}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-owl-text">{exp.role}</h4>
                                    <div className="text-sm text-owl-primary font-mono mb-2">{exp.organization}</div>
                                    <p className="text-sm text-owl-text-muted">{exp.responsibilities[0]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Latest Writing */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-6 mb-12"
                >
                    <div className="flex justify-between items-end border-b border-owl-border pb-2">
                        <h3 className="text-xl font-bold text-owl-text">Writing</h3>
                        <button onClick={() => handleNavigate('/blog')} className="text-sm font-mono text-owl-text-muted hover:text-owl-primary cursor-pointer">Read all →</button>
                    </div>
                    <div className="flex flex-col gap-4">
                        {recentBlogs.map(blog => (
                            <div key={blog.id} className="group cursor-pointer flex flex-col gap-1" onClick={() => handleNavigate(`/blog`)}>
                                <h4 className="text-lg font-bold text-owl-text group-hover:text-owl-primary transition-colors">{blog.title}</h4>
                                <div className="flex items-center gap-3 text-xs font-mono text-owl-text-muted">
                                    <span>{blog.date}</span>
                                    <span className="text-owl-keyword">{blog.category}</span>
                                    <span>{blog.readingTime}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </MainForScreen>
    );
}

export default Main;
