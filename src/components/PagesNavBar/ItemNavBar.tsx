import { XMarkIcon } from '@heroicons/react/24/outline';
import { iconMap } from '../SideBar/ItemSideBar';
import { useAppContext } from '../../context/AppContext';
import type { Page } from '../../types';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type Props = {
    page: Page;
};

function ItemNavBar({ page }: Props) {
    const IconComponent =
        iconMap[page.icon_name as keyof typeof iconMap] || null;

    const { addPageToNavbar, removePageFromNavbar, pagesInNavbar } = useAppContext();
    const navigate = useNavigate();

    const parentVariants = {
        rest: { transition: { staggerChildren: 0.1 } },
        hover: { transition: { staggerChildren: 0.1 } },
    };

    const iconVariants = {
        rest: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
        hover: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    };

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        removePageFromNavbar(page.page_name);
        
        // Navigate to the next available page in the navbar
        const remainingPages = pagesInNavbar.filter(p => p.page_name !== page.page_name);
        if (remainingPages.length > 0) {
            navigate(remainingPages[remainingPages.length - 1].path);
        } else {
            navigate('/');
        }
    };

    return (
        <motion.div
            className={`group flex flex-row h-full px-3 py-2 items-center justify-center cursor-pointer border-r border-owl-border transition-colors ${
                page.selected ? 'bg-owl-bg text-owl-primary border-t-2 border-t-owl-accent' : 'bg-owl-surface hover:bg-owl-surface-hover text-owl-text-muted'
            }`}
            onClick={() => {
                addPageToNavbar(page);
                navigate(page.path);
            }}
            variants={parentVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <div className="flex items-center text-sm font-mono">
                {IconComponent && (
                    <IconComponent className={`h-4 w-4 inline-block mr-2 ${page.selected ? 'text-owl-primary' : 'text-owl-text-muted'}`} />
                )}
                {page.page_name}
            </div>
            <motion.div variants={iconVariants}>
                <XMarkIcon
                    className="h-4 w-4 ml-2 text-owl-text-muted hover:text-owl-error"
                    onClick={handleClose}
                />
            </motion.div>
        </motion.div>
    );
}

export default ItemNavBar;
