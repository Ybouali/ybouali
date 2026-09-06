import { formatPostDate, type BlogPost } from '../../../data/blog';

type ArticleMetaProps = {
    post: BlogPost;
};

function ArticleMeta({ post }: ArticleMetaProps) {
    return (
        <div className="flex w-full max-w-3xl min-w-0 flex-col gap-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-owl-comment md:text-sm">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span aria-hidden className="text-owl-border">
                    ·
                </span>
                <span>{post.readingTime}</span>
                {post.updatedAt && (
                    <>
                        <span aria-hidden className="text-owl-border">
                            ·
                        </span>
                        <span>
                            updated {formatPostDate(post.updatedAt)}
                        </span>
                    </>
                )}
                {post.author && (
                    <>
                        <span aria-hidden className="text-owl-border">
                            ·
                        </span>
                        <span className="text-owl-text-muted">{post.author}</span>
                    </>
                )}
            </div>

            {post.tags.length > 0 && (
                <ul className="flex list-none flex-wrap gap-1.5 p-0">
                    {post.tags.map((tag) => (
                        <li key={tag}>
                            <span className="inline-block border border-owl-keyword/20 bg-owl-bg px-2 py-0.5 font-mono text-[10px] text-owl-keyword">
                                {tag}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ArticleMeta;
