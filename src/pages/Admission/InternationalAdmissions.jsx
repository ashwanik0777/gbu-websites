
import React,{ useState }from 'react';

import {
  Globe,
  Users,
  FileText,
  CreditCard,
  Plane,
  Home,
  GraduationCap,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Workflow,
  Headphones,
  DollarSign
} from 'lucide-react';
import StatsCard from '../../components/StatsCard';
import ButtonGroup from "../../components/TabsData";
import HeroBanner from '../../components/HeroBanner';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow bg-white border-gray-300 ${className || ""}`}>{children}</div>
);
const CardHeader = ({ children }) => <div className="p-4 border-b border-gray-300">{children}</div>;
const CardTitle = ({ children, className }) => (
  <h3 className={`text-lg font-semibold ${className || ""}`}>{children}</h3>
);
const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className || ""}`}>{children}</div>
);

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    outline: "border border-gray-300 text-gray-700 bg-white",
    secondary: "bg-gray-200 text-gray-700",
    default: "bg-blue-600 text-white"
  };
  return <span className={`text-xs px-2 py-1 rounded ${variants[variant]}`}>{children}</span>;
};

const Button = ({ children, size = "md", variant = "default", className }) => {
  const sizes = {
    lg: "px-6 py-2 text-lg",
    md: "px-4 py-2 text-base",
    sm: "px-3 py-1 text-sm"
  };
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  };
  return (
    <button className={`${sizes[size]} ${variants[variant]} rounded ${className || ""}`}>
      {children}
    </button>
  );
};

 const Tabs = ({ value, onValueChange, children, className = '', ...props }) => {
   // Pass value and onValueChange via context
   const [active, setActive] = React.useState(value);
   React.useEffect(() => setActive(value), [value]);
   return (
     <TabsContext.Provider value={{ active, setActive: onValueChange }}>
       <div className={className} {...props}>{children}</div>
     </TabsContext.Provider>
   );
 };
 
 const TabsContext = React.createContext();
 
 const TabsList = ({ children, className = '', ...props }) => (
   <div className={className} {...props}>{children}</div>
 );
 
 const TabsTrigger = ({ value, children, className = '', ...props }) => {
   const ctx = React.useContext(TabsContext);
   const isActive = ctx.active === value;
   return (
     <button
       className={`transition-colors pt-0.5 pb-0.5 ${isActive ? 'border-gray-600 text-white bg-gray-900' : ' bg-gray-100 text-gray-700 hover:bg-gray-200'} font-medium focus:outline-none ${className}`}
       onClick={() => ctx.setActive(value)}
       type="button"
       {...props}
     >
       {children}
     </button>
   );
 };
 
 const TabsContent = ({ value, children, ...props }) => {
   const ctx = React.useContext(TabsContext);
   if (ctx.active !== value) return null;
   return <div {...props}>{children}</div>;
 };
 

// Replace with real Lucide icons or your own
const Icon = (name, className = "w-5 h-5") => <div className={className}>{name}</div>;
const icons = {
  Globe: (props) => Icon("🌐", props.className),
  Users: (props) => Icon("👥", props.className),
  FileText: (props) => Icon("📄", props.className),
  CreditCard: (props) => Icon("💳", props.className),
  Plane: (props) => Icon("✈️", props.className),
  Home: (props) => Icon("🏠", props.className),
  GraduationCap: (props) => Icon("🎓", props.className),
  Clock: (props) => Icon("🕒", props.className),
  CheckCircle: (props) => Icon("✅", props.className),
  AlertCircle: (props) => Icon("⚠️", props.className),
  Phone: (props) => Icon("📞", props.className),
  Mail: (props) => Icon("✉️", props.className)
};

