import React from 'react';

const DashboardHeader = () => {
    return (
        <header className="bg-white shadow-sm p-4 flex items-center justify-between gap-4 mb-1">
            <div className="text-2xl font-bold text-pink-400  hidden md:block whitespace-nowrap">
                Dashboard
            </div>

            {/* Nhóm các button bên phải (bao gồm cả search) */}
            <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">
                
                <div className="relative w-full max-w-xs md:w-64 flex-shrink">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img
                            src="http://localhost:3001/images/Search.png"
                            alt="Search"
                            className="w-4 h-4 md:w-5 md:h-5"
                        />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Search..."
                    />
                </div>

                {/* Các button icon */}
                <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                    <button
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                        aria-label="Notifications"
                    >
                        <img
                            src="http://localhost:3001/images/Bell1.png"
                            alt="Notifications"
                            className="w-5 h-5 md:w-6 md:h-6 object-contain"
                        />
                    </button>
                    <button
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                        aria-label="Help"
                    >
                        <img
                            src="http://localhost:3001/images/Question1.png"
                            alt="Help"
                            className="w-5 h-5 md:w-6 md:h-6 object-contain"
                        />
                    </button>
                    <button
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                        aria-label="User profile"
                    >
                        <img
                            src="http://localhost:3001/images/Avatar313.png"
                            alt="User"
                            className="w-5 h-5 md:w-6 md:h-6 object-contain rounded-full"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;