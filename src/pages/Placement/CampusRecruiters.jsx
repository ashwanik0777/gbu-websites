import { useState } from "react";
import { ArrowLeft, Building, Users, Calendar, MapPin } from "lucide-react";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";
const CampusRecruiters = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCompany, setHoveredCompany] = useState(null);

  const companies = {
    "it-tech": [
      {
        name: "TCS",
        logo: "🔷",
        hired: 45,
        roles: ["Software Engineer", "Data Analyst"],
        year: 2024,
        description: "Leading IT services company",
      },
      {
        name: "Infosys",
        logo: "🔹",
        hired: 32,
        roles: ["Developer", "Consultant"],
        year: 2024,
        description: "Global technology services",
      },
      {
        name: "Wipro",
        logo: "🔸",
        hired: 35,
        roles: ["Software Developer", "Cloud Engineer"],
        year: 2024,
        description: "Digital transformation partner",
      },
      {
        name: "IBM",
        logo: "🔹",
        hired: 28,
        roles: ["AI Engineer", "Software Developer"],
        year: 2024,
        description: "Technology and consulting",
      },
    ],
    core: [
      {
        name: "L&T",
        logo: "🏗️",
        hired: 25,
        roles: ["Mechanical Engineer", "Civil Engineer"],
        year: 2024,
        description: "Engineering and construction",
      },
      {
        name: "BHEL",
        logo: "⚡",
        hired: 20,
        roles: ["Electrical Engineer", "Project Engineer"],
        year: 2024,
        description: "Power and industrial equipment",
      },
      {
        name: "ONGC",
        logo: "🛢️",
        hired: 15,
        roles: ["Petroleum Engineer", "Geologist"],
        year: 2024,
        description: "Oil and natural gas corporation",
      },
    ],
    consulting: [
      {
        name: "Deloitte",
        logo: "💼",
        hired: 25,
        roles: ["Business Analyst", "Consultant"],
        year: 2024,
        description: "Professional services",
      },
      {
        name: "EY",
        logo: "📊",
        hired: 18,
        roles: ["Financial Analyst", "Audit Associate"],
        year: 2024,
        description: "Assurance and advisory services",
      },
      {
        name: "KPMG",
        logo: "📈",
        hired: 22,
        roles: ["Risk Consultant", "Tax Associate"],
        year: 2024,
        description: "Audit and advisory services",
      },
    ],
    government: [
      {
        name: "DRDO",
        logo: "🛡️",
        hired: 12,
        roles: ["Research Scientist", "Engineer"],
        year: 2024,
        description: "Defence research organization",
      },
      {
        name: "ISRO",
        logo: "🚀",
        hired: 8,
        roles: ["Space Engineer", "Scientist"],
        year: 2024,
        description: "Space research organization",
      },
      {
        name: "BARC",
        logo: "⚛️",
        hired: 10,
        roles: ["Nuclear Engineer", "Physicist"],
        year: 2024,
        description: "Atomic research centre",
      },
    ],
  };

  const categories = [
    {
      id: "all",
      name: "All Companies",
      count: Object.values(companies).flat().length,
    },
    { id: "it-tech", name: "IT & Tech", count: companies["it-tech"].length },
    { id: "core", name: "Core Engineering", count: companies.core.length },
    {
      id: "consulting",
      name: "Consulting & Finance",
      count: companies.consulting.length,
    },
    {
      id: "government",
      name: "Government & Research",
      count: companies.government.length,
    },
  ];

  const getDisplayCompanies = () => {
    if (selectedCategory === "all") {
      return Object.values(companies).flat();
    }
    return companies[selectedCategory] || [];
  };

  return (
    <SearchableWrapper>
    <div className="min-h-screen  pt-3 bg-gray-50">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Our Esteemed Campus Recruiters
            </h2>
            <p className="text-lg text-center text-gray-600">
              Building strong corporate partnerships across diverse domains,
              fostering trust and creating exceptional career opportunities for
              our students
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>
          {/* Past Recruitment Highlights */}
          <div className="mt-20 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              2024 Recruitment Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">45+</div>
                <p className="text-gray-700">Students placed by TCS</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">8</div>
                <p className="text-gray-700">Google internship offers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  25+
                </div>
                <p className="text-gray-700">Deloitte consultancy roles</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  12+
                </div>
                <p className="text-gray-700">DRDO research positions</p>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 m-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Company Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getDisplayCompanies().map((company, index) => (
              <div
                key={index}
                className="relative group bg-white/80 backdrop-blur-sm border-0 shadow-md rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 cursor-pointer pt-3"
                onMouseEnter={() => setHoveredCompany(company)}
                onMouseLeave={() => setHoveredCompany(null)}
              >
                {/* Full Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-violet-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-lg"></div>

                {/* Foreground Content */}
                <div className="relative z-10 p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{company.logo}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {company.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-green-600">
                      <Users className="h-4 w-4 mr-1" />
                      {company.hired}+ hired in {company.year}
                    </div>

                    <div className="flex items-center justify-center text-blue-600">
                      <Building className="h-4 w-4 mr-1" />
                      {company.roles.length} role types
                    </div>

                    <div className="flex items-center justify-center text-purple-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      Active since {company.year}
                    </div>
                  </div>

                  {/* Hover Details */}
                  <div className="mt-4 text-bg-50 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/50 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Roles Offered:
                      </h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {company.roles.map((role, roleIndex) => (
                          <span
                            key={roleIndex}
                            className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recruiter Testimonials */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              What Our Recruiters Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm pt-4 border-0 shadow-xl rounded-lg">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">TCS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">HR Director, TCS</h4>
                      <p className="text-sm text-gray-600">
                        Technology Services
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "GBU students consistently demonstrate excellent technical
                    skills and adaptability. We've hired 45+ students in 2024
                    alone."
                  </p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm pt-4 border-0 shadow-xl rounded-lg">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">D</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Talent Manager, Deloitte
                      </h4>
                      <p className="text-sm text-gray-600">Consulting</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "The quality of graduates from GBU is exceptional. Their
                    problem-solving abilities and professional attitude make
                    them ideal candidates."
                  </p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm pt-4 border-0 shadow-xl rounded-lg">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">I</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Campus Lead, Infosys</h4>
                      <p className="text-sm text-gray-600">Digital Services</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "GBU has been a reliable partner in our talent acquisition.
                    The students are well-prepared and ready to contribute from
                    day one."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
     </SearchableWrapper>
  );
};

export default CampusRecruiters;
