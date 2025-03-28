import React, { useState } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [isImageOpen, setIsImageOpen] = useState(false); 
    const [currentImage, setCurrentImage] = useState(null); 
    const [loadedImages, setLoadedImages] = useState([]); 

    if (!isOpen) return null;

    const openImage = (img) => {
        setCurrentImage(img);
        setIsImageOpen(true);
    };

    const closeImage = () => {
        setIsImageOpen(false);
        setCurrentImage(null);
    };

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleImageBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            closeImage();
        }
    };

    const handleImageLoad = (index) => {
        setLoadedImages((prev) => [...prev, index]);
    };

    return (
        <>
            <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                onClick={handleBackgroundClick}
            >
                <div
                    className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 md:mx-8 p-8 relative overflow-y-auto"
                    style={{
                        maxHeight: '90vh',
                    }}
                    onClick={(e) => e.stopPropagation()} 
                >
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-white bg-[#003f8c] hover:bg-[#002c66] text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md transition duration-300 ease-in-out"
                    >
                        &times;
                    </button>
                    <h2 className="text-3xl font-semibold mb-6">{project.title}</h2>
                    <div className="flex space-x-4 overflow-x-scroll mb-6">
                        {project.images.map((img, index) => (
                            <div key={index} className="relative w-72 h-48">
                                {!loadedImages.includes(index) && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                        <div className="w-8 h-8 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
                                    </div>
                                )}
                                <img
                                    src={img}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    className={`w-72 h-48 rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300 ${
                                        loadedImages.includes(index) ? '' : 'opacity-0'
                                    }`}
                                    onClick={() => openImage(img)} 
                                    onLoad={() => handleImageLoad(index)} 
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-700 text-lg text-justify">{project.details}</p>
                </div>
            </div>
            {isImageOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={handleImageBackgroundClick} 
                >
                    <div className="relative">
                        <button
                            onClick={closeImage}
                            className="absolute top-2 right-2 text-white bg-[#003f8c] hover:bg-[#002c66] text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md transition duration-300 ease-in-out z-50"
                        >
                            &times;
                        </button>
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
