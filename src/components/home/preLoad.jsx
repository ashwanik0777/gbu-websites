import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gbuFull from "../../assets/gbuFull.png";
import gbuHalf from "../../assets/gbuHalf.png";

/* ✅ Load Font */
const loadFont = () => {
  if (!document.querySelector('link[href*="Saira+Condensed"]')) {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@400;700;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
};

/* 🎬 Premium easing */
const smooth = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const PreLoad = ({ onComplete }) => {
  const [show, setShow] = useState(true);
  const [startText, setStartText] = useState(false);

  useEffect(() => {
    loadFont();

    const textTimer = setTimeout(() => setStartText(true), 500);

    const timer = setTimeout(() => {
      setShow(false);
      onComplete?.();
    }, 4200);

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }} // ✨ smoother exit
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* 🌌 BACKGROUND */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${gbuFull})` }}
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* 🎨 DEPTH OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50 backdrop-blur-[2px]" />

          {/* ✨ TEXT */}
          <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={startText ? { opacity: 1, y: -255 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center d-flex flex-column align-items-center justify-content-center"
            >
              <motion.h1
                className="text-white drop-shadow-2xl tracking-wider text-4xl sm:text-5xl md:text-7xl lg:text-8xl"
                style={{ fontFamily: "'Saira Condensed', sans-serif" }}
              >
                {/* Sub Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={startText ? { opacity: 0.8, y: 0 } : {}}
                  transition={{ ...smooth, delay: 0.2 }}
                  className="block mb-2 text-white font-bold"
                >
                  WELCOME TO
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={startText ? { opacity: 1, y: 0 } : {}}
                  transition={{ ...smooth, delay: 0.4 }}
                  className="d-block display-6 display-sm-5 display-md-3 display-lg-1 fw-bold text-white"
                >
                  OUR SMART CAMPUS
                </motion.div>
              </motion.h1>
            </motion.div>
          </div>

          {/* 🏛️ FOREGROUND */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center pointer-events-none z-20"
            style={{ backgroundImage: `url(${gbuHalf})` }}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.33, 1] }}
          />

          {/* ⏳ LOADER */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center justify-center w-full px-4">
            {/* Bar */}
            <div className="w-40 sm:w-56 md:w-64 h-[3px] bg-white/20 rounded-full overflow-hidden relative">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-white/30 blur-sm"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              {/* Progress */}
              <motion.div
                className="h-full bg-white rounded-full relative z-10"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 4.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            {/* Text */}
            <motion.p
              className="text-white/70 text-[10px] sm:text-xs mt-3 text-center tracking-[0.25em]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              WELCOME TO GAUTAM BUDDHA UNIVERSITY
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoad;
