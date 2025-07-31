import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  Users,
  BookOpen,
  Heart,
  Brain,
  Sparkles,
  Leaf,
  Sun,
  Moon,
  Star,
  Award,
  Download,
  User,
  Flower,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Play,
  Pause,
  Plus,
  Minus,
  Menu,
  X,
  ArrowUp,
  Eye,
  Target,
  Lightbulb,
  Zap,
  Shield,
  Smile,
  MessageCircle,
  Send,
  Home,
  Info,
  Settings,
} from "lucide-react";
import BannerSection from "../../components/HeroBanner";
import { FaUser, FaCog, FaEnvelope } from "react-icons/fa";
import StatsCard from "../../components/StatsCard";
import ButtonGroup from "../../components/TabsData";

import img1 from "../../assets/meditation/image1.png";
import img2 from "../../assets/meditation/image2.png";
import img3 from "../../assets/meditation/image3.png";
import img4 from "../../assets/meditation/image4.png";
import img5 from "../../assets/meditation/image5.png";
import img6 from "../../assets/meditation/image6.png";
import img7 from "../../assets/meditation/image7.png";
import img8 from "../../assets/meditation/image8.png";
import img9 from "../../assets/meditation/image9.png";
import img10 from "../../assets/meditation/image10.png";
import img11 from "../../assets/meditation/image11.png";
import img12 from "../../assets/meditation/image12.png";
import ImageGallery from "./ImageGallery";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const MeditationCenter = () => {
  // State
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Data
  const heroData = {
    title: "Mahatma Jyotiba Phule Dhyan Kendra",
    subtitle: "A Sacred Space for Inner Peace and Mindful Living",
    description:
      "Inspired by stupa architecture, our meditation center is a learning and retreat sanctuary designed to guide students toward inner peace, mindfulness, and self-discovery.",
    icon: <Sparkles size={80} className="text-blue-500 drop-shadow-lg" />,
    videoUrl: "https://www.youtube.com/embed/8VwufJrUhic",
  };

  const [activeButton, setActiveButton] = useState("home");

  const navigationButtons = [
    {
      id: "home",
      label: "Home",
      icon: <Home size={18} />,
      tooltip: "Go to home",
    },
    {
      id: "about",
      label: "About",
      icon: <Info size={18} />,
      tooltip: "About us",
    },
    {
      id: "services",
      label: "Services",
      icon: <Settings size={18} />,
      tooltip: "Our services",
      badge: "New",
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Mail size={18} />,
      tooltip: "Contact us",
    },
  ];
  const scheduleData = [
    {
      id: 1,
      name: "Bodhi Meditation for Beginners",
      days: "Every Monday & Thursday",
      time: "5:00-6:00 PM",
      duration: "1 Hour",
      participants: "GBU Students only",
      description:
        "Introduction to basic meditation techniques and mindfulness practices",
      icon: <Brain size={36} className="text-green-400" />,
      color: "#4ade80",
      spots: 25,
      enrolled: 18,
    },
    {
      id: 2,
      name: "Advanced Bodhi Meditation for Trainers",
      days: "Every Friday",
      time: "4:00-5:00 PM",
      duration: "1 Hour",
      participants: "BMC Members only",
      description: "Deep meditation practices for experienced practitioners",
      icon: <Award size={36} className="text-blue-400" />,
      color: "#60a5fa",
      spots: 15,
      enrolled: 12,
    },
    {
      id: 3,
      name: "Basic Mindfulness Meditation",
      days: "Every 2nd Sunday",
      time: "8:00-9:00 AM",
      duration: "1 Hour",
      participants: "GBU Family Members",
      description: "Family-friendly meditation sessions for all ages",
      icon: <Users size={36} className="text-yellow-400" />,
      color: "#f59e0b",
      spots: 30,
      enrolled: 22,
    },
    {
      id: 4,
      name: "Day Workshop on Bodhi Meditation",
      days: "Every 4th Saturday",
      time: "2:00-5:30 PM",
      duration: "3.5 Hours",
      participants: "Open to All",
      description:
        "Comprehensive workshop covering personality development, motivation, and study techniques",
      icon: <BookOpen size={36} className="text-red-400" />,
      color: "#ef4444",
      spots: 50,
      enrolled: 35,
    },
  ];
  const historySummaryData = [
    {
      icon: Users,
      title: "Community Focus",
      text: "Creating a mindful, reflective, and skillful community that promotes peace through understanding and collaboration.",
    },
    {
      icon: Flower,
      title: "Bodhi Meditation",
      text: "Practical mindfulness course based on Vipassana techniques, offered to help students achieve peace and a contented life.",
    },
    {
      icon: BookOpen,
      title: "What is Bodhi?",
      text: 'Bodhi represents Buddha-Nature and Perfect Mindfulness. Vipassana teaches "seeing things as they are" through self-observation.',
    },
    {
      icon: Moon,
      title: "Bodhi-citta Symbolism",
      text: "Symbolized by a full moon within the heart — representing compassion, wisdom, and enlightenment.",
    },
    {
      icon: Calendar,
      title: "Course Growth",
      text: "Since 2013, over 950 students from various schools have benefited from this course offered by SoBSC.",
    },
  ];
  const [benefits, setBenefits] = useState([
    {
      id: 1,
      title: "Stress Reduction",
      description:
        "Develop effective techniques to manage academic and personal stress through proven meditation practices",
      icon: <Brain size={28} className="text-green-400" />,
      color: "#4ade80",
      percentage: 85,
    },
    {
      id: 2,
      title: "Enhanced Focus",
      description:
        "Improve concentration and attention span for better academic performance and life clarity",
      icon: <Target size={28} className="text-blue-400" />,
      color: "#60a5fa",
      percentage: 90,
    },
    {
      id: 3,
      title: "Emotional Balance",
      description:
        "Learn to regulate emotions and develop inner peace through mindfulness techniques",
      icon: <Heart size={28} className="text-pink-400" />,
      color: "#f472b6",
      percentage: 78,
    },
    {
      id: 4,
      title: "Better Sleep",
      description:
        "Achieve deeper, more restful sleep through specialized meditation practices",
      icon: <Moon size={28} className="text-purple-400" />,
      color: "#a78bfa",
      percentage: 82,
    },
    {
      id: 5,
      title: "Increased Self-Awareness",
      description:
        "Develop deeper understanding of yourself and unlock your true potential",
      icon: <Eye size={28} className="text-yellow-400" />,
      color: "#fbbf24",
      percentage: 88,
    },
    {
      id: 6,
      title: "Mental Clarity",
      description:
        "Clear mental fog and enhance decision-making abilities through regular practice",
      icon: <Lightbulb size={28} className="text-emerald-400" />,
      color: "#34d399",
      percentage: 86,
    },
  ]);

  const techniques = [
    {
      id: 1,
      name: "Mindfulness of Breathing (Anapanasati)",
      description:
        "A foundational practice using breath as an object of concentration, developing awareness and calm through four progressive stages",
      color: "#3b82f6",
      difficulty: "Beginner",
      duration: "10-30 mins",
      steps: [
        "Count after out-breath (1-10)",
        "Count before in-breath (1-10)",
        "Watch breath without counting",
        "Focus on subtle sensation at nose tip",
      ],
      icon: <Sun size={24} className="text-blue-400" />,
      videoUrl: "https://www.youtube.com/embed/8VwufJrUhic",
    },
    {
      id: 2,
      name: "Loving-Kindness Meditation (Metta Bhavana)",
      description:
        "Development of unconditional love and compassion through five stages of practice",
      color: "#ef4444",
      difficulty: "Intermediate",
      duration: "15-45 mins",
      steps: [
        "Direct loving-kindness to yourself",
        "Extend to a good friend",
        "Include a neutral person",
        "Embrace a difficult person",
        "Spread to all beings everywhere",
      ],
      icon: <Heart size={24} className="text-red-400" />,
      videoUrl: "https://www.youtube.com/embed/8VwufJrUhic",
    },
    {
      id: 3,
      name: "Vipassana Meditation",
      description:
        "Insight meditation that means 'to see things as they really are' - a logical process of mental purification",
      color: "#10b981",
      difficulty: "Advanced",
      duration: "30-60 mins",
      steps: [
        "Observe thoughts without attachment",
        "Notice physical sensations",
        "Develop equanimity",
        "Cultivate wisdom and insight",
      ],
      icon: <Eye size={24} className="text-emerald-400" />,
      videoUrl: "https://www.youtube.com/embed/8VwufJrUhic",
    },
    {
      id: 4,
      name: "Walking Meditation",
      description:
        "Mindful movement practice that integrates meditation with physical activity",
      color: "#f59e0b",
      difficulty: "Beginner",
      duration: "15-30 mins",
      steps: [
        "Slow, deliberate steps",
        "Focus on foot sensations",
        "Maintain present awareness",
        "Coordinate with breathing",
      ],
      icon: <Leaf size={24} className="text-yellow-400" />,
      videoUrl: "https://www.youtube.com/embed/8VwufJrUhic",
    },
  ];

  const facultyData = {
    name: "Dr. Manish T. Meshram",
    position: "Assistant Professor & In-charge, Meditation Centre",
    school: "School of Buddhist Studies and Civilization",
    experience: "20+ years in Buddhist meditation practices",
    bio: "A dedicated practitioner and teacher of Buddhist meditation with extensive experience in guiding students toward inner peace and mindfulness.",
    achievements: [
      "Ordained into Triratna Buddhist Order since 2006",
      "Published 60+ papers on Buddhist Philosophy and Meditation",
      "Author of books on Buddhist Meditation",
      "Benefited 1000+ students through mindfulness meditation",
      "Expert in various Buddhist meditation techniques",
    ],
    contact: {
      email: "manishtmeshram@gbu.ac.in",
      phone: "+91-XXX-XXXXXXX",
    },
    image: "",
  };

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "MBA Student",
      content:
        "The meditation center has been a sanctuary for me during stressful exam periods. The techniques I learned here have completely transformed my approach to academic pressure.",
      rating: 5,
      image: "",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Engineering Student",
      content:
        "Dr. Meshram's guidance in Vipassana meditation has helped me develop better focus and emotional balance. I'm grateful for this wonderful facility on campus.",
      rating: 5,
      image: "",
    },
    {
      id: 3,
      name: "Anita Patel",
      role: "Faculty Member",
      content:
        "The family meditation sessions have brought our family closer together. It's amazing how meditation can create such positive changes in relationships.",
      rating: 5,
      image: "",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "Do I need prior experience to join meditation classes?",
      answer:
        "Not at all! Our beginner classes are designed for those who have never meditated before. We provide step-by-step guidance and support throughout your journey.",
    },
    {
      id: 2,
      question: "What should I bring to meditation sessions?",
      answer:
        "Just bring yourself and comfortable clothing. We provide meditation cushions, mats, and all necessary materials. We recommend wearing loose, comfortable clothes.",
    },
    {
      id: 3,
      question: "How long are the meditation sessions?",
      answer:
        "Sessions vary from 1 hour for regular classes to full-day workshops. We have options for different time commitments to accommodate everyone's schedule.",
    },
    {
      id: 4,
      question: "Are the sessions free for students?",
      answer:
        "Yes! All meditation sessions are completely free for GBU students and family members. We believe in making meditation accessible to everyone in our community.",
    },
    {
      id: 5,
      question: "Can I practice meditation if I'm not Buddhist?",
      answer:
        "Absolutely! While our techniques are rooted in Buddhist tradition, they are universal practices that benefit people of all backgrounds and beliefs.",
    },
  ];

  const statsData = [
    {
      title: "Students Benefited",
      numberText: "1000+",
      icon: Users,
      iconColor: "#4ade80", // Green
    },
    {
      title: "Years of Experience",
      numberText: "20+",
      icon: Award,
      iconColor: "#60a5fa", // Blue
    },
    {
      title: "Research Papers",
      numberText: "60+",
      icon: BookOpen,
      iconColor: "#f59e0b", // Amber
    },
    {
      title: "Years Running",
      numberText: "11+",
      icon: Calendar,
      iconColor: "#ef4444", // Red
    },
  ];

  // Effects
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Vision & Mission Section
  const VisionMissionSection = () => (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
              Vision & Mission
            </h2>
            <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-12">
              <Leaf size={48} className="text-green-500" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vision Card */}
              <div className="bg-white backdrop-blur-sm rounded-3xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Vision
                </h3>
                <p className="text-xl leading-relaxed text-gray-700">
                  To create a community around the pursuit of living a more
                  mindful, reflective, and skillful life, developing meditation
                  skills and fostering discussion of matters of practical
                  importance.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white backdrop-blur-sm rounded-3xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Mission
                </h3>
                <p className="text-xl leading-relaxed text-gray-700">
                  To promote human flourishing and the art of living well
                  through Buddhist meditation practices, personality
                  development, and mindfulness training for students and
                  community members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Benefits Section
  const BenefitsSection = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meditation Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Transform your life with proven meditation practices
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`transition-all duration-1000 ease-out delay-${
                index * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: benefit.color + "20" }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {benefit.description}
                </p>
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${benefit.percentage}%`,
                      backgroundColor: benefit.color,
                    }}
                  ></div>
                </div>
                <div className="text-center text-sm text-gray-500">
                  {benefit.percentage}% effectiveness reported
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Schedule Section
  const ScheduleSection = () => (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Course Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Join our comprehensive meditation programs
            </p>
          </div>
        </div>
        <div className="space-y-8">
          {scheduleData.map((session, index) => (
            <div
              key={session.id}
              className={`transition-all duration-1000 ease-out delay-${
                index * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start space-x-6 mb-6 lg:mb-0">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg"
                      style={{ backgroundColor: session.color + "20" }}
                    >
                      {session.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {session.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {session.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-blue-600" />
                          <span className="text-gray-700">{session.days}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-green-600" />
                          <span className="text-gray-700">{session.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users size={16} className="text-purple-600" />
                          <span className="text-gray-700">
                            {session.participants}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:min-w-[200px]">
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-gray-900">
                          {session.duration}
                        </div>
                        <div className="text-gray-600">Duration</div>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Enrolled</span>
                          <span>
                            {session.enrolled}/{session.spots}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full transition-all duration-500"
                            style={{
                              width: `${
                                (session.enrolled / session.spots) * 100
                              }%`,
                              backgroundColor: session.color,
                            }}
                          ></div>
                        </div>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                        <User size={16} /> Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Techniques Section
  const renderTechniques = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          <Sparkles size={32} className="text-blue-500" /> Meditation Techniques
        </h2>
        <p className="text-lg text-gray-600">
          Ancient wisdom for modern living
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {techniques.map((technique, index) => (
          <div
            key={technique.id}
            className={`transition-all duration-1000 ease-out delay-${
              index * 200
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } flex flex-col`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex-grow">
              <div
                className="border-l-4 pl-6"
                style={{ borderColor: technique.color }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {technique.icon}
                  <span className="text-sm text-gray-500">
                    {technique.difficulty} • {technique.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {technique.name}
                </h3>
                <p className="text-gray-600 mb-6">{technique.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    Practice Steps:
                  </h4>
                  {technique.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white mt-1"
                        style={{ backgroundColor: technique.color }}
                      >
                        {stepIndex + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex-grow">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <iframe
                      src={technique.videoUrl}
                      title={technique.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Faculty Section
  const renderFaculty = () => (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <User size={32} className="text-blue-600" /> Faculty & Guidance
        </h2>
        <p className="text-lg text-gray-600">
          Learn from experienced meditation masters
        </p>
      </div>

      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="p-8 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Faculty Details */}

          <div className="flex-1 text-center md:text-left">
            <div className="flex-shrink-0 w-36 h-46 m-2 mr-4 relative float-left">
               
              {!facultyData.image ? (
                <div className="absolute inset-0  flex items-center justify-center bg-blue-100 rounded">
                  <User size={60} className="text-blue-600" />
                </div>
              ) : (
                <img
                  src={facultyData.image}
                  alt={facultyData.name}
                  className="w-36 h-46 rounded  object-cover shadow-lg border-4 border-blue-200"
                />
              )} 
            </div>
            <div className="flex-1 items-center justify-around ">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {facultyData.name}
              </h3>

              <p className="text-xl text-blue-600 mb-2 flex items-center gap-2">
                <Award size={18} /> {facultyData.position}
              </p>

              <p className="text-lg text-gray-700 mb-2 flex items-center gap-2">
                <BookOpen size={18} /> {facultyData.school}
              </p>

              <p className="text-lg text-gray-600 mb-4 flex items-center gap-2">
                <Brain size={18} /> {facultyData.experience}
              </p>

              <p className="text-gray-700  mb-4 flex items-center gap-2 ">{facultyData.bio}</p>
            </div>
            {/* Achievements & Expertise */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star size={20} className="text-yellow-400" /> Achievements &
                Expertise
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {facultyData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ChevronRight size={16} className="text-blue-600 mt-1" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={`mailto:${facultyData.contact.email}`}
                className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              >
                <Mail size={16} /> {facultyData.contact.email}
              </a>
              <a
                href={`tel:${facultyData.contact.phone}`}
                className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 transform hover:scale-105"
              >
                <Phone size={16} /> {facultyData.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const HistorySummaryCard = ({ item }) => {
    const Icon = item.icon;

    return (
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        {/* Icon Container */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-indigo-100">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-inner">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          {item.title}
        </h3>

        {/* Text */}
        <p className="text-gray-600 text-center leading-relaxed text-base">
          {item.text}
        </p>
      </div>
    );
  };

  // Resources Section
  const renderResources = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          <Download size={32} className="text-blue-500" /> Resources & Downloads
        </h2>
        <p className="text-lg text-gray-600">
          Access meditation guides and course materials
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Bodhi Meditation Course Schedule",
            desc: "Complete schedule of all meditation programs",
          },
          {
            title: "Bodhi Meditation Courses",
            desc: "Detailed course descriptions and requirements",
          },
          {
            title: "Bodhi Mindfulness Club (BMC)",
            desc: "Information about joining our meditation community",
          },
          {
            title: "BMC Application Form",
            desc: "Apply to become a member of our meditation club",
          },
          {
            title: "Student Lists 2017-18",
            desc: "List of students who completed the program",
          },
          {
            title: "Student Lists 2016-17",
            desc: "Previous year's program participants",
          },
        ].map((resource, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 ease-out delay-${
              index * 100
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.desc}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
                    <Download size={16} /> Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Main Render
  return (
    <SearchableWrapper>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}

      <BannerSection
        title="Mahatma Jyotiba Phule Dhyan Kendra"
        subtitle="A Sacred Space for Inner Peace and Mindful Living"
        bgTheme={10}
      />

      {/* Statistics Section */}
      <StatsCard stats={statsData} />
      {/* Vision & Mission Section */}
      <VisionMissionSection />
      {/*History*/}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className=" text-center text-4xl md:text-5xl font-bold text-gray-900 mb-18">
            History of Bodhi Meditation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {historySummaryData.map((item, index) => (
              <HistorySummaryCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
      {/*Image Gallery*/}
      <div className="min-h-[50vh] md:h-[780px] bg-blue-50 w-full ">
        <h2 className=" text-center pt-10 text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Photo Gallery
        </h2>
        <ImageGallery images={images} autoPlayInterval={4000} />
      </div>
      {/* Benefits Section */}
      <BenefitsSection />
      {/* Schedule Section */}
      <ScheduleSection />
      {/* Techniques Section */}
      <section id="techniques" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderTechniques()}
        </div>
      </section>
      {/* Faculty Section */}
      <section id="faculty" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderFaculty()}
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                <Smile size={32} className="text-yellow-400" /> Testimonials
              </h2>
              <p className="text-lg text-gray-600">
                Hear from our community members
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-1000 ease-out delay-${
                    index * 100
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } flex flex-col`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <div className="flex items-start space-x-4 mb-6">
                      <img
                        src={
                          testimonial.image ||
                          "https://cdn-icons-png.flaticon.com/512/21/21104.png"
                        }
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-blue-200"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <User size={14} /> {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 flex-grow">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center space-x-2 mt-auto">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star
                          key={index}
                          className="text-yellow-500"
                          size={16}
                        />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, index) => (
                        <Star key={index} className="text-gray-300" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                <Shield size={32} className="text-blue-500" /> Frequently Asked
                Questions
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common queries
              </p>
            </div>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`transition-all duration-1000 ease-out delay-${
                    index * 100
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <button
                      className="flex items-center justify-between w-full text-left"
                      onClick={() =>
                        setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                      }
                    >
                      <span className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <ChevronRight
                          size={20}
                          className={`transition-transform duration-200 ${
                            expandedFAQ === faq.id ? "rotate-90" : ""
                          }`}
                        />
                        {faq.question}
                      </span>
                      {expandedFAQ === faq.id ? (
                        <Minus size={20} />
                      ) : (
                        <Plus size={20} />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedFAQ === faq.id ? "max-h-40 mt-2" : "max-h-0"
                      }`}
                    >
                      {expandedFAQ === faq.id && (
                        <p className="text-gray-700">{faq.answer}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderResources()}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
                <Mail size={36} className="text-blue-600" /> Get in Touch
              </h2>
              <p className="text-xl text-gray-600">
                We’d love to hear from you! Send us a message and we’ll respond
                shortly.
              </p>
            </div>

            <form
              className="bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl transition-all duration-500"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you for contacting us! We will get back to you soon."
                );
                e.target.reset();
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className=" text-base font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <User size={18} className="text-gray-700" /> Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className=" text-base font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Mail size={18} className="text-gray-700" /> Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mt-8">
                <label className=" text-base font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <MessageCircle size={18} className="text-gray-700" /> Message
                </label>
                <textarea
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <div className="mt-10 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Send size={20} className="text-white" /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    </SearchableWrapper>
  );
};

export default MeditationCenter;
