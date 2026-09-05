import { ButtonSocialMediaTwo, GithubIcon, DownloadIcon, LinkedInIcon } from '../../../components';
import { site } from '../../../data/site';
import { whoIAm } from '../../../data/who-i-am';
import { useNavigate } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import { useAppContext } from '../../../context/useAppContext';

export function WhoIAmHero() {
    const navigate = useNavigate();
    const { pages, addPageToNavbar } = useAppContext();

    const handleNavigate = (path: string) => {
        const page = pages.find((p) => p.path === path || (p.path !== '/' && path.startsWith(`${p.path}/`)));
        if (page) {
            addPageToNavbar(page);
        }
        navigate(path);
    };

    return (
        <div className="flex flex-col gap-6 md:gap-8 w-full">
            <div className="flex flex-col gap-1">
                <span className="font-mono text-sm text-owl-comment uppercase tracking-widest">
                    {'// WHO I AM'}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-owl-text tracking-tight mt-2">
                    {whoIAm.developer.name}
                </h1>
                <h2 className="text-xl md:text-2xl text-owl-blue font-mono mt-1">
                    {whoIAm.developer.role}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm md:text-base font-mono mt-3">
                    {whoIAm.developer.focus.map((focus, idx) => (
                        <div key={focus} className="flex items-center">
                            <span className="text-owl-cyan">{focus}</span>
                            {idx < whoIAm.developer.focus.length - 1 && (
                                <span className="text-owl-text-muted ml-3">·</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-lg md:text-xl text-owl-text-muted leading-relaxed max-w-3xl">
                {whoIAm.developer.introduction}
            </p>

            <div className="flex flex-row flex-wrap items-center gap-4 mt-2">
                <button
                    type="button"
                    onClick={() => handleNavigate('/projects')}
                    className="flex items-center gap-2 px-5 py-2.5 bg-owl-surface hover:bg-owl-surface-hover border border-owl-border hover:border-owl-blue/50 text-owl-text font-mono text-sm rounded transition-colors cursor-pointer"
                >
                    <Terminal className="w-4 h-4" />
                    <span>Projects</span>
                </button>
                <ButtonSocialMediaTwo
                    icon={GithubIcon}
                    label="GitHub"
                    url={site.socials.github}
                />
                <ButtonSocialMediaTwo
                    icon={DownloadIcon}
                    label="Resume"
                    onClick={() => handleNavigate(site.cvUrl)}
                />
                <ButtonSocialMediaTwo
                    icon={LinkedInIcon}
                    label="LinkedIn"
                    url={site.socials.linkedin}
                />
            </div>
        </div>
    );
}
