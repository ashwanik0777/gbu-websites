 import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Video,
  BookOpen,
  ExternalLink
} from "lucide-react";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

// Local Card components
const Card = ({ className = "", children, ...props }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

const Button = ({
  className = "",
  variant = "default",
  size = "md",
  children,
  ...props
}) => {
  let base =
    "inline-flex items-center justify-center font-medium rounded-md focus:outline-none transition-colors duration-200";
  let variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
    secondary:
      "bg-white bg-opacity-20 text-white border border-white hover:bg-opacity-30"
  };
  let sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
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

const NSSResources = () => {
  const handbooks = [
    {
      title: "NSS Volunteer Handbook 2024",
      description:
        "Complete guide for NSS volunteers including rules, regulations, and activities",
      size: "2.5 MB",
      format: "PDF",
      downloadCount: 1250
    },
    {
      title: "University NSS Guidelines",
      description:
        "University-specific guidelines and procedures for NSS activities",
      size: "1.8 MB",
      format: "PDF",
      downloadCount: 890
    },
    {
      title: "Community Service Manual",
      description:
        "Best practices and methodologies for effective community service",
      size: "3.2 MB",
      format: "PDF",
      downloadCount: 756
    }
  ];

  const circulars = [
    {
      title: "NSS Day Celebration 2024",
      date: "2024-01-20",
      description: "Guidelines for NSS Day celebration and activities",
      isNew: true
    },
    {
      title: "Annual Camp Instructions",
      date: "2024-01-15",
      description: "Instructions for upcoming annual NSS camp participation",
      isNew: true
    },
    {
      title: "Volunteer Registration Process",
      date: "2024-01-10",
      description: "Updated process for new volunteer registration",
      isNew: false
    },
    {
      title: "COVID-19 Safety Protocols",
      date: "2024-01-05",
      description: "Safety guidelines for NSS activities during pandemic",
      isNew: false
    }
  ];

  const trainingVideos = [
    {
      title: "Introduction to NSS",
      description: "Overview of NSS objectives, history, and significance",
      duration: "15:30",
      views: 2500
    },
    {
      title: "Community Engagement Strategies",
      description: "Effective methods for community outreach and engagement",
      duration: "22:45",
      views: 1800
    },
    {
      title: "Leadership in Social Service",
      description: "Developing leadership skills through voluntary service",
      duration: "18:20",
      views: 1650
    },
    {
      title: "Project Planning and Execution",
      description: "How to plan and execute successful community service projects",
      duration: "25:15",
      views: 1420
    }
  ];

  const externalResources = [
    {
      title: "Ministry of Youth Affairs & Sports",
      description: "Official NSS portal with national guidelines and updates",
      url: "https://yas.nic.in/national-service-scheme-nss",
      category: "Government"
    },
    {
      title: "NSS National Portal",
      description: "Central repository for NSS activities and resources",
      url: "https://nss.nic.in/",
      category: "Government"
    },
    {
      title: "Volunteer India",
      description: "Platform for finding volunteer opportunities across India",
      url: "https://volunteeringindia.org/",
      category: "NGO"
    },
    {
      title: "UN Volunteers",
      description: "International volunteering opportunities and resources",
      url: "https://www.unv.org/",
      category: "International"
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
<SearchableWrapper>
    <motion.div
      className="space-y-8 px-4 sm:px-6 lg:px-20 mx-auto max-w-7xl"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 }
        }
      }}
    >
      <motion.div variants={fadeUp} custom={0}>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Resources & Downloads
          </h2>
          <p className="text-lg text-gray-600">
            Access essential NSS resources, handbooks, and training materials
          </p>
        </div>
      </motion.div>


      {/* Handbooks */}
      <motion.div variants={fadeUp} custom={1}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
          Handbooks & Manuals
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {handbooks.map((handbook, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <FileText className="h-12 w-12 text-red-600" />
                  <span className="text-xs text-gray-500">{handbook.format}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {handbook.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{handbook.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Size: {handbook.size}</span>
                  <span>{handbook.downloadCount} downloads</span>
                </div>
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Circulars */}
      <motion.div variants={fadeUp} custom={2}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <FileText className="h-6 w-6 mr-2 text-green-600" />
          Government Circulars & Notices
        </h3>
        <div className="space-y-4">
          {circulars.map((circular, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {circular.title}
                      </h4>
                      {circular.isNew && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{circular.description}</p>
                    <p className="text-xs text-gray-500">
                      Published:{" "}
                      {new Date(circular.date).toLocaleDateString("en-IN")}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Videos */}
      <motion.div variants={fadeUp} custom={3}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Video className="h-6 w-6 mr-2 text-purple-600" />
          Training Videos
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {trainingVideos.map((video, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Video className="h-12 w-12 text-gray-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {video.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Duration: {video.duration}</span>
                  <span>{video.views} views</span>
                </div>
                <Button className="w-full">
                  <Video className="h-4 w-4 mr-2" />
                  Watch Video
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* External Resources */}
      <motion.div variants={fadeUp} custom={4}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <ExternalLink className="h-6 w-6 mr-2 text-orange-600" />
          External Resources
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {externalResources.map((resource, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {resource.title}
                  </h4>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      resource.category === "Government"
                        ? "bg-blue-100 text-blue-800"
                        : resource.category === "NGO"
                        ? "bg-green-100 text-green-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {resource.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(resource.url, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Resource
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </motion.div>
    </SearchableWrapper>
  );
};

export default NSSResources;
