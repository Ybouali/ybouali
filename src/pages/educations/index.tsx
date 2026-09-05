import {
    DeveloperInfo,
    ExportDefault,
    MainForScreen,
} from '../../components';
import PageSeo from '../../components/PageSeo';
import EducationTimeline from './components/EducationTimeline';

function Educations() {
    return (
        <MainForScreen>
            <PageSeo
                title="Education | Yassine Bouali"
                description="The path from a scientific baccalaureate to peer-to-peer software engineering — the schools that shaped how I learn, build, and engineer."
                path="/education"
            />
            <div className="w-full max-w-6xl mx-auto pb-16 min-w-0 overflow-x-hidden">
                <div className="flex flex-col items-start gap-8 md:gap-10">
                    <DeveloperInfo
                        labelOne="from"
                        labelTwo="description"
                        valueOne="education.tsx"
                        valueTwo="the path that led here"
                    />

                    <header className="flex flex-col gap-2 w-full max-w-3xl">
                        <span className="font-mono text-sm text-owl-comment uppercase tracking-widest">
                            {'// education'}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-owl-text tracking-tight">
                            Engineering journey
                        </h1>
                        <p className="text-base md:text-lg text-owl-text-muted mt-1 leading-relaxed">
                            Not a list of schools — the sequence that led here.
                            Foundation, then development, then software
                            engineering at 1337.
                        </p>
                    </header>

                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs md:text-sm text-owl-comment">
                        <span className="text-owl-comment">{'// '}</span>
                        <span className="text-owl-keyword">learning</span>
                        <span aria-hidden>→</span>
                        <span className="text-owl-blue">building</span>
                        <span aria-hidden>→</span>
                        <span className="text-owl-cyan">engineering</span>
                        <span aria-hidden>→</span>
                        <span className="text-owl-text">becoming</span>
                    </p>

                    <EducationTimeline />

                    <ExportDefault moduleName="education" />
                </div>
            </div>
        </MainForScreen>
    );
}

export default Educations;
