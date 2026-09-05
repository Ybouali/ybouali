import type { ComponentType } from 'react';

interface ContactMethodProps {
    icon: ComponentType<{ className?: string }>;
    label: string;
    value: string;
    url: string;
}

function ContactMethod({
    icon: Icon,
    label,
    value,
    url,
}: ContactMethodProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full w-full flex-col items-start justify-center gap-4 rounded-lg border border-owl-border bg-owl-surface p-6 shadow-sm shadow-black/10 transition-all duration-300 hover:border-owl-blue hover:bg-owl-surface-hover hover:shadow-owl-blue/20"
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-owl-border bg-owl-bg transition-all duration-300 group-hover:border-owl-cyan group-hover:bg-owl-blue">
                <Icon className="h-6 w-6 text-owl-text-muted transition-colors duration-300 group-hover:text-owl-bg" />
            </div>

            <div className="flex flex-col">
                <span className="mb-1 font-mono text-sm text-owl-comment">
                    {'// '}{label}
                </span>

                <span className="break-all text-base font-semibold text-owl-text transition-colors duration-300 group-hover:text-owl-cyan md:text-lg">
                    {value}
                </span>
            </div>
        </a>
    );
}

export default ContactMethod;