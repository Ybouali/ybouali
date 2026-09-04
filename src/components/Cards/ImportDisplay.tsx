import React from 'react';

const ImportDisplay = ({
    imports = ['ContactForm', 'SocialLinks'],
    fromPath = './components',
}) => {
    return (
        <pre className="font-mono text-lg text-owl-text">
            <code>
                <span className="text-owl-purple">import</span>
                <span className="text-owl-text"> {'{ '}</span>
                {imports.map((imp, index) => (
                    <React.Fragment key={index}>
                        <span className="text-owl-blue">{imp}</span>
                        {index < imports.length - 1 && (
                            <span className="text-owl-text">, </span>
                        )}
                    </React.Fragment>
                ))}
                <span className="text-owl-text">{' } '}</span>
                <span className="text-owl-purple">from</span>
                <span className="text-owl-green"> {`'${fromPath}'`}</span>
                <span className="text-owl-text">;</span>
            </code>
        </pre>
    );
};

export default ImportDisplay;
