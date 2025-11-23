function TopHeader() {
    return (
        <header className="col-span-2 flex flex-row items-center gap-2  row-start-1 bg-[#323333] text-white p-2 fixed top-0 left-0 right-0 z-10">
            <div className="relative w-3 h-3 rounded-full bg-red-500 cursor-pointer group">
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    ×
                </span>
            </div>
            {/* Minimize Button (Yellow) */}
            <div className="relative w-3 h-3 rounded-full bg-yellow-400 cursor-pointer group">
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    -
                </span>
            </div>
            <div className="relative w-3 h-3 rounded-full bg-green-500 cursor-pointer group">
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    ↔
                </span>
            </div>
            <div className="flex items-center">
                <span className="font-semibold ">YASSINE BOUALI</span>
            </div>
        </header>
    );
}

export default TopHeader;
