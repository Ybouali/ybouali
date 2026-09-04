import { useNavigate } from 'react-router-dom';
import { MainForScreen } from '../components';
import PageSeo from '../components/PageSeo';

function NotFound() {
    const navigate = useNavigate();

    return (
        <MainForScreen>
            <PageSeo
                title="404 | Yassine Bouali"
                description="404 — you're off the beaten path."
                path="/404"
            />
            <div className="max-w-xl mx-auto py-24 px-4">
                <p className="font-mono text-owl-orange text-sm mb-3">
                    error TS2307
                </p>
                <h1 className="text-3xl font-bold text-owl-text mb-4">
                    404 — you&apos;re off the beaten path
                </h1>
                <pre className="font-mono text-sm bg-owl-surface border border-owl-border rounded-lg p-4 text-owl-text-muted overflow-x-auto">
                    <span className="text-owl-purple">Cannot find module</span>
                    {' '}
                    <span className="text-owl-green">&apos;{typeof window !== 'undefined' ? window.location.pathname : '/lost'}&apos;</span>
                    {'\n'}
                    <span className="text-owl-comment">
                        {'// this route is not in the workspace'}
                    </span>
                </pre>
                <div className="flex flex-wrap gap-3 mt-8">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="px-4 py-2 bg-owl-surface border border-owl-border font-mono text-sm rounded hover:border-owl-cyan cursor-pointer"
                    >
                        cd ~
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/projects')}
                        className="px-4 py-2 bg-transparent border border-owl-blue/40 text-owl-blue font-mono text-sm rounded hover:border-owl-cyan cursor-pointer"
                    >
                        open projects.tsx
                    </button>
                </div>
            </div>
        </MainForScreen>
    );
}

export default NotFound;
