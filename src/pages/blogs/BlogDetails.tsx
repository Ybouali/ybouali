import { useMemo } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';
import {
    getAdjacentPosts,
    getPostBySlug,
    getRelatedPosts,
} from '../../data/blog';
import PageSeo from '../../components/PageSeo';
import { extractHeadings, shouldShowToc } from '../../utils/markdown';
import ArticleHeader from './components/ArticleHeader';
import ArticleMeta from './components/ArticleMeta';
import TableOfContents from './components/TableOfContents';
import ArticleContent from './components/ArticleContent';
import ArticleNavigation from './components/ArticleNavigation';
import RelatedArticles from './components/RelatedArticles';

function BlogDetails() {
    const { slug } = useParams();
    const post = slug ? getPostBySlug(slug) : undefined;
    const headings = useMemo(
        () => (post ? extractHeadings(post.content) : []),
        [post]
    );

    if (!post) {
        return (
            <div className="w-full py-16 text-center">
                <p className="mb-2 font-mono text-owl-orange">
                    404 — you&apos;re off the beaten path
                </p>
                <p className="mb-4 text-owl-text-muted">
                    This note was never written (or the slug is cursed).
                </p>
                <Link
                    to="/blog"
                    className="font-mono text-sm text-owl-blue transition-colors hover:text-owl-cyan"
                >
                    ← back to blog
                </Link>
            </div>
        );
    }

    const showToc = shouldShowToc(headings, post.content);
    const { previous, next } = getAdjacentPosts(post.slug);
    const related = getRelatedPosts(post);

    return (
        <div className="w-full min-w-0">
            <PageSeo
                title={`${post.title} | Yassine Bouali`}
                description={post.excerpt}
                path={`/blog/${post.slug}`}
            />

            <Link
                to="/blog"
                className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-owl-text-muted transition-colors hover:text-owl-cyan"
            >
                <ArrowLeftIcon className="h-4 w-4" />
                cd ../blog
            </Link>

            <div className="flex flex-col gap-6">
                <ArticleHeader post={post} />
                <ArticleMeta post={post} />

                {post.featuredImage && (
                    <figure className="max-w-3xl min-w-0">
                        <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="aspect-video h-auto w-full border border-owl-border object-cover"
                        />
                    </figure>
                )}
            </div>

            <div className="mt-10 flex min-w-0 flex-col items-start gap-10 xl:flex-row">
                {showToc && <TableOfContents headings={headings} />}

                <div className="w-full max-w-3xl min-w-0">
                    <ArticleContent content={post.content} />
                    <ArticleNavigation previous={previous} next={next} />
                </div>
            </div>

            <RelatedArticles posts={related} />
        </div>
    );
}

export default BlogDetails;
