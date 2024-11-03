import React, { useEffect, useState } from 'react';
import logo from '../assets/vishnu_logo.png';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);

    // Smooth scroll function
    const handleScrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            // Only show the navbar when the user is at the top of the page (scrollY is 0)
            if (window.scrollY === 0) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`w-full text-white flex justify-between items-center py-4 px-8 fixed top-0 left-0 transition-opacity duration-300 ${
                showNavbar ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundColor: 'transparent', pointerEvents: showNavbar ? 'auto' : 'none' }}
        >
            {/* Logo or Brand Name */}
            <img src={logo} alt="Brand Logo" className="w-16 h-auto mb-4" />
            
            {/* Navigation Links with Smooth Scroll */}
            <div className="flex gap-8">
                <button 
                    onClick={() => handleScrollToSection('home-section')} 
                    className="hover:text-[#0FFCBE] transition"
                >
                    Home
                </button>
                <button 
                    onClick={() => handleScrollToSection('projects-section')} 
                    className="hover:text-[#0FFCBE] transition"
                >
                    Projects
                </button>
                <button 
                    onClick={() => handleScrollToSection('about-section')} 
                    className="hover:text-[#0FFCBE] transition"
                >
                    About
                </button>
                <button 
                    onClick={() => handleScrollToSection('contact-section')} 
                    className="hover:text-[#0FFCBE] transition"
                >
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
