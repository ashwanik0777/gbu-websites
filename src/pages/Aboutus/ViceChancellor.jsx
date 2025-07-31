import React, { useState } from "react";
import { Link } from "react-router-dom";
import BannerSection from "../../components/HeroBanner.jsx";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";
import ButtonGroup from "../../components/TabsData.jsx";

const ViceChancellor = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Education', 'Research', 'Vision'];

  const tabContent = {
    Overview: {
      title: "Experience",

      content:
        "Over 25 years of academic, research, and leadership experience in cancer biology and molecular oncology, with significant contributions to chemoprevention and angiogenesis research."

    },
    Education: {
      title: "Educational Background",
      content: (
        <div className="space-y-4">
          <div>

            <h4 className="font-semibold text-gray-800">
              Ph.D. in Cancer Biology
            </h4>
            <p className="text-sm text-gray-600">
              Jawaharlal Nehru University, New Delhi, India
            </p>
            <p className="text-xs text-gray-500">
              Thesis: "Mechanisms of Carcinogenesis and Chemopreventive Strategies"
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">
              M.Sc. in Life Sciences
            </h4>
            <p className="text-sm text-gray-600">
              Jawaharlal Nehru University, New Delhi, India
            </p>
            <p className="text-xs text-gray-500">
              Specialization: Molecular Biology and Biochemistry
            </p>

          </div>
        </div>
      )
    },
    Research: {
      title: "Research Contributions",
      content: (
        <div className="space-y-6">
          <div>

            <h4 className="font-semibold text-gray-800 mb-2">
              Cancer Chemoprevention & Angiogenesis
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Discovering and evaluating anticancer activities of phytochemicals and providing mechanistic insights for their use in cancer prevention and therapy. Significant work in studying natural compounds with anti-angiogenic efficacies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Environmental Carcinogens & DNA Damage
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Research on deregulated biological processes during cancer development, including apoptosis, mitogenic signaling, and DNA repair pathways affected by environmental carcinogens such as insecticides, pesticides, and UV radiation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Microgravity Effects
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Exploring molecular and biological effects of microgravity on cells and animal models to understand cancer development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Model Systems
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Established in vitro, in vivo, ex vivo, 3D spheroid, and organoid models to study tumor angiogenesis and cancer therapeutics.
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg mt-4">
            <p className="text-sm">
              <strong>Publications:</strong> 150+ peer-reviewed papers
            </p>
            <p className="text-sm">
              <strong>h-index:</strong> 78
            </p>
            <p className="text-sm">
              <strong>i10-index:</strong> 157
            </p>
            <p className="text-sm">
              <strong>Citations:</strong> 16,539 total (5,266 since 2020)
            </p>

          </div>
        </div>
      )
    },
    Vision: {

      title: "Research Vision",
      content:
        "Committed to advancing non-toxic mechanism-based anticancer therapies and developing integrative models for understanding cancer progression, prevention, and treatment."

    }
  };

  const tabButtons = tabs.map(tab => ({
    id: tab,
    label: tab
  }));


  return (
    <SearchableWrapper>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <BannerSection
          title="Vice-Chancellor's Message"
          subtitle="Academic Leadership and Innovation"
          bgTheme={4} // or any theme number from 1 to 10
        />


        {/* Main Content */}
        <div className="max-w-6xl mx-auto p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Vice Chancellor Card */}
            <div className="lg:w-1/3">
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                <Link to="#"><div className="bg-gray-300 h-80 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/assets/prof.jpeg"
                    alt="Prof. Rana Pratap Singh"
                    className="object-cover h-full w-full rounded-lg"
                  />
                </div></Link>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Prof. Rana Pratap Singh</h3>
                  <p className="text-sm text-blue-600 mb-1">Vice Chancellor</p>
                  <p className="text-xs text-gray-500">Gautam Buddha University</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-2/3">
              {/* Quote Icon */}
              <div className="text-6xl text-blue-500 font-serif ">"</div>

              {/* Quote Text */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
  <p className="text-lg text-justify">
    It is a great honour to work under the visionary leadership of Hon'ble Chief Minister Shri Yogi Adityanath Ji,
    Chancellor of Gautam Buddha University. The university stands as a hub of knowledge, innovation, and inclusivity,
    committed to nurturing future-ready individuals grounded in wisdom, compassion, and ethical values. Our academic
    ecosystem promotes inquiry, critical thinking, and holistic development, aligning intellectual growth with social responsibility.
  </p>

  <p className="text-lg text-justify">
    In an era of rapid global change, GBU blends traditional values with modern scientific advancements to drive sustainable innovation and entrepreneurship. 
    As we advance toward global recognition, we invite students, scholars, and industry leaders to join us in our mission of academic excellence, 
    transformative research, and meaningful societal impact.
  </p>
</div>

              <div className="text-6xl text-blue-500 font-serif mb-4 text-right">"</div>
              {/* Signature */}
              <div className="mt-8 text-right">
                <p className="text-xl font-semibold text-blue-600">Prof. Rana Pratap Singh</p>

              </div>
            </div>
          </div>

          {/* Know the Vice-Chancellor Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Know the Vice-Chancellor</h2>

            {/* Tabs */}
            <ButtonGroup
              buttons={tabButtons}
              onClick={setActiveTab}
              activeButton={activeTab}
              size="lg"
              fullWidth={true}
              rounded="2xl"
              animated={true}
              className="sm:flex-nowrap mb-8"
            />

            {/* ✅ Content Panel */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {tabContent[activeTab].title}
                  </h3>
                  <div className="text-gray-700 leading-relaxed">
                    {typeof tabContent[activeTab].content === "string" ? (
                      <p>{tabContent[activeTab].content}</p>
                    ) : (
                      tabContent[activeTab].content
                    )}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  {activeTab === "Overview" && (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Key Achievements</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-blue-800">30+ Years Experience</p>
                          <p className="text-xs text-gray-600">Academic & Administrative Leadership</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-green-800">University Transformation</p>
                          <p className="text-xs text-gray-600">Modernizing academic infrastructure</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-purple-800">Industry Connect</p>
                          <p className="text-xs text-gray-600">Building corporate partnerships</p>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "Education" && (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Honors</h3>
                      <div className="space-y-3">
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-yellow-800">Gold Medalist</p>
                          <p className="text-xs text-gray-600">B.Tech First Class with Distinction</p>
                        </div>
                        <div className="bg-indigo-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-indigo-800">IIT Delhi Alumni</p>
                          <p className="text-xs text-gray-600">Ph.D. in Computer Science</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-red-800">IISc Graduate</p>
                          <p className="text-xs text-gray-600">M.Tech in AI Specialization</p>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "Research" && (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Research Impact</h3>
                      <div className="space-y-3">
                        <div className="bg-cyan-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-cyan-800">H-Index: 78</p>
                          <p className="text-xs text-gray-600">High research impact factor</p>
                        </div>
                         <div className="bg-emerald-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-emerald-800">180+ Publications</p>
                          <p className="text-xs text-gray-600">Peer-reviewed research papers</p>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-teal-800">Major Funded Projects & Collaborations</p>
                          <p className="text-xs text-gray-600">Secured competitive research funding from premier national agencies including the Ministry of AYUSH, Department of Science & Technology (DST), University Grants Commission (UGC), Indian Council of Medical Research (ICMR), Department of Biotechnology (DBT), and Council of Scientific & Industrial Research (CSIR). Led Centre of Excellence and National Facility projects on cancer chemoprevention, natural product-based therapies, and single-cell spheroid technologies.</p>
                        </div>
                       
                      </div>
                       <button className="ml-20 mt-60 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50" onClick={() => window.open("https://rpscancerlab.com/", "_blank")} >

                          <span className="flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>View More</span>
                          </span>
                        </button>
                    </>
                  )}

                  {activeTab === "Vision" && (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Leadership Focus</h3>
                      <div className="space-y-3">
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-orange-800">Global Recognition</p>
                          <p className="text-xs text-gray-600">Making university world-class</p>
                        </div>
                        <div className="bg-pink-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-pink-800">Innovation Hub</p>
                          <p className="text-xs text-gray-600">Fostering entrepreneurship</p>
                        </div>
                        <div className="bg-violet-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-violet-800">Sustainable Future</p>
                          <p className="text-xs text-gray-600">Equity & inclusivity focus</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SearchableWrapper>
  );
};

export default ViceChancellor;
