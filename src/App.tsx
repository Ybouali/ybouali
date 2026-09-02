import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { Footer, SideBar } from './components';
import SearchOverlay from './components/SearchOverlay';
import Terminal from './components/Terminal';
import { useAppContext } from './context/AppContext';
import Pages from './pages';

ReactGA.initialize('G-JYT6MH1B00');

function App() {
    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: window.location.pathname + window.location.search,
        });
    }, []);

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
        <div className="h-screen w-screen bg-owl-bg text-owl-text overflow-hidden font-sans md:grid md:grid-cols-[250px_1fr] flex flex-col">
            <SideBar />

            <div className="flex flex-col h-full min-w-0 relative overflow-hidden">
                <Pages />
                
                <SearchOverlay />

                {/* Terminal sits here, taking available space or fixed height, pushing footer down */}
                {openTerminal && <Terminal />}

                <Footer />
                <Toaster
                    position="bottom-right"
                    toastOptions={{
                        style: {
                            background: 'var(--color-owl-surface)',
                            color: 'var(--color-owl-text)',
                            border: '1px solid var(--color-owl-border)',
                        },
                        success: {
                            iconTheme: {
                                primary: 'var(--color-owl-string)',
                                secondary: 'var(--color-owl-bg)',
                            },
                        },
                        error: {
                            iconTheme: {
                                primary: 'var(--color-owl-error)',
                                secondary: 'var(--color-owl-bg)',
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default App;
