import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Share2, Users, Heart } from "lucide-react";
import StatsCard from "../StatsCard";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

// Basic UI components
const Card = ({ children, className = "", ...props }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`rounded-lg shadow bg-white ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }) => (
  <div
    className={`text-xl font-semibold flex items-center ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

const Badge = ({ children, className = "", variant, ...props }) => {
  let base = "inline-block px-3 py-1 rounded-full text-xs font-semibold";
  let color = className;
  if (!className) {
    color =
      variant === "outline"
        ? "border border-blue-600 text-blue-600 bg-white"
        : "bg-blue-100 text-blue-800";
  }
  return (
    <span className={`${base} ${color}`} {...props}>
      {children}
    </span>
  );
};

const Button = ({ children, className = "", variant, size, ...props }) => {
  let base =
    "inline-flex items-center px-3 py-1.5 rounded-md font-medium focus:outline-none transition-colors";
  let color =
    variant === "outline"
      ? "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50"
      : "bg-blue-600 text-white hover:bg-blue-700";
  let sz =
    size === "sm"
      ? "text-xs px-2 py-1"
      : size === "lg"
      ? "text-lg px-5 py-3"
      : "text-sm px-3 py-1.5";
  return (
    <button className={`${base} ${color} ${sz} ${className}`} {...props}>
      {children}
    </button>
  );
};

const NSSAchievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    {
      id: 1,
      title: "National NSS Award 2023",
      category: "National",
      year: "2023",
      description:
        "Recognized for outstanding community service and social impact initiatives",
      image: "/placeholder.svg",
      awardee: "NSS Unit, University",
      details:
        "Awarded by Ministry of Youth Affairs & Sports for exceptional voluntary service",
    },
    {
      id: 2,
      title: "State Level Excellence Award",
      category: "State",
      year: "2023",
      description: "Excellence in environmental conservation projects",
      image: "/placeholder.svg",
      awardee: "Environmental Wing",
      details:
        "Recognized for tree plantation and waste management initiatives",
    },
    {
      id: 3,
      title: "University Best NSS Unit",
      category: "University",
      year: "2023",
      description: "Best performing NSS unit across all departments",
      image: "/placeholder.svg",
      awardee: "Overall NSS Unit",
      details: "Highest volunteer participation and community impact metrics",
    },
  ];

  const individualAwards = [
    {
      name: "Rahul Kumar",
      award: "Best NSS Volunteer 2023",
      year: "2023",
      department: "Computer Science",
      image: "/placeholder.svg",
      achievement: "Led 15+ community service projects",
    },
    {
      name: "Priya Singh",
      award: "Social Impact Leader",
      year: "2023",
      department: "English Literature",
      image: "/placeholder.svg",
      achievement: "Initiated digital literacy program",
    },
    {
      name: "Amit Patel",
      award: "Community Service Excellence",
      year: "2022",
      department: "Commerce",
      image: "/placeholder.svg",
      achievement: "Organized health awareness campaigns",
    },
  ];

  const recognitions = [
    {
      title: "Featured in National Media",
      description: "NSS blood donation drive covered by national news channels",
      date: "2023-12-15",
      type: "media",
    },
    {
      title: "Government Appreciation Letter",
      description: "Recognized by District Collector for flood relief work",
      date: "2023-11-20",
      type: "government",
    },
    {
      title: "University Newsletter Feature",
      description: "Monthly feature on NSS activities and impact",
      date: "2023-10-30",
      type: "internal",
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "National":
        return <Trophy className="h-6 w-6 text-yellow-600" />;
      case "State":
        return <Medal className="h-6 w-6 text-blue-600" />;
      case "University":
        return <Award className="h-6 w-6 text-green-600" />;
      default:
        return <Star className="h-6 w-6 text-purple-600" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "National":
        return "bg-yellow-100 text-yellow-800";
      case "State":
        return "bg-blue-100 text-blue-800";
      case "University":
        return "bg-green-100 text-green-800";
      default:
        return "bg-purple-100 text-purple-800";
    }
  };

  const shareAchievement = (achievement) => {
    const shareText = `🏆 Proud to share: ${achievement.title} - ${achievement.description} #NSS #Achievement #CommunityService`;
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(
        shareText
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href
      )}`,
    };
    return shareUrls;
  };
  const statsData = [
    {
      icon: Award,
      numberText: "15+",
      title: "Awards Received",
      iconColor: "#3b82f6",
    },
    {
      icon: Users,
      numberText: "50+",
      title: "Individual Recognitions",
      iconColor: "#10b981",
    },
    {
      icon: Star,
      numberText: "25+",
      title: "Media Features",
      iconColor: "#16a34a",
    },
    {
      icon: Heart,
      numberText: "100%",
      title: "Volunteer Satisfaction",
      iconColor: "#ef4444",
    },
  ];

  return (
    <SearchableWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-8 px-4 sm:px-6 lg:px-20 mx-auto max-w-7xl"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-gray-600">
            Celebrating our journey of service and excellence
          </p>
        </div>
        <StatsCard stats={statsData} />;{/* Major Achievements Carousel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-yellow-600" />
              <span>Major Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-hidden rounded-lg">
              <motion.div
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
              >
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    className="w-full flex-shrink-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 	p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg">
                      <div>
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge
                            className={getCategoryColor(achievement.category)}
                          >
                            {achievement.category} Level
                          </Badge>
                          <span className="text-2xl font-bold text-gray-900">
                            {achievement.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-700">
                          {achievement.description}
                        </p>
                        <p className="text-sm text-gray-600">
                          {achievement.details}
                        </p>
                        <p className="font-semibold text-blue-600">
                          Awarded to: {achievement.awardee}
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {Object.entries(shareAchievement(achievement)).map(
                            ([platform, url]) => (
                              <Button
                                key={platform}
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(url, "_blank")}
                                className="capitalize min-w-[80px] text-xs"
                              >
                                <Share2 className="h-3 w-3 mr-1" />
                                {platform}
                              </Button>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <div className="flex justify-center mt-6 space-x-2">
                {achievements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Individual Awards */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {individualAwards.map((awardee, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <img
                    src={awardee.image}
                    alt={awardee.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200"
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {awardee.name}
                  </h4>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Award className="h-4 w-4 text-yellow-600" />
                    <span className="text-blue-600 font-semibold">
                      {awardee.award}
                    </span>
                  </div>
                  <p className="text-gray-600">{awardee.department}</p>
                  <p className="text-sm text-gray-700 mb-4">
                    {awardee.achievement}
                  </p>
                  <Badge variant="outline">{awardee.year}</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        {/* Recognitions */}
        <motion.div
          className="space-y-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {recognitions.map((recognition, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="hover:shadow-md">
                <CardContent>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">
                        {recognition.title}
                      </h4>
                      <p className="text-gray-700">{recognition.description}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(recognition.date).toLocaleDateString("en-IN")}
                      </p>
                    </div>
                    <Badge
                      className={
                        recognition.type === "media"
                          ? "bg-purple-100 text-purple-800"
                          : recognition.type === "government"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }
                    >
                      {recognition.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SearchableWrapper>
  );
};

export default NSSAchievements;
