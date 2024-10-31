import React from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full min-h-[80vh] p-8 relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold">
                    &times;
                </button>

                {/* Modal Content */}
                <h2 className="text-3xl font-semibold mb-6">{project.title}</h2>

                {/* Project Images */}
                <div className="flex space-x-4 overflow-x-scroll mb-6">
                    {project.images.map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            alt={`${project.title} screenshot ${index + 1}`} 
                            className="w-72 h-48 rounded-lg object-cover" 
                        />
                    ))}
                </div>

                {/* Detailed Description */}
                <p className="text-gray-700 text-lg text-justify">{project.details}</p>
            </div>
        </div>
    );
};

export default ProjectModal;
