import { Helmet } from 'react-helmet-async';
import { site } from '../../data/site';
import { DownloadIcon } from '../../components';

export default function CvPage() {
    return (
        <>
            <Helmet>
                <title>Curriculum Vitae - {site.name}</title>
            </Helmet>
            <div className="flex flex-col h-full w-full bg-owl-bg overflow-hidden relative">
                <div className="w-full h-full flex flex-col p-4 md:p-6 lg:p-8 pt-6 md:pt-10">
                    
                    {/* Header + Actions */}
                    <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 md:mb-8 shrink-0">
                        <div className="flex flex-col gap-1 w-full max-w-2xl">
                            <span className="font-mono text-sm text-owl-comment uppercase tracking-widest">
                                {'// CV'}
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-owl-text tracking-tight mt-1">
                                Curriculum Vitae
                            </h1>
                            <p className="text-base md:text-lg text-owl-text-muted mt-3">
                                My professional experience, education, and technical skills. View below or download for your records.
                            </p>
                        </div>

                        <div className="flex flex-row items-center gap-3 shrink-0">
                            <a
                                href={site.cvPdfUrl}
                                download="Yassine_Bouali_CV.pdf"
                                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-owl-surface hover:bg-owl-surface-hover border border-owl-border hover:border-owl-blue/50 text-owl-text font-mono text-sm rounded transition-colors cursor-pointer shadow-sm"
                            >
                                <DownloadIcon className="w-4 h-4 text-owl-text-muted group-hover:text-owl-text" />
                                <span>Download</span>
                            </a>
                            <a
                                href={site.cvPdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-owl-surface hover:bg-owl-surface-hover border border-owl-border hover:border-owl-blue/50 text-owl-text font-mono text-sm rounded transition-colors cursor-pointer shadow-sm"
                            >
                                <span>Open in New Tab</span>
                            </a>
                        </div>
                    </div>

                    {/* PDF Viewer - Taking remaining space */}
                    <div className="w-full max-w-[1400px] mx-auto flex-grow min-h-[60vh] pb-4 md:pb-6 flex flex-col">
                        <div className="w-full h-full border border-owl-border rounded-lg overflow-hidden bg-owl-surface shadow-md shadow-black/20 flex flex-col flex-grow relative z-10">
                            <object
                                data={site.cvPdfUrl}
                                type="application/pdf"
                                className="w-full h-full flex-grow absolute inset-0"
                            >
                                <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center gap-4">
                                    <p className="text-owl-text-muted font-sans">
                                        Your browser doesn't support embedded PDFs.
                                    </p>
                                    <a
                                        href={site.cvPdfUrl}
                                        className="text-owl-blue hover:text-owl-cyan underline font-mono text-sm"
                                    >
                                        Download the PDF instead
                                    </a>
                                </div>
                            </object>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
