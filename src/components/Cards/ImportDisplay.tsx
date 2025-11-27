import React from 'react';

const ImportDisplay = ({
    imports = ['ContactForm', 'SocialLinks'],
    fromPath = './components',
}) => {
    return (
        <pre className="font-mono text-lg text-white">
            <code>
                <span className="text-purple-400">import</span>
                <span className="text-white"> {'{ '}</span>
                {imports.map((imp, index) => (
                    <React.Fragment key={index}>
                        <span className="text-blue-400">{imp}</span>
                        {index < imports.length - 1 && (
                            <span className="text-white">, </span>
                        )}
                    </React.Fragment>
                ))}
                <span className="text-white">{' } '}</span>
                <span className="text-purple-400">from</span>
                <span className="text-green-400"> {`'${fromPath}'`}</span>
                <span className="text-white">;</span>
            </code>
        </pre>
    );
};

export default ImportDisplay;
