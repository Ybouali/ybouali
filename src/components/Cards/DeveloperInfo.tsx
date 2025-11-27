type DeveloperInfoProps = {
    labelOne: string;
    labelTwo: string;
    valueOne: string;
    valueTwo: string;
    className?: string;
};

function DeveloperInfo({
    labelOne,
    labelTwo,
    valueOne,
    valueTwo,
    className,
}: DeveloperInfoProps) {
    return (
        <div className={`flex flex-col items-start gap-1 ${className}`}>
            <pre className="text-xl text-[#4e6a40]">/**</pre>
            <pre className="text-xl">
                <span className="text-[#4e6a40]">{`*  `}</span>
                <span className="text-[#47ae98]">{`@${labelOne} `}</span>
                <span className="text-[#569cd6]">{valueOne}</span>
            </pre>
            <pre className="text-xl">
                <span className="text-[#4e6a40]">{`*  `}</span>
                <span className="text-[#47ae98]">{`@${labelTwo}  `}</span>
                <span className="text-[#569cd6]">{valueTwo}</span>
            </pre>
            <pre className="text-xl text-[#4e6a40] ">*/</pre>
        </div>
    );
}

export default DeveloperInfo;
