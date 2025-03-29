import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import About from '../components/About'; 
import Contact from '../components/Contact';
import Chatbot from '../components/Chatbot';
import Squares from '../react-bits-components/Squares';
import GradientText from '../react-bits-components/GradientText';
import SplitText from '../react-bits-components/SplitText';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

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
          
          <h2 className="text-gray-400 text-xl">Hi, I'm Vishnu Nair</h2>

          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Full-Stack Developer
          </GradientText>

          <SplitText
            text="Full-stack developer creating seamless web & mobile experiences — from backend logic to polished UI."
            className="text-left text-gray-300 text-lg md:text-[1.25rem] leading-relaxed bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 w-full"
            delay={15}
            animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
            animationTo={{ opacity: 1, transform: 'translateY(0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />

          <div className="flex gap-4 pt-2">
            <div className="flex gap-4 pt-2 text-white text-2xl">
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-[#40ffaa] transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-[#40ffaa] transition">
                <FaLinkedin />
              </a>
              <a href="mailto:your@email.com" className="hover:text-[#40ffaa] transition">
                <SiGmail />
              </a>
            </div>
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
