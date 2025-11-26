type CardProps = {
    children?: React.ReactNode;
    className?: string;
};

function Card({ children, className }: CardProps) {
    return (
        <div
            className={`bg-[#242527] border border-[#373739] p-4 rounded-lg shadow-md ${className}`}
        >
            {children}
        </div>
    );
}

export default Card;
