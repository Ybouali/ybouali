import { XMarkIcon } from '@heroicons/react/24/outline';
import { iconMap } from '../SideBar/ItemSideBar';
import { useAppContext } from '../../context/AppContext';
import type { Page } from '../../types';
import { motion } from 'framer-motion';

type Props = {
    page: Page;
};

function ItemNavBar({ page }: Props) {
    const IconComponent =
        iconMap[page.icon_name as keyof typeof iconMap] || null;

    const { addPageToNavbar, removePageFromNavbar } = useAppContext();

    const parentVariants = {
        rest: { transition: { staggerChildren: 0.1 } },
        hover: { transition: { staggerChildren: 0.1 } },
    };

    const iconVariants = {
        rest: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
        hover: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    };

    return (
        <motion.div
            className={`group flex flex-row h-full px-3 py-2 items-center justify-center cursor-pointer hover:bg-gray-700 ${
                page.selected ? 'bg-[#1e1f1f]' : ''
            }`}
            onClick={() => addPageToNavbar(page)}
            variants={parentVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <div className="flex items-center">
                {IconComponent && (
                    <IconComponent className="h-4 w-4 inline-block mr-2 text-gray-400" />
                )}
                {page.page_name}
            </div>
            <motion.div variants={iconVariants}>
                <XMarkIcon
                    className="h-4 w-4 ml-2 text-gray-400 hover:text-white"
                    onClick={(e) => {
                        e.stopPropagation();
                        removePageFromNavbar(page.page_name);
                    }}
                />
            </motion.div>
        </motion.div>
    );
}

export default ItemNavBar;
