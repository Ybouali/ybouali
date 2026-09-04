import { ShareIcon, BellIcon, PlayIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useAppContext } from '../context/AppContext';

function Footer() {
    const { openTerminal, setOpenTerminal } = useAppContext();

    return (
        <footer className="h-6 bg-owl-surface text-owl-text flex items-center justify-between px-2 text-xs select-none z-10 w-full shrink-0 border-t border-owl-border">
            <div className="flex items-center gap-4">
                <a
                    href="https://github.com/ybouali/Ybouali"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:bg-owl-surface-hover px-1 rounded cursor-pointer transition-colors"
                >
                    <ShareIcon className="w-3 h-3" />
                    <span>night-owl</span>
                </a>
                <div className="flex items-center gap-1 hover:bg-owl-surface-hover px-1 rounded cursor-pointer transition-colors">
                    <div className="w-3 h-3 rounded-full bg-transparent border border-owl-text-muted flex items-center justify-center">
                        <span className="text-[8px]">×</span>
                    </div>
                    <span>0</span>
                    <div className="w-3 h-3 rounded-full bg-transparent border border-owl-text-muted flex items-center justify-center ml-1">
                        <span className="text-[8px]">!</span>
                    </div>
                    <span>0</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 hover:bg-owl-surface-hover px-1 rounded cursor-pointer transition-colors">
                   <span>UTF-8</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-owl-surface-hover px-1 rounded cursor-pointer transition-colors">
                   <span>TypeScript React</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-owl-surface-hover px-1 rounded cursor-pointer transition-colors">
                    <BellIcon className="w-3 h-3" />
                </div>
                
                {/* Terminal Toggle Button */}
                <button 
                    onClick={() => setOpenTerminal(!openTerminal)}
                    className={`flex items-center gap-1 px-1 rounded cursor-pointer transition-colors ${openTerminal ? 'bg-owl-surface-hover' : 'hover:bg-owl-surface-hover'}`}
                    title="Toggle Terminal (Ctrl + `)"
                >
                    {openTerminal ? (
                        <XMarkIcon className="w-3 h-3" />
                    ) : (
                        <PlayIcon className="w-3 h-3" />
                    )}
                </button>
            </div>
        </footer>
    );
}

export default Footer;
