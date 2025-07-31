
import React from 'react';
// Card Component
const Card = ({ className = "", children }) => (
  <div className={`rounded-xl bg-white border shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ children }) => (
  <div className="px-6 pt-6 pb-2 border-b bg-gradient-to-r from-gray-50 to-white rounded-t-xl">{children}</div>
);
const CardTitle = ({ className = "", children }) => (
  <h2 className={`font-bold ${className}`}>{children}</h2>
);
const CardContent = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

// Badge Component
const Badge = ({ className = "", children }) => (
  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${className}`}>
    {children}
  </span>
);

// Button Component
const Button = ({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-blue-600 text-blue-700 bg-white hover:bg-blue-50 hover:border-blue-700",
  };
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import { Users, Mail, ExternalLink, Calendar, FileText } from 'lucide-react';

export const ResearchGroupTab = () => {
  const phdScholars = [
    {
      name: "Priya Sharma",
      program: "PhD Computer Science",
      year: "2023 - Present",
      researchArea: "Machine Learning for Cybersecurity",
      status: "First Year",
      publications: 2,
      email: "priya.sharma@gbu.ac.in",
      thesis: "Deep Learning Approaches for Intrusion Detection in IoT Networks"
    },
    {
      name: "Rajesh Kumar",
      program: "PhD Computer Science",
      year: "2022 - Present",
      researchArea: "Natural Language Processing",
      status: "Second Year",
      publications: 4,
      email: "rajesh.kumar@gbu.ac.in",
      thesis: "Sentiment Analysis for Mental Health Assessment in Social Media"
    },
    {
      name: "Anita Verma",
      program: "PhD Computer Science",
      year: "2021 - Present",
      researchArea: "Recommendation Systems",
      status: "Third Year",
      publications: 6,
      email: "anita.verma@gbu.ac.in",
      thesis: "Context-Aware Recommendation Systems for E-Learning Platforms"
    }
  ];

  const postdocs = [
    {
      name: "Dr. Suresh Patel",
      position: "Postdoctoral Fellow",
      duration: "2023 - 2025",
      researchArea: "AI Ethics and Fairness",
      previousInstitute: "IIT Delhi",
      publications: 12,
      email: "suresh.patel@gbu.ac.in"
    }
  ];

  const researchAssistants = [
    {
      name: "Neha Gupta",
      program: "M.Tech Computer Science",
      year: "2024 - Present",
      project: "Cybersecurity Framework for IoT",
      role: "Research Assistant",
      email: "neha.gupta@gbu.ac.in"
    },
    {
      name: "Amit Singh",
      program: "M.Tech Computer Science",
      year: "2024 - Present",
      project: "Social Media Sentiment Analysis",
      role: "Research Assistant",
      email: "amit.singh@gbu.ac.in"
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'first year': return 'bg-green-100 text-green-800';
      case 'second year': return 'bg-blue-100 text-blue-800';
      case 'third year': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Research Group Overview */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <Users className="w-6 h-6 mr-2 text-blue-600" />
            Research Group Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{phdScholars.length}</div>
              <div className="text-sm text-blue-700">PhD Scholars</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200 border-solid">
              <div className="text-2xl font-bold text-green-600">{postdocs.length}</div>
              <div className="text-sm text-green-700">Postdocs</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200 border-solid">
              <div className="text-2xl font-bold text-purple-600">{researchAssistants.length}</div>
              <div className="text-sm text-purple-700">Research Assistants</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200 border-solid">
              <div className="text-2xl font-bold text-orange-600">
                {phdScholars.reduce((sum, scholar) => sum + scholar.publications, 0) + 
                 postdocs.reduce((sum, postdoc) => sum + postdoc.publications, 0)}
              </div>
              <div className="text-sm text-orange-700">Total Publications</div>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Our research group focuses on cutting-edge areas of computer science including machine learning, 
            cybersecurity, natural language processing, and recommendation systems. We foster a collaborative 
            environment where students and researchers work together on innovative projects that address 
            real-world challenges.
          </p>
        </CardContent>
      </Card>

      {/* PhD Scholars */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">PhD Scholars</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {phdScholars.map((scholar, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 border-solid hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{scholar.name}</h3>
                        <p className="text-blue-600 text-sm">{scholar.program}</p>
                      </div>
                      <Badge className={getStatusColor(scholar.status)}>
                        {scholar.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p><span className="font-medium">Research Area:</span> {scholar.researchArea}</p>
                      <p><span className="font-medium">Thesis:</span> {scholar.thesis}</p>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {scholar.year}
                        </span>
                        <span className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          {scholar.publications} Publications
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Mail className="w-4 h-4 mr-1" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Postdoctoral Fellows */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Postdoctoral Fellows</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {postdocs.map((postdoc, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{postdoc.name}</h3>
                    <p className="text-blue-600 text-sm mb-3">{postdoc.position}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p><span className="font-medium">Research Area:</span> {postdoc.researchArea}</p>
                      <p><span className="font-medium">Previous Institute:</span> {postdoc.previousInstitute}</p>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {postdoc.duration}
                        </span>
                        <span className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          {postdoc.publications} Publications
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Mail className="w-4 h-4 mr-1" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Research Assistants */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Research Assistants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {researchAssistants.map((assistant, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100 border-solid">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{assistant.name}</h3>
                <p className="text-green-600 text-sm mb-2">{assistant.program}</p>
                
                <div className="space-y-1 text-sm text-gray-600 mb-3">
                  <p><span className="font-medium">Project:</span> {assistant.project}</p>
                  <p><span className="font-medium">Role:</span> {assistant.role}</p>
                  <p className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {assistant.year}
                  </p>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <Mail className="w-4 h-4 mr-1" />
                  Contact
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
