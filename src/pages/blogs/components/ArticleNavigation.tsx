import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../../../data/blog';

type ArticleNavigationProps = {
    previous?: BlogPost;
    next?: BlogPost;
};

function ArticleNavigation({ previous, next }: ArticleNavigationProps) {
    if (!previous && !next) {
        return null;
    }

    return (
        <nav
            aria-label="Article pagination"
            className="mt-12 grid min-w-0 grid-cols-1 gap-3 border-t border-owl-border pt-6 sm:grid-cols-2"
        >
            {previous ? (
                <Link
                    to={`/blog/${previous.slug}`}
                    className="group min-w-0 border border-owl-border bg-owl-surface p-4 transition-colors hover:border-owl-blue/50 hover:bg-owl-surface-hover"
                >
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-owl-comment group-hover:text-owl-cyan">
                        <ArrowLeftIcon className="h-3.5 w-3.5" />
                        Previous
                    </span>
                    <p className="mt-2 text-sm font-semibold leading-snug text-owl-text group-hover:text-owl-cyan">
                        {previous.title}
                    </p>
                </Link>
            ) : (
                <div className="hidden sm:block" />
            )}

            {next ? (
                <Link
                    to={`/blog/${next.slug}`}
                    className="group min-w-0 border border-owl-border bg-owl-surface p-4 text-right transition-colors hover:border-owl-blue/50 hover:bg-owl-surface-hover sm:justify-self-end"
                >
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-owl-comment group-hover:text-owl-cyan">
                        Next
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                    </span>
                    <p className="mt-2 text-sm font-semibold leading-snug text-owl-text group-hover:text-owl-cyan">
                        {next.title}
                    </p>
                </Link>
            ) : null}
        </nav>
    );
}

export default ArticleNavigation;
