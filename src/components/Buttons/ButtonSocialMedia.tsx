import type { IconType } from '../../types';

type Props = {
    icon: IconType;
    label: string;
    url: string;
};

function ButtonSocialMedia({ icon: Icon, label, url }: Props) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center gap-4 rounded-lg bg-owl-bg px-5 py-4 transition-all duration-500 hover:bg-owl-surface-hover border border-owl-border hover:border-owl-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-owl-blue"
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-owl-surface transition-all duration-500 group-hover:bg-owl-blue group-hover:scale-110">
                <Icon className="h-7 w-7 text-owl-text-muted group-hover:text-owl-bg" />
            </div>

            <div className="flex flex-col">
                <span className="text-sm font-medium text-owl-text transition-colors group-hover:text-owl-cyan">
                    {label}
                </span>
                <span className="text-xs text-owl-text-muted transition-colors group-hover:text-owl-blue">
                    {url.replace(/^https?:\/\//, '').replace(/www\./, '')}
                </span>
            </div>

            <svg
                className="ml-auto h-5 w-5 text-owl-text-muted opacity-0 transition-all group-hover:opacity-100 group-hover:text-owl-blue group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </a>
    );
}

export default ButtonSocialMedia;
