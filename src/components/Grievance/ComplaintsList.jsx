import React, { useState } from "react";
import {
  Search,
  Filter,
  ArrowUp,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Phone,
  Mail,
  Calendar,
  Eye,
} from "lucide-react";
import { useToast } from "../../hooks/use-toast";

// ----- UI Components -----

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

const Badge = ({ children, className = "", variant }) => {
  const base = "inline-block text-xs font-semibold px-2 py-1 rounded-full";
  const variantStyles = {
    outline: "border border-gray-300 text-gray-700 bg-white",
    solid: "bg-gray-100 text-gray-800",
  };
  return <span className={`${base} ${variantStyles[variant] || variantStyles.solid} ${className}`}>{children}</span>;
};

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
    {...props}
  />
);

// ----- Select Components -----

const Select = ({ value, onValueChange, children }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!open);
  const closeDropdown = () => setOpen(false);

  return (
    <div className="relative inline-block">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              value,
              onClick: toggleDropdown,
              open,
              onValueChange,
              closeDropdown,
            })
          : child
      )}
    </div>
  );
};

const SelectTrigger = ({ children, className = "", onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white ${className}`}
  >
    {children}
  </button>
);

const SelectValue = ({ placeholder }) => (
  <span className="text-gray-700">{placeholder}</span>
);

const SelectContent = ({ children, open }) =>
  open ? (
    <div className="absolute left-0 mt-2 border border-gray-200 rounded-md shadow-lg bg-white w-48 z-20 transition-all duration-150 ease-in-out">
      {children}
    </div>
  ) : null;

const SelectItem = ({ value, children, onValueChange, closeDropdown }) => (
  <div
    className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
    onClick={() => {
      onValueChange(value);
      closeDropdown?.();
    }}
  >
    {children}
  </div>
);

// ----- Card Components -----

const Card = ({ children, className = "" }) => (
  <div className={`bg-white border rounded-lg shadow-sm ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

// ----- ComplaintsList Component -----

const ComplaintsList = ({ complaints, onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedComplaint, setExpandedComplaint] = useState(null);
  const { toast } = useToast();

  const mockStaffDetails = {
    "Dr. Smith": {
      phone: "+91-9876543210",
      email: "dr.smith@gbu.ac.in",
      department: "Computer Science",
    },
    "IT Support Team": {
      phone: "+91-9876543211",
      email: "it.support@gbu.ac.in",
      department: "IT Services",
    },
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "In Progress":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "Resolved":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "Escalated":
        return <ArrowUp className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      case "Escalated":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredComplaints = complaints.filter((complaint) => {
    const matchesSearch =
      complaint.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || complaint.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleEscalate = (complaintId) => {
    toast({
      title: "Escalation Requested",
      description: `Complaint ${complaintId} has been escalated to the next level`,
    });
    console.log(`Escalating complaint ${complaintId}`);
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full ">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search complaints by ID or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder={statusFilter === "all" ? "Filter by status" : statusFilter} />
          </SelectTrigger>
          <SelectContent open>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Resolved">Resolved</SelectItem>
            <SelectItem value="Escalated">Escalated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Complaints List */}
      <div className="space-y-4">
        {filteredComplaints.map((complaint) => (
          <Card key={complaint.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="font-mono">
                    {complaint.id}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(complaint.status)}
                    <Badge className={getStatusColor(complaint.status)}>
                      {complaint.status}
                    </Badge>
                  </div>
                  <Badge variant="outline">{complaint.priority}</Badge>
                </div>

                <div className="flex flex-wrap gap-2">
                  {complaint.status !== "Escalated" && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEscalate(complaint.id)}
                    >
                      <ArrowUp className="w-4 h-4 mr-1" />
                      Escalate
                    </Button>
                  )}
                  {onViewDetails && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onViewDetails(complaint.id)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      setExpandedComplaint(
                        expandedComplaint === complaint.id ? null : complaint.id
                      )
                    }
                  >
                    {expandedComplaint === complaint.id ? "Less" : "More"} Details
                  </Button>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">{complaint.subject}</h3>
              <p className="text-sm text-gray-600 mb-3">
                Category: {complaint.category}
              </p>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>Assigned to: {complaint.assignedTo}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Date: {complaint.assignedDate}</span>
                </div>
              </div>

              {expandedComplaint === complaint.id && (
                <div className="mt-4 pt-4 border-t space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Staff Contact Details</h4>
                    {mockStaffDetails[complaint.assignedTo] && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-blue-500" />
                          <span>
                            {mockStaffDetails[complaint.assignedTo].phone}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-blue-500" />
                          <span>
                            {mockStaffDetails[complaint.assignedTo].email}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-blue-500" />
                          <span>
                            {mockStaffDetails[complaint.assignedTo].department}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Timeline</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>
                          Complaint submitted - {complaint.assignedDate}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>
                          Assigned to {complaint.assignedTo} -{" "}
                          {complaint.assignedDate}
                        </span>
                      </div>
                      {complaint.status === "In Progress" && (
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>Under review - Current</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        {filteredComplaints.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                No Complaints Found
              </h3>
              <p className="text-gray-500">
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "You haven't submitted any complaints yet"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ComplaintsList;
