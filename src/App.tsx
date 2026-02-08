import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { Footer, SideBar } from './components';
import Terminal from './components/Terminal';
import { useAppContext } from './context/AppContext';
import Pages from './pages';
import { useLocation } from 'react-router-dom';

ReactGA.initialize('G-CHY8D877KV');

function App() {
    const location = useLocation();

    useEffect(() => {
        // Track page view on every route change
        ReactGA.send({
            hitType: 'pageview',
            page: location.pathname + location.search,
        });
    }, [location]);

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
                <Toaster
                    position="bottom-right"
                    toastOptions={{
                        style: {
                            background: '#1e1e1e',
                            color: '#fff',
                            border: '1px solid #333',
                        },
                        success: {
                            iconTheme: {
                                primary: '#6366f1', // Indigo-500
                                secondary: '#fff',
                            },
                        },
                        error: {
                            iconTheme: {
                                primary: '#ef4444', // Red-500
                                secondary: '#fff',
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default App;
