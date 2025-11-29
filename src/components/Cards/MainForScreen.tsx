type Props = {
    children?: React.ReactNode;
    className?: string;
};
function MainForScreen({ children, className }: Props) {
    return (
        <div
            className={`min-h-screen h-screen overflow-hidden bg-background ${className}`}
        >
            <div className="h-full overflow-y-auto px-8 py-12 scrollbar-thin scrollbar-thumb-rounded-lg">
                {children}
            </div>
        </div>
    );
}

export default MainForScreen;
