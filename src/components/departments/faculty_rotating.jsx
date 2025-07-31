import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FacultyResponsiveSlider({
  title = "Faculty",
  subTitle = "",
  facultyList = [],
  autoSlideInterval = 3000,
  visibleCards = 4,
  cardWidth = 280,
  gap = 38,
  navigateTo = "/schools/ict/faculty",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disableAnimation, setDisableAnimation] = useState(false);
  const navigate = useNavigate();

  const moveBy = cardWidth + gap;

  const loopData = [...facultyList, ...facultyList.slice(0, visibleCards)];

  useEffect(() => {
    if (facultyList.length <= visibleCards) return; 

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === facultyList.length) {
          setDisableAnimation(true);
          setTimeout(() => {
            setCurrentIndex(0);
            setDisableAnimation(false);
          }, 50);
          return prev + 1;
        }
        return prev + 1;
      });
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [facultyList.length, autoSlideInterval, visibleCards]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? facultyList.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === facultyList.length ? 0 : prev + 1
    );
  };

  const handleCardClick = () => {
    navigate(navigateTo);
  };

  return (
    <section className="py-10 bg-white overflow-hidden relative">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
          {title}
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full" />
        </h2>
        {subTitle && (
          <p className="text-gray-600 text-sm mt-1">{subTitle}</p>
        )}
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <button
          onClick={handlePrev}
          className="absolute -left-10 top-1/2 -translate-y-1/2 bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-full shadow-md z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute -right-10 top-1/2 -translate-y-1/2 bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-full shadow-md z-10"
        >
          <ChevronRight size={24} />
        </button>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: -currentIndex * moveBy }}
            transition={
              disableAnimation ? { duration: 0 } : { ease: "easeInOut", duration: 0.6 }
            }
            className="flex gap-[38px]"
            style={{
              width: `${(cardWidth + gap) * (facultyList.length + visibleCards)}px`,
            }}
          >
            {loopData.map((member, i) => (
              <div
                key={i}
                onClick={handleCardClick}
                className="flex-shrink-0 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md border border-blue-200 p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                style={{ width: `${cardWidth}px` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-44 object-cover rounded-xl shadow mb-4"
                />
                <h3 className="text-lg font-semibold text-blue-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
