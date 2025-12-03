import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Page } from '../types';

type AppContextType = {
    pages: Page[];
    setPages: React.Dispatch<React.SetStateAction<Page[]>>;

    pagesInNavbar: Page[];
    setPagesInNavbar: React.Dispatch<React.SetStateAction<Page[]>>;

    addPageToNavbar: (page: Page) => void;

    removePageFromNavbar: (pageName: string) => void;

    openTerminal: boolean;
    setOpenTerminal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [pages, setPages] = useState<Page[]>([
        {
            page_name: 'who-am-i.tsx',
            selected: false,
            icon_name: 'user',
            description: 'Personal bio, background, and CV',
        },
        {
            page_name: 'projects.tsx',
            selected: false,
            icon_name: 'folder',
            description: 'Overview of projects and work',
        },
        {
            page_name: 'education.tsx',
            selected: false,
            icon_name: 'book',
            description: 'Educational background and qualifications',
        },
        {
            page_name: 'certificates.tsx',
            selected: false,
            icon_name: 'certificate',
            description: 'List of earned certificates and achievements',
        },
        {
            page_name: 'contact-me.tsx',
            selected: false,
            icon_name: 'envelope',
            description: 'Contact information and social links',
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
            if (prevPages.length === 0) return prevPages;
            const updated = prevPages.filter((p) => p.page_name !== pageName);
            if (
                updated.length > 0 &&
                prevPages.find((p) => p.page_name === pageName)?.selected
            ) {
                setSelectedPage(updated[0].page_name);
            }
            return updated;
        });
        setPages((prevPages) =>
            prevPages.map((p) =>
                p.page_name === pageName ? { ...p, selected: false } : p
            )
        );

        const n = pagesInNavbar.length;

        if (n > 1) {
            setSelectedPage(pagesInNavbar[n - 1 - 1]?.page_name);
        }

        // setSelectedPage(pagesInNavbar[0]?.page_name);
    };

    const [openTerminal, setOpenTerminal] = useState<boolean>(false);

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
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error('useAppContext must be used inside AppProvider');
    return ctx;
}
