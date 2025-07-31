
import React, { useState, createContext, useContext } from "react";

const TabsContext = createContext();

const Tabs = ({ defaultValue, children, className = "" }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children, className = "" }) => (
  <div className={`flex space-x-2 border-b pb-2 ${className}`}>
    {children}
  </div>
);

const TabsTrigger = ({ children, value: tabValue, className = "" }) => {
  const { value, setValue } = useContext(TabsContext);
  const isActive = value === tabValue;

  return (
    <button
      onClick={() => setValue(tabValue)}
      className={`px-4 py-2 text-sm font-medium transition ${isActive
        ? "border-b-2 border-blue-600 text-blue-600"
        : "text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-300"
        } ${className}`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ children, value: tabValue, className = "" }) => {
  const { value } = useContext(TabsContext);
  if (value !== tabValue) return null;
  return <div className={`pt-4 ${className}`}>{children}</div>;
};

// ----- Card -----
const Card = ({ children, className = "" }) => (
  <div className={`bg-white border rounded-lg shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`border-b px-6 py-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold text-gray-800 ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-500 text-sm mt-1 ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

// ----- Button -----
const Button = ({ children, className = "", size = "md", variant = "default", ...props }) => {
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-blue-600 hover:underline",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ----- Badge -----
const Badge = ({ children, className = "" }) => (
  <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700 ${className}`}>
    {children}
  </span>
);

// ----- Input -----
const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
    {...props}
  />
);

import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/use-toast";
import {
  User,
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  Mail,
  Calendar,
  Star,
  ArrowUp,
  MessageSquare,
  Eye
} from "lucide-react";
import ComplaintsList from "../../components/Grievance/ComplaintsList";
import ComplaintTimeline from "../../components/Grievance/ComplaintTimeline";
import FeedbackForm from "../../components/Grievance/FeedbackForm";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock student data
  const [studentData, setStudentData] = useState({
    name: "John Doe",
    studentId: "GBU2024001",
    email: "john.doe@gbu.ac.in",
    course: "B.Tech Computer Science",
    year: "3rd Year"
  });

  // Email notification preferences
  const [notifications, setNotifications] = useState({
    statusUpdates: true,
    escalationNotifications: true,
    weeklyReports: false
  });

  const complaints = {
    total: 5,
    pending: 1,
    inProgress: 2,
    resolved: 2,
    escalated: 1
  };

  // Mock complaints data for ComplaintsList component
  const mockComplaints = [
    {
      id: "GRV-2024-001",
      category: "Academic",
      subject: "Library access issue during exam period",
      status: "In Progress",
      assignedTo: "Dr. Smith",
      assignedDate: "2024-01-10",
      priority: "High"
    },
    {
      id: "GRV-2024-002",
      category: "Infrastructure",
      subject: "Hostel WiFi connectivity problems",
      status: "Resolved",
      assignedTo: "IT Support Team",
      assignedDate: "2024-01-08",
      priority: "Medium"
    },
    {
      id: "GRV-2024-003",
      category: "Administrative",
      subject: "Fee refund delay",
      status: "Escalated",
      assignedTo: "Accounts Department",
      assignedDate: "2024-01-05",
      priority: "High"
    }
  ];

  const escalatedComplaints = [
    {
      id: "GRV-2024-001",
      subject: "Library access issue during exam period",
      category: "Academic",
      submissionDate: "2024-01-10",
      escalationLevel: "Level 2 - Department Head",
      escalationDate: "2024-01-13",
      reason: "Staff unresponsive for 48+ hours",
      currentHandler: "Dr. Smith (CS Department Head)",
      status: "Pending Review",
      canEscalateAgain: true,
      nextEscalationLevel: "Level 3 - Nodal Officer"
    },
    {
      id: "GRV-2024-003",
      subject: "Fee refund delay",
      category: "Administrative",
      submissionDate: "2024-01-05",
      escalationLevel: "Level 1 - Staff",
      escalationDate: "2024-01-08",
      reason: "Resolution unsatisfactory",
      currentHandler: "Ms. Johnson (Accounts)",
      status: "In Progress",
      canEscalateAgain: false,
      nextEscalationLevel: "Level 2 - Department Head"
    }
  ];

  const eligibleForEscalation = [
    {
      id: "GRV-2024-005",
      subject: "Hostel room maintenance issue",
      category: "Infrastructure",
      submissionDate: "2024-01-14",
      assignedStaff: "Mr. Patel (Maintenance)",
      daysSinceAssignment: 3,
      reason: "No response from staff for 72+ hours",
      escalationLevel: "Level 2 - Department Head"
    }
  ];

  const resolvedComplaints = [
    {
      id: "GRV-2024-002",
      subject: "Hostel WiFi connectivity problems",
      category: "Infrastructure",
      resolvedDate: "2024-01-12",
      assignedStaff: "IT Support Team",
      canEscalate: true,
      reason: "Unsatisfactory resolution"
    }
  ];

  const handleEscalate = (id, level) => {
    console.log(`Escalating complaint ${id} to ${level}`);
    toast({
      title: "Escalation Requested",
      description: `Complaint ${id} is being escalated to ${level}`,
    });
  };



  const handleProfileSave = () => {
    // In a real app, this would make an API call
    console.log("Saving profile changes:", studentData, notifications);
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved successfully",
    });
  };

  const handleLogout = () => {
    navigate("/grievance");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 rounded-full">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Student Portal</h1>
                <p className="text-sm text-gray-600">Welcome, {studentData.name}</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-gray-100 p-1 rounded-xl shadow-sm">
            {[
              { label: "Overview", value: "overview" },
              { label: "My Complaints", value: "complaints" },
              { label: "Timeline", value: "timeline" },
              { label: "Escalation", value: "escalation" },
              { label: "Feedback", value: "feedback" },
              { label: "Profile", value: "profile" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 
                 data-[state=active]:bg-white data-[state=active]:shadow 
                 data-[state=active]:text-blue-600 text-gray-600 hover:text-blue-500 
                 hover:bg-white focus:outline-none"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>


          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            {/* Student Info Card */}
            <Card className="shadow-md transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Student Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {[
                    { label: "Name", value: studentData.name },
                    { label: "Student ID", value: studentData.studentId },
                    { label: "Email", value: studentData.email },
                    { label: "Course", value: studentData.course },
                    { label: "Year", value: studentData.year },
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">{item.label}</p>
                      <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  label: "Total Complaints",
                  value: complaints.total,
                  icon: <FileText className="w-8 h-8 text-blue-500" />,
                  bg: "from-blue-100 to-blue-200",
                  textColor: "text-gray-900",
                },
                {
                  label: "Pending",
                  value: complaints.pending,
                  icon: <Clock className="w-8 h-8 text-yellow-500" />,
                  bg: "from-yellow-100 to-yellow-200",
                  textColor: "text-yellow-700",
                },
                {
                  label: "In Progress",
                  value: complaints.inProgress,
                  icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
                  bg: "from-sky-100 to-sky-200",
                  textColor: "text-blue-700",
                },
                {
                  label: "Resolved",
                  value: complaints.resolved,
                  icon: <CheckCircle className="w-8 h-8 text-green-500" />,
                  bg: "from-green-100 to-green-200",
                  textColor: "text-green-700",
                },
                {
                  label: "Escalated",
                  value: complaints.escalated,
                  icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
                  bg: "from-red-100 to-red-200",
                  textColor: "text-red-700",
                },
              ].map((stat, i) => (
                <Card
                  key={i}
                  className={`bg-gradient-to-br ${stat.bg} transition-transform hover:scale-[1.02] hover:shadow-lg`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
                      </div>
                      {stat.icon}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>


          {/* My Complaints Tab */}
          <TabsContent value="complaints">
            <Card>
              <CardHeader>
                <CardTitle>My Complaints</CardTitle>
                <CardDescription>
                  Track all your submitted complaints and their current status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ComplaintsList
                  complaints={mockComplaints}
                  onViewDetails={(id) => navigate(`/complaint/${id}`)}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle>Complaint Timeline</CardTitle>
                <CardDescription>
                  View detailed progress of your complaints
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ComplaintTimeline />
              </CardContent>
            </Card>
          </TabsContent>


          <TabsContent value="escalation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Currently Escalated Complaints
                </CardTitle>
                <CardDescription>
                  Complaints already escalated to higher authorities
                </CardDescription>
              </CardHeader>
              <CardContent>
                {escalatedComplaints.length > 0 ? (
                  <div className="space-y-4">
                    {escalatedComplaints.map((complaint) => (
                      <div key={complaint.id} className="p-4 rounded-lg border border-red-200 bg-red-50">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline">{complaint.id}</Badge>
                            <Badge className="bg-red-100 text-red-800">{complaint.escalationLevel}</Badge>
                            <Badge className="bg-red-200 text-red-900">{complaint.status}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {complaint.canEscalateAgain && (
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleEscalate(complaint.id, complaint.nextEscalationLevel)}
                              >
                                <ArrowUp className="w-4 h-4 mr-1" />
                                Escalate to {complaint.nextEscalationLevel}
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => navigate(`/complaint/${complaint.id}`)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </Button>
                          </div>
                        </div>
                        <h4 className="font-semibold mb-2">{complaint.subject}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <p><strong>Category:</strong> {complaint.category}</p>
                            <p><strong>Submitted:</strong> {complaint.submissionDate}</p>
                            <p><strong>Escalated:</strong> {complaint.escalationDate}</p>
                          </div>
                          <div>
                            <p><strong>Current Handler:</strong> {complaint.currentHandler}</p>
                            <p><strong>Reason:</strong> {complaint.reason}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    No escalated complaints at the moment
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 2. Eligible for Escalation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowUp className="w-5 h-5 text-orange-500" />
                  Eligible for Escalation
                </CardTitle>
                <CardDescription>
                  Complaints delayed or not satisfactorily resolved
                </CardDescription>
              </CardHeader>
              <CardContent>
                {eligibleForEscalation.length > 0 ? (
                  <div className="space-y-4">
                    {eligibleForEscalation.map((complaint) => (
                      <div key={complaint.id} className="p-4 rounded-lg border border-orange-200 bg-orange-50">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline">{complaint.id}</Badge>
                            <Badge className="bg-orange-100 text-orange-800">Eligible for Escalation</Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button
                              size="sm"
                              className="bg-orange-600 hover:bg-orange-700 text-white"
                              onClick={() => handleEscalate(complaint.id, complaint.escalationLevel)}
                            >
                              <ArrowUp className="w-4 h-4 mr-1" />
                              Escalate Now
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => navigate(`/complaint/${complaint.id}`)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </Button>
                          </div>
                        </div>
                        <h4 className="font-semibold mb-2">{complaint.subject}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <p><strong>Category:</strong> {complaint.category}</p>
                            <p><strong>Submitted:</strong> {complaint.submissionDate}</p>
                            <p><strong>Assigned Staff:</strong> {complaint.assignedStaff}</p>
                          </div>
                          <div>
                            <p><strong>Days Since Assignment:</strong> {complaint.daysSinceAssignment}</p>
                            <p><strong>Reason:</strong> {complaint.reason}</p>
                            <p><strong>Escalate to:</strong> {complaint.escalationLevel}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-300" />
                    <p>No complaints eligible for escalation</p>
                    <p className="text-sm">All complaints are within response deadlines</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 3. Resolved but Escalable Complaints */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Resolved Complaints
                </CardTitle>
                <CardDescription>
                  You can escalate if you're not satisfied with the resolution
                </CardDescription>
              </CardHeader>
              <CardContent>
                {resolvedComplaints.length > 0 ? (
                  <div className="space-y-4">
                    {resolvedComplaints.map((complaint) => (
                      <div key={complaint.id} className="p-4 rounded-lg border border-green-200 bg-green-50">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline">{complaint.id}</Badge>
                            <Badge className="bg-green-100 text-green-800">Resolved</Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {complaint.canEscalate && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-orange-500 text-orange-700 hover:bg-orange-50"
                                onClick={() => handleEscalate(complaint.id, "Level 2 - Department Head")}
                              >
                                <ArrowUp className="w-4 h-4 mr-1" />
                                Escalate Resolution
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => navigate(`/complaint/${complaint.id}`)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </Button>
                          </div>
                        </div>
                        <h4 className="font-semibold mb-2">{complaint.subject}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <p><strong>Category:</strong> {complaint.category}</p>
                            <p><strong>Resolved Date:</strong> {complaint.resolvedDate}</p>
                            <p><strong>Handled by:</strong> {complaint.assignedStaff}</p>
                          </div>
                          <div>
                            <p><strong>Escalation Reason:</strong> {complaint.reason}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    No resolved complaints available for escalation
                  </div>
                )}
              </CardContent>
            </Card>
            {/* Escalation Policy Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-500" />
                  Escalation Policy
                </CardTitle>
                <CardDescription>
                  Understanding when and how to escalate your complaints
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Auto-Escalation Triggers</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Unassigned for 24+ hours</li>
                        <li>• No staff response for 48+ hours</li>
                        <li>• No department head response for 72+ hours</li>
                        <li>• Unsatisfactory resolution feedback</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Escalation Levels</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Level 1: Assigned Staff</li>
                        <li>• Level 2: Department Head</li>
                        <li>• Level 3: Nodal Officer</li>
                        <li>• Level 4: Registrar/Vice Chancellor</li>
                      </ul>
                    </div>
                  </div>
                  <Button variant="outline" onClick={() => navigate("/escalation-policy")}>
                    <FileText className="w-4 h-4 mr-2" />
                    View Complete Escalation Policy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <CardTitle>Submit Feedback</CardTitle>
                <CardDescription>
                  Rate your experience and provide feedback on resolved complaints
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FeedbackForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Profile Settings</CardTitle>
                <CardDescription>
                  Manage your personal details and notification preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">

                  {/* Profile Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium block mb-1">Full Name</label>
                      <Input
                        type="text"
                        value={studentData.name}
                        onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="transition duration-150 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-1">Student ID</label>
                      <Input
                        type="text"
                        value={studentData.studentId}
                        disabled
                        className="bg-gray-100 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-1">Email</label>
                      <Input
                        type="email"
                        value={studentData.email}
                        onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="transition duration-150 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-1">Course</label>
                      <Input
                        type="text"
                        value={studentData.course}
                        onChange={(e) => setStudentData({ ...studentData, course: e.target.value })}
                        placeholder="e.g. B.Tech IT"
                        className="transition duration-150 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Email Preferences */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-base mb-3">Email Notifications</h4>
                    <div className="space-y-3">
                      {[
                        { key: "statusUpdates", label: "Complaint status updates" },
                        { key: "escalationNotifications", label: "Escalation notifications" },
                        { key: "weeklyReports", label: "Weekly summary reports" },
                      ].map(({ key, label }) => (
                        <label key={key} className="flex items-center space-x-3 text-sm">
                          <input
                            type="checkbox"
                            checked={notifications[key]}
                            onChange={(e) =>
                              setNotifications({ ...notifications, [key]: e.target.checked })
                            }
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 rounded"
                          />
                          <span>{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="pt-4">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all"
                      onClick={() => {
                        handleProfileSave();
                        toast({
                          title: "Profile Updated",
                          description: "Your changes have been saved successfully.",
                        });
                      }}
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
