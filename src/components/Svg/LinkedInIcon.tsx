import { type SVGProps } from 'react';

interface LinkedInIconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

function LinkedInIcon({
    width = 28,
    height = 28,
    className = '',
    ...props
}: LinkedInIconProps) {
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
            <path d="M6.94 7.5A1.44 1.44 0 116.93 4.6a1.44 1.44 0 01.01 2.9zM4.75 9h4.38v10.5H4.75V9zM12.38 9h4.2v1.62h.06c.58-1.04 2-1.62 3.2-1.62 3.42 0 4.06 2 4.06 4.6V19.5h-4.38v-4.5c0-1.07-.02-2.44-1.5-2.44-1.5 0-1.73 1.17-1.73 2.36V19.5h-4.38V9z" />
        </svg>
    );
}

export default LinkedInIcon;
