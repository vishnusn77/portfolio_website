import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = ({ handleViewAbout }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'CrowdWatch AI',
            description: 'A real-time AI system for crowd detection and temperature monitoring built using computer vision and deep learning.',
            details: 'CrowdWatch AI is a real-time crowd management and health monitoring system designed to enhance public safety in crowded environments. Using YOLOv5 for precise object detection and SORT for individual tracking, the system identifies and monitors people in video feeds. Tesseract OCR and OpenCV extract and validate temperature readings displayed from thermal cameras, triggering alerts when crowd sizes exceed predefined thresholds or when multiple individuals exhibit elevated temperatures. With a Tkinter-based GUI displaying live alerts and statistics, CrowdWatch AI combines advanced AI technologies and user-friendly interfaces to provide seamless monitoring and rapid responses in public spaces.',
            technologies: ['Python', 'OpenCV', 'YOLOv5', 'PyTorch', 'Tkinter'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260514/1_glv9fj.png',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260515/2_hv2vsi.png',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260515/3_m0vcxc.png'
            ],
            link: 'https://github.com/vishnusn77/AI-thermal-cameras'
        },
        {
            title: 'Price Patrol',
            description: 'Web app that tracks product prices from e-commerce platforms and sends email alerts when they drop to desired price.',
            details: 'Price Patrol is a web-based application that empowers users to monitor product prices on Amazon and receive email notifications when prices drop to their desired thresholds. Built using Django for backend functionality and MongoDB for data storage, the application integrates the Canopy API to fetch product data efficiently. Users can add products via a simple form, and the app ensures a robust API usage limit of 100 requests per month using an incremental counter. The system uses cron jobs for periodic price checks and email alerts. Deployed on Render, the app also supports responsive email notifications using Python email libraries. Key features include user authentication, API usage tracking, and seamless management of product price history, making it a scalable solution for e-commerce price monitoring.',
            technologies: ['Python', 'Django', 'MongoDB', 'Canopy API'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260582/1_goivcs.png',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260582/2_htqoau.png',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260583/3_nt0jxw.png'
            ],
            link: 'https://price-patrol-tvb4.onrender.com'
        },
        {
            title: 'Dream Journal',
            description: 'An app to record, organize, and explore your dreams, with cloud sync and offline access, to reflect on your subconscious.',
            details: 'Dream Journal is a personalized mobile application designed to help users securely log, organize, and reflect on their dreams with ease. The app ensures seamless access to dream entries through real-time cloud synchronization powered by Firebase, while offline functionality is supported by Room, providing reliable local storage. Users can categorize their dreams, add tags, and utilize a powerful search feature to quickly revisit specific entries, making it easy to uncover patterns and gain insights into their subconscious. Built with Kotlin and the Android SDK, the app combines robust performance, efficient data management, and an intuitive interface to deliver a smooth and dependable user experience.',
            technologies: ['Kotlin', 'Android SDK', 'XML', 'Room', 'Firebase'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260529/4_ws6pe1.png',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260530/5_mnrn7l.png'
            ],
            link: 'https://github.com/Gigacrew/DreamJournal-Android'
        },
        {
            title: 'ImageGenAI',
            description: 'A web app that turns your imagination into reality, creating stunning AI-generated images from simple text prompts.',
            details: 'ImageGenAI is a web application designed to transform user-provided text prompts into stunning AI-generated images using OpenAI DALL·E API. Built with Python and Flask, the app serves as the backend to manage API requests and deliver results efficiently. The frontend, developed using HTML, CSS, and JavaScript, features a responsive and intuitive interface where users can enter prompts, view generated images, and download them directly. Hosted on AWS EC2, the app ensures scalability and reliability, with Nginx configured as a reverse proxy to handle incoming traffic. This seamless integration of tools and technologies makes ImageGenAI a reliable platform for users to bring their creative ideas to life.',
            technologies: ['Flask', 'Dall-E API', 'AWS EC2', 'HTML/CSS'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260562/1_t0cthi.png',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260562/2_mpv26n.png',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260563/3_a13ihd.png'
            ],
            link: 'https://image-gen-ai.host2go.net/'
        },
        {
            title: 'WeatherNow',
            description: 'A reliable weather app providing real-time updates and a 7-day forecast with a user-friendly and responsive interface.',
            details: 'WeatherNow is a dynamic weather application built using React.js, designed to provide users with real-time weather updates and a detailed 7-day forecast for any city worldwide. The app fetches accurate and reliable data from the OpenWeatherMap API, integrating it seamlessly into a clean, responsive interface styled with Bootstrap. The dark-themed design enhances user experience across devices, ensuring accessibility and a modern look. WeatherNow leverages Font Awesome and Weather Icons for intuitive weather visuals, while deployment and hosting are managed via Netlify for fast, reliable performance. The application handles API responses efficiently and includes features like error handling for invalid city searches, ensuring robustness and a seamless user experience.',
            technologies: ['React.js', 'OpenWeatherMap API', 'Bootstrap'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260596/1_msm3su.png',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260597/2_fiuo4z.png',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260597/3_fvlfth.png'
            ],
            link: 'https://weather-now-24x7.netlify.app/'
        },
        {
            title: 'HyperType',
            description: 'An interactive typing game designed to boost your type speed and accuracy, with score tracking and round progression.',
            details: 'HyperType is an interactive web-based typing speed game designed to improve typing accuracy and speed through engaging challenges. Built using HTML5, it provides a well-structured, semantic interface, while CSS3 ensures a responsive and visually appealing design, including dark and light mode themes for user comfort. The core functionality is powered by JavaScript, which handles real-time score tracking for Words Per Minute (WPM) and accuracy, sentence randomization, and visual feedback on typing progress. The game spans multiple rounds, each featuring unique, non-repeating sentences, with cheat prevention mechanisms like disabled copy-paste functionality. Dynamic updates keep the player informed of their progress, and a leaderboard tracks high scores for motivation. Hosted on GitHub Pages, HyperType delivers a seamless and accessible experience across devices.',
            technologies: ['JavaScript', 'HTML5', 'CSS3'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260549/1_dgwech.png',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260549/2_vbxzrr.png',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260549/3_iuzs0s.png'
            ],
            link: 'https://vishnusn77.github.io/Hyper-type/'
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
            className="min-h-screen pt-16 pb-16 text-white w-full flex flex-col items-center"
        >
            <h2 className="text-4xl font-bold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-6">
                {projects.map((project, index) => (
                <div
                    key={index}
                    className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:bg-white/10 transition-all duration-300"
                >                  
                   <div className="overflow-hidden">
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 flex flex-col items-start justify-between h-full">
                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        <div className="mt-auto flex gap-2">
                        <button
                            onClick={() => openModal(project)}
                            className="px-4 py-2 bg-[#40ffaa] text-black font-semibold rounded-lg hover:bg-[#32e6a8] transition"
                        >
                            View
                        </button>
                        <button
                            onClick={() =>
                            window.open(project.link, '_blank', 'noopener,noreferrer')
                            }
                            className="px-4 py-2 bg-white text-[#40ffaa] font-semibold rounded-lg hover:bg-gray-200 transition"
                        >
                            Try
                        </button>
                        </div>
                    </div>
                </div>
                ))}
                </div>
            <button
                onClick={handleViewAbout}
                className="mt-10 px-6 py-3 bg-white text-[#106EBE] font-semibold rounded-full shadow-md hover:bg-gray-200 transition transform hover:scale-105"
            >
                More About Me
            </button>
            {isModalOpen && selectedProject && (
                <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
            )}
        </section>
    );
};

export default Projects;