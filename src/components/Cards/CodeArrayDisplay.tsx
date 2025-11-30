interface CodeArrayDisplayProps {
    variableName: string;
}

function CodeArrayDisplay({
    variableName = 'educations',
}: CodeArrayDisplayProps) {
    return (
        <div className="w-full  ">
            <pre>
                <code>
                    <span className="text-purple-400">const</span>
                    <span className="text-white"> {`${variableName}:`} </span>
                    <span className="text-yellow-600">{` ${
                        variableName.at(0)?.toUpperCase() +
                        variableName.slice(1)
                    } `}</span>
                    <span className="text-white"> = </span>
                    <span className="text-yellow-600">[</span>
                </code>
            </pre>
        </div>
    );
}

export default CodeArrayDisplay;
