import React, { useState } from "react";
// Button
const Button = ({ children, className = "", size = "md", variant = "default", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-transparent border border-blue-600 text-blue-700 hover:bg-blue-50",
  };
  return (
    <button
      className={`${base} ${sizes[size] || sizes.md} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Card
const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl shadow-lg bg-white border border-gray-200 ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 border-b border-gray-100 ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);
const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-500 ${className}`}>{children}</p>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// Create context to share value + setValue
const TabsContext = React.createContext();

const Tabs = ({ children, defaultValue, className = "" }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children, className = "" }) => (
  <div className={`flex rounded-lg bg-gray-100 p-1 ${className}`}>{children}</div>
);

const TabsTrigger = ({ children, value: tabValue }) => {
  const { value, setValue } = React.useContext(TabsContext);
  return (
    <button
      className={`flex-1 px-4 py-2 rounded-lg transition-colors font-medium ${value === tabValue
        ? "bg-white shadow text-blue-700"
        : "text-gray-500 hover:bg-gray-200"
        }`}
      onClick={() => setValue(tabValue)}
      type="button"
    >
      {children}
    </button>
  );
};

const TabsContent = ({ children, value: tabValue, className = "" }) => {
  const { value } = React.useContext(TabsContext);
  return value === tabValue ? <div className={className}>{children}</div> : null;
};

// Badge (no change)
const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-blue-100 text-blue-800",
    outline: "border border-blue-400 text-blue-700 bg-white",
  };
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
};


// Dialog
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
        aria-label="Dialog Overlay"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const DialogTrigger = ({ asChild = false, children, onOpenChange }) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (e) => {
        children.props.onClick?.(e);
        onOpenChange?.(true);
      },
    });
  }
  return (
    <button onClick={() => onOpenChange?.(true)}>{children}</button>
  );
};

const DialogContent = ({ children, className = "" }) => (
  <div className={`relative z-50 bg-white rounded-xl shadow-xl p-8 ${className}`}>
    {children}
  </div>
);

const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;

const DialogTitle = ({ children }) => (
  <h2 className="text-2xl font-bold mb-2">{children}</h2>
);

const DialogDescription = ({ children }) => (
  <p className="text-gray-500 mb-4">{children}</p>
);


// Carousel
import { useRef } from "react";

// Wrapper
const Carousel = ({ children, className = "" }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.9;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative ${className}`}>
      <CarouselPrevious onClick={() => scroll("left")} />
      <CarouselNext onClick={() => scroll("right")} />
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scroll-smooth px-2"
      >
        {children}
      </div>
    </div>
  );
};

// Item
const CarouselItem = ({ children, className = "" }) => (
  <div className={`flex-shrink-0 ${className}`}>{children}</div>
);

// Prev button
const CarouselPrevious = ({ className = "", ...props }) => (
  <button
    className={`hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 active:scale-95 ${className}`}
    aria-label="Previous"
    {...props}
  >
    <svg width="20" height="20" fill="none" stroke="currentColor">
      <path d="M13 17l-5-5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

// Next button
const CarouselNext = ({ className = "", ...props }) => (
  <button
    className={`hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 active:scale-95 ${className}`}
    aria-label="Next"
    {...props}
  >
    <svg width="20" height="20" fill="none" stroke="currentColor">
      <path d="M7 7l5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);


// Input
const Input = ({ className = "", ...props }) => (
  <input
    className={`block w-full rounded-md border border-gray-300 px-4 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${className}`}
    {...props}
  />
);

// Switch
const Switch = ({ id, checked, onCheckedChange, className = "" }) => (
  <button
    id={id}
    type="button"
    role="switch"
    aria-checked={checked}
    onClick={() => onCheckedChange(!checked)}
    className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${checked ? "bg-blue-600" : "bg-gray-300"
      } ${className}`}
  >
    <span
      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${checked ? "translate-x-6" : "translate-x-1"
        }`}
    />
  </button>
);

// Label
const Label = ({ htmlFor, children, className = "" }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium ${className}`}>
    {children}
  </label>
);
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Search,
  User,
  Mail,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  Shield,
  Settings,
  ArrowUp,
  HelpCircle
} from "lucide-react";
import Header from "../../components/Grievance/Header";
// import StatisticsCard from "@/components/StatisticsCard";
import FeatureCard from "../../components/Grievance/FeatureCard";
import EscalationFlow from "../../components/Grievance/EscalationFlow";
import SubmitComplaintForm from "../../components/Grievance/SubmitComplaintForm";

