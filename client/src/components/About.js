import React from 'react';
import background from '../assets/background_8.jpg'; // Import the background image

const About = () => {
    return (
        <section
            id="about-section"
            className="min-h-screen bg-cover bg-center text-gray-900 w-full flex flex-col items-center py-16"
            style={{
                backgroundImage: `url(${background})`,
                backgroundAttachment: 'fixed', // Optional: keeps background fixed on scroll
            }}
        >
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="max-w-3xl text-center text-lg mb-8 text-white">
                I'm a passionate software developer with a strong background in full-stack development, mobile applications, and cloud solutions. I enjoy creating impactful software that addresses real-world problems and continually look for ways to enhance my skills.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">Technical Skills</h3>
            <ul className="list-disc list-inside text-lg max-w-xl text-white">
                <li>Languages: Python, JavaScript, SQL, Kotlin, Swift, HTML/CSS, C++</li>
                <li>Frameworks and Libraries: React, Express (Node.js), Angular, Flask, Django</li>
                <li>Technologies and Tools: Git, Docker, Postman, Microsoft Azure, AWS, Jira, PostgreSQL, MongoDB</li>
                <li>Methodologies: Agile, Scrum</li>
            </ul>
        </section>
    );
};

export default About;
