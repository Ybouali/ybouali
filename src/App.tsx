import { useEffect } from 'react';
import './App.css';
import { Footer, SideBar } from './components';
import Terminal from './components/Terminal';
import { useAppContext } from './context/AppContext';
import Pages from './pages';

function App() {
    const { openTerminal, setOpenTerminal } = useAppContext();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Check for Ctrl + ` (backtick)
            if (e.ctrlKey && e.key === '`') {
                e.preventDefault();
                setOpenTerminal((prev) => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [setOpenTerminal]);

    return (
        <div className="h-screen w-screen bg-[#1e1f1f] text-white overflow-hidden font-sans md:grid md:grid-cols-[250px_1fr] flex flex-col">
            <SideBar />
            
            <div className="flex flex-col h-full min-w-0 relative overflow-hidden">
                <Pages />
                
                {/* Terminal sits here, taking available space or fixed height, pushing footer down */}
                {openTerminal && <Terminal />}
                
                <Footer />
            </div>
        </div>
    );
}

export default App;
