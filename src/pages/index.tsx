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
        <main
            className="row-start-2 col-start-2 flex flex-col overflow-hidden bg-[#1e1f1f] "
            style={{
                marginLeft: '16rem',
                marginTop: '2.5rem',
                marginBottom: '2rem',
            }}
        >
            <PagesNavBar />
            <AnimatePresence mode="wait">
                {pagesInNavbar.length === 0 ? (
                    <motion.div
                        key="main"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Main />
                    </motion.div>
                ) : (
                    pagesInNavbar.map((p) =>
                        p.selected ? (
                            <motion.div
                                key={p.page_name}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5 }}
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
        </main>
    );
}

export default Pages;
