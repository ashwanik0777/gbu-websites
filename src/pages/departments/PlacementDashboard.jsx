import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Trophy,
  GraduationCap,
  MapPin,
  Mail,
  Calendar,
  Award,
  Target,
  BookOpen,
  Star,
  ChevronRight,
  Briefcase,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Phone,
  Globe,
} from "lucide-react";

import CampusRecruiters from "../Placement/CampusRecruiters";
import BannerSection from "../../components/HeroBanner";
import StatsCard from "../../components/StatsCard";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";
const PlacementDashboard = () => {
  // Program data from the charts
  const placementStats = {
    totalStudents: 500,
    placedStudents: 320,
    highestPackage: 12,
  };

  const placementRate = 64;
  const placementStatsData = [
    {
      icon: Users,
      number: placementStats.totalStudents,
      title: "Total Students",
      iconColor: "blue",
    },
    {
      icon: CheckCircle,
      number: placementStats.placedStudents,
      title: "Placed Students",
      iconColor: "green",
    },
    {
      icon: TrendingUp,
      numberText: `${placementRate}%`,
      title: "Placement Rate",
      iconColor: "purple",
    },
    {
      icon: Award,
      numberText: `${placementStats.highestPackage} LPA`,
      title: "Highest Package",
      iconColor: "orange",
    },
  ];
  const btechPrograms = [
    { name: "IT", students: 63, color: "#FF6B94" },
    { name: "ECE", students: 24, color: "#4ECDC4" },
    { name: "CSE Core", students: 57, color: "#45B7D1" },
    { name: "AI", students: 23, color: "#96CEB4" },
    { name: "ML", students: 6, color: "#FFEAA7" },
    { name: "CSE DS", students: 6, color: "#DDA0DD" },
    { name: "Cyber Security", students: 5, color: "#FFB347" },
    { name: "Self Finance", students: 48, color: "#F4A460" },
  ];
  const recruitersData = [
    {
      name: "Samsung",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/samsung.png",
    },
    {
      name: "TCS",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/tcs.png",
    },
    {
      name: "Adobe",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/adobe.png",
    },
    {
      name: "Tech Mahindra",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/tech.png",
    },
    { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
    {
      name: "Metro",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/metro.png",
    },
    {
      name: "HCL",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/hcl.png",
    },
    {
      name: "Byjus",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/byjus.png",
    },
    {
      name: "Nagrro",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/nagrro.png",
    },
    {
      name: "Apple",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/apple.png",
    },
    { name: "Byju's", logo: "https://logo.clearbit.com/byjus.com" },
    {
      name: "White Hat Junior",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/white.png",
    },
    {
      name: "Hexaware",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/hexaware.png",
    },
    {
      name: "Blinkit",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/blink-it-logo.png",
    },
    {
      name: "Toppr",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/Toppr_logo.png",
    },
    {
      name: "Wipro",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/wipro.png",
    },
    {
      name: "Scaler",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/scaler.png",
    },
    {
      name: "Chegg",
      logo: "https://www.gbu.ac.in/USICT/media/img/recute/Chegg-Logo.png",
    },
  ];
  const otherPrograms = [
    { name: "B.C.A", enrollment: 53 },
    { name: "M.C.A-DS", enrollment: 50 },
    { name: "M.C.A-AI", enrollment: 40 },
    { name: "M. Tech VLSI Design", enrollment: 20 },
    { name: "M. Tech CSE DS", enrollment: 30 },
    { name: "M. Tech CSE AI", enrollment: 20 },
    { name: "Int B. Tech+ M. Tech", enrollment: 85 },
  ];

  const PlacementStatistics = {
    totalStudents: 232,
    placedStudents: 198,
    averagePackage: "6.5 LPA",
    highestPackage: "45 LPA",
    topRecruiters: [
      "Microsoft",
      "Amazon",
      "Google",
      "Infosys",
      "TCS",
      "Wipro",
      "Adobe",
      "Goldman Sachs",
    ],
  };

  const achievers = [
    {
      name: "Ankit Sharma",
      company: "Microsoft",
      package: "45 LPA",
      program: "B.Tech CSE",
    },
    {
      name: "Priya Singh",
      company: "Amazon",
      package: "42 LPA",
      program: "B.Tech IT",
    },
    {
      name: "Rohit Kumar",
      company: "Google",
      package: "40 LPA",
      program: "B.Tech AI",
    },
    {
      name: "Sneha Patel",
      company: "Adobe",
      package: "38 LPA",
      program: "B.Tech CSE",
    },
    {
      name: "Arjun Verma",
      company: "Goldman Sachs",
      package: "35 LPA",
      program: "B.Tech IT",
    },
    {
      name: "Kavya Gupta",
      company: "Flipkart",
      package: "32 LPA",
      program: "B.Tech ML",
    },
  ];

  const placementRules = [
    "Prior registration required within deadline",
    "Complete resume submission mandatory",
    "Attendance in all recruitment rounds compulsory",
    "No tolerance for misconduct during process",
    "Off-campus offers must be reported within 24 hours",
    "Formal attire code strictly enforced",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <SearchableWrapper>
      <div className=" py-10 bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <BannerSection
          title="Placement Cell"
          subtitle="Connecting students with opportunities."
          bgTheme={1} // You can choose any theme number from 1 to 10
        />
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
          {/* Stats Overview */}
          <StatsCard stats={placementStatsData} />

          {/* Mission & Objective */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 mr-3 text-blue-600" />
                Our Mission & Objective
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  About USICT
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Information and Communication Technology is one of the most
                  fascinating fields for understanding and practicing. The
                  students of ICT are nurtured in such a way they can be well
                  recruitable or become researchers after completion of their
                  degree from our School. We are confident that this bunch of
                  professional talents will be of great value and a big asset to
                  any organization they join.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Our Objective
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Our objective is to achieve not just 100% placements for
                  students but also to take care of the placement as per
                  requirements of every student. The Corporate Relation Cell
                  with placement coordinators organizes various workshops and
                  conducts programs that help in developing our students' skills
                  so that they can meet the industries' expectations.
                </p>
              </div>
            </div>
          </motion.section>
          {/* What's Inside Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Inside?
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Department-wise Placement Records
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Detailed statistics for all departments
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">👥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Alumni Success Stories
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Inspiring journeys of our graduates
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Recruiter Testimonials
                    </h3>
                    <p className="text-gray-600 text-sm">
                      What companies say about our students
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Training & Support Programs
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive career development initiatives
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brochure Preview */}
            <div className="text-center">
              <div
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl inline-block hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.gbu.ac.in/Content/admissions/brochures/Final_GBU_Brochure_2022.pdf",
                    "_blank"
                  )
                }
              >
                <div className="w-64 h-80 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white shadow-2xl">
                  <div className="text-center">
                    <BookOpen className="h-20 w-20 mx-auto mb-6" />
                    <div className="font-bold text-xl mb-2">Placement</div>
                    <div className="font-bold text-xl mb-2">Brochure</div>
                    <div className="text-md opacity-90">2024-25</div>
                  </div>
                </div>
                <p className="text-gray-800 mt-4 text-md">Click to preview</p>
              </div>
            </div>
            {/* Report Preview */}
            <div className="text-center">
              <div
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl inline-block hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.gbu.ac.in/Content/admissions/brochures/Final_GBU_Brochure_2022.pdf",
                    "_blank"
                  )
                }
              >
                <div className="w-64 h-80 bg-gradient-to-b from-purple-600 to-purple-400  rounded-lg flex items-center justify-center text-white shadow-2xl">
                  <div className="text-center">
                    <BookOpen className="h-20 w-20 mx-auto mb-6" />
                    <div className="font-bold text-xl mb-2">Placement</div>
                    <div className="font-bold text-xl mb-2">Report</div>
                    <div className="text-md opacity-90">2024-25</div>
                  </div>
                </div>
                <p className="text-gray-800 mt-4 text-md">Click to preview</p>
              </div>
            </div>
          </div>

          {/* Placement Statistics */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-8 ">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center justify-center pt-8">
                <TrendingUp className="w-8 h-8 mr-3 text-blue-600" />
                Placement Statistics
              </h2>
              <p className="text-slate-600">
                Comprehensive analysis of our placement performance
              </p>
            </div>

            {/* Year-wise Growth */}
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Year-wise Placement Growth
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { year: "2020", rate: "75%" },
                  { year: "2021", rate: "82%" },
                  { year: "2022", rate: "88%" },
                  { year: "2023", rate: "90%" },
                  { year: "2024", rate: "92%" },
                ].map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {data.rate}
                    </div>
                    <div className="text-slate-600 text-sm">{data.year}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sector-wise and Department-wise Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Sector-wise Distribution */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                  Sector-wise Distribution
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      sector: "IT & Software",
                      percentage: "45%",
                      color: "bg-blue-500",
                    },
                    {
                      sector: "Core Engineering",
                      percentage: "25%",
                      color: "bg-green-500",
                    },
                    {
                      sector: "Consulting & Finance",
                      percentage: "20%",
                      color: "bg-purple-500",
                    },
                    {
                      sector: "Government & Research",
                      percentage: "10%",
                      color: "bg-orange-500",
                    },
                  ].map((data, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-3 h-3 rounded-full ${data.color} mr-3`}
                        />
                        <span className="font-medium text-slate-800">
                          {data.sector}
                        </span>
                      </div>
                      <span className="font-bold text-slate-700">
                        {data.percentage}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Department-wise Stats */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                  Department-wise Placement
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      dept: "Computer Science",
                      rate: "95%",
                      color: "bg-green-500",
                    },
                    { dept: "Management", rate: "90%", color: "bg-blue-500" },
                    {
                      dept: "Electronics & Comm.",
                      rate: "88%",
                      color: "bg-purple-500",
                    },
                    { dept: "Mechanical", rate: "82%", color: "bg-orange-500" },
                  ].map((data, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-3 h-3 rounded-full ${data.color} mr-3`}
                        />
                        <span className="font-medium text-slate-800">
                          {data.dept}
                        </span>
                      </div>
                      <span className="font-bold text-green-600">
                        {data.rate}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Package Distribution and UG vs PG */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Package Distribution */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Package Distribution Analysis
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      range: "₹10L+ Packages",
                      percentage: "25%",
                      color: "bg-green-500",
                    },
                    {
                      range: "₹5-10L Packages",
                      percentage: "45%",
                      color: "bg-blue-500",
                    },
                    {
                      range: "₹3-5L Packages",
                      percentage: "30%",
                      color: "bg-orange-500",
                    },
                  ].map((data, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-4 h-4 rounded-full ${data.color} mr-3`}
                        />
                        <span className="font-medium text-slate-800">
                          {data.range}
                        </span>
                      </div>
                      <span className="font-bold text-slate-700 text-lg">
                        {data.percentage}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* UG vs PG and Domestic vs International */}
              <div className="space-y-6">
                {/* UG vs PG */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    UG vs PG Placement Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        89%
                      </div>
                      <div className="text-sm text-slate-600">
                        Undergraduate
                      </div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">
                        96%
                      </div>
                      <div className="text-sm text-slate-600">Postgraduate</div>
                    </div>
                  </div>
                </div>

                {/* Domestic vs International */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-blue-600" />
                    Domestic vs International Offers
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        85%
                      </div>
                      <div className="text-sm text-slate-600">Domestic</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">
                        15%
                      </div>
                      <div className="text-sm text-slate-600">
                        International
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Report Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Download Full Placement Report (2024)
              </motion.button>
            </div>
          </motion.section>
          {/* Achiever Detailed Cards */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className=" bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-8 shadow-lg text-white mb-16"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-black mb-4 flex items-center justify-center">
                <Trophy className="w-8 h-8 mr-3 text-blue-600" />
                Top Achievers 2024
              </h1>
              <p className="text-gray-900">
                Celebrating our students' outstanding achievements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievers.map((achiever, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border shadow-md border-blue-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-15 h-15  rounded-full overflow-hidden">
                      <img
                        src={
                          achiever.image ||
                          " https://cdn-icons-png.flaticon.com/512/21/21104.png"
                        }
                        alt={achiever.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-slate-800">
                        {achiever.name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {achiever.program}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Company</span>
                      <span className="font-medium text-slate-800">
                        {achiever.company}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Package</span>
                      <span className="font-bold text-green-600 text-lg">
                        {achiever.package}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
          {/* Top Recruiters */}
          <CampusRecruiters />

          {/* Placement Rules */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 mr-3 text-blue-600" />
                Placement Rules & Guidelines
              </h2>
              <p className="text-slate-600">
                Important guidelines for all placement activities
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {placementRules.map((rule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">{rule}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-800 mb-4 text-lg">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-700">
                      Dr. Vinay Litoria
                    </p>
                    <p className="text-blue-600 text-sm">
                      Director, Corporate Relation Cell
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-700">Dr. Raju Pal</p>
                    <p className="text-blue-600 text-sm">
                      Placement In-charge USICT, GBU
                    </p>
                  </div>
                  <div className="pt-2 border-t border-blue-200">
                    <div className="flex items-center text-blue-600 text-sm mb-1">
                      <Mail className="w-4 h-4 mr-2" />
                      crc@gbu.ac.in
                    </div>
                    <div className="flex items-center text-blue-600 text-sm">
                      <Mail className="w-4 h-4 mr-2" />
                      placement.usict@gbu.ac.in
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </SearchableWrapper>
  );
};

export default PlacementDashboard;
