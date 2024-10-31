import React from 'react';
import logo from '../assets/vishnu_logo.png';

const Navbar = () => {
    return (
        <nav className="w-full text-white flex justify-between items-center py-4 px-8 fixed top-0 left-0">
            {/* Logo or Brand Name */}
            <img src={logo} alt="Brand Logo" className="w-16 h-auto mb-4" />
            
            {/* Navigation Links */}
            <div className="flex gap-8">
                <a href="#home" className="hover:text-[#0FFCBE] transition">Home</a>
                <a href="#about" className="hover:text-[#0FFCBE] transition">About</a>
                <a href="#projects" className="hover:text-[#0FFCBE] transition">Projects</a>
                <a href="#contact" className="hover:text-[#0FFCBE] transition">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
