function Footer() {
    return (
        <footer className="col-span-2 row-start-3 bg-blue-900 text-white p-2 fixed bottom-0 left-0 right-0 z-10">
            {/* Bottom bar content: e.g., Status, Git branch, etc. */}
            <div className="flex items-center justify-between">
                <span>Status: Ready</span>
                <span>Line 1, Column 1</span>
            </div>
        </footer>
    );
}

export default Footer;
