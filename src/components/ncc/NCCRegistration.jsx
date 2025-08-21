 import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Shield, Award } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

// Minimal UI components with motion wrappers
const Card = ({ children, className = "" }) => (
  <motion.div
    initial="hidden"
  animate="visible"
  variants={fadeInUp}
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
    className={`bg-white rounded-xl shadow p-4 ${className}`}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className = "", ...props }) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className={`px-4 py-2 rounded font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-base ${className}`}
    {...props}
  />
);

const Label = ({ children, htmlFor, className = "" }) => (
  <label htmlFor={htmlFor} className={`block font-medium text-gray-700 ${className}`}>
    {children}
  </label>
);

const Select = ({ value, onValueChange, placeholder, children }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (v) => {
    onValueChange(v);
    setOpen(false);
  };

  const selectedLabel =
    React.Children.toArray(children).find(
      (child) => child.props.value === value
    )?.props.children || placeholder;

  return (
    <div className="relative ">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded bg-white text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <span className={value ? "" : "text-gray-400"}>{selectedLabel}</span>
        <svg
          className="h-4 w-4 text-gray-400 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { onSelect: handleSelect })
          )}
        </div>
      )}
    </div>
  );
};

const SelectItem = ({ value, children, onSelect }) => (
  <div
    className="px-4 py-2 cursor-pointer hover:bg-blue-50"
    onClick={() => onSelect(value)}
  >
    {children}
  </div>
);

const NCCRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    program: "",
    year: "",
    rollNo: "",
    gender: "",
    height: "",
    weight: "",
    wingPreference: "",
    aadhaar: null,
    fitnessCert: null,
    photo: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registration Successful!",
        description:
          "Your NCC cadet application has been submitted. You will be contacted for the selection process.",
        duration: 5000,
      });

      setFormData({
        fullName: "",
        program: "",
        year: "",
        rollNo: "",
        gender: "",
        height: "",
        weight: "",
        wingPreference: "",
        aadhaar: null,
        fitnessCert: null,
        photo: null,
      });
    }, 2000);
  };

  const benefits = [
    "Character development and discipline",
    "Leadership training and opportunities",
    "Adventure activities and camps",
    "National integration experience",
    "Career opportunities in Armed Forces",
    "NCC certificates (A, B, C grades)",
    "Scholarship opportunities",
    "Physical fitness development",
  ];

  const requirements = [
    "Must be a regular student of the university",
    "Age between 17-26 years",
    "Medically fit for NCC activities",
    "Minimum 75% attendance mandatory",
    "Complete 3 years of NCC training",
    "Participate in annual training camps",
  ];

  return (
    <SearchableWrapper>
    <div className="space-y-8 px-4 sm:px-6 lg:px-20 mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join NCC as a Cadet
        </h2>
        <p className="text-lg text-gray-600">
          Build character, discipline, and leadership through military training
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-900" />
                <span>Cadet Registration Form</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rollNo">Roll Number *</Label>
                    <Input
                      id="rollNo"
                      type="text"
                      placeholder="Enter your roll number"
                      value={formData.rollNo}
                      onChange={(e) =>
                        handleInputChange("rollNo", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                {/* Academic */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Program *</Label>
                    <Select
                      value={formData.program}
                      onValueChange={(value) =>
                        handleInputChange("program", value)
                      }
                      placeholder="Select your program"
                    >
                      <SelectItem value="btech">B.Tech</SelectItem>
                      <SelectItem value="mtech">M.Tech</SelectItem>
                      <SelectItem value="ba">B.A.</SelectItem>
                      <SelectItem value="ma">M.A.</SelectItem>
                      <SelectItem value="bcom">B.Com</SelectItem>
                      <SelectItem value="mcom">M.Com</SelectItem>
                      <SelectItem value="bsc">B.Sc</SelectItem>
                      <SelectItem value="msc">M.Sc</SelectItem>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Year *</Label>
                    <Select
                      value={formData.year}
                      onValueChange={(value) =>
                        handleInputChange("year", value)
                      }
                      placeholder="Select your year"
                    >
                      <SelectItem value="first">First Year</SelectItem>
                      <SelectItem value="second">Second Year</SelectItem>
                      <SelectItem value="third">Third Year</SelectItem>
                      <SelectItem value="fourth">Fourth Year</SelectItem>
                      <SelectItem value="final">Final Year</SelectItem>
                    </Select>
                  </div>
                </div>

                {/* Physical */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Gender *</Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) =>
                        handleInputChange("gender", value)
                      }
                      placeholder="Select gender"
                    >
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Height (cm) *</Label>
                    <Input
                      type="number"
                      placeholder="Height in cm"
                      value={formData.height}
                      onChange={(e) =>
                        handleInputChange("height", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Weight (kg) *</Label>
                    <Input
                      type="number"
                      placeholder="Weight in kg"
                      value={formData.weight}
                      onChange={(e) =>
                        handleInputChange("weight", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                {/* Wing Preference */}
                <div className="space-y-2">
                  <Label>Wing Preference *</Label>
                  <Select
                    value={formData.wingPreference}
                    onValueChange={(value) =>
                      handleInputChange("wingPreference", value)
                    }
                    placeholder="Select preferred wing"
                  >
                    <SelectItem value="army">Army Wing</SelectItem>
                    <SelectItem value="navy">Naval Wing</SelectItem>
                    <SelectItem value="airforce">Air Force Wing</SelectItem>
                  </Select>
                  <p className="text-sm text-gray-600">
                    Note: Final wing allocation depends on availability and selection criteria
                  </p>
                </div>

                {/* File Uploads */}
                <div className="grid md:grid-cols-3 gap-4">
                  {["aadhaar", "fitnessCert", "photo"].map((field) => (
                    <div key={field} className="space-y-2">
                      <Label>{field === "aadhaar"
                        ? "Aadhaar Card *"
                        : field === "fitnessCert"
                        ? "Fitness Certificate *"
                        : "Passport Photo *"}</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                        <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <input
                          type="file"
                          accept={field === "photo" ? "image/*" : ".pdf,.jpg,.jpeg,.png"}
                          onChange={(e) =>
                            handleFileUpload(field, e.target.files[0])
                          }
                          className="hidden"
                          id={field}
                          required
                        />
                        <label htmlFor={field} className="cursor-pointer">
                          <span className="text-sm text-gray-600">
                            {formData[field]
                              ? formData[field].name
                              : `Upload ${
                                  field === "aadhaar"
                                    ? "Aadhaar"
                                    : field === "fitnessCert"
                                    ? "Certificate"
                                    : "Photo"
                                }`}
                          </span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                NCC Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-orange-600">Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((r, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{r}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default NCCRegistration;
