import type { BlogPost } from '../../../data/blog';

type ArticleHeaderProps = {
    post: BlogPost;
};

function ArticleHeader({ post }: ArticleHeaderProps) {
    return (
        <header className="flex w-full max-w-3xl min-w-0 flex-col gap-4">
            <span className="font-mono text-sm uppercase tracking-widest text-owl-comment">
                {'// '}
                {post.category}
            </span>
            <h1 className="text-3xl font-bold tracking-tight break-words text-owl-text md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                {post.title}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-owl-text-muted md:text-lg">
                {post.excerpt}
            </p>
        </header>
    );
}

export default ArticleHeader;
