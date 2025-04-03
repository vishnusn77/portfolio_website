import React, { useState } from 'react';
import Carousel from '../react-bits-components/Carousel';
import { IoMdArrowDropup, IoMdArrowDropdown, IoMdCloudUpload } from "react-icons/io";
import Button from './Button';
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt, FaServer } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiSolidServer } from "react-icons/bi";

const expertiseItems = [
  {
    icon: <CgWebsite className="text-[#61DAFB] mr-2" />,
    title: 'Web Development',
    description:
      `• Develop web apps using modern tech stacks\n• Focus on clean architecture and performance optimization`,
  },
  {
    icon: <FaMobileAlt className="text-[#61DAFB] mr-2" />,
    title: 'Mobile Development',
    description:
      `• Build cross-platform apps with React Native\n• Ensure smooth performance on iOS and Android`,
  },
  {
    icon: <MdOutlineDesignServices className="text-[#61DAFB] mr-2" />,
    title: 'Responsive UI Design',
    description:
    `• Design flexible interfaces with Tailwind CSS\n• Optimize layouts for all screen sizes`,
  },
  {
    icon: <BiSolidServer className="text-[#61DAFB] mr-2" />,
    title: 'RESTful API Development',
    description:
      `• Build scalable APIs with Node.js and Express\n• Ensure secure data handling and integration`,
  },
  {
    icon: <IoMdCloudUpload className="text-[#61DAFB] mr-2" />,
    title: 'Cloud Deployment',
    description:
      `• Deploy dockerized apps on AWS/Azure\n• Automate builds and releases with CI/CD`,
  },
];

const ExpertiseItem = ({ icon, title, description, isOpen, onToggle }) => {

  return (
    <div
      onClick={onToggle}
      className="w-full max-w-md cursor-pointer transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-5 py-4 mb-3 hover:bg-white/10 group"
    >
      <div className="flex justify-between items-center text-white text-base font-semibold tracking-wide">
      <div className="flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </div>
        <span className="text-lg text-[#40ffaa] group-hover:scale-125 transition-transform duration-200">
          {isOpen ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
        </span>
      </div>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
        } overflow-hidden`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-300 text-sm mt-2 leading-relaxed text-left whitespace-pre-line">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Expertise = () => {

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="expertise-section"
      className="min-h-screen w-full px-4 py-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        What I Focus On
      </h2>
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 flex flex-col justify-center">
          {expertiseItems.map((item, index) => (
            <ExpertiseItem 
              key={index} 
              icon={item.icon}
              title={item.title} 
              description={item.description} 
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
          ))}
        </div>

        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center h-full" style={{ height: '500px', position: 'relative', width: '100%' }}>
            <Carousel
              baseWidth={490}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>
      </div>
      <Button
          className="animate-bounce-down"
          onClick={() =>
            document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          See my projects
      </Button>
    </section>
  );
};

export default Expertise;
