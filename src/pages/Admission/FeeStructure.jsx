import React, { useState } from "react";
import {
  Download,
  CreditCard,
  FileText,
  AlertCircle,
  Award,
  Sparkles,
  GraduationCap,
  ChevronRight,
  DollarSign
} from "lucide-react";
import HeroBanner from '../../components/HeroBanner';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';
import ButtonGroup from "../../components/TabsData";
/* ---------------- Reusable UI Components ---------------- */

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`group relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20 border-solid shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-1${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">{children}</div>
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div
    className={`px-8 py-6 bg-gradient-to-r from-slate-50/50 via-white/50 to-slate-50/50 backdrop-blur-sm border-b border-slate-100/50 border-solid${className}`}
  >
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3
    className={`text-xl font-bold text-slate-800 tracking-tight ${className}`}
  >
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-8 py-6 ${className}`}>{children}</div>
);

const Badge = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default:
      "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/25",
    outline: "border-2 border-violet-200 text-violet-700 bg-violet-50/50",
    success:
      "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25",
  };

  return (
    <span
      className={`inline-flex items-center text-sm font-semibold rounded-full px-4 py-2 transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "default",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95";
  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40",
    outline:
      "border-2 border-violet-200 text-violet-700 bg-white/50 hover:bg-violet-50 hover:border-violet-300",
    ghost: "text-slate-600 hover:text-violet-600 hover:bg-violet-50/50",
  };
  const sizes = {
    default: "px-6 py-3 text-sm",
    sm: "px-4 py-2 text-xs",
    lg: "px-8 py-4 text-base",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const TabButton = ({ children, isActive, onClick }) => (
  <button
    className={`relative px-8 py-3 text-sm font-semibold rounded-sm transition-all duration-500 transform hover:scale-105 ${
      isActive
        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-sm shadow-black"
        : "text-slate-600 hover:text-violet-600 hover:bg-violet-50/50"
    }`}
    onClick={onClick}
  >
    {isActive && (
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse" />
    )}
    <span className="relative z-10">{children}</span>
  </button>
);

/* ---------------- Data ---------------- */
const ugFees = [
  {
    course: "B.Tech",
    totalFee: "₹4,80,000",
    yearlyFee: "₹1,20,000",
    breakdown: {
      tuition: "₹80,000",
      hostel: "₹24,000",
      mess: "₹12,000",
      other: "₹4,000",
    },
    scholarships: "Merit-based scholarships available",
    popular: true,
  },
  {
    course: "B.Sc",
    totalFee: "₹1,80,000",
    yearlyFee: "₹60,000",
    breakdown: {
      tuition: "₹45,000",
      hostel: "₹24,000",
      mess: "₹12,000",
      other: "₹4,000",
    },
    scholarships: "Need-based scholarships available",
  },
  {
    course: "B.Com",
    totalFee: "₹1,50,000",
    yearlyFee: "₹50,000",
    breakdown: {
      tuition: "₹35,000",
      hostel: "₹24,000",
      mess: "₹12,000",
      other: "₹4,000",
    },
    scholarships: "Merit & need-based scholarships",
  },
  {
    course: "B.A",
    totalFee: "₹1,20,000",
    yearlyFee: "₹40,000",
    breakdown: {
      tuition: "₹25,000",
      hostel: "₹24,000",
      mess: "₹12,000",
      other: "₹4,000",
    },
    scholarships: "Government scholarships available",
  },
];

const pgFees = [
  {
    course: "M.Tech",
    totalFee: "₹3,20,000",
    yearlyFee: "₹1,60,000",
    breakdown: {
      tuition: "₹1,20,000",
      hostel: "₹24,000",
      mess: "₹12,000",
      other: "₹4,000",
    },
    scholarships: "Research assistantships available",
    popular: true,
  },
  {
    course: "M.Sc",
    totalFee: "₹2,00,000",
    yearlyFee: "₹1,00,000",
    breakdown: {
      tuition: "₹60,000",
      hostel: "₹24,000",
      mess: "₹12,000",
      other: "₹4,000",
    },
    scholarships: "Merit-based scholarships",
  },
  {
    course: "MBA",
    totalFee: "₹6,00,000",
    yearlyFee: "₹3,00,000",
    breakdown: {
      tuition: "₹2,50,000",
      hostel: "₹30,000",
      mess: "₹15,000",
      other: "₹5,000",
    },
    scholarships: "Industry-sponsored scholarships",
  },
];

const paymentOptions = [
  {
    method: "Digital Payment",
    description: "Cards, UPI, Net Banking",
    charges: "Instant & Secure",
    icon: CreditCard,
    color: "from-blue-500 to-cyan-500",
  },
  {
    method: "Bank Transfer",
    description: "Direct transfer to university",
    charges: "No additional charges",
    icon: CreditCard,
    color: "from-emerald-500 to-teal-500",
  },
  {
    method: "Demand Draft",
    description: "Traditional payment method",
    charges: "Bank charges apply",
    icon: FileText,
    color: "from-violet-500 to-purple-500",
  },
];

const scholarships = [
  {
    name: "Merit Excellence Award",
    eligibility: "Top 10% academic performers",
    amount: "₹50,000 - ₹1,00,000",
    duration: "Full program duration",
    icon: "🏆",
  },
  {
    name: "Financial Aid Program",
    eligibility: "Family income < ₹2 lakhs",
    amount: "Up to 50% fee waiver",
    duration: "Renewable annually",
    icon: "🤝",
  },
  {
    name: "Sports Excellence Grant",
    eligibility: "State/National achievements",
    amount: "₹25,000 - ₹75,000",
    duration: "Performance based",
    icon: "🏅",
  },
  {
    name: "Research Fellowship",
    eligibility: "PG/PhD research students",
    amount: "₹15,000 - ₹25,000/month",
    duration: "Project timeline",
    icon: "🔬",
  },
];

const prospectusLinks = [
  {
    title: "Complete Prospectus 2024-25",
    description: "Comprehensive admission guide with detailed information",
    size: "2.5 MB",
    pages: "48 pages",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Fee Structure Guide",
    description: "Detailed breakdown and payment schedules",
    size: "1.2 MB",
    pages: "12 pages",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Scholarship Handbook",
    description: "Complete scholarship information and applications",
    size: "800 KB",
    pages: "8 pages",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Campus Life Guide",
    description: "Hostel facilities, amenities, and campus culture",
    size: "1.5 MB",
    pages: "16 pages",
    gradient: "from-pink-500 to-rose-600",
  },
];

/* ---------------- Enhanced Components ---------------- */

const FeeCard = ({ course, index }) => (
  <Card className="relative overflow-hidden">
    {/* {course.popular && (
      <div className="absolute top-2 right-2 z-20">
        <Badge variant="success" className="animate-pulse">
          <Sparkles className="w-3 h-3 mr-1" />
          Popular
        </Badge>
      </div>
    )} */}

    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-2xl">{course.course}</CardTitle>
        </div>
        <Badge className="text-lg font-bold">{course.totalFee}</Badge>
      </div>
    </CardHeader>

    <CardContent className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50">
          <p className="text-sm text-slate-500 mb-1">Annual Fee</p>
          <p className="text-xl font-bold text-slate-800">{course.yearlyFee}</p>
        </div>
        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50">
          <p className="text-sm text-slate-500 mb-1">Total Program</p>
          <p className="text-xl font-bold text-slate-800">{course.totalFee}</p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-semibold text-slate-700 mb-3">Fee Breakdown</p>
        {Object.entries(course.breakdown).map(([key, value], i) => (
          <div
            key={key}
            className="flex justify-between items-center py-2 px-4 rounded-xl bg-slate-50/50 hover:bg-slate-100/50 transition-colors duration-300"
          >
            <span className="capitalize text-slate-600">{key}</span>
            <span className="font-semibold text-slate-800">{value}</span>
          </div>
        ))}
      </div>

      {course.scholarships && (
        <div className="pt-4 border-t border-slate-100 border-solid">
          <div className="flex items-center space-x-3 text-violet-600">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">{course.scholarships}</span>
          </div>
        </div>
      )}
    </CardContent>
  </Card>
);

const PaymentCard = ({ option, index }) => (
  <Card className="text-center group">
    <CardContent className="py-8 text-center">
      <div
        className={`w-16 h-16 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <option.icon className="w-8 h-8 text-white" />
      </div>
      <h4 className="text-xl font-bold text-slate-800 mb-3">{option.method}</h4>
      <p className="text-slate-600 mb-2">{option.description}</p>
      <p className="text-sm text-emerald-600 font-medium">{option.charges}</p>
    </CardContent>
  </Card>
);

const ScholarshipCard = ({ scholarship, index }) => (
  <Card className="relative overflow-hidden">
    <div className="absolute top-4 right-4 text-2xl opacity-20">
      {scholarship.icon}
    </div>
    <CardHeader>
      <CardTitle className="flex items-center space-x-3">
        <span className="text-2xl">{scholarship.icon}</span>
        <span>{scholarship.name}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 rounded-full bg-violet-500 mt-2 flex-shrink-0"></div>
          <div>
            <p className="text-sm font-medium text-slate-600">Eligibility</p>
            <p className="text-slate-800">{scholarship.eligibility}</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
          <div>
            <p className="text-sm font-medium text-slate-600">Amount</p>
            <p className="text-slate-800 font-semibold">{scholarship.amount}</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
          <div>
            <p className="text-sm font-medium text-slate-600">Duration</p>
            <p className="text-slate-800">{scholarship.duration}</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ProspectusCard = ({ document, index }) => (
  <Card className="group py-10">
    <CardContent className="p-8 ">
      <div className="flex items-start space-x-4">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${document.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <FileText className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-slate-800 mb-2">
            {document.title}
          </h4>
          <p className="text-slate-600 mb-4">{document.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-md text-slate-800">
              <span>{document.size}</span>
              <span>•</span>
              <span>{document.pages}</span>
            </div>
            <Button size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

/* ---------------- Main Component ---------------- */

const FeeStructure = () => {
 
const [activeTab, setActiveTab] = useState("fees");
 
const feeTabs = [
  { id: "fees", label: "Fee Structure", icon: <CreditCard size={18} />, tooltip: "View fee structure" },
  { id: "payment", label: "Payment Options", icon: <DollarSign size={18} />, tooltip: "Available payment methods" },
  { id: "scholarship", label: "Scholarships", icon: <Award size={18} />, tooltip: "Scholarship opportunities" },
  { id: "prospectus", label: "Prospectus", icon: <FileText size={18} />, tooltip: "Download prospectus" },
];

  return (
     <SearchableWrapper>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50">
      {/* Hero Section */}

      <HeroBanner
        title=" Fee Structure"
        subtitle="Transparent pricing, flexible payments, and comprehensive support
              for your academic journey"
        bgTheme={5}
      />
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Important Notice */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 border-solid">
            <CardContent className="flex items-start space-x-4 py-6">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-amber-800 mb-4">
                  Important Fee Guidelines
                </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-amber-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    <span>Fees subject to university revision</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    <span>Late payment fee: ₹100 per day</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    <span>Installment facility available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    <span>Refund policy as per guidelines</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
  
 <ButtonGroup
   buttons={feeTabs}
  onClick={setActiveTab}
  activeButton={activeTab}
  size="lg"
  fullWidth={true}
  rounded="xl"
  animated={true}
  gap
  className="mb-8 flex-wrap justify-center"
/>
        {/* Tab Content */}
        <div className="space-y-12 mb-20">
          {activeTab === "fees" && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-slate-800 mb-3">
                    Undergraduate Programs
                  </h3>
                  <p className="text-slate-600">
                    Comprehensive undergraduate courses with modern curriculum
                  </p>
                </div>
                <div className="space-y-10">
                  {ugFees.map((course, index) => (
                    <FeeCard key={index} course={course} />
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-slate-800 mb-3">
                    Postgraduate Programs
                  </h3>
                  <p className="text-slate-600">
                    Advanced degrees for specialized career growth
                  </p>
                </div>
                <div className="space-y-10">
                  {pgFees.map((course, index) => (
                    <FeeCard key={index} course={course} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "payment" && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  Payment Options
                </h3>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  Choose from multiple secure payment methods for your
                  convenience
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {paymentOptions.map((option, index) => (
                  <PaymentCard key={index} option={option} />
                ))}
              </div>
            </div>
          )}

          {activeTab === "scholarship" && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  Scholarships & Financial Aid
                </h3>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  Supporting talented students with comprehensive scholarship
                  programs
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {scholarships.map((scholarship, index) => (
                  <ScholarshipCard key={index} scholarship={scholarship} />
                ))}
              </div>
            </div>
          )}

          {activeTab === "prospectus" && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  Download Prospectus
                </h3>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  Get comprehensive information about our programs and admission
                  process
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {prospectusLinks.map((document, index) => (
                  <ProspectusCard key={index} document={document} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default FeeStructure;
