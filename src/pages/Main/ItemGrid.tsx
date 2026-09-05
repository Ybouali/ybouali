import { Card } from '../../components';
import { iconMap } from '../../components/SideBar/iconMap';
import { useAppContext } from '../../context/useAppContext';
import type { Page } from '../../types';
import { useNavigate } from 'react-router-dom';

type ItemGridProps = {
    page: Page;
};

function ItemGrid({ page }: ItemGridProps) {
    const { addPageToNavbar } = useAppContext();
    const navigate = useNavigate();
    
    const onClick = () => {
        addPageToNavbar(page);
        navigate(page.path);
    };
    
    const IconComponent =
        iconMap[page.icon_name as keyof typeof iconMap] || null;
    return (
        <Card className="hover:border-owl-cyan cursor-pointer duration-500 ">
            <div
                onClick={onClick}
                className="flex flex-col items-start justify-center gap-2"
            >
                <div className="flex flex-row items-start justify-center gap-2">
                    {IconComponent && (
                        <IconComponent className="h-8 w-8 text-owl-blue" />
                    )}
                    <p className="text-owl-text font-medium">
                        {page.page_name
                            .substring(0, page.page_name.lastIndexOf('.'))
                            .charAt(0)
                            .toUpperCase() +
                            page.page_name
                                .substring(0, page.page_name.lastIndexOf('.'))
                                .slice(1)}
                    </p>
                </div>
                <p className="text-sm text-owl-text-muted">{page.description}</p>
            </div>
        </Card>
    );
}

export default ItemGrid;
