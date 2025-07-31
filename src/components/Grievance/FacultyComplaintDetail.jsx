
import { useState } from "react";
// Button
const Button = ({ children, variant = "default", className = "", disabled = false, ...props }) => (
    <button
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
            ${variant === "outline"
                ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                : "bg-blue-600 text-white hover:bg-blue-700"}
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            ${className}`}
        disabled={disabled}
        {...props}
    >
        {children}
    </button>
);

// Badge
const Badge = ({ children, variant = "default", className = "" }) => (
    <span
        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold
            ${variant === "outline"
                ? "border border-gray-300 text-gray-700 bg-white"
                : variant === "secondary"
                ? "bg-gray-200 text-gray-700"
                : "bg-blue-100 text-blue-800"}
            ${className}`}
    >
        {children}
    </span>
);

// Card
const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg shadow border ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = "" }) => (
    <div className={`border-b px-6 py-4 ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = "" }) => (
    <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
);
const CardDescription = ({ children, className = "" }) => (
    <p className={`text-gray-500 text-sm ${className}`}>{children}</p>
);
const CardContent = ({ children, className = "" }) => (
    <div className={`px-6 py-4 ${className}`}>{children}</div>
);

// Textarea
const Textarea = ({ className = "", ...props }) => (
    <textarea
        className={`w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
    />
);

// Progress
const Progress = ({ value = 0, className = "" }) => (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
        <div
            className="bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${value}%` }}
        />
    </div>
);
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowUp, 
  MessageSquare, 
  Download,
  Mail,
  AlertTriangle,
  CheckCircle,
  FileText
} from "lucide-react";
import { useToast } from "../../hooks/use-toast";

/**
 * @param {{ complaintId: string, complaint: any }} props
 */
const FacultyComplaintDetail = ({ complaintId, complaint }) => {
  const { toast } = useToast();
  const [comment, setComment] = useState("");

  if (!complaint) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-600">Complaint not found</h3>
        </CardContent>
      </Card>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Resolved": return "bg-green-100 text-green-800";
      case "Escalated": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getProgress = () => {
    switch (complaint.status) {
      case "Pending": return 25;
      case "In Progress": return 60;
      case "Resolved": return 100;
      case "Escalated": return 40;
      default: return 0;
    }
  };

  const getStageIcon = (status) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "current": return <Clock className="w-6 h-6 text-blue-500" />;
      case "pending": return <AlertTriangle className="w-6 h-6 text-gray-400" />;
      default: return <AlertTriangle className="w-6 h-6 text-gray-400" />;
    }
  };

  const timeline = [
    {
      stage: "Submitted",
      date: complaint.submittedDate,
      status: "completed",
      description: "Faculty grievance submitted",
      actor: "Faculty Member"
    },
    {
      stage: "Acknowledged", 
      date: complaint.submittedDate,
      status: "completed",
      description: "Complaint received and logged",
      actor: "System"
    },
    {
      stage: "Assigned",
      date: complaint.assignedDate,
      status: complaint.assignedDate ? "completed" : "pending",
      description: complaint.assignedTo ? `Assigned to ${complaint.assignedTo}` : "Waiting for assignment",
      actor: complaint.assignedTo || "Pending"
    },
    {
      stage: "In Progress",
      date: complaint.status === "In Progress" ? complaint.lastUpdate : null,
      status: complaint.status === "In Progress" ? "current" : complaint.status === "Resolved" ? "completed" : "pending",
      description: "Staff working on resolution",
      actor: complaint.assignedTo || "Staff"
    },
    {
      stage: "Resolution",
      date: complaint.status === "Resolved" ? complaint.lastUpdate : null,
      status: complaint.status === "Resolved" ? "completed" : "pending",
      description: "Issue resolution and closure", 
      actor: complaint.assignedTo || "Staff"
    }
  ];

  const handleEscalate = () => {
    toast({
      title: "Complaint Escalated",
      description: `Complaint ${complaint.id} has been escalated to the Dean's office.`
    });
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      toast({
        title: "Comment Added",
        description: "Your comment has been added to the complaint."
      });
      setComment("");
    }
  };

  const emailUpdates = [
    {
      type: "Submission Confirmation",
      date: complaint.submittedDate,
      subject: `Complaint Submitted: ${complaint.subject}`,
      status: "Sent"
    },
    {
      type: "Assignment Notification", 
      date: complaint.assignedDate,
      subject: `Complaint Assigned: ${complaint.id}`,
      status: complaint.assignedDate ? "Sent" : "Pending"
    },
    {
      type: "Status Update",
      date: complaint.lastUpdate,
      subject: `Status Update: ${complaint.status}`,
      status: "Sent" 
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{complaint.id}</Badge>
                {complaint.subject}
              </CardTitle>
              <CardDescription>
                {complaint.category} • {complaint.department} • Priority: {complaint.priority}
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className={getStatusColor(complaint.status)}>{complaint.status}</Badge>
              {complaint.escalationLevel > 0 && (
                <Badge className="bg-red-100 text-red-800">
                  Escalation Level {complaint.escalationLevel}
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>Submitted: {new Date(complaint.submittedDate).toLocaleString()}</span>
              </div>
              {complaint.assignedTo && (
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <span>Assigned to: {complaint.assignedTo}</span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>Last Update: {new Date(complaint.lastUpdate).toLocaleString()}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{getProgress()}%</span>
              </div>
              <Progress value={getProgress()} className="h-2" />
            </div>

            {/* Auto-escalation warning */}
            {complaint.autoEscalateAt && complaint.status !== "Resolved" && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-orange-800">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-medium">Auto-Escalation Scheduled</span>
                </div>
                <p className="text-sm text-orange-700 mt-1">
                  This complaint will be automatically escalated on {new Date(complaint.autoEscalateAt).toLocaleString()} if no action is taken.
                </p>
              </div>
            )}

            <p className="text-gray-700">{complaint.description}</p>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Complaint Timeline</CardTitle>
          <CardDescription>Detailed progress tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-4">
                  <div className="relative z-10 bg-white">
                    {getStageIcon(item.status)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h5 className={`text-lg font-medium ${
                        item.status === "completed" ? "text-green-700" :
                        item.status === "current" ? "text-blue-700" : 
                        "text-gray-500"
                      }`}>
                        {item.stage}
                      </h5>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date ? new Date(item.date).toLocaleString() : "Pending"}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    <p className="text-sm text-gray-500 mt-1">By: {item.actor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Email Updates Log */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Email Updates Log
          </CardTitle>
          <CardDescription>Track all email notifications for this complaint</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {emailUpdates.map((email, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{email.type}</h4>
                  <p className="text-sm text-gray-600">{email.subject}</p>
                  <p className="text-xs text-gray-500">
                    {email.date ? new Date(email.date).toLocaleString() : "Pending"}
                  </p>
                </div>
                <Badge variant={email.status === "Sent" ? "default" : "secondary"}>
                  {email.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions and Comments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {complaint.status !== "Resolved" && (
              <Button onClick={handleEscalate} className="w-full">
                <ArrowUp className="w-4 h-4 mr-2" />
                Manual Escalation
              </Button>
            )}
            
            <Button variant="outline" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download Timeline
            </Button>

            <Button variant="outline" className="w-full">
              <Mail className="w-4 h-4 mr-2" />
              Request Status Update
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add Comment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Textarea
              placeholder="Add additional information or follow-up questions..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
            />
            <Button onClick={handleAddComment} disabled={!comment.trim()}>
              <MessageSquare className="w-4 h-4 mr-2" />
              Add Comment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FacultyComplaintDetail;
