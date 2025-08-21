import {
  ArrowLeft,
  Users,
  Building,
  Calendar,
  MapPin,
  Clock,
  Star,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";

const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl overflow-hidden ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const baseStyle =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none";
  const variants = {
    default: "bg-red-600 text-white hover:bg-red-700",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };
  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const InternshipProgrammes = () => {
  const internshipTypes = [
    {
      title: "Summer Internships",
      description:
        "Comprehensive 8-12 week programs for 2nd and 3rd year students",
      icon: "☀️",
      color: "from-orange-400 to-orange-600",
      duration: "8-12 weeks",
      stipend: "₹15,000 - ₹50,000/month",
      eligibility: "2nd/3rd year students",
      opportunities: "600+ annually",
      deadline: "March 31, 2024",
      companies: ["Google", "Microsoft", "Amazon", "Adobe"],
    },
    {
      title: "Industrial Training",
      description:
        "Hands-on experience with DRDO, IBM, and government agencies",
      icon: "🏭",
      color: "from-blue-400 to-blue-600",
      duration: "6 months",
      stipend: "₹20,000 - ₹40,000/month",
      eligibility: "Final year students",
      opportunities: "300+ annually",
      deadline: "January 15, 2024",
      companies: ["DRDO", "ISRO", "BHEL", "L&T"],
    },
    {
      title: "Research Internships",
      description:
        "Academic research opportunities in cutting-edge technologies",
      icon: "🔬",
      color: "from-purple-400 to-purple-600",
      duration: "3-6 months",
      stipend: "₹10,000 - ₹25,000/month",
      eligibility: "All years",
      opportunities: "150+ annually",
      deadline: "Rolling basis",
      companies: ["IITs", "IISc", "CSIR Labs", "Universities"],
    },
    {
      title: "International Programs",
      description: "Global exposure through MoUs and exchange programs",
      icon: "🌍",
      color: "from-green-400 to-green-600",
      duration: "2-4 months",
      stipend: "Varies by country",
      eligibility: "Top performers",
      opportunities: "50+ annually",
      deadline: "October 30, 2023",
      companies: ["Partner Universities", "Global Corporations"],
    },
  ];

  const topProviders = [
    {
      name: "Amazon",
      logo: "🛒",
      positions: "45+ interns",
      domains: ["Software", "Cloud", "ML"],
    },
    {
      name: "ONGC",
      logo: "🛢️",
      positions: "30+ interns",
      domains: ["Petroleum", "Geology", "Chemical"],
    },
    {
      name: "Adobe",
      logo: "🎨",
      positions: "25+ interns",
      domains: ["Design", "Software", "Research"],
    },
    {
      name: "Startups",
      logo: "🚀",
      positions: "100+ interns",
      domains: ["Tech", "Product", "Marketing"],
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Profile Setup",
      description: "Complete your academic and project details",
    },
    {
      step: 2,
      title: "Preference Selection",
      description: "Choose companies and roles of interest",
    },
    {
      step: 3,
      title: "Document Upload",
      description: "Submit resume, transcripts, and certificates",
    },
    {
      step: 4,
      title: "Application Review",
      description: "T&P Cell reviews and forwards applications",
    },
    {
      step: 5,
      title: "Company Selection",
      description: "Shortlisted candidates appear for interviews",
    },
  ];

  return (
    <SearchableWrapper>
    <div className="min-h-screen  pt-3 bg-gradient-to-br  from-pink-50  via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Internship Opportunities
            </h2>
            <p className="text-lg text-center text-gray-600">
              Bridge the gap between classroom learning and corporate excellence
              through our diverse internship programs
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Internship Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {internshipTypes.map((internship, index) => (
              <Card
                key={index}
                className="bg-white/80 pt-5  backdrop-blur-sm border-0 shadow-xl transition-all duration-300 hover-scale group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${internship.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{internship.icon}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {internship.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {internship.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-blue-600 mr-2" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
                      <span>{internship.stipend}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-purple-600 mr-2" />
                      <span>{internship.eligibility}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-orange-600 mr-2" />
                      <span>{internship.opportunities}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Top Companies:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {internship.companies.map((company, companyIndex) => (
                        <span
                          key={companyIndex}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">
                      Application Deadline:
                    </span>
                    <span className="text-sm font-semibold text-red-600">
                      {internship.deadline}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-gradient-to-r  from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white">
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Top Internship Providers */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Top Internship Providers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topProviders.map((provider, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-xl pt-5 transition-all duration-300 hover-scale text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{provider.logo}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {provider.name}
                    </h3>
                    <p className="text-green-600 font-semibold mb-2">
                      {provider.positions}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {provider.domains.map((domain, domainIndex) => (
                        <span
                          key={domainIndex}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm hover:text-white hover:bg-blue-700"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Application Process
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
                {applicationSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center max-w-xs"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                    {index <= applicationSteps.length - 1 && (
                      <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="text-center">
            <Card className=" bg-white mt-5 rounded-2xl w-4/5 backdrop-blur-sm border-0 shadow-xl inline-block">
              <CardContent className="p-8 pt-5">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Internship Journey?
                </h2>
                <p className="text-gray-600 mb-6">
                  Join thousands of students who have gained valuable industry
                  experience
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                    Apply for Internship
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg rounded-xl"
                  >
                    Track Application Status
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>
    </div>
    </SearchableWrapper>
  );
};

export default InternshipProgrammes;
