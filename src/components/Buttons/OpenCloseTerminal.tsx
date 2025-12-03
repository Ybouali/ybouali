import { useAppContext } from '../../context/AppContext';
import { Terminal } from 'lucide-react';

function OpenCloseTerminal() {
    const { openTerminal, setOpenTerminal } = useAppContext();

    return (
        <div className="fixed bottom-0 right-0 z-10 my-0.5">
            <button
                className=" text-white px-1 py-1 rounded-l-md shadow-md hover:bg-blue-500 transition-colors flex items-center gap-2"
                onClick={() => setOpenTerminal(!openTerminal)}
            >
                <Terminal size={20} />
                {openTerminal ? 'Close Terminal' : 'Open Terminal'}
            </button>
        </div>
    );
}

export default OpenCloseTerminal;
