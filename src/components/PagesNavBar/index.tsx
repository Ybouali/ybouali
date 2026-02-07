import { useAppContext } from '../../context/AppContext';
import ItemNavBar from './ItemNavBar';
import { Bars3Icon } from '@heroicons/react/24/solid';

function PagesNavBar() {
    const { pagesInNavbar, toggleSidebar } = useAppContext();

    return (
        <div className="h-10 bg-[#2a2b2b] text-white flex items-center overflow-x-auto no-scrollbar">
            {/* Hamburger Menu for Mobile */}
            <button
                onClick={toggleSidebar}
                className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
            >
                <Bars3Icon className="h-6 w-6" />
            </button>

            {pagesInNavbar.map((page) => (
                <ItemNavBar key={page.page_name} page={page} />
            ))}
        </div>
    );
}

export default PagesNavBar;
