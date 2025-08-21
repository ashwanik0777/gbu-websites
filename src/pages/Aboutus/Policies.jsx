
import React, { useState } from 'react';

import { FileText, Download, Search, Filter, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";
import BannerSection from "../../components/HeroBanner.jsx";

const Policies = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const policies = [

    {
      title: "Admission Policy",
      category: "admission",
      year: "2025",
      description: "Detailed admission criteria and procedures for all programs",
      icon: FileText,
      color: "from-green-400 to-green-600",
      link: "https://pravesh.gbu.ac.in/Content/Data/GBU-BROCHURE-2025.pdf"
    },
    {
      title: "Research Policy",
      category: "research",
      year: "2025",
      description: "Guidelines for research activities and intellectual property",
      icon: FileText,
      color: "from-purple-400 to-purple-600",
      link: "https://www.gbu.ac.in/Content/gbudata/IIC/GBU-Innovation-StartupPolicy-Mar2025.pdf"
    },
    {
      title: "Anti-Ragging Policy",
      category: "student",
      year: "2025",
      description: "Zero tolerance policy against ragging and harassment",
      icon: FileText,
      color: "from-red-400 to-red-600",
      link: "https://www.gbu.ac.in/content/gbudata/general/AntiRagging-Home-rev.pdf"
    },
    {
      title: "Fee Structure & Refund Policy",
      category: "financial",
      year: "2025",
      description: "Comprehensive fee structure and refund guidelines",
      icon: FileText,
      color: "from-yellow-400 to-orange-500",
      link: "https://gbu-website.vercel.app/admissions/fee-structure-prospectus"
    },
    {
      title: "Academic Policy 2024",
      category: "academic",
      year: "2024",
      description: "Comprehensive guidelines for academic procedures and standards",
      icon: FileText,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Grievance Redressal Policy",
      category: "student",
      year: "2025",
      description: "Mechanism for addressing student and staff grievances",
      icon: FileText,
      color: "from-indigo-400 to-indigo-600",
      link: "https://gbu-website.vercel.app/escalation-policy"
    },

  ];

  const rtiData = [
    {
      question: "How to file an RTI application?",
      answer: "RTI applications can be filed online through the university portal or submitted physically at the registrar's office with the prescribed fee."
    },
    {
      question: "What is the fee for RTI application?",
      answer: "The fee for RTI application is ₹10 for general information and ₹2 per page for photocopies of documents."
    },
    {
      question: "Who is the Public Information Officer (PIO)?",
      answer: "The Registrar of the university serves as the Public Information Officer for RTI matters."
    },
    {
      question: "What is the time limit for RTI response?",
      answer: "The university is required to respond to RTI applications within 30 days of receipt."
    },
    {
      question: "How to appeal against RTI decisions?",
      answer: "Appeals can be filed with the First Appellate Authority within 30 days of receiving the decision or non-response."
    }
  ];

  const filteredPolicies = policies.filter(policy => {
    const matchesFilter = activeFilter === 'all' || policy.category === activeFilter;
    const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <SearchableWrapper>
      <>
        {/* Hero Section */}
        <BannerSection
          title="Policies, Statutes & RTI"
          subtitle="Transparency and Compliance Guidelines"
          bgTheme={1}
        />
        {/* Search and Filter Section */}
        <section className="py-8 bg-gradient-to-br from-teal-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 border-solid">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search policies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 border-solid rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  {/* Filter Dropdown */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={activeFilter}
                      onChange={(e) => setActiveFilter(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 border-solid rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
                    >
                      <option value="all">All Categories</option>
                      <option value="academic">Academic</option>
                      <option value="admission">Admission</option>
                      <option value="research">Research</option>
                      <option value="student">Student Affairs</option>
                      <option value="financial">Financial</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policies Grid */}
        <section className="py-16 bg-gradient-to-br from-cyan-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">University Policies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPolicies.map((policy, index) => (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 border-solid hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${policy.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <policy.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors">
                        {policy.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {policy.year}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{policy.description}</p>

                    <div className="flex justify-between items-center">
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {policy.category}
                      </span>
                      <a
                        href={policy.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-800 transition-colors"
                      >
                        <Download className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RTI Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Right to Information (RTI)</h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 border-solid overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 text-white text-center">
                  <FileText className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">RTI Information Center</h3>
                  <p className="opacity-90">Frequently Asked Questions about RTI Procedures</p>
                </div>

                <div className="p-8">
                  <div className="space-y-4">
                    {rtiData.map((item, index) => (
                      <div key={index} className="border border-gray-200 border-solid rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                        >
                          <span className="font-semibold text-gray-800">{item.question}</span>
                          {expandedFAQ === index ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        {expandedFAQ === index && (
                          <div className="p-6 bg-gray-50 border-t border-gray-200 border-solid">
                            <p className="text-gray-700">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-8">
                    <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300">
                      File RTI Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </SearchableWrapper>
  );
};

export default Policies;
