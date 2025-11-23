import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid'; // Or use /outline for thinner icons
import ItemSideBar from './ItemSideBar';

function SideBar() {
    const [open, setOpen] = useState(true);
    const { pages } = useAppContext();

    const containerVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                when: 'beforeChildren',
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                when: 'afterChildren',
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <aside className="row-span-2 row-start-2 col-start-1 bg-[#1f1f1f] text-white w-64 fixed top-10 bottom-0 left-0 overflow-y-auto z-10">
            <nav>
                <p className="font-semibold p-2 border-b border-gray-700">
                    EXPLORER
                </p>

                <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center gap-1 text-left p-2 hover:bg-gray-700"
                >
                    {open ? (
                        <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                    ) : (
                        <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                    )}
                    portfolio
                </button>
                <AnimatePresence>
                    {open && (
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            style={{ overflow: 'hidden' }}
                        >
                            {pages.map((page) => (
                                <ItemSideBar
                                    key={page.page_name}
                                    page={page}
                                    onClick={() => {}}
                                    variants={itemVariants}
                                />
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </aside>
    );
}

export default SideBar;
