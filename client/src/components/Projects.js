import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import sample1 from '../assets/template.jpg';
import sample2 from '../assets/template.jpg';
import sample3 from '../assets/template.jpg';
import background from '../assets/background_8.jpg';

const Projects = ({ handleViewAbout }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'Dream Journal',
            description: 'An app for logging and organizing user dreams with cloud sync and offline access.',
            details: 'Dream Journal is a personalized mobile application that enables users to securely log, organize, and reflect on their dreams. With the added benefits of cloud synchronization and offline functionality, users can easily access their dream logs anytime, across multiple devices. The app also provides customizable features like categorization, tagging, and search functions, making it easier to find past entries. By leveraging Firebase for real-time sync and SQLite for local storage, Dream Journal combines the best of both online and offline capabilities, ensuring data persistence and availability. Built with React Native and TypeScript, the app delivers a responsive and smooth experience for users.',
            technologies: ['React Native', 'TypeScript', 'Firebase', 'SQLite'],
            images: [sample1, sample2, sample3],
            link: 'https://example.com/dream-journal'
        },
        {
            title: 'CrowdWatch AI',
            description: 'A real-time AI system that uses thermal cameras for crowd management and safety alerts.',
            details: 'CrowdWatch AI is a real-time crowd management system that combines artificial intelligence with thermal camera integration to monitor and control crowded environments. This system is designed to enhance public safety by analyzing crowd density and detecting elevated temperatures, which could indicate potential health risks. Using advanced AI algorithms built with TensorFlow and OpenCV, CrowdWatch AI can identify overcrowding in specific zones and issue alerts when predefined safety thresholds are exceeded. This solution is ideal for venues such as stadiums, malls, and airports, ensuring a safer environment by automating crowd control through thermal and visual data processing.',
            technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
            images: [sample1, sample2, sample3],
            link: 'https://example.com/crowdwatch-ai'
        },
        {
            title: 'Gift Finder',
            description: 'A tool to suggest personalized gift ideas based on preferences.',
            details: 'Gift Finder is an intuitive platform that helps users find personalized gift ideas based on the recipient’s preferences, interests, and the occasion. By inputting a few details about the recipient, such as age, hobbies, and budget, users receive a curated list of unique gift suggestions tailored specifically to their needs. The platform utilizes a recommendation algorithm powered by Node.js and Express, connecting with a MongoDB database to store and retrieve various gift options. Designed for individuals who want to make their gift-giving experience more thoughtful, Gift Finder makes selecting the perfect gift both easy and enjoyable.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
            images: [sample1, sample2, sample3],
            link: 'https://example.com/gift-finder'
        },
        {
            title: 'WeatherNow',
            description: 'A weather app with real-time updates and a 7-day forecast.',
            details: 'WeatherNow is a comprehensive weather application that offers users real-time weather updates, a detailed 7-day forecast, and personalized weather insights based on their location. This app pulls data from reliable weather APIs to provide accurate information on current conditions, such as temperature, humidity, and wind speed, as well as future forecasts. Users can set location-based preferences to receive custom weather alerts. Built using React and JavaScript, WeatherNow is optimized for performance and responsiveness, making it suitable for users who need quick and dependable weather data on the go.',
            technologies: ['React', 'API Integration', 'JavaScript'],
            images: [sample1, sample2, sample3],
            link: 'https://example.com/weather-now'
        },
        {
            title: 'PriceTracker',
            description: 'Tracks and alerts users on price drops across e-commerce platforms.',
            details: 'PriceTracker is a powerful tool for users looking to save money by tracking product prices across multiple e-commerce websites. The platform allows users to monitor selected products and receive notifications when prices drop, helping them make informed purchasing decisions. Built with Python and Django, PriceTracker scrapes data from popular e-commerce sites using BeautifulSoup, storing this information in a MongoDB database. Users can set their desired price thresholds, ensuring they are alerted only when the products meet their budget requirements. This tool is especially beneficial for savvy shoppers who want to capitalize on the best deals.',
            technologies: ['Python', 'BeautifulSoup', 'Django', 'MongoDB'],
            images: [sample1, sample2, sample3],
            link: 'https://example.com/price-tracker'
        },
        {
            title: 'ImageGenAI',
            description: 'Generates images from text prompts using AI for creative use.',
            details: 'ImageGenAI is an innovative AI-powered tool that generates unique images based on user-provided text prompts. Utilizing state-of-the-art generative AI techniques, specifically Stable Diffusion, ImageGenAI allows users to bring their ideas to life through custom images. This tool is ideal for designers, content creators, and hobbyists exploring the capabilities of AI in creative expression. Built with Python and Flask, ImageGenAI processes the prompts and delivers high-quality images suited to various artistic styles. The platform offers options to adjust style, color schemes, and other parameters, providing users with endless creative possibilities.',
            technologies: ['Python', 'Generative AI', 'Stable Diffusion', 'Flask'],
            images: [sample1, sample2, sample3],
            link: 'https://example.com/imagegen-ai'
        }
    ];
    
    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <section
            id="projects-section"
            className="min-h-screen pt-16 pb-16 text-white w-full flex flex-col items-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${background})`,
                backgroundAttachment: 'fixed', // Keeps the background fixed during scroll
            }}
        >
            <h2 className="text-4xl font-bold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-[#106EBE] bg-opacity-60 rounded-lg p-6 shadow-md flex flex-col justify-between">
                        <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                        
                        <p className="text-justify h-18 overflow-hidden">{project.description}</p>
                        
                        <div className="mt-4 text-xs text-left">
                            <span className="font-semibold inline">Built with: </span>
                            <span className="inline">{project.technologies.join(', ')}</span>
                        </div>

                        <div className="mt-4 flex space-x-2">
                            {/* View Details Button */}
                            <button 
                                onClick={() => openModal(project)} 
                                className="px-4 py-2 bg-white text-[#106EBE] font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
                            >
                                View Details
                            </button>

                            {/* Try It Out Button */}
                            <button
                                //onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                                className="px-4 py-2 bg-[#0e5ca4] text-white font-semibold rounded-lg shadow-md hover:bg-[#0c5090] transition"
                            >
                                Try It Out
                            </button>

                        </div>
                    </div>
                ))}
            </div>

            {/* More About Me Button */}
            <button
                onClick={handleViewAbout}
                className="mt-10 px-6 py-3 bg-white text-[#106EBE] font-semibold rounded-full shadow-md hover:bg-gray-200 transition transform hover:scale-105"
            >
                More About Me
            </button>

            {/* Modal */}
            {isModalOpen && selectedProject && (
                <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
            )}
        </section>
    );
};

export default Projects;