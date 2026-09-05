import { motion } from 'framer-motion';
import type { Education } from '../../../data/education';

type EducationItemProps = {
    education: Education;
    index: number;
    isLast: boolean;
};

function stageLabel(id: string): string {
    if (id === '1337') return 'software engineering';
    if (id === 'multihexa') return 'development';
    return 'foundation';
}

function EducationItem({ education, index, isLast }: EducationItemProps) {
    const isCurrent = education.dates.toLowerCase().includes('present');
    const isFeatured = education.id === '1337';

    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="relative grid w-full min-w-0 grid-cols-[1.25rem_minmax(0,1fr)] md:grid-cols-[9.5rem_1.25rem_minmax(0,1fr)] gap-x-3 md:gap-x-6"
        >
            <time
                dateTime={education.dates}
                className="hidden md:block pt-5 text-right font-mono text-sm text-owl-text-muted leading-snug"
            >
                {education.dates}
            </time>

            <div className="relative flex justify-center">
                {!isLast && (
                    <span
                        aria-hidden
                        className="absolute left-1/2 top-7 bottom-[-1.5rem] w-px -translate-x-1/2 bg-owl-border"
                    />
                )}
                <span
                    aria-hidden
                    className={`relative z-10 mt-5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-owl-bg ${
                        isCurrent
                            ? 'bg-owl-green shadow-[0_0_8px_var(--color-owl-green)]'
                            : isFeatured
                              ? 'bg-owl-cyan'
                              : 'bg-owl-blue'
                    }`}
                />
            </div>

            <div
                className={`w-full min-w-0 rounded-lg border bg-owl-surface shadow-sm shadow-black/10 transition-colors duration-300 hover:bg-owl-surface-hover ${
                    isLast ? 'mb-0' : 'mb-6'
                } ${
                    isFeatured
                        ? 'border-owl-blue/50 hover:border-owl-cyan/60 p-5 md:p-7'
                        : 'border-owl-border hover:border-owl-blue/40 p-5 md:p-6'
                }`}
            >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-owl-purple">
                        {'// '}
                        {stageLabel(education.id)}
                    </span>
                    {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-owl-green">
                            <span className="h-1.5 w-1.5 rounded-full bg-owl-green" />
                            in progress
                        </span>
                    )}
                    <time
                        dateTime={education.dates}
                        className="md:hidden font-mono text-xs text-owl-text-muted ml-auto"
                    >
                        {education.dates}
                    </time>
                </div>

                <div className="flex items-start gap-4">
                    <img
                        src={education.urlLogo}
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-md object-cover bg-owl-bg border border-owl-border"
                    />
                    <div className="min-w-0 flex-1">
                        <h2
                            className={`font-semibold text-owl-text tracking-tight ${
                                isFeatured
                                    ? 'text-xl md:text-2xl'
                                    : 'text-lg md:text-xl'
                            }`}
                        >
                            {education.school}
                        </h2>
                        <p className="mt-1 font-mono text-sm md:text-base text-owl-blue">
                            {education.degree}
                        </p>
                        <p className="mt-0.5 text-sm text-owl-cyan">
                            {education.fieldOfStudy}
                        </p>
                    </div>
                </div>

                <p className="mt-4 text-sm md:text-base text-owl-text-muted leading-relaxed">
                    {education.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-owl-comment min-w-0">
                    <span>{education.location}</span>
                    <a
                        href={education.urlSchool}
                        target="_blank"
                        rel="noreferrer"
                        className="text-owl-blue hover:text-owl-cyan transition-colors break-all"
                    >
                        {education.urlSchool.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                </div>
            </div>
        </motion.article>
    );
}

export default EducationItem;
