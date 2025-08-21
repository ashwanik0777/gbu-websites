import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import HeroBanner from "../../components/HeroBanner";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-xl bg-white shadow-md hover:shadow-xl transition-transform duration-300 cursor-pointer overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-4 md:p-6 ${className}`} {...props}>
    {children}
  </div>
);

const HostelDetailed = () => {
  const BASE = "https://meow.tilchattaas.com";
  const [categories, setCategories] = useState([]);
  const [hostelData, setHostelData] = useState({});
  const [currentCategory, setCurrentCategory] = useState(null);
  const [selectedHostel, setSelectedHostel] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catRes = await axios.get(`${BASE}/campuslife/data`);
        const hostelsRes = await axios.get(`${BASE}/campuslife/hostelss`);

        setCategories(catRes.data[0].hostels || []);
        setHostelData(hostelsRes.data[0].hostels || {});

        const defaultCategory = catRes.data[0].hostels.find((h) =>
          h.name.toLowerCase().includes("boys")
        );
        if (defaultCategory) setCurrentCategory(defaultCategory);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleCategoryClick = (cat) => {
    setCurrentCategory(cat);
    setSelectedHostel(null);
  };

  const handleHostelClick = (h) => {
    setSelectedHostel(h);
  };

  const getHostelsOfCategory = () => {
    if (!currentCategory) return [];
    const key = currentCategory.name.toLowerCase().includes("boys")
      ? "boys"
      : currentCategory.name.toLowerCase().includes("girls")
      ? "girls"
      : currentCategory.name.toLowerCase().includes("phd")
      ? "phd"
      : "international";
    return hostelData[key] || [];
  };

  return (
    <SearchableWrapper>
    <section className="min-h-screen bg-gray-50">
      <HeroBanner
        title="Hostel Life"
        subtitle="Explore our hostels with modern amenities and comfortable living."
        bgTheme={1}
      />
      <div className="container mt-10 mx-auto px-4 md:px-8 lg:px-30">
        {/* === Category Cards === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCategoryClick(cat)}
            >
              <Card
                className={`${
                  currentCategory?.id === cat.id
                    ? "ring-4 ring-blue-500 ring-opacity-50"
                    : ""
                }`}
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{cat.name}</h3>
                    <p className="text-sm">{cat.capacity}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* === Selected Category Detail === */}
        {currentCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <Card className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 md:p-6">
              <CardContent>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-gray-800">
                  {currentCategory.name}
                </h3>

                <p className="text-lg md:text-xl text-blue-700 font-semibold mb-3">
                  Capacity: {currentCategory.capacity}
                </p>

                <p className="text-gray-700 text-base md:text-lg mb-2 leading-relaxed">
                  {currentCategory.description}
                </p>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {currentCategory.fullDescription}
                </p>

                {currentCategory.amenities?.length > 0 && (
                  <>
                    <h4 className="mt-4 text-lg font-semibold text-gray-800">
                      Amenities:
                    </h4>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {currentCategory.amenities.map((a, i) => (
                        <li
                          key={i}
                          className="bg-blue-100 text-blue-800 text-xs md:text-sm px-3 py-1 rounded-full shadow-sm"
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {currentCategory.rules?.length > 0 && (
                  <>
                    <h4 className="mt-4 text-lg font-semibold text-gray-800">
                      Rules:
                    </h4>
                    <ul className="mt-1 list-disc list-inside text-gray-600 space-y-1 text-base">
                      {currentCategory.rules.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* === Hostels in Selected Category === */}
        {getHostelsOfCategory().length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {getHostelsOfCategory().map((h, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleHostelClick(h)}
              >
                <Card>
                  <a href="#detailedcard">
                    <div className="relative aspect-[4/3]">
                      <img
                        src={h.image}
                        alt={h.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-lg font-bold">{h.name}</h4>
                      </div>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* === Selected Hostel Detail === */}
        <div id="detailedcard" className="pb-10"></div>
        {selectedHostel && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="my-12 pt-5"
          >
            <Card className="p-4 md:p-6 rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-2xl md:text-3xl text-blue-700 font-extrabold mb-4"
                >
                  {selectedHostel.name}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-gray-800 text-base md:text-lg mb-4 leading-relaxed"
                >
                  {selectedHostel.description}
                </motion.p>

                <p className="text-blue-600 text-base md:text-lg font-semibold mb-2">
                  Facilities:
                </p>

                {selectedHostel.facilities && (
                  <ul className="text-gray-700 space-y-2 capitalize text-base md:text-lg">
                    {Object.entries(selectedHostel.facilities).map(([k, v]) => (
                      <li key={k} className="flex items-start gap-2">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                        <span>
                          <strong>{k.replace(/_/g, " ")}:</strong> {v}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {selectedHostel.image && (
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    src={selectedHostel.image}
                    alt={selectedHostel.name}
                    className="w-full mt-6 rounded-2xl shadow-md object-cover"
                  />
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
    </SearchableWrapper>
  );
};

export default HostelDetailed;
