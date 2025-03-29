import React, { useState } from 'react';
import TiltedCard from '../react-bits-components/TiltedCard';

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
  {
    title: 'UI/UX Implementation',
    description:
      'Polished interfaces with Tailwind, Figma collaboration, and accessibility in mind.',
  },
];

const workflowSteps = [
  {
    title: 'Understand Requirements',
    desc: 'I start with thorough discussions to align on project goals, scope, and deliverables.',
  },
  {
    title: 'Design UI/UX',
    desc: 'Wireframing and prototyping using Figma or similar tools to ensure clean, intuitive interfaces.',
  },
  {
    title: 'Build & Iterate',
    desc: 'Follow modular development, version control, and feedback-driven iterations.',
  },
  {
    title: 'Test & Deploy',
    desc: 'Automated and manual testing, followed by cloud deployment using CI/CD pipelines.',
  },
  {
    title: 'Build & Iterate',
    desc: 'Follow modular development, version control, and feedback-driven iterations.',
  },
  {
    title: 'Build & Iterate',
    desc: 'Follow modular development, version control, and feedback-driven iterations.',
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
          {open ? '-' : '+'}
        </span>
      </div>
      {open && (
        <p className="text-gray-300 text-sm mt-2 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

const Expertise = () => {
  return (
    <section
      id="expertise-section"
      className="min-h-screen w-full px-4 py-20 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-white mb-6">
            What I Focus On
          </h3>
          {expertiseItems.map((item, index) => (
            <ExpertiseItem key={index} title={item.title} description={item.description} />
          ))}
        </div>

        <div className="md:w-1/2 flex flex-col">
            <h3 className="text-2xl font-bold text-[#40ffaa] mb-6">
                My Workflow
            </h3>
            <div className="flex items-center">
                <TiltedCard
                containerHeight="500px"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={10}
                scaleOnHover={1.03}
                showTooltip={false}
                showMobileWarning={false}
                displayOverlayContent={true}
                overlayContent={
                    <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl w-full h-full text-left">
                    <ul className="space-y-3 text-sm text-gray-200">
                        {workflowSteps.map((step, idx) => (
                        <li key={idx}>
                            <p className="font-semibold text-white">{step.title}</p>
                            <p className="text-gray-400">{step.desc}</p>
                        </li>
                        ))}
                    </ul>
                    </div>
                }
                />
            </div>
            </div>
      </div>
    </section>
  );
};

export default Expertise;
