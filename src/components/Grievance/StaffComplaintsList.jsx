import { useState, useEffect, useRef } from "react";
import { Search, Filter, Clock, User, Calendar, AlertTriangle } from "lucide-react";

// ----------- Button -----------
const Button = ({ children, className = "", size = "md", ...props }) => {
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
  };
  return (
    <button
      className={`bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ----------- Badge -----------
const Badge = ({ children, className = "" }) => (
  <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${className}`}>
    {children}
  </span>
);

// ----------- Input -----------
const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
    {...props}
  />
);

// ----------- Card -----------
const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-sm border rounded-lg ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 md:p-6 ${className}`}>{children}</div>
);

// ----------- Select Dropdown System -----------
const Select = ({ value, onValueChange, children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const context = { open, setOpen, value, onValueChange };
  return (
    <div ref={ref} className="relative w-full">
      {typeof children === "function" ? children(context) : children(context)}
    </div>
  );
};

const SelectTrigger = ({ onClick, children, className = "" }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
  >
    {children}
  </button>
);

const SelectValue = ({ placeholder, value }) => (
  <span className="block truncate text-gray-700">{value || placeholder}</span>
);

const SelectContent = ({ open, children }) => {
  if (!open) return null;
  return (
    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
      {children}
    </div>
  );
};

const SelectItem = ({ value, children, onSelect }) => (
  <div
    onClick={() => onSelect(value)}
    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
  >
    {children}
  </div>
);

// ----------- Component -----------
const StaffComplaintsList = ({ complaints, onSelectComplaint }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredComplaints = complaints.filter((complaint) => {
    const matchesSearch =
      complaint.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.studentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || complaint.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || complaint.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">
        {/* Search Box */}
        <div className="flex-1 min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search by ID, subject, or student name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-2.5 text-sm rounded-md border-gray-300 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Status Filter */}
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          {({ open, setOpen, value, onValueChange }) => (
            <div className="min-w-[180px]">
              <SelectTrigger onClick={() => setOpen(!open)}>
                <SelectValue value={value} placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent open={open}>
                <SelectItem value="all" onSelect={onValueChange}>All Status</SelectItem>
                <SelectItem value="Pending" onSelect={onValueChange}>Pending</SelectItem>
                <SelectItem value="In Progress" onSelect={onValueChange}>In Progress</SelectItem>
                <SelectItem value="Resolved" onSelect={onValueChange}>Resolved</SelectItem>
              </SelectContent>
            </div>
          )}
        </Select>

        {/* Priority Filter */}
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          {({ open, setOpen, value, onValueChange }) => (
            <div className="min-w-[180px]">
              <SelectTrigger onClick={() => setOpen(!open)}>
                <SelectValue value={value} placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent open={open}>
                <SelectItem value="all" onSelect={onValueChange}>All Priority</SelectItem>
                <SelectItem value="High" onSelect={onValueChange}>High</SelectItem>
                <SelectItem value="Medium" onSelect={onValueChange}>Medium</SelectItem>
                <SelectItem value="Low" onSelect={onValueChange}>Low</SelectItem>
              </SelectContent>
            </div>
          )}
        </Select>
      </div>


      {/* Complaints List */}
      <div className="space-y-4">
        {filteredComplaints.map((complaint) => (
          <Card key={complaint.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Badge className="font-mono bg-gray-100 text-gray-800">
                    {complaint.id}
                  </Badge>
                  <Badge className={getStatusColor(complaint.status)}>
                    {complaint.status}
                  </Badge>
                  <Badge className={getPriorityColor(complaint.priority)}>
                    {complaint.priority}
                  </Badge>
                  {complaint.status === "Pending" && (
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  )}
                </div>

                <Button size="sm" onClick={() => onSelectComplaint(complaint.id)}>
                  Handle Complaint
                </Button>
              </div>

              <h3 className="text-lg font-semibold mb-2">{complaint.subject}</h3>
              <p className="text-sm text-gray-600 mb-3">Category: {complaint.category}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>Student: {complaint.studentName} ({complaint.studentId})</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Assigned: {complaint.assignedDate}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>Due: {complaint.dueDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredComplaints.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No Complaints Found</h3>
              <p className="text-gray-500">
                {searchTerm || statusFilter !== "all" || priorityFilter !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "No complaints have been assigned to you yet"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default StaffComplaintsList;
