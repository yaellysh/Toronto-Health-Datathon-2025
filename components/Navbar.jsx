import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 w-full px-12">
            <div className="flex items-center justify-between">
                <div className="text-white text-lg font-bold">
                    <a href="/">
                        <img src="/SomniSense_Logo.png" alt="Logo" className="h-16 py-4" />
                    </a>
                </div>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                    <li><a href="/start" className="text-gray-300 hover:text-white">Start</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;