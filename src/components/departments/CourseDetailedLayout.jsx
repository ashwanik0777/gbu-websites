import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Users, Clock, Calendar, MapPin, 
  Star, Award, ChevronRight, ChevronDown, Play, Download,
  User, Mail, Phone, Globe, CheckCircle, DollarSign,
  TrendingUp, Building, Briefcase, Target, FileText,
  MessageCircle, Share2, Heart, Eye, ArrowLeft,
  IndianRupee
} from 'lucide-react';

// Reusable Card Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 pt-6 pb-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-bold text-xl text-gray-900 mb-2 ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);

// PropTypes for better documentation (optional)
import PropTypes from 'prop-types';

const CourseDetailedLayout = ({ 
  courseData,
  onApplyClick,
  onDownloadBrochure,
  onScheduleCall 
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'curriculum', label: 'Curriculum', icon: FileText },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'facilities', label: 'Facilities', icon: Building },
  ];

  const keyFacts = [
    { label: 'Duration', value: courseData.duration, icon: Clock },
    { label: 'Level', value: courseData.level, icon: TrendingUp },
    { label: 'Mode', value: courseData.mode, icon: Calendar },
    { label: 'Intake', value: courseData.intake, icon: Users },
    { label: 'Fee', value: courseData.fee, icon: IndianRupee },
  ];

  const handleApply = () => {
    if (onApplyClick) {
      onApplyClick(courseData.id);
    }
  };

  const handleDownloadBrochure = () => {
    if (onDownloadBrochure) {
      onDownloadBrochure(courseData.id);
    }
  };

  const handleScheduleCall = () => {
    if (onScheduleCall) {
      onScheduleCall(courseData.id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src={courseData.gallery[selectedImage]}
                  alt={courseData.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Image Gallery Thumbnails */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {courseData.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${
                        selectedImage === index ? 'border-white' : 'border-white/50'
                      }`}
                    >
                      <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {courseData.level}
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {courseData.accreditation}
                      </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                      {courseData.title}
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">{courseData.subtitle}</p>

                    {/* Course Highlights */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                      {courseData.highlights.slice(0, 6).map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Tab Navigation */}
            <Card>
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 mx-auto px-6 py-4 overflow-x-auto">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center mx-auto py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                          activeTab === tab.id
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Tab Content */}
              <CardContent className="py-8">
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    {/* Description */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">About This Program</h3>
                      <div className="prose prose-blue max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                          {showFullDescription 
                            ? courseData.description + " This program is designed to meet the evolving needs of the technology industry, combining theoretical knowledge with practical application. Students will work on real-world projects, participate in internships, and have opportunities for research collaboration with industry partners."
                            : `${courseData.description.substring(0, 200)}...`
                          }
                        </p>
                        <button
                          onClick={() => setShowFullDescription(!showFullDescription)}
                          className="mt-2 text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {showFullDescription ? 'Show Less' : 'Read More'}
                        </button>
                      </div>
                    </div>

                    {/* Eligibility Criteria */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
                      <div className="bg-blue-50 rounded-lg p-6">
                        <ul className="space-y-3">
                          {courseData.eligibility.map((criteria, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Career Prospects */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Career Opportunities</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {courseData.career_prospects.map((career, index) => (
                          <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
                            <div className="flex items-center">
                              <Briefcase className="h-5 w-5 text-purple-600 mr-2" />
                              <span className="font-medium text-gray-900">{career}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">Course Curriculum</h3>
                    <div className="space-y-4">
                      {courseData.curriculum.map((sem, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg">
                          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                            <h4 className="font-semibold text-gray-900">{sem.semester}</h4>
                          </div>
                          <div className="p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {sem.subjects.map((subject, idx) => (
                                <div key={idx} className="flex items-center bg-white border border-gray-100 rounded-lg p-3">
                                  <BookOpen className="h-4 w-4 text-blue-600 mr-3" />
                                  <span className="text-gray-700">{subject}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'faculty' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">Meet Our Faculty</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {courseData.faculty.map((member, index) => (
                        <Card key={index} className="p-6">
                          <div className="flex items-start space-x-4">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{member.name}</h4>
                              <p className="text-blue-600 text-sm">{member.designation}</p>
                              <p className="text-gray-600 text-sm mt-1">{member.specialization}</p>
                              <p className="text-gray-500 text-xs mt-2">{member.experience} experience</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'facilities' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">World-Class Facilities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {courseData.facilities.map((facility, index) => (
                        <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-100">
                          <div className="flex items-center">
                            <Building className="h-5 w-5 text-green-600 mr-3" />
                            <span className="font-medium text-gray-900">{facility}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Key Facts Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 text-blue-600 mr-2" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyFacts.map((fact, index) => {
                    const Icon = fact.icon;
                    return (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center">
                          <Icon className="h-4 w-4 text-gray-500 mr-3" />
                          <span className="text-sm text-gray-600">{fact.label}</span>
                        </div>
                        <span className="font-semibold text-gray-900">{fact.value}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="py-8 text-center">
                <GraduationCap className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Ready to Apply?</h3>
                <p className="text-blue-100 mb-6">Join thousands of successful graduates</p>
                <div className="space-y-3">
                  <button 
                    onClick={handleApply}
                    className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Apply Now
                  </button>
                  <button 
                    onClick={handleDownloadBrochure}
                    className="w-full border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Download Brochure
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-blue-600 mr-3" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 text-blue-600 mr-3" />
                    <span>admissions@university.edu</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-blue-600 mr-3" />
                    <span>University Campus, City</span>
                  </div>
                  <button 
                    onClick={handleScheduleCall}
                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-4"
                  >
                    Schedule a Call
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailedLayout;
