import React, { useState } from "react";
import { motion } from "framer-motion";

const HodMessage = ({
  title = "From the Desk of HOD",
  image = "",
  name = "Dr. John Doe",
  designation = "Head of Department",
  messageParagraphs = [],
  contact = null,
}) => {
  const [showFull, setShowFull] = useState(false);
  const visibleCount = 2;

  const toggleView = () => setShowFull((prev) => !prev);
  const visibleParagraphs = showFull
    ? messageParagraphs
    : messageParagraphs.slice(0, visibleCount);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-blue-900 mb-12"
          >
            {title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* HOD Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1 flex flex-col items-center text-center mt-10"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 shadow-2xl ring-4 ring-blue-200 hover:ring-blue-400 transition">
                {image ? (
                  <img
                    src={image}
                    alt={`${name} - ${designation}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">{name}</h3>
              <p className="text-blue-600 font-medium">{designation}</p>
            </motion.div>

            {/* Message Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 space-y-5 text-gray-700 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-100"
            >
              {Array.isArray(messageParagraphs) && messageParagraphs.length > 0 ? (
                <>
                  {visibleParagraphs.map((para, idx) => (
                    <p key={idx} className="leading-relaxed text-lg">
                      {para}
                    </p>
                  ))}

                  {messageParagraphs.length > visibleCount && (
                    <div className="pt-2">
                      <button
                        onClick={toggleView}
                        className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-md transition duration-200"
                      >
                        {showFull ? "View Less" : "View More"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <p className="leading-relaxed text-lg italic text-gray-500">
                  No message available.
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HodMessage;
