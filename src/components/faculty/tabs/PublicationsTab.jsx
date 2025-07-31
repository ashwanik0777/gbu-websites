import React, { useState } from "react";
import {
  Filter,
  Calendar,
  ExternalLink,
  Download,
  FileText,
  Award,
  MapPin,
  Trophy,
  BookOpen,
  Users,
  Target,
} from "lucide-react";

// Card Components
const Card = ({ className = "", children }) => (
  <div
    className={`rounded-xl bg-white border border-gray-200 shadow-sm ${className}`}
  >
    {children}
  </div>
);
const CardHeader = ({ children }) => (
  <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white rounded-t-xl  ">
    {children}
  </div>
);
const CardTitle = ({ className = "", children }) => (
  <h2 className={`font-semibold text-lg text-gray-800 ${className}`}>
    {children}
  </h2>
);
const CardContent = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

// Badge Component
const Badge = ({ className = "", variant = "", children }) => {
  const base =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium";
  const variants = {
    outline: "border border-gray-300 bg-white text-gray-700",
    solid: "bg-gray-100 text-gray-800",
    yellow: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    blue: "bg-blue-100 text-blue-800 border border-blue-200",
    green: "bg-green-100 text-green-800 border border-green-200",
    purple: "bg-purple-100 text-purple-800 border border-purple-200",
    red: "bg-red-100 text-red-800 border border-red-200",
    orange: "bg-orange-100 text-orange-800 border border-orange-200",
  };
  return (
    <span
      className={`${base} ${
        variants[variant] || variants.outline
      } ${className}`}
    >
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
    "inline-flex items-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-blue-400 focus:ring-blue-500",
    yellow:
      "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500",
    ghost: "text-gray-600 hover:text-gray-800 hover:bg-gray-100",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
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

export default function PublicationsTab() {
  const [activeTab, setActiveTab] = useState("publications");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const publications = [
    {
      title:
        "Deep Learning Approaches for Cybersecurity in IoT Networks: A Comprehensive Survey",
      authors: "G. Kumar, P. Sharma, R. Singh",
      venue: "IEEE Transactions on Network and Service Management",
      year: 2024,
      type: "journal",
      doi: "10.1109/TNSM.2024.1234567",
      citations: 45,
      quartile: "Q1",
      impactFactor: 4.682,
    },
    {
      title:
        "Sentiment Analysis for Mental Health Monitoring: A Multi-Modal Deep Learning Framework",
      authors: "G. Kumar, A. Verma, S. Patel",
      venue:
        "Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing",
      year: 2024,
      type: "conference",
      doi: "10.18653/v1/2024.emnlp-main.123",
      citations: 23,
      ranking: "A*",
    },
    {
      title: "Context-Aware Recommendation Systems for Personalized E-Learning",
      authors: "G. Kumar, N. Gupta, R. Kumar",
      venue: "Computers & Education",
      year: 2023,
      type: "journal",
      doi: "10.1016/j.compedu.2023.104567",
      citations: 67,
      quartile: "Q1",
      impactFactor: 6.757,
    },
    {
      title:
        "Machine Learning-Based Intrusion Detection for Smart Home IoT Devices",
      authors: "G. Kumar, P. Sharma",
      venue: "2023 IEEE International Conference on Communications",
      year: 2023,
      type: "conference",
      doi: "10.1109/ICC45041.2023.9234567",
      citations: 34,
      ranking: "A",
    },
    {
      title: "Federated Learning for Privacy-Preserving Recommendation Systems",
      authors: "G. Kumar, A. Verma, S. Singh",
      venue: "ACM Transactions on Intelligent Systems and Technology",
      year: 2023,
      type: "journal",
      doi: "10.1145/3567890.1234567",
      citations: 89,
      quartile: "Q1",
      impactFactor: 3.971,
    },
    {
      title: "Explainable AI for Cybersecurity: A Systematic Literature Review",
      authors: "G. Kumar, R. Singh, P. Sharma",
      venue: "IEEE Security & Privacy",
      year: 2022,
      type: "journal",
      doi: "10.1109/MSEC.2022.1234567",
      citations: 156,
      quartile: "Q1",
      impactFactor: 2.293,
    },
  ];

  const patents = [
    {
      title: "AI-Based Intrusion Detection System for IoT Networks",
      applicationNo: "202341012345",
      status: "Filed",
      filedYear: 2024,
      country: "India",
      patentOffice: "Indian Patent Office",
      inventors: ["Dr. Gaurav Kumar", "Priya Sharma", "Rajesh Singh"],
      description:
        "A novel machine learning framework for real-time detection and prevention of cyber attacks in Internet of Things networks using deep neural networks and ensemble methods.",
      technicalField: "Cybersecurity, Machine Learning, IoT",
      applicationDate: "15th March 2024",
    },
    {
      title: "Context-Aware Recommendation Engine for Educational Platforms",
      applicationNo: "202341023456",
      status: "Under Examination",
      filedYear: 2023,
      country: "India",
      patentOffice: "Indian Patent Office",
      inventors: ["Dr. Gaurav Kumar", "Neha Gupta", "Anita Verma"],
      description:
        "An intelligent recommendation system that adapts to learner's context, preferences, and learning patterns to provide personalized educational content and learning paths.",
      technicalField: "Machine Learning, Education Technology",
      applicationDate: "8th September 2023",
    },
    {
      title: "Federated Learning System for Privacy-Preserving Data Analytics",
      applicationNo: "202241034567",
      status: "Published",
      filedYear: 2022,
      country: "India",
      patentOffice: "Indian Patent Office",
      inventors: ["Dr. Gaurav Kumar", "Suresh Patel"],
      description:
        "A distributed machine learning framework that enables collaborative model training across multiple parties while preserving data privacy and security.",
      technicalField: "Privacy-Preserving ML, Distributed Systems",
      applicationDate: "22nd November 2022",
    },
  ];

  const years = [...new Set(publications.map((p) => p.year))].sort(
    (a, b) => b - a
  );
  const types = [...new Set(publications.map((p) => p.type))];

  const filteredPublications = publications.filter((pub) => {
    const yearMatch =
      selectedYear === "all" || pub.year.toString() === selectedYear;
    const typeMatch = selectedType === "all" || pub.type === selectedType;
    return yearMatch && typeMatch;
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "filed":
        return "blue";
      case "under examination":
        return "yellow";
      case "published":
        return "green";
      case "granted":
        return "purple";
      default:
        return "outline";
    }
  };

  const getTypeColor = (type) => {
    return type === "journal" ? "blue" : "green";
  };

  const getQuartileColor = (quartile) => {
    switch (quartile) {
      case "Q1":
        return "purple";
      case "Q2":
        return "blue";
      default:
        return "outline";
    }
  };

  const getRankingColor = (ranking) => {
    switch (ranking) {
      case "A*":
        return "red";
      case "A":
        return "orange";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}

        <div className="flex items-center space-x-8 mb-8">
          <div
            onClick={() => setActiveTab("publications")}
            className={`flex items-center cursor-pointer text-2xl font-bold pb-2 ${
              activeTab === "publications"
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-900"
            }`}
          >
            <BookOpen
              className={`w-6 h-6 mr-2 ${
                activeTab === "publications" ? "text-blue-600" : "text-gray-400"
              }`}
            />
            Publications
          </div>

          <div
            onClick={() => setActiveTab("patents")}
            className={`flex items-center cursor-pointer text-2xl font-bold pb-2 ${
              activeTab === "patents"
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-900"
            }`}
          >
            <Award
              className={`w-6 h-6 mr-2 ${
                activeTab === "patents" ? "text-blue-600" : "text-gray-400"
              }`}
            />
            Patents
          </div>
        </div>

        {activeTab === "publications" && (
          <div className="space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <CardContent>
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-yellow-600">
                      {publications.length}
                    </div>
                    <div className="text-sm text-yellow-700 font-medium">
                      Total Publications
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent>
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-purple-600">
                      {publications.filter((p) => p.type === "journal").length}
                    </div>
                    <div className="text-sm text-purple-700 font-medium">
                      Journal Papers
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent>
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-green-600">
                      {publications.reduce(
                        (sum, pub) => sum + pub.citations,
                        0
                      )}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      Total Citations
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent>
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-blue-600">2024</div>
                    <div className="text-sm text-blue-700 font-medium">
                      Latest Year
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Overview Text */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                  Publications Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Research excellence demonstrated through high-impact
                  publications in premier journals and conferences, contributing
                  to advancements in cybersecurity, machine learning, and
                  educational technology with significant citations and
                  international recognition.
                </p>
              </CardContent>
            </Card>

            {/* Additional Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Reviewer for Top-Tier Journals
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Regular reviewer for IEEE Transactions, ACM journals,
                          and other prestigious publications
                        </p>
                        <Badge variant="blue" className="mt-2">
                          15+ JOURNALS
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Conference Program Committee
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Served on program committees of international
                          conferences in AI and cybersecurity
                        </p>
                        <Badge variant="green" className="mt-2">
                          10+ CONFERENCES
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <CardTitle>Publication Timeline</CardTitle>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-gray-500" />
                      <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="all">All Years</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="all">All Types</option>
                        {types.map((type) => (
                          <option key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredPublications.map((publication, index) => (
                    <div
                      key={index}
                      className="relative pl-8 pb-6 border-l-2 border-yellow-200 last:border-l-0 last:pb-0"
                    >
                      <div className="absolute left-0 top-0 w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-2"></div>
                      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {publication.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {publication.authors}
                            </p>
                            <p className="text-blue-600 font-medium mb-3">
                              {publication.venue}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              <Badge variant={getTypeColor(publication.type)}>
                                {publication.type.charAt(0).toUpperCase() +
                                  publication.type.slice(1)}
                              </Badge>

                              {publication.quartile && (
                                <Badge
                                  variant={getQuartileColor(
                                    publication.quartile
                                  )}
                                >
                                  {publication.quartile}
                                </Badge>
                              )}

                              {publication.ranking && (
                                <Badge
                                  variant={getRankingColor(publication.ranking)}
                                >
                                  {publication.ranking}
                                </Badge>
                              )}

                              <Badge variant="outline">
                                {publication.year}
                              </Badge>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                              <span>
                                <strong>Citations:</strong>{" "}
                                {publication.citations}
                              </span>
                              {publication.impactFactor && (
                                <span>
                                  <strong>Impact Factor:</strong>{" "}
                                  {publication.impactFactor}
                                </span>
                              )}
                            </div>

                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <ExternalLink className="w-4 h-4 mr-1" />
                                View Paper
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4 mr-1" />
                                Download PDF
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "patents" && (
          <div className="space-y-8">
            {/* Patent Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <CardContent>
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-yellow-600">
                      {patents.length}
                    </div>
                    <div className="text-sm text-yellow-700 font-medium">
                      Total Patents
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent>
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-blue-600">
                      {patents.filter((p) => p.status === "Filed").length}
                    </div>
                    <div className="text-sm text-blue-700 font-medium">
                      Filed
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent>
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-green-600">
                      {patents.filter((p) => p.status === "Published").length}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      Published
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent>
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-purple-600">
                      2024
                    </div>
                    <div className="text-sm text-purple-700 font-medium">
                      Latest Year
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Patent Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  Patent Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Kumar's patent portfolio reflects his commitment to
                  translating research innovations into practical solutions. His
                  patents span across cybersecurity, machine learning, and
                  educational technology, demonstrating the real-world
                  applicability of his research work.
                </p>
              </CardContent>
            </Card>

            {/* Patent Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Patent Filing Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patents
                    .sort((a, b) => b.filedYear - a.filedYear)
                    .map((patent, index) => (
                      <div
                        key={index}
                        className="relative pl-8 pb-6 border-l-2 border-yellow-200 last:border-l-0 last:pb-0"
                      >
                        <div className="absolute left-0 top-0 w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-2"></div>
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {patent.title}
                              </h3>
                              <p className="text-gray-700 mb-4 leading-relaxed">
                                {patent.description}
                              </p>

                              <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
                                <div className="space-y-2">
                                  <p className="text-gray-600">
                                    <span className="font-medium">
                                      Application No:
                                    </span>{" "}
                                    {patent.applicationNo}
                                  </p>
                                  <p className="text-gray-600">
                                    <span className="font-medium">
                                      Technical Field:
                                    </span>{" "}
                                    {patent.technicalField}
                                  </p>
                                  <p className="text-gray-600 flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="font-medium">
                                      Filed:
                                    </span>{" "}
                                    {patent.applicationDate}
                                  </p>
                                </div>
                                <div className="space-y-2">
                                  <p className="text-gray-600 flex items-center">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span className="font-medium">
                                      Country:
                                    </span>{" "}
                                    {patent.country}
                                  </p>
                                  <p className="text-gray-600">
                                    <span className="font-medium">
                                      Patent Office:
                                    </span>{" "}
                                    {patent.patentOffice}
                                  </p>
                                  <p className="text-gray-600">
                                    <span className="font-medium">Year:</span>{" "}
                                    {patent.filedYear}
                                  </p>
                                </div>
                              </div>

                              <div className="mb-4">
                                <h4 className="font-medium text-gray-900 mb-2">
                                  Inventors:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {patent.inventors.map((inventor, idx) => (
                                    <Badge key={idx} variant="outline">
                                      {inventor}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <FileText className="w-4 h-4 mr-1" />
                                  View Application
                                </Button>
                                <Button variant="outline" size="sm">
                                  <ExternalLink className="w-4 h-4 mr-1" />
                                  Patent Office Link
                                </Button>
                              </div>
                            </div>

                            <div className="flex-shrink-0">
                              <Badge variant={getStatusColor(patent.status)}>
                                {patent.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
