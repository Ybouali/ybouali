import { useState, type ReactNode } from 'react';
import type { Page } from '../types';
import { AppContext } from './AppContextContext';

export function AppProvider({ children }: { children: ReactNode }) {
    const [pages, setPages] = useState<Page[]>([
        {
            page_name: 'who-i-am.tsx',
            selected: false,
            icon_name: 'user',
            description: 'Personal bio, background, and the usual origin story',
            path: '/who-i-am',
        },
        {
            page_name: 'projects.tsx',
            selected: false,
            icon_name: 'folder',
            description: 'Overview of projects and work',
            path: '/projects',
        },
        {
            page_name: 'education.tsx',
            selected: false,
            icon_name: 'book',
            description: 'Educational background and qualifications',
            path: '/education',
        },
        {
            page_name: 'certificates.tsx',
            selected: false,
            icon_name: 'certificate',
            description: 'List of earned certificates and achievements',
            path: '/certificates',
        },
        {
            page_name: 'contact-me.tsx',
            selected: false,
            icon_name: 'envelope',
            description: 'Contact information and social links',
            path: '/contact',
        },
        {
            page_name: 'blogs.tsx',
            selected: false,
            icon_name: 'document-text',
            description: 'Blog posts and articles',
            path: '/blog',
        },
    ]);

    const [pagesInNavbar, setPagesInNavbar] = useState<Page[]>([]);

    const setSelectedPage = (pageName: string) => {
        setPages((prevPages) =>
            prevPages.map((page) =>
                page.page_name === pageName
                    ? { ...page, selected: true }
                    : { ...page, selected: false }
            )
        );

        setPagesInNavbar((prevPages) =>
            prevPages.map((page) =>
                page.page_name === pageName
                    ? { ...page, selected: true }
                    : { ...page, selected: false }
            )
        );
    };

    const addPageToNavbar = (page: Page) => {
        setPagesInNavbar((prevPages) => {
            if (prevPages.find((p) => p.page_name === page.page_name)) {
                return prevPages;
            }

            return [...prevPages, page];
        });

        setSelectedPage(page.page_name);
    };

    const removePageFromNavbar = (pageName: string) => {
        setPagesInNavbar((prevPages) => {
            if (prevPages.length === 0) {
                return prevPages;
            }

            const updated = prevPages.filter(
                (page) => page.page_name !== pageName
            );

            if (
                updated.length > 0 &&
                prevPages.find((page) => page.page_name === pageName)?.selected
            ) {
                setSelectedPage(updated[0].page_name);
            }

            return updated;
        });

        setPages((prevPages) =>
            prevPages.map((page) =>
                page.page_name === pageName
                    ? { ...page, selected: false }
                    : page
            )
        );

        const n = pagesInNavbar.length;

        if (n > 1) {
            setSelectedPage(pagesInNavbar[n - 2]?.page_name);
        }
    };

    const [openTerminal, setOpenTerminal] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <AppContext.Provider
            value={{
                pages,
                setPages,
                pagesInNavbar,
                setPagesInNavbar,
                addPageToNavbar,
                removePageFromNavbar,
                openTerminal,
                setOpenTerminal,
                isSidebarOpen,
                toggleSidebar,
                closeSidebar,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}