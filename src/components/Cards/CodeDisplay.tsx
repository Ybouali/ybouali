const CodeDisplay = ({
    keyword = 'const',
    varName = 'portfolio',
    className = 'Experience',
}) => {
    return (
        <div className="flex-1 text-xl">
            <span className="text-owl-purple">{keyword}</span>
            <span className="text-owl-green">{` ${varName} `}</span>
            <span className="text-owl-text animate-ping ">=</span>
            <span className="text-owl-purple">{` new `}</span>
            <span className="text-owl-blue">{`${className}();`}</span>
        </div>
    );
};

export default CodeDisplay;
