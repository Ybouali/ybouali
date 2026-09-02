import { motion, AnimatePresence } from 'framer-motion';
import { PagesNavBar } from '../components';
import { useAppContext } from '../context/AppContext';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Certificates from './certifitcates';
import ContactMe from './contactMe';
import Educations from './educations';
import Main from './Main';
import Projects from './projects';
import WhoIAm from './whoIAm';
import Blogs from './blogs';

const PageTransition = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
        className="h-full"
    >
        {children}
    </motion.div>
);

const HomeTransition = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="h-full"
    >
        {children}
    </motion.div>
);

function Pages() {
    const { pagesInNavbar, pages, addPageToNavbar, setPagesInNavbar } = useAppContext();
    const location = useLocation();

    // Sync URL with IDE Tabs
    useEffect(() => {
        if (location.pathname === '/') {
            setPagesInNavbar((prev) => prev.map(p => ({ ...p, selected: false })));
            return;
        }

        const pageForRoute = pages.find((p) => p.path === location.pathname);
        if (pageForRoute) {
            // Check if it's already in the navbar
            const exists = pagesInNavbar.find((p) => p.page_name === pageForRoute.page_name);
            
            // We need to mark it as selected in the navbar state
            setPagesInNavbar((prev) => {
                const newNavbar = exists ? prev : [...prev, pageForRoute];
                return newNavbar.map((p) => ({
                    ...p,
                    selected: p.path === location.pathname
                }));
            });
        }
    }, [location.pathname, pages]);

    return (
        <main className="flex flex-col flex-1 h-full overflow-hidden bg-[#1e1f1f] text-gray-300">
            {pagesInNavbar.length > 0 && <PagesNavBar />}
            
            <div className="flex-1 overflow-y-auto custom-scrollbar p-0 relative">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<HomeTransition><Main /></HomeTransition>} />
                        <Route path="/about" element={<PageTransition><WhoIAm /></PageTransition>} />
                        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                        <Route path="/education" element={<PageTransition><Educations /></PageTransition>} />
                        <Route path="/certificates" element={<PageTransition><Certificates /></PageTransition>} />
                        <Route path="/contact" element={<PageTransition><ContactMe /></PageTransition>} />
                        <Route path="/blog" element={<PageTransition><Blogs /></PageTransition>} />
                    </Routes>
                </AnimatePresence>
            </div>
        </main>
    );
}

export default Pages;
