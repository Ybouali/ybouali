import { type SVGProps } from 'react';

interface GithubIconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

function GithubIcon({
    width = 28,
    height = 28,
    className = '',
    ...props
}: GithubIconProps) {
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
            <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.36 1.09 2.94.83a2.2 2.2 0 01.66-1.38c-2.22-.25-4.56-1.11-4.56-4.94a3.86 3.86 0 011.03-2.67 3.6 3.6 0 01.1-2.64s.84-.27 2.75 1.02a9.38 9.38 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02a3.6 3.6 0 01.1 2.64 3.84 3.84 0 011.03 2.67c0 3.84-2.35 4.68-4.58 4.93a2.4 2.4 0 01.69 1.86v2.76c0 .27.18.58.69.48A10 10 0 0012 2z" />
        </svg>
    );
}

export default GithubIcon;
