
import React from 'react';
import { Users, FileText, CheckCircle, AlertCircle, GraduationCap, BookOpen } from 'lucide-react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

// Custom Card components with modern UI effects
const Card = ({ children, className = '', ...props }) => (
  <div
    className={
      `bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-200 ${className}`
    }
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = '', ...props }) => (
  <div
    className={`px-5 pt-5 pb-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h3
    className={`font-semibold text-lg tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div
    className={`px-5 pb-5 ${className}`}
    {...props}
  >
    {children}
  </div>
);



const AdminStats = () => {
  const stats = [
    {
      title: 'Total Applications',
      value: '2,847',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      image: 'photo-1605810230434-7631ac76ec81'
    },
    {
      title: 'Pending Verification',
      value: '156',
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      image: 'photo-1498050108023-c5249f4df085'
    },
    {
      title: 'Approved',
      value: '1,892',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      image: 'photo-1581091226825-a6a2a5aee158'
    },
    {
      title: 'Rejected',
      value: '89',
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      image: 'photo-1487058792275-0ad4aaf24ca7'
    }
  ];

  const schoolStats = [
    { school: 'Engineering', applications: 890, color: 'bg-blue-500' },
    { school: 'ICT', applications: 720, color: 'bg-green-500' },
    { school: 'Management', applications: 450, color: 'bg-purple-500' },
    { school: 'Law', applications: 320, color: 'bg-red-500' },
    { school: 'Biotechnology', applications: 180, color: 'bg-teal-500' },
    { school: 'Humanities', applications: 150, color: 'bg-orange-500' },
    { school: 'Buddhist Studies', applications: 87, color: 'bg-amber-500' },
    { school: 'Vocational', applications: 50, color: 'bg-indigo-500' }
  ];

  return (
    <SearchableWrapper>
    <div className="space-y-8">
      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <div className="relative h-20 rounded-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${stat.image}?auto=format&fit=crop&w=300&h=150`}
                  alt={stat.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* School-wise Applications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5" />
            <span>School-wise Applications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {schoolStats.map((school, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${school.color}`}></div>
                  <span className="font-medium">{school.school}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{school.applications} applications</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div 
                      className={`h-full rounded-full ${school.color}`}
                      style={{ width: `${(school.applications / 890) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
    </SearchableWrapper>
  );
};

export default AdminStats;
