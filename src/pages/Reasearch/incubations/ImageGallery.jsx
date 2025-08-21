 import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import SearchableWrapper from "../../../components/Searchbar/SearchableWrapper";

Modal.setAppElement("#root");

const images = [
  "https://www.gburif.org/Photo%20Gallery/img/img-1.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-2.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-3.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-4.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-5.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-6.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-7.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-8.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-9.jpg",
  "https://www.gburif.org/Photo%20Gallery/img/img-10.jpg"
];

export default function GallerySlider() {
  const [mainIndex, setMainIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (images.length > 0) {
        setIsTransitioning(true);
        setTimeout(() => {
          setMainIndex((prev) => (prev + 1) % images.length);
          setIsTransitioning(false);
        }, 150);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setMainIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const currentImage = images[mainIndex];

  return (
    <SearchableWrapper>
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-15 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-center mb-8">PHOTO GALLERY</h1>
          
        </div>

        {/* Main Image */}
        <div
          className="relative w-full rounded-xl overflow-hidden shadow-xl mb-8 cursor-pointer group"
         
        >
          <img
            src={currentImage}
            alt={`Gallery ${mainIndex + 1}`}
            className={`w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[500px] object-cover transition-all duration-1000 ease-in-out ${
              isTransitioning ? "scale-110 opacity-80 blur-[2px]" : "scale-100 opacity-100 blur-0"
            }`}
          />
          <div className="absolute bottom-4 right-4 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleThumbnailClick(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === mainIndex
                    ? "bg-white scale-125 shadow shadow-white/50"
                    : "bg-white/60 hover:bg-white/80 hover:scale-110"
                } transition-all duration-300`}
              />
            ))}
          </div>
          {isTransitioning && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-white/30 border-solid border-t-white rounded-full animate-spin"></div>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        <div className="w-full overflow-x-auto no-scrollbar pb-4">
          <div className="flex justify-center gap-4 min-w-max px-2">
            {images.map((src, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`cursor-pointer hover:scale-110 transition-all rounded-xl overflow-hidden shadow-md active:scale-95 ${
                  index === mainIndex
                    ? "ring-4 ring-blue-500 scale-105 shadow-blue-500/25"
                    : "hover:ring-2 hover:ring-blue-300"
                }`}
              >
                <img
                  src={src}
                  alt={`Thumb ${index + 1}`}
                  className="w-24 h-16 sm:w-28 sm:h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="flex justify-center mt-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 shadow-md">
            <span className="text-sm font-medium text-gray-700">
              <span className="font-bold text-blue-600">{mainIndex + 1}</span> of{" "}
              <span className="font-bold">{images.length}</span>
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center mt-4">
          <div className="w-full max-w-md bg-gray-200/50 rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-linear"
              style={{ width: `${((mainIndex + 1) / images.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Full Image"
        className="flex items-center justify-center h-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-50"
      >
        <img
          src={currentImage}
          alt="Zoomed"
          className="max-w-full max-h-full rounded shadow-lg"
        />
      </Modal>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
    </SearchableWrapper>
  );
}
