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
            className="group flex w-full items-center gap-4 rounded-lg bg-[#2c2c2c] px-5 py-4 transition-all duration-700 hover:bg-[#363636] hover:shadow-lg hover:shadow-[#007acc]/20 border border-[#404040] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007acc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e1e]"
        >
            {/* Icon with subtle hover glow (VS Code accent blue) */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3c3c3c] transition-all duration-700 group-hover:bg-[#0A66C2] group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#0A66C2]/50">
                <Icon className="h-7 w-7 text-gray-400 group-hover:text-white" />
            </div>

            {/* Text */}
            <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                    {label}
                </span>
                <span className="text-xs text-gray-500 transition-colors group-hover:text-[#007acc]">
                    {url.replace(/^https?:\/\//, '').replace(/www\./, '')}
                </span>
            </div>

            {/* Optional right arrow (feels very VS Code) */}
            <svg
                className="ml-auto h-5 w-5 text-gray-500 opacity-0 transition-all group-hover:opacity-100 group-hover:text-[#007acc] group-hover:translate-x-1"
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
