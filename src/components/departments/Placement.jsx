import React from "react";

const PlacementsSection = ({data}) => {
  // 🔹 Dynamic Placement Data (can be moved to API or MongoDB later)
 

  const { title, subTitle, heroImage, placementStats } = data;

  return (
    <section id="placements" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">
            {title}
          </h2>
          <p className="text-xl text-gray-600">{subTitle}</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placementStats.map((stat, index) => (
            <div
              key={index}
              className="text-center group bg-white shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 p-6 rounded-xl"
            >
              <div
                className={`w-20 h-20 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.value}
              </div>
              <h3 className="font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
