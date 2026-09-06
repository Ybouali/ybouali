import { useParams } from 'react-router-dom';
import {
    DeveloperInfo,
    ExportDefault,
    MainForScreen,
} from '../../components';
import BlogDetails from './BlogDetails';
import PageSeo from '../../components/PageSeo';
import BlogGrid from './components/BlogGrid';

function Blogs() {
    const { slug } = useParams();

    return (
        <MainForScreen>
            {!slug && (
                <PageSeo
                    title="Writing | Yassine Bouali"
                    description="Technical thoughts, experiments, engineering notes, and lessons learned — a developer's notebook made public."
                    path="/blog"
                />
            )}
            <div className="w-full max-w-6xl mx-auto pb-16 min-w-0">
                <div className="flex flex-col items-start gap-8 md:gap-10">
                    <DeveloperInfo
                        className="max-w-full min-w-0"
                        labelOne="from"
                        labelTwo="description"
                        valueOne="blogs.tsx"
                        valueTwo={
                            slug ? 'one note, expanded' : 'engineering notes'
                        }
                    />

                    {slug ? (
                        <div className="w-full min-w-0">
                            <BlogDetails />
                        </div>
                    ) : (
                        <>
                            <header className="flex flex-col gap-2 w-full max-w-3xl">
                                <span className="font-mono text-sm text-owl-comment uppercase tracking-widest">
                                    {'// blogs'}
                                </span>
                                <h1 className="text-3xl md:text-4xl font-bold text-owl-text tracking-tight">
                                    A developer&apos;s notebook
                                </h1>
                                <p className="text-base md:text-lg text-owl-text-muted mt-1 leading-relaxed">
                                    Technical thoughts, experiments, engineering
                                    notes, and lessons learned — written in
                                    public.
                                </p>
                            </header>

                            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs md:text-sm text-owl-comment">
                                <span className="text-owl-comment">{'// '}</span>
                                <span className="text-owl-keyword">ideas</span>
                                <span aria-hidden>→</span>
                                <span className="text-owl-blue">
                                    experiments
                                </span>
                                <span aria-hidden>→</span>
                                <span className="text-owl-cyan">
                                    engineering notes
                                </span>
                                <span aria-hidden>→</span>
                                <span className="text-owl-text">
                                    lessons learned
                                </span>
                            </p>

                            <BlogGrid />
                        </>
                    )}

                    <ExportDefault
                        moduleName={slug ? slug.replace(/-/g, '_') : 'blogs'}
                    />
                </div>
            </div>
        </MainForScreen>
    );
}

export default Blogs;
