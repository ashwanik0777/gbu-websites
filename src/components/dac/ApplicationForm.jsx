import React, { useState } from 'react';

const Dialog = ({ open, onOpenChange, children }) => {
  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        {children}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
      </div>
    </div>
  ) : null;
};

const DialogTrigger = ({ onClick, children }) => (
  <div onClick={onClick}>{children}</div>
);

const DialogContent = ({ children }) => <div>{children}</div>;

const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;

const DialogTitle = ({ children, className }) => (
  <h2 className={`text-xl font-bold ${className}`}>{children}</h2>
);

const Button = ({ children, className = '', ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-4 py-2 rounded-md font-medium focus:outline-none ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ ...props }) => (
  <input
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
);

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block mb-1 font-medium">
    {children}
  </label>
);

const Textarea = ({ ...props }) => (
  <textarea
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
);

const Select = ({ children, onValueChange }) => {
  return (
    <select
      onChange={(e) => onValueChange(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </select>
  );
};

const SelectTrigger = ({ children }) => children;
const SelectValue = ({ placeholder }) => (
  <option value="" disabled selected>
    {placeholder}
  </option>
);
const SelectContent = ({ children }) => children;
const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

import { toast } from "../../hooks/use-toast";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    enrollmentNumber: '',
    email: '',
    mobile: '',
    residentialStatus: '',
    department: '',
    school: '',
    year: '',
    motivation: '',
    techExpertise: '',
    cv: null,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: 'Application Submitted Successfully!',
      description: "We'll review your application and get back to you soon.",
    });
    setIsOpen(false);
    setFormData({
      name: '',
      enrollmentNumber: '',
      email: '',
      mobile: '',
      residentialStatus: '',
      department: '',
      school: '',
      year: '',
      motivation: '',
      techExpertise: '',
      cv: null,
    });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger onClick={() => setIsOpen(true)}>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
            Apply Now
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-blue-800">
              Join the DAC Team
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="enrollment">Enrollment Number *</Label>
                <Input
                  id="enrollment"
                  value={formData.enrollmentNumber}
                  onChange={(e) =>
                    handleInputChange('enrollmentNumber', e.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Residential Status *</Label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange('residentialStatus', value)
                  }
                >
                  <SelectValue placeholder="Select status" />
                  <SelectItem value="hosteller">Hosteller</SelectItem>
                  <SelectItem value="day-scholar">Day Scholar</SelectItem>
                </Select>
              </div>

              <div>
                <Label>School *</Label>
                <Select
                  onValueChange={(value) => handleInputChange('school', value)}
                >
                  <SelectValue placeholder="Select school" />
                  <SelectItem value="soict">School of ICT</SelectItem>
                  <SelectItem value="soet">
                    School of Engineering & Technology
                  </SelectItem>
                  <SelectItem value="som">School of Management</SelectItem>
                  <SelectItem value="sls">
                    School of Law & Legal Studies
                  </SelectItem>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Department *</Label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange('department', value)
                  }
                >
                  <SelectValue placeholder="Select department" />
                  <SelectItem value="cse">
                    Computer Science & Engineering
                  </SelectItem>
                  <SelectItem value="it">Information Technology</SelectItem>
                  <SelectItem value="ece">
                    Electronics & Communication
                  </SelectItem>
                  <SelectItem value="me">Mechanical Engineering</SelectItem>
                  <SelectItem value="civil">Civil Engineering</SelectItem>
                </Select>
              </div>

              <div>
                <Label>Academic Year *</Label>
                <Select
                  onValueChange={(value) => handleInputChange('year', value)}
                >
                  <SelectValue placeholder="Select year" />
                  <SelectItem value="1st">1st Year</SelectItem>
                  <SelectItem value="2nd">2nd Year</SelectItem>
                  <SelectItem value="3rd">3rd Year</SelectItem>
                  <SelectItem value="4th">4th Year</SelectItem>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="motivation">
                Why do you want to join DAC? *
              </Label>
              <Textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) =>
                  handleInputChange('motivation', e.target.value)
                }
                placeholder="Tell us about your motivation and what you hope to contribute..."
                rows={4}
                required
              />
            </div>

            <div>
              <Label htmlFor="tech">Tech Expertise (Optional)</Label>
              <Input
                id="tech"
                value={formData.techExpertise}
                onChange={(e) =>
                  handleInputChange('techExpertise', e.target.value)
                }
                placeholder="e.g., React, Python, UI/UX Design, Machine Learning..."
              />
            </div>

            <div>
              <Label htmlFor="cv">Upload CV (PDF/DOCX) *</Label>
              <Input
                id="cv"
                type="file"
                accept=".pdf,.docx"
                onChange={(e) => handleInputChange('cv', e.target.files[0])}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Submit Application
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ApplicationForm;
