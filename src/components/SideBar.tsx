function SideBar() {
    return (
        <aside className="row-span-2 row-start-2 col-start-1 bg-[#1f1f1f] text-white w-64 fixed top-10 bottom-0 left-0 overflow-y-auto z-10">
            <nav>
                <p className="font-semibold p-2 border-b border-gray-700">
                    EXPLORER
                </p>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default SideBar;
