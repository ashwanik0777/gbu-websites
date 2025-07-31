import React, { useState } from "react";

import { BookOpen, Users, DollarSign, Award } from "lucide-react";

import BannerSection from "../../components/HeroBanner.jsx";
import StatsCard from "../../components/StatsCard.jsx";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

const ResearchCenters = () => {
  const centers = [
    {
      id: 1,
      name: "Centre for Artificial Intelligence & Machine Learning",
      shortName: "AI-ML Center",
      description:
        "Advanced research in AI, ML, deep learning, and neural networks with state-of-the-art computing infrastructure.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      location: "Block A, Research Complex",
      head: "Dr. Rajesh Kumar",
      established: "2020",
      facilities: [
        "GPU Clusters",
        "Quantum Simulators",
        "Edge Computing Lab",
        "Vision Lab",
      ],
      researchAreas: ["Computer Vision", "NLP", "Robotics", "Quantum ML"],
      school: "Information & Communication Technology",
    },
    {
      id: 2,
      name: "Biotechnology Research Centre",
      shortName: "BioTech Center",
      description:
        "Cutting-edge biotechnology research focusing on healthcare, pharmaceuticals, and agricultural applications.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      location: "Life Sciences Building",
      head: "Dr. Priya Sharma",
      established: "2018",
      facilities: [
        "Cell Culture Lab",
        "Genomics Lab",
        "Protein Lab",
        "Biosafety Level 2",
      ],
      researchAreas: [
        "Gene Therapy",
        "Drug Discovery",
        "Bioprocessing",
        "Synthetic Biology",
      ],
      school: "Biotechnology",
    },
    {
      id: 3,
      name: "Renewable Energy Research Institute",
      shortName: "RERI",
      description:
        "Sustainable energy solutions including solar, wind, and energy storage technologies.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      location: "Green Technology Campus",
      head: "Dr. Amit Patel",
      established: "2019",
      facilities: [
        "Solar Testing Lab",
        "Wind Tunnel",
        "Battery Testing",
        "Smart Grid Lab",
      ],
      researchAreas: [
        "Photovoltaics",
        "Energy Storage",
        "Smart Grids",
        "Fuel Cells",
      ],
      school: "Engineering",
    },
    {
      id: 4,
      name: "Materials Science & Engineering Lab",
      shortName: "MSE Lab",
      description:
        "Advanced materials research for aerospace, automotive, and electronics industries.",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      location: "Engineering Block C",
      head: "Dr. Sanjay Gupta",
      established: "2017",
      facilities: ["XRD Lab", "SEM/TEM", "Mechanical Testing", "Thin Film Lab"],
      researchAreas: [
        "Nanomaterials",
        "Composites",
        "Smart Materials",
        "Biomaterials",
      ],
      school: "Engineering",
    },
    {
      id: 5,
      name: "IoT & Cyber Security Research Centre",
      shortName: "IoT-Security Center",
      description:
        "Internet of Things and cybersecurity research for smart cities and industrial applications.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      location: "IT Building, Floor 3",
      head: "Dr. Neha Singh",
      established: "2021",
      facilities: ["IoT Testbed", "Security Lab", "5G Lab", "Blockchain Lab"],
      researchAreas: [
        "IoT Security",
        "Blockchain",
        "5G Networks",
        "Edge Computing",
      ],
      school: "Information & Communication Technology",
    },
    {
      id: 6,
      name: "Environmental Science Research Lab",
      shortName: "ESR Lab",
      description:
        "Environmental monitoring, climate change research, and sustainable development solutions.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      location: "Environmental Sciences Building",
      head: "Dr. Kavita Mehta",
      established: "2016",
      facilities: [
        "Air Quality Lab",
        "Water Testing",
        "GIS Lab",
        "Climate Chamber",
      ],
      researchAreas: [
        "Climate Change",
        "Pollution Control",
        "Remote Sensing",
        "Green Chemistry",
      ],
      school: "Vocational Studies & Applied Sciences",
    },
  ];

  const schools = [
    "Biotechnology",
    "Buddhist Studies & Civilization",
    "Engineering",
    "Humanities & Social Sciences",
    "Information & Communication Technology",
    "Law, Justice and Governance",
    "Management",
    "Vocational Studies & Applied Sciences",
  ];

  const schoolColors = {
    Biotechnology: "bg-green-200 text-green-800",
    "Buddhist Studies & Civilization": "bg-yellow-200 text-yellow-800",
    Engineering: "bg-indigo-200 text-indigo-800",
    "Humanities & Social Sciences": "bg-pink-200 text-pink-800",
    "Information & Communication Technology": "bg-blue-200 text-blue-800",
    "Law, Justice and Governance": "bg-red-200 text-red-800",
    Management: "bg-orange-200 text-orange-800",
    "Vocational Studies & Applied Sciences": "bg-teal-200 text-teal-800",
  };

  const [selectedSchool, setSelectedSchool] = useState("all");
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const technologies = [
    ...new Set(centers.flatMap((center) => center.researchAreas)),
  ];

  const filteredCenters = centers.filter((center) => {
    const matchesSchool =
      selectedSchool === "all" || center.school === selectedSchool;
    const matchesTechnology =
      selectedTechnology === "all" ||
      center.researchAreas.includes(selectedTechnology);
    const matchesSearch = center.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesSchool && matchesTechnology && matchesSearch;
  });

  const statsData = [
    {
      icon: BookOpen,
      number: 20,
      title: "Research Centers",
      iconColor: "#2563eb", // blue-600
    },
    {
      icon: Users,
      number: 150,
      title: "Research Faculty",
      iconColor: "#16a34a", // green-600
    },
    {
      icon: DollarSign,
      numberText: "₹50Cr+",
      title: "Research Funding",
      iconColor: "#0891b2", // cyan-600
    },
    {
      icon: Award,
      number: 300,
      title: "Active Projects",
      iconColor: "#eab308", // yellow-500
    },
  ];


  return (
    <SearchableWrapper>
      <div className="min-h-screen bg-gray-50 pb-16">
        {/* Hero Section */}
        <BannerSection
          title="Center of Excellence & Laboratories"
          subtitle="World-class research facilities driving innovation across disciplines"
          bgTheme={2}
        />

        {/* Stats */}
        <StatsCard stats={statsData} />
        {/* Filters */}
        <div className="max-w-6xl mx-auto mt-10 px-4">
          <div className="flex flex-wrap gap-4 items-center ">
            {/* School Filter */}
            <div className="flex flex-col ">

              <select
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
              >
                <option value="all">All Schools</option>
                {schools.map((school, idx) => (
                  <option key={idx} value={school}>
                    {school}
                  </option>
                ))}
              </select>
            </div>

            {/* Technology Filter */}
            <div className="flex flex-col">

              <select
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedTechnology}
                onChange={(e) => setSelectedTechnology(e.target.value)}
              >
                <option value="all">All Technologies</option>
                {technologies.map((tech, idx) => (
                  <option key={idx} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col flex-grow min-w-[200px]">

              <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {filteredCenters.length > 0 ? (
              filteredCenters.map((center) => (
                <div
                  key={center.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
                >
                  <div className="relative mb-4">
                    <img
                      src={center.image}
                      alt={center.name}
                      className="w-full h-52 object-cover rounded-xl"
                    />
                    <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Est. {center.established}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-blue-700">
                    {center.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{center.shortName}</p>
                  <div
                    className={`inline-block mb-2 text-xs font-semibold px-3 py-2 rounded-full ${schoolColors[center.school]
                      }`}
                  >
                    {center.school}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {center.description}
                  </p>

                  <div className="text-sm text-gray-700 mb-4 space-y-1">
                    <p>
                      <span className="font-semibold text-blue-600">Head:</span>{" "}
                      {center.head}
                    </p>
                    <p>
                      <span className="font-semibold text-blue-600">
                        Location:
                      </span>{" "}
                      {center.location}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-600 mb-1">
                      Key Facilities:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {center.facilities.map((facility, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                        >
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-600 mb-1">
                      Research Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {center.researchAreas.map((area, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-3">
                    <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md w-full hover:bg-blue-700">
                      Visit Lab
                    </button>
                    <button className="border border-blue-600 text-blue-600 text-sm px-4 py-2 rounded-md w-full hover:bg-blue-50">
                      Contact
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-2">
                No research centers found matching your criteria.
              </p>
            )}
          </div>
        </div>
      </div>
    </SearchableWrapper>
  );
};

export default ResearchCenters;
