import React, { useState } from "react";
import {
  Filter,
  Calendar,
  DollarSign,
  FileText,
  Download,
  Users,
  Mail,
  ExternalLink,
} from "lucide-react";

// Minimal custom UI components for Card, Badge, and Button with Tailwind CSS

// Card Component
const Card = ({ className = "", children }) => (
  <div
    className={`bg-white rounded-xl border border-gray-200 border-solid shadow-sm ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 pt-6 pb-2  ">
    {children}
  </div>
);

const CardTitle = ({ className = "", children }) => (
  <h2 className={`font-semibold text-lg ${className}`}>{children}</h2>
);

const CardContent = ({ children }) => (
  <div className="px-6 pb-6 pt-4">{children}</div>
);

// Badge Component
const Badge = ({ className = "", variant = "default", children }) => {
  const base =
    "inline-flex items-center px-2 py-0.5 rounded-full font-medium transition-colors duration-150";
  const variants = {
    default: "bg-blue-100 text-blue-800",
    outline: "bg-white border border-blue-300 text-blue-700",
  };
  return (
    <span className={`${base} ${variants[variant] || ""} ${className}`}>
      {children}
    </span>
  );
};

// Button Component
const Button = ({
  className = "",
  variant = "default",
  size = "md",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    outline: "bg-white border border-blue-600 text-blue-700 hover:bg-blue-50",
  };
  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-2.5 text-base",
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

// Research Projects Tab Component
const ResearchProjectsTab = () => {
  const [filterStatus, setFilterStatus] = useState("all");

  const projects = [
    {
      title: "AI-Driven Cybersecurity Framework for IoT Networks",
      fundingAgency: "Department of Science & Technology (DST)",
      role: "Principal Investigator",
      duration: "2023 - 2026",
      budget: "₹12,50,000",
      status: "ongoing",
      description:
        "Development of machine learning algorithms for real-time threat detection and prevention in Internet of Things networks.",
      collaborators: ["Dr. Rajesh Singh", "Dr. Priya Sharma"],
      deliverables: [
        "Novel ML algorithms for IoT security",
        "Research publications in top-tier journals",
        "Patent filing for developed framework",
        "Training of 2 PhD students",
      ],
    },
    {
      title: "Sentiment Analysis for Social Media Mental Health Monitoring",
      fundingAgency: "Indian Council of Medical Research (ICMR)",
      role: "Co-Principal Investigator",
      duration: "2022 - 2024",
      budget: "₹8,75,000",
      status: "ongoing",
      description:
        "Advanced NLP techniques for early detection of mental health issues through social media content analysis.",
      collaborators: ["Dr. Anita Verma", "Dr. Suresh Kumar"],
      deliverables: [
        "Mental health monitoring system",
        "Dataset of annotated social media posts",
        "Clinical validation studies",
        "Mobile application prototype",
      ],
    },
    {
      title: "Recommendation Systems for E-Learning Platforms",
      fundingAgency: "University Grants Commission (UGC)",
      role: "Principal Investigator",
      duration: "2021 - 2023",
      budget: "₹6,25,000",
      status: "completed",
      description:
        "Personalized learning path recommendation using collaborative filtering and content-based approaches.",
      collaborators: ["Dr. Neha Gupta"],
      deliverables: [
        "Recommendation engine prototype",
        "Conference proceedings",
        "Industry partnership with EdTech company",
        "Training of 3 M.Tech students",
      ],
    },
  ];

  const filteredProjects =
    filterStatus === "all"
      ? projects
      : projects.filter((project) => project.status === filterStatus);

  const getStatusColor = (status) => {
    return status === "ongoing"
      ? "bg-green-100 text-green-800"
      : "bg-blue-100 text-blue-800";
  };

  return (
    <div className="space-y-8">
      {/* Project Statistics */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">
            Project Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">
                {projects.length}
              </div>
              <div className="text-sm text-blue-700">Total Projects</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200 border-solid">
              <div className="text-2xl font-bold text-green-600">
                {projects.filter((p) => p.status === "ongoing").length}
              </div>
              <div className="text-sm text-green-700">Ongoing Projects</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200 border-solid">
              <div className="text-2xl font-bold text-purple-600">₹27.5L</div>
              <div className="text-sm text-purple-700">Total Funding</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200 border-solid">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <div className="text-sm text-orange-700">Collaborators</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filter Section */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="text-2xl text-gray-900">
              Research Projects
            </CardTitle>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <div className="flex gap-2">
                {["all", "ongoing", "completed"].map((status) => (
                  <Button
                    key={status}
                    variant={filterStatus === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterStatus(status)}
                    className="text-xs"
                  >
                    {status === "all"
                      ? "All Projects"
                      : status.charAt(0).toUpperCase() + status.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 border-solid hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-3">{project.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">
                          <span className="font-medium">Funding Agency:</span>{" "}
                          {project.fundingAgency}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Role:</span>{" "}
                          {project.role}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="font-medium">Duration:</span>{" "}
                          {project.duration}
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          <span className="font-medium">Budget:</span>{" "}
                          {project.budget}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status.charAt(0).toUpperCase() +
                        project.status.slice(1)}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200 border-solid">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Collaborators:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.collaborators.map((collaborator, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {collaborator}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Key Deliverables:
                    </h4>
                    <ul className="space-y-1">
                      {project.deliverables
                        .slice(0, 2)
                        .map((deliverable, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-gray-600 flex items-start"
                          >
                            <span className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {deliverable}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Research Group Tab Component
const ResearchGroupTab = () => {
  const phdScholars = [
    {
      name: "Priya Sharma",
      program: "PhD Computer Science",
      year: "2023 - Present",
      researchArea: "Machine Learning for Cybersecurity",
      status: "First Year",
      publications: 2,
      email: "priya.sharma@gbu.ac.in",
      thesis:
        "Deep Learning Approaches for Intrusion Detection in IoT Networks",
    },
    {
      name: "Rajesh Kumar",
      program: "PhD Computer Science",
      year: "2022 - Present",
      researchArea: "Natural Language Processing",
      status: "Second Year",
      publications: 4,
      email: "rajesh.kumar@gbu.ac.in",
      thesis: "Sentiment Analysis for Mental Health Assessment in Social Media",
    },
    {
      name: "Anita Verma",
      program: "PhD Computer Science",
      year: "2021 - Present",
      researchArea: "Recommendation Systems",
      status: "Third Year",
      publications: 6,
      email: "anita.verma@gbu.ac.in",
      thesis: "Context-Aware Recommendation Systems for E-Learning Platforms",
    },
  ];

  const postdocs = [
    {
      name: "Dr. Suresh Patel",
      position: "Postdoctoral Fellow",
      duration: "2023 - 2025",
      researchArea: "AI Ethics and Fairness",
      previousInstitute: "IIT Delhi",
      publications: 12,
      email: "suresh.patel@gbu.ac.in",
    },
  ];

  const researchAssistants = [
    {
      name: "Neha Gupta",
      program: "M.Tech Computer Science",
      year: "2024 - Present",
      project: "Cybersecurity Framework for IoT",
      role: "Research Assistant",
      email: "neha.gupta@gbu.ac.in",
    },
    {
      name: "Amit Singh",
      program: "M.Tech Computer Science",
      year: "2024 - Present",
      project: "Social Media Sentiment Analysis",
      role: "Research Assistant",
      email: "amit.singh@gbu.ac.in",
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "first year":
        return "bg-green-100 text-green-800";
      case "second year":
        return "bg-blue-100 text-blue-800";
      case "third year":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Research Group Overview */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <Users className="w-6 h-6 mr-2 text-blue-600" />
            Research Group Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">
                {phdScholars.length}
              </div>
              <div className="text-sm text-blue-700">PhD Scholars</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200 border-solid">
              <div className="text-2xl font-bold text-green-600">
                {postdocs.length}
              </div>
              <div className="text-sm text-green-700">Postdocs</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200 border-solid">
              <div className="text-2xl font-bold text-purple-600">
                {researchAssistants.length}
              </div>
              <div className="text-sm text-purple-700">Research Assistants</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200 border-solid">
              <div className="text-2xl font-bold text-orange-600">
                {phdScholars.reduce(
                  (sum, scholar) => sum + scholar.publications,
                  0
                ) +
                  postdocs.reduce(
                    (sum, postdoc) => sum + postdoc.publications,
                    0
                  )}
              </div>
              <div className="text-sm text-orange-700">Total Publications</div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Our research group focuses on cutting-edge areas of computer science
            including machine learning, cybersecurity, natural language
            processing, and recommendation systems. We foster a collaborative
            environment where students and researchers work together on
            innovative projects that address real-world challenges.
          </p>
        </CardContent>
      </Card>

      {/* PhD Scholars */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">PhD Scholars</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {phdScholars.map((scholar, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 border-solid hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {scholar.name}
                        </h3>
                        <p className="text-blue-600 text-sm">
                          {scholar.program}
                        </p>
                      </div>
                      <Badge className={getStatusColor(scholar.status)}>
                        {scholar.status}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>
                        <span className="font-medium">Research Area:</span>{" "}
                        {scholar.researchArea}
                      </p>
                      <p>
                        <span className="font-medium">Thesis:</span>{" "}
                        {scholar.thesis}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {scholar.year}
                        </span>
                        <span className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          {scholar.publications} Publications
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Mail className="w-4 h-4 mr-1" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Postdoctoral Fellows */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">
            Postdoctoral Fellows
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {postdocs.map((postdoc, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {postdoc.name}
                    </h3>
                    <p className="text-blue-600 text-sm mb-3">
                      {postdoc.position}
                    </p>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>
                        <span className="font-medium">Research Area:</span>{" "}
                        {postdoc.researchArea}
                      </p>
                      <p>
                        <span className="font-medium">Previous Institute:</span>{" "}
                        {postdoc.previousInstitute}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {postdoc.duration}
                        </span>
                        <span className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          {postdoc.publications} Publications
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Mail className="w-4 h-4 mr-1" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Research Assistants */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">
            Research Assistants
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {researchAssistants.map((assistant, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100 border-solid"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {assistant.name}
                </h3>
                <p className="text-green-600 text-sm mb-2">
                  {assistant.program}
                </p>

                <div className="space-y-1 text-sm text-gray-600 mb-3">
                  <p>
                    <span className="font-medium">Project:</span>{" "}
                    {assistant.project}
                  </p>
                  <p>
                    <span className="font-medium">Role:</span> {assistant.role}
                  </p>
                  <p className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {assistant.year}
                  </p>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <Mail className="w-4 h-4 mr-1" />
                  Contact
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Main Combined Component
const ResearchProjectsAndGroup = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    
        {/* Tab Navigation */}
     <div className="flex items-center space-x-8 mb-8">
  <div
    onClick={() => setActiveTab("projects")}
    className={`flex items-center cursor-pointer text-2xl font-bold pb-2 ${
      activeTab === "projects"
        ? "text-blue-600 border-b-4 border-blue-600"
        : "text-gray-900"
    }`}
  >
    <FileText
      className={`w-6 h-6 mr-2 ${
        activeTab === "projects" ? "text-blue-600" : "text-gray-400"
      }`}
    />
    Research Projects
  </div>

  <div
    onClick={() => setActiveTab("group")}
    className={`flex items-center cursor-pointer text-2xl font-bold pb-2 ${
      activeTab === "group"
        ? "text-blue-600 border-b-4 border-blue-600"
        : "text-gray-900"
    }`}
  >
    <Users
      className={`w-6 h-6 mr-2 ${
        activeTab === "group" ? "text-blue-600" : "text-gray-400"
      }`}
    />
    Research Group
  </div>
</div>


        {/* Tab Content */}
        <div className="transition-opacity duration-300">
          {activeTab === "projects" ? (
            <ResearchProjectsTab />
          ) : (
            <ResearchGroupTab />
          )}
        </div>
      </div>
    </div>
   
  );
};

export default ResearchProjectsAndGroup;
