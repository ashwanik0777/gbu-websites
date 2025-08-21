
import React from 'react';
import SearchableWrapper from '../../Searchbar/SearchableWrapper';
// Card components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-md border border-gray-200 ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 pt-6 pb-2 border-b border-gray-100 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-lg font-semibold text-gray-900 ${className}`}>{children}</h2>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

// Button component
const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const base =
    "transition-colors rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-100",
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import { FileText, Users, Bell, Settings, Download, Mail } from 'lucide-react';

const AdminActions = () => {
  const quickActions = [
    {
      title: 'Send Notifications',
      description: 'Send bulk notifications to students',
      icon: Bell,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'Generate Reports',
      description: 'Download admission reports',
      icon: Download,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'Email Students',
      description: 'Send emails to applicants',
      icon: Mail,
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Manage Settings',
      description: 'Configure admission settings',
      icon: Settings,
      color: 'bg-gray-600 hover:bg-gray-700'
    }
  ];

  const recentActivities = [
    { action: 'Document approved', student: 'John Doe', time: '2 hours ago' },
    { action: 'Application submitted', student: 'Jane Smith', time: '3 hours ago' },
    { action: 'Document rejected', student: 'Mike Johnson', time: '5 hours ago' },
    { action: 'Payment verified', student: 'Sarah Wilson', time: '6 hours ago' },
    { action: 'Interview scheduled', student: 'David Brown', time: '1 day ago' }
  ];

  return (
    <SearchableWrapper>
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Button 
                key={index}
                variant="outline" 
                className={`h-auto p-4 flex flex-col items-start space-y-2 text-left ${action.color} text-white border-none hover:text-white`}
              >
                <action.icon className="h-6 w-6" />
                <div>
                  <div className="font-medium">{action.title}</div>
                  <div className="text-sm opacity-90">{action.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div>
                    <span className="font-medium">{activity.action}</span>
                    <span className="text-gray-600"> for </span>
                    <span className="font-medium">{activity.student}</span>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
    </SearchableWrapper>
  );
};

export default AdminActions;
