import React from "react";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Mentors = ({ sectionTitle, mentors }) => {
  return (
    <section className="pt-4 pb-16 bg-gray-50 mx-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-black mb-10 sm:mb-12"
        >
          <span className="text-blue-800">{sectionTitle}</span>
          <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {mentor.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{mentor.role}</p>

                  {mentor.qualifications && (
                    <div className="bg-gray-50 rounded-lg p-3 w-full mb-3">
                      <p className="text-sm font-semibold text-gray-600 mb-1">Qualifications</p>
                      <p className="text-sm text-gray-800">{mentor.qualifications}</p>
                    </div>
                  )}

                  <div className="bg-gray-50 rounded-lg p-3 w-full mb-3">
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      {mentor.type === "GBU" ? "Expertise" : "About"}
                    </p>
                    <p className="text-sm text-gray-800">
                      {mentor.type === "GBU" ? mentor.expertise : mentor.about}
                    </p>
                  </div>

                  {mentor.linkedin && (
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mt-2">
                      <Linkedin className="w-4 h-4" />
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        LinkedIn
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
