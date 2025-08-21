import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Star,
  Award,
  Building,
  Globe,
  Microscope,
  Gavel,
  Briefcase,
  Monitor,
  Heart,
  Brain,
  Cpu,
} from "lucide-react";
import HeroBanner from "../../components/HeroBanner";
import StatsCard from '../../components/StatsCard';
import ButtonGroup from "../../components/TabsData";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";
// Mock Navbar component

// UI Components
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-lg shadow-sm border border-gray-200 border-solid${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200 border-solid">
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 text-gray-700 bg-white",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

const Button = ({ children, size = "default", className = "" }) => {
  const sizes = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const Tabs = ({ children, defaultValue, className = "" }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className={`w-full ${className}`} data-active-tab={activeTab}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

const TabsList = ({ children, className = "", activeTab, setActiveTab }) => (
  <div
    className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}
  >
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);

const TabsTrigger = ({
  children,
  value,
  className = "",
  activeTab,
  setActiveTab,
}) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
      activeTab === value
        ? "bg-white text-gray-900 shadow-sm"
        : "text-gray-600 hover:text-gray-900"
    } ${className}`}
    onClick={() => setActiveTab(value)}
  >
    {children}
  </button>
);

const TabsContent = ({ children, value, className = "", activeTab }) =>
  activeTab === value ? <div className={className}>{children}</div> : null;

// School Categories Data
const schoolCategories = {
  Engineering: {
    icon: Cpu,
    color: "from-blue-600 to-blue-800",
    image: "photo-1581091226825-a6a2a5aee158",
    programs: {
      Undergraduate: [
        {
          name: "Bachelor of Technology (B.Tech)",
          specializations: [
            "Computer Science",
            "Electronics",
            "Mechanical",
            "Civil",
            "Chemical",
          ],
          duration: "4 years",
          seats: 240,
          eligibility: "12th with PCM, JEE Main",
          highlights: [
            "Industry partnerships",
            "Internship guaranteed",
            "Placement assistance",
          ],
        },
      ],
      Postgraduate: [
        {
          name: "Master of Technology (M.Tech)",
          specializations: ["AI & ML", "VLSI Design", "Structural Engineering"],
          duration: "2 years",
          seats: 60,
          eligibility: "B.Tech with valid GATE score",
          highlights: [
            "Research opportunities",
            "Industry exposure",
            "Advanced labs",
          ],
        },
      ],
      Doctoral: [
        {
          name: "Doctor of Philosophy (Ph.D)",
          specializations: ["Various Engineering Disciplines"],
          duration: "3-5 years",
          seats: 20,
          eligibility: "M.Tech/M.E with research experience",
          highlights: [
            "Research fellowship",
            "Publication support",
            "Conference funding",
          ],
        },
      ],
    },
  },
  "Information Technology": {
    icon: Monitor,
    color: "from-green-600 to-teal-600",
    image: "photo-1581092162384-8987c1d64718",
    programs: {
      Undergraduate: [
        {
          name: "Bachelor of Computer Applications (BCA)",
          specializations: [
            "Software Development",
            "Web Technologies",
            "Mobile Apps",
          ],
          duration: "3 years",
          seats: 120,
          eligibility: "12th with Mathematics",
          highlights: [
            "Industry projects",
            "Internship program",
            "Skill certification",
          ],
        },
      ],
      Postgraduate: [
        {
          name: "Master of Computer Applications (MCA)",
          specializations: ["Data Science", "Cybersecurity", "Cloud Computing"],
          duration: "2 years",
          seats: 60,
          eligibility: "Bachelor's with Mathematics/Statistics",
          highlights: [
            "Industry mentorship",
            "Live projects",
            "Placement support",
          ],
        },
      ],
      Doctoral: [],
    },
  },
  Management: {
    icon: Briefcase,
    color: "from-purple-600 to-indigo-600",
    image: "photo-1507003211169-0a1dd7228f2d",
    programs: {
      Undergraduate: [
        {
          name: "Bachelor of Business Administration (BBA)",
          specializations: ["Finance", "Marketing", "HR", "Operations"],
          duration: "3 years",
          seats: 100,
          eligibility: "12th from any stream",
          highlights: [
            "Industry internships",
            "Case study method",
            "Leadership development",
          ],
        },
      ],
      Postgraduate: [
        {
          name: "Master of Business Administration (MBA)",
          specializations: [
            "Finance",
            "Marketing",
            "HR",
            "Operations",
            "International Business",
          ],
          duration: "2 years",
          seats: 120,
          eligibility: "Bachelor's degree with entrance exam",
          highlights: [
            "Industry visits",
            "Global exposure",
            "100% placement record",
          ],
        },
      ],
      Doctoral: [
        {
          name: "Doctor of Philosophy (Ph.D) in Management",
          specializations: ["Strategic Management", "Finance", "Marketing"],
          duration: "3-5 years",
          seats: 15,
          eligibility: "MBA/M.Com with research aptitude",
          highlights: [
            "Research grants",
            "International conferences",
            "Publication support",
          ],
        },
      ],
    },
  },
  Biotechnology: {
    icon: Microscope,
    color: "from-emerald-600 to-green-700",
    image: "photo-1582719471384-894fbb16e074",
    programs: {
      Undergraduate: [
        {
          name: "Bachelor of Science in Biotechnology",
          specializations: [
            "Medical Biotech",
            "Agricultural Biotech",
            "Industrial Biotech",
          ],
          duration: "3 years",
          seats: 60,
          eligibility: "12th with PCB",
          highlights: [
            "Advanced laboratories",
            "Research projects",
            "Industry collaboration",
          ],
        },
      ],
      Postgraduate: [
        {
          name: "Master of Science in Biotechnology",
          specializations: [
            "Molecular Biology",
            "Bioinformatics",
            "Pharmacology",
          ],
          duration: "2 years",
          seats: 30,
          eligibility: "B.Sc in Life Sciences",
          highlights: [
            "Research opportunities",
            "Industry internships",
            "Publication support",
          ],
        },
      ],
      Doctoral: [],
    },
  },
  Law: {
    icon: Gavel,
    color: "from-red-600 to-red-800",
    image: "photo-1589829545856-d10d557cf95f",
    programs: {
      Undergraduate: [
        {
          name: "Bachelor of Laws (LLB)",
          specializations: [
            "Corporate Law",
            "Criminal Law",
            "Constitutional Law",
          ],
          duration: "3 years",
          seats: 80,
          eligibility: "Bachelor's degree in any discipline",
          highlights: [
            "Moot court competitions",
            "Legal aid clinic",
            "Internship program",
          ],
        },
      ],
      Postgraduate: [
        {
          name: "Master of Laws (LLM)",
          specializations: ["International Law", "IP Law", "Environmental Law"],
          duration: "1 year",
          seats: 40,
          eligibility: "LLB degree",
          highlights: [
            "Specialized curriculum",
            "Research opportunities",
            "Bar preparation",
          ],
        },
      ],
      Doctoral: [],
    },
  },
  Humanities: {
    icon: Heart,
    color: "from-pink-600 to-rose-600",
    image: "photo-1481627834876-b7833e8f5570",
    programs: {
      Undergraduate: [
        {
          name: "Bachelor of Arts (BA)",
          specializations: ["English", "History", "Psychology", "Sociology"],
          duration: "3 years",
          seats: 100,
          eligibility: "12th from any stream",
          highlights: [
            "Research projects",
            "Cultural activities",
            "Skill development",
          ],
        },
      ],
      Postgraduate: [
        {
          name: "Master of Arts (MA)",
          specializations: ["English Literature", "History", "Psychology"],
          duration: "2 years",
          seats: 50,
          eligibility: "Bachelor's in relevant field",
          highlights: [
            "Research methodology",
            "Thesis writing",
            "Academic excellence",
          ],
        },
      ],
      Doctoral: [],
    },
  },
  "Buddhist Studies": {
    icon: Brain,
    color: "from-orange-600 to-amber-600",
    image: "photo-1506905925346-21bda4d32df4",
    programs: {
      Undergraduate: [
        {
          name: "Bachelor in Buddhist Studies",
          specializations: [
            "Buddhist Philosophy",
            "Meditation Studies",
            "Buddhist Literature",
          ],
          duration: "3 years",
          seats: 40,
          eligibility: "12th from any stream",
          highlights: [
            "Meditation practice",
            "Philosophy seminars",
            "Cultural studies",
          ],
        },
      ],
      Postgraduate: [],
      Doctoral: [],
    },
  },
  "Vocational Training": {
    icon: Building,
    color: "from-gray-600 to-gray-800",
    image: "photo-1560472354-b33ff0c44a43",
    programs: {
      Undergraduate: [
        {
          name: "Diploma in Various Trades",
          specializations: [
            "Electrical",
            "Mechanical",
            "Electronics",
            "Computer Applications",
          ],
          duration: "1-2 years",
          seats: 200,
          eligibility: "10th/12th as per course",
          highlights: [
            "Hands-on training",
            "Industry certification",
            "Job placement",
          ],
        },
      ],
      Postgraduate: [],
      Doctoral: [],
    },
  },
};
const educationStatsData = [
  {
    icon: GraduationCap,
    numberText: "8",
    title: "Schools",
    iconColor: "#2563eb", // blue-600
  },
  {
    icon: BookOpen,
    numberText: "50+",
    title: "Programs",
    iconColor: "#16a34a", // green-600
  },
  {
    icon: Award,
    numberText: "1000+",
    title: "Total Seats",
    iconColor: "#9333ea", // purple-600
  },
  {
    icon: Globe,
    numberText: "95%",
    title: "Placement Rate",
    iconColor: "#f97316", // orange-600
  },
];
const CoursesOffered = () => {
  const [activeSchool, setActiveSchool] = useState("Engineering");

  const schoolButtons = Object.keys(schoolCategories).map((school) => ({
    id: school,
    label: school.split(" ")[0],
    tooltip: school,
  }));

  const CourseCard = ({ course }) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg">{course.name}</span>
          <Badge variant="secondary">{course.duration}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Specializations:</h4>
            <div className="flex flex-wrap gap-2">
              {course.specializations.map((spec, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>{course.seats} seats</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-green-600" />
              <span>{course.duration}</span>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-1">Eligibility:</h4>
            <p className="text-sm text-gray-600">{course.eligibility}</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Highlights:</h4>
            <ul className="space-y-1">
              {course.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                  <Star className="w-3 h-3 text-yellow-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const ProgramSection = ({ programs, schoolName, schoolData }) => {
    const [activeProgram, setActiveProgram] = useState("Undergraduate");

    const programButtons = [
      { id: "Undergraduate", label: "UG", tooltip: "Undergraduate Programs" },
      { id: "Postgraduate", label: "PG", tooltip: "Postgraduate Programs" },
      { id: "Doctoral", label: "Doctoral", tooltip: "Doctoral Programs" },
    ];

    return (
      <div className="space-y-8">
        {/* School Banner */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={`https://images.unsplash.com/${schoolData.image}?auto=format&fit=crop&w=1200&h=300`}
            alt={schoolName}
            className="w-full h-48 object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${schoolData.color} opacity-80`} />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <schoolData.icon className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">{schoolName}</h2>
            </div>
          </div>
        </div>

        {/* UG/PG/Doctoral ButtonGroup */}
        <ButtonGroup
          buttons={programButtons}
          onClick={setActiveProgram}
          activeButton={activeProgram}
          size="md"
          fullWidth={true}
          rounded="xl"
          animated={true}
          gap
          className="flex-wrap justify-center"
        />

        {/* Program Level Content */}
        {Object.entries(programs).map(([level, courses]) => (
          activeProgram === level && (
            <div key={level} className="space-y-6">
              {courses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <CardContent>
                    <div className="text-gray-500">
                      <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">No {level} programs available in this school</p>
                      <p className="text-sm mt-2">Please check other program levels or contact admissions</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )
        ))}
      </div>
    );
  };

  return (
    <SearchableWrapper>
    <div className="min-h-screen bg-gray-50 pb-10">
      <HeroBanner
        title="Courses Offered"
        subtitle="Explore our diverse academic programs across multiple schools and degree levels"
        bgTheme={5}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mb-8">
        <StatsCard stats={educationStatsData} />

        {/* School Tabs */}
        <ButtonGroup
          buttons={schoolButtons}
          onClick={setActiveSchool}
          activeButton={activeSchool}
          size="lg"
          fullWidth={true}
          rounded="2xl"
          animated={true}
          className="mb-8 flex-wrap justify-center"
        />

        {/* Program Tabs + Content */}
        <ProgramSection
          programs={schoolCategories[activeSchool].programs}
          schoolName={activeSchool}
          schoolData={schoolCategories[activeSchool]}
        />
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default CoursesOffered;