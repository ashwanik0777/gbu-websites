import React, { useState } from 'react';
import {
  Mail, Phone, Search, Filter, X, BookOpen
} from 'lucide-react';
import apiClient from "../../services/apiClient";
import BannerSection from '../../components/HeroBanner';

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedQualification, setSelectedQualification] = useState('All');
  const [showFilters, setShowFilters] = useState(false);



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

  const [facultyData, setFacultyData] = useState([]);

  React.useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await apiClient.get('/faculty/public?school=soict');
        const items = response.data?.data?.items || [];
        setFacultyData(items);
      } catch (err) {
        console.error('Error fetching faculty:', err);
      }
    };
    fetchFaculty();
  }, []);

  const departmentMapping = {
    'Department of Computer Science & Engineering': 'cse',
    'Department of Information Technology': 'it',
    'Department of Electronics and Communication Engineering': 'ece',
    'OCFD': 'ocfd',
    'IT': 'it',
    'ECE': 'ece',
    'CSE': 'cse'
  };

  const getDeptId = (dept) => departmentMapping[dept] || 'other';

  const getDesignationPriority = (designation) => {
    const desc = (designation || "").toLowerCase();
    if (desc.includes("assistant professor")) return 3;
    if (desc.includes("associate professor")) return 2;
    if (desc.includes("professor")) return 1;
    if (desc.includes("faculty")) return 4;
    return 5;
  };

  const sortFaculty = (a, b) => {
    const pA = getDesignationPriority(a.designation || a.title);
    const pB = getDesignationPriority(b.designation || b.title);
    if (pA !== pB) return pA - pB;
    const expA = parseInt(a.experience_years || a.experience) || 0;
    const expB = parseInt(b.experience_years || b.experience) || 0;
    return expB - expA;
  };

  const departments = [
    { id: 'All', name: 'All Departments', count: facultyData.length },
    { id: 'cse', name: 'CSE', count: facultyData.filter(f => getDeptId(f.department) === 'cse').length },
    { id: 'it', name: 'IT', count: facultyData.filter(f => getDeptId(f.department) === 'it').length },
    { id: 'ece', name: 'ECE', count: facultyData.filter(f => getDeptId(f.department) === 'ece').length },
    { id: 'ocfd', name: 'OCFD', count: facultyData.filter(f => getDeptId(f.department) === 'ocfd').length }
  ];

  const filteredFaculty = facultyData.filter(faculty => {
    const searchString = searchTerm.toLowerCase();
    const matchesSearch =
      (faculty.name || '').toLowerCase().includes(searchString) ||
      (faculty.designation || '').toLowerCase().includes(searchString) ||
      (faculty.specialization || '').toLowerCase().includes(searchString) ||
      (faculty.department || '').toLowerCase().includes(searchString);

    const facultyDeptId = getDeptId(faculty.department);
    const matchesDepartment = selectedDepartment === 'All' || facultyDeptId === selectedDepartment;

    const expYears = parseInt(faculty.experience_years) || 0;
    const matchesExperience =
      selectedExperience === 'All' ||
      (selectedExperience === '0-5 years' && expYears <= 5) ||
      (selectedExperience === '6-10 years' && expYears >= 6 && expYears <= 10) ||
      (selectedExperience === '11-15 years' && expYears >= 11 && expYears <= 15) ||
      (selectedExperience === '16+ years' && expYears >= 16);

    const matchesQualification = selectedQualification === 'All' ||
      (faculty.education && faculty.education.includes(selectedQualification));

    return matchesSearch && matchesDepartment && matchesExperience && matchesQualification;
  }).sort(sortFaculty);

  const clearFilters = () => {
    setSelectedDepartment('All');
    setSelectedExperience('All');
    setSelectedQualification('All');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Dark Overlay */}

      <BannerSection
        title="Meet Our Faculty Members"
        subtitle="Dedicated to Excellence in Teaching, Research, and Innovation"
        bgtheme={5}
      />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Department Pills */}
        <div className="flex flex-wrap gap-4 mb-8">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                ${selectedDepartment === dept.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {dept.name}
              <span className={`${selectedDepartment === dept.id ? 'bg-blue-700' : 'bg-gray-100'
                } px-2 py-0.5 rounded-full text-sm`}>
                {dept.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search faculty by name, designation, specialization, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>

          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
            {(selectedDepartment !== 'All' || selectedExperience !== 'All' || selectedQualification !== 'All' || searchTerm) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 text-red-600 hover:text-red-700"
              >
                <X className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            )}
          </div>
        </div>

        {showFilters && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {experienceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Qualification</label>
                <select
                  value={selectedQualification}
                  onChange={(e) => setSelectedQualification(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {qualifications.map((qual) => (
                    <option key={qual} value={qual}>{qual}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Department Sections */}
        {['cse', 'it', 'ece', 'ocfd'].map((deptId) => {
          const deptInfo = {
            cse: { name: "Computer Science & Engineering", shortName: "CSE" },
            it: { name: "Information Technology", shortName: "IT" },
            ece: { name: "Electronics & Communication Engineering", shortName: "ECE" },
            ocfd: { name: "OCFD Faculty", shortName: "OCFD" }
          };
          const deptData = deptInfo[deptId];

          // ✅ Get filtered faculty for this department only
          const deptFilteredFaculty = filteredFaculty.filter(f => getDeptId(f.department) === deptId);

          // Only render if any match
          if (deptFilteredFaculty.length > 0) {
            return (
              <div key={deptId} className="mb-12">
                <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/assets/GBU.webp)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70" />

                  <div className="relative h-full flex flex-col justify-center px-8 py-6">
                    <h2 className="text-3xl font-bold text-white mb-2">{deptData.name}</h2>
                    <p className="text-gray-300 text-lg">{deptData.shortName} Department</p>
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[8rem] font-bold text-white/10">
                      {deptData.shortName}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {deptFilteredFaculty.map((faculty) => (
                    <a
                      key={faculty.id}
                      href={`/academics/faculty/${faculty.id}`}
                      className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <img
                            src={faculty.image_url || faculty.image || "/default-avatar.png"}
                            alt={faculty.name}
                            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
                          />
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{faculty.name}</h3>
                          <p className="text-blue-600 font-semibold mb-4">{faculty.designation || faculty.title}</p>
                          <div className="w-full space-y-3 mb-6">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-sm font-semibold text-gray-600 mb-1">Specialization</p>
                              <p className="text-gray-800">{faculty.specialization || "N/A"}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-blue-50 rounded-lg p-3 text-center">
                                <p className="text-lg font-bold text-blue-600">{faculty.experience_years || faculty.experience || 0}</p>
                                <p className="text-xs text-gray-600">Years Exp</p>
                              </div>
                              <div className="bg-green-50 rounded-lg p-3 text-center">
                                <p className="text-lg font-bold text-green-600">{faculty.publications || "N/A"}</p>
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
                    </a>
                  ))}
                </div>
              </div>
            );
          }

          return null;
        })}

      </div>
    </div>
  );
};

export default Faculty;
