import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function MediaCoverage({
  sectionTitle = "Media Coverage",
  sectionSubtitle = "Explore how our work is making headlines",
  mediaItems = [],
}) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-600">{sectionSubtitle}</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-xl shadow-lg border border-gray-200 border-solid bg-white p-6 h-[600px]"
        >
          <h3 className="text-blue-800 text-lg font-bold mb-4">
            News & Articles
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto h-[calc(100%-80px)] pr-2 custom-scrollbar">
            {mediaItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-semibold text-blue-900 text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 mb-1">
                  {item.description}
                </p>
                <div className="flex items-center text-xs text-blue-600 font-medium">
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.date}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
