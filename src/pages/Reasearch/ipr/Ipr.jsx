import React from "react";
import IPRObjectives from "./IPRObjectives";
import Team from "./Team";
import IprCourses from "./IprCourses";
import {
  FileText,
  Download,
  Search,
  Filter,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ImportantLinks from "./ImportantLinks";
import ContactDetails from "./ContactDetails";

import SearchableWrapper from '../../../components/Searchbar/SearchableWrapper';
import BannerSection from "../../../components/HeroBanner.jsx";
import StatsCard from "../../../components/StatsCard.jsx";

const Ipr = () => {
  const policies = [
    {
      title: "IPR Policy 2024",
      category: "Intellectual Property",
      year: "2024",
      description:
        "Framework for safeguarding innovations, managing patents, and promoting intellectual property rights within the university.",
      icon: FileText,
      color: "from-green-400 to-green-600",
    },
  ];
  return (
    <SearchableWrapper>
      <div>
        {/* Banner Section */}
        <BannerSection
          title="IPR Cell"
          subtitle="Your Partner in Intellectual Property Protection."
          bgTheme={7} // You can change this to 1–10 to pick a theme
        />

        {/* About Section */}
        <div
          id="about"
          className="bg-white pb-12 sm:py-16 sm:px-10 md:px-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-green-600 via-blue-700 to-red-500 mb-8">
                About Us
              </h2>
          <div className="flex flex-col md:flex-row items-center px-30 gap-8 md:gap-12">
            
            {/* Text Section - Wider */}
            <div className="md:w-2/3 text-center md:text-left">
              
              <p className="text-gray-700 text-base sm:text-lg mb-4">
                Gautam Buddha University was established in the year 2008 by the
                Uttar Pradesh Act (9) of 2002. The University is recognized by the
                University Grants Commission of India under section 2(f) of UGC
                Act 1956 and approved by UGC under section 12-B. The University
                had initiated research activities since its inception with the
                help of qualified faculty members and ambitious students. The
                University aspires to conduct R&D in diverse areas aiming to cover
                the full spectrum, from fundamental and theoretical studies,
                through research of relevance to business and industry with
                practice-based studies in Science, Engineering, Management, and
                allied areas.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4">
                The focus of the University in promoting interdisciplinary
                research is to bring together experts from a variety of
                disciplines to identify challenges and deliver practical
                solutions. University also guides and encourages the faculty
                members to propose new research projects and ideas to carry out
                innovative research, apply for externally funded research projects
                to different national and international funding agencies, and also
                in helping the researchers in filing the Intellectual Properties
                (IPs) generated and protecting their rights.
              </p>
              
            </div>

            {/* Image Section - Smaller */}
            <div className="relative md:w-1/3 w-full mt-8 md:mt-0">
              <img
                src="https://www.gburif.org/images/intro-carousel/dsf8939-b-copy.jpg"
                alt="Library"
                className="rounded-xl shadow-xl w-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-orange-600 text-white text-center px-5 py-3 rounded-lg shadow-lg text-sm sm:text-base">
                <div className="text-xl sm:text-2xl font-bold">15+</div>
                <div>Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
        <IPRObjectives />
        <Team />
        <IprCourses />
        <section className="py-16  to-white">
          <div className="container mx-auto px-4">

            <h1 className="text-3xl font-bold text-center mb-8 ">GBU IPR Policy</h1>
            <div
              className={`${policies.length === 1
                  ? "flex justify-center"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                } gap-8`}
            >
              {policies.map((policy, index) => (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${policy.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
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
                      <button className="flex items-center text-teal-600 hover:text-teal-800 font-semibold transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ImportantLinks />
        <ContactDetails />
      </div>
    </SearchableWrapper>
  );
};

export default Ipr;
