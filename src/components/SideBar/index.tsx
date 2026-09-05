import type { Page } from '../../types';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Cog6ToothIcon, DocumentIcon } from '@heroicons/react/24/outline'; // Activity Bar icons
import ItemSideBar from './ItemSideBar';
import { useAppContext } from '../../context/useAppContext';

function SideBar() {
    const [open, setOpen] = useState(true);
    const { pages, addPageToNavbar, isSidebarOpen, closeSidebar } = useAppContext();

    const containerVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.2,
                when: 'beforeChildren',
                staggerChildren: 0.05,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -10 },
    };

    const handleFileClick = (page: Page) => {
        addPageToNavbar(page);
        // On mobile, close sidebar after selecting a file
        if (window.innerWidth < 768) {
            closeSidebar();
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={closeSidebar}
                        className="fixed inset-0 bg-black z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Container */}
            <aside
                className={`flex fixed md:static top-0 bottom-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 md:flex-row h-screen md:w-full`}
            >
                {/* Activity Bar (Leftmost narrow strip) - Fixed 48px/3rem */}
                <div className="w-12 bg-owl-bg flex flex-col items-center py-4 justify-between h-full border-r border-owl-border text-owl-text-muted shrink-0">
                    <div className="flex flex-col gap-6">
                        <div className="cursor-pointer p-2 border-l-2 border-owl-keyword text-owl-text">
                            <DocumentIcon className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 mb-2">
                        <div className="cursor-pointer p-2 hover:text-owl-text transition-colors">
                            <Cog6ToothIcon className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                {/* Explorer Pane - Fills remaining width of the sidebar column */}
                <div className="flex-1 bg-owl-surface flex flex-col h-full border-r border-owl-border min-w-0">
                    {/* Header */}
                    <div className="h-9 flex items-center px-4 text-xs tracking-wider text-owl-text-muted font-normal uppercase select-none shrink-0">
                        Explorer
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {/* Portfolio Section Header */}
                        <div
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-1 px-1 py-1 cursor-pointer hover:bg-owl-surface-hover text-owl-text font-bold text-xs group"
                        >
                            <span className="text-owl-text">
                                {open ? (
                                    <ChevronDownIcon className="w-4 h-4" />
                                ) : (
                                    <ChevronRightIcon className="w-4 h-4" />
                                )}
                            </span>
                            <span className="font-bold">PORTFOLIO</span>
                        </div>

                        {/* Files List */}
                        <AnimatePresence>
                            {open && (
                                <motion.ul
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="flex flex-col"
                                >
                                    {pages.map((page) => (
                                        <ItemSideBar
                                            key={page.page_name}
                                            page={page}
                                            onClick={() => handleFileClick(page)}
                                            variants={itemVariants}
                                        />
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default SideBar;
