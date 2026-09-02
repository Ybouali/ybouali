import { motion, type Variants } from 'framer-motion';
import type { Page } from '../../types';
import { useNavigate } from 'react-router-dom';
import {
    BookOpenIcon,
    CheckBadgeIcon,
    DocumentTextIcon,
    EnvelopeIcon,
    FolderIcon,
    UserIcon,
} from '@heroicons/react/24/solid';

type ItemSideBarProps = {
    page: Page;
    onClick: (page: Page) => void;
    variants?: Variants | undefined;
};

export const iconMap = {
    user: UserIcon,
    folder: FolderIcon,
    book: BookOpenIcon,
    certificate: CheckBadgeIcon,
    envelope: EnvelopeIcon,
    'document-text': DocumentTextIcon,
};

const ItemSideBar = ({ page, onClick, variants }: ItemSideBarProps) => {
    const navigate = useNavigate();
    const IconComponent =
        iconMap[page.icon_name as keyof typeof iconMap] || null;
    return (
        <motion.li
            key={page.page_name}
            variants={variants}
            className={`py-1 pl-10 cursor-pointer flex items-center transition-colors ${
                page.selected 
                    ? 'bg-owl-surface-hover text-owl-primary' 
                    : 'text-owl-text hover:bg-owl-surface-hover hover:text-owl-text'
            }`}
            onClick={() => {
                onClick(page);
                navigate(page.path);
            }}
        >
            {IconComponent && (
                <IconComponent className={`h-4 w-4 inline-block mr-2 ${page.selected ? 'text-owl-primary' : 'text-owl-text-muted'}`} />
            )}
            <span className="text-sm font-mono">{page.page_name}</span>
        </motion.li>
    );
};

export default ItemSideBar;
