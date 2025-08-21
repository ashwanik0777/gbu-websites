import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CampusGallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');
  const API_URL = `${BASE}/landing/campus-gallery/`;

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const res = await axios.get(API_URL);
        setGalleryData(res.data);
      } catch (err) {
        console.error('Error fetching campus gallery:', err);
      }
    };
    fetchGalleryData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (galleryData.length > 0) {
        setIsTransitioning(true);
        setTimeout(() => {
          setMainImageIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
          setIsTransitioning(false);
        }, 150);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryData]);

  const handleThumbnailClick = (clickedIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setMainImageIndex(clickedIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const handleImageError = (e) => {
    e.currentTarget.src = 'https://via.placeholder.com/800x500/6B7280/FFFFFF?text=Image+Not+Found';
  };

  const currentImage = galleryData[mainImageIndex];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="w-full py-6 sm:py-10 lg:py-16 mx-auto px-3 sm:px-6 lg:px-8">
        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-3xl h-14 md:text-5xl md:h-15 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mb-4">
            Ongoing Events
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Image */}
        {currentImage && (
          <div className="relative w-full rounded-xl overflow-hidden shadow-xl mb-8 group">
            <img
              src={currentImage.image}
              alt={currentImage.text}
              onError={handleImageError}
              className={`w-full h-[220px] xs:h-[280px] sm:h-[320px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover transition-all duration-1000 ease-in-out ${
                isTransitioning ? 'scale-110 opacity-80 blur-[2px]' : 'scale-100 opacity-100 blur-0'
              }`}
            />

            {/* Caption */}
            <div className="absolute w-full bottom-4 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl max-w-[90%] border border-white/20 border-solid">
              <h3 className="text-white text-base md:text-lg font-semibold text-center drop-shadow-lg whitespace-normal break-words">
                {currentImage.text}
              </h3>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {galleryData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === mainImageIndex
                      ? 'bg-white scale-125 shadow shadow-white/50'
                      : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                  }`}
                />
              ))}
            </div>

            {/* Spinner */}
            {isTransitioning && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">

                <div className="w-10 h-10 border-4 border-white/30 border-solid border-t-white rounded-full animate-spin"></div>

              </div>
            )}
          </div>
        )}

        {/* Thumbnails */}
        <div className="w-full overflow-x-auto no-scrollbar pb-4">
          <div className="flex justify-center gap-4 min-w-max px-2">
            {galleryData.map((img, index) => (
              <div
                key={img.id}
                onClick={() => handleThumbnailClick(index)}
                className={`cursor-pointer hover:scale-110 transition-all rounded-xl overflow-hidden shadow-md active:scale-95 ${
                  index === mainImageIndex
                    ? 'ring-4 ring-blue-500 scale-105 shadow-blue-500/25'
                    : 'hover:ring-2 hover:ring-blue-300'
                }`}
              >
                <img
                  src={img.image}
                  alt={img.text}
                  onError={handleImageError}
                  className="w-24 h-16 sm:w-28 sm:h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Counter */}
        {galleryData.length > 0 && (
          <div className="flex justify-center mt-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 border-solid rounded-full px-6 py-3 shadow-md">
              <span className="text-sm font-medium text-gray-700">
                <span className="font-bold text-blue-600">{mainImageIndex + 1}</span> of{' '}
                <span className="font-bold">{galleryData.length}</span>
              </span>
            </div>
          </div>
        )}

        {/* View More Button */}
        {currentImage?.button1_url && currentImage?.button1_text && (
          <div className="flex justify-center">
            <a
              href={currentImage.button1_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl hover:from-blue-700 hover:to-blue-900 transition-all text-lg font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95 border border-blue-500/30"
            >
              <span className="relative z-10 flex items-center">
                {currentImage.button1_text}
                <svg
                  className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        )}

        {/* Progress Bar */}
        <div className="flex justify-center mt-8">
          <div className="w-full max-w-md bg-gray-200/50 rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-linear"
              style={{ width: `${galleryData.length ? ((mainImageIndex + 1) / galleryData.length) * 100 : 0}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