const GrievanceMain = () => {
  const navigate = useNavigate();
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const [isTrackDialogOpen, setIsTrackDialogOpen] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [selectedUserRole, setSelectedUserRole] = useState("student");

  const [isFacultyMode, setIsFacultyMode] = useState(false);

  const handleTrackComplaint = () => {
    if (ticketId.trim()) {
      navigate(`/track?id=${ticketId}`);
    }
  };

  const handleSubmitComplaint = () => {
    setSelectedUserRole(isFacultyMode ? "faculty" : "student");
    setIsSubmitDialogOpen(true);
  };

  const statistics = [
    { title: "Complaints Raised", value: "2,847", icon: FileText, color: "bg-blue-500" },
    { title: "In Progress", value: "142", icon: Clock, color: "bg-yellow-500" },
    { title: "Resolved", value: "2,591", icon: CheckCircle, color: "bg-green-500" },
    { title: "Escalated", value: "114", icon: AlertCircle, color: "bg-red-500" }
  ];

  const features = [
    {
      title: "Submit Complaint",
      description: "Raise your grievance with detailed information",
      icon: FileText,
      link: "/login/student"
    },
    {
      title: "Track Complaint",
      description: "Monitor your complaint status in real-time",
      icon: Search,
      link: "/track"
    },
    {
      title: "View Assigned Staff",
      description: "See staff details and contact information",
      icon: Users,
      link: "/login/student"
    },
    {
      title: "Escalate Complaint",
      description: "Escalate unresolved issues to higher authorities",
      icon: ArrowUp,
      link: "/login/student"
    },
    {
      title: "Complaint Timeline",
      description: "View detailed progress timeline",
      icon: Clock,
      link: "/login/student"
    },
    {
      title: "Feedback Submission",
      description: "Provide feedback on resolution quality",
      icon: Mail,
      link: "/login/student"
    },
    {
      title: "Email Updates Log",
      description: "Track all email notifications received",
      icon: Mail,
      link: "/login/student"
    },
    {
      title: "FAQ / Help",
      description: "Get answers to frequently asked questions",
      icon: HelpCircle,
      link: "/faq"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gautam Buddha University
              <span className="block text-3xl md:text-4xl mt-2 text-blue-200">
                Grievance Portal
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your voice matters. Submit, track, and resolve complaints efficiently with our comprehensive grievance management system.
            </p>

            {/* Single Grievance Portal with Switch */}
            <div className="flex flex-col items-center gap-6 justify-center mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 w-full max-w-md">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4">
                    <Label htmlFor="mode-switch" className="text-white font-medium">
                      👨‍🎓 Student
                    </Label>
                    <Switch
                      id="mode-switch"
                      checked={isFacultyMode}
                      onCheckedChange={setIsFacultyMode}
                    />
                    <Label htmlFor="mode-switch" className="text-white font-medium">
                      👨‍🏫 Faculty
                    </Label>
                  </div>
                  <Button
                    size="lg"
                    className={`w-full text-lg px-8 py-4 ${isFacultyMode
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-black text-black hover:bg-blue-50"
                      }`}
                    onClick={handleSubmitComplaint}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Submit {isFacultyMode ? "Faculty" : "Student"} Grievance
                  </Button>
                </div>
              </Card>

              <Dialog open={isTrackDialogOpen} onOpenChange={setIsTrackDialogOpen}>
                <DialogTrigger asChild onOpenChange={setIsTrackDialogOpen}>

                  <Button onClick={() => setIsTrackDialogOpen(true)}
                    size="lg"
                    className="bg-white text-blue-900 text-lg px-8 py-4"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Track Existing Complaint
                  </Button>
                </DialogTrigger>

                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Track Your Complaint</DialogTitle>
                    <DialogDescription>
                      Enter your ticket ID to view real-time status and progress timeline
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="ticketId" className="text-sm font-medium">
                        Ticket ID
                      </label>
                      <Input
                        id="ticketId"
                        placeholder="Enter ticket ID (e.g., GRV-2024-001)"
                        value={ticketId}
                        onChange={(e) => setTicketId(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleTrackComplaint} className="flex-1">
                        <Search className="w-4 h-4 mr-2" />
                        Track Complaint
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => navigate("/track")}
                        className="flex-1"
                      >
                        Go to Track Page
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Dialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    Submit Your {selectedUserRole === "faculty" ? "Faculty" : selectedUserRole === "staff" ? "Staff" : "Student"} Grievance
                  </DialogTitle>
                  <DialogDescription>
                    Fill in the details below to submit your complaint. All fields marked with * are required.
                  </DialogDescription>
                </DialogHeader>
                <SubmitComplaintForm userRole={selectedUserRole} />
              </DialogContent>
            </Dialog>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                {
                  value: "2,847",
                  label: "Total Complaints Resolved",
                  icon: <CheckCircle className="w-8 h-8 text-green-300" />,
                  bg: "from-green-400/30 to-green-600/30",
                  ring: "ring-green-400/40"
                },
                {
                  value: "2.3 Days",
                  label: "Average Resolution Time",
                  icon: <Clock className="w-8 h-8 text-yellow-300" />,
                  bg: "from-yellow-400/30 to-yellow-600/30",
                  ring: "ring-yellow-400/40"
                },
                {
                  value: "4.2/5",
                  label: "Student Satisfaction Rate",
                  icon: <TrendingUp className="w-8 h-8 text-blue-200" />,
                  bg: "from-blue-400/30 to-blue-600/30",
                  ring: "ring-blue-400/40"
                },
                {
                  value: "24/7",
                  label: "Portal Availability",
                  icon: <Shield className="w-8 h-8 text-purple-300" />,
                  bg: "from-purple-400/30 to-purple-600/30",
                  ring: "ring-purple-400/40"
                }
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`
                      relative group bg-gradient-to-br ${stat.bg}
                      rounded-xl p-6 shadow-lg overflow-hidden
                      ring-1 ${stat.ring}
                      transition-all duration-300 ease-in-out
                      hover:scale-[1.03] hover:shadow-2xl
                      flex flex-col items-center text-center
                      `}
                  style={{
                    willChange: "transform, box-shadow",
                  }}
                >
                  <div className="absolute -top-4 -right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300 ease-in-out">
                    {stat.icon}
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-extrabold text-white drop-shadow transition-colors duration-300 ease-in-out">{stat.value}</span>
                  </div>
                  <div className="text-blue-100 text-base font-medium transition-colors duration-300 ease-in-out">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Portal Features</h2>
        <div className="max-w-6xl mx-auto">
          <Carousel>
            {features.map((feature, index) => (
              <CarouselItem
                key={index}
                className="basis-3/4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-2">
                  <FeatureCard {...feature} />
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Role Preview Tabs */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Role-Based Access</h2>
        <Tabs defaultValue="student" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="student">👨‍🎓 Student</TabsTrigger>
            <TabsTrigger value="faculty">👨‍🏫 Faculty</TabsTrigger>
            <TabsTrigger value="staff">🧑‍🏫 Staff</TabsTrigger>
            <TabsTrigger value="admin">🛠️ Admin</TabsTrigger>
          </TabsList>

          <TabsContent value="student" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Student Portal Features
                </CardTitle>
                <CardDescription>
                  Comprehensive grievance management for students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge variant="outline">Submit Grievances</Badge>
                    <Badge variant="outline">Track Status</Badge>
                    <Badge variant="outline">View Timeline</Badge>
                    <Badge variant="outline">Escalate Issues</Badge>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline">Email Notifications</Badge>
                    <Badge variant="outline">Feedback System</Badge>
                    <Badge variant="outline">Staff Contact Info</Badge>
                    <Badge variant="outline">Document Upload</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faculty" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Faculty Portal Features
                </CardTitle>
                <CardDescription>
                  Academic grievance management for faculty members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge variant="outline">Submit Academic Complaints</Badge>
                    <Badge variant="outline">Research-related Issues</Badge>
                    <Badge variant="outline">Administrative Concerns</Badge>
                    <Badge variant="outline">Infrastructure Issues</Badge>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline">Track Status</Badge>
                    <Badge variant="outline">Escalate to Dean</Badge>
                    <Badge variant="outline">Department Level Issues</Badge>
                    <Badge variant="outline">Policy Concerns</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staff" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Staff Portal Features
                </CardTitle>
                <CardDescription>
                  Efficient complaint resolution tools for staff
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge variant="outline">View Assigned Complaints</Badge>
                    <Badge variant="outline">Update Status</Badge>
                    <Badge variant="outline">Add Comments</Badge>
                    <Badge variant="outline">SLA Monitoring</Badge>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline">Auto Escalation Alerts</Badge>
                    <Badge variant="outline">Department Transfer</Badge>
                    <Badge variant="outline">Resolution Tools</Badge>
                    <Badge variant="outline">Performance Metrics</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="admin" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Admin Portal Features
                </CardTitle>
                <CardDescription>
                  Complete oversight and management capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge variant="outline">System Dashboard</Badge>
                    <Badge variant="outline">Assign Complaints</Badge>
                    <Badge variant="outline">Monitor SLAs</Badge>
                    <Badge variant="outline">Generate Reports</Badge>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline">Escalation Management</Badge>
                    <Badge variant="outline">Staff Performance</Badge>
                    <Badge variant="outline">Policy Configuration</Badge>
                    <Badge variant="outline">Analytics Dashboard</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Escalation Workflow */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Escalation Workflow</h2>
        <EscalationFlow />
      </section>

      {/* Footer
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Gautam Buddha University</h3>
              <p className="text-gray-400">Grievance Redressal Portal</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/escalation-policy" className="hover:text-white">Escalation Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Portal Access</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="/login/student" className="hover:text-white">Student Login</a></li>
                <li><a href="/login/staff" className="hover:text-white">Staff Login</a></li>
                <li><a href="/login/admin" className="hover:text-white">Admin Login</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="https://gbu.ac.in" className="hover:text-white">University Website</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gautam Buddha University. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default GrievanceMain;
