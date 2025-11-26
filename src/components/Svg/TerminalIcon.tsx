function TerminalIcon({ width = 24, height = 24, color = '#adacac' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 19h8" />
            <path d="m4 17 6-6-6-6" />
        </svg>
    );
}

export default TerminalIcon;
