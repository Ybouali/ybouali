
import { useAppContext } from '../../context/useAppContext';
import ItemNavBar from './ItemNavBar';
import { Bars3Icon } from '@heroicons/react/24/solid';

function PagesNavBar() {
    const { pagesInNavbar, toggleSidebar } = useAppContext();

    return (
        <div className="h-10 bg-owl-surface text-owl-text flex items-center overflow-x-auto no-scrollbar border-b border-owl-border">
            {/* Hamburger Menu for Mobile */}
            <button
                onClick={toggleSidebar}
                className="md:hidden p-2 text-owl-text-muted hover:text-owl-text focus:outline-none"
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
