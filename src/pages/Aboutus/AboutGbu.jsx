import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Lightbulb,
  Users,
  BookOpen,
  Award,
  ChevronDown,
  Check,
  GraduationCap,
  Star,
  Building,
  Leaf,
  Droplets,
  Sun,
  Flower,
  User,
  Zap,
  TreePine,
  Dumbbell,
  Target,
  Trophy,
  Globe,
  Heart,
  Sparkles,
  ArrowRight,
  Play,
  Eye,
  Compass,
  Shield,
  Cpu,
  Briefcase,
  Scale,
  Palette,
  Flame,
  Book,
  Library,
  Mic,
  Monitor,
  Microscope,
  Wifi,
  Home,
  Utensils,
  Clock,
  CreditCard,
  Activity,
  Smile,
  Calendar,
  UserCheck,
  MapPin,
  Phone,
  Mail,
  Download,
  ExternalLink
} from "lucide-react";

import BannerSection from "../../components/HeroBanner.jsx";
import StatsCard from "../../components/StatsCard.jsx";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

// Enhanced Button component with animations
const Button = ({ children, className = "", size = "md", variant = "primary", ...props }) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg",
    ghost: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900"
  };

  return (
    <button
      className={`inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/30 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Enhanced Card component with hover effects
const Card = ({ children, className = "", hover = true, ...props }) => (
  <div
    className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 border-solid transition-all duration-300${hover ? 'hover:shadow-2xl hover:scale-105 hover:bg-white/90' : ''} ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Enhanced CardContent component
const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

// Badge component with glow effect
const Badge = ({ children, className = "", color = "blue", ...props }) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    red: "bg-red-100 text-red-700 border-red-200"
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 ${colorClasses[color]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

// Dynamic data structure (backend-ready)
const aboutData = {
  hero: {
    title: "About Gautam Buddha University",
    subtitle: "An Ultimate Destination for Higher Learning",
    backgroundImage: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },

  statistics: [
    { icon: MapPin, number: 511, numberText: "511+", title: "Acres Campus", iconColor: "#3b82f6" },
    { icon: Users, numberText: "4K+", title: "Students", iconColor: "#10b981" },
    { icon: Award, numberText: "200+", title: "Faculty Members", iconColor: "#8b5cf6" },
    { icon: BookOpen, number: 150, title: "Programs", iconColor: "#f97316" },

  ],

  overview: {
    title: "About Gautam Buddha University",
    description: "Gautam Buddha University, established in 2008 by the Government of Uttar Pradesh, stands as a beacon of educational excellence. With UGC recognition and AIU membership, our university is committed to providing world-class multidisciplinary education that combines traditional values with modern innovation across diverse academic fields.",
    image: "https://architecture.live/wp-content/uploads/2022/09/7-2048x1448.jpg"
  },

  vision: {
    icon: "Eye",
    title: "Our Vision",
    description: "To emerge as a world-class university that promotes excellence in teaching, research, and innovation while fostering global citizenship and sustainable development for the betterment of society."
  },

  mission: {
    icon: "Target",
    title: "Our Mission",
    points: [
      "Provide quality education and research opportunities",
      "Foster innovation and entrepreneurship",
      "Promote ethical values and social responsibility",
      "Build global partnerships and collaborations"
    ]
  },

  governance: [
    {
      icon: "Users",
      title: "Chancellor",
      subtitle: "Chief Minister of UP",
      link: "/about-us/chancellor-message"
    },
    {
      icon: "Award",
      title: "Vice Chancellor",
      subtitle: "Academic Leadership",
      link: "/about-us/vice-chancellor-message"
    },
    {
      icon: "GraduationCap",
      title: "Deans of Schools",
      subtitle: "Academic Departments",
      link: "/deans-of-schools"
    },
    {
      icon: "BookOpen",
      title: "Registrar",
      subtitle: "Administrative Affairs",
      link: "/registrar"
    }
  ]
  ,

  schools: [
    {
      name: "School of Engineering",
      icon: "Cpu",
      summary: "Technology-led UG/PG courses",
      link: "/schools/engineering"
    },
    {
      name: "School of ICT",
      icon: "Monitor",
      summary: "Computing & Information Technology",
      link: "/schools/ict"
    },
    {
      name: "School of Management",
      icon: "Briefcase",
      summary: "Business & Management Studies",
      link: "/schools/management"
    },
    {
      name: "School of Biotechnology",
      icon: "Microscope",
      summary: "Life Sciences & Research",
      link: "/schools/biotechnology"
    },
    {
      name: "School of Law",
      icon: "Scale",
      summary: "Legal Studies & Practice",
      link: "/schools/law"
    },
    {
      name: "School of Vocational Studies & Applied Sciences",
      icon: "Building",
      summary: "Design & Planning",
      link: "/schools/vocational"
    },
    {
      name: "School of Buddhist Studies",
      icon: "Flame",
      summary: "Philosophy & Spirituality",
      link: "/schools/buddhist"
    },
    {
      name: "School of Humanities",
      icon: "Book",
      summary: "Liberal Arts & Literature",
      link: "/schools/humanities"
    }
  ],

  facilities: [
    {
      title: "Central Library",
      icon: "Library",
      summary: "Digital collections & research facilities",
      link: "#"
    },
    {
      title: "Modern Auditoriums",
      icon: "Mic",
      summary: "Advanced audio-visual systems",
      link: "#"
    },
    {
      title: "Smart Classrooms",
      icon: "Monitor",
      summary: "Technology-enabled learning spaces",
      link: "#"
    },
    {
      title: "Research Labs",
      icon: "Microscope",
      summary: "State-of-the-art equipment",
      link: "/research/research-centers"
    },
    {
      title: "Computer Centers",
      icon: "Cpu",
      summary: "High-speed connectivity",
      link: "#"
    },
    {
      title: "Conference Halls",
      icon: "Building",
      summary: "Professional meeting spaces",
      link: "#"
    }
  ],

  hostelFeatures: [
    { text: "18+ Modern Hostels", icon: "Home" },
    { text: "Wi-Fi Enabled Campus", icon: "Wifi" },
    { text: "In-house Dining Facilities", icon: "Utensils" },
    { text: "24×7 Medical Support", icon: "Heart" },
    { text: "Banking & ATM Services", icon: "CreditCard" }
  ],

  greenFeatures: [
    { title: "Rainwater Harvesting", icon: "Droplets" },
    { title: "Solar-Powered Lighting", icon: "Sun" },
    { title: "Botanical Gardens", icon: "Flower" },
    { title: "Pedestrian Pathways", icon: "User" },
    { title: "Sustainable Design", icon: "Leaf" },
    { title: "Green Architecture", icon: "TreePine" }
  ],

  sportsFeatures: [
    { title: "47-Acre Sports Zone", icon: "Target", description: "Comprehensive outdoor facilities" },
    { title: "Multi-Sport Facilities", icon: "Dumbbell", description: "Cricket, Football, Squash, Gym" },
    { title: "₹78 Cr Indoor Stadium", icon: "Trophy", description: "Coming in 2025" }
  ],

  researchStats: [
    { value: 3500, suffix: "+", label: "Publications", color: "blue" },
    { value: 82, suffix: "", label: "Ph.D.s Awarded", color: "green" },
    { label: "DST, CSIR", sublabel: "Sponsored Research", color: "purple" },
    { label: "AI, Cyber", sublabel: "Centers of Excellence", color: "orange" }
  ],

  studentLife: [
  { 
    title: "30+ Clubs & Societies", 
    icon: "Users",
    link: "/campus-life/clubs-societies"
  },
  { 
    title: "NSS/NCC Programs", 
    icon: "Award",
    link: "/campus-life/NSS"
  },
  { 
    title: "Tech & Cultural Fests", 
    icon: "Sparkles",
    link: "/announcements/event-calendar"
  },
  { 
    title: "Campus Amenities", 
    icon: "Home",
    link: "#"
  }
]

};

// Icon mapping for dynamic icon rendering
const iconMap = {
  MapPin, Users, Award, BookOpen, Star, Eye, Target, GraduationCap, Cpu, Monitor, Briefcase,
  Microscope, Scale, Building, Flame, Book, Library, Mic, Home, Wifi, Shield, Utensils,
  Heart, CreditCard, Droplets, Sun, Flower, User, Leaf, TreePine, Dumbbell, Trophy,
  Sparkles, ChevronDown, Check, Globe, ArrowRight, Play, Compass, Zap, Activity, Smile,
  Calendar, UserCheck, Phone, Mail, Download, ExternalLink
};

const AboutGbu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderIcon = (iconName, className = "w-6 h-6") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  return (
    <SearchableWrapper>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section */}
        <BannerSection
          title={aboutData.hero.title}
          subtitle={aboutData.hero.subtitle}
          bgTheme={2}
        />


        {/* Statistics Section */}
        <StatsCard stats={aboutData.statistics} />

        {/* Overview Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <img
                    src={aboutData.overview.image}
                    alt="Gautam Buddha University Campus"
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Badge color="blue" className="mb-6">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Est. 2008
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {aboutData.overview.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {aboutData.overview.description}
                </p>
                <Link to="/aboutUs/GBUHistory"><Button className="group">
                  Learn More About Our History
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                      {renderIcon(aboutData.vision.icon, "w-8 h-8")}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{aboutData.vision.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {aboutData.vision.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-full text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                      {renderIcon(aboutData.mission.icon, "w-8 h-8")}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{aboutData.mission.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {aboutData.mission.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Governance Section */}
        <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-20">
              {/* <Badge color="purple" className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-purple-100 text-purple-700 rounded-full shadow-md mb-5">
                <Shield className="w-5 h-5 mr-2" />
                Leadership
              </Badge> */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Governance & Organizational Leadership
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Our distinguished leadership team guides the university with vision and expertise.
              </p>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {aboutData.governance.map((leader, index) => (
                <Link key={index} to={leader.link} className="block">
                  <Card className="text-center group bg-white/60 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardContent className="p-8">
                      <div className="mb-6 flex justify-center">
                        <div className="p-4 rounded-full bg-gradient-to-br from-sky-300 to-blue-800 shadow-lg transition-transform transform group-hover:scale-110">
                          <div className="text-white">
                            {renderIcon(leader.icon, "w-8 h-8")}
                          </div>
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">{leader.title}</h3>
                      <p className="text-gray-600 text-sm">{leader.subtitle}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* Schools Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              {/* <Badge color="blue" className="mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                Academic Excellence
              </Badge> */}
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Academic Schools & Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive education across diverse disciplines
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutData.schools.map((school, index) => (
                <Link key={index} to={school.link} className="block">
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 h-48 flex flex-col">
                    <CardContent className="p-4 text-center flex flex-col justify-between h-full">
                      <div className="mb-3 flex justify-center">
                        <div className="p-2 bg-gradient-to-r from-purple-300 to-purple-700 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                          {renderIcon(school.icon, "w-6 h-6")}
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className={`font-bold text-gray-900 mb-2 leading-tight ${school.name.length > 20 ? 'text-sm' : 'text-base'
                          }`}>
                          {school.name}
                        </h3>
                        <p className={`text-gray-600 leading-tight ${school.summary.length > 30 ? 'text-xs' : 'text-sm'
                          }`}>
                          {school.summary}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              {/* <Badge color="green" className="mb-4">
                <Building className="w-4 h-4 mr-2" />
                Infrastructure
              </Badge> */}
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                World-Class Facilities & Infrastructure
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutData.facilities.map((facility, index) => (
                <Link key={index} to={facility.link} className="block">
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6 flex justify-center">
                        <div className="p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                          {renderIcon(facility.icon, "w-8 h-8")}
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3 text-lg">{facility.title}</h3>
                      <p className="text-gray-600">{facility.summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hostel Section */}
        <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <Badge color="orange" className="mb-4">
                  <Home className="w-4 h-4 mr-2" />
                  Residential Life
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Hostel & Residential Experience
                </h2>

                <div className="space-y-4">
                  {aboutData.hostelFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                      <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white mr-4">
                        {renderIcon(feature.icon, "w-5 h-5")}
                      </div>
                      <span className="text-lg text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <img src="/assets/hostels.jpg" alt="Hostel" className="w-80 object-contain rounded-2xl" />
                  </div>
                  <div className="h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center">
                    <Wifi className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-32 bg-gradient-to-br from-green-200 to-teal-200 rounded-2xl flex items-center justify-center">
                    <Utensils className="w-12 h-12 text-green-600" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img src="/assets/hostel2.jpg" alt="Hostel 2" className="w-80 object-contain rounded-2xl" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Meditation & Wellness Section */}
        <section className="py-20 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center bg-white rounded-3xl shadow-lg p-8">
           

              <div className="flex items-center justify-center group">
                <img
                  src="/assets/meditation.jpg"
                  alt="Meditation"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-2xl shadow-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              <Card className="shadow-none bg-transparent">
                <CardContent className="p-8 md:p-12">
                  {/* <Badge color="green" className="mb-6 inline-flex items-center gap-2 text-lg font-semibold ">
                    <Heart className="w-5 h-5" />
                    Wellness
                  </Badge> */}

                  <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
                    Meditation & Wellness Center
                  </h2>

                  <div className="flex justify-center md:justify-start space-x-12 mb-8">
                    {[
                      { icon: "Activity", label: "Yoga" },
                      { icon: "Smile", label: "Meditation" },
                      { icon: "Leaf", label: "Wellness" }
                    ].map((item, index) => (
                      <div key={index} className="text-center md:text-left">
                        <div className="p-3 bg-gradient-to-r from-green-600 to-teal-700 rounded-full text-white mb-3 mx-auto md:mx-0 w-12 h-12 flex items-center justify-center shadow-md ">
                          {renderIcon(item.icon, "w-6 h-6")}
                        </div>
                        <p className="text-sm text-gray-700 font-medium">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center md:text-left">
                    Our dedicated wellness center offers yoga sessions, mindfulness practices,
                    and spiritual guidance to nurture the holistic development of our students.
                    Experience tranquility in our serene meditation dome.
                  </p>

                  <div className="text-center md:text-left ">
                    <Link to="/campus-life/meditation-center"><Button className="group/btn inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl ">
                      Explore Wellness Programs
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button></Link>
                  </div>
                </CardContent>
              </Card>
           
          </div>
        </section>


        {/* Section 10: Green Eco-Friendly Campus */}

        <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Badge color="green" className="mb-4">
                <Leaf className="w-4 h-4 mr-2" />
                Sustainability
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Green Eco-Friendly Campus
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Committed to environmental sustainability and green initiatives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutData.greenFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                        {renderIcon(feature.icon, "w-8 h-8")}
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-emerald-600 transition-colors">
                      {feature.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-white/20 rounded-full">
                      <Globe className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Green Commitment</h3>
                  <p className="text-lg opacity-90 max-w-2xl mx-auto">
                    We are dedicated to creating a sustainable future through innovative green technologies,
                    renewable energy solutions, and eco-friendly campus design.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Section 11: Sports & Recreation */}
        <section className="py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              {/* <Badge color="purple" className="mb-4 bg-purple-100 text-purple-700 border border-purple-200 border-solid">
                <Trophy className="w-4 h-4 mr-2" />
                Athletics Excellence
              </Badge> */}
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Sports & Recreation
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Eklavya Sports Complex - Excellence in Athletics
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {aboutData.sportsFeatures.map((sport, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 border-solid shadow-sm hover:shadow-md transition-all duration-300 group rounded-lg"
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-purple-100 text-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {renderIcon(sport.icon, "w-8 h-8")}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">
                      {sport.title}
                    </h3>
                    <p className="text-gray-600">{sport.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link to="/campus-life/sports-fitness"><Button
                variant="outline"
                size="lg"
                className="group border-purple-500 border-[1px] border-solid text-purple-600 hover:bg-purple-50 transition-all"
              >
                Explore Sports Programs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button></Link>
            </div>
          </div>
        </section>


        {/* Section 12: Research & Innovation */}
        <section
          className="py-16 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Research & Innovation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center rounded-xl shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">700+</div>
                  <p className="text-gray-700">Publications</p>
                </CardContent>
              </Card>

              <Card className="text-center rounded-xl shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">82</div>
                  <p className="text-gray-700">Ph.D.s Awarded</p>
                </CardContent>
              </Card>

              <Card className="text-center rounded-xl shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="text-xl font-bold text-purple-600 mb-2">DST, CSIR</div>
                  <p className="text-gray-700">Sponsored Research</p>
                </CardContent>
              </Card>

              <Card className="text-center rounded-xl shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="text-xl font-bold text-orange-600 mb-2">AI, Cyber</div>
                  <p className="text-gray-700">Centers of Excellence</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 13: Student Life & Community */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 to-purple-100/30"></div>
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <Badge color="purple" className="mb-4">
        <Sparkles className="w-4 h-4 mr-2" />
        Campus Life
      </Badge>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Student Life & Community
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Vibrant campus life with diverse opportunities for growth and engagement
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {aboutData.studentLife.map((activity, index) => (
        <Link key={index} to={activity.link} className="block">
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/70 backdrop-blur-sm cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(activity.icon, "w-8 h-8")}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-purple-600 transition-colors">
                {activity.title}
              </h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  </div>
</section>
      </div>
    </SearchableWrapper>
  );
};

export default AboutGbu;
