import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Filter,
  Eye,
  Download,
  Calendar,
  Video,
  Image,
} from "lucide-react";
import StatsCard from "../StatsCard";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

const NSSGallery = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState("all");
  const [dialogImage, setDialogImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Blood Donation Camp 2024",
      category: "Health",
      event: "Blood Donation Camp",
      year: "2024",
      date: "2024-01-15",
      images: [
        {
          url: "https://nss.gbu.ac.in/uploads/imagesfiles/666c5b818913d_WhatsApp%20Image%202024-04-19%20at%201.59.17%20PM%20(1).jpeg",
          caption: "Volunteers registering donors",
        },
        {
          url: "https://nss.gbu.ac.in/uploads/imagesfiles/666c5b5215672_WhatsApp%20Image%202024-04-19%20at%201.28.41%20PM%20(1).jpeg",
          caption: "Medical team conducting checkups",
        },
        {
          url: "https://nss.gbu.ac.in/uploads/imagesfiles/666c5b43cda9a_WhatsApp%20Image%202024-04-19%20at%202.00.34%20PM.jpeg",
          caption: "Blood collection in progress",
        },
        {
          url: "https://nss.gbu.ac.in/uploads/imagesfiles/666c5b5c4bf7a_WhatsApp%20Image%202024-04-19%20at%204.04.40%20PM.jpeg",
          caption: "Volunteers with certificates",
        },
      ],
    },
    {
      id: 2,
      title: "Tree Plantation Drive",
      category: "Environment",
      event: "Environmental Drive",
      year: "2024",
      date: "2024-02-05",
      images: [
        { url: "/placeholder.svg", caption: "Volunteers planting saplings" },
        { url: "/placeholder.svg", caption: "Community participation" },
        { url: "/placeholder.svg", caption: "Before and after comparison" },
      ],
    },
    {
      id: 3,
      title: "Digital Literacy Program",
      category: "Education",
      event: "Digital Literacy",
      year: "2024",
      date: "2024-01-22",
      images: [
        { url: "/placeholder.svg", caption: "Teaching computer basics" },
        {
          url: "/placeholder.svg",
          caption: "Children learning digital skills",
        },
        { url: "/placeholder.svg", caption: "Volunteer instructors" },
        { url: "/placeholder.svg", caption: "Certificate distribution" },
      ],
    },
    {
      id: 4,
      title: "Community Health Camp",
      category: "Health",
      event: "Health Camp",
      year: "2023",
      date: "2023-12-10",
      images: [
        { url: "/placeholder.svg", caption: "Free health checkups" },
        { url: "/placeholder.svg", caption: "Medicine distribution" },
        { url: "/placeholder.svg", caption: "Health awareness session" },
      ],
    },
    {
      id: 5,
      title: "Rural Development Project",
      category: "Community",
      event: "Rural Development",
      year: "2023",
      date: "2023-11-15",
      images: [
        { url: "/placeholder.svg", caption: "Infrastructure development work" },
        { url: "/placeholder.svg", caption: "Community interaction" },
        { url: "/placeholder.svg", caption: "Project completion ceremony" },
      ],
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    const yearMatch = selectedYear === "all" || item.year === selectedYear;
    const categoryMatch =
      selectedCategory === "all" || item.category === selectedCategory;
    const eventMatch = selectedEvent === "all" || item.event === selectedEvent;
    return yearMatch && categoryMatch && eventMatch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      Health: "bg-red-100 text-red-800",
      Education: "bg-purple-100 text-purple-800",
      Environment: "bg-green-100 text-green-800",
      Community: "bg-orange-100 text-orange-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };
  const galleryStatsData = [
    {
      icon: Image, // Use appropriate icon like Image or Photo
      numberText: "500+",
      title: "Total Photos",
      iconColor: "#3b82f6",
    },
    {
      icon: Calendar,
      numberText: "50+",
      title: "Events Documented",
      iconColor: "#10b981",
    },
    {
      icon: Video,
      numberText: "25+",
      title: "Video Records",
      iconColor: "#f59e0b",
    },
    {
      icon: Eye,
      numberText: "10K+",
      title: "Views & Downloads",
      iconColor: "#ef4444",
    },
  ];

  return (
    <SearchableWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8 px-4 sm:px-6 lg:px-20 mx-auto max-w-7xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">NSS Gallery</h2>
          <p className="text-lg text-gray-600">
            Capturing moments of service, impact, and community engagement
          </p>
        </motion.div>
        <StatsCard stats={galleryStatsData} />;{/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow p-6"
        >
           <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">

            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Filter by:
              </span>
            </div>

            {[
              {
                value: selectedYear,
                setValue: setSelectedYear,
                options: ["all", "2024", "2023", "2022"],
                label: "Year",
                width: "w-32",
              },
              {
                value: selectedCategory,
                setValue: setSelectedCategory,
                options: [
                  "all",
                  "Health",
                  "Education",
                  "Environment",
                  "Community",
                ],
                label: "Category",
                width: "w-36",
              },
              {
                value: selectedEvent,
                setValue: setSelectedEvent,
                options: [
                  "all",
                  "Blood Donation Camp",
                  "Environmental Drive",
                  "Digital Literacy",
                  "Health Camp",
                  "Rural Development",
                ],
                label: "Event",
                width: "w-40",
              },
            ].map(({ value, setValue, options, label, width }, i) => (
              <div key={i} className={`relative ${width}`}>
                <select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full px-3 py-2 border rounded bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt === "all" ? `All ${label}s` : opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Gallery Grid */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {new Date(item.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${getCategoryColor(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold border border-gray-300 text-gray-700 bg-white">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4">
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

                  {item.images.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative group cursor-pointer"
                      onClick={() => setDialogImage(image)}
                    >
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center"
                      >
                        <Eye className="h-6 w-6 text-white" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">
                    {item.images.length} photos
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Dialog */}
        <AnimatePresence>
          {dialogImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-start justify-center bg-white/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDialogImage(null)}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-xl shadow-2xl p-4 md:p-6 w-[90vw] max-w-xl relative mt-30"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 focus:outline-none"
                  onClick={() => setDialogImage(null)}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <img
                      src={dialogImage.url}
                      alt={dialogImage.caption}
                      className="rounded-md object-contain max-h-[60vh] w-full"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <p className="text-gray-700 text-center sm:text-left">
                      {dialogImage.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SearchableWrapper>
  );
};

export default NSSGallery;
