import React, { useState, createContext, useContext } from "react";

// Button Component
const Button = ({ type = "button", className = "", children, ...props }) => (
    <button
        type={type}
        className={`px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...props}
    >
        {children}
    </button>
);

// Input Component
const Input = ({ className = "", ...props }) => (
    <input
        className={`block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${className}`}
        {...props}
    />
);

// Label Component
const Label = ({ htmlFor, className = "", children, ...props }) => (
    <label
        htmlFor={htmlFor}
        className={`block text-sm font-medium text-gray-700 ${className}`}
        {...props}
    >
        {children}
    </label>
);

// Textarea Component
const Textarea = ({ className = "", ...props }) => (
    <textarea
        className={`block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-y ${className}`}
        {...props}
    />
);

// Select Components

// Context to share open state
const SelectContext = createContext();

const Select = ({ value, onValueChange, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <SelectContext.Provider value={{ value, onValueChange, isOpen, toggle, close }}>
      <div className="relative w-full" {...props}>{children}</div>
    </SelectContext.Provider>
  );
};

const SelectTrigger = ({ children }) => {
  const { toggle } = useContext(SelectContext);
  return (
    <div
      tabIndex={0}
      onClick={toggle}
      className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded bg-white cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      {children}
    </div>
  );
};

const SelectValue = ({ placeholder }) => {
  const { value } = useContext(SelectContext);
  return (
    <span className="text-gray-700">
      {value ? value : <span className="text-gray-400">{placeholder}</span>}
    </span>
  );
};


const SelectContent = ({ children }) => {
  const { isOpen } = useContext(SelectContext);
  if (!isOpen) return null;
  return (
    <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10">
      {children}
    </div>
  );
};

const SelectItem = ({ value, children }) => {
  const { onValueChange, close } = useContext(SelectContext);
  return (
    <div
      className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm"
      onClick={() => {
        onValueChange(value);
        close();
      }}
    >
      {children}
    </div>
  );
};


// RadioGroup Components
const RadioGroup = ({ value, onValueChange, children, className = "" }) => (
    <div className={className} role="radiogroup">
        {React.Children.map(children, (child) =>
            React.cloneElement(child, {
                checked: child.props.value === value,
                onChange: () => onValueChange(child.props.value),
            })
        )}
    </div>
);

const RadioGroupItem = ({ value, id, checked, onChange }) => (
  <input
    type="radio"
    id={id}
    name="priority" // ✅ Fixed — same name groups them
    value={value}
    checked={checked}
    onChange={onChange}
    className="accent-blue-600 w-4 h-4"
  />
);


// Card Components
const Card = ({ className = "", children }) => (
    <div className={`bg-white border rounded-lg shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
    <div className="border-b px-6 py-4">{children}</div>
);

const CardTitle = ({ className = "", children }) => (
    <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
);

const CardDescription = ({ children }) => (
    <p className="text-sm text-gray-500">{children}</p>
);

const CardContent = ({ className = "", children }) => (
    <div className={`px-6 py-4 ${className}`}>{children}</div>
);
import { useToast } from "../../hooks/use-toast";
import { Calendar, MapPin, Phone, Mail, User, FileText, AlertTriangle } from "lucide-react";

/**
 * @param {{ userRole?: "student" | "faculty" | "staff" }} props
 */

const SubmitComplaintForm = ({ userRole = "student" }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    id: "",
    email: "",
    phone: "",
    department: "",
    // Student-specific fields
    course: "",
    semester: "",
    year: "",
    // Faculty-specific fields
    designation: "",
    // Complaint Details
    category: "",
    subject: "",
    description: "",
    incidentDate: "",
    location: "",
    priority: "Medium",
    // Previous attempts
    previousAttempts: "",
    desiredResolution: "",
    // Supporting Documents
    documents: null,
  });

  // Category options based on user role
  const getCategoryOptions = () => {
    if (userRole === "faculty") {
      return [
        "Administrative Delays",
        "Academic Infrastructure", 
        "Research Support",
        "HR & Leave Management"
      ];
    } else if (userRole === "staff") {
      return [
        "Administrative Issues",
        "Workplace Environment",
        "HR & Leave Management",
        "Infrastructure"
      ];
    } else {
      return [
        "Academic Issues",
        "Administrative Issues", 
        "Hostel/Accommodation",
        "Fee & Financial",
        "Examination",
        "Library",
        "Transportation",
        "Ragging/Harassment",
        "Infrastructure",
        "Other"
      ];
    }
  };

  const departments = [
    "Computer Science & Engineering",
    "Electronics & Communication",
    "Mechanical Engineering", 
    "Civil Engineering",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Commerce",
    "Management",
    "Law"
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      documents: e.target.files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.id || !formData.email || !formData.category || !formData.subject || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    // Generate complaint ID based on user role
    const rolePrefix = userRole === "faculty" ? "FAC" : userRole === "staff" ? "STF" : "STU";
    const complaintId = `${rolePrefix}-${Date.now()}`;

    toast({
      title: "Complaint Submitted Successfully!",
      description: `Your complaint has been submitted with ID: ${complaintId}. You will receive email updates on the progress.`,
    });

    // Reset form
    setFormData({
      name: "",
      id: "",
      email: "",
      phone: "",
      department: "",
      course: "",
      semester: "",
      year: "",
      designation: "",
      category: "",
      subject: "",
      description: "",
      incidentDate: "",
      location: "",
      priority: "Medium",
      previousAttempts: "",
      desiredResolution: "",
      documents: null,
    });
  };

  const getFormTitle = () => {
    switch (userRole) {
      case "faculty": return "Submit Faculty Grievance";
      case "staff": return "Submit Staff Grievance";
      default: return "Submit Student Grievance";
    }
  };

  const getIdLabel = () => {
    switch (userRole) {
      case "faculty": return "Faculty ID";
      case "staff": return "Staff ID";
      default: return "Student ID";
    }
  };

  return (
   <form onSubmit={handleSubmit} className="space-y-10 p-6 md:p-10 bg-gray-50 text-gray-800">
  <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-xl font-semibold text-blue-700">
        <User className="w-5 h-5" />
        Personal Information
      </CardTitle>
      <CardDescription className="text-sm text-gray-500">
        Please provide your contact details
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="John Doe"
            required
            className="focus:ring-2 focus:ring-blue-500 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="id">{getIdLabel()} <span className="text-red-500">*</span></Label>
          <Input
            id="id"
            value={formData.id}
            onChange={(e) => handleInputChange("id", e.target.value)}
            placeholder={`Enter your ${getIdLabel().toLowerCase()}`}
            required
            className="focus:ring-2 focus:ring-blue-500 rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="you@example.com"
            required
            className="focus:ring-2 focus:ring-blue-500 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+91-XXXXXXXXXX"
            className="focus:ring-2 focus:ring-blue-500 rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="department">Department <span className="text-red-500">*</span></Label>
          <Select value={formData.department} onValueChange={(value) => handleInputChange("department", value)}>
            <SelectTrigger className="w-full focus:ring-2 focus:ring-blue-500 rounded-lg border-gray-300">
              <SelectValue placeholder="Select your department" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-md rounded-lg">
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>{dept}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {userRole === "faculty" && (
          <div className="space-y-2">
            <Label htmlFor="designation">Designation</Label>
            <Select value={formData.designation} onValueChange={(value) => handleInputChange("designation", value)}>
              <SelectTrigger className="w-full focus:ring-2 focus:ring-blue-500 rounded-lg border-gray-300">
                <SelectValue placeholder="Select your designation" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-md rounded-lg">
                {["Professor", "Associate Professor", "Assistant Professor", "Lecturer", "Research Fellow"].map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {userRole === "student" && (
          <div className="space-y-2">
            <Label htmlFor="course">Course <span className="text-red-500">*</span></Label>
            <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
              <SelectTrigger className="w-full focus:ring-2 focus:ring-blue-500 rounded-lg border-gray-300">
                <SelectValue placeholder="Select your course" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-md rounded-lg">
                {["B.Tech", "M.Tech", "PhD", "MBA", "BBA", "B.Com", "M.Com", "B.A", "M.A", "B.Sc", "M.Sc"].map((course) => (
                  <SelectItem key={course} value={course}>{course}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {userRole === "student" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="semester">Semester</Label>
            <Select value={formData.semester} onValueChange={(value) => handleInputChange("semester", value)}>
              <SelectTrigger className="w-full focus:ring-2 focus:ring-blue-500 rounded-lg border-gray-300">
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-md rounded-lg">
                {[1,2,3,4,5,6,7,8].map((sem) => (
                  <SelectItem key={sem} value={sem.toString()}>Semester {sem}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="year">Academic Year</Label>
            <Select value={formData.year} onValueChange={(value) => handleInputChange("year", value)}>
              <SelectTrigger className="w-full focus:ring-2 focus:ring-blue-500 rounded-lg border-gray-300">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-md rounded-lg">
                {["2024-25", "2023-24", "2022-23", "2021-22"].map((year) => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </CardContent>
  </Card>

  <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-xl font-semibold text-blue-700">
        <FileText className="w-5 h-5" />
        Complaint Details
      </CardTitle>
      <CardDescription className="text-sm text-gray-500">
        Provide details about your grievance
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="category">Complaint Category <span className="text-red-500">*</span></Label>
          <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
            <SelectTrigger className="w-full focus:ring-2 focus:ring-blue-500 rounded-lg border-gray-300">
              <SelectValue placeholder="Select complaint category" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-md rounded-lg">
              {getCategoryOptions().map((category) => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="priority">Priority Level</Label>
          <RadioGroup
            value={formData.priority}
            onValueChange={(value) => handleInputChange("priority", value)}
            className="flex space-x-4 mt-2"
          >
            {["Low", "Medium", "High"].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <RadioGroupItem value={level} id={level} />
                <Label htmlFor={level}>{level}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject/Title <span className="text-red-500">*</span></Label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={(e) => handleInputChange("subject", e.target.value)}
          placeholder="Brief title of your complaint"
          required
          className="focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Detailed Description <span className="text-red-500">*</span></Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Explain your complaint in detail..."
          className="min-h-[100px] focus:ring-2 focus:ring-blue-500 rounded-lg"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="incidentDate" className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Date of Incident
          </Label>
          <Input
            id="incidentDate"
            type="date"
            value={formData.incidentDate}
            onChange={(e) => handleInputChange("incidentDate", e.target.value)}
            className="focus:ring-2 focus:ring-blue-500 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location" className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Location
          </Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            placeholder="Where did this incident occur?"
            className="focus:ring-2 focus:ring-blue-500 rounded-lg"
          />
        </div>
      </div>
    </CardContent>
  </Card>

  <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-blue-700">Additional Information</CardTitle>
      <CardDescription className="text-sm text-gray-500">
        Help us understand your situation better
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="previousAttempts">Previous Attempts to Resolve</Label>
        <Textarea
          id="previousAttempts"
          value={formData.previousAttempts}
          onChange={(e) => handleInputChange("previousAttempts", e.target.value)}
          placeholder="Have you tried to resolve this before?"
          className="min-h-[80px] focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="desiredResolution">Desired Resolution</Label>
        <Textarea
          id="desiredResolution"
          value={formData.desiredResolution}
          onChange={(e) => handleInputChange("desiredResolution", e.target.value)}
          placeholder="What result do you expect?"
          className="min-h-[80px] focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="documents">Supporting Documents</Label>
        <Input
          id="documents"
          type="file"
          onChange={handleFileChange}
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <p className="text-sm text-gray-500">
          You can upload multiple files (PDF, Images, Docs). Max 10MB per file.
        </p>
      </div>
    </CardContent>
  </Card>

  <Card className="border-orange-200 bg-orange-50 rounded-xl shadow-sm">
    <CardContent className="pt-6">
      <div className="flex items-start space-x-2">
        <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
        <div className="text-sm text-orange-800">
          <p className="font-medium mb-2">Important Notice:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>All complaints are acknowledged within 24 hours</li>
            <li>You will receive progress updates via email</li>
            <li>Auto-escalation after 48 hours if no action is taken</li>
            <li>False complaints may result in disciplinary action</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>

  <Button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
  >
    Submit Complaint
  </Button>
</form>


  );
};

export default SubmitComplaintForm;
