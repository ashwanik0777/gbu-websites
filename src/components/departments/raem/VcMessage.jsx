 import React from "react";
import { motion } from "framer-motion";

const VcMessage = () => {
  const vc = {
    name: "Prof. Rana Pratap Singh",
    title: "Hon'ble Vice Chancellor – Gautam Buddha University",
    description: `Education remains the cornerstone for enriching our socio-cultural values, advancing scientific and technological excellence, and sustaining economic growth and prosperity. It is a purposeful endeavour that fosters meaningful learning, cultivates practical skills, upholds moral values, and shapes individual character and societal progress.
In the wake of the Fourth Industrial Revolution, our education system must not only embrace transformative technologies such as artificial intelligence, data science, robotics, nanotechnology, and renewable energy but also adapt to rapid social and economic changes. These emerging disciplines are poised to redefine industries across the world.
At the same time, the challenges of de-globalisation and societal unrest call for a return to our rich philosophical heritage drawing strength from the timeless wisdom of Buddhism and the Vedic traditions.
At Gautam Buddha University, we are resolute in our commitment to attain and surpass international benchmarks of quality and innovation in education. We strive to integrate our ancient heritage and national ethos with contemporary learning, ensuring that our students graduate with strong ethical foundations, a spirit of service, and a sense of responsibility towards society.`,
    image:
      "http://meow.tilchattaas.com/media/leadership/Screenshot_2025-06-24_at_10.41.43AM.png",
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-800 mb-10 sm:mb-12">
        Vice Chancellor's <span className="text-purple-800">Message</span>
        <div className="w-20 sm:w-24 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full bg-white rounded-3xl shadow-xl border border-purple-200 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10"
        >
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            src={vc.image}
            alt={vc.name}
            className="w-60 h-56 sm:w-48 sm:h-64 md:w-[220px] md:h-[300px] object-cover rounded-xl shadow-md"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-900">
              {vc.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
              {vc.title}
            </p>
            <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line">
              {vc.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VcMessage;
