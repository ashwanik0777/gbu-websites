import { motion } from "framer-motion";

const AboutUs = ({ data }) => {
  const {
    heading = "About Us",
    subtitle = "",
    floatingIcons = [],
    cards = [],
  } = data || {};

  // Simplified variants with only transform & opacity for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const iconVariants = {
    hidden: { scale: 0.85, rotate: -5, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-6, 6, -6],
      rotate: [0, 3, -3, 0],
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const highlightVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.97, y: 6 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ willChange: "opacity" }}
        >
          <motion.div className="relative inline-block">
            <h2
              className="text-5xl md:text-6xl font-bold text-blue-600 mb-4"
              style={{ willChange: "transform, opacity" }}
            >
              {heading}
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full origin-left"
              variants={highlightVariants}
              style={{ willChange: "transform" }}
            />
          </motion.div>
          {subtitle && (
            <motion.p
              className="text-xl text-gray-600 mt-6 font-medium"
              variants={itemVariants}
              style={{ willChange: "transform, opacity" }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingIcons.map((icon, i) => (
            <motion.div
              key={i}
              className={`absolute ${icon.style} ${icon.color} opacity-20`}
              variants={floatingVariants}
              animate="animate"
              style={{ willChange: "transform" }}
            >
              {icon.icon}
            </motion.div>
          ))}
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {cards.length > 0 ? (
              cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="relative group h-full"
                  variants={cardVariants}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* Removed heavy blur and boxShadow on background for performance */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      card.bgGradient || "from-blue-500 to-purple-600"
                    } rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    aria-hidden="true"
                  />
                  <div className="relative bg-white/90 rounded-2xl p-8 border border-white/20 shadow-md h-full flex flex-col">
                    <motion.div
                      className="flex items-center mb-6"
                      variants={iconVariants}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <div
                        className={`p-3 bg-gradient-to-r ${
                          card.bgGradient || "from-blue-500 to-purple-600"
                        } rounded-xl text-white mr-4`}
                      >
                        {card.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {card.title || "No Title"}
                      </h3>
                    </motion.div>

                    <div className="flex-grow">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {card.content}
                      </p>

                      {card.highlight && (
                        <motion.div
                          className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500"
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          style={{ willChange: "transform, opacity" }}
                        >
                          <p className="text-gray-700 italic">{card.highlight}</p>
                        </motion.div>
                      )}

                      {card.bullets && (
                        <motion.div
                          className="space-y-4 mt-6"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          style={{ willChange: "opacity" }}
                        >
                          {card.bullets.map((point, i) => (
                            <div key={i} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                              <p className="text-gray-700">{point}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-2">No cards found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
