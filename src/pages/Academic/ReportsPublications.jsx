import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  Calendar,
  Eye,
  BookOpen,
  TrendingUp,
  Users
} from 'lucide-react';

import BannerSection from "../../components/HeroBanner.jsx";
import StatsCard from "../../components/StatsCard.jsx";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";
import ButtonGroup from "../../components/TabsData.jsx"; 

const ReportsPublications = () => {
  const [hero, setHero] = useState(null);
  const [reports, setReports] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');

  const categories = ['All', 'Institutional', 'Accreditation', 'Finance', 'Student'];

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'institutional':
        return 'bg-blue-100 text-blue-800';
      case 'accreditation':
        return 'bg-green-100 text-green-800';
      case 'finance':
        return 'bg-purple-100 text-purple-800';
      case 'student':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, reportsRes] = await Promise.all([
          axios.get(`${BASE}/academic/reports/hero/`),
          axios.get(`${BASE}/academic/reports/list/`)
        ]);

        setHero(heroRes.data[0]);
        setReports(reportsRes.data);
      } catch (error) {
        console.error('Error fetching reports data:', error);
      }
    };

    fetchData();
  }, [BASE]);

  const filteredReports = reports.filter(report => {
    const matchesCategory =
      selectedCategory === 'All' ||
      report.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      report.card_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.card_desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (!hero) return <div className="text-center py-20">Loading...</div>;

  // ✅ Convert categories to ButtonGroup buttons
  const categoryButtons = categories.map(category => ({
    id: category,
    label: category
  }));

  return (
    <SearchableWrapper>
      <>
        {/* Hero Section */}
        <BannerSection
          title={hero.title}
          subtitle={hero.description}
          bgTheme={6} // or any theme number you want
        />

        {/* Highlights Section */}
        <section className="pt-6 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{hero.sub_title}</h2>
              <p className="text-md text-gray-600">{hero.sub_description}</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsCard
          stats={[
            {
              number: hero.reprts_count,
              numberText: `${hero.reprts_count}+`,
              title: "Institutional Reports",
              subtitle: "Published annually for transparency and progress",
              icon: TrendingUp,
              iconColor: "#2563eb", // Tailwind's blue-600
            },
            {
              number: hero.accreditation_count,
              numberText: `${hero.accreditation_count}`,
              title: "National Accreditations",
              subtitle: "Recognized by top accreditation bodies",
              icon: FileText,
              iconColor: "#16a34a", // Tailwind's green-600
            },
            {
              number: hero.acheivements_counts,
              numberText: `${hero.acheivements_counts}+`,
              title: "Student Achievements",
              subtitle: "Awards and recognitions in various fields",
              icon: Users,
              iconColor: "#7e22ce", // Tailwind's purple-600
            },
          ]}
        />

        {/* Report List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{hero.title}</h2>
              <p className="text-xl text-gray-600">{hero.description}</p>
            </div>

            {/* ✅ Updated Category Filters with ButtonGroup */}
            <div className="flex flex-col justify-center text-center items-center gap-3 mb-8">
              <ButtonGroup
                buttons={categoryButtons}
                onClick={setSelectedCategory}
                activeButton={selectedCategory}
                size="md"
                theme="primary"
                rounded="full"
                animated={true}
                gap={true}
              />

              <input
                type="text"
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mx-20 px-4 py-2 w-3/5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                style={{ minWidth: 200 }}
              />
            </div>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 gap-8">
              {filteredReports.map((report, index) => (
                <div
                  key={report.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{report.card_title}</h3>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                            report.category
                          )}`}
                        >
                          {report.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{report.card_desc}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">
                        {new Date(report.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{report.downloads.toLocaleString()} downloads</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{report.pages} pages</span>
                    </div>
                    <div className="text-gray-600">
                      PDF • {report.file_size_mb} MB
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/reports/${report.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      View Details
                    </Link>
                    <a
                      href={`${BASE}/${report.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </SearchableWrapper>
  );
};

export default ReportsPublications;
