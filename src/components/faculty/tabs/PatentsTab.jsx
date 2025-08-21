import React from 'react';
// Minimal custom Card, CardHeader, CardTitle, CardContent, Badge, and Button components with Tailwind CSS

export const Card = ({ className = '', children, ...props }) => (
  <div className={`bg-white rounded-xl border border-gray-200 border-solid shadow-sm${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ className = '', children, ...props }) => (
  <div className={`px-6 pt-6 pb-2 border-b border-gray-100 border-solid${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className = '', children, ...props }) => (
  <h2 className={`font-semibold tracking-tight ${className}`} {...props}>
    {children}
  </h2>
);

export const CardContent = ({ className = '', children, ...props }) => (
  <div className={`px-6 pb-6 pt-4 ${className}`} {...props}>
    {children}
  </div>
);

export const Badge = ({ className = '', variant = 'solid', children, ...props }) => {
  const base = 'inline-flex items-center px-2 py-0.5 rounded-full font-medium text-xs border';
  const variants = {
    solid: 'bg-blue-600 text-white border-transparent',
    outline: 'bg-white text-blue-700 border-blue-200',
  };
  return (
    <span className={`${base} ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </span>
  );
};

export const Button = ({
  className = '',
  variant = 'outline',
  size = 'md',
  children,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  const variants = {
    outline:
      'border border-blue-300 bg-white text-blue-700 hover:bg-blue-50 active:bg-blue-100',
    solid:
      'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 border border-transparent',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  return (
    <button
      className={`${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import { Award, Calendar, MapPin, FileText, ExternalLink } from 'lucide-react';

export const PatentsTab = () => {
  const patents = [
    {
      title: "AI-Based Intrusion Detection System for IoT Networks",
      applicationNo: "202341012345",
      status: "Filed",
      filedYear: 2024,
      country: "India",
      patentOffice: "Indian Patent Office",
      inventors: ["Dr. Gaurav Kumar", "Priya Sharma", "Rajesh Singh"],
      description: "A novel machine learning framework for real-time detection and prevention of cyber attacks in Internet of Things networks using deep neural networks and ensemble methods.",
      technicalField: "Cybersecurity, Machine Learning, IoT",
      applicationDate: "15th March 2024"
    },
    {
      title: "Context-Aware Recommendation Engine for Educational Platforms",
      applicationNo: "202341023456",
      status: "Under Examination",
      filedYear: 2023,
      country: "India",
      patentOffice: "Indian Patent Office",
      inventors: ["Dr. Gaurav Kumar", "Neha Gupta", "Anita Verma"],
      description: "An intelligent recommendation system that adapts to learner's context, preferences, and learning patterns to provide personalized educational content and learning paths.",
      technicalField: "Machine Learning, Education Technology",
      applicationDate: "8th September 2023"
    },
    {
      title: "Federated Learning System for Privacy-Preserving Data Analytics",
      applicationNo: "202241034567",
      status: "Published",
      filedYear: 2022,
      country: "India",
      patentOffice: "Indian Patent Office",
      inventors: ["Dr. Gaurav Kumar", "Suresh Patel"],
      description: "A distributed machine learning framework that enables collaborative model training across multiple parties while preserving data privacy and security.",
      technicalField: "Privacy-Preserving ML, Distributed Systems",
      applicationDate: "22nd November 2022"
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'filed': return 'bg-blue-100 text-blue-800';
      case 'under examination': return 'bg-yellow-100 text-yellow-800';
      case 'published': return 'bg-green-100 text-green-800';
      case 'granted': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Patents Overview */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <Award className="w-6 h-6 mr-2 text-blue-600" />
            Patent Portfolio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{patents.length}</div>
              <div className="text-sm text-blue-700">Total Patents</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200 border-solid">
              <div className="text-2xl font-bold text-green-600">
                {patents.filter(p => p.status === 'Filed').length}
              </div>
              <div className="text-sm text-green-700">Filed</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4 text-center border border-yellow-200 border-solid">
              <div className="text-2xl font-bold text-yellow-600">
                {patents.filter(p => p.status === 'Under Examination').length}
              </div>
              <div className="text-sm text-yellow-700">Under Review</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200 border-solid">
              <div className="text-2xl font-bold text-purple-600">
                {patents.filter(p => p.status === 'Published').length}
              </div>
              <div className="text-sm text-purple-700">Published</div>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Dr. Kumar's patent portfolio reflects his commitment to translating research innovations into 
            practical solutions. His patents span across cybersecurity, machine learning, and educational 
            technology, demonstrating the real-world applicability of his research work.
          </p>
        </CardContent>
      </Card>

      {/* Patent Details */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Patent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {patents.map((patent, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 border-solid hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{patent.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{patent.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
                      <div className="space-y-2">
                        <p className="text-gray-600">
                          <span className="font-medium">Application No:</span> {patent.applicationNo}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Technical Field:</span> {patent.technicalField}
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="font-medium">Filed:</span> {patent.applicationDate}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-600 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="font-medium">Country:</span> {patent.country}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Patent Office:</span> {patent.patentOffice}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Year:</span> {patent.filedYear}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Inventors:</h4>
                      <div className="flex flex-wrap gap-2">
                        {patent.inventors.map((inventor, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {inventor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-1" />
                        View Application
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Patent Office Link
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Badge className={getStatusColor(patent.status)}>
                      {patent.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Patent Timeline */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Patent Filing Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {patents.sort((a, b) => b.filedYear - a.filedYear).map((patent, index) => (
              <div key={index} className="relative pl-8 pb-4 border-l-2 border-blue-200 last:border-l-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2"></div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{patent.title}</h3>
                      <p className="text-xs text-gray-600">{patent.applicationNo}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(patent.status)}>
                        {patent.status}
                      </Badge>
                      <span className="text-xs text-gray-600">{patent.filedYear}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
