import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import Button from './Button';

const Projects = ({ handleViewAbout }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'CrowdWatch AI',
            category: 'Capstone',
            description: 'A real-time AI system for crowd detection and temperature monitoring built using computer vision and deep learning.',
            details: 'CrowdWatch AI is a real-time crowd management and health monitoring system designed to enhance safety in public spaces. It uses YOLOv5 for people detection and SORT for tracking individuals in video feeds. Temperature data is extracted from thermal cameras using Tesseract OCR and OpenCV, triggering alerts when crowd density or temperature thresholds are exceeded. A Tkinter-based GUI displays live alerts and statistics, offering an intuitive interface for real-time monitoring and rapid response.',
            technologies: ['Python', 'OpenCV', 'YOLOv5', 'PyTorch', 'Tkinter'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747083749/thumbnail_xeul0i.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747104711/1_mseypm.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747104712/2_gtnjnt.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747104714/3_q90emp.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747104716/4_ltartk.jpg',

            ],
            link: 'https://github.com/vishnusn77/AI-thermal-cameras'
        },
        {
            title: 'Checkmate',
            category: 'Contributor',
            description: 'A habit & task tracking app with streaks and progress visualization to stay productive daily.',
            details: 'Checkmate is a self-hosted monitoring platform built with React, Node.js, and MongoDB to track uptime, latency, and system metrics in real time. It features a customizable dashboard for monitoring websites, APIs, and infrastructure health, including optional hardware metrics via a lightweight Capture agent. The app supports incident tracking, maintenance scheduling, and automated email alerts. With Docker-based deployment and a modular architecture, Checkmate scales efficiently and handles thousands of monitors without compromising performance.',
            technologies: ['React.js', 'Material UI', 'Node.js', 'MongoDB'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747103203/thumbnail_a3ab1a.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747105245/1_ez9aqw.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747105246/2_ana2z1.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747105248/3_buhq0h.jpg',
            ],
            link: 'https://github.com/bluewave-labs/Checkmate'
        },
        {
            title: 'Price Patrol',
            category: 'Personal',
            description: 'Web app that tracks product prices from e-commerce platforms and sends email alerts when they drop to desired price.',
            details: 'Price Patrol is a web app that lets users track Amazon product prices and get email alerts when prices drop below set thresholds. Built with Django and MongoDB, it uses the Canopy API for efficient product data fetching. A usage-limited API system tracks up to 100 monthly requests per user. Periodic price checks and alert emails are automated via cron jobs. Deployed on Render, the app features user authentication, product history tracking, and dynamic email notifications for a smooth monitoring experience.',
            technologies: ['Python', 'Django', 'MongoDB', 'Canopy API'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747102594/thumbnail_wycdeh.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747105723/1_no8dur.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747105725/2_jz6xyv.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747105727/3_vnvroc.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747105729/4_edm96h.jpg',
            ],
            link: 'https://price-patrol-tvb4.onrender.com'
        },
        {
            title: 'ImageGenAI',
            category: 'Personal',
            description: 'A web app that turns your imagination into reality, creating stunning AI-generated images from simple text prompts.',
            details: 'ImageGenAI is a web app that turns user text prompts into AI-generated images using the DALL·E API. The backend, built with Python and Flask, handles prompt processing and image generation, while the frontend provides a responsive UI for input, preview, and downloads. Hosted on AWS EC2 with Nginx as a reverse proxy, the app offers scalable performance and reliability. With clean integration across services, ImageGenAI makes creative image generation simple and accessible.',
            technologies: ['Flask', 'Dall-E API', 'AWS EC2', 'HTML/CSS'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747083233/thumbnail_nxzmvr.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747106025/1_q6p8wb.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747106028/2_fogy3p.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747106030/3_qtakjn.jpg',
            ],
            link: 'https://image-gen-ai.host2go.net/'
        },
        {
            title: 'Dream Journal',
            category: 'Collaborative',
            description: 'An app to record, organize, and explore your dreams, with cloud sync and offline access, to reflect on your subconscious.',
            details: 'Dream Journal is a mobile app that helps users log, organize, and reflect on their dreams securely. It offers real-time cloud sync via Firebase and offline support through Room for reliable local storage. Users can tag, categorize, and search entries to uncover patterns and insights. Built with Kotlin and Android SDK, the app delivers smooth performance, efficient data handling, and an intuitive user interface for a seamless journaling experience.',
            technologies: ['Kotlin', 'Android SDK', 'XML', 'Room', 'Firebase'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747082870/thumbnail_map7y5.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260529/4_ws6pe1.png',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1735260530/5_mnrn7l.png'
            ],
            link: 'https://github.com/Gigacrew/DreamJournal-Android'
        },
        {
            title: 'WeatherNow',
            category: 'Personal',
            description: 'A reliable weather app providing real-time updates and a 7-day forecast with a user-friendly and responsive interface.',
            details: 'WeatherNow is a React-based weather app that delivers real-time updates and a 7-day forecast for cities worldwide. It integrates data from the OpenWeatherMap API into a clean, responsive interface styled with Bootstrap. The app features a dark theme, intuitive weather icons, and robust error handling for invalid inputs. Deployed on Netlify, WeatherNow ensures fast performance, reliable access, and a smooth user experience across devices.',
            technologies: ['React.js', 'OpenWeatherMap API', 'Bootstrap'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747102315/thumbnail_q655n2.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747106383/1_osab6i.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747106385/2_seljlq.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747106387/3_ig7pr4.jpg',
            ],
            link: 'https://weather-now-24x7.netlify.app/'
        },
        {
            title: 'HyperType',
            category: 'Personal',
            description: 'An interactive typing game designed to boost your type speed and accuracy, with score tracking and round progression.',
            details: 'HyperType is a web-based typing game that helps users improve their speed and accuracy through interactive challenges and real-time feedback. Developed with HTML, CSS, and JavaScript, it features a responsive interface with light and dark themes, randomized sentences, and dynamic score tracking for WPM and accuracy. The game spans multiple rounds, includes anti-cheat mechanisms like disabled copy-paste, and maintains a live leaderboard for motivation. Hosted on GitHub Pages, HyperType offers a smooth, accessible experience across devices.',
            technologies: ['JavaScript', 'HTML5', 'CSS3'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747103636/thumbnail_ingd5x.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747106551/1_ts9u9f.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747106553/2_i3ft1k.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747106555/3_llpvpf.jpg',
            ],
            link: 'https://vishnusn77.github.io/Hyper-type/'
        },
        {
            title: 'Sentiment Analysis',
            category: 'Research',
            description: 'ML model that classifies text reviews as positive or negative using NLP and vectorization.',
            details: 'Sentiment Analysis is a cloud-based data pipeline project focused on classifying tweet sentiments as positive or negative. It begins with data cleaning in Python, followed by storage in Azure Blob and ingestion into Azure SQL via Data Factory pipelines. The processed data is visualized in Power BI, revealing sentiment trends across popular topics. The analysis shows dominant negative sentiment overall, with higher positivity around gaming topics like PS5 and Xbox. This project showcases efficient use of Azure services for end-to-end data processing and visualization.',
            technologies: ['Python', 'Pandas', 'Azure Data Factory', 'Power BI'],
            images: [
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747103361/thumbnail_ihql7y.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747106824/1_i4swq1.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747106826/2_jypesm.jpg',
                'https://res.cloudinary.com/dpt3vmgz8/image/upload/v1747106829/3_ee0iir.jpg',
            ],
            link: 'https://github.com/vishnusn77/Sentiment_Analysis'
        },
       
    ];
    
    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.cssText = 'overflow:hidden;padding-right:' + (window.innerWidth - document.documentElement.clientWidth) + 'px;';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.cssText = '';
    };

    const optimizeCloudinary = (url) => {
        return url.replace('/upload/', '/upload/q_auto,f_auto,w_576,h_300,c_fill/');
      };      

    return (
        <section
            id="projects-section"
            className="min-h-screen w-full px-4 py-20 flex flex-col items-center justify-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">My Projects</h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-7xl px-4">
                {projects.map((project, index) => (
                <div
                    key={index}
                    className="group w-72 h-[250px] bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:bg-white/10 transition-all duration-300 text-left flex flex-col"
                >
                    <div className="relative overflow-hidden w-full h-40 sm:h-44">
                    <img
                        src={optimizeCloudinary(project.images[0])}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    </div>
                    <div className="p-3 sm:p-4">
                        <div className="flex items-center mb-3 gap-1 flex-wrap">
                            <h3 className="text-base sm:text-lg font-semibold text-white">
                                {project.title}
                            </h3>
                            <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm whitespace-nowrap">
                                {project.category}
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <button
                            onClick={() => openModal(project)}
                            className="px-3 py-1.5 text-sm bg-[#262626] text-white border border-white/10 rounded-md hover:bg-[#333] transition"
                            >
                            View details
                            </button>
                            <button
                            onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                            className="px-3 py-1.5 text-sm bg-transparent text-[#40ffaa] border border-[#40ffaa] rounded-md hover:bg-[#40ffaa]/10 transition"
                            >
                            Try it out
                            </button>
                        </div>
                    </div>
                </div>              
                ))}
                </div>
                <div className="mt-10">
                <Button
                    className="animate-bounce-down"
                    onClick={() =>
                        document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    >
                    View my journey
                </Button></div>
            {isModalOpen && selectedProject && (
                <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
            )}
        </section>
    );
};

export default Projects;