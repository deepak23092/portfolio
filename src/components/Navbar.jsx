import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    }

    return (
        <nav className="bg-navcolor">
            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-white no-underline md:text-2xl text-xl">Portfolio</Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:block text-lg">
                            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Home</Link>
                            <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md no-underline">About</Link>
                            <Link to="/skills" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Skills</Link>
                            <Link to="/projects" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Projects</Link>
                            <Link to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Contact</Link>
                        </div>
                        <div className="block md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 px-3 py-2 rounded-md"
                            >
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} absolute top-16 inset-x-0 bg-navcolor md:hidden transition duration-500 ease-in-out`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/" onClick={handleLinkClick} className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Home</Link>
                    <Link to="/about" onClick={handleLinkClick} className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md no-underline">About</Link>
                    <Link to="/skills" onClick={handleLinkClick} className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Skills</Link>
                    <Link to="/projects" onClick={handleLinkClick} className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Projects</Link>
                    <Link to="/contact" onClick={handleLinkClick} className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
