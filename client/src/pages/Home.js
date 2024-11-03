import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects'; // Import the Projects component
import About from '../components/About'; // Import the About component
import Contact from '../components/Contact';
import background from '../assets/background_3.webp';
import Chatbot from '../components/Chatbot';

const Home = () => {
    // Function to scroll to the Projects section
    const handleViewProjects = () => {
        document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Function to scroll to the About section
    const handleViewAbout = () => {
        document.getElementById('about-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center text-center relative"
            style={{
                backgroundColor: '#000020',
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed', // Keeps background fixed on scroll
            }}
        >
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center min-h-screen px-6">
                {/* Title with Animation */}
                <h1 
                    className="text-5xl font-bold mb-4 fade-in-title"
                    style={{ background: 'linear-gradient(90deg, #F0F0F0, #CCCCCC)', WebkitBackgroundClip: 'text', color: 'transparent' }}
                >
                    Hi, I'm VISHNU NAIR
                </h1>

                {/* Divider Line */}
                <div className="w-24 h-0.5 bg-[#F0F0F0] opacity-50 mb-4 fade-in-divider"></div>


                {/* Subtitle with Animation */}
                <div className="max-w-4xl bg-gradient-to-r from-black/40 to-black/10 rounded-lg p-6 mb-8 fade-in-subtitle">
                    <p className="text-lg md:text-xl leading-relaxed text-[#F0F0F0] text-justify">
                        I’m a software engineer specializing in full-stack development, mobile applications, and cloud solutions. Passionate about building impactful, user-friendly applications and exploring innovative uses of AI to solve real-world challenges. Open to new projects and collaborations!
                    </p>
                </div>

                {/* Call-to-Action Button */}
                <button 
                    onClick={handleViewProjects}
                    className="mt-8 px-8 py-4 bg-white text-[#106EBE] font-semibold rounded-full shadow-md hover:bg-gray-200 transition transform hover:scale-105 fade-in-button"
                >
                    View My Work
                </button>
            </div>
            <Projects handleViewAbout={handleViewAbout} />
            <About />
            <Contact />
            <Chatbot />
        </div>
    );
};

export default Home;
