 import React from "react";
import { motion } from "framer-motion";

import SearchableWrapper from "../../../components/Searchbar/SearchableWrapper";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Card = ({ image, title, icon, description }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="bg-white rounded-2xl shadow-md shadow-gray-300 overflow-hidden w-80 sm:w-[24rem] transform hover:scale-[1.02] transition-all duration-300"
  >
    <img src={image} alt={title} className="w-full h-46 object-cover" />
    <div className="flex justify-center -mt-6">
      <div className="bg-pink-600 rounded-full p-4 shadow-lg">
        <span className="text-white text-2xl">{icon}</span>
      </div>
    </div>
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </motion.div>
);

const Focus = () => {
  const cards = [
    {
      image:
        "https://www.gburif.org/Screenshot%202024-06-11%20at%204.14.25%E2%80%AFAM.png",
      title: "Focus Areas",
      icon: "🚀",
      description:
        "The functional areas are not limited to IOT, AI, Robotics, Microsystems, Date Analytics, High Frequency Applications, Integrated Circuits, PCB based Solutions, Sensor Network, Neural Computing, IT/ ITES, Telecom, Mobile VAS, Gaming and Animation, Reliability, Internet/Web, Media and Entertainment.",
    },
    {
      image:
        "https://www.gburif.org/noida-08november2010-gautam-htphoto-university-noida-greater_a63589a4-2b9a-11e8-8732-87a46da2a8cc.jpg",
      title: "Objective",
      icon: "📋",
      description:
        "To provide mentors for skill up ideas. Example can be an AI based Electromagnetic Shielding device problem. One mentor from Electronics Circuits, One from HF Electronics, one from Mechanical and one from Computer Science knowledge tank will be potential mentors.",
    },
  ];

  return (
    <SearchableWrapper>
    <section className="min-h-[60vh] bg-gray-100 py-20 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        FOCUS AND OBJECTIVE
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
    </SearchableWrapper>
  );
};

export default Focus;
