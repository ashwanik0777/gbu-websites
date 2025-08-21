import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Calendar,
  Trophy,
  ExternalLink,
  Star,
} from "lucide-react";
import { clubsData } from "../../components/clubs/data/clubsData";
import HeroBanner from "../../components/HeroBanner";
import StatsCard from "../../components/StatsCard";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";
// Card component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 border-b">{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-4 ${className}`}>{children}</div>
);

// Button component
const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
  };
  const sizes = {
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
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

// Badge component
const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${className}`}
  >
    {children}
  </span>
);
// import { clubsData } from '../../components/clubs/data/clubsData';

const ClubsMain = () => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "Technical":
        return "bg-blue-500 hover:bg-blue-600";
      case "Cultural":
        return "bg-purple-500 hover:bg-purple-600";
      case "Sports":
        return "bg-green-500 hover:bg-green-600";
      case "Social":
        return "bg-orange-500 hover:bg-orange-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };
  const statsData = [
    {
      icon: Users,
      numberText: "15+",
      title: "Active Clubs",
      iconColor: "#2563eb", // blue-600
    },
    {
      icon: Users,
      numberText: "500+",
      title: "Student Members",
      iconColor: "#9333ea", // purple-600
    },
    {
      icon: Calendar,
      numberText: "100+",
      title: "Events This Year",
      iconColor: "#16a34a", // green-600
    },
    {
      icon: Star,
      numberText: "25+",
      title: "Achievements",
      iconColor: "#f97316", // orange-600
    },
  ];
  return (
    <SearchableWrapper>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <HeroBanner
        title="Explore Clubs"
        subtitle="From tech to culture, find your community and build lasting connections."
        bgTheme={2}
      />
      {/* Statistics */}
      <StatsCard stats={statsData} />

      {/* Featured Clubs */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Student Clubs & Societies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubsData.map((club) => (
              <Card
                key={club.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={club.banner}
                    alt={club.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${getCategoryColor(
                        club.category
                      )} text-white`}
                    >
                      {club.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full object-cover p-2">
                      <img
                        src={club.logo}
                        alt={`${club.name} logo`}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {club.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{club.tagline}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {club.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{club.memberCount} members</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-4 h-4" />
                      <span>{club.achievements.length} achievements</span>
                    </div>
                  </div>

                  <Link to={`/club/${club.id}`}>
                    <Button className="w-full gap-2 group-hover:bg-blue-600 transition-colors">
                      Explore Club
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      
    </div>
    </SearchableWrapper>
  );
};

export default ClubsMain;
