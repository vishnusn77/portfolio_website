import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const workHistory = [
  {
    type: 'work',
    title: 'Software Engineer',
    location: 'Pivot Systems, India',
    date: 'Sep 2021 - Apr 2023',
  },
  {
    type: 'work',
    title: 'Associate Software Engineer',
    location: 'Pivot Systems, India',
    date: 'Sep 2020 - Sep 2021',
  },
  {
    type: 'education',
    title: 'Postgrad Diploma - AI Design & Implementation',
    location: 'Georgian College, Canada',
    date: '2023 - 2024',
  },
  {
    type: 'education',
    title: 'BSc Computer Science',
    location: 'Kerala University, India',
    date: '2016 - 2019',
  },
];

const About = () => {
  return (
    <section
      id="about-section"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
        About Me
      </h2>

      <div className="w-full max-w-5xl">
        <VerticalTimeline lineColor="#40ffaa">
          {workHistory.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              contentArrowStyle={{ borderRight: '7px solid #40ffaa' }}
              date={item.date}
              iconStyle={{ background: '#40ffaa', color: '#000' }}
              icon={item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title text-white text-lg font-semibold">
                {item.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-[#40ffaa] text-sm font-medium">
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
