import React from 'react';
import backgroundAbout from '../assets/background_8.jpg'; // Import the background image
import profilePhoto from '../assets/photo.png'; // Import your profile photo

// Import skill icons
import pythonIcon from '../assets/skills icons/python.png';
import jsIcon from '../assets/skills icons/js.png';
import nodejsIcon from '../assets/skills icons/nodejs.png';
//import tsIcon from '../assets/skills icons/typescript.png';
import cssIcon from '../assets/skills icons/css.png';
import mysqlIcon from '../assets/skills icons/mysql.png';
import kotlinIcon from '../assets/skills icons/kotlin.png';
import swiftIcon from '../assets/skills icons/swift.png';
import htmlIcon from '../assets/skills icons/html.png';
import cppIcon from '../assets/skills icons/cpp.png';
import reactIcon from '../assets/skills icons/react.png';
import angularIcon from '../assets/skills icons/angular.png';
import dockerIcon from '../assets/skills icons/docker.png';
import azureIcon from '../assets/skills icons/azure.png';
import awsIcon from '../assets/skills icons/aws.png';
import postgresIcon from '../assets/skills icons/postgresql.png';
import mongoIcon from '../assets/skills icons/mongo.png';

import linkedinIcon from '../assets/skills icons/linkedin.png';
import githubIcon from '../assets/skills icons/github.png';

const About = () => {
    return (
        <section
            id="about-section"
            className="min-h-screen bg-cover bg-center text-gray-900 w-full flex flex-col items-center py-16 px-4"
            style={{
                backgroundImage: `url(${backgroundAbout})`,
                backgroundAttachment: 'fixed', // Keeps background fixed on scroll
            }}
        >
            {/* Top Section: Profile Picture, Name, and Introduction */}
            <div
                className="flex flex-col md:flex-row items-center rounded-lg shadow-lg p-8 max-w-4xl w-full mb-12"
                style={{
                    backgroundColor: 'rgba(16, 110, 190, 0.6)', // Updated with RGBA for opacity
                    borderRadius: '15px',
                }}
            >

                {/* Profile Picture */}
                <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
                    <img 
                        src={profilePhoto} 
                        alt="Vishnu Nair" 
                        className="rounded-full w-32 h-32 mb-4 object-cover shadow-md"
                    />
                    <h3 className="text-3xl font-bold text-gray-900" style={{color: '#ffffff'}}>Vishnu Nair</h3>
                </div>

                {/* Introduction */}
                <div className="md:w-2/3 text-center md:text-left">
                    <p className="text-lg leading-relaxed text-gray-800" style={{color: '#ffffff'}}>
                    With a strong foundation in computer science and several years of hands-on experience, I’ve built solutions that connect user needs with technology. My experience spans full-stack development for web and mobile, with a focus on AI insights and cloud integration. I believe in writing clean, efficient code that enhances user experience.
                    </p>

                     {/* Buttons Section */}
                     <div className="flex justify-center md:justify-start mt-6 space-x-4">
                    
                        {/* LinkedIn Button */}
                        <a
                            href="https://www.linkedin.com/in/vishnu-nair2766/" // Replace with your LinkedIn profile URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-[#106EBE] text-white font-semibold rounded-lg shadow-md hover:bg-[#0c5090] transition"
                        >
                            <img src={linkedinIcon} alt="LinkedIn" className="inline w-5 h-5 mr-2" />Linkedin
                        </a>

                        {/* GitHub Button */}
                        <a
                            href="https://github.com/vishnusn77" // Replace with your GitHub profile URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-[#106EBE] text-white font-semibold rounded-lg shadow-md hover:bg-[#0c5090] transition"
                        >
                            <img src={githubIcon} alt="GitHub" className="inline w-5 h-5 mr-2" />Github
                        </a>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <h3 className="text-2xl font-semibold text-white mb-8">My skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6 max-w-6xl w-full px-4">
                {/* Skill Icons with Circular Background */}
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={pythonIcon} alt="Python" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Python</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={jsIcon} alt="JavaScript" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">JavaScript</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={nodejsIcon} alt="Nodejs" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Nodejs</p>
                </div>
                
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={cssIcon} alt="CSS" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">CSS</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={mysqlIcon} alt="SQL" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">mySQL</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={kotlinIcon} alt="Kotlin" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Kotlin</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={swiftIcon} alt="Swift" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Swift</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={htmlIcon} alt="HTML/CSS" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">HTML</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={cppIcon} alt="C++" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">C++</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={reactIcon} alt="React" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">React</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={angularIcon} alt="Angular" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Angular</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={dockerIcon} alt="Docker" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Docker</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={azureIcon} alt="Microsoft Azure" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Microsoft Azure</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={awsIcon} alt="AWS" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">AWS</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={postgresIcon} alt="PostgreSQL" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">PostgreSQL</p>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-60 rounded-full mb-2">
                        <img src={mongoIcon} alt="MongoDB" className="w-8 h-8" />
                    </div>
                    <p className="text-sm">MongoDB</p>
                </div>
            </div>
            {/* Contact Me Button */}
            <div className="mt-12">
                <button 
                    onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-white text-[#106EBE] font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
                >
                    Contact Me
                </button>
            </div>
        </section>
    );
};

export default About;
