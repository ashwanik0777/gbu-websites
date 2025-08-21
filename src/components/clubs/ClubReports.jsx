
import React, { useState } from 'react';
import { FileText, Download, Eye, Calendar, TrendingUp } from 'lucide-react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';
// Minimal Card, CardHeader, CardTitle, CardContent, Button, Badge components

const Card = ({ className = '', children }) => (
  <div className={`bg-white rounded-lg border border-gray-300 ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-4  ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className = '', variant, size, ...props }) => {
  let base = 'inline-flex items-center justify-center rounded px-4 py-2 font-medium transition-colors focus:outline-none';
  let variants = {
    outline: 'border border-gray-300 text-black bg-white hover:bg-blue-50',
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    dark: "bg-gray-900 text-white hover:bg-gray-800"
  };
  let sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2'
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Badge = ({ children, className = '', variant, ...props }) => {
  let base = 'inline-block px-2 py-0.5 rounded text-xs font-semibold border';
  let variants = {
    outline: 'bg-white border-blue-600 text-blue-600',
    default: 'bg-blue-600 text-white border-transparent'
  };
  return (
    <span className={`${base} ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </span>
  );
};
 
 

const ClubReports  = ({ club }) => {
  const [selectedReport, setSelectedReport] = useState(null);

  const reportStats = [
    { label: 'Total Events', value: '25+', icon: Calendar },
    { label: 'Member Growth', value: '+40%', icon: TrendingUp },
    { label: 'Budget Utilized', value: '₹85,000', icon: FileText },
    { label: 'Achievements', value: club.achievements.length, icon: Eye }
  ];

  return (
    <SearchableWrapper>
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Annual Reports</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive documentation of our club's activities, achievements, and impact throughout the years.
        </p>
      </div>

      {/* Report Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {reportStats.map((stat, index) => (
          <Card key={index} className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {club.reports.map((report) => (
          <Card key={report.id} className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {report.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {report.year}
                      </Badge>
                      <span className="text-sm text-gray-500">Academic Year</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {report.summary}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    variant="dark" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => setSelectedReport(selectedReport === report.id ? null : report.id)}
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </Button>
                  <Button  variant="dark" size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </div>

              {/* Report Preview */}
              {selectedReport === report.id && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                  <div className="text-center py-8">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Report Preview
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Interactive PDF viewer would be embedded here showing the contents of {report.title}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-md mx-auto">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">25</div>
                        <div className="text-sm text-gray-600">Total Events</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">156</div>
                        <div className="text-sm text-gray-600">Members</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">12</div>
                        <div className="text-sm text-gray-600">Achievements</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Reports State */}
      {club.reports.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Reports Coming Soon
            </h3>
            <p className="text-gray-600">
              Annual reports will be published here at the end of each academic year.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Archive Access */}
      <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-0">
        <CardContent className="p-6">
          <div className="text-center">
            <FileText className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Looking for Older Reports?
            </h3>
            <p className="text-gray-600 mb-4">
              Access our complete archive of annual reports from previous years.
            </p>
            <Button variant="outline" className="gap-2">
              <Eye className="w-4 h-4" />
              View Archive
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </SearchableWrapper>
  );
};

export default ClubReports;
