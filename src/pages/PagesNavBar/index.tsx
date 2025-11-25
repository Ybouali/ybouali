import { useAppContext } from '../../context/AppContext';
import ItemNavBar from './ItemNavBar';

function PagesNavBar() {
    const { pagesInNavbar } = useAppContext();

    return (
        <div className="h-10 bg-[#2a2b2b] text-white flex items-center ">
            {pagesInNavbar.map((page) => (
                <ItemNavBar key={page.page_name} page={page} />
            ))}
        </div>
    );
}

export default PagesNavBar;
