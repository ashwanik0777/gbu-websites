
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// --- UI COMPONENTS IMPLEMENTATION ---

// Button: Primary, outline, disabled, loading, etc.
export function Button({ variant = "default", className = "", children, ...props }) {
    const base =
        "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        outline: "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 focus:ring-blue-500",
    };
    return (
        <button
            className={`${base} ${variants[variant] || ""} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

// Card: Container with shadow, rounded, etc.
export function Card({ className = "", children, ...props }) {
    return (
        <div
            className={`bg-white rounded-xl shadow-sm border border-gray-200 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
export function CardHeader({ className = "", children, ...props }) {
    return (
        <div className={`px-6 pt-6 pb-2 ${className}`} {...props}>
            {children}
        </div>
    );
}
export function CardTitle({ className = "", children, ...props }) {
    return (
        <h3 className={`text-lg font-semibold ${className}`} {...props}>
            {children}
        </h3>
    );
}
export function CardDescription({ className = "", children, ...props }) {
    return (
        <p className={`text-gray-500 text-sm ${className}`} {...props}>
            {children}
        </p>
    );
}
export function CardContent({ className = "", children, ...props }) {
    return (
        <div className={`px-6 pb-6 ${className}`} {...props}>
            {children}
        </div>
    );
}

// Badge: Colored pill
export function Badge({ className = "", variant = "solid", children, ...props }) {
    const variants = {
        solid: "bg-blue-600 text-white",
        outline: "border border-blue-600 text-blue-600 bg-white",
    };
    return (
        <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${variants[variant] || ""} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}

// Textarea: Styled textarea
export function Textarea({ className = "", ...props }) {
    return (
        <textarea
            className={`w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 text-sm resize-none ${className}`}
            {...props}
        />
    );
}

// Select: Custom dropdown
export function Select({ value, onValueChange, children }) {
    return <div className="relative">{children}</div>;
}
export function SelectTrigger({ children, ...props }) {
    return (
        <button
            className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
            type="button"
            {...props}
        >
            {children}
        </button>
    );
}
export function SelectValue({ placeholder, children }) {
    return (
        <span className="text-gray-700">{children || <span className="text-gray-400">{placeholder}</span>}</span>
    );
}
export function SelectContent({ children }) {
    return (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            {children}
        </div>
    );
}
export function SelectItem({ value, children, onClick }) {
    return (
        <div
            className="px-4 py-2 cursor-pointer hover:bg-blue-50 text-sm"
            onClick={() => onClick && onClick(value)}
            role="option"
            tabIndex={0}
        >
            {children}
        </div>
    );
}
import { useToast } from "../../hooks/use-toast";
import { ArrowLeft, User, Calendar, Clock, MessageSquare, Send, Phone, Mail } from "lucide-react";

const ComplaintDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");

  // Mock complaint data - in real app this would come from API
  const complaint = {
    id: id || "GRV-2024-001",
    studentName: "John Doe",
    studentId: "GBU2024001",
    studentEmail: "john.doe@gbu.ac.in",
    studentPhone: "+91-9876543210",
    category: "Academic",
    subject: "Assignment submission issue",
    description: "I am unable to submit my assignment through the online portal. The system shows an error message every time I try to upload the file. This is urgent as the deadline is approaching.",
    status: "In Progress",
    priority: "Medium",
    submittedDate: "2024-01-15",
    assignedDate: "2024-01-15",
    dueDate: "2024-01-17",
    assignedStaff: "Dr. Smith",
    staffEmail: "dr.smith@gbu.ac.in",
    staffPhone: "+91-9876543211",
    attachments: ["screenshot_error.png", "assignment_draft.pdf"],
    timeline: [
      {
        date: "2024-01-15 10:00",
        actor: "John Doe",
        action: "Complaint submitted",
        details: "Student submitted complaint with error screenshots"
      },
      {
        date: "2024-01-15 14:00",
        actor: "Dr. Smith",
        action: "Complaint acknowledged",
        details: "Complaint reviewed and acknowledged by staff"
      },
      {
        date: "2024-01-16 09:00",
        actor: "Dr. Smith", 
        action: "Investigation started",
        details: "Started investigating the portal issue"
      }
    ]
  };

  const handleAddComment = () => {
    if (!comment.trim()) return;
    
    toast({
      title: "Comment Added",
      description: "Your comment has been added to the complaint",
    });
    setComment("");
  };

  const handleStatusUpdate = () => {
    if (!status) return;
    
    toast({
      title: "Status Updated",
      description: `Complaint status updated to ${status}`,
    });
    setStatus("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Badge className="bg-blue-100 text-blue-800">
              {complaint.status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Complaint Header */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="outline">{complaint.id}</Badge>
              {complaint.subject}
            </CardTitle>
            <CardDescription>
              Submitted by {complaint.studentName} on {complaint.submittedDate}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Student & Staff Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Student Information
                </h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Name:</strong> {complaint.studentName}</p>
                  <p><strong>ID:</strong> {complaint.studentId}</p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{complaint.studentEmail}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{complaint.studentPhone}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Assigned Staff
                </h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Name:</strong> {complaint.assignedStaff}</p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{complaint.staffEmail}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{complaint.staffPhone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Complaint Details */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Category</p>
                <p className="font-semibold">{complaint.category}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Priority</p>
                <Badge className={complaint.priority === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}>
                  {complaint.priority}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Assigned Date</p>
                <p className="font-semibold">{complaint.assignedDate}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Due Date</p>
                <p className="font-semibold">{complaint.dueDate}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{complaint.description}</p>
            </div>

            {/* Attachments */}
            {complaint.attachments.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Attachments</h4>
                <div className="flex flex-wrap gap-2">
                  {complaint.attachments.map((file, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                      {file}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Activity Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complaint.timeline.map((event, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium">{event.action}</h5>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">{event.details}</p>
                    <p className="text-xs text-gray-500">By: {event.actor}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Add Comment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Add a comment or update..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
              />
              <Button onClick={handleAddComment} className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Add Comment
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Update Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select new status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Resolved">Resolved</SelectItem>
                  <SelectItem value="Escalated">Escalated</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleStatusUpdate} className="w-full">
                Update Status
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetail;
