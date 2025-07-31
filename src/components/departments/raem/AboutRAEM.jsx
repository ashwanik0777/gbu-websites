import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Award, Check } from "lucide-react";

const AboutRAEM = ({
  title = "About",
  highlight = "RAEM",
  visionTitle = "Our Vision",
  visionIcon = Lightbulb,
  visionText = [],
  missionTitle = "Our Mission",
  missionIcon = Award,
  missionPoints = [],
  sections = [],
  photos = [],
}) => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-800 mb-10 sm:mb-12">
        {title} <span className="text-purple-800">{highlight}</span>
        <div className="w-20 sm:w-24 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* VISION & MISSION CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl border-gray-300 border-[1px] border-solid hover:shadow-lg transition"
          >
            <div className="flex items-center mb-6">
              <visionIcon className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">{visionTitle}</h3>
            </div>
            {visionText.map((text, idx) => (
              <p
                key={idx}
                className={`text-gray-700 text-lg ${
                  idx > 0 ? "mt-4" : ""
                } leading-relaxed`}
              >
                {text}
              </p>
            ))}
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl border-gray-300 border-[1px] border-solid hover:shadow-lg transition"
          >
            <div className="flex items-center mb-6">
              <missionIcon className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">{missionTitle}</h3>
            </div>
            <ul className="space-y-3 text-gray-700 text-lg">
              {missionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="text-green-600 w-5 h-5 mr-2 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* TEXT SECTIONS + IMAGES */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT SECTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            {sections.map(({ heading, text }, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-foreground">
                  {heading}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {photos.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`About Section ${idx + 1}`}
                className="rounded-lg shadow-lg border h-110 border-gray-200 border-solid w-full"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutRAEM;
