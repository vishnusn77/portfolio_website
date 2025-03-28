import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import About from '../components/About'; 
import Contact from '../components/Contact';
import Chatbot from '../components/Chatbot';
import Squares from '../react-bits-components/Squares';

const lowResImage =
  'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735259359/placeholder_sedr4c.jpg';
const highResImage =
  'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735259361/background_3_qyrtzf.webp';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false); 
  const [imageLoaded, setImageLoaded] = useState(false); 

  useEffect(() => {
    const img = new Image();
    img.src = highResImage;
    img.onload = () => {
      setImageLoaded(true); 
      setIsLoaded(true); 
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center text-center relative">
      <div className="fixed inset-0 -z-10">
        <Squares 
          speed={0.3} 
          squareSize={40}
          direction='diagonal'
          borderColor='#242424'
          hoverFillColor='#292929'
        />
      </div>
      {!isLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="text-white text-lg font-bold animate-pulse">Loading...</div>
        </div>
      )}
      <Navbar />
      <div className="min-h-screen w-full flex items-center justify-center px-6">
        <div className="max-w-3xl w-full flex flex-col items-center text-center gap-6 py-16">
          
          <h2 className="text-gray-400 text-lg">Hi, I'm Vishnu Nair</h2>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Full-Stack Developer
          </h1>

          <p className="text-gray-300 text-lg md:text-[1.25rem] leading-relaxed bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 w-full">
            Full-stack developer creating seamless web & mobile experiences — from backend logic to polished UI.
          </p>

          <div className="flex gap-4 pt-2">
            {/* Optional: social icons here */}
          </div>

        </div>
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
