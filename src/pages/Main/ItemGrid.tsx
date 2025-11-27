import { Card } from '../../components';
import { iconMap } from '../../components/SideBar/ItemSideBar';
import { useAppContext } from '../../context/AppContext';
import type { Page } from '../../types';

type ItemGridProps = {
    page: Page;
};

function ItemGrid({ page }: ItemGridProps) {
    const { addPageToNavbar } = useAppContext();
    const onClick = () => {
        addPageToNavbar(page);
    };
    const IconComponent =
        iconMap[page.icon_name as keyof typeof iconMap] || null;
    return (
        <Card className="hover:border-gray-400 cursor-pointer duration-500 ">
            <div
                onClick={onClick}
                className="flex flex-col items-start justify-center gap-2"
            >
                <div className="flex flex-row items-start justify-center gap-2">
                    {IconComponent && (
                        <IconComponent className="h-8 w-8 text-gray-400" />
                    )}
                    <p className="text-gray-300 font-medium">
                        {page.page_name
                            .substring(0, page.page_name.lastIndexOf('.'))
                            .charAt(0)
                            .toUpperCase() +
                            page.page_name
                                .substring(0, page.page_name.lastIndexOf('.'))
                                .slice(1)}
                    </p>
                </div>
                <p className="text-sm text-gray-500">{page.description}</p>
            </div>
        </Card>
    );
}

export default ItemGrid;
