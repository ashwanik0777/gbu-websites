
import React from "react";

// Button component
export const Button = React.forwardRef(
    (
        {
            children,
            variant = "default",
            size = "md",
            className = "",
            ...props
        },
        ref
    ) => {
        const base =
            "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
        const variants = {
            default: "bg-blue-600 text-white hover:bg-blue-700",
            outline:
                "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100",
        };
        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg",
        };
        return (
            <button
                ref={ref}
                className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

// Badge component
export const Badge = ({
    children,
    variant = "solid",
    className = "",
    ...props
}) => {
    const base =
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold";
    const variants = {
        solid: "bg-gray-200 text-gray-800",
        outline: "border border-gray-300 text-gray-700 bg-white",
    };
    return (
        <span className={`${base} ${variants[variant] || ""} ${className}`} {...props}>
            {children}
        </span>
    );
};

// Card and CardContent components
export const Card = ({ children, className = "", ...props }) => (
    <div
        className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const CardContent = ({ children, className = "", ...props }) => (
    <div className={`p-4 ${className}`} {...props}>
        {children}
    </div>
);
import { Calendar, Clock, User, AlertTriangle, ArrowUp } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

/**
 * @param {{ complaints: any[], onSelectComplaint: (id: string) => void }} props
 */

const FacultyComplaintsList = ({ complaints, onSelectComplaint }) => {
  const { toast } = useToast();

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Resolved": return "bg-green-100 text-green-800";
      case "Escalated": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleEscalate = (complaintId) => {
    toast({
      title: "Complaint Escalated",
      description: `Complaint ${complaintId} has been escalated to higher authorities.`
    });
  };

  const isAutoEscalationDue = (autoEscalateAt) => {
    if (!autoEscalateAt) return false;
    return new Date(autoEscalateAt) <= new Date();
  };

  return (
    <div className="space-y-4">
      {complaints.map((complaint) => (
        <Card key={complaint.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="font-mono">
                    {complaint.id}
                  </Badge>
                  <Badge className={getStatusColor(complaint.status)}>
                    {complaint.status}
                  </Badge>
                  <Badge className={getPriorityColor(complaint.priority)}>
                    {complaint.priority}
                  </Badge>
                  {isAutoEscalationDue(complaint.autoEscalateAt) && complaint.status !== "Resolved" && (
                    <Badge className="bg-red-100 text-red-800 animate-pulse">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Auto-Escalation Due
                    </Badge>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-1">{complaint.subject}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Category: {complaint.category} • Department: {complaint.department}
                  </p>
                  <p className="text-sm text-gray-700 line-clamp-2">{complaint.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Submitted: {new Date(complaint.submittedDate).toLocaleDateString()}</span>
                  </div>
                  {complaint.assignedTo && (
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>Assigned to: {complaint.assignedTo}</span>
                    </div>
                  )}
                  {complaint.assignedDate && (
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Assigned: {new Date(complaint.assignedDate).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                {complaint.autoEscalateAt && complaint.status !== "Resolved" && (
                  <div className="text-sm text-orange-600 bg-orange-50 p-2 rounded">
                    <AlertTriangle className="w-4 h-4 inline mr-1" />
                    Auto-escalation scheduled for: {new Date(complaint.autoEscalateAt).toLocaleString()}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 min-w-fit">
                <Button 
                  size="sm"
                  onClick={() => onSelectComplaint(complaint.id)}
                >
                  View Details
                </Button>
                
                {complaint.status !== "Resolved" && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleEscalate(complaint.id)}
                    className="text-orange-600 hover:text-orange-700"
                  >
                    <ArrowUp className="w-4 h-4 mr-1" />
                    Escalate
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {complaints.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No Complaints Found</h3>
            <p className="text-gray-500">
              No complaints match your current filter criteria
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FacultyComplaintsList;
