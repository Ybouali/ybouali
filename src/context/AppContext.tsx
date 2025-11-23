import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Pages } from '../types';

type AppContextType = {
    pages: Pages[];
    setPages: React.Dispatch<React.SetStateAction<Pages[]>>;

    pagesInNavbar: Pages[];
    setPagesInNavbar: React.Dispatch<React.SetStateAction<Pages[]>>;

    addPageToNavbar: (page: Pages) => void;

    removePageFromNavbar: (pageName: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [pages, setPages] = useState<Pages[]>([
        { page_name: 'who-am-i.tsx', selected: false, icon_name: 'user' },
        { page_name: 'projects.tsx', selected: false, icon_name: 'folder' },
        { page_name: 'education.tsx', selected: false, icon_name: 'book' },
        {
            page_name: 'certificates.tsx',
            selected: false,
            icon_name: 'certificate',
        },
        { page_name: 'contact-me.tsx', selected: false, icon_name: 'envelope' },
    ]);

    const [pagesInNavbar, setPagesInNavbar] = useState<Pages[]>([]);

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

    const addPageToNavbar = (page: Pages) => {
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
    };

    return (
        <AppContext.Provider
            value={{
                pages,
                setPages,
                pagesInNavbar,
                setPagesInNavbar,
                addPageToNavbar,
                removePageFromNavbar,
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
