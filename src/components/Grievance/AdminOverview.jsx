
// Card, CardContent, CardDescription, CardHeader, CardTitle, and Badge components

import React from "react";

// Card container with subtle shadow and rounded corners
export const Card = ({ className = "", children, ...props }) => (
  <div
    className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

// CardHeader with padding and bottom border
export const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`px-6 pt-6 pb-2 border-b border-gray-100 ${className}`} {...props}>
    {children}
  </div>
);

// CardTitle with bold, larger text
export const CardTitle = ({ className = "", children, ...props }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`} {...props}>
    {children}
  </h3>
);

// CardDescription with muted color and smaller size
export const CardDescription = ({ className = "", children, ...props }) => (
  <p className={`text-sm text-gray-500 mt-1 ${className}`} {...props}>
    {children}
  </p>
);

// CardContent with padding
export const CardContent = ({ className = "", children, ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

// Badge with pill shape, subtle shadow, and color variants
export const Badge = ({
  className = "",
  children,
  ...props
}) => (
  <span
    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${className}`}
    {...props}
  >
    {children}
  </span>
);
import { TrendingUp, Users, FileText, Clock, CheckCircle, AlertTriangle, Star } from "lucide-react";

/**
 * @param {{ 
 *   stats: { 
 *     totalComplaints: number, 
 *     activeStaff: number, 
 *     avgResolutionTime: string, 
 *     satisfactionRate: string, 
 *     escalationRate: string 
 *   } 
 * }} props
 */

const AdminOverview = ({ stats }) => {
  const quickStats = [
    {
      title: "Total Complaints",
      value: stats.totalComplaints.toLocaleString(),
      icon: FileText,
      color: "bg-blue-500",
      change: "+12% from last month"
    },
    {
      title: "Active Staff",
      value: stats.activeStaff,
      icon: Users,
      color: "bg-green-500",
      change: "3 new this month"
    },
    {
      title: "Avg Resolution Time",
      value: stats.avgResolutionTime,
      icon: Clock,
      color: "bg-yellow-500",
      change: "-15% improvement"
    },
    {
      title: "Satisfaction Rate",
      value: stats.satisfactionRate,
      icon: Star,
      color: "bg-purple-500",
      change: "+0.2 from last month"
    }
  ];

  const recentActivity = [
    {
      type: "escalation",
      message: "Complaint GRV-2024-045 escalated to Level 2",
      time: "5 minutes ago",
      priority: "high"
    },
    {
      type: "resolution",
      message: "Staff member Dr. Johnson resolved 3 complaints",
      time: "15 minutes ago",
      priority: "normal"
    },
    {
      type: "assignment",
      message: "5 new complaints auto-assigned to departments",
      time: "30 minutes ago",
      priority: "normal"
    },
    {
      type: "alert",
      message: "2 complaints approaching SLA deadline",
      time: "1 hour ago",
      priority: "high"
    }
  ];

  const departmentPerformance = [
    { name: "Computer Science", complaints: 45, resolved: 42, rate: "93%" },
    { name: "Mechanical", complaints: 38, resolved: 35, rate: "92%" },
    { name: "Civil", complaints: 32, resolved: 28, rate: "88%" },
    { name: "Electrical", complaints: 29, resolved: 27, rate: "93%" },
    { name: "Administration", complaints: 25, resolved: 22, rate: "88%" }
  ];

  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card
            key={index}
            className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
          >
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-green-600 mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-full shadow-inner ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="hover:shadow-md transition">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system events and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${activity.priority === "high" ? "bg-red-500" : "bg-blue-500"
                      }`}
                  ></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  {activity.priority === "high" && (
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Department Performance */}
        <Card className="hover:shadow-md transition">
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
            <CardDescription>Resolution rates by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentPerformance.map((dept, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-md border bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div>
                    <h4 className="font-medium text-gray-800">{dept.name}</h4>
                    <p className="text-sm text-gray-600">
                      {dept.resolved}/{dept.complaints} resolved
                    </p>
                  </div>
                  <Badge
                    className={`text-xs font-semibold ${parseInt(dept.rate) >= 90
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                      }`}
                  >
                    {dept.rate}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Pending Assignments",
            value: 7,
            icon: Clock,
            textColor: "text-yellow-800",
            iconColor: "text-yellow-600",
            bg: "bg-yellow-50",
            border: "border-yellow-200",
          },
          {
            title: "SLA Breaches",
            value: 3,
            icon: AlertTriangle,
            textColor: "text-red-800",
            iconColor: "text-red-600",
            bg: "bg-red-50",
            border: "border-red-200",
          },
          {
            title: "Escalations Today",
            value: 5,
            icon: TrendingUp,
            textColor: "text-blue-800",
            iconColor: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-200",
          },
        ].map((alert, i) => (
          <Card
            key={i}
            className={`${alert.bg} ${alert.border} border hover:shadow-md transition`}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${alert.textColor}`}>
                  {alert.title}
                </p>
                <p className={`text-2xl font-bold ${alert.textColor.replace("800", "900")}`}>
                  {alert.value}
                </p>
              </div>
              <alert.icon className={`w-8 h-8 ${alert.iconColor}`} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

  );
};

export default AdminOverview;
