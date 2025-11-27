const CodeDisplay = ({
    keyword = 'const',
    varName = 'portfolio',
    className = 'Experience',
}) => {
    return (
        <div className="flex-1 text-xl">
            <span className="text-purple-400">{keyword}</span>
            <span className="text-green-400">{` ${varName} `}</span>
            <span className="text-white animate-ping ">=</span>
            <span className="text-purple-400">{` new `}</span>
            <span className="text-blue-400">{`${className}();`}</span>
        </div>
    );
};

export default CodeDisplay;
