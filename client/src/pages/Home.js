import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects'; // Import the Projects component
import About from '../components/About'; // Import the About component
import Contact from '../components/Contact';
import Chatbot from '../components/Chatbot';

const lowResImage =
  'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735259359/placeholder_sedr4c.jpg';
const highResImage =
  'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735259361/background_3_qyrtzf.webp';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false); // Track if the high-res image has loaded
  const [imageLoaded, setImageLoaded] = useState(false); // Ensure high-res image is fully loaded

  useEffect(() => {
    const img = new Image();
    img.src = highResImage;
    img.onload = () => {
      setImageLoaded(true); // Ensure the high-res image is loaded
      setIsLoaded(true); // End lazy loading
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center text-center relative">
      {/* Splash Screen */}
      {!isLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="text-white text-lg font-bold animate-pulse">Loading...</div>
        </div>
      )}

      {/* Background Div */}
      <div
        id="background"
        style={{
          backgroundImage: `url(${imageLoaded ? highResImage : lowResImage})`,
          zIndex: -1,
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        {/* Title with Animation */}
        <h1
          className="text-5xl font-bold mb-4 fade-in-title"
          style={{
            background: 'linear-gradient(90deg, #F0F0F0, #CCCCCC)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Hi, I'm VISHNU NAIR
        </h1>

        {/* Divider Line */}
        <div className="w-24 h-0.5 bg-[#F0F0F0] opacity-50 mb-4 fade-in-divider"></div>

        {/* Subtitle with Animation */}
        <div className="max-w-4xl bg-gradient-to-r from-black/40 to-black/10 rounded-lg p-6 mb-8 fade-in-subtitle">
          <p className="text-lg md:text-xl leading-relaxed text-[#F0F0F0]">
            I’m a software engineer specializing in full-stack development, mobile applications, and cloud solutions. Passionate about building impactful, user-friendly applications and exploring innovative uses of AI to solve real-world challenges. Open to new projects and collaborations!
          </p>
        </div>

        {/* Call-to-Action Button */}
        <button
          onClick={() =>
            document
              .getElementById('projects-section')
              .scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          className="mt-8 px-8 py-4 bg-white text-[#106EBE] font-semibold rounded-full shadow-md hover:bg-gray-200 transition transform hover:scale-105 fade-in-button"
        >
          View My Work
        </button>
      </div>
      <Projects
        handleViewAbout={() =>
          document
            .getElementById('about-section')
            .scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      />
      <About />
      <Contact />
      <Chatbot />
    </div>
  );
};

export default Home;
