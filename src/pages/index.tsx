import { motion, AnimatePresence } from 'framer-motion';
import { PagesNavBar } from '../components';
import { useAppContext } from '../context/AppContext';
import Certificates from './certifitcates';
import ContactMe from './contactMe';
import Educations from './educations';
import Main from './Main';
import Projects from './projects';
import WhoIAm from './whoIAm';
import Blogs from './blogs';

function Pages() {
    const { pagesInNavbar } = useAppContext();

    return (
        <main className="flex flex-col flex-1 h-full overflow-hidden bg-[#1e1f1f] text-gray-300">
            <PagesNavBar />
            
            <div className="flex-1 overflow-y-auto custom-scrollbar p-0 relative">
                <AnimatePresence mode="wait">
                    {pagesInNavbar.length === 0 ? (
                        <motion.div
                            key="main"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            <Main />
                        </motion.div>
                    ) : (
                        pagesInNavbar.map((p) =>
                            p.selected ? (
                                <motion.div
                                    key={p.page_name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-full"
                                >
                                    {p.page_name === 'who-am-i.tsx' && <WhoIAm />}
                                    {p.page_name === 'projects.tsx' && <Projects />}
                                    {p.page_name === 'education.tsx' && (
                                        <Educations />
                                    )}
                                    {p.page_name === 'certificates.tsx' && (
                                        <Certificates />
                                    )}
                                    {p.page_name === 'contact-me.tsx' && (
                                        <ContactMe />
                                    )}
                                    {p.page_name === 'blogs.tsx' && <Blogs />}
                                </motion.div>
                            ) : null
                        )
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}

export default Pages;
