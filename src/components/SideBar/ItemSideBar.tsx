import { motion, type Variants } from 'framer-motion';
import type { Pages } from '../../types';
import {
    BookOpenIcon,
    CheckBadgeIcon,
    EnvelopeIcon,
    FolderIcon,
    UserIcon,
} from '@heroicons/react/24/solid';

type ItemSideBarProps = {
    page: Pages;
    onClick: (pageName: string) => void;
    variants?: Variants | undefined;
};

export const iconMap = {
    user: UserIcon,
    folder: FolderIcon,
    book: BookOpenIcon,
    certificate: CheckBadgeIcon,
    envelope: EnvelopeIcon,
};

const ItemSideBar = ({ page, onClick, variants }: ItemSideBarProps) => {
    const IconComponent =
        iconMap[page.icon_name as keyof typeof iconMap] || null;
    return (
        <motion.li
            key={page.page_name}
            variants={variants}
            className={`p-1 pl-10 hover:underline cursor-pointer ${
                page.selected ? 'underline' : ''
            }`}
            onClick={() => onClick(page.page_name)}
        >
            {IconComponent && (
                <IconComponent className="h-4 w-4 inline-block mr-2 text-gray-400" />
            )}
            <span>{page.page_name}</span>
        </motion.li>
    );
};

export default ItemSideBar;
