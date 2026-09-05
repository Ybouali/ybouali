import { createContext } from 'react';
import type { Page } from '../types';

export type AppContextType = {
    pages: Page[];
    setPages: React.Dispatch<React.SetStateAction<Page[]>>;

    pagesInNavbar: Page[];
    setPagesInNavbar: React.Dispatch<React.SetStateAction<Page[]>>;

    addPageToNavbar: (page: Page) => void;
    removePageFromNavbar: (pageName: string) => void;

    openTerminal: boolean;
    setOpenTerminal: React.Dispatch<React.SetStateAction<boolean>>;

    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
};

export const AppContext = createContext<AppContextType | undefined>(
    undefined
);