type Props = {
    children?: React.ReactNode;
    className?: string;
};
function MainForScreen({ children, className }: Props) {
    return (
        <div
            className={`h-full w-full overflow-hidden bg-transparent ${className}`}
        >
            <div className="h-full w-full overflow-y-auto px-4 md:px-6 py-4 md:py-6 custom-scrollbar">
                {children}
            </div>
        </div>
    );
}

export default MainForScreen;
