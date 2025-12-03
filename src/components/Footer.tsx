import OpenCloseTerminal from './Buttons/OpenCloseTerminal';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="col-span-2 row-start-3 bg-blue-900 text-white p-1 fixed bottom-0 left-0 right-0 z-10">
            <div className="flex items-center justify-between py-1">
                <p className="text-sm">
                    &copy; {currentYear} Yassine Bouali. All rights reserved.
                </p>
                {/* Open hide terminal button */}
                <OpenCloseTerminal />
            </div>
        </footer>
    );
}

export default Footer;
