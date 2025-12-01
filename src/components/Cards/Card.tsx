type CardProps = {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

function Card({ children, className, onClick }: CardProps) {
    return (
        <div
            className={`bg-[#242527] border border-[#373739] p-4 rounded-lg shadow-md ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Card;
