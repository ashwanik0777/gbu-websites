
import React, { createContext, useContext, useState } from "react";

// Minimal UI components defined inline for this file only

// Button
const Button = ({ variant = "default", size = "md", className = "", children, ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };
  const sizes = {
    md: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
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

// Card
const Card = ({ className = "", children }) => (
  <div className={`bg-white rounded-xl shadow border ${className}`}>{children}</div>
);
const CardHeader = ({ className = "", children }) => (
  <div className={`border-b px-6 py-4 ${className}`}>{children}</div>
);
const CardTitle = ({ className = "", children }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);
const CardDescription = ({ className = "", children }) => (
  <p className={`text-gray-500 text-sm ${className}`}>{children}</p>
);
const CardContent = ({ className = "", children }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

// Tabs

// Create Context
const TabsContext = createContext();

/**
 * Tabs component provides context and manages active tab state.
 */
const Tabs = ({ defaultValue, value, onValueChange, children, className = "" }) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);

  const activeTab = isControlled ? value : internalValue;

  const handleChange = (newValue) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

/**
 * TabsList renders a list of triggers (tabs).
 */
const TabsList = ({ className = "", children }) => (
  <div className={`flex gap-2 mb-4 border-b ${className}`}>{children}</div>
);

/**
 * TabsTrigger acts as a clickable tab to activate corresponding content.
 */
const TabsTrigger = ({ value, disabled = false, className = "", children, ...props }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      onClick={() => !disabled && setActiveTab(value)}
      disabled={disabled}
      className={`px-4 py-2 font-medium rounded-t-md transition-all ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : isActive
          ? "bg-purple-600 text-white shadow"
          : "bg-gray-200 text-gray-700 hover:bg-purple-100"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * TabsContent renders the content only if the tab is active.
 */
const TabsContent = ({ value, className = "", children }) => {
  const { activeTab } = useContext(TabsContext);
  return activeTab === value ? (
    <div className={`p-4 rounded-b-md bg-white shadow ${className}`}>{children}</div>
  ) : null;
};

// Badge
const Badge = ({ variant = "default", className = "", children }) => {
  const variants = {
    default: "bg-purple-100 text-purple-800",
    outline: "border border-gray-300 bg-white text-gray-700",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${variants[variant] || ""} ${className}`}>
      {children}
    </span>
  );
};

// Input
const Input = ({ className = "", ...props }) => (
  <input
    className={`block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 ${className}`}
    {...props}
  />
);

// Select
const Select = ({ value, onValueChange, children }) => {
  // expects children: <SelectTrigger> and <SelectContent>
  const [open, setOpen] = useState(false);
  const trigger = React.Children.toArray(children).find(child => child.type === SelectTrigger);
  const content = React.Children.toArray(children).find(child => child.type === SelectContent);
  return (
    <div className="relative">
      {React.cloneElement(trigger, {
        onClick: () => setOpen(o => !o),
        value,
        open,
      })}
      {open &&
        React.cloneElement(content, {
          onSelect: val => {
            onValueChange(val);
            setOpen(false);
          },
        })}
    </div>
  );
};
const SelectTrigger = ({ children, className = "", ...props }) => (
  <button
    type="button"
    className={`flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 bg-white text-sm w-full ${className}`}
    {...props}
  >
    {children}
    <svg className="ml-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
);
const SelectValue = ({ placeholder, value, children }) => (
  <span className="truncate">{value || placeholder || children}</span>
);
const SelectContent = ({ children, onSelect }) => (
  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
    <div className="py-1">{React.Children.map(children, child => React.cloneElement(child, { onSelect }))}</div>
  </div>
);
const SelectItem = ({ value, children, onSelect }) => (
  <div
    className="px-4 py-2 hover:bg-purple-100 cursor-pointer text-sm"
    onClick={() => onSelect && onSelect(value)}
    tabIndex={0}
    role="option"
  >
    {children}
  </div>
);

// Dialog
const Dialog = ({ open, onOpenChange, children }) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (child.type === DialogTrigger) {
          return React.cloneElement(child, { onOpenChange });
        }
        if (open && child.type === DialogContent) {
          return React.cloneElement(child, { onOpenChange });
        }
        return null; // prevent unexpected rendering
      })}
    </>
  );
};

