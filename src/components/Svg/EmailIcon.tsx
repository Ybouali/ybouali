import { type SVGProps } from 'react';

interface EmailIconProps extends SVGProps<SVGSVGElement> {
    hoverColor?: string;
}

function EmailIcon({
    width = 28,
    height = 28,
    color = '#adacac',
    hoverColor = '#3b82f6',
    className = '',
    ...props
}: EmailIconProps) {
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
            <path d="M21.75 6.75l-9.75 6-9.75-6M3 6.75h18v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.25V6.75z" />
        </svg>
    );
}

export default EmailIcon;
