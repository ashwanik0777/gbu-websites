import React, { useState, useRef, useEffect } from "react";
// import * as React from "react";

const TooltipContext = React.createContext();

const TooltipProvider = ({ children }) => (
  <TooltipContext.Provider value={true}>{children}</TooltipContext.Provider>
);

const Tooltip = ({ children }) => <>{children}</>;

const TooltipTrigger = ({ children }) => (
  <div className="relative group cursor-pointer inline-block">{children}</div>
);

const TooltipContent = ({ children }) => (
  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 px-3 py-1.5 text-xs bg-black text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none whitespace-nowrap">
    {children}
  </div>
);


// Button
const Button = React.forwardRef(
  (
    {
      children,
      className = "",
      variant = "default",
      size = "md",
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline:
        "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
    };
    const sizes = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-12 px-6 text-lg",
    };
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant] || ""} ${sizes[size] || ""
          } ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// Card
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-xl shadow-md border border-gray-200 ${className}`}
  >
    {children}
  </div>
);
const CardHeader = ({ children, className = "" }) => (
  <div className={`p-4 border-b border-gray-100 ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold text-blue-900 ${className}`}>
    {children}
  </h3>
);
const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-500 text-sm ${className}`}>{children}</p>
);
const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

// Select

// import React, { useState, useEffect, useRef } from "react";

// Select wrapper
const Select = ({ value, onValueChange, children }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={triggerRef}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        if (child.type.displayName === "SelectTrigger") {
          return React.cloneElement(child, {
            onClick: () => setOpen(!open),
          });
        }

        if (child.type.displayName === "SelectContent") {
          return open
            ? React.cloneElement(child, {
              value,
              onValueChange: (val) => {
                onValueChange(val);
                setOpen(false);
              },
            })
            : null;
        }

        return child;
      })}
    </div>
  );
};

// Trigger Button
const SelectTrigger = React.forwardRef(({ children, className = "", ...props }, ref) => (
  <button
    ref={ref}
    className={`w-full h-10 px-4 border border-gray-300 rounded-md bg-white text-left flex items-center justify-between focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
    type="button"
  >
    {children}
    <svg
      className="w-4 h-4 ml-2 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
));
SelectTrigger.displayName = "SelectTrigger";

// Selected Value or Placeholder
const SelectValue = ({ placeholder, value, children }) => (
  <span className="truncate text-gray-700">
    {value ? children : placeholder}
  </span>
);

// Dropdown Content
const SelectContent = ({ children, value, onValueChange }) => (
  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { value, onValueChange })
    )}
  </div>
);
SelectContent.displayName = "SelectContent";

// Each Option
const SelectItem = ({ value: itemValue, value, onValueChange, children }) => (
  <div
    className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${value === itemValue ? "bg-blue-100 text-blue-700 font-semibold" : ""
      }`}
    onClick={() => onValueChange(itemValue)}
    role="option"
    aria-selected={value === itemValue}
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") onValueChange(itemValue);
    }}
  >
    {children}
  </div>
);


