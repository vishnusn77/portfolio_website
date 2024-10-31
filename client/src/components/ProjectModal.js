import React from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                    &times;
                </button>

                {/* Modal Content */}
                <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectModal;
