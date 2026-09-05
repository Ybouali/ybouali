import {
    DeveloperInfo,
    ExportDefault,
    MainForScreen,
} from '../../components';
import PageSeo from '../../components/PageSeo';
import CertificateGrid from './components/CertificateGrid';

function Certificates() {
    return (
        <MainForScreen>
            <PageSeo
                title="Certificates | Yassine Bouali"
                description="Additional learning, specialization, and professional development alongside the engineering journey."
                path="/certificates"
            />
            <div className="w-full max-w-6xl mx-auto pb-16 min-w-0 overflow-x-hidden">
                <div className="flex flex-col items-start gap-8 md:gap-10">
                    <DeveloperInfo
                        className="max-w-full min-w-0"
                        labelOne="from"
                        labelTwo="description"
                        valueOne="certificates.tsx"
                        valueTwo="continuous learning"
                    />

                    <header className="flex flex-col gap-2 w-full max-w-3xl">
                        <span className="font-mono text-sm text-owl-comment uppercase tracking-widest">
                            {'// certificates'}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-owl-text tracking-tight">
                            Continuous learning
                        </h1>
                        <p className="text-base md:text-lg text-owl-text-muted mt-1 leading-relaxed">
                            Education shows where I learned. These credentials
                            show what I continued to study — specialization and
                            professional development alongside the engineering
                            path.
                        </p>
                    </header>

                    <CertificateGrid />

                    <ExportDefault moduleName="certificates" />
                </div>
            </div>
        </MainForScreen>
    );
}

export default Certificates;