// Badge
const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-blue-100 text-blue-700",
    outline: "border border-blue-400 text-blue-700 bg-white",
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${variants[variant] || ""} ${className}`}
    >
      {children}
    </span>
  );
};
import { Download, Calendar, TrendingUp, BarChart, FileText, Users } from "lucide-react";

const AdminReports = () => {
  const [reportType, setReportType] = useState("monthly");
  const [dateRange, setDateRange] = useState("current");

  const handleDownload = (report) => {
    const blob = new Blob([`Dummy content for ${report.name}`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${report.name}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const reportTypes = [
    {
      id: "monthly",
      title: "Monthly Complaints Report",
      description: "Comprehensive monthly analysis of all complaints",
      icon: Calendar
    },
    {
      id: "performance",
      title: "Staff Performance Report",
      description: "Individual and department performance metrics",
      icon: Users
    },
    {
      id: "satisfaction",
      title: "Student Satisfaction Report",
      description: "Feedback analysis and satisfaction trends",
      icon: TrendingUp
    },
    {
      id: "escalation",
      title: "Escalation Analysis Report",
      description: "Escalation patterns and root cause analysis",
      icon: BarChart
    }
  ];

  const quickStats = [
    { label: "Total Reports Generated", value: "142", change: "+12%" },
    { label: "Average Resolution Time", value: "2.3 days", change: "-15%" },
    { label: "Satisfaction Rate", value: "4.1/5", change: "+0.2" },
    { label: "Escalation Rate", value: "4%", change: "-8%" }
  ];

  const recentReports = [
    {
      name: "January 2024 Monthly Report",
      type: "Monthly",
      generatedDate: "2024-01-31",
      size: "2.4 MB",
      format: "PDF"
    },
    {
      name: "Q4 2023 Performance Analysis",
      type: "Performance",
      generatedDate: "2024-01-15",
      size: "1.8 MB",
      format: "PDF"
    },
    {
      name: "December Satisfaction Survey",
      type: "Satisfaction",
      generatedDate: "2024-01-05",
      size: "945 KB",
      format: "PDF"
    }
  ];

  const handleGenerateReport = () => {
    console.log(`Generating ${reportType} report for ${dateRange} period`);
  };

  return (
    <div className="space-y-10 px-4 py-6 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-slate-100 min-h-screen">

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index} className="bg-white border border-slate-200 hover:shadow-md transition-all rounded-2xl">
            <CardContent className="p-6 text-center space-y-2">
              <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
              <p className={`text-sm font-semibold ${stat.change.includes('-') ? 'text-red-600' : 'text-green-600'}`}>
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Generate Report */}
      <Card className="border-blue-100 shadow-md rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-800">Generate New Report</CardTitle>
          <CardDescription>Create custom reports with preferred options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Report Type */}
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Report Type</label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger className="rounded-lg border-slate-300 shadow-sm">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  {reportTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date Range */}
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Date Range</label>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="rounded-lg border-slate-300 shadow-sm">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Current Month</SelectItem>
                  <SelectItem value="previous">Previous Month</SelectItem>
                  <SelectItem value="quarter">Current Quarter</SelectItem>
                  <SelectItem value="year">Current Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Generate Button */}
            <div className="flex items-end">
              <Button
                onClick={handleGenerateReport}
                className="w-full bg-blue-600 text-white hover:bg-blue-700 transition rounded-lg"
              >
                <FileText className="w-5 h-5 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>

          {/* Report Description */}
          {reportType && (
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="p-2 bg-blue-100 rounded-full">
                {(() => {
                  const Icon = reportTypes.find(type => type.id === reportType)?.icon;
                  return Icon ? <Icon className="w-5 h-5 text-blue-600" /> : null;
                })()}
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">
                  {reportTypes.find(type => type.id === reportType)?.title}
                </h4>
                <p className="text-sm text-blue-700">
                  {reportTypes.find(type => type.id === reportType)?.description}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Available Report Types */}
      <Card className="rounded-2xl shadow">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">Available Report Types</CardTitle>
          <CardDescription>Choose from predefined templates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setReportType(type.id)}
                className={`p-5 rounded-xl border transition cursor-pointer ${reportType === type.id
                    ? "border-blue-500 bg-blue-50"
                    : "hover:border-slate-300"
                  }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <type.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{type.title}</h4>
                    <p className="text-sm text-slate-600">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card className="rounded-2xl shadow">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">Recent Reports</CardTitle>
          <CardDescription>Download previously generated reports</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentReports.map((report, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-xl hover:shadow transition"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-100 rounded-full">
                  <FileText className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">{report.name}</h4>
                  <div className="flex items-center flex-wrap gap-2 text-sm text-slate-500">
                    <Badge variant="outline">{report.type}</Badge>
                    <span>Generated: {report.generatedDate}</span>
                    <span>Size: {report.size}</span>
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleDownload(report)}
                className="hover:bg-blue-50 transition"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Analytics Overview */}
      <Card className="rounded-2xl shadow-xl border border-slate-200 bg-white/80 backdrop-blur-sm transition">
  <CardHeader className="pb-2 border-b border-slate-100">
    <CardTitle className="text-xl font-bold text-slate-800">📊 Analytics Overview</CardTitle>
    <CardDescription className="text-slate-500">
      Key insights based on complaint resolution data
    </CardDescription>
  </CardHeader>

  <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 text-sm text-slate-700">
    {/* Top Categories */}
    <div className="bg-slate-50 rounded-lg p-4 hover:shadow-md transition">
      <h4 className="font-semibold text-slate-800 mb-3 border-b pb-1 border-slate-200">
        🏷️ Top Categories
      </h4>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span>🎓 Academic</span>
          <span className="font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full text-xs">34%</span>
        </div>
        <div className="flex justify-between items-center">
          <span>🏗️ Infrastructure</span>
          <span className="font-semibold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full text-xs">28%</span>
        </div>
        <div className="flex justify-between items-center">
          <span>📁 Administrative</span>
          <span className="font-semibold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full text-xs">21%</span>
        </div>
      </div>
    </div>

    {/* Resolution Trends */}
    <div className="bg-slate-50 rounded-lg p-4 hover:shadow-md transition">
      <h4 className="font-semibold text-slate-800 mb-3 border-b pb-1 border-slate-200">
        ⏱️ Resolution Trends
      </h4>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span>✅ Within SLA</span>
          <span className="font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full text-xs">87%</span>
        </div>
        <div className="flex justify-between items-center">
          <span>⚠️ Escalated</span>
          <span className="font-semibold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full text-xs">9%</span>
        </div>
        <div className="flex justify-between items-center">
          <span>❌ Overdue</span>
          <span className="font-semibold text-red-600 bg-red-100 px-2 py-0.5 rounded-full text-xs">4%</span>
        </div>
      </div>
    </div>

    {/* Department Performance */}
    <div className="bg-slate-50 rounded-lg p-4 hover:shadow-md transition">
      <h4 className="font-semibold text-slate-800 mb-3 border-b pb-1 border-slate-200">
        🏢 Department Performance
      </h4>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span>💻 IT Services</span>
          <span className="font-semibold text-indigo-600">4.7 / 5 ⭐</span>
        </div>
        <div className="flex justify-between items-center">
          <span>🧑‍💻 Computer Science</span>
          <span className="font-semibold text-indigo-600">4.2 / 5 ⭐</span>
        </div>
        <div className="flex justify-between items-center">
          <span>📋 Administration</span>
          <span className="font-semibold text-indigo-600">3.9 / 5 ⭐</span>
        </div>
      </div>
    </div>
  </CardContent>
</Card>

    </div>

  );
};

export default AdminReports;
