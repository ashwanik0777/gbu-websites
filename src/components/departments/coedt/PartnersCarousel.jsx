import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ✅ Reusable Badge
const Badge = ({ className = "", children }) => (
  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${className}`}>
    {children}
  </span>
);

const PartnersCarousel = ({
  sectionTitle = "Our Collaborators",
  sectionSubtitle = "Strategic partners supporting our mission",
  partners = [],
  interval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length);
    }, interval);
    return () => clearInterval(timer);
  }, [partners.length, interval]);

  const getTypeColor = (type) => {
    switch (type) {
      case "Industrial Partner":
        return "bg-indigo-600 text-white";
      case "Training Partner":
        return "bg-emerald-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">{sectionTitle}</h2>
          <p className="text-lg text-gray-600">{sectionSubtitle}</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative shadow-xl border-gray-300 border-[1px] border-solid bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden"
        >
          <div className="relative h-80 md:h-72">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Text */}
                  <div className="p-6 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50">
                    <div className="mb-3">
                      <Badge className={getTypeColor(partner.type)}>{partner.type}</Badge>
                      {partner.year && (
                        <Badge className="ml-2 bg-gray-100 text-gray-800">
                          Since {partner.year}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{partner.name}</h3>
                    <p className="text-gray-700">{partner.description}</p>
                  </div>

                  {/* Image */}
                  <div className="relative flex items-center justify-center p-6">
                    <div className="w-60 h-40 md:w-72 md:h-44 flex items-center justify-center bg-white rounded-lg border border-gray-200 border-solid">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-600 shadow-lg scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
