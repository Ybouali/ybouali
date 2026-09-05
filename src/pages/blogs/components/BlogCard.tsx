import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { BlogPost } from '../../../data/blog';
import { useAppContext } from '../../../context/useAppContext';

type BlogCardProps = {
    post: BlogPost;
    index: number;
};

function BlogCard({ post, index }: BlogCardProps) {
    const { pages, addPageToNavbar } = useAppContext();

    const openArticle = () => {
        const page = pages.find((p) => p.path === '/blog');
        if (page) addPageToNavbar(page);
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="h-full min-w-0"
        >
            <Link
                to={`/blog/${post.slug}`}
                onClick={openArticle}
                className="group flex h-full min-w-0 flex-col rounded-lg border border-owl-border bg-owl-surface p-5 shadow-sm shadow-black/10 transition-colors duration-300 hover:border-owl-blue/50 hover:bg-owl-surface-hover"
                aria-label={`Read article: ${post.title}`}
            >
                <div className="flex flex-col gap-3 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-mono text-xs uppercase tracking-widest text-owl-purple">
                            {'// '}
                            {post.category}
                        </span>
                        <time
                            dateTime={post.date}
                            className="font-mono text-xs text-owl-comment"
                        >
                            {post.date}
                        </time>
                    </div>

                    <h3 className="text-base md:text-lg font-semibold text-owl-text leading-snug tracking-tight group-hover:text-owl-cyan transition-colors">
                        {post.title}
                    </h3>

                    <p className="text-sm text-owl-text-muted leading-relaxed line-clamp-3">
                        {post.excerpt}
                    </p>

                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="font-mono text-[10px] text-owl-keyword px-2 py-0.5 bg-owl-bg border border-owl-keyword/20 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-4 pt-3 border-t border-owl-border flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-owl-blue group-hover:text-owl-cyan transition-colors">
                        Read article
                    </span>
                    {post.readingTime && (
                        <span className="font-mono text-[10px] text-owl-comment">
                            {post.readingTime}
                        </span>
                    )}
                </div>
            </Link>
        </motion.article>
    );
}

export default BlogCard;
