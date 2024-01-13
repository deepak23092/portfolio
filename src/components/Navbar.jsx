import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    }

    return (
        <nav className="bg-navcolor sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="#home" className="text-white no-underline md:text-2xl text-xl font-serif">Deepak</a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden lg:block text-lg">
                            <a href="#home" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Home</a>
                            <a href="#about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md no-underline">About</a>
                            <a href="#skills" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Skills</a>
                            <a href="#services" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Services</a>
                            <a href="#qualification" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Qualification</a>
                            <a href="#projects" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Projects</a>
                            <a href="#contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Contact</a>
                        </div>
                        <div className="block lg:hidden">
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
            <div className={`${isOpen ? 'block' : 'hidden'} absolute top-16 inset-x-0 bg-navcolor lg:hidden transition duration-500 ease-in-out`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#home" onClick={handleLinkClick} className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Home</a>
                    <a href="#about" onClick={handleLinkClick} className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md no-underline">About</a>
                    <a href="#skills" onClick={handleLinkClick} className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Skills</a>
                    <a href="#services" onClick={handleLinkClick} className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Services</a>
                    <a href="#qualification" onClick={handleLinkClick} className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Qualification</a>
                    <a href="#projects" onClick={handleLinkClick} className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Projects</a>
                    <a href="#contact" onClick={handleLinkClick} className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md no-underline">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
