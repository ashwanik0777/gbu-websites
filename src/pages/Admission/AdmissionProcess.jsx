import React from 'react';
import { FileText, Calendar, CheckCircle, Clock, Download, Users, GraduationCap, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBanner from '../../components/HeroBanner';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const AdmissionProcess = () => {
  const processSteps = [
    { step: 1, title: "Online Application", description: "Fill out the online application form with personal and academic details", duration: "15-20 minutes", status: "active", icon: FileText },
    { step: 2, title: "Document Upload", description: "Upload required documents including certificates, transcripts, and ID proof", duration: "10-15 minutes", status: "pending", icon: Upload },
    { step: 3, title: "Application Review", description: "Our admission committee reviews your application and documents", duration: "3-5 business days", status: "pending", icon: Users },
    { step: 4, title: "Merit List Publication", description: "Merit lists are published based on academic performance and entrance scores", duration: "1-2 business days", status: "pending", icon: GraduationCap },
    { step: 5, title: "Counseling & Seat Allocation", description: "Attend counseling session and select your preferred course and specialization", duration: "1 day", status: "pending", icon: Users },
    { step: 6, title: "Fee Payment & Confirmation", description: "Pay admission fees and confirm your seat to complete the process", duration: "Same day", status: "pending", icon: CheckCircle }
  ];

  const importantDates = [
    { event: "Application Start Date", date: "March 15, 2024", status: "completed" },
    { event: "Application End Date", date: "May 30, 2024", status: "upcoming" },
    { event: "Document Verification", date: "June 5-10, 2024", status: "upcoming" },
    { event: "Merit List Publication", date: "June 15, 2024", status: "upcoming" },
    { event: "Counseling Sessions", date: "June 20-25, 2024", status: "upcoming" },
    { event: "Classes Begin", date: "July 1, 2024", status: "upcoming" }
  ];

  const requirements = [
    "Completed application form",
    "Academic transcripts and certificates",
    "Valid ID proof (Passport/Driving License/Aadhaar)",
    "Entrance exam scores (if applicable)",
    "Character certificate from previous institution",
    "Medical fitness certificate",
    "Passport size photographs",
    "Category certificate (if applicable)"
  ];

  return (
    <SearchableWrapper>
    <div className="min-h-screen bg-white text-gray-900">
       
        <HeroBanner  title="Admission Process"
        subtitle="Your complete guide to joining our university"
        bgTheme={1}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Step-by-Step Process</h2>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="border-l-4 border-blue-500 bg-white shadow rounded-lg">
                <div className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold">Step {step.step}: {step.title}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded ${step.status === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {step.status === 'active' ? 'Current' : 'Upcoming'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Duration: {step.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-lg">
            <div className="border-b px-6 py-4 flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Important Dates</h3>
            </div>
            <div className="p-6 space-y-4">
              {importantDates.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div>
                    <p className="font-medium">{item.event}</p>
                    <p className="text-sm text-gray-600">{item.date}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${item.status === 'completed' ? 'bg-green-500 text-white' : 'bg-yellow-200 text-yellow-800'}`}>
                    {item.status === 'completed' ? 'Completed' : 'Upcoming'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="border-b px-6 py-4 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold">Required Documents</h3>
            </div>
            <div className="p-6 space-y-3">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/student-login" className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 px-6 rounded">
              Start Application
            </Link>
            <button className="flex items-center justify-center border border-gray-300 border-solid text-gray-700 hover:bg-gray-100 text-lg font-semibold py-2 px-6 rounded">
              <Download className="w-4 h-4 mr-2" />
              Download Prospectus
            </button>
          </div>
        </div>
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default AdmissionProcess;
