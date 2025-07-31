import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import ButtonGroup from "../../../components/TabsData.jsx";
import SearchableWrapper from "../../../components/Searchbar/SearchableWrapper.jsx";

const categories = ["All", "Workshops", "Seminars", "Hackathons"];

const events = [
  {
    title: "STUDENTS VISIT WORKSHOPS",
    date: "March 15, 2024",
    image: "https://www.gburif.org/event/students.jpeg",
    images: ["https://www.gburif.org/event/students.jpeg"],
    description:
      "Students from various departments visited industry workshops to explore practical applications and innovations.",
    detailedDescription:
      "Students from various departments participated in guided visits to multiple industrial workshops. They learned about real-world processes, observed live demonstrations, and interacted with experts to understand the latest technologies shaping the industry.",
    category: "Workshops",
  },
  {
    title: "TECH INNOVATION FAIR",
    date: "April 2, 2024",
    image:
      "https://youthincmag.com/wp-content/uploads/2022/12/IMG_20200105_151513-scaled.jpg",
    images: ["https://www.gburif.org/event/innovation.jpeg"],
    description:
      "Showcase of student-led innovations with live prototypes and demos.",
    detailedDescription:
      "Over 50 projects ranging from IoT devices to sustainable energy solutions were showcased by students.",
    category: "Seminars",
  },
  {
    title: "WOMEN IN TECH SEMINAR",
    date: "April 28, 2024",
    image:
      "https://media.kasperskydaily.com/wp-content/uploads/sites/85/2021/03/19103746/womens-history-month.jpg",
    images: ["https://media.kasperskydaily.com/wp-content/uploads/sites/85/2021/03/19103746/womens-history-month.jpg"],
    description:
      "Celebrating women innovators through talks and mentorship.",
    detailedDescription:
      "Women leaders from academia and industry inspired participants through panel discussions, networking and interactive sessions.",
    category: "Seminars",
  },
  {
    title: "AI & ROBOTICS WORKSHOP",
    date: "May 10, 2024",
    image: "https://gburif.org/Photo%20Gallery/img/img-42.jpg",
    images: ["https://www.gburif.org/event/robotics.jpeg"],
    description: "Hands-on with robots and AI models.",
    detailedDescription:
      "Participants programmed robots to perform tasks and explored machine learning applications in real-world scenarios.",
    category: "Workshops",
  },
  {
    title: "CAMPUS HACKATHON 2024",
    date: "June 5, 2024",
    image: "https://gburif.org/event/trade%20show.jpeg",
    images: ["https://www.gburif.org/event/hackathon.jpeg"],
    description:
      "24-hour coding competition attracting teams from across India.",
    detailedDescription:
      "More than 300 students competed to solve real-world challenges under tight deadlines. The hackathon concluded with demos and prize distribution.",
    category: "Hackathons",
  },
  {
    title: "STARTUP PITCH DAY",
    date: "June 20, 2024",
    image: "https://gburif.org/Photo%20Gallery/img/img-5.jpg",
    images: ["https://www.gburif.org/event/startup.jpeg"],
    description: "Incubated startups pitched ideas to investors.",
    detailedDescription:
      "Early-stage startups showcased their progress and received valuable feedback from industry experts and potential investors.",
    category: "Seminars",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function EventsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((e) => e.category === selectedCategory);

  const categoryButtons = categories.map((cat) => ({
    id: cat,
    label: cat,
  }));


  return (
    <SearchableWrapper>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-center mb-8">EVENT GALLERY</h1>
        </div>

        {/* Tabs */}
        <div className="text-center mb-5">
          <ButtonGroup
            buttons={categoryButtons}
            onClick={setSelectedCategory}
            activeButton={selectedCategory}
            size="md"
            theme="primary"
            gap={true}      // allows spacing between buttons
            rounded="full"  // makes them pill-shaped like your old buttons
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredEvents.map((event, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => setSelectedEvent(event)}
              className="bg-white rounded-2xl shadow-md shadow-gray-300 border border-gray-100 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-gray-500">{event.date}</p>
                  {event.category && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      {event.category}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                className="bg-white max-w-3xl w-full rounded-xl overflow-hidden relative shadow-xl shadow-gray-400"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-black"
                >
                  <X className="w-6 h-6" />
                </button>
                {selectedEvent.images?.length ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedEvent.images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${selectedEvent.title} ${i + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {selectedEvent.date}
                  </p>
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {selectedEvent.detailedDescription || selectedEvent.description}
                  </p>
                  {selectedEvent.category && (
                    <span className="inline-block mt-4 text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                      {selectedEvent.category}
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SearchableWrapper>
  );
}
