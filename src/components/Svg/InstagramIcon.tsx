import { type SVGProps } from 'react';

interface InstagramIconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

function InstagramIcon({
    width = 28,
    height = 28,
    className = '',
    ...props
}: InstagramIconProps) {
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
            className={`transition-all duration-700 group-hover:text-white ${className}`}
            {...props}
        >
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
            <circle cx="12" cy="12" r="3.2" />
            <circle cx="17" cy="7" r="1" />
        </svg>
    );
}

export default InstagramIcon;
