 import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Video,
  BookOpen,
  ExternalLink,
  Shield
} from "lucide-react";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

// Card Component (with hover scaling)
const Card = ({ className = "", children }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className={`rounded-lg border border-gray-300 bg-white ${className}`}
  >
    {children}
  </motion.div>
);

const CardContent = ({ className = "", children }) => (
  <div className={`border-gray-300 p-4 ${className}`}>{children}</div>
);

const Button = ({
  className = "",
  children,
  variant = "default",
  size = "md",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
    secondary:
      "bg-white text-blue-900 border border-blue-900 hover:bg-blue-50"
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${
        sizes[size] || ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const NCCResources = () => {
  // Data arrays (same as before) ...

  const manuals = [
    { title: "NCC Cadet Manual 2024", description: "Complete guide for NCC cadets including drill, discipline, and training modules", size: "5.2 MB", format: "PDF", downloadCount: 2150 },
    { title: "Drill Manual for Cadets", description: "Step-by-step guide for military drill movements and parade commands", size: "3.8 MB", format: "PDF", downloadCount: 1890 },
    { title: "Weapon Training Handbook", description: "Safety protocols and training procedures for .22 rifle handling", size: "2.4 MB", format: "PDF", downloadCount: 1256 },
    { title: "Adventure Training Guide", description: "Complete manual for adventure activities, safety, and survival training", size: "4.1 MB", format: "PDF", downloadCount: 978 }
  ];

  const guidelines = [
    { title: "A Certificate Exam Guidelines", date: "2024-01-25", description: "Complete guidelines for NCC A Certificate examination and requirements", isNew: true },
    { title: "B Certificate Preparation Guide", date: "2024-01-20", description: "Detailed preparation guide for NCC B Certificate with syllabus", isNew: true },
    { title: "C Certificate Eligibility Criteria", date: "2024-01-15", description: "Updated criteria and process for NCC C Certificate application", isNew: false },
    { title: "Camp Participation Rules", date: "2024-01-10", description: "Rules and regulations for participating in various NCC camps", isNew: false },
    { title: "Uniform Code and Conduct", date: "2024-01-05", description: "Official uniform guidelines and code of conduct for NCC cadets", isNew: false }
  ];

  const trainingVideos = [
    { title: "Basic Military Drill Training", description: "Learn fundamental drill movements and parade commands", duration: "28:45", views: 3200, category: "Drill" },
    { title: "Weapon Handling and Safety", description: "Safe handling procedures for .22 rifles and shooting basics", duration: "35:20", views: 2850, category: "Weapons" },
    { title: "Map Reading and Navigation", description: "Essential skills for map reading, compass use, and navigation", duration: "24:15", views: 2100, category: "Field Craft" },
    { title: "First Aid and Medical Training", description: "Basic first aid techniques and emergency medical procedures", duration: "32:10", views: 1950, category: "Medical" },
    { title: "Leadership Development in NCC", description: "Building leadership qualities through NCC training and activities", duration: "26:30", views: 1750, category: "Leadership" },
    { title: "Adventure Training Basics", description: "Introduction to rock climbing, trekking, and survival skills", duration: "40:25", views: 1620, category: "Adventure" }
  ];

  const externalResources = [
    { title: "NCC Directorate General", description: "Official website of NCC with national guidelines and updates", url: "https://indiancc.nic.in/", category: "Official" },
    { title: "Ministry of Defence - NCC", description: "Government portal for NCC policies and national programs", url: "https://www.mod.gov.in/", category: "Government" },
    { title: "NCC Training Resources", description: "Central repository for training materials and examination resources", url: "https://ncctrg.gov.in/", category: "Training" },
    { title: "Armed Forces Career Portal", description: "Information about career opportunities in Indian Armed Forces", url: "https://joinindianarmy.nic.in/", category: "Career" }
  ];

  const certificates = [
    { title: "A Certificate", duration: "2 Years", description: "Basic level certificate for junior division cadets", benefits: ["Extra marks in government job applications", "Priority in police recruitment"] },
    { title: "B Certificate", duration: "3 Years", description: "Intermediate level certificate for senior division cadets", benefits: ["Extra marks in various competitive exams", "Eligibility for C Certificate"] },
    { title: "C Certificate", duration: "3+ Years", description: "Advanced level certificate with special entry schemes", benefits: ["Direct entry as Officer in Armed Forces", "Reserved seats in technical courses"] }
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  };

  return (
    <SearchableWrapper>
    <div className="space-y-8 px-4 sm:px-6 lg:px-20 mx-auto max-w-7xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Downloads</h2>
        <p className="text-lg text-gray-600">
          Access comprehensive NCC training materials, manuals, and certification guides
        </p>
      </motion.div>

      {/* Training Manuals */}
      <section>
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
        >
          <BookOpen className="h-6 w-6 mr-2 text-blue-900" />
          Training Manuals
        </motion.h3>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {manuals.map((manual, i) => (
            <motion.div key={i} custom={i} variants={fadeInUp}>
              <Card>
                <CardContent className="p-6">
                  <CardContent className="p-6">
  <div className="flex items-start justify-between mb-4">
    <FileText className="h-12 w-12 text-red-600" />
    <span className="text-xs text-gray-500">{manual.format}</span>
  </div>
  <h4 className="text-lg font-semibold text-gray-900 mb-2">{manual.title}</h4>
  <p className="text-gray-600 text-sm mb-4">{manual.description}</p>
  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
    <span>Size: {manual.size}</span>
    <span>{manual.downloadCount} downloads</span>
  </div>
  <Button className="w-full" variant="outline">
    <Download className="h-4 w-4 mr-2" />
    Download Manual
  </Button>
</CardContent>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Certificate Guidelines */}
      <section>
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
        >
          <Shield className="h-6 w-6 mr-2 text-orange-600" />
          Certificate Guidelines
        </motion.h3>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {certificates.map((cert, i) => (
            <motion.div key={i} custom={i} variants={fadeInUp}>
              <Card>
                <CardContent className="p-6 text-center">
                  <CardContent className="p-6 text-center">
  <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
    <span className="text-2xl font-bold">{cert.title.charAt(0)}</span>
  </div>
  <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h4>
  <p className="text-orange-600 font-semibold mb-2">{cert.duration}</p>
  <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
  <div className="space-y-2">
    <h5 className="font-semibold text-gray-900">Benefits:</h5>
    {cert.benefits.map((benefit, idx) => (
      <p key={idx} className="text-xs text-gray-600">• {benefit}</p>
    ))}
  </div>
</CardContent>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-4"
        >
          {guidelines.map((guide, i) => (
            <motion.div key={i} custom={i} variants={fadeInUp}>
              <Card>
                <CardContent className="p-6">
                  <CardContent className="p-6">
  <div className="flex items-center justify-between">
    <div className="flex-1">
      <div className="flex items-center space-x-2 mb-2">
        <h4 className="text-lg font-semibold text-gray-900">{guide.title}</h4>
        {guide.isNew && (
          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
            NEW
          </span>
        )}
      </div>
      <p className="text-gray-600 mb-2">{guide.description}</p>
      <p className="text-sm text-gray-500">
        Updated: {new Date(guide.date).toLocaleDateString("en-IN")}
      </p>
    </div>
    <Button variant="outline" size="sm">
      <Download className="h-4 w-4 mr-2" />
      Download
    </Button>
  </div>
</CardContent>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Training Videos */}
      <section>
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
        >
          <Video className="h-6 w-6 mr-2 text-purple-600" />
          Training Videos
        </motion.h3>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {trainingVideos.map((video, i) => (
            <motion.div key={i} custom={i} variants={fadeInUp}>
              <Card>
                <CardContent className="p-6">
                  <CardContent className="p-6">
  <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
    <Video className="h-12 w-12 text-gray-400" />
  </div>
  <div className="flex justify-between items-start mb-2">
    <h4 className="text-lg font-semibold text-gray-900">{video.title}</h4>
    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
      {video.category}
    </span>
  </div>
  <p className="text-gray-600 text-sm mb-4">{video.description}</p>
  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
    <span>Duration: {video.duration}</span>
    <span>{video.views} views</span>
  </div>
  <Button className="w-full bg-blue-900 hover:bg-blue-800">
    <Video className="h-4 w-4 mr-2" />
    Watch Video
  </Button>
</CardContent>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* External Resources */}
      <section>
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
        >
          <ExternalLink className="h-6 w-6 mr-2 text-green-600" />
          External Resources
        </motion.h3>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-6"
        >
          {externalResources.map((resource, i) => (
            <motion.div key={i} custom={i} variants={fadeInUp}>
              <Card>
                <CardContent className="p-6">
                  <CardContent className="p-6">
  <div className="flex justify-between items-start mb-4">
    <h4 className="text-lg font-semibold text-gray-900">{resource.title}</h4>
    <span
      className={`px-2 py-1 text-xs font-medium rounded-full ${
        resource.category === "Official"
          ? "bg-blue-100 text-blue-800"
          : resource.category === "Government"
          ? "bg-green-100 text-green-800"
          : resource.category === "Training"
          ? "bg-purple-100 text-purple-800"
          : "bg-orange-100 text-orange-800"
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

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
    </SearchableWrapper>
  );
};

export default NCCResources;
