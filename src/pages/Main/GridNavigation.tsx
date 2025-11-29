import { CodeDisplay } from '../../components';
import { useAppContext } from '../../context/AppContext';
import ItemGrid from './ItemGrid';

function GridNavigation() {
    const { pages } = useAppContext();

    return (
        <div className="flex flex-col w-full items-start justify-center gap-2">
            <p className="text-lg font-semibold text-[#4e6a40] ">{`// Explore Portfolio`}</p>
            <div className="grid grid-cols-2 gap-4 w-full">
                {pages.map((page) => (
                    <ItemGrid key={page.page_name} page={page} />
                ))}
            </div>
            <div className="w-full flex flex-col items-center justify-center mt-4">
                <CodeDisplay />
            </div>
        </div>
    );
}

export default GridNavigation;
