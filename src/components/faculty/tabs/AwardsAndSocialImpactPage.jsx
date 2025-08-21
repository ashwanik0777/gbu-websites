import React, { useState } from "react";
import {
  Heart,
  Users,
  Calendar,
  MapPin,
  TreePine,
  GraduationCap,
  Lightbulb,
  Camera,
  Trophy,
  Star,
  Award,
  Medal,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

// Shared Card Components
const Card = ({ className = "", children }) => (
  <div
    className={`rounded-xl bg-white border border-gray-200 shadow-sm ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 pt-6 pb-2  ">{children}</div>
);

const CardTitle = ({ className = "", children }) => (
  <h2 className={`font-bold ${className}`}>{children}</h2>
);

const CardContent = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

// Shared Badge Component
const Badge = ({ className = "", variant = "default", children }) => {
  const base =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide";
  const variants = {
    default: "bg-gray-100 text-gray-800",
    outline: "border border-current bg-transparent",
  };
  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Shared Button Component
const Button = ({
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 focus:ring-blue-500",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
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

// Awards Component
const AwardsComponent = () => {
  const awards = [
    {
      title: "Excellence in Research Award",
      awardingBody: "Gautam Buddha University",
      year: 2024,
      category: "institutional",
      level: "university",
      description:
        "Recognized for outstanding research contributions in Machine Learning and Cybersecurity with significant impact on academic community and industry applications.",
      significance:
        "Annual award given to top 3 faculty members university-wide",
    },
    {
      title: "Best Paper Award",
      awardingBody: "IEEE International Conference on Communications (ICC)",
      year: 2023,
      category: "academic",
      level: "international",
      description:
        "Awarded for the paper 'Machine Learning-Based Intrusion Detection for Smart Home IoT Devices' presenting novel approaches to IoT security.",
      significance: "Selected from over 2000 submitted papers",
    },
    {
      title: "Young Researcher Award",
      awardingBody: "Computer Society of India (CSI)",
      year: 2023,
      category: "professional",
      level: "national",
      description:
        "Recognition for exceptional research contributions by researchers under 35 years in computer science and information technology.",
      significance: "Annual award for top 5 young researchers in India",
    },
    {
      title: "Outstanding Faculty Award",
      awardingBody: "School of ICT, Gautam Buddha University",
      year: 2022,
      category: "institutional",
      level: "department",
      description:
        "Recognized for excellence in teaching, research, and service with consistently high student evaluations and research productivity.",
      significance: "Voted by students and peer faculty",
    },
    {
      title: "Research Excellence Fellowship",
      awardingBody:
        "Department of Science & Technology (DST), Government of India",
      year: 2022,
      category: "government",
      level: "national",
      description:
        "Prestigious fellowship supporting cutting-edge research in artificial intelligence and cybersecurity with funding for research activities.",
      significance: "Competitive fellowship with 2% selection rate",
    },
    {
      title: "Best Thesis Award",
      awardingBody: "Indian Institute of Technology Delhi",
      year: 2021,
      category: "academic",
      level: "institutional",
      description:
        "Awarded for exceptional PhD thesis on 'Advanced Machine Learning Techniques for Cybersecurity Applications' with significant contributions.",
      significance: "Best thesis among all PhD graduates in Computer Science",
    },
  ];

  const achievements = [
    {
      title: "Reviewer for Top-Tier Journals",
      description:
        "Regular reviewer for IEEE Transactions, ACM journals, and other prestigious publications",
      count: "15+ journals",
      icon: Award,
    },
    {
      title: "Conference Program Committee",
      description:
        "Served on program committees of international conferences in AI and cybersecurity",
      count: "10+ conferences",
      icon: Users,
    },
    {
      title: "Research Grant Success",
      description:
        "Successfully secured multiple research grants totaling significant funding",
      count: "₹25L+ funding",
      icon: Trophy,
    },
    {
      title: "Student Mentorship",
      description:
        "Guided numerous students to successful completion of research projects",
      count: "20+ students",
      icon: GraduationCap,
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      institutional: "bg-blue-100 text-blue-800",
      academic: "bg-green-100 text-green-800",
      professional: "bg-purple-100 text-purple-800",
      government: "bg-red-100 text-red-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const getLevelColor = (level) => {
    const colors = {
      international: "bg-purple-100 text-purple-800",
      national: "bg-blue-100 text-blue-800",
      university: "bg-green-100 text-green-800",
      department: "bg-orange-100 text-orange-800",
      institutional: "bg-indigo-100 text-indigo-800",
    };
    return colors[level] || "bg-gray-100 text-gray-800";
  };

  const getCategoryIcon = (category) => {
    const icons = {
      institutional: Trophy,
      academic: Award,
      professional: Medal,
      government: Star,
    };
    return icons[category] || Trophy;
  };

  return (
    <div className="space-y-6">
      {/* Awards Overview */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-600" />
            Awards & Recognition
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4 text-center border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600">
                {awards.length}
              </div>
              <div className="text-sm text-yellow-700">Total Awards</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200">
              <div className="text-2xl font-bold text-purple-600">
                {
                  awards.filter(
                    (award) =>
                      award.level === "international" ||
                      award.level === "national"
                  ).length
                }
              </div>
              <div className="text-sm text-purple-700">
                National/International
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200">
              <div className="text-2xl font-bold text-green-600">
                {awards.filter((award) => award.year >= 2022).length}
              </div>
              <div className="text-sm text-green-700">Recent Awards</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">
                {Math.max(...awards.map((a) => a.year))}
              </div>
              <div className="text-sm text-blue-700">Latest Year</div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Excellence in research, teaching, and service has been recognized
            through numerous prestigious awards and honors at institutional,
            national, and international levels, reflecting significant
            contributions to the academic and research community.
          </p>
        </CardContent>
      </Card>

      {/* Awards Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {awards.map((award, index) => {
          const IconComponent = getCategoryIcon(award.category);
          return (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-3 rounded-lg shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className={getCategoryColor(award.category)}>
                        {award.category}
                      </Badge>
                      <Badge className={getLevelColor(award.level)}>
                        {award.level}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {award.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {award.awardingBody}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {award.description}
                    </p>
                    <p className="text-xs text-gray-600 italic mb-3">
                      {award.significance}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {award.year}
                      </span>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Achievements */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">
            Additional Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white p-2 rounded-lg">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-700 mb-2">
                        {achievement.description}
                      </p>
                      <Badge
                        variant="outline"
                        className="text-xs border-blue-300 text-blue-700"
                      >
                        {achievement.count}
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Awards Timeline */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">
            Awards Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600"></div>
            <div className="space-y-6">
              {awards
                .sort((a, b) => b.year - a.year)
                .map((award, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 top-2 w-8 h-8 bg-gradient-to-br  from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-4 border border-blue-200 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">
                            {award.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {award.awardingBody}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getLevelColor(award.level)}>
                            {award.level}
                          </Badge>
                          <span className="text-sm text-gray-600 font-medium">
                            {award.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Social Impact Component
const SocialImpactComponent = () => {
  const socialActivities = [
    {
      title: "Digital Literacy Program for Rural Communities",
      organization: "NSS Unit, Gautam Buddha University",
      duration: "2023 - Present",
      type: "community-outreach",
      beneficiaries: "500+ villagers",
      location: "Villages around Greater Noida",
      description:
        "Leading digital literacy initiatives to bridge the digital divide by teaching basic computer skills, internet usage, and digital financial services to rural communities.",
      impact: [
        "Trained 500+ villagers in basic computer operations",
        "Helped 200+ families access government digital services",
        "Established 5 digital learning centers",
        "Created employment opportunities for 50+ youth",
      ],
      images: 3,
    },
    {
      title: "Cybersecurity Awareness Campaign",
      organization: "Cyber Crime Cell, UP Police",
      duration: "2022 - Present",
      type: "awareness",
      beneficiaries: "10,000+ citizens",
      location: "Uttar Pradesh",
      description:
        "Conducting awareness sessions on cybersecurity, online fraud prevention, and safe internet practices for students, senior citizens, and small business owners.",
      impact: [
        "Conducted 50+ awareness sessions",
        "Reached 10,000+ participants across UP",
        "Developed multilingual awareness materials",
        "Prevented potential cyber fraud cases",
      ],
      images: 5,
    },
    {
      title: "Tree Plantation & Environmental Conservation",
      organization: "Green Campus Initiative",
      duration: "2021 - Present",
      type: "environmental",
      beneficiaries: "University Community",
      location: "Gautam Buddha University Campus",
      description:
        "Leading environmental conservation efforts including tree plantation drives, waste management initiatives, and promoting sustainable practices on campus.",
      impact: [
        "Planted 1000+ trees on campus",
        "Implemented waste segregation system",
        "Reduced campus plastic usage by 60%",
        "Created awareness among 5000+ students",
      ],
      images: 4,
    },
    {
      title: "Free Coding Bootcamp for Underprivileged Students",
      organization: "Education for All Initiative",
      duration: "2022 - 2023",
      type: "education",
      beneficiaries: "200+ students",
      location: "Delhi NCR",
      description:
        "Organizing free coding workshops and bootcamps for underprivileged students to provide them with technical skills and career opportunities in IT sector.",
      impact: [
        "Trained 200+ underprivileged students",
        "80% placement rate in IT companies",
        "Partnered with 10+ companies for placements",
        "Provided scholarships to 50 students",
      ],
      images: 6,
    },
    {
      title: "COVID-19 Relief & Digital Health Solutions",
      organization: "University Health Committee",
      duration: "2020 - 2022",
      type: "healthcare",
      beneficiaries: "2000+ individuals",
      location: "Greater Noida & surrounding areas",
      description:
        "Developed digital solutions for health monitoring during COVID-19 and organized relief activities for affected families in the community.",
      impact: [
        "Developed contactless health monitoring app",
        "Distributed relief materials to 500+ families",
        "Organized virtual health consultations",
        "Created COVID-19 awareness content",
      ],
      images: 2,
    },
  ];

  const getSocialTypeColor = (type) => {
    const colors = {
      "community-outreach": "bg-blue-100 text-blue-800",
      awareness: "bg-orange-100 text-orange-800",
      environmental: "bg-green-100 text-green-800",
      education: "bg-purple-100 text-purple-800",
      healthcare: "bg-red-100 text-red-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  const getSocialTypeIcon = (type) => {
    const icons = {
      "community-outreach": Users,
      awareness: Lightbulb,
      environmental: TreePine,
      education: GraduationCap,
      healthcare: Heart,
    };
    return icons[type] || Heart;
  };

  const formatType = (type) => {
    return type
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const impactMetrics = [
    {
      title: "Community Outreach",
      description: "Digital literacy and skill development programs",
      metric: "500+ villagers trained",
      color: "blue",
    },
    {
      title: "Environmental Conservation",
      description: "Tree plantation and sustainability initiatives",
      metric: "1000+ trees planted",
      color: "green",
    },
    {
      title: "Education Access",
      description: "Free coding bootcamps for underprivileged students",
      metric: "200+ students trained",
      color: "purple",
    },
    {
      title: "Cybersecurity Awareness",
      description: "Public awareness campaigns on digital safety",
      metric: "10,000+ people reached",
      color: "orange",
    },
    {
      title: "Healthcare Support",
      description: "Digital health solutions during COVID-19",
      metric: "2000+ individuals helped",
      color: "red",
    },
    {
      title: "Technology for Good",
      description: "Developing solutions for social challenges",
      metric: "5 mobile applications",
      color: "indigo",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Social Impact Overview */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <Heart className="w-6 h-6 mr-2 text-purple-500" />
            Social Impact & Community Service
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 text-center border border-red-200">
              <div className="text-2xl font-bold text-red-600">
                {socialActivities.length}
              </div>
              <div className="text-sm text-red-700">Active Initiatives</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200">
              <div className="text-2xl font-bold text-green-600">13,000+</div>
              <div className="text-sm text-green-700">Lives Impacted</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200">
              <div className="text-2xl font-bold text-purple-600">4+</div>
              <div className="text-sm text-purple-700">Years of Service</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <div className="text-sm text-orange-700">Focus Areas</div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Deep commitment to creating positive social impact through
            technology and education. These initiatives focus on bridging the
            digital divide, environmental conservation, and community
            empowerment, demonstrating the transformative power of
            academic-community partnerships.
          </p>
        </CardContent>
      </Card>

      {/* Social Activities */}
      <div className="space-y-6">
        {socialActivities.map((activity, index) => {
          const IconComponent = getSocialTypeIcon(activity.type);
          return (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-3 rounded-lg shadow-md">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge className={getSocialTypeColor(activity.type)}>
                            {formatType(activity.type)}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {activity.title}
                        </h3>
                        <p className="text-gray-700 font-medium mb-2">
                          {activity.organization}
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {activity.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                      <div className="space-y-2">
                        <p className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">Duration:</span>{" "}
                          {activity.duration}
                        </p>
                        <p className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="font-medium">Location:</span>{" "}
                          {activity.location}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span className="font-medium">
                            Beneficiaries:
                          </span>{" "}
                          {activity.beneficiaries}
                        </p>
                        <p className="flex items-center">
                          <Camera className="w-4 h-4 mr-2" />
                          <span className="font-medium">
                            Documentation:
                          </span>{" "}
                          {activity.images} photos
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Key Impact Achievements:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {activity.impact.map((impact, idx) => (
                          <div
                            key={idx}
                            className="flex items-start bg-green-50 rounded-lg p-3"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              {impact}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Camera className="w-4 h-4 mr-1" />
                        View Gallery
                      </Button>
                      <Button size="sm">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Impact Metrics */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">
            Impact Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {impactMetrics.map((impact, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-${impact.color}-50 to-${impact.color}-100 rounded-lg p-4 border border-${impact.color}-200 hover:shadow-md transition-shadow`}
              >
                <h3 className={`font-semibold text-${impact.color}-900 mb-2`}>
                  {impact.title}
                </h3>
                <p className={`text-sm text-${impact.color}-700 mb-3`}>
                  {impact.description}
                </p>
                <div className={`text-lg font-bold text-${impact.color}-600`}>
                  {impact.metric}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Main Parent Component
const AwardsAndSocialImpactPage = () => {
  const [activeTab, setActiveTab] = useState("awards");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}

        {/* Tab Navigation */}
        <div className="flex items-center space-x-8 mb-8">
          <div
            onClick={() => setActiveTab("awards")}
            className={`flex items-center cursor-pointer text-2xl font-bold pb-2 ${
              activeTab === "awards"
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-900"
            }`}
          >
            <Trophy
              className={`w-6 h-6 mr-2 ${
                activeTab === "awards" ? "text-blue-600" : "text-gray-400"
              }`}
            />
            Awards & Recognition
          </div>

          <div
            onClick={() => setActiveTab("social")}
            className={`flex items-center cursor-pointer text-2xl font-bold pb-2 ${
              activeTab === "social"
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-900"
            }`}
          >
            <Heart
              className={`w-6 h-6 mr-2 ${
                activeTab === "social" ? "text-blue-600" : "text-gray-400"
              }`}
            />
            Social Impact
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-300">
          {activeTab === "awards" && <AwardsComponent />}
          {activeTab === "social" && <SocialImpactComponent />}
        </div>
      </div>
    </div>
  );
};

export default AwardsAndSocialImpactPage;
