
import React from 'react';
import SearchableWrapper from '../../Searchbar/SearchableWrapper';
// Simple Card and CardContent components with modern UI and effects
const Card = ({ children }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 transition-shadow hover:shadow-2xl">
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`rounded-2xl ${className}`}>
    {children}
  </div>
);
import { Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const AdmissionTimeline = () => {
  const timelineData = [
    {
      title: 'Application Period',
      description: 'Online application submission window',
      date: 'Feb 1 - Mar 15, 2024',
      status: 'completed',
      icon: CheckCircle
    },
    {
      title: 'Application Review',
      description: 'Initial screening and eligibility verification',
      date: 'Mar 16 - Mar 25, 2024',
      status: 'active',
      icon: Clock
    },
    {
      title: 'Document Verification',
      description: 'Original document verification process',
      date: 'Mar 26 - Apr 5, 2024',
      status: 'upcoming',
      icon: Calendar
    },
    {
      title: 'Merit List Publication',
      description: 'First merit list announcement',
      date: 'Apr 10, 2024',
      status: 'upcoming',
      icon: Calendar
    },
    {
      title: 'Counseling & Seat Allocation',
      description: 'Online counseling and seat allocation process',
      date: 'Apr 15 - Apr 25, 2024',
      status: 'upcoming',
      icon: Calendar
    },
    {
      title: 'Fee Payment & Admission',
      description: 'Final fee payment and admission confirmation',
      date: 'Apr 26 - May 5, 2024',
      status: 'upcoming',
      icon: Calendar
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100 border-green-300';
      case 'active':
        return 'text-blue-600 bg-blue-100 border-blue-300';
      case 'upcoming':
        return 'text-gray-600 bg-gray-100 border-gray-300';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-300';
    }
  };

  const getConnectorColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-600';
      case 'active':
        return 'bg-blue-600';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <SearchableWrapper>
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Calendar className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Admission Process Timeline</h2>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-start space-x-4 pb-8 last:pb-0">
              {/* Icon */}
              <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 ${getStatusColor(item.status)}`}>
                <item.icon className="w-6 h-6" />
                {item.status === 'active' && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                )}
              </div>
              
              {/* Connector */}
              {index < timelineData.length - 1 && (
                <div className={`absolute left-8 top-16 w-0.5 h-8 ${getConnectorColor(item.status)}`}></div>
              )}
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'completed' ? 'bg-green-100 text-green-700' :
                      item.status === 'active' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Legend */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="text-gray-600">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-gray-600">Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600">Upcoming</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </SearchableWrapper>
  );
};

export default AdmissionTimeline;
