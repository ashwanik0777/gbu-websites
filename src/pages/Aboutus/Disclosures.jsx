import React, { useState } from 'react';

import {
  CheckCircle,
  Download,
  Eye,
  FileText,
  Award,
  Users,
  DollarSign,
  Calendar, ShieldCheck
} from 'lucide-react';

import BannerSection from "../../components/HeroBanner.jsx";
import StatsCard from "../../components/StatsCard.jsx";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

const Disclosures = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const disclosures = [
     {
      category: 'Regulatory Approvals & MoUs',
      icon: FileText, // or ShieldCheck, or CheckSquare for approvals
      color: 'from-indigo-400 to-indigo-600',
      items: [
        {
          title: 'AICTE Approved Courses',
          status: 'completed',
          lastUpdated: '2024',
          link: 'https://www.gbu.ac.in/Content/gbudata/approval/AICTE_Approved_Courses.pdf'
        },
        {
          title: 'UGC Approval Letter under Section 12(B)',
          status: 'completed',
          lastUpdated: '2024',
          link: 'https://www.gbu.ac.in/Content/gbudata/approval/UGC_12BCertificate_28June19.pdf'
        },
        {
          title: 'UGC Approval Letter under Section 2(f)',
          status: 'completed',
          lastUpdated: '2024',
          link: 'https://www.gbu.ac.in/Content/gbudata/approval/UGC-GBU%202f.pdf'
        },
        {
          title: 'NCTE Recognition Order',
          status: 'completed',
          lastUpdated: '2024',
          link: 'https://www.gbu.ac.in/Content/gbudata/approval/Deppt_Education_NCT_17May2017.pdf'
        },
        {
          title: 'MoU with Cybertick India Pvt. Ltd.',
          status: 'completed',
          lastUpdated: '2024',
          link: 'https://www.gbu.ac.in/Content/gbudata/General/Matter%20for%20Media%20Press.pdf'
        },
        {
          title: 'ISO Manual & Certificate',
          status: 'completed',
          lastUpdated: '2024',
          link: 'https://www.gbu.ac.in/Content/gbudata/approval/Certificate.pdf'
        },
        {
          title: 'MoU with NSDC (Skill Development)',
          status: 'completed',
          lastUpdated: '2024',
          link: 'https://www.gbu.ac.in/Content/gbudata/General/MOU_NSDC_DOC_1July15.pdf'
        },
        {
          title: 'Educational Society Registration Certificate',
          status: 'completed',
          lastUpdated: '2024',
          link: 'https://www.gbu.ac.in/Content/gbudata/General/GBU_SocietyRegistration.pdf'
        }
      ]
    }
    ,
    {
      category: 'Academic Information',
      icon: FileText,
      color: 'from-blue-400 to-blue-600',
      items: [
        { title: 'NAAC Accreditation Certificate', status: 'completed', lastUpdated: '2024', link: "https://www.gbu.ac.in/Content/gbudata/approval/NAAC%20Certificate_31Dec18.jpg", },
        { title: 'Academic Calendar 2024-25', status: 'completed', lastUpdated: '2024', link: "https://www.gbu.ac.in/Content/gbudata/General/Academic%20Calendar%202024-25.pdf", },
        { title: 'Fee Structure', status: 'completed', lastUpdated: '2024', link: "https://pravesh.gbu.ac.in/Content/Data/Fee_Structure2024-25.pdf", },
        { title: 'Admission Criteria', status: 'completed', lastUpdated: '2024', link: "https://pravesh.gbu.ac.in/Content/Data/GBU-BROCHURE-2025.pdf", },
        {
          title: 'Anti Ragging Guidelines',
          status: 'completed',
          lastUpdated: '2024',
          link: 'https://www.gbu.ac.in/page/AntiRagging'
        }
      ]
    },
    {
      category: 'Faculty Information',
      icon: Users,
      color: 'from-purple-400 to-purple-600',
      items: [
        {
          title: 'Faculty List',
          status: 'completed',
          lastUpdated: '2024',
          link: 'https://gbu-website.vercel.app/academics/faculty'
        },
        {
          title: 'Schools & Departments',
          status: 'completed',
          lastUpdated: '2024',
          link: 'https://gbu-website.vercel.app/academics/schools'
        },
        {
          title: 'Research Publications',
          status: 'completed',
          lastUpdated: '2024',
          link: 'https://www.gbu.ac.in/public/publications'
        }
      ]
    }
    ,
    {
      category: 'Infrastructure Details',
      icon: Award,
      color: 'from-red-400 to-red-600',
      items: [
        { title: 'Campus Facilities', status: 'completed', lastUpdated: '2024', link: "https://gbu-website.vercel.app/campus-life/hero", },
        { title: 'Library Resources', status: 'completed', lastUpdated: '2024', link: "https://gbu-website.vercel.app/campus-life/hero", },
        { title: 'Laboratory Details', status: 'completed', lastUpdated: '2024', link: "https://gbu-website.vercel.app/academics/centers-of-excellence", },
        { title: 'Hostel Facilities', status: 'completed', lastUpdated: '2024', link: "https://gbu-website.vercel.app/campus-life/hostel-detailed", }
      ]
    }
  ];

  const complianceMetrics = [
    { icon: Award, numberText: "B+", title: "NAAC Grade" },
    { icon: ShieldCheck, numberText: "16:1", title: "Student–Faculty Ratio" },
    { icon: FileText, number: 21, title: "Funded Projects" },
    { icon: CheckCircle, numberText: "3+", title: "MoUs Signed" },
  ];

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (<SearchableWrapper><>

    {/* Hero Section */}
    <BannerSection
      title="Mandatory Disclosures"
      subtitle="Transparency and Accountability in Education"
      bgTheme={9}
    />

    {/* Disclosure Categories */}
    <section className="pb-16 bg-gradient-to-br from-teal-50 to-white">
      <StatsCard stats={complianceMetrics} />
      <div className="container pt-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {disclosures.map((disclosure, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 border-solid overflow-hidden">
              <button
                onClick={() => toggleSection(index)}
                className="w-full p-8 text-left hover:bg-white/50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${disclosure.color} rounded-2xl flex items-center justify-center mr-6`}>
                    <disclosure.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{disclosure.category}</h3>
                    <p className="text-gray-600">{disclosure.items.length} items available</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mr-4">
                    ✓ Complete
                  </span>
                  <Eye className="w-6 h-6 text-gray-400" />
                </div>
              </button>

              {expandedSection === index && (
                <div className="border-t border-gray-200 border-solid">
                  <div className="p-8 bg-gray-50/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {disclosure.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 border-solid">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mb-4">
                                <Calendar className="w-4 h-4 mr-2" />
                                Last Updated: {item.lastUpdated}
                              </div>
                            </div>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-600 hover:text-emerald-800 transition-colors"
                            >
                              <Download className="w-5 h-5" />
                            </a>

                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Regulatory Compliance */}
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Regulatory Compliance</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20 border-solid">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RegulatoryCard icon={<Award className="w-10 h-10 text-white" />} title="UGC Recognition" desc="Recognized by University Grants Commission" color="from-blue-400 to-blue-600" />
              <RegulatoryCard icon={<CheckCircle className="w-10 h-10 text-white" />} title="NAAC Accredited" desc="National Assessment and Accreditation Council" color="from-green-400 to-green-600" />
              <RegulatoryCard icon={<FileText className="w-10 h-10 text-white" />} title="AICTE Approved" desc="All India Council for Technical Education" color="from-purple-400 to-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  </SearchableWrapper>
  );
};

const RegulatoryCard = ({ icon, title, desc, color }) => (
  <div className="text-center">
    <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-full flex items-center justify-center mx-auto mb-6`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>

);

export default Disclosures;
