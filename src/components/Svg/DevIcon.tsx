import { type SVGProps } from 'react';

interface DevIconProps extends SVGProps<SVGSVGElement> {
    hoverColor?: string;
}

function DevIcon({
    width = 28,
    height = 28,
    color = '#adacac',
    hoverColor = '#3b82f6',
    className = '',
    ...props
}: DevIconProps) {
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
            className={`transition-all duration-700 group-hover:text-[#007acc] ${className}`}
            {...props}
        >
            <circle cx="9" cy="8" r="2.5" />
            <path d="M4 20c0-2.5 2.5-4.5 5-4.5h2c2.5 0 5 2 5 4.5" />
            <g transform="translate(15,7)">
                <circle cx="2" cy="2" r="1.2" />
                <path d="M2 0v.8M2 3.2V4M0.3 2h.8M3.9 2h.8M0.9 0.4l.55.55M3.1 3.45l.55.55M0.9 3.6l.55-.55M3.1 0.65l.55-.55" />
            </g>
        </svg>
    );
}

export default DevIcon;
