import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RiGraduationCapFill } from "react-icons/ri";
import { BiSolidBriefcase } from "react-icons/bi";
import { useEffect, useState } from 'react';

const workHistory = [
  {
    type: 'work',
    title: 'Full Stack Developer',
    location: 'Bluewave Labs - Toronto, Canada',
    date: '2025',
    iconColor: '#40ffaa',
  },
  {
    type: 'education',
    title: 'Postgraduate Diploma - Mobile Application Development and AI',
    location: 'Georgian College, Canada',
    date: '2024',
    iconColor: '#40ffaa',
  },
  {
    type: 'work',
    title: 'Software Engineer',
    location: 'Pivot Systems - Trivandrum, India',
    date: '2023',
    iconColor: '#40ffaa',
  },
  {
    type: 'work',
    title: 'Associate Software Engineer',
    location: 'Pivot Systems - Trivandrum, India',
    date: '2021',
    iconColor: '#40ffaa',
  },
  {
    type: 'education',
    title: 'Bachelors degree - Computer Science',
    location: 'Kerala Technological University, India',
    date: '2020',
    iconColor: '#40ffaa',
  },
];

const About = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 1170);
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <section
      id="about-section"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 bg-transparent"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        About Me
      </h2>

      <div className="w-full max-w-5xl">
        <VerticalTimeline lineColor="rgba(255,255,255,0.2)">
          {workHistory.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderTop: `3px solid ${item.iconColor}`,
                color: '#ffffff',
                padding: '16px',
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${item.iconColor}`,
              }}
              date={
                <span
                  className="text-xs text-white/80 absolute"
                  style={{
                    top: isMobile ? '70px' : '10px',
                    left: isMobile ? '50%' : index % 2 === 0 ? 'auto' : 'calc(100% - 30px)',
                    right: isMobile ? 'auto' : index % 2 === 0 ? 'calc(100% - 30px)' : 'auto',
                    transform: isMobile ? 'translateX(-50%)' : 'none',
                    textAlign: isMobile ? 'center' : 'unset',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.date}
                </span>
              }
              iconStyle={{
                background: item.iconColor,
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                lineHeight: 0,
              }}              
              icon={
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.type === 'work' ? (
                    <BiSolidBriefcase style={{ display: 'block', transform: 'translateY(5px)' }} />
                  ) : (
                    <RiGraduationCapFill style={{ display: 'block', transform: 'translateY(5px)' }} />
                  )}
                </div>
              }              
            >
              <h3 className="text-white text-sm sm:text-base font-semibold mb-1">
                {item.title}
              </h3>
              <h4 className="text-[#40ffaa] text-xs font-medium">
                {item.location}
              </h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;
