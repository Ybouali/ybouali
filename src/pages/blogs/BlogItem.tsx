import { useNavigate } from 'react-router-dom';
import type { BlogPost } from '../../data/blog';
import { Card } from '../../components';
import { useAppContext } from '../../context/useAppContext';

type BlogItemProps = {
    post: BlogPost;
};

function BlogItem({ post }: BlogItemProps) {
    const navigate = useNavigate();
    const { pages, addPageToNavbar } = useAppContext();

    return (
        <Card
            onClick={() => {
                const page = pages.find((p) => p.path === '/blog');
                if (page) addPageToNavbar(page);
                navigate(`/blog/${post.slug}`);
            }}
            className="flex items-center cursor-pointer hover:border-owl-cyan/60 transition-colors"
        >
            <div className="group flex items-center gap-4 w-full">
                {post.featuredImage && (
                    <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded border border-owl-border shrink-0"
                    />
                )}
                <div className="min-w-0 flex-1">
                    <h3 className="m-0 text-base md:text-lg font-bold text-owl-blue truncate group-hover:text-owl-cyan">
                        {post.title}
                    </h3>
                    <p className="mt-1 text-sm text-owl-text-muted line-clamp-2">
                        {post.excerpt}
                    </p>
                    <p className="mt-2 text-xs font-mono text-owl-comment">
                        {post.date} · {post.category} · {post.readingTime}
                    </p>
                </div>
            </div>
        </Card>
    );
}

export default BlogItem;
