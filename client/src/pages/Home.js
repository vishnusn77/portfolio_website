import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import About from '../components/About'; 
import Contact from '../components/Contact';
import Chatbot from '../components/Chatbot';
import Expertise from '../components/Expertise';
import Squares from '../react-bits-components/Squares';
import GradientText from '../react-bits-components/GradientText';
import SplitText from '../react-bits-components/SplitText';
import LogoMarquee from '../react-bits-components/LogoMarquee';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import pythonIcon from '../assets/skills icons/python.png';
import jsIcon from '../assets/skills icons/js.png';
import nodejsIcon from '../assets/skills icons/nodejs.png';
import cssIcon from '../assets/skills icons/css.png';
import mysqlIcon from '../assets/skills icons/mysql.png';
import kotlinIcon from '../assets/skills icons/kotlin.png';
import swiftIcon from '../assets/skills icons/swift.png';
import htmlIcon from '../assets/skills icons/html.png';
import cppIcon from '../assets/skills icons/cpp.png';
import reactIcon from '../assets/skills icons/react.png';
import angularIcon from '../assets/skills icons/angular.png';
import dockerIcon from '../assets/skills icons/docker.png';
import azureIcon from '../assets/skills icons/azure.png';
import awsIcon from '../assets/skills icons/aws.png';
import postgresIcon from '../assets/skills icons/postgresql.png';
import mongoIcon from '../assets/skills icons/mongo.png';

const Home = () => {

  const skills = [
    { icon: pythonIcon, label: 'Python' },
    { icon: jsIcon, label: 'JavaScript' },
    { icon: nodejsIcon, label: 'Node.js' },
    { icon: cssIcon, label: 'CSS3' },
    { icon: mysqlIcon, label: 'MySQL' },
    { icon: kotlinIcon, label: 'Kotlin' },
    { icon: swiftIcon, label: 'Swift' },
    { icon: htmlIcon, label: 'HTML5' },
    { icon: cppIcon, label: 'C++' },
    { icon: reactIcon, label: 'React' },
    { icon: angularIcon, label: 'Angular' },
    { icon: dockerIcon, label: 'Docker' },
    { icon: azureIcon, label: 'Azure' },
    { icon: awsIcon, label: 'AWS' },
    { icon: postgresIcon, label: 'PostgreSQL' },
    { icon: mongoIcon, label: 'MongoDB' },
    
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/your-username' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/your-username' },
    { icon: <SiGmail />, href: 'mailto:your@email.com' },
  ];
  
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

      <Navbar />

      <div className="min-h-screen w-full flex flex-col items-center justify-center px-6">
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
            text="Building seamless, performant apps across web and mobile, blending clean code with thoughtful design."
            className="text-left text-gray-300 text-lg md:text-[1.25rem] leading-relaxed bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 w-full"
            delay={15}
            animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
            animationTo={{ opacity: 1, transform: 'translateY(0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />

          <div className="flex gap-4 pt-2">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white text-2xl hover:text-[#40ffaa] hover:scale-105 transition-all duration-200 backdrop-blur"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <LogoMarquee skills={skills} />
        </div>
        <Expertise />
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
