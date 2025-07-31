import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Award, Users, CheckCircle, GraduationCap, Star } from 'lucide-react';
import axios from 'axios';

import BannerSection from "../../components/HeroBanner.jsx";
import StatsCard from "../../components/StatsCard.jsx";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

// ✅ Load BASE_URL from .env
const BASE_URL = import.meta.env.VITE_HOST;

const CBCSFramework = () => {
  const [heroData, setHeroData] = useState(null);
  const [whatData, setWhatData] = useState([]);
  const [grading, setGrading] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [explore, setExplore] = useState(null);

  useEffect(() => {
    const fetchCBCSData = async () => {
      try {
        const [heroRes, whatRes, gradingRes, benefitsRes, exploreRes] = await Promise.all([
          axios.get(`${BASE_URL}/academic/cbcs/hero/`),
          axios.get(`${BASE_URL}/academic/cbcs/what/`),
          axios.get(`${BASE_URL}/academic/cbcs/grading/`),
          axios.get(`${BASE_URL}/academic/cbcs/benefits/`),
          axios.get(`${BASE_URL}/academic/cbcs/explore/`)
        ]);

        setHeroData(heroRes.data[0] || null);
        setWhatData(whatRes.data || []);
        setGrading(gradingRes.data || []);
        setBenefits(benefitsRes.data || []);
        setExplore(exploreRes.data[0] || null);
      } catch (error) {
        console.error('Error fetching CBCS data:', error);
      }
    };

    fetchCBCSData();
  }, []);

  if (!heroData) return <div className="text-center py-20">Loading CBCS Information...</div>;

  const stats = [
    {
      
      title: "Credit Points per Semester",
      icon: GraduationCap,
      iconColor: "#2563eb", // blue-600
      number: heroData.credits_coount||0,
    },
    {
      numberText:heroData.elective_courses||0,
      title: "Elective Courses",
      icon: BookOpen,
      iconColor: "#16a34a", // green-600
      number: heroData.elective_courses||0,
    },
    {
      
      title: "Point Grading Scale",
      icon: Star,
      iconColor: "#7c3aed", // purple-600
      number: heroData.grading_scale,
    },
    {
      numberText: `${heroData.flexebility}`,
      title: "Choice Flexibility",
      icon: Target,
      iconColor: "#ea580c", // orange-600
      number: heroData.flexebility,
    },
  ];

  return (
    <SearchableWrapper>
      <>
        {/* Hero Section */}
        <BannerSection
          title={heroData.title}
          subtitle={heroData.description}
          bgTheme={heroData.bgTheme || 7}  // fallback to theme 1 if not set
        />

        {/* Statistics */}
        <StatsCard stats={stats} />

        {/* What is CBCS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{whatData[0]?.title}</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">{whatData[0]?.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whatData.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-2xl transition-shadow animate-fade-in">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.card_title}</h3>
                  <p className="text-gray-600">{item.card_desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grading System */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Grading System</h2>
              <p className="text-xl text-gray-600">10-point grading scale ensuring fair and transparent evaluation</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-5 bg-blue-600 text-white font-semibold text-center py-4">
                  <div>Grade</div>
                  <div>Points</div>
                  <div>Percentage</div>
                  <div>Description</div>
                  <div>Status</div>
                </div>
                {grading.map((grade, index) => (
                  <div key={index} className={`grid grid-cols-5 text-center py-3 border-b border-gray-200 ${grade.status === 'Fail' ? 'bg-red-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="font-bold text-lg">{grade.grade}</div>
                    <div className="font-semibold text-blue-600">{grade.points}</div>
                    <div>{grade.percentage_range}</div>
                    <div className="font-medium">{grade.description}</div>
                    <div>
                      <span className={`font-semibold ${grade.status === 'Fail' ? 'text-red-600' : 'text-green-600'}`}>{grade.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits of CBCS</h2>
              <p className="text-xl text-gray-600">Advantages of the Choice Based Credit System</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all animate-fade-in">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{item.card_desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        {explore && (
          <section className="py-16 text-black" style={{ backgroundColor: explore.background_color }}>
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">{explore.title}</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">{explore.description}</p>
              <a
                href={explore.url}
                className="border border-b-blue-600 text-black px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {explore.button_text}
              </a>
            </div>
          </section>
        )}
      </>
    </SearchableWrapper>
  );
};

export default CBCSFramework;
