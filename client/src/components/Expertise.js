import React, { useState } from 'react';
import TiltedCard from '../react-bits-components/TiltedCard';
import Carousel from '../react-bits-components/Carousel';
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
const expertiseItems = [
  {
    title: 'Full-Stack Development',
    description:
      'Building modern web & mobile apps using React, Node.js, Express, and REST APIs.',
  },
  {
    title: 'Mobile Development',
    description:
      'Creating seamless cross-platform apps with Kotlin, Swift, and React Native.',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Deploying cloud-native solutions using Docker, AWS, Azure, and CI/CD pipelines.',
  },
  {
    title: 'Database Design',
    description:
      'Efficient schema design and query optimization with PostgreSQL and MongoDB.',
  },
];

const ExpertiseItem = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-5 py-4 mb-3 hover:bg-white/10 group"
    >
      <div className="flex justify-between items-center text-white text-base font-semibold tracking-wide">
        {title}
        <span className="text-lg text-[#40ffaa] group-hover:scale-125 transition-transform duration-200">
          {open ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
        </span>
      </div>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
        } overflow-hidden`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Expertise = () => {
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
            <ExpertiseItem key={index} title={item.title} description={item.description} />
          ))}
        </div>

        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center h-full" style={{ height: '500px', position: 'relative', width: '100%' }}>
            <Carousel
              baseWidth={600}
              autoplay={true}
              autoplayDelay={2800}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;
