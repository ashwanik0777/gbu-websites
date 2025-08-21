
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import SearchableWrapper from '../../Searchbar/SearchableWrapper';
// Card Components with modern UI and effects

const Card = ({ children, className = '', ...props }) => (
  <div
    className={
      `bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-200 ${className}`
    }
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = '', ...props }) => (
  <div
    className={`px-6 pt-6 pb-2 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white rounded-t-xl ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h3
    className={`text-lg font-semibold text-gray-900 tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div
    className={`px-6 py-4 ${className}`}
    {...props}
  >
    {children}
  </div>
);
import { Users, FileText, CheckCircle, Clock } from 'lucide-react';

const AdmissionStats = () => {
  const statsData = [
    {
      title: 'Total Applications',
      value: '12,847',
      change: '+15%',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Applications Processed',
      value: '8,234',
      change: '+8%',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Seats Available',
      value: '2,450',
      change: '0%',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Pending Review',
      value: '4,613',
      change: '-5%',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const categoryData = [
    { name: 'General', applications: 5420, admitted: 1200, color: '#3B82F6' },
    { name: 'OBC', applications: 3240, admitted: 850, color: '#10B981' },
    { name: 'SC', applications: 2680, admitted: 650, color: '#F59E0B' },
    { name: 'ST', applications: 1507, admitted: 350, color: '#EF4444' }
  ];

  const pieData = [
    { name: 'UG Programs', value: 65, color: '#3B82F6' },
    { name: 'PG Programs', value: 25, color: '#10B981' },
    { name: 'PhD Programs', value: 10, color: '#F59E0B' }
  ];

  return (
    <SearchableWrapper>
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                    {stat.change} from last year
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category-wise Applications */}
        <Card>
          <CardHeader>
            <CardTitle>Category-wise Applications & Admissions</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="applications" fill="#E5E7EB" name="Applications" />
                <Bar dataKey="admitted" fill="#3B82F6" name="Admitted" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Program Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Applications by Program Type</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-4 mt-4">
              {pieData.map((entry, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{entry.name} ({entry.value}%)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default AdmissionStats;
