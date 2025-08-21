
import React from 'react';
// Card, CardHeader, CardTitle, CardContent, and Badge components defined here for best UI/UX

// Card container with subtle shadow and rounded corners
const Card = ({ className = '', children }) => (
  <div className={`bg-white rounded-2xl shadow border border-gray-100 border-solid${className}`}>{children}</div>
);

// CardHeader with padding and bottom border
 export const CardHeader = ({ className = "", children, ...props }) => (
   <div className={`px-6 pt-6 pb-2  `} {...props}>
     {children}
   </div>
 );

// CardTitle with font styling
const CardTitle = ({ className = '', children }) => (
  <h2 className={`font-bold tracking-tight ${className}`}>{children}</h2>
);

// CardContent with padding
const CardContent = ({ children }) => (
  <div className="px-6 pb-6 pt-4">{children}</div>
);

// Badge with pill shape, subtle shadow, and transition
const Badge = ({ className = '', children }) => (
  <span
    className={`inline-block px-3 py-1 rounded-full font-semibold text-xs shadow-sm transition-colors duration-200 ${className}`}
  >
    {children}
  </span>
);
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

export const QualificationsTab = () => {
  const qualifications = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Indian Institute of Technology",
      year: "2021",
      location: "Delhi, India",
      specialization: "Machine Learning and Data Mining",
      type: "doctorate"
    },
    {
      degree: "M.Tech in Computer Science & Engineering",
      institution: "Gautam Buddha University",
      year: "2018",
      location: "Greater Noida, India",
      specialization: "Software Engineering",
      type: "masters"
    },
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Gautam Buddha University",
      year: "2016",
      location: "Greater Noida, India",
      specialization: "Computer Science",
      type: "bachelors"
    }
  ];

  const experience = [
    {
      position: "Professor",
      department: "School of Information and Communication Technology",
      institution: "Gautam Buddha University",
      duration: "2022 - Present",
      type: "academic",
      responsibilities: [
        "Leading research in Machine Learning and AI",
        "Teaching graduate and undergraduate courses",
        "Supervising PhD and Master's students",
        "Contributing to curriculum development"
      ]
    },
    {
      position: "Assistant Professor",
      department: "Department of Computer Science",
      institution: "Gautam Buddha University",
      duration: "2021 - 2022",
      type: "academic",
      responsibilities: [
        "Conducted research in recommendation systems",
        "Taught courses in data structures and algorithms",
        "Mentored undergraduate students",
        "Published research papers in peer-reviewed journals"
      ]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'doctorate': return 'bg-purple-100 text-purple-800';
      case 'masters': return 'bg-blue-100 text-blue-800';
      case 'bachelors': return 'bg-green-100 text-green-800';
      case 'academic': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Educational Qualifications */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
            Educational Qualifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {qualifications.map((qual, index) => (
              <div key={index} className="relative pl-8 pb-6 border-l-2 border-blue-200 last:border-l-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2"></div>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 border-solid hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{qual.degree}</h3>
                      <p className="text-blue-600 font-medium mb-1">{qual.institution}</p>
                      <p className="text-sm text-gray-600 mb-2">{qual.specialization}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {qual.year}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {qual.location}
                        </div>
                      </div>
                    </div>
                    <Badge className={getTypeColor(qual.type)}>
                      {qual.type.charAt(0).toUpperCase() + qual.type.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Professional Experience */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900">Professional Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.position}</h3>
                    <p className="text-blue-600 font-medium mb-1">{exp.department}</p>
                    <p className="text-gray-700">{exp.institution}</p>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <Badge className={getTypeColor(exp.type)}>
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </Badge>
                    <span className="text-sm text-gray-600 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.duration}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
