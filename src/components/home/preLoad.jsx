import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import gbuFull from "../../assets/gbuFull.png";
import gbuHalf from "../../assets/gbuHalf.png";

// Load Saira Condensed font
const loadFont = () => {
  if (!document.querySelector('link[href*="Saira+Condensed"]')) {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@400;700;900&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
  }
};

const PreLoad = ({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Load font
    loadFont();

    // Start animation
    const animationTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 100);

    // Auto-hide preloader after animation completes
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 4000); // Adjust timing as needed

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 w-full h-screen overflow-hidden z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Layer 1: Background - Full Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${gbuFull})`,
          backgroundPosition: "center center",
        }}
      />

      {/* Layer 2: Animated Text - Middle Layer */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={
            animationComplete ? { y: -250, opacity: 1 } : { y: 400, opacity: 0 }
          }
          transition={{
            duration: 2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
          className="text-center px-4"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal text-white drop-shadow-2xl tracking-wider"
            style={{ fontFamily: "'Saira Condensed', sans-serif" }}
            initial={{ scale: 0.9 }}
            animate={animationComplete ? { scale: 1 } : { scale: 0.9 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                animationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
              className="block mb-2 text-white font-bold"
            >
              WELCOME TO
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                animationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 1.1 }}
              className="block text-white font-bold"
            >
              SMART CAMPUS
            </motion.div>
          </motion.h1>
        </motion.div>
      </div>

      {/* Layer 3: Building Only (Top Layer) - Masks the text */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-20"
        style={{
          backgroundImage: `url(${gbuHalf})`,
          backgroundPosition: "center center",
        }}
      />

      {/* Optional: Loading indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <motion.div
          className="w-16 h-1 bg-white/30 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, delay: 0.5 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PreLoad;
