import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import BannerSection from "../../components/HeroBanner.jsx";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

import {
  GraduationCap,
  Users,
  Calendar,
  Phone,
  ChevronRight,
} from "lucide-react";

// Modern motion fade
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Clean reusable Button
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent",
    ghost: "bg-transparent hover:bg-gray-100",
    secondary: "bg-white text-blue-600 hover:bg-gray-100",
  };
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };
  return (
    <button
      className={`inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-sm ${variantClasses[variant] || ""} ${sizeClasses[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Clean reusable Card
const Card = ({ className = "", children }) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
    className={`rounded-2xl bg-white overflow-hidden shadow transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ className = "", children }) => (
  <div className={`px-8 pt-8 ${className}`}>{children}</div>
);

const CardTitle = ({ className = "", children }) => (
  <h3 className={`font-semibold text-xl ${className}`}>{children}</h3>
);

const CardContent = ({ className = "", children }) => (
  <div className={`px-8 pb-8 ${className}`}>{children}</div>
);

const CardDescription = ({ className = "", children }) => (
  <p className={`text-gray-500 text-base leading-relaxed ${className}`}>
    {children}
  </p>
);

const SitemapMain = () => {
  return (
    <SearchableWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-sans">
        {/* Hero Section */}
        <BannerSection
          title="Welcome to Our University"
          subtitle="Discover excellence in education, research, and innovation. Navigate our comprehensive website to explore everything we offer."
          bgTheme={5}
        />

        <div className="container mx-auto px-6 py-16 max-w-7xl">
          {/* Quick Navigation Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {/* Academics Card */}
            <Card className="group backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-blue-200 transition-colors">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-gray-800 group-hover:text-blue-700 transition">
                  Academics
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6">
                  Explore our academic programs, world-class faculty, and research opportunities.
                </CardDescription>
                <Link to="/sitemapAcademics">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Admissions Card */}
            <Card className="group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-green-200 transition-colors">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg text-gray-800 group-hover:text-green-700 transition">
                  Admissions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6">
                  Find detailed information about courses, eligibility criteria, and the admissions process.
                </CardDescription>
                <Link to="/admissions/admission-process">
                  <Button variant="ghost" className="text-green-600 hover:text-green-700">
                    Apply Now →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Events Card */}
            <Card className="group backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-purple-200 transition-colors">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg text-gray-800 group-hover:text-purple-700 transition">
                  Events
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6">
                  Stay updated with our latest news, events, and campus announcements.
                </CardDescription>
                <Link to="/announcements/news-notifications">
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                    View Events →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="group backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-orange-200 transition-colors">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg text-gray-800 group-hover:text-orange-700 transition">
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6">
                  Get in touch with us for any queries, support, or assistance.
                </CardDescription>
                <Link to="/sitemapContact">
                  <Button variant="ghost" className="text-orange-600 hover:text-orange-700">
                    Contact Us →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Sitemap Highlight */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need to find something specific?
              </h2>
              <p className="text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our comprehensive sitemap provides an organized view of all pages and sections on our website, making it easy to navigate and find exactly what you’re looking for.
              </p>
              <Link to="/sitemap">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl shadow-md hover:shadow-xl"
                >
                  View Complete Sitemap
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </SearchableWrapper>
  );
};

export default SitemapMain;
