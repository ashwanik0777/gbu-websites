import React from "react";
import { motion } from "framer-motion";

export default function DroneCourseCard({
  sectionTitle,
  sectionSubtitle,
  imageSrc,
  imageAlt,
  badgeText,
  courseTitle,
  courseDescription,
  duration,
  price,
  eligibility,
  startDate,
  venue,
  highlights = [],
  syllabusLink,
}) {
  return (
    <section className="py-16 w-full mx-auto px-4">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center py-16"
      >
        <h2 className="text-4xl font-bold text-blue-800 mb-4">{sectionTitle}</h2>
        <p className="text-lg text-gray-600">{sectionSubtitle}</p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mx-20 mb-10 flex flex-col lg:flex-row bg-white/90 backdrop-blur-md border border-gray-200 border-solid shadow hover:shadow-xl transition-all overflow-hidden rounded-xl"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full relative"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-64 lg:h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-4 right-4 px-4 py-1 rounded-full text-white text-sm font-bold shadow-md bg-gradient-to-r from-blue-500 to-indigo-500">
            {badgeText}
          </div>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col p-6 gap-6 lg:w-1/2"
        >
          <h3 className="text-2xl font-bold text-blue-900 hover:text-blue-600 transition-colors">
            {courseTitle}
          </h3>

          <p className="text-gray-700">{courseDescription}</p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{duration}</div>
              <div className="text-sm text-gray-600">Duration</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{price}</div>
              <div className="text-sm text-gray-600">Pricing</div>
            </div>
          </div>

          {/* Key Info */}
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <strong>Eligibility:</strong> {eligibility}
            </p>
            <p>
              <strong>Start Date:</strong> {startDate}
            </p>
            <p>
              <strong>Venue:</strong> {venue}
            </p>
          </div>

          {/* Course Highlights */}
          {highlights.length > 0 && (
            <div className="bg-blue-50 p-4 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">
                Course Highlights:
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                {highlights.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Download Button */}
          {syllabusLink && (
            <div className="mt-2">
              <a
                href={syllabusLink}
                download
                className="block text-center w-full py-2 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:brightness-110 transition"
              >
                Download Syllabus
              </a>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
