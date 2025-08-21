import { useState } from "react";
import { Search, Users, Mail, Phone, Star, TrendingUp } from "lucide-react";

// Button component
const Button = ({ children, size = "md", variant = "default", className = "", ...props }) => {
    const base =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    };
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50"
    };
    return (
        <button
            className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

// Input component
const Input = ({ className = "", ...props }) => (
    <input
        className={`block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition px-3 py-2 text-sm bg-white placeholder-gray-400 ${className}`}
        {...props}
    />
);

// Card components
const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-xl shadow border border-gray-100 ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
    <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
    <h3 className={`font-semibold text-gray-900 ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
    <p className={`text-gray-500 text-sm mt-1 ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
    <div className={`px-6 pb-6 pt-2 ${className}`}>{children}</div>
);

// Badge component
const Badge = ({ children, className = "" }) => (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${className}`}>
        {children}
    </span>
);

// Avatar components
const Avatar = ({ children, className = "" }) => (
    <span className={`inline-flex items-center justify-center rounded-full bg-gray-100 ${className}`}>
        {children}
    </span>
);

const AvatarFallback = ({ children, className = "" }) => (
    <span className={`w-full h-full flex items-center justify-center rounded-full font-bold ${className}`}>
        {children}
    </span>
);

const AdminStaffManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleViewDetails = (staffId) => {
    alert(`Viewing details for ${staffId}`);
  };

  const handleAssignComplaint = (staffId) => {
    alert(`Assigning complaint to ${staffId}`);
  };

  const handlePerformanceView = (staffId) => {
    alert(`Viewing performance analytics for ${staffId}`);
  };

  const staffMembers = [
    {
      id: "STAFF-001",
      name: "Dr. Smith",
      email: "dr.smith@gbu.ac.in",
      phone: "+91-9876543210",
      department: "Computer Science",
      role: "Assistant Professor",
      assignedComplaints: 5,
      resolvedComplaints: 23,
      avgResolutionTime: "2.1 days",
      rating: 4.2,
      status: "Active"
    },
    {
      id: "STAFF-002", 
      name: "Dr. Johnson",
      email: "dr.johnson@gbu.ac.in",
      phone: "+91-9876543211",
      department: "Mechanical",
      role: "Associate Professor",
      assignedComplaints: 3,
      resolvedComplaints: 18,
      avgResolutionTime: "1.8 days",
      rating: 4.5,
      status: "Active"
    },
    {
      id: "STAFF-003",
      name: "Prof. Williams", 
      email: "prof.williams@gbu.ac.in",
      phone: "+91-9876543212",
      department: "Civil",
      role: "Professor",
      assignedComplaints: 7,
      resolvedComplaints: 31,
      avgResolutionTime: "2.5 days",
      rating: 4.0,
      status: "Active"
    },
    {
      id: "STAFF-004",
      name: "IT Support Team",
      email: "it.support@gbu.ac.in", 
      phone: "+91-9876543213",
      department: "IT Services",
      role: "Technical Support",
      assignedComplaints: 8,
      resolvedComplaints: 45,
      avgResolutionTime: "1.2 days",
      rating: 4.7,
      status: "Active"
    }
  ];

  const filteredStaff = staffMembers.filter(staff =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getPerformanceColor = (rating) => {
    if (rating >= 4.5) return "bg-green-100 text-green-800";
    if (rating >= 4.0) return "bg-blue-100 text-blue-800";
    if (rating >= 3.5) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search staff members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Staff Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredStaff.map((staff) => (
          <Card key={staff.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {getInitials(staff.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{staff.name}</CardTitle>
                    <CardDescription>{staff.role} • {staff.department}</CardDescription>
                  </div>
                </div>
                <Badge className={getPerformanceColor(staff.rating)}>
                  {staff.rating} ⭐
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>{staff.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{staff.phone}</span>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{staff.assignedComplaints}</p>
                  <p className="text-xs text-gray-500">Active</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{staff.resolvedComplaints}</p>
                  <p className="text-xs text-gray-500">Resolved</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-orange-600">{staff.avgResolutionTime}</p>
                  <p className="text-xs text-gray-500">Avg Time</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1" onClick={() => handleViewDetails(staff.id)}>
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="flex-1" onClick={() => handleAssignComplaint(staff.id)}>
                  Assign Complaint
                </Button>
                <Button size="sm" variant="outline" onClick={() => handlePerformanceView(staff.id)}>
                  <TrendingUp className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Staff Performance Summary</CardTitle>
          <CardDescription>Overall performance metrics across all staff members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-2">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold">{staffMembers.length}</p>
              <p className="text-sm text-gray-600">Total Staff</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-2">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold">4.4</p>
              <p className="text-sm text-gray-600">Avg Rating</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-yellow-100 rounded-full w-fit mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold">94%</p>
              <p className="text-sm text-gray-600">Resolution Rate</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-2">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold">2.1</p>
              <p className="text-sm text-gray-600">Avg Days</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminStaffManagement;
