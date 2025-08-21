import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const cardVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const VisionaryLeadership = () => {
  const [leaders, setLeaders] = useState([]);
  const [index, setIndex] = useState(0);

  const BASE_URL = import.meta.env.VITE_HOST;
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/landing/leadership/`);
      const data = res.data;
      console.log("Fetched data:", data);
      if (Array.isArray(data)) {
        const sorted = [...data].sort((a, b) => {
          const roles = ["Hon'ble Chancellor", "Hon'ble Vice-Chancellor"];
          const aIndex = roles.indexOf(a.designation?.trim());
          const bIndex = roles.indexOf(b.designation?.trim());
          
          if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
          if (aIndex !== -1) return -1;
          if (bIndex !== -1) return 1;
          return 0;
        });
        setLeaders(sorted);
      }
    } catch (error) {
      console.error("Error fetching leadership data:", error);
    }
  };

  fetchData();
}, []);



  useEffect(() => {
    if (leaders.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % leaders.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [leaders]);

  if (leaders.length === 0) {
    return (
      <section className="py-16 text-center text-blue-800">
        <p>Loading Visionary Leadership...</p>
      </section>
    );
  }

  const current = leaders[index];
  const fullImageUrl = current.photo?.includes("http")
    ? current.photo
    : `${BASE_URL}/${current.photo.startsWith("media") ? "" : "media/"}${current.photo}`;

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-100 via-white to-green-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-10 sm:mb-12">
        Visionary   <span className="text-blue-800"> Leadership</span>
        <div className="w-20 sm:w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="w-full bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl border border-blue-200 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10"
          >
            <img
              src={fullImageUrl}
              alt={current.name}
              className="w-60 h-56 sm:w-48 sm:h-64 md:w-[220px] md:h-[300px] object-cover rounded-xl shadow-md"
            />
            <div className="text-center md:text-left">
              <Link to={current.url}><h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
                {current.name}
              </h3></Link>
              <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
                {current.designation}
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                {current.message}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {leaders.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-blue-600 scale-125" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionaryLeadership;
