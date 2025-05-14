import React, { useEffect, useState } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setAnimate(true), 20);
    }
    return () => {
      document.body.style.overflow = 'auto';
      setAnimate(false);
    };
  }, [isOpen]);

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
      setAnimate(false);
      setTimeout(() => onClose(), 200);
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
        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 transition-opacity duration-300 ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleBackgroundClick}
      >
        <div
          className={`w-full max-w-2xl sm:mx-4 mx-2 p-4 sm:p-6 relative overflow-y-auto border border-white/10 backdrop-blur-md rounded-xl bg-white/5 text-white shadow-xl transform transition-all duration-300 ${
            animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          style={{ maxHeight: '85vh' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-md bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all duration-200 flex items-center justify-center text-base font-bold"
          >
            &times;
          </button>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">{project.title}</h2>

          <div className="flex gap-4 overflow-x-auto mb-5 pb-1 -mx-1 px-1">
            {project.images.slice(1).map((img, index) => (
              <div key={index} className="relative w-60 h-36 shrink-0">
                {!loadedImages.includes(index) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100/20">
                    <div className="w-8 h-8 border-4 border-t-[#40ffaa] border-white/20 rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className={`w-full h-full rounded-lg object-cover cursor-pointer transition-transform duration-300 hover:scale-105 ${
                    loadedImages.includes(index) ? '' : 'opacity-0'
                  }`}
                  onClick={() => openImage(img)}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            ))}
          </div>

          <p className="text-gray-300 text-sm sm:text-base text-justify mb-6 whitespace-pre-line">
            {project.details}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-y-3 mt-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10 text-white border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm px-3 py-2 bg-[#40ffaa] text-black font-semibold rounded-md hover:bg-[#32e6a8] transition"
            >
              Visit Website
            </a>
          </div>
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
              className="absolute top-2 right-2 text-white bg-[#003f8c] hover:bg-[#002c66] text-lg font-bold w-8 h-8 rounded-md flex items-center justify-center shadow-md z-50 transition"
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
