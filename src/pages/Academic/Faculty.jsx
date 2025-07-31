import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SimpleLayout from '../../components/faculty/SimpleLayout';
import { Link, useParams } from 'react-router-dom';
import TabContent from '../../components/faculty/TabContent';
import { Mail, Phone, Globe, Award, BookOpen, Users, Search, X } from 'lucide-react';

import BannerSection from "../../components/HeroBanner.jsx";
import StatsCard from "../../components/StatsCard.jsx";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

const VITE_HOST = import.meta.env.VITE_HOST;

const Faculty = () => {
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [directoryStats, setDirectoryStats] = useState(null);
  const [joinData, setJoinData] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedQualification, setSelectedQualification] = useState('All');
  const [selectedSchool, setSelectedSchool] = useState('All Schools');

  const { id } = useParams();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [facultyRes, directoryRes, joinRes] = await Promise.all([
          axios.get(`${VITE_HOST}/academic/faculty/members/`),
          axios.get(`${VITE_HOST}/academic/faculty/directory/`),
          axios.get(`${VITE_HOST}/academic/faculty/join/`)
        ]);
        setFacultyMembers(facultyRes.data);
        setDirectoryStats(directoryRes.data[0]);
        setJoinData(joinRes.data[0]);
        console.log('✅ Fetched all faculty data.');
      } catch (err) {
        console.error('❌ Failed to fetch:', err);
      }
    };
    fetchAllData();
  }, []);

  const schools = [
    'All Schools',
    'University Schools',
    'Biotechnology',
    'Buddhist Studies & Civilization',
    'Engineering',
    'Humanities & Social Sciences',
    'Information & Communication Technology',
    'Law, Justice and Governance',
    'Management',
    'Vocational Studies & Applied Sciences'
  ];

  const departments = [
    'All Departments',
    'Computer Science & Engineering',
    'Electronics & Communication Engineering',
    'Biotechnology',
    'Management',
    'Law',
    'English',
    'Political Science'
  ];

  const experienceRanges = [
    'All',
    '0-5 years',
    '6-10 years',
    '11-15 years',
    '16+ years'
  ];

  const qualifications = [
    'All',
    'PhD',
    'M.Tech',
    'M.Sc',
    'MBA',
    'B.Tech'
  ];

  const filteredFaculty = facultyMembers.filter(faculty => {
    const matchesSearch =
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (faculty.researchAreas?.some?.(area =>
        area.toLowerCase().includes(searchTerm.toLowerCase())
      ) ?? false);

    const matchesDepartment = selectedDepartment === 'All Departments' || faculty.department === selectedDepartment;
    const matchesSchool = selectedSchool === 'All Schools' || faculty.school === selectedSchool;

    const matchesExperience = selectedExperience === 'All' ||
      (selectedExperience === '0-5 years' && faculty.experience_years <= 5) ||
      (selectedExperience === '6-10 years' && faculty.experience_years >= 6 && faculty.experience_years <= 10) ||
      (selectedExperience === '11-15 years' && faculty.experience_years >= 11 && faculty.experience_years <= 15) ||
      (selectedExperience === '16+ years' && faculty.experience_years >= 16);

    const matchesQualification = selectedQualification === 'All' || faculty.qualification === selectedQualification;

    return matchesSearch && matchesDepartment && matchesSchool && matchesExperience && matchesQualification;
  });

  const clearFilters = () => {
    setSelectedDepartment('All Departments');
    setSelectedExperience('All');
    setSelectedQualification('All');
    setSelectedSchool('All Schools');
    setSearchTerm('');
  };

  const selectedFaculty = facultyMembers.find(faculty => faculty.id == id);

  const stats = [
    {
      icon: Users,
      number: directoryStats?.faculty_members || 0,
      numberText: `${directoryStats?.faculty_members || 0}+`,
      title: "Faculty Members",
      iconColor: "#2563eb", // blue-600
    },
    {
      icon: Award,
      number: directoryStats?.phd_qualified || 0,
      numberText: `${directoryStats?.phd_qualified || 0}%`,
      title: "PhD Qualified",
      iconColor: "#16a34a", // green-600
    },
    {
      icon: BookOpen,
      number: directoryStats?.Research_publications || 0,
      title: "Research Publications",
      numberText: `${directoryStats?.Research_publications || 0}+`,
      iconColor: "#7e22ce", // purple-600
    },
    {
      icon: Globe,
      number: directoryStats?.collaborations_count || 0,
      numberText: `${directoryStats?.collaborations_count || 0}+`,
      title: "International Collaborations",
      iconColor: "#ea580c", // orange-600
    },
  ];


  return (
    <SearchableWrapper>
      <SimpleLayout>
        {id ? (
          selectedFaculty ? (
            <section className="py-12">
              <TabContent activeTab="overview" profile={selectedFaculty} />
            </section>
          ) : (
            <section className="py-12 text-center">
              <p className="text-gray-600">Loading faculty profile...</p>
            </section>
          )
        ) : (
          <>
            {/* Hero Section */}
            <BannerSection
              title={directoryStats?.title || 'Faculty Directory'}
              subtitle={directoryStats?.description || 'Meet our faculty who are leaders in their fields.'}
              bgTheme={3} // Pick your theme number (1–10)
            />

            {/* Statistics */}
           <StatsCard stats={stats} />

            {/* Search + Filters */}
            <section className="py-1 w-full bg-gray-50">
              <div className="container w-full mx-auto">
                <div className="mx-15 space-y-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search faculty by name, department, specialization, or research area..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 border-solid rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {(selectedDepartment !== 'All Departments' || selectedExperience !== 'All' || selectedQualification !== 'All' || selectedSchool !== 'All Schools' || searchTerm) && (
                    <button
                      onClick={clearFilters}
                      className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      <span>Clear All</span>
                    </button>
                  )}

                  <div className="bg-white p-6 rounded-lg border border-gray-200 border-solid space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">School</label>
                        <select
                          value={selectedSchool}
                          onChange={(e) => setSelectedSchool(e.target.value)}
                          className="w-full border border-gray-300 border-solid rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        >
                          {schools.map(school => (
                            <option key={school} value={school}>{school}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                        <select
                          value={selectedDepartment}
                          onChange={(e) => setSelectedDepartment(e.target.value)}
                          className="w-full border border-gray-300 border-solid rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        >
                          {departments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                        <select
                          value={selectedExperience}
                          onChange={(e) => setSelectedExperience(e.target.value)}
                          className="w-full border border-gray-300 border-solid rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        >
                          {experienceRanges.map(range => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Qualification</label>
                        <select
                          value={selectedQualification}
                          onChange={(e) => setSelectedQualification(e.target.value)}
                          className="w-full border border-gray-300 border-solid rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        >
                          {qualifications.map(qual => (
                            <option key={qual} value={qual}>{qual}</option>
                          ))}
                        </select>
                      </div>

                    </div>
                  </div>

                  <div className="text-sm text-gray-600">
                    Showing {filteredFaculty.length} of {facultyMembers.length} faculty members
                  </div>
                </div>
              </div>
            </section>

            {/* Faculty Grid */}
            <section className="pt-4 pb-16 bg-gray-50">
              <div className="container mx-auto px-4">
                {filteredFaculty.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No faculty members found matching your criteria.</p>
                    <button
                      onClick={clearFilters}
                      className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredFaculty.map((faculty, index) => (
                      <Link
                        to={`/academics/faculty/${faculty.id}`}
                        key={faculty.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group cursor-pointer"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="p-6">
                          <div className="flex flex-col items-center text-center">
                            <img
                              src={`https://meow.tilchattaas.com/media/${faculty.image}`}
                              alt={faculty.name}
                              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
                            />
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{faculty.name}</h3>
                            <p className="text-blue-600 font-semibold mb-4">{faculty.designation}</p>
                            <div className="w-full space-y-3 mb-6">
                              <div className="bg-gray-50 rounded-lg p-3">
                                <p className="text-sm font-semibold text-gray-600 mb-1">Specialization</p>
                                <p className="text-gray-800">{faculty.specialization}</p>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div className="bg-blue-50 rounded-lg p-3 text-center">
                                  <p className="text-lg font-bold text-blue-600">{faculty.experience_years} years</p>
                                  <p className="text-xs text-gray-600">Experience</p>
                                </div>
                                <div className="bg-green-50 rounded-lg p-3 text-center">
                                  <p className="text-lg font-bold text-green-600">{faculty.publications}</p>
                                  <p className="text-xs text-gray-600">Publications</p>
                                </div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-3">
                                <p className="text-sm font-semibold text-gray-600 mb-1">Education</p>
                                <p className="text-sm text-gray-800">{faculty.education}</p>
                              </div>
                            </div>
                            <div className="w-full space-y-2">
                              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                                <Mail className="w-4 h-4" />
                                <span>{faculty.email}</span>
                              </div>
                              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                                <Phone className="w-4 h-4" />
                                <span>{faculty.phone}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Call to Action */}
            {joinData && (
              <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">{joinData.title}</h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{joinData.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={joinData.url1}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
                    >
                      {joinData.button1_text}
                    </a>
                    <a
                      href={joinData.url2}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      {joinData.button2_text}
                    </a>
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </SimpleLayout>
    </SearchableWrapper>
  );
};

export default Faculty;
