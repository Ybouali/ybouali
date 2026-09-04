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
                    <span className="text-owl-purple">const</span>
                    <span className="text-owl-text"> {`${variableName}:`} </span>
                    <span className="text-owl-warning">{` ${
                        variableName.at(0)?.toUpperCase() +
                        variableName.slice(1)
                    } `}</span>
                    <span className="text-owl-text"> = </span>
                    <span className="text-owl-warning">[</span>
                </code>
            </pre>
        </div>
    );
}

export default CodeArrayDisplay;
