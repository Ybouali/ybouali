type ExportDefaultProps = {
    moduleName?: string;
};

function ExportDefault({ moduleName }: ExportDefaultProps) {
    return (
        <pre className="font-mono text-lg text-white">
            <code>
                <span className="text-purple-400">import</span>
                <span className="text-purple-400"> default </span>

                <span className="text-white">{` ${moduleName}`}</span>
                <span className="text-white">;</span>
            </code>
        </pre>
    );
}

export default ExportDefault;