const InternationalAdmissions = () => {
   const [activeTab, setActiveTab] = useState('eligibility');
  const eligibilityRequirements = [
    {
      level: "Undergraduate",
      academic: "12th grade equivalent with 70% or above",
      english: "IELTS 6.0 or TOEFL 80 or equivalent",
      additional: "SAT/ACT scores (optional but preferred)",
      documents: ["Academic transcripts", "English proficiency certificate", "Passport copy", "Statement of Purpose"]
    },
    {
      level: "Postgraduate",
      academic: "Bachelor's degree with 60% or above",
      english: "IELTS 6.5 or TOEFL 90 or equivalent",
      additional: "GRE/GMAT scores (for some programs)",
      documents: ["Degree certificates", "Transcripts", "English proficiency", "Research proposal (if applicable)"]
    },
    {
      level: "Doctoral",
      academic: "Master's degree with 60% or above",
      english: "IELTS 7.0 or TOEFL 100 or equivalent",
      additional: "Research experience preferred",
      documents: ["All academic records", "Research proposal", "Publications (if any)", "Recommendation letters"]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Online Application",
      description: "Submit online application with required documents",
      timeline: "2-3 weeks before deadline",
      icon: FileText
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Verification of academic credentials and English proficiency",
      timeline: "1-2 weeks",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Interview (if required)",
      description: "Online interview for selected programs",
      timeline: "1 week",
      icon: Users
    },
    {
      step: 4,
      title: "Admission Decision",
      description: "Receive admission offer letter",
      timeline: "2-3 weeks",
      icon: GraduationCap
    },
    {
      step: 5,
      title: "Visa Application",
      description: "Apply for student visa with admission letter",
      timeline: "4-8 weeks",
      icon: Plane
    },
    {
      step: 6,
      title: "Arrival & Orientation",
      description: "Arrive in India and attend orientation program",
      timeline: "1 week before classes",
      icon: Home
    }
  ];

  const feeStructure = [
    {
      program: "Undergraduate Programs",
      tuitionFee: "$3,000 - $6,000",
      accommodation: "$1,200 - $2,000",
      living: "$2,000 - $3,000",
      total: "$6,200 - $11,000"
    },
    {
      program: "Postgraduate Programs",
      tuitionFee: "$4,000 - $8,000",
      accommodation: "$1,200 - $2,000",
      living: "$2,000 - $3,000",
      total: "$7,200 - $13,000"
    },
    {
      program: "Doctoral Programs",
      tuitionFee: "$2,000 - $4,000",
      accommodation: "$1,200 - $2,000",
      living: "$2,000 - $3,000",
      total: "$5,200 - $9,000"
    }
  ];

  const supportServices = [
    {
      service: "Visa Assistance",
      description: "Complete guidance for student visa application",
      icon: FileText
    },
    {
      service: "Airport Pickup",
      description: "Complimentary pickup service for new students",
      icon: Plane
    },
    {
      service: "Accommodation",
      description: "On-campus hostel and off-campus housing options",
      icon: Home
    },
    {
      service: "Orientation Program",
      description: "Comprehensive orientation covering academics and cultural aspects",
      icon: Users
    },
    {
      service: "Academic Support",
      description: "Tutoring and academic counseling services",
      icon: GraduationCap
    },
    {
      service: "Cultural Integration",
      description: "Programs to help international students adapt to Indian culture",
      icon: Globe
    }
  ];

  const scholarships = [
    {
      name: "International Merit Scholarship",
      amount: "25% - 50% tuition fee waiver",
      eligibility: "Based on academic excellence",
      duration: "Throughout the program"
    },
    {
      name: "Developing Countries Scholarship",
      amount: "Up to 75% tuition fee waiver",
      eligibility: "Students from least developed countries",
      duration: "Renewable annually"
    },
    {
      name: "Research Scholarship",
      amount: "Full tuition + stipend",
      eligibility: "PhD students with research projects",
      duration: "3-5 years"
    }
  ];

  const contactInfo = [
    {
      department: "International Admissions Office",
      email: "international@university.edu",
      phone: "+91-11-2345-6789",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM IST"
    },
    {
      department: "Student Services",
      email: "studentservices@university.edu",
      phone: "+91-11-2345-6799",
      hours: "Mon-Sat: 8:00 AM - 8:00 PM IST"
    }
  ];
const statsData = [
  {
    icon: Globe,
    numberText: "50+",
    title: "Countries",
    iconColor: "#2563eb",  // blue-600
  },
  {
    icon: Users,
    numberText: "2,500+",
    title: "International Students",
    iconColor: "#16a34a",  // green-600
  },
  {
    icon: GraduationCap,
    numberText: "100+",
    title: "Programs Available",
    iconColor: "#7e22ce",  // purple-600
  },
  {
    icon: CheckCircle,
    numberText: "95%",
    title: "Visa Success Rate",
    iconColor: "#ea580c",  // orange-600
  },
];const tabButtons = [
  { id: "eligibility", label: "Eligibility", icon: <GraduationCap size={18} /> },
  { id: "process", label: "Process", icon: <Workflow size={18} /> },
  { id: "fees", label: "Fees", icon: <DollarSign size={18} /> },
  { id: "support", label: "Support", icon: <Headphones size={18} /> },
  { id: "contact", label: "Contact", icon: <Mail size={18} /> },
];
  return (
    <SearchableWrapper>
    <div className="min-h-screen bg-gray-50">
<HeroBanner
        title="International Admissions"
        subtitle="Welcome students from around the world to join our diverse academic community"
        bgTheme={1}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Stats */}
      <StatsCard stats={statsData} />

        <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="eligibility" className="w-full">
  
 <ButtonGroup
   buttons={tabButtons}
  onClick={setActiveTab}
  activeButton={activeTab}
  size="lg"
  fullWidth={true}
  rounded="xl"
  animated={true}
  gap
  className="mb-8 flex-wrap justify-center"
/>

          <TabsContent value="eligibility" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility Requirements</h3>
              <p className="text-gray-600 mb-6">
                Our admission requirements are designed to ensure international students are well-prepared for academic success.
              </p>
            </div>

            <div className="space-y-6">
              {eligibilityRequirements.map((req, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{req.level}</span>
                      <Badge variant="outline">{req.level}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Academic Requirement</h4>
                          <p className="text-gray-600">{req.academic}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">English Proficiency</h4>
                          <p className="text-gray-600">{req.english}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Additional Requirements</h4>
                          <p className="text-gray-600">{req.additional}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Required Documents</h4>
                        <ul className="space-y-2">
                          {req.documents.map((doc, docIndex) => (
                            <li key={docIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-gray-600">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Process</h3>
              <p className="text-gray-600 mb-6">
                Follow these steps to complete your application for international admission.
              </p>
            </div>

            <div className="space-y-6">
              {applicationProcess.map((step, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500 border-solid">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">
                            Step {step.step}: {step.title}
                          </h4>
                          <Badge variant="secondary">
                            <Clock className="w-3 h-3 mr-1" />
                            {step.timeline}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fees" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fee Structure (Annual)</h3>
              <p className="text-gray-600 mb-6">
                All fees are in USD. Scholarships and financial aid are available for eligible students.
              </p>
            </div>

            <div className="space-y-6">
              {feeStructure.map((fee, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{fee.program}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Tuition Fee</p>
                        <p className="text-lg font-semibold text-blue-600">{fee.tuitionFee}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Accommodation</p>
                        <p className="text-lg font-semibold text-green-600">{fee.accommodation}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Living Expenses</p>
                        <p className="text-lg font-semibold text-orange-600">{fee.living}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Total Estimated</p>
                        <p className="text-lg font-bold text-gray-900">{fee.total}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Available Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {scholarships.map((scholarship, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{scholarship.name}</h4>
                      <p className="text-green-600 font-medium mb-2">{scholarship.amount}</p>
                      <p className="text-sm text-gray-600 mb-1">{scholarship.eligibility}</p>
                      <p className="text-xs text-gray-500">{scholarship.duration}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Support Services</h3>
              <p className="text-gray-600 mb-6">
                We provide comprehensive support to help international students succeed academically and personally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportServices.map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <service.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{service.service}</h4>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Get in touch with our international admissions team for personalized assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{contact.department}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{contact.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-orange-600" />
                        <span className="text-gray-700">{contact.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default InternationalAdmissions;
