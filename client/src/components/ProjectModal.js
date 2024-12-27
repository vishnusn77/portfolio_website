import React, { useState } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [isImageOpen, setIsImageOpen] = useState(false); // Track whether the image is being viewed
    const [currentImage, setCurrentImage] = useState(null); // Track the currently selected image

    if (!isOpen) return null;

    // Function to open the image pop-up
    const openImage = (img) => {
        setCurrentImage(img);
        setIsImageOpen(true);
    };

    // Function to close the image pop-up
    const closeImage = () => {
        setIsImageOpen(false);
        setCurrentImage(null);
    };

    // Function to handle clicking outside the modal
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Function to handle clicking outside the image pop-up
    const handleImageBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            closeImage();
        }
    };

    return (
        <>
            {/* Modal */}
            <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                onClick={handleBackgroundClick} // Close modal when clicking outside the content
            >
               <div
                    className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 md:mx-8 p-8 relative overflow-y-auto"
                    style={{
                        maxHeight: '90vh', // Limit height to viewport height
                    }}
                    onClick={(e) => e.stopPropagation()} // Prevent click from propagating to the background
                >

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-white bg-[#003f8c] hover:bg-[#002c66] text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md transition duration-300 ease-in-out"

                    >
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
                                className="w-72 h-48 rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openImage(img)} // Open the image pop-up
                            />
                        ))}
                    </div>

                    {/* Detailed Description */}
                    <p className="text-gray-700 text-lg text-justify">{project.details}</p>
                </div>
            </div>

            {/* Image Pop-up */}
            {isImageOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={handleImageBackgroundClick} // Close pop-up when clicking outside the image
                >
                    <div className="relative">
                        {/* Close Button */}
                        <button
                            onClick={closeImage}
                            className="absolute top-2 right-2 text-white bg-[#003f8c] hover:bg-[#002c66] text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md transition duration-300 ease-in-out z-50"
                        >
                            &times;
                        </button>

                        {/* Fullscreen Image */}
                        <img
                            src={currentImage}
                            alt="Fullscreen"
                            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectModal;
