import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostBySlug } from '../../data/blog';
import { Card } from '../../components';
import MarkdownBody from '../../components/MarkdownBody';
import PageSeo from '../../components/PageSeo';

function BlogDetails() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = slug ? getPostBySlug(slug) : undefined;

    if (!post) {
        return (
            <div className="w-full py-16 text-center">
                <p className="font-mono text-owl-orange mb-2">
                    404 — you&apos;re off the beaten path
                </p>
                <p className="text-owl-text-muted mb-4">
                    This brain dump was never written (or the slug is cursed).
                </p>
                <button
                    type="button"
                    onClick={() => navigate('/blog')}
                    className="font-mono text-sm text-owl-blue hover:text-owl-cyan cursor-pointer"
                >
                    ← latest brain dumps
                </button>
            </div>
        );
    }

    return (
        <Card>
            <PageSeo
                title={`${post.title} | Yassine Bouali`}
                description={post.excerpt}
                path={`/blog/${post.slug}`}
            />
            <button
                type="button"
                onClick={() => navigate('/blog')}
                className="inline-flex items-center gap-2 font-mono text-sm text-owl-text-muted hover:text-owl-cyan mb-6 cursor-pointer"
            >
                <ArrowLeftIcon className="w-4 h-4" />
                cd ../blog
            </button>
            {post.featuredImage && (
                <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full aspect-video object-cover rounded-lg mb-6 border border-owl-border"
                />
            )}
            <header className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-owl-blue leading-tight">
                    {post.title}
                </h1>
                <p className="text-sm font-mono text-owl-comment mt-2">
                    {post.date} · {post.author} · {post.readingTime}
                </p>
            </header>
            <p className="text-base md:text-lg text-owl-text-muted italic border-l-4 border-owl-purple pl-4 mb-6">
                {post.excerpt}
            </p>
            <MarkdownBody content={post.content} />
            {post.tags.length > 0 && (
                <footer className="flex flex-wrap gap-2 mt-8">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-owl-bg text-owl-cyan rounded-full text-sm font-mono border border-owl-border"
                        >
                            #{tag}
                        </span>
                    ))}
                </footer>
            )}
        </Card>
    );
}

export default BlogDetails;
