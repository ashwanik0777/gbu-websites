import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Award, Check } from "lucide-react";

const AboutSection = ({
  sectionTitle,
  visionTitle,
  visionDescription,
  missionTitle,
  missionPoints,
  storyTitle,
  storyText,
  whatWeDoTitle,
  whatWeDoText,
  commitmentTitle,
  commitmentText,
  photos = [],
}) => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-10 sm:mb-12">
        {sectionTitle}
        <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl border-gray-300 border-[1px] border-solid hover:shadow-lg transition"
          >
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">{visionTitle}</h3>
            </div>
            {visionDescription.map((desc, idx) => (
              <p
                key={idx}
                className={`text-gray-700 text-lg leading-relaxed ${idx !== 0 ? "mt-4" : ""}`}
              >
                {desc}
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
              <Award className="w-8 h-8 text-green-600 mr-3" />
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

        {/* Story, What We Do, Commitment */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground">{storyTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{storyText}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{whatWeDoTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{whatWeDoText}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{commitmentTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{commitmentText}</p>
            </div>
          </motion.div>

          {/* Images */}
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
                alt={`About us photo ${idx + 1}`}
                className="rounded-lg shadow-lg border border-gray-200 border-solid w-full"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
