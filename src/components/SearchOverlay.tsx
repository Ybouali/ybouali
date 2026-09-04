import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { projects } from '../data/projects';
import { blogs } from '../data/blog';
import { useAppContext } from '../context/AppContext';

export default function SearchOverlay() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const { addPageToNavbar, pages } = useAppContext();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => {
                    if (!prev) setQuery('');
                    return !prev;
                });
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
                setQuery('');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    const results: {
        type: string;
        title: string;
        desc: string;
        url: string;
        tab: string;
    }[] = [];
    if (query.trim().length > 0) {
        const lowerQuery = query.toLowerCase();

        projects.forEach((p) => {
            if (
                p.title.toLowerCase().includes(lowerQuery) ||
                p.description.toLowerCase().includes(lowerQuery) ||
                p.tags.some((t) => t.toLowerCase().includes(lowerQuery)) ||
                p.technologies.some((t) => t.toLowerCase().includes(lowerQuery))
            ) {
                results.push({
                    type: 'PROJECT',
                    title: p.title,
                    desc: p.description,
                    url: `/projects/${p.id}`,
                    tab: '/projects',
                });
            }
        });

        blogs.forEach((b) => {
            if (
                b.title.toLowerCase().includes(lowerQuery) ||
                b.excerpt.toLowerCase().includes(lowerQuery)
            ) {
                results.push({
                    type: 'ARTICLE',
                    title: b.title,
                    desc: b.excerpt,
                    url: `/blog/${b.slug}`,
                    tab: '/blog',
                });
            }
        });
    }

    const handleSelect = (url: string, tab: string) => {
        setIsOpen(false);
        setQuery('');
        const page = pages.find((p) => p.path === tab);
        if (page) {
            addPageToNavbar(page);
        }
        navigate(url);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-[100]"
                        onClick={() => {
                            setIsOpen(false);
                            setQuery('');
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.15 }}
                        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-owl-surface border border-owl-border rounded-lg shadow-2xl z-[101] overflow-hidden flex flex-col max-h-[60vh]"
                    >
                        <div className="flex items-center px-4 py-3 border-b border-owl-border">
                            <MagnifyingGlassIcon className="w-5 h-5 text-owl-text-muted mr-3" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search the workspace…"
                                className="flex-1 bg-transparent border-none outline-none text-owl-text placeholder-owl-text-muted font-mono"
                            />
                            <div className="text-xs text-owl-text-muted font-mono bg-owl-bg px-2 py-1 rounded border border-owl-border">
                                ESC
                            </div>
                        </div>

                        {query.trim().length > 0 && (
                            <div className="overflow-y-auto custom-scrollbar flex-1 p-2">
                                {results.length > 0 ? (
                                    results.map((r, i) => (
                                        <div
                                            key={`${r.type}-${r.url}-${i}`}
                                            onClick={() =>
                                                handleSelect(r.url, r.tab)
                                            }
                                            className="px-4 py-3 hover:bg-owl-surface-hover cursor-pointer rounded-md flex flex-col gap-1 transition-colors"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold text-owl-keyword uppercase tracking-wider">
                                                    {r.type}
                                                </span>
                                                <span className="text-owl-blue font-medium">
                                                    {r.title}
                                                </span>
                                            </div>
                                            <span className="text-sm text-owl-text-muted line-clamp-1">
                                                {r.desc}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-8 text-center text-owl-text-muted text-sm">
                                        No results for &quot;{query}&quot; —
                                        you&apos;re off the beaten path.
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