const DialogTrigger = ({ asChild, children, onOpenChange }) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: () => onOpenChange(true),
    });
  }
  return (
    <button onClick={() => onOpenChange(true)}>{children}</button>
  );
};
const DialogContent = ({ children, className = "", onOpenChange }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className} relative`}>
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
        onClick={() => {
          if (typeof onOpenChange === "function") {
            onOpenChange(false);
          }
        }}
        aria-label="Close"
      >
        ×
      </button>
      {children}
    </div>
  </div>
);

const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;
const DialogTitle = ({ children }) => <h2 className="text-xl font-bold mb-1">{children}</h2>;
const DialogDescription = ({ children }) => <p className="text-gray-500 text-sm mb-2">{children}</p>;
import {
  FileText,
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Settings,
  Bell,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ArrowUp,
  Plus,
  LogOut,
  Home
} from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Grievance/contexts/AuthContext";
import SubmitComplaintForm from "../../components/Grievance/SubmitComplaintForm";
import FacultyComplaintsList from "../../components/Grievance/FacultyComplaintsList";
import FacultyComplaintDetail from "../../components/Grievance/FacultyComplaintDetail";

const FacultyDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const handleLogout = () => {
    navigate("/grievance");
  };

  const handleTrackComplaint = () => {
    navigate("/track");
  };

  // Mock faculty complaints data
  const facultyComplaints = [
    {
      id: "FAC-2024-001",
      subject: "Research lab equipment maintenance delay",
      category: "Research Support",
      department: "Computer Science",
      status: "In Progress",
      priority: "High",
      submittedDate: "2024-01-15",
      assignedDate: "2024-01-15",
      assignedTo: "Dr. Admin Kumar",
      lastUpdate: "2024-01-16",
      escalationLevel: 0,
      autoEscalateAt: "2024-01-17T14:00:00Z",
      description: "The research lab equipment has been down for maintenance for over a week, affecting ongoing research projects."
    },
    {
      id: "FAC-2024-002",
      subject: "Leave application processing delay",
      category: "HR & Leave Management",
      department: "Mathematics",
      status: "Pending",
      priority: "Medium",
      submittedDate: "2024-01-14",
      assignedDate: null,
      assignedTo: null,
      lastUpdate: "2024-01-14",
      escalationLevel: 0,
      autoEscalateAt: "2024-01-16T10:00:00Z",
      description: "My leave application submitted 2 weeks ago is still pending approval."
    },
    {
      id: "FAC-2024-003",
      subject: "Classroom infrastructure issues",
      category: "Academic Infrastructure",
      department: "Physics",
      status: "Resolved",
      priority: "Low",
      submittedDate: "2024-01-10",
      assignedDate: "2024-01-10",
      assignedTo: "Maintenance Team",
      lastUpdate: "2024-01-12",
      escalationLevel: 0,
      autoEscalateAt: null,
      description: "Projector and air conditioning not working in Room 204."
    }
  ];

  const departments = ["Computer Science", "Mathematics", "Physics", "Chemistry", "Biology", "English"];
  const complaintTypes = ["Administrative Delays", "Academic Infrastructure", "Research Support", "HR & Leave Management"];

  const handleComplaintSelect = (id) => {
    setSelectedComplaint(id);
    setActiveTab("details");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Resolved": return "bg-green-100 text-green-800";
      case "Escalated": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredComplaints = facultyComplaints.filter(complaint => {
    const matchesSearch = complaint.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || complaint.category === typeFilter;
    const matchesDepartment = departmentFilter === "all" || complaint.department === departmentFilter;

    let matchesDate = true;
    if (dateFilter !== "all") {
      const today = new Date();
      const complaintDate = new Date(complaint.submittedDate);
      const daysDiff = Math.floor((today.getTime() - complaintDate.getTime()) / (1000 * 60 * 60 * 24));

      switch (dateFilter) {
        case "today": matchesDate = daysDiff === 0; break;
        case "week": matchesDate = daysDiff <= 7; break;
        case "month": matchesDate = daysDiff <= 30; break;
      }
    }

    return matchesSearch && matchesType && matchesDepartment && matchesDate;
  });

  const pendingCount = facultyComplaints.filter(c => c.status === "Pending").length;
  const inProgressCount = facultyComplaints.filter(c => c.status === "In Progress").length;
  const resolvedCount = facultyComplaints.filter(c => c.status === "Resolved").length;
  const escalatedCount = facultyComplaints.filter(c => c.escalationLevel > 0).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">

              <div>
                <h1 className="text-xl font-bold text-gray-900">Faculty Portal</h1>
                <p className="text-xs text-gray-600">Grievance Management System</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate("/grievance")} className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </Button>
              <Button variant="ghost" onClick={handleTrackComplaint} className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Track Complaint
              </Button>
              <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Faculty Dashboard</h1>
          <p className="text-gray-600">Welcome back, Dr. Faculty Name</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="complaints" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">My Complaints</span>
            </TabsTrigger>
            <TabsTrigger value="submit" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Submit New</span>
            </TabsTrigger>
            <TabsTrigger value="details" className="flex items-center gap-2" disabled={!selectedComplaint}>
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Details</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Pending", count: pendingCount, color: "yellow", icon: <Clock className="w-8 h-8 text-yellow-500" /> },
                { label: "In Progress", count: inProgressCount, color: "blue", icon: <FileText className="w-8 h-8 text-blue-500" /> },
                { label: "Resolved", count: resolvedCount, color: "green", icon: <CheckCircle className="w-8 h-8 text-green-500" /> },
                { label: "Escalated", count: escalatedCount, color: "red", icon: <AlertTriangle className="w-8 h-8 text-red-500" /> }
              ].map(({ label, count, color, icon }) => (
                <Card key={label} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{label}</p>
                        <p className={`text-2xl font-bold text-${color}-600`}>{count}</p>
                      </div>
                      {icon}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Complaints */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Recent Complaints</CardTitle>
                <CardDescription>Your latest grievance submissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {facultyComplaints.slice(0, 3).map((complaint) => (
                  <div
                    key={complaint.id}
                    className="flex items-center justify-between p-4 border rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline">{complaint.id}</Badge>
                        <Badge className={getStatusColor(complaint.status)}>{complaint.status}</Badge>
                      </div>
                      <h4 className="font-medium text-gray-900">{complaint.subject}</h4>
                      <p className="text-sm text-gray-600">
                        {complaint.category} • {complaint.department}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="transition-all hover:scale-105"
                      onClick={() => {
                        setSelectedComplaint(complaint.id);
                        setActiveTab("details");
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Dialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="h-20 flex flex-col items-center justify-center bg-purple-600 hover:bg-purple-700 text-white transition-all hover:scale-105">
                        <Plus className="w-6 h-6 mb-2" />
                        Submit New Complaint
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto animate-fade-in">
                      <DialogHeader>
                        <DialogTitle>Submit Faculty Grievance</DialogTitle>
                        <DialogDescription>
                          Submit your grievance as faculty member
                        </DialogDescription>
                      </DialogHeader>
                      <SubmitComplaintForm userRole="faculty" />
                    </DialogContent>
                  </Dialog>

                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center transition-all hover:scale-105"
                    onClick={handleTrackComplaint}
                  >
                    <Search className="w-6 h-6 mb-2" />
                    Track Complaint
                  </Button>

                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center transition-all hover:scale-105"
                  >
                    <Bell className="w-6 h-6 mb-2" />
                    Email Notifications
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="complaints" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search complaints..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-full lg:w-48">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {complaintTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger className="w-full lg:w-48">
                      <SelectValue placeholder="Filter by department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={dateFilter} onValueChange={setDateFilter}>
                    <SelectTrigger className="w-full lg:w-48">
                      <SelectValue placeholder="Filter by date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Dates</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <FacultyComplaintsList
              complaints={filteredComplaints}
              onSelectComplaint={handleComplaintSelect}
            />
          </TabsContent>

          <TabsContent value="submit" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Submit New Faculty Grievance</CardTitle>
                <CardDescription>
                  Submit complaints related to administrative, academic, research, or HR matters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SubmitComplaintForm userRole="faculty" />
              </CardContent>
            </Card>
          </TabsContent>

          {/* <Button
              variant="outline"
              size="sm"
              className="transition-all hover:scale-105"
              onClick={() => {
                setSelectedComplaint(complaint.id);
                setActiveTab("details");
              }}
            >
              View Details
            </Button> */}

            <TabsContent value="details" className="space-y-6">
            {selectedComplaint && (
              <FacultyComplaintDetail
                complaintId={selectedComplaint}
                complaint={facultyComplaints.find(c => c.id === selectedComplaint)}
              />
            )}
          </TabsContent>
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Faculty Settings</CardTitle>
                <CardDescription>Manage your faculty account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Email Notifications</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="rounded" aria-label="On complaint submission" />
                      <span>On complaint submission</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="rounded" aria-label="On complaint assignment" />
                      <span>On complaint assignment</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="rounded" aria-label="On status updates" />
                      <span>On status updates</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="rounded" aria-label="On escalations" />
                      <span>On escalations</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="rounded" aria-label="On resolution" />
                      <span>On resolution</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Auto-Escalation Settings</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="rounded" aria-label="Enable auto-escalation after 48 hours of no action" />
                      <span>Enable auto-escalation after 48 hours of no action</span>
                    </label>
                  </div>
                </div>

                <Button
                  onClick={() => toast({
                    title: "Settings Saved",
                    description: "Your faculty settings have been updated successfully."
                  })}
                >
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FacultyDashboard;
