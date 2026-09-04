type ExportDefaultProps = {
    moduleName?: string;
};

function ExportDefault({ moduleName }: ExportDefaultProps) {
    return (
        <pre className="font-mono text-lg text-owl-text">
            <code>
                <span className="text-owl-purple">export</span>
                <span className="text-owl-purple"> default </span>

                <span className="text-owl-cyan">{` ${moduleName}`}</span>
                <span className="text-owl-text">;</span>
            </code>
        </pre>
    );
}

export default ExportDefault;
