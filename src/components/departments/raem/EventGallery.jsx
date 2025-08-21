import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Eye } from "lucide-react";

const EventGallery = ({
  title = "RAEM Event Gallery",
  subtitle = "Explore our events, workshops, and training sessions",
  events = [],
  categoryColors = {
    Workshop: "bg-blue-100 text-blue-800",
    Training: "bg-green-100 text-green-800",
    Seminar: "bg-purple-100 text-purple-800",
  }
}) => {
  const [dialogImage, setDialogImage] = useState(null);

  const getCategoryColor = (category) =>
    categoryColors[category] || "bg-gray-100 text-gray-800";

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 space-y-12"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600">{subtitle}</p>
            <div className="w-20 sm:w-24 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border border-gray-300 border-solid rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="p-6 border-b border-gray-200 border-solid flex flex-col sm:flex-row justify-between sm:items-center space-y-4 sm:space-y-0">
                <div>
                  <h3 className="font-semibold text-2xl text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mt-1 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <span
                  className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${getCategoryColor(
                    event.category
                  )}`}
                >
                  {event.category}
                </span>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {event.images.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative group cursor-pointer"
                      onClick={() => setDialogImage(image)}
                    >
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-32 object-cover rounded-lg border border-gray-200 border-solid"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center"
                      >
                        <Eye className="h-6 w-6 text-white" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 border-solid">
                  <span className="text-sm text-gray-600">
                    {event.images.length} photos
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Dialog */}
      <AnimatePresence>
        {dialogImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-white/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDialogImage(null)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-xl shadow-2xl p-4 md:p-6 w-[90vw] max-w-xl relative mt-20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 focus:outline-none"
                onClick={() => setDialogImage(null)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="space-y-3">
                <div className="flex items-center justify-center">
                  <img
                    src={dialogImage.url}
                    alt={dialogImage.caption}
                    className="rounded-md object-contain max-h-[60vh]"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <p className="text-gray-700 text-center sm:text-left">
                    {dialogImage.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventGallery;
