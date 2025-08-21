"use client";
import React from "react";
import { Link } from "react-router-dom";

const DepartmentsSection = ({ departments = [] }) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Our Departments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three premier departments offering cutting-edge programs in
            engineering and technology.
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.length > 0 ? (
            departments.map((dept, index) => (
              <div
                key={index}
                className="flex flex-col min-h-[600px] bg-white/90 backdrop-blur-md border border-gray-200 shadow hover:shadow-xl transition-all group overflow-hidden rounded-xl"
              >
                <div className="relative">
                  <img
                    src={dept.image || "/fallback.jpg"}
                    alt={dept.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div
                    className={`absolute top-4 right-4 px-4 py-1 rounded-full text-white text-sm font-bold shadow-md bg-gradient-to-r ${
                      dept.gradient || "from-blue-400 to-blue-600"
                    }`}
                  >
                    {dept.code}
                  </div>
                </div>

                <div className="px-6 pt-4">
                  <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors">
                    {dept.name}
                  </h3>
                </div>

                <div className="px-6 pb-6 pt-4 flex flex-col gap-6 flex-grow">
                  <p className="text-gray-700">
                    {dept.description || "No description available"}
                  </p>

                  <div className="grid gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {dept.faculty ?? "—"}
                      </div>
                      <div className="text-sm text-gray-600">Faculty</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Programs Offered:
                    </h4>
                    <ul className="space-y-1">
                      {(dept.courses || []).map((course, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link to={dept.link || "#"}>
                      <div
                        className={`text-center w-full py-2 rounded-lg font-medium bg-gradient-to-r ${
                          dept.gradient || "from-blue-400 to-blue-600"
                        } text-white hover:brightness-110 transition`}
                      >
                        Learn More
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center col-span-full text-gray-500">
              No departments available.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
