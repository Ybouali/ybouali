import { Card, TerminalIcon } from '../../components';

function TerminalInfo() {
    return (
        <Card className="w-full mt-1 ">
            <p className="text-lg font-semibold text-[#4e6a40] ">{`// Quick Navigation`}</p>
            <div className="flex flex-row gap-3">
                <TerminalIcon height={32} width={32} />
                <div className="flex flex-col">
                    <pre className="text-xl text-[#569cd6]">
                        Terminal Command to Navigate:
                    </pre>
                </div>
            </div>
            <Card className="mt-1 bg-transparent p-1">
                <pre className="text-sm leading-relaxed text-green-400 ">
                    <span className="text-cyan-400">ybouali</span>
                    <span className="text-gray-500">@0.0.0.0</span>
                    <span className="text-purple-400">:~$ </span>
                    code projects
                    <br />
                    <span className="text-cyan-400">ybouali</span>
                    <span className="text-gray-500">@0.0.0.0</span>
                    <span className="text-purple-400">:~$ </span>
                    ls
                    <br />
                    <span className="text-blue-400 animate-pulse">
                        {'who-am-i.tsx '}
                    </span>
                    <span className="text-yellow-400 animate-pulse">
                        {'projects.tsx '}
                    </span>
                    <span className="text-pink-400 animate-pulse">
                        {'education.tsx '}
                    </span>
                    <span className="text-gray-500 animate-pulse">...</span>
                    <br />
                    <span className="text-cyan-400">ybouali</span>
                    <span className="text-gray-500">@0.0.0.0</span>
                    <span className="text-purple-400">:~$ </span>
                    <span className="animate-pulse">code who-am-i</span>
                </pre>
            </Card>
        </Card>
    );
}

export default TerminalInfo;
