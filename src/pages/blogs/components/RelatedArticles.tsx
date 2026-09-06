import type { BlogPost } from '../../../data/blog';
import BlogCard from './BlogCard';

type RelatedArticlesProps = {
    posts: BlogPost[];
};

function RelatedArticles({ posts }: RelatedArticlesProps) {
    if (posts.length === 0) {
        return null;
    }

    return (
        <section className="mt-14 w-full min-w-0">
            <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-mono text-sm text-owl-comment">
                    {'// continue reading'}
                </h2>
                <span className="font-mono text-xs text-owl-text-muted">
                    related: {posts.length}
                </span>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-5">
                {posts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                ))}
            </div>
        </section>
    );
}

export default RelatedArticles;
