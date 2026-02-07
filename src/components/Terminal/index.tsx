import { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';

function Terminal() {
    const { setOpenTerminal, addPageToNavbar, pages } = useAppContext();
    const [command, setCommand] = useState('');
    const [history, setHistory] = useState<{ cmd: string; output: string }[]>(
        []
    );
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!command.trim()) return;

        let output = '';
        const lowerCmd = command.trim().toLowerCase();

        if (lowerCmd === 'clear') {
            setHistory([]);
            setCommand('');
            return; // Don't add to history
        } else if (lowerCmd === 'help') {
            output =
                'Available commands:\n' +
                '- ls: List Projects screens\n' +
                '- code: Open screen \n' +
                '- clear: Clear the terminal screen\n' +
                '- help: Show this help message';
        } else if (lowerCmd === 'ls') {
            output =
                'who-am-i.tsx projects.tsx education.tsx certificates.tsx contact-me.tsx';
        } else if (lowerCmd.startsWith('code')) {
            const fileName = lowerCmd.split(' ')[1];

            if (fileName) {
                output = `Opening ${fileName} in VS Code ... `;

                pages.map((p) => {
                    if (p.page_name.startsWith(fileName)) {
                        addPageToNavbar(p);
                    }
                });
            } else {
                output = 'Please specify a file to open.';
            }
        } else {
            output = `Command not found: ${command}`;
        }

        setHistory([...history, { cmd: command, output }]);
        setCommand('');
    };

    return (
        <motion.div
            initial={{ height: 0 }}
            animate={{ height: '60%' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="bg-[#1e1e1e] text-white font-mono text-sm overflow-hidden flex flex-col border-t border-gray-600 shrink-0 w-full"
        >
            <div className="flex justify-between items-center bg-[#252526] px-4 py-1 select-none">
                <span className="text-xs uppercase">Terminal</span>
                <button
                    className="text-white hover:text-gray-300 transition-colors"
                    onClick={() => setOpenTerminal(false)}
                >
                    ×
                </button>
            </div>
            <div ref={terminalRef} className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                <p className="text-green-400">Welcome to the terminal!</p>
                {history.map((item, index) => (
                    <div key={index}>
                        <span className="text-blue-400">
                            {`ybouali@0.0.0.0:~$ ${item.cmd}`}
                        </span>
                        <br />
                        {item.output.split('\n').map((line, index) => (
                            <span key={index} className="text-gray-300">
                                {line}
                                <br />
                            </span>
                        ))}
                        <br />
                    </div>
                ))}
            </div>
            <form
                onSubmit={handleCommand}
                className="bg-[#1e1e1e] px-4 py-2 flex items-center border-t border-gray-600"
            >
                <span className="text-blue-400 mr-2">{`ybouali@0.0.0.0:~$ `}</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-white placeholder-gray-600"
                    placeholder="Type a command..."
                />
            </form>
        </motion.div>
    );
}

export default Terminal;
