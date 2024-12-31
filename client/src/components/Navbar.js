import React, { useEffect, useState } from 'react';
import logo from '../assets/vishnu_logo.png';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Smooth scroll function
    const handleScrollToSection = (sectionId) => {
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false); // Close mobile menu on navigation
        }
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

            {/* Hamburger Icon for Mobile */}
            <div className="sm:hidden">
                <button
                    className="focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {/* Navigation Links */}
            <div
                className={`${
                    isMobileMenuOpen ? 'block' : 'hidden'
                } sm:flex sm:gap-8 gap-4 absolute sm:relative top-16 sm:top-auto left-0 w-full sm:w-auto bg-[#000000cc] sm:bg-transparent sm:flex-row flex-col items-center`}
            >
                <button
                    onClick={() => handleScrollToSection('home-section')}
                    className="hover:text-[#0FFCBE] transition px-4 sm:px-0 py-2 text-center"
                >
                    Home
                </button>
                <button
                    onClick={() => handleScrollToSection('projects-section')}
                    className="hover:text-[#0FFCBE] transition px-4 sm:px-0 py-2 text-center"
                >
                    Projects
                </button>
                <button
                    onClick={() => handleScrollToSection('about-section')}
                    className="hover:text-[#0FFCBE] transition px-4 sm:px-0 py-2 text-center"
                >
                    About
                </button>
                <button
                    onClick={() => handleScrollToSection('contact-section')}
                    className="hover:text-[#0FFCBE] transition px-4 sm:px-0 py-2 text-center"
                >
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
