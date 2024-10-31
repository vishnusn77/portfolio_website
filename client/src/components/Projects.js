import React, { useState } from 'react';
import ProjectModal from './ProjectModal'; // Import the modal component

const Projects = () => {
    // State to control modal visibility and selected project
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Sample project data
    const projects = [
        {
            title: 'Dream Journal',
            description: 'Mobile app for logging dreams, featuring cloud sync with Firebase and offline support via SQLite. Built with React Native and TypeScript, it provides users with a seamless way to track and organize their dreams.',
            details: 'Dream Journal is a personal app that allows users to log dreams effortlessly. The app includes cloud syncing with Firebase for secure storage and offline support via SQLite for uninterrupted access.',
        },
        {
            title: 'CrowdWatch AI',
            description: 'Real-time crowd management and health safety system. Using AI for people counting and temperature monitoring, it detects overcrowding and elevated temperatures, triggering automated alerts to help maintain safe conditions in public spaces.',
            details: 'CrowdWatch AI is a safety monitoring tool utilizing AI for crowd control. It provides real-time insights on occupancy levels and temperature detection to alert users about potentially unsafe conditions.',
        },
        {
            title: 'GPT Wrapper',
            description: 'Lightweight tool that integrates conversational AI into custom applications, enabling automated responses and real-time interaction within workflows. It features customizable prompts, API management, and seamless AI-driven support for user needs.',
            details: 'GPT Wrapper is a conversational AI tool for developers. It integrates into applications to provide automated responses and allows customization through prompts, making it ideal for enhanced user support.',
        },
        {
            title: 'Dream Journal',
            description: 'Mobile app for logging dreams, featuring cloud sync with Firebase and offline support via SQLite. Built with React Native and TypeScript, it provides users with a seamless way to track and organize their dreams.',
            details: 'Dream Journal is a personal app that allows users to log dreams effortlessly. The app includes cloud syncing with Firebase for secure storage and offline support via SQLite for uninterrupted access.',
        },
        {
            title: 'CrowdWatch AI',
            description: 'Real-time crowd management and health safety system. Using AI for people counting and temperature monitoring, it detects overcrowding and elevated temperatures, triggering automated alerts to help maintain safe conditions in public spaces.',
            details: 'CrowdWatch AI is a safety monitoring tool utilizing AI for crowd control. It provides real-time insights on occupancy levels and temperature detection to alert users about potentially unsafe conditions.',
        },
        {
            title: 'GPT Wrapper',
            description: 'Lightweight tool that integrates conversational AI into custom applications, enabling automated responses and real-time interaction within workflows. It features customizable prompts, API management, and seamless AI-driven support for user needs.',
            details: 'GPT Wrapper is a conversational AI tool for developers. It integrates into applications to provide automated responses and allows customization through prompts, making it ideal for enhanced user support.',
        }
    ];

    // Function to open modal and set selected project
    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id="projects-section" className="min-h-screen pt-16 pb-16 bg-gray-900 text-white w-full flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-[#106EBE] rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                        <p>{project.description}</p>
                        {/* View Details Button */}
                        <button 
                            onClick={() => openModal(project)} 
                            className="mt-4 px-4 py-2 bg-white text-[#106EBE] font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && selectedProject && (
                <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
            )}
        </section>
    );
};

export default Projects;
