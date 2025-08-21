import { useState } from "react";

// Input Component
const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
    {...props}
  />
);

// Button Component
const Button = ({ children, className = "", variant = "default", ...props }) => {
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };
  return (
    <button
      className={`inline-flex items-center px-4 py-2 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantStyles[variant] || variantStyles.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Badge Component
const Badge = ({ children, variant = "solid", className = "" }) => {
  const variantClasses = {
    solid: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 text-gray-800 bg-white",
  };
  return (
    <span
      className={`inline-block text-sm font-medium px-2.5 py-1 rounded-full ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

// Card Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md border rounded-lg ${className}`}>{children}</div>
);
const CardHeader = ({ children }) => (
  <div className="border-b px-6 py-4">{children}</div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);
const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500 mt-1">{children}</p>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

// Progress Component
const Progress = ({ value = 0, className = "" }) => (
  <div className={`w-full bg-gray-200 rounded-full ${className}`}>
    <div
      className="bg-blue-600 h-full rounded-full transition-all"
      style={{ width: `${value}%`, height: "100%" }}
    ></div>
  </div>
);

import {
  Search,
  Calendar,
  Clock,
  CheckCircle,
  ArrowUp,
  AlertCircle,
} from "lucide-react";

const ComplaintTimeline = () => {
  const [ticketId, setTicketId] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const mockComplaint = {
    id: "GRV-2024-001",
    subject: "Assignment submission issue",
    category: "Academic",
    status: "In Progress",
    priority: "Medium",
    submittedDate: "2024-01-15T10:00:00Z",
    progress: 60,
    timeline: [
      {
        stage: "Submitted",
        date: "2024-01-15T10:00:00Z",
        status: "completed",
        description: "Complaint submitted by student",
        actor: "John Doe",
      },
      {
        stage: "Acknowledged",
        date: "2024-01-15T11:30:00Z",
        status: "completed",
        description: "Complaint received and logged in system",
        actor: "System",
      },
      {
        stage: "Assigned",
        date: "2024-01-15T14:00:00Z",
        status: "completed",
        description: "Assigned to Dr. Smith for resolution",
        actor: "Admin",
      },
      {
        stage: "In Progress",
        date: "2024-01-16T09:00:00Z",
        status: "current",
        description: "Staff member is working on the issue",
        actor: "Dr. Smith",
      },
      {
        stage: "Resolution",
        date: null,
        status: "pending",
        description: "Issue resolution and closure",
        actor: "Dr. Smith",
      },
      {
        stage: "Feedback",
        date: null,
        status: "pending",
        description: "Student feedback collection",
        actor: "Student",
      },
    ],
  };

  const handleTrack = () => {
    if (ticketId.trim()) {
      setSelectedComplaint(mockComplaint);
    }
  };

  const getStageIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "current":
        return <Clock className="w-6 h-6 text-blue-500" />;
      case "pending":
        return <AlertCircle className="w-6 h-6 text-gray-400" />;
      default:
        return <AlertCircle className="w-6 h-6 text-gray-400" />;
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Pending";
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="space-y-6">
      {/* Track Input */}
      <Card>
        <CardHeader>
          <CardTitle>Enter Ticket ID</CardTitle>
          <CardDescription>
            Enter your complaint ticket ID to view detailed timeline
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Enter ticket ID (e.g., GRV-2024-001)"
              value={ticketId}
              onChange={(e) => setTicketId(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleTrack}>
              <Search className="w-4 h-4 mr-2" />
              Track
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Timeline Display */}
      {selectedComplaint && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">{selectedComplaint.id}</Badge>
                  {selectedComplaint.subject}
                </CardTitle>
                <CardDescription>
                  Category: {selectedComplaint.category} | Priority:{" "}
                  {selectedComplaint.priority}
                </CardDescription>
              </div>
              <Badge
                className={
                  selectedComplaint.status === "Resolved"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }
              >
                {selectedComplaint.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{selectedComplaint.progress}%</span>
              </div>
              <Progress value={selectedComplaint.progress} className="h-2" />
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Complaint Timeline</h4>

              <div className="relative">
                <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gray-200"></div>

                <div className="space-y-6">
                  {selectedComplaint.timeline.map((item, index) => (
                    <div
                      key={index}
                      className="relative flex items-start space-x-4"
                    >
                      {/* Icon */}
                      <div className="relative z-10 bg-white">
                        {getStageIcon(item.status)}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h5
                            className={`text-lg font-medium ${
                              item.status === "completed"
                                ? "text-green-700"
                                : item.status === "current"
                                ? "text-blue-700"
                                : "text-gray-500"
                            }`}
                          >
                            {item.stage}
                          </h5>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(item.date)}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 mt-1">{item.description}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          By: {item.actor}
                        </p>

                        {item.status === "current" && (
                          <div className="mt-2 p-2 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-700">
                              🔄 This stage is currently in progress. You will
                              receive email notifications for any updates.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4 border-t">
              <Button variant="outline">
                <ArrowUp className="w-4 h-4 mr-2" />
                Escalate Complaint
              </Button>
              <Button variant="outline">Download Timeline</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Help Section */}
      {!selectedComplaint && (
        <Card>
          <CardHeader>
            <CardTitle>How to Track Your Complaint</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                    {step}
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {step === 1
                        ? "Find Your Ticket ID"
                        : step === 2
                        ? "Enter Ticket ID"
                        : "View Timeline"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {step === 1 &&
                        "Your ticket ID was provided when you submitted your complaint and sent to your email."}
                      {step === 2 &&
                        "Enter your ticket ID in the format GRV-YYYY-XXX (e.g., GRV-2024-001)."}
                      {step === 3 &&
                        "See the complete timeline with progress updates, assigned staff, and current status."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ComplaintTimeline;
