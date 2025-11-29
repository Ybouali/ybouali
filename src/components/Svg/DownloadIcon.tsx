import { type SVGProps } from 'react';

interface DownloadIconProps extends SVGProps<SVGSVGElement> {
    hoverColor?: string;
}

function DownloadIcon({
    width = 28,
    height = 28,
    color = '#adacac',
    hoverColor = '#3b82f6',
    className = '',
    ...props
}: DownloadIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color }}
            className={`transition-all duration-700 group-hover:text-[${hoverColor}] ${className}`}
            {...props}
        >
            {/* Arrow down */}
            <path d="M12 5v10" />
            <path d="M6 11l6 6 6-6" />
            {/* Base */}
            <path d="M5 19h14" />
        </svg>
    );
}

export default DownloadIcon;
