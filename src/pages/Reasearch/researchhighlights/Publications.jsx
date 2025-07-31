import React, { useState } from "react";
import { Eye, Download, Filter, BookOpen, FileSignature, Star, Award, Search, ChevronLeft, ChevronRight, Calendar, User, Building } from "lucide-react";

import StatsCard from "../../../components/StatsCard.jsx";
import SearchableWrapper from "../../../components/Searchbar/SearchableWrapper.jsx";
import ButtonGroup from '../../../components/TabsData.jsx';

const Publications = () => {
  const [activeTab, setActiveTab] = useState("publications");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  const types = [
    "Article",
    "Thesis",
    "Conference Paper",
    "Book Chapter",
    "Review",
    "Book",
    "Book Review",
    "Letter",
    "News Clippings",
    "Editorial",
  ];
  const statuses = ["Granted", "Filed", "Under Review", "Published"];

  const publications = [
    {
      id: 1,
      title: "Machine Learning Approaches for Climate Change Prediction",
      authors: "Dr. A. Kumar, Dr. B. Singh",
      journal: "Nature Climate Change",
      year: "2024",
      impact: "15.3",
      citations: 145,
      type: "Article",
      category: "Environmental Science",
      school: "Engineering",
      scopusId: "SC123456",
      doi: "10.1038/nclimate1234",
      issn: "1758-678X",
      indexing: "Scopus, Web of Science",
      quartile: "Q1",
    },
    {
      id: 2,
      title: "Quantum Computing Applications in Drug Discovery",
      authors: "Dr. P. Sharma, Dr. R. Gupta",
      journal: "Science",
      year: "2024",
      impact: "47.7",
      citations: 203,
      type: "Thesis",
      category: "Biotechnology",
      school: "Biotechnology",
      scopusId: "SC654321",
      doi: "10.1126/science.abcd123",
      issn: "0036-8075",
      indexing: "Scopus",
      quartile: "Q1",
    },
    {
      id: 3,
      title: "Blockchain for Secure Academic Records",
      authors: "Dr. V. Rao, Dr. T. Kapoor",
      journal: "IEEE Transactions on Education",
      year: "2023",
      impact: "5.2",
      citations: 76,
      type: "Article",
      category: "Cybersecurity",
      school: "Information & Communication Technology",
      scopusId: "SC109823",
      doi: "10.1109/TE.2023.3211234",
      issn: "0018-9359",
      indexing: "IEEE Xplore, Scopus",
      quartile: "Q2",
    },
    {
      id: 4,
      title: "Gender and Legal Reforms in South Asia",
      authors: "Dr. N. Kaur",
      journal: "Journal of Law and Society",
      year: "2022",
      impact: "3.9",
      citations: 41,
      type: "Review",
      category: "Human Rights",
      school: "Law, Justice and Governance",
      scopusId: "SC212345",
      doi: "10.1111/jols.2022.34.1.89",
      issn: "0263-323X",
      indexing: "Scopus",
      quartile: "Q3",
    },
    {
      id: 5,
      title: "AI Ethics in Autonomous Vehicles",
      authors: "Dr. I. Mehta, Dr. S. Pillai",
      journal: "Journal of Artificial Intelligence Research",
      year: "2024",
      impact: "10.5",
      citations: 112,
      type: "Conference Paper",
      category: "Ethics",
      school: "Engineering",
      scopusId: "SC778812",
      doi: "10.1007/s13218-024-0100",
      issn: "1076-9757",
      indexing: "Scopus, Springer",
      quartile: "Q1",
    },
    {
      id: 6,
      title: "Role of Mindfulness in Academic Performance",
      authors: "Dr. R. Dey",
      journal: "Psychological Reports",
      year: "2021",
      impact: "2.7",
      citations: 54,
      type: "Article",
      category: "Psychology",
      school: "Humanities & Social Sciences",
      scopusId: "SC443322",
      doi: "10.1177/00332941211008977",
      issn: "0033-2941",
      indexing: "PubMed, Scopus",
      quartile: "Q4",
    },
    // Add more entries as needed
  ];

  const patents = [
    {
      id: 1,
      title: "Smart Irrigation Using IoT",
      inventors: "Dr. A. Patel",
      patentNo: "IN202411001234",
      filingDate: "2024-03-15",
      status: "Granted",
      category: "AgriTech",
      school: "Engineering",
    },
    {
      id: 2,
      title: "AI Medical Imaging",
      inventors: "Dr. P. Sharma",
      patentNo: "IN202311009876",
      filingDate: "2023-11-10",
      status: "Under Review",
      category: "Healthcare",
      school: "ICT",
    },
    {
      id: 3,
      title: "Wearable Device for Real-Time Glucose Monitoring",
      inventors: "Dr. A. Khan, Ms. P. Sharma",
      patentNo: "IN202411007001",
      filingDate: "2024-04-02",
      status: "Filed",
      category: "Healthcare",
      school: "Biotechnology",
    },
    {
      id: 4,
      title: "Decentralized Voting System Using Blockchain",
      inventors: "Dr. R. Singh, Mr. T. Yadav",
      patentNo: "IN202311004567",
      filingDate: "2023-09-15",
      status: "Published",
      category: "E-Governance",
      school: "Information & Communication Technology",
    },
    {
      id: 5,
      title: "Solar-Powered Cold Storage for Rural Areas",
      inventors: "Dr. L. Sinha",
      patentNo: "IN202311002345",
      filingDate: "2023-07-10",
      status: "Granted",
      category: "Renewable Energy",
      school: "Vocational Studies & Applied Sciences",
    },
    {
      id: 6,
      title: "AI-Based Legal Document Summarizer",
      inventors: "Dr. M. Chawla, Dr. J. Roy",
      patentNo: "IN202411005432",
      filingDate: "2024-02-20",
      status: "Under Review",
      category: "LegalTech",
      school: "Law, Justice and Governance",
    },

    // Add more entries as needed
  ];

  const filteredPublications = publications.filter((pub) => {
    return (
      (!selectedSchool || pub.school === selectedSchool) &&
      (!selectedCategory || pub.category === selectedCategory) &&
      (!selectedYear || pub.year === selectedYear) &&
      (!selectedType || pub.type === selectedType) &&
      (!searchTerm ||
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const filteredPatents = patents.filter((p) => {
    return (
      (!selectedSchool || p.school === selectedSchool) &&
      (!selectedStatus || p.status === selectedStatus)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    activeTab === "publications"
      ? filteredPublications.slice(indexOfFirstItem, indexOfLastItem)
      : filteredPatents.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages =
    activeTab === "publications"
      ? Math.ceil(filteredPublications.length / itemsPerPage)
      : Math.ceil(filteredPatents.length / itemsPerPage);

  const tabButtons = [
    { id: "publications", label: "Research Publications" },
    { id: "patents", label: "Patents" },
  ];

  const statsData = [
    {
      icon: BookOpen,
      number: 500,
      title: "Total Publications",
      iconColor: "#2563eb", // blue-600
    },
    {
      icon: FileSignature,
      number: 75,
      title: "Patents Filed",
      iconColor: "#16a34a", // green-600
    },
    {
      icon: Star,
      number: 25.5,
      title: "Avg Impact Factor",
      iconColor: "#0891b2", // cyan-600
    },
    {
      icon: Award,
      number: 1000,
      numberText: "1000+", // If you want the + sign instead of counting up
      title: "Total Citations",
      iconColor: "#facc15", // yellow-500
    },
  ];

  const cardStyle = {
    transform: 'translateY(0px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const cardHoverStyle = {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
  };

  return (
    <SearchableWrapper>
      <div>
        <div className="bg-gradient-to-b from-white to-blue-50">
          <div className="text-center mt-15">
            <h1 className="text-4xl font-semibold text-black/70">
              Publications & Patents
            </h1>
          </div>

          <StatsCard stats={statsData} />

        </div>

        <div className="px-30 pb-10">
          {/* Tabs */}
          <ButtonGroup
            buttons={tabButtons}
            onClick={(btnId) => {
              setActiveTab(btnId);
              setCurrentPage(1);
            }}
            activeButton={activeTab}
            size="lg"
            fullWidth={true}
            rounded="lg"
            theme="primary"
            animated={true}
          />

          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Filter size={20} className="text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Filter Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* School Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">School</label>
                <select
                  value={selectedSchool}
                  onChange={(e) => setSelectedSchool(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
                >
                  <option value="">All Schools</option>
                  {schools.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
                >
                  <option value="">All Categories</option>
                  <option value="Climate Research">Climate Research</option>
                  <option value="Biotechnology">Biotechnology</option>
                  <option value="Energy Systems">Energy Systems</option>
                </select>
              </div>

              {/* Status Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
                >
                  <option value="">All Status</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                  <option value="Final Phase">Final Phase</option>
                </select>
              </div>

              {/* Search Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Search</label>
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Publication Cards */}
          {activeTab === "publications" && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {currentItems.length > 0 ? (
                currentItems.map((pub, index) => (
                  <div
                    key={pub.id}
                    className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 p-8 overflow-hidden"
                    style={{
                      ...cardStyle,
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'both'
                    }}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, cardHoverStyle);
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(e.currentTarget.style, cardStyle);
                    }}
                  >
                    {/* Gradient Background Effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* School Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md transform group-hover:scale-105 transition-transform duration-300">
                      {pub.school}
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-4 mt-9 pr-20 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                        {pub.title}
                      </h3>

                      {/* Authors */}
                      <div className="mb-4">
                        <p className="text-gray-700 text-sm font-medium mb-1">Authors</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{pub.authors}</p>
                      </div>

                      {/* Journal & Year */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-gray-700 text-sm font-medium mb-1">Journal</p>
                          <p className="text-gray-600 text-sm">{pub.journal}</p>
                        </div>
                        <div>
                          <p className="text-gray-700 text-sm font-medium mb-1">Year & Type</p>
                          <p className="text-gray-600 text-sm">{pub.year} • {pub.type}</p>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-100">
                          <p className="text-green-700 text-xs font-medium mb-1">Impact Factor</p>
                          <p className="text-green-800 text-lg font-bold">{pub.impact}</p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border border-purple-100">
                          <p className="text-purple-700 text-xs font-medium mb-1">Citations</p>
                          <p className="text-purple-800 text-lg font-bold">{pub.citations}</p>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="space-y-3 mb-6">
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">Quartile:  {pub.quartile}</span>
                          <span className="bg-gray-50 text-gray-700 px-2 py-1 rounded">Indexing: {pub.indexing}</span>
                        </div>
                        <div className="text-xs text-gray-500 space-y-1">
                          <p><span className="font-medium">DOI:</span> {pub.doi}</p>
                          <p><span className="font-medium">Scopus ID:</span> {pub.scopusId}</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium group/btn">
                          <Eye size={16} className="group-hover/btn:scale-110 transition-transform duration-200" />
                          View Details
                        </button>
                        <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium group/btn">
                          <Download size={16} className="group-hover/btn:scale-110 transition-transform duration-200" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="text-gray-400 text-lg mb-2">No publications found</div>
                  <p className="text-gray-500 text-sm">Check back later for updates</p>
                </div>
              )}
            </div>
          )}

          {/* Patent Cards */}
          {activeTab === "patents" && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {currentItems.length > 0 ? (
                currentItems.map((patent, index) => (
                  <div
                    key={patent.id}
                    className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 p-8 overflow-hidden"
                    style={{
                      ...cardStyle,
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'both'
                    }}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, cardHoverStyle);
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(e.currentTarget.style, cardStyle);
                    }}
                  >
                    {/* Gradient Background Effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-50 to-transparent rounded-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* School Badge */}
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md transform group-hover:scale-105 transition-transform duration-300">
                      {patent.school}
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 mt-10 pr-30 leading-tight group-hover:text-indigo-700 transition-colors duration-300">
                        {patent.title}
                      </h3>

                      {/* Inventors */}
                      <div className="mb-4">
                        <p className="text-gray-700 text-sm font-medium mb-1">Inventors</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{patent.inventors}</p>
                      </div>

                      {/* Patent Details */}
                      <div className="space-y-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-gray-700 text-sm font-medium mb-1">Patent Number</p>
                            <p className="text-gray-900 text-sm font-mono bg-gray-50 px-3 py-2 rounded border">{patent.patentNo}</p>
                          </div>
                          <div>
                            <p className="text-gray-700 text-sm font-medium mb-1">Filing Date</p>
                            <p className="text-gray-600 text-sm">{patent.filingDate}</p>
                          </div>
                        </div>

                        {/* Status */}
                        <div>
                          <p className="text-gray-700 text-sm font-medium mb-2">Status</p>
                          <span
                            className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold shadow-sm ${patent.status === "Granted"
                              ? "bg-green-100 text-green-800 border border-green-200"
                              : patent.status === "Filed"
                                ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                                : patent.status === "Under Review"
                                  ? "bg-orange-100 text-orange-800 border border-orange-200"
                                  : "bg-blue-100 text-blue-800 border border-blue-200"
                              }`}
                          >
                            <div className={`w-2 h-2 rounded-full mr-2 ${patent.status === "Granted" ? "bg-green-500" :
                              patent.status === "Filed" ? "bg-yellow-500" :
                                patent.status === "Under Review" ? "bg-orange-500" : "bg-blue-500"
                              }`}></div>
                            {patent.status}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium group/btn">
                          <Eye size={16} className="group-hover/btn:scale-110 transition-transform duration-200" />
                          View Details
                        </button>
                        <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium group/btn">
                          <Download size={16} className="group-hover/btn:scale-110 transition-transform duration-200" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="text-gray-400 text-lg mb-2">No patents found</div>
                  <p className="text-gray-500 text-sm">Check back later for updates</p>
                </div>
              )}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-700 text-white" : "bg-gray-200"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

    </SearchableWrapper>
  );
};

export default Publications;
