import { Card, TerminalIcon } from '../../components';

function TerminalInfo() {
    return (
        <Card className="w-full mt-1 ">
            <p className="text-lg font-semibold text-owl-comment font-mono ">{`// Quick Navigation`}</p>
            <div className="flex flex-row gap-3">
                <TerminalIcon height={32} width={32} />
                <div className="flex flex-col">
                    <pre className="text-xl text-owl-blue">
                        Terminal Command to Navigate:
                    </pre>
                </div>
            </div>
            <Card className="mt-1 bg-transparent p-1">
                <pre className="text-sm leading-relaxed text-owl-green ">
                    <span className="text-owl-cyan">ybouali</span>
                    <span className="text-owl-text-muted">@0.0.0.0</span>
                    <span className="text-owl-purple">:~$ </span>
                    code projects
                    <br />
                    <span className="text-owl-cyan">ybouali</span>
                    <span className="text-owl-text-muted">@0.0.0.0</span>
                    <span className="text-owl-purple">:~$ </span>
                    ls
                    <br />
                    <span className="text-owl-blue animate-pulse">
                        {'who-am-i.tsx '}
                    </span>
                    <span className="text-owl-warning animate-pulse">
                        {'projects.tsx '}
                    </span>
                    <span className="text-owl-purple animate-pulse">
                        {'education.tsx '}
                    </span>
                    <span className="text-owl-text-muted animate-pulse">...</span>
                    <br />
                    <span className="text-owl-cyan">ybouali</span>
                    <span className="text-owl-text-muted">@0.0.0.0</span>
                    <span className="text-owl-purple">:~$ </span>
                    <span className="animate-pulse">code who-am-i</span>
                </pre>
            </Card>
        </Card>
    );
}

export default TerminalInfo;
