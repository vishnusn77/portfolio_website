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
import ClickSpark from '../react-bits-components/ClickSpark';
import Button from '../components/Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import pythonIcon from '../assets/skills icons/python.png';
import jsIcon from '../assets/skills icons/js.png';
import tsIcon from '../assets/skills icons/ts.png';
import gitIcon from '../assets/skills icons/git.png';
import postmanIcon from '../assets/skills icons/postman.png';
import expressIcon from '../assets/skills icons/express.png';
import tailwindIcon from '../assets/skills icons/tailwind.png';
import nodejsIcon from '../assets/skills icons/nodejs.png';
import cssIcon from '../assets/skills icons/css.png';
import mysqlIcon from '../assets/skills icons/mysql.png';
import htmlIcon from '../assets/skills icons/html.png';
import reactIcon from '../assets/skills icons/react.png';
import angularIcon from '../assets/skills icons/angular.png';
import dockerIcon from '../assets/skills icons/docker.png';
import azureIcon from '../assets/skills icons/azure.png';
import awsIcon from '../assets/skills icons/aws.png';
import postgresIcon from '../assets/skills icons/postgresql.png';
import mongoIcon from '../assets/skills icons/mongo.png';
import redisIcon from '../assets/skills icons/redis.png';

const Home = () => {

  const skills = [
    { icon: pythonIcon, label: 'Python' },
    { icon: jsIcon, label: 'JavaScript' },
    { icon: reactIcon, label: 'React' },
    { icon: nodejsIcon, label: 'Node.js' },
    { icon: expressIcon, label: 'Express.js' },
    { icon: mongoIcon, label: 'MongoDB' },
    { icon: postgresIcon, label: 'PostgreSQL' },
    { icon: angularIcon, label: 'Angular' },
    { icon: tsIcon, label: 'TypeScript' },
    { icon: htmlIcon, label: 'HTML5' },
    { icon: cssIcon, label: 'CSS3' },
    { icon: mysqlIcon, label: 'MySQL' },
    { icon: tailwindIcon, label: 'Tailwind CSS' },
    { icon: dockerIcon, label: 'Docker' },
    { icon: redisIcon, label: 'Redis' },
    { icon: awsIcon, label: 'AWS' },
    { icon: azureIcon, label: 'Azure' },
    { icon: gitIcon, label: 'Git' },
    { icon: postmanIcon, label: 'Postman' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/vishnusn77' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/vishnu-nair2766/' },
    { icon: <SiGmail />, href: 'mailto:vishnusnair2766@gmail.com' },
  ];
  
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
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
          <h2 className="text-gray-400 text-[1.3rem]">Hi, I'm Vishnu Nair</h2>

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

        <div className="relative w-full flex justify-center items-center">
          <LogoMarquee skills={skills} />
            <Button
              className="absolute mt-[13rem] animate-bounce-down"
              onClick={() =>
                document.getElementById('expertise-section')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Know more about me
            </Button>
        </div>

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
      </ClickSpark>
    );
};

export default Home;
