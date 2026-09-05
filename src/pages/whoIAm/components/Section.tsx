import React from 'react';

interface SectionProps {
    eyebrow?: string;
    title?: string;
    children: React.ReactNode;
    contentMaxWidth?: string;
    className?: string;
}

export function Section({
    eyebrow,
    title,
    children,
    contentMaxWidth,
    className = '',
}: SectionProps) {
    return (
        <section className={`flex flex-col gap-6 w-full ${className}`}>
            {(eyebrow || title) && (
                <div className="flex flex-col gap-1 w-full max-w-[1200px] mx-auto">
                    {eyebrow && (
                        <span className="font-mono text-xs md:text-sm text-owl-comment uppercase tracking-widest">
                            {eyebrow}
                        </span>
                    )}
                    {title && (
                        <h2 className="text-2xl md:text-3xl font-bold text-owl-text tracking-tight">
                            {title}
                        </h2>
                    )}
                </div>
            )}
            <div className={`w-full ${contentMaxWidth || 'max-w-[1200px]'} mx-auto`}>
                {children}
            </div>
        </section>
    );
}
