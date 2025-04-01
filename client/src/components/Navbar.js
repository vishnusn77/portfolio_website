import React, { useEffect, useState } from 'react';
import logo from '../assets/vishnu_logo.png';
import ShinyText from '../react-bits-components/ShinyText';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScrollToSection = (sectionId) => {
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false); 
        }
    };

    useEffect(() => {
        const handleScroll = () => {
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
            <img src={logo} alt="Brand Logo" className="w-16 h-auto mb-4" />
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
            <div
                className={`${
                    isMobileMenuOpen ? 'block' : 'hidden'
                } sm:flex sm:gap-8 gap-4 absolute sm:relative top-24 sm:top-auto left-0 w-full sm:w-auto bg-[#000000cc] sm:bg-transparent sm:flex-row flex-col items-center`}
            >
                <button
                    onClick={() => handleScrollToSection('home-section')}
                    className="hover:text-[#0FFCBE] transition px-4 sm:px-0 py-2 text-center"
                >
                    <ShinyText
                        text="Home"
                        speed={3}
                        disabled={false}
                        className="text-base"
                    />
                </button>
                <button
                    onClick={() => handleScrollToSection('projects-section')}
                    className="hover:text-[#0FFCBE] transition px-4 sm:px-0 py-2 text-center"
                >
                    <ShinyText
                        text="Projects"
                        speed={3}
                        disabled={false}
                        className="text-base"
                    />
                </button>
                <button
                    onClick={() => handleScrollToSection('about-section')}
                    className="hover:text-[#0FFCBE] transition px-4 sm:px-0 py-2 text-center"
                >
                    <ShinyText
                        text="About"
                        speed={3}
                        disabled={false}
                        className="text-base"
                    />
                </button>
                <button
                    onClick={() => handleScrollToSection('contact-section')}
                    className="hover:text-[#0FFCBE] transition px-4 sm:px-0 py-2 text-center"
                >
                    <ShinyText
                        text="Contact"
                        speed={3}
                        disabled={false}
                        className="text-base"
                    />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
