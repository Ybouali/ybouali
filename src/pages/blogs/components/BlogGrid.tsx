import { blogs } from '../../../data/blog';
import BlogCard from './BlogCard';

function BlogGrid() {
    return (
        <div className="w-full min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                <h2 className="font-mono text-sm text-owl-comment">
                    {'// latest posts'}
                </h2>
                <span className="font-mono text-xs text-owl-text-muted">
                    articles: {blogs.length}
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
                {blogs.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                ))}
            </div>
        </div>
    );
}

export default BlogGrid;
