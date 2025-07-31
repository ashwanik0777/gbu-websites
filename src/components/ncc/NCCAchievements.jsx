 import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Share2, Shield, Star, Users } from "lucide-react";
import StatsCard from "../StatsCard";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

const NCCAchievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reusable UI components
  const Card = ({ children, className = "", ...props }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-white rounded-lg shadow ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );

  const CardHeader = ({ children, className = "" }) => (
    <div className={`border-b px-4 sm:px-6 py-4 ${className}`}>{children}</div>
  );

  const CardTitle = ({ children, className = "" }) => (
    <h3 className={`text-lg sm:text-xl font-semibold ${className}`}>{children}</h3>
  );

  const CardContent = ({ children, className = "" }) => (
    <div className={`px-4 sm:px-6 py-4 ${className}`}>{children}</div>
  );

  const Badge = ({ children, className = "", variant }) => {
    let base = "inline-block px-2 sm:px-3 py-1 rounded-full font-semibold text-xs";
    let color =
      variant === "outline"
        ? "border border-current bg-transparent"
        : "bg-blue-100 text-blue-800";
    return <span className={`${base} ${color} ${className}`}>{children}</span>;
  };

  const Button = ({
    children,
    className = "",
    variant = "primary",
    ...props
  }) => {
    let base =
      "inline-flex items-center px-3 sm:px-4 py-2 rounded font-semibold transition-colors focus:outline-none text-sm sm:text-base";
    let color =
      variant === "secondary"
        ? "bg-white text-blue-900 border border-blue-900 hover:bg-blue-50"
        : "bg-blue-900 text-white hover:bg-blue-800";
    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className={`${base} ${color} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  };

  // Dummy data (same as before)
  const majorAchievements = [
    {
      id: 1,
      title: "Best NCC Unit Award 2023",
      category: "National",
      year: "2023",
      description: "Recognized as the best NCC Army Wing unit in the state.",
      image: "/placeholder.svg",
      awardedBy: "Directorate General NCC",
      details:
        "Awarded for excellence in training, discipline, and community service.",
    },
    {
      id: 2,
      title: "Republic Day Parade Participation",
      category: "National",
      year: "2023",
      description: "3 cadets selected for prestigious Republic Day Parade.",
      image: "/placeholder.svg",
      awardedBy: "Ministry of Defence",
      details: "Highest honor for NCC cadets representing the nation.",
    },
    {
      id: 3,
      title: "State Level Shooting Championship",
      category: "State",
      year: "2023",
      description: "Gold medal in state level NCC shooting competition.",
      image: "/placeholder.svg",
      awardedBy: "NCC State Directorate",
      details: "Outstanding performance in .22 rifle shooting competition.",
    },
  ];

  const rdcSelections = [
    {
      name: "Cadet Vikram Singh",
      year: "2023",
      achievement: "Republic Day Camp Participant",
      program: "B.Tech Mechanical",
      image: "/placeholder.svg",
      details: "Selected for RDC and participated in Republic Day Parade.",
    },
    {
      name: "Cadet Anita Sharma",
      year: "2023",
      achievement: "Best Cadet at RDC",
      program: "B.Sc Physics",
      image: "/placeholder.svg",
      details: "Awarded best cadet trophy at Republic Day Camp.",
    },
    {
      name: "Cadet Rohit Patel",
      year: "2022",
      achievement: "Cultural Team Leader",
      program: "B.Com",
      image: "/placeholder.svg",
      details: "Led cultural program at Republic Day Camp.",
    },
  ];

  const alumniInArmedForces = [
    {
      name: "Lt. Priya Gupta",
      service: "Indian Army",
      rank: "Lieutenant",
      year: "2020",
      unit: "Corps of Engineers",
      image: "/placeholder.svg",
    },
    {
      name: "Flying Officer Raj Kumar",
      service: "Indian Air Force",
      rank: "Flying Officer",
      year: "2019",
      unit: "Fighter Squadron",
      image: "/placeholder.svg",
    },
    {
      name: "Sub Lieutenant Neha Singh",
      service: "Indian Navy",
      rank: "Sub Lieutenant",
      year: "2021",
      unit: "Naval Operations",
      image: "/placeholder.svg",
    },
  ];

  const competitions = [
    {
      title: "Inter-State Shooting Competition",
      position: "1st Place",
      year: "2023",
      participants: "Cadet Team",
      level: "National",
    },
    {
      title: "Best Drill Squad Competition",
      position: "2nd Place",
      year: "2023",
      participants: "Alpha Platoon",
      level: "State",
    },
    {
      title: "Adventure Camp Excellence",
      position: "1st Place",
      year: "2022",
      participants: "Adventure Team",
      level: "Regional",
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "National":
        return "bg-yellow-100 text-yellow-800";
      case "State":
        return "bg-blue-100 text-blue-800";
      case "Regional":
        return "bg-green-100 text-green-800";
      default:
        return "bg-purple-100 text-purple-800";
    }
  };

  const getServiceColor = (service) => {
    switch (service) {
      case "Indian Army":
        return "bg-green-100 text-green-800";
      case "Indian Navy":
        return "bg-blue-100 text-blue-800";
      case "Indian Air Force":
        return "bg-sky-100 text-sky-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const legacyStats = [
    {
      icon: Award,
      numberText: "25+",
      title: "Major Awards",
      iconColor: "#fbbf24", // yellow
    },
    {
      icon: Star,
      numberText: "15+",
      title: "RDC Selections",
      iconColor: "#8b5cf6", // purple
    },
    {
      icon: Users,
      numberText: "50+",
      title: "Alumni Officers",
      iconColor: "#06b6d4", // cyan
    },
    {
      icon: Trophy,
      numberText: "100+",
      title: "Competitions Won",
      iconColor: "#ef4444", // red
    },
  ];
  return (
    <SearchableWrapper>
    <div className="space-y-8 px-4 sm:px-6 lg:px-20 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Achievements & Recognition
        </h2>
        <p className="text-base sm:text-lg text-gray-600 px-2">
          Celebrating excellence in discipline, leadership, and national service
        </p>
      </motion.div>
      <StatsCard stats={legacyStats} />
      {/* Major Achievements Carousel */}
      {/* ... Keep same as in previous message ... */}

      {/* RDC Selections */}
      <section>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center px-2 sm:px-0">
          <Shield className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-orange-600" />
          Republic Day Camp Selections
        </h3>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {rdcSelections.map((cadet, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={cadet.image}
                  alt={cadet.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 border-4 border-orange-200 object-cover"
                />
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                  {cadet.name}
                </h4>
                <div className="flex justify-center items-center space-x-2 text-xs sm:text-sm my-2 text-orange-600 font-semibold">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-center">{cadet.achievement}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{cadet.program}</p>
                <p className="text-xs sm:text-sm text-gray-700 mt-2">{cadet.details}</p>
                <Badge variant="outline" className="mt-2">
                  {cadet.year}
                </Badge>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Armed Forces Alumni */}
      <section>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
          Alumni in Armed Forces
        </h3>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {alumniInArmedForces.map((officer, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={officer.image}
                  alt={officer.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto mb-4 border-3 border-gray-200"
                />
                <h4 className="text-base sm:text-lg font-bold text-gray-900">
                  {officer.name}
                </h4>
                <Badge className={getServiceColor(officer.service)}>
                  {officer.service}
                </Badge>
                <p className="text-sm sm:text-base text-gray-600 mt-2">{officer.rank}</p>
                <p className="text-xs sm:text-sm text-gray-600">{officer.unit}</p>
                <Badge variant="outline" className="text-xs mt-2">
                  Commissioned {officer.year}
                </Badge>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Competitions */}
      <section>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
          Competition Results
        </h3>
        <div className="space-y-4">
          {competitions.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-1 w-full sm:w-auto">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                    {c.title}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mt-2">
                    <span>
                      Position: <strong>{c.position}</strong>
                    </span>
                    <span>
                      Year: <strong>{c.year}</strong>
                    </span>
                    <span>
                      Participants: <strong>{c.participants}</strong>
                    </span>
                  </div>
                </div>
                <Badge className={`${getCategoryColor(c.level)} shrink-0`}>{c.level}</Badge>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hall of Fame */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl text-center">Hall of Fame</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">
                Distinguished Alumni
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc pl-4">
                <li>
                  Brig. Rajesh Kumar - Brigadier, Indian Army (Batch 2005)
                </li>
                <li>
                  Wing Cdr. Priya Singh - Wing Commander, IAF (Batch 2008)
                </li>
                <li>
                  Cdr. Vikram Sharma - Commander, Indian Navy (Batch 2007)
                </li>
                <li>
                  Col. Anita Gupta - Colonel, Army Medical Corps (Batch 2006)
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">
                Recent Honors
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc pl-4">
                <li>Best NCC Unit Award - State Level (2023)</li>
                <li>Excellence in Training Award (2022)</li>
                <li>Best Community Service Unit (2022)</li>
                <li>Outstanding Leadership Development (2021)</li>
              </ul>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
    </SearchableWrapper>
  );
};

export default NCCAchievements;