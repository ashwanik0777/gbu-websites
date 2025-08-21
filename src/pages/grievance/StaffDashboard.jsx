
// ---------- Card ----------
const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-lg rounded-xl border ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 border-b ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold leading-tight tracking-tight ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-500 text-sm ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// ---------- Button ----------
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

// ---------- Badge ----------
const Badge = ({ children, className = "" }) => (
  <span className={`inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full ${className}`}>
    {children}
  </span>
);

// ---------- Input ----------
const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
    {...props}
  />
);

// ---------- Textarea ----------
const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
    {...props}
  />
);

// ---------- Tabs ----------
import React, { useState, Children, isValidElement, cloneElement, createContext, useContext } from "react";

// Create Context
const TabsContext = createContext();

// Tabs
const Tabs = ({ children, defaultValue = "", className = "" }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={`w-full ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
};

// TabsList
const TabsList = ({ children, className = "" }) => (
  <div className={`flex flex-wrap gap-2 border-b pb-2 ${className}`}>
    {children}
  </div>
);

// TabsTrigger
const TabsTrigger = ({ children, value: tabValue, className = "" }) => {
  const { value, setValue } = useContext(TabsContext);
  const isActive = value === tabValue;

  return (
    <button
      onClick={() => setValue(tabValue)}
      className={`
        px-4 py-2 text-sm font-medium rounded-t-md transition-all
        ${isActive
          ? "bg-purple-600 text-white shadow"
          : "text-gray-600 hover:bg-purple-100 hover:text-purple-700"}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// TabsContent
const TabsContent = ({ children, value: contentValue, className = "" }) => {
  const { value } = useContext(TabsContext);
  if (value !== contentValue) return null;

  return (
    <div className={`pt-4 ${className}`}>
      {children}
    </div>
  );
};



const Metric = ({ label, value }) => (
  <div className="flex justify-between items-center text-sm text-gray-600">
    <span>{label}</span>
    <span className="font-semibold text-gray-800">{value}</span>
  </div>
);


import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/use-toast";
import {
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  User,
  Calendar,
  FileText,
  MessageSquare,
  ArrowUp,
  Eye,
  RefreshCw,
  Send
} from "lucide-react";
import StaffComplaintsList from "../../components/Grievance/StaffComplaintsList";

const StaffDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [escalationReason, setEscalationReason] = useState("");
  const [resolutionDetails, setResolutionDetails] = useState("");
  const [selectedComplaintForAction, setSelectedComplaintForAction] = useState(null);

  // Settings state
  const [emailNotifications, setEmailNotifications] = useState({
    newAssignments: true,
    escalationAlerts: true,
    dailySummary: false
  });
  const [workingHours, setWorkingHours] = useState({
    startTime: "09:00",
    endTime: "17:00"
  });

  // Mock staff data
  const staffData = {
    name: "Dr. Smith",
    staffId: "GBU-STAFF-001",
    email: "dr.smith@gbu.ac.in",
    department: "Computer Science",
    role: "Assistant Professor"
  };

  const assignedComplaints = {
    total: 15,
    pending: 5,
    inProgress: 7,
    resolved: 3,
    overdue: 2,
    escalated: 1
  };

  const escalatedComplaints = [
    {
      id: "GRV-2024-002",
      studentName: "Alice Johnson",
      studentId: "GBU2024002",
      subject: "Grade dispute for database assignment",
      escalatedFrom: "Dr. Smith",
      escalatedTo: "Prof. Davis (Department Head)",
      escalationDate: "2024-01-15",
      escalationReason: "Student unsatisfied with initial resolution",
      currentStatus: "Under Review",
      canResolve: false,
      requiresAction: true
    }
  ];

  const overdueComplaints = [
    {
      id: "GRV-2024-004",
      studentName: "Bob Wilson",
      studentId: "GBU2024003",
      subject: "Lab equipment not working",
      assignedDate: "2024-01-12",
      dueDate: "2024-01-14",
      daysOverdue: 2,
      autoEscalationIn: "6 hours",
      priority: "High"
    },
    {
      id: "GRV-2024-006",
      studentName: "Carol Brown",
      studentId: "GBU2024004",
      subject: "Class schedule conflict",
      assignedDate: "2024-01-13",
      dueDate: "2024-01-15",
      daysOverdue: 1,
      autoEscalationIn: "18 hours",
      priority: "Medium"
    }
  ];

  const recentComplaints = [
    {
      id: "GRV-2024-001",
      studentName: "John Doe",
      studentId: "GBU2024001",
      category: "Academic",
      subject: "Assignment submission issue",
      status: "In Progress",
      priority: "Medium",
      assignedDate: "2024-01-15",
      dueDate: "2024-01-17",
      lastUpdate: "2024-01-16"
    },
    {
      id: "GRV-2024-003",
      studentName: "Jane Smith",
      studentId: "GBU2024002",
      category: "Academic",
      subject: "Grade dispute for midterm exam",
      status: "Pending",
      priority: "High",
      assignedDate: "2024-01-16",
      dueDate: "2024-01-18",
      lastUpdate: "2024-01-16"
    }
  ];

  const resolvableComplaints = recentComplaints.filter(c => c.status !== "Resolved");

  const handleEscalateComplaint = (complaintId, reason) => {
    if (!reason.trim()) {
      toast({
        title: "Error",
        description: "Please provide a reason for escalation",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Complaint Escalated",
      description: `Complaint ${complaintId} has been escalated successfully`,
    });

    setEscalationReason("");
    setSelectedComplaintForAction(null);
    console.log(`Escalating complaint ${complaintId} with reason: ${reason}`);
  };

  const handleResolveComplaint = (complaintId, resolution) => {
    if (!resolution.trim()) {
      toast({
        title: "Error",
        description: "Please provide resolution details",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Complaint Resolved",
      description: `Complaint ${complaintId} has been marked as resolved`,
    });

    setResolutionDetails("");
    setSelectedComplaintForAction(null);
    console.log(`Resolving complaint ${complaintId} with resolution: ${resolution}`);
  };

  const handleTakeAction = (complaintId, action) => {
    console.log(`Taking action ${action} on complaint ${complaintId}`);
  };


  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully",
    });
    console.log("Settings saved:", { emailNotifications, workingHours });
  };

  const handleLogout = () => {
    navigate("/grievance");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-2 sm:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="p-2 bg-green-100 rounded-full">
                <Users className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold">Staff Portal</h1>
                <p className="text-xs sm:text-sm text-gray-600">Welcome, {staffData.name}</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout} size="sm">
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <Tabs value={activeTab} defaultValue="overview" onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 text-xs sm:text-sm">
            <TabsTrigger value="overview" className="px-1 sm:px-3">Overview</TabsTrigger>
            <TabsTrigger value="assigned" className="px-1 sm:px-3">Assigned</TabsTrigger>
            <TabsTrigger value="escalation" className="px-1 sm:px-3">Escalation</TabsTrigger>
            <TabsTrigger value="resolve" className="px-1 sm:px-3">Resolve</TabsTrigger>
            <TabsTrigger value="performance" className="px-1 sm:px-3">Performance</TabsTrigger>
            <TabsTrigger value="settings" className="px-1 sm:px-3">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4 sm:space-y-6">
            {/* Staff Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Staff Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="text-sm sm:text-lg font-semibold">{staffData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Staff ID</p>
                    <p className="text-sm sm:text-lg font-semibold">{staffData.staffId}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-sm sm:text-lg font-semibold break-all">{staffData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Department</p>
                    <p className="text-sm sm:text-lg font-semibold">{staffData.department}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Role</p>
                    <p className="text-sm sm:text-lg font-semibold">{staffData.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
              <Card>
                <CardContent className="p-3 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-600">Total Assigned</p>
                      <p className="text-xl sm:text-3xl font-bold text-gray-900">{assignedComplaints.total}</p>
                    </div>
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-3 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-600">Pending</p>
                      <p className="text-xl sm:text-3xl font-bold text-yellow-600">{assignedComplaints.pending}</p>
                    </div>
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-3 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-600">In Progress</p>
                      <p className="text-xl sm:text-3xl font-bold text-blue-600">{assignedComplaints.inProgress}</p>
                    </div>
                    <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-3 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-600">Resolved</p>
                      <p className="text-xl sm:text-3xl font-bold text-green-600">{assignedComplaints.resolved}</p>
                    </div>
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-3 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-600">Overdue</p>
                      <p className="text-xl sm:text-3xl font-bold text-red-600">{assignedComplaints.overdue}</p>
                    </div>
                    <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-3 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-600">Escalated</p>
                      <p className="text-xl sm:text-3xl font-bold text-purple-600">{assignedComplaints.escalated}</p>
                    </div>
                    <ArrowUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Complaints Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Recent Assigned Complaints</CardTitle>
                <CardDescription>Latest complaints requiring your attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentComplaints.map((complaint) => (
                    <div key={complaint.id} className="p-3 sm:p-4 border rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="text-xs">{complaint.id}</Badge>
                          <Badge variant={complaint.status === "In Progress" ? "default" : "secondary"} className="text-xs">
                            {complaint.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">{complaint.priority}</Badge>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => navigate(`/complaint/${complaint.id}`)}
                          className="self-start sm:self-center"
                        >
                          View Details
                        </Button>
                      </div>
                      <h4 className="font-semibold text-sm sm:text-base">{complaint.subject}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Student: {complaint.studentName} ({complaint.studentId})
                      </p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-500">
                        <span>Assigned: {complaint.assignedDate}</span>
                        <span>Due: {complaint.dueDate}</span>
                        <span>Category: {complaint.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assigned Complaints Tab */}
          <TabsContent value="assigned">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Assigned Complaints</CardTitle>
                <CardDescription>
                  Manage all complaints assigned to you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <StaffComplaintsList
                  complaints={recentComplaints}
                  onSelectComplaint={(id) => {
                    navigate(`/complaint/${id}`);
                  }}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="escalation" className="space-y-6">
            {/* Escalate Complaints Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <ArrowUp className="w-5 h-5 text-red-500" />
                  Escalate Complaints
                </CardTitle>
                <CardDescription>
                  Identify and escalate complaints requiring senior intervention or additional expertise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {recentComplaints.filter(c => c.status !== "Resolved").map((complaint) => (
                    <div key={complaint.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                          <Badge className="bg-gray-100 text-gray-800 font-mono">{complaint.id}</Badge>
                          <Badge className={complaint.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}>
                            {complaint.status}
                          </Badge>
                          <Badge className="bg-purple-100 text-purple-800">{complaint.priority}</Badge>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-sm"
                          onClick={() => setSelectedComplaintForAction(selectedComplaintForAction === complaint.id ? null : complaint.id)}
                        >
                          {selectedComplaintForAction === complaint.id ? "Cancel" : "Escalate"}
                        </Button>
                      </div>

                      <h4 className="text-sm sm:text-base font-semibold mb-2 text-gray-900">{complaint.subject}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                          <p><strong>Student:</strong> {complaint.studentName} ({complaint.studentId})</p>
                          <p><strong>Category:</strong> {complaint.category}</p>
                        </div>
                        <div>
                          <p><strong>Assigned:</strong> {complaint.assignedDate}</p>
                          <p><strong>Due:</strong> {complaint.dueDate}</p>
                        </div>
                      </div>

                      {selectedComplaintForAction === complaint.id && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300 space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Reason for Escalation</label>
                            <Textarea
                              placeholder="Explain why this complaint needs to be escalated..."
                              value={escalationReason}
                              onChange={(e) => setEscalationReason(e.target.value)}
                              rows={3}
                            />
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button
                              onClick={() => handleEscalateComplaint(complaint.id, escalationReason)}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              <ArrowUp className="w-4 h-4 mr-2" />
                              Confirm Escalation
                            </Button>
                            <Button variant="outline" onClick={() => setSelectedComplaintForAction(null)}>
                              Cancel
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Overdue Complaints Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Overdue Complaints - Risk of Auto-Escalation
                </CardTitle>
                <CardDescription>
                  These complaints are overdue and will be escalated if not resolved in time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {overdueComplaints.length > 0 ? (
                  <div className="space-y-5">
                    {overdueComplaints.map((complaint) => (
                      <div key={complaint.id} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-2">
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <Badge className="bg-white border">{complaint.id}</Badge>
                            <Badge className="bg-red-100 text-red-800">{complaint.daysOverdue} day(s) overdue</Badge>
                            <Badge className="bg-yellow-100 text-yellow-800">{complaint.priority}</Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" onClick={() => navigate(`/complaint/${complaint.id}`)}>
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEscalateComplaint(complaint.id, "Unable to resolve within SLA")}
                            >
                              <ArrowUp className="w-4 h-4 mr-1" />
                              Escalate
                            </Button>
                          </div>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{complaint.subject}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <p><strong>Student:</strong> {complaint.studentName} ({complaint.studentId})</p>
                            <p><strong>Assigned:</strong> {complaint.assignedDate}</p>
                            <p><strong>Due:</strong> {complaint.dueDate}</p>
                          </div>
                          <div>
                            <p><strong>Days Overdue:</strong> <span className="text-red-600">{complaint.daysOverdue}</span></p>
                            <p><strong>Auto-escalation in:</strong> <span className="text-orange-600">{complaint.autoEscalationIn}</span></p>
                            <p><strong>Priority:</strong> {complaint.priority}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
                    <p className="font-medium">No overdue complaints</p>
                    <p className="text-sm">Everything is on track and within SLA timelines.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Previously Escalated Complaints Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <ArrowUp className="w-5 h-5 text-purple-500" />
                  Previously Escalated Complaints
                </CardTitle>
                <CardDescription>
                  Complaints that have already been escalated from your level.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {escalatedComplaints.length > 0 ? (
                  <div className="space-y-5">
                    {escalatedComplaints.map((complaint) => (
                      <div key={complaint.id} className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex flex-wrap items-center gap-2 text-sm">
                            <Badge className="bg-white border">{complaint.id}</Badge>
                            <Badge className="bg-purple-100 text-purple-800">Escalated</Badge>
                            <Badge className="bg-gray-200 text-gray-800">{complaint.currentStatus}</Badge>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => navigate(`/complaint/${complaint.id}`)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{complaint.subject}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <p><strong>Student:</strong> {complaint.studentName} ({complaint.studentId})</p>
                            <p><strong>Escalated To:</strong> {complaint.escalatedTo}</p>
                          </div>
                          <div>
                            <p><strong>Escalation Date:</strong> {complaint.escalationDate}</p>
                            <p><strong>Status:</strong> {complaint.currentStatus}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    <ArrowUp className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No escalated complaints</p>
                    <p className="text-sm">All complaints are currently within your responsibility.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>


          {/* Resolve Tab - Now Fully Functional */}
          <TabsContent value="resolve" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  Resolve Complaints
                </CardTitle>
                <CardDescription>
                  Mark complaints as resolved with detailed resolution information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resolvableComplaints.map((complaint) => (
                    <div key={complaint.id} className="p-3 sm:p-4 border rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="text-xs">{complaint.id}</Badge>
                          <Badge className={complaint.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}>
                            {complaint.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">{complaint.priority}</Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => navigate(`/complaint/${complaint.id}`)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => setSelectedComplaintForAction(selectedComplaintForAction === complaint.id ? null : complaint.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            {selectedComplaintForAction === complaint.id ? "Cancel" : "Resolve"}
                          </Button>
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{complaint.subject}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-600">
                        <div>
                          <p><strong>Student:</strong> {complaint.studentName} ({complaint.studentId})</p>
                          <p><strong>Category:</strong> {complaint.category}</p>
                        </div>
                        <div>
                          <p><strong>Assigned:</strong> {complaint.assignedDate}</p>
                          <p><strong>Due Date:</strong> {complaint.dueDate}</p>
                        </div>
                      </div>

                      {selectedComplaintForAction === complaint.id && (
                        <div className="mt-4 p-3 sm:p-4 bg-green-50 rounded-lg space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Resolution Details</label>
                            <Textarea
                              placeholder="Describe how the issue was resolved, actions taken, and outcome..."
                              value={resolutionDetails}
                              onChange={(e) => setResolutionDetails(e.target.value)}
                              rows={4}
                            />
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button
                              onClick={() => handleResolveComplaint(complaint.id, resolutionDetails)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Mark as Resolved
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setSelectedComplaintForAction(null)}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {resolvableComplaints.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-300" />
                      <p>No complaints available for resolution</p>
                      <p className="text-sm">All assigned complaints have been resolved</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance">
            <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Performance Metrics</h2>
              <p className="text-sm text-gray-500 mb-4">Track your complaint resolution performance</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-700">Resolution Statistics</h4>
                  <div className="space-y-3">
                    <Metric label="Average Resolution Time" value="2.5 days" />
                    <Metric label="Resolution Rate" value="94%" />
                    <Metric label="Student Satisfaction" value="4.2/5" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-700">This Month</h4>
                  <div className="space-y-3">
                    <Metric label="Complaints Resolved" value="12" />
                    <Metric label="Pending Complaints" value="3" />
                    <Metric label="Escalated" value="1" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Staff Settings</h2>
              <p className="text-sm text-gray-500 mb-4">Configure your preferences and notifications</p>

              <div className="space-y-6">
                {/* Notifications */}
                <div>
                  <h4 className="text-gray-700 font-semibold mb-3">Email Notifications</h4>
                  <div className="space-y-4">
                    {[
                      { label: "New complaint assignments", key: "newAssignments" },
                      { label: "Escalation alerts", key: "escalationAlerts" },
                      { label: "Daily summary reports", key: "dailySummary" },
                    ].map((notif) => (
                      <div key={notif.key} className="flex items-center justify-between">
                        <span className="text-sm">{notif.label}</span>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={emailNotifications[notif.key]}
                            onChange={(e) =>
                              setEmailNotifications((prev) => ({
                                ...prev,
                                [notif.key]: e.target.checked,
                              }))
                            }
                          />
                          <div className="w-11 h-6 bg-gray-300 rounded-full shadow-inner relative transition">
                            <div
                              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition ${emailNotifications[notif.key] ? "translate-x-5 bg-blue-500" : ""
                                }`}
                            ></div>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Working Hours */}
                <div>
                  <h4 className="text-gray-700 font-semibold mb-3">Working Hours</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-600">Start Time</label>
                      <input
                        type="time"
                        value={workingHours.startTime}
                        onChange={(e) =>
                          setWorkingHours((prev) => ({ ...prev, startTime: e.target.value }))
                        }
                        className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-600">End Time</label>
                      <input
                        type="time"
                        value={workingHours.endTime}
                        onChange={(e) =>
                          setWorkingHours((prev) => ({ ...prev, endTime: e.target.value }))
                        }
                        className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <button
                    onClick={handleSaveSettings}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
};

export default StaffDashboard;
