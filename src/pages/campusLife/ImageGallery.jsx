 import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";

const ImageGallery = ({ images, autoPlayInterval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const half = Math.ceil(images.length / 2);
  const rightThumbs = images.slice(0, half - 1);
  const bottomThumbs = images.slice(half - 1);

  return (
    <SearchableWrapper>
    <div className="flex flex-col items-center justify-center p-4 mx-auto">
      <div className="flex flex-col md:flex-row relative md:mr-[128px]">
        
        {/* === Mobile View: Main Image with Arrows === */}
        <div className="relative block md:hidden">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt="Main"
            className="w-[100vw] h-[250px] object-cover rounded-xl"
            initial={{ opacity: 0.7, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/60 rounded-full px-3 py-1 font-bold text-lg"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/60 rounded-full px-3 py-1 font-bold text-lg"
          >
            ›
          </button>
        </div>

        {/* === Desktop View: Main Image + Thumbnails === */}
        <div className="hidden md:block relative">
          {/* Right Thumbnails */}
          <div className="absolute right-[-120px] top-0 flex flex-col space-y-4 max-h-[500px]">
            {rightThumbs.map((imgSrc, index) => (
              <motion.img
                key={`right-${index}`}
                src={imgSrc}
                alt={`Thumbnail ${index}`}
                className={`w-24 h-24 object-cover rounded-lg cursor-pointer border ${
                  index === currentIndex
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>

          {/* Main Image */}
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt="Main"
            className="w-[900px] h-[400px] object-cover rounded-xl"
            initial={{ opacity: 0.7, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Bottom Thumbnails */}
          <div className="absolute -bottom-26 left-0 w-full flex flex-wrap justify-center gap-8">
            {bottomThumbs.map((imgSrc, index) => {
              const actualIndex = half - 1  + index;
              return (
                <motion.img
                  key={`bottom-${index}`}
                  src={imgSrc}
                  alt={`Thumbnail ${index}`}
                  className={`w-24 h-20 object-cover rounded-lg cursor-pointer border ${
                    actualIndex === currentIndex
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleThumbnailClick(actualIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default ImageGallery;
