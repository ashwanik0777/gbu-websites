import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, Briefcase, Star, Award, TrendingUp, Users, Calendar, ExternalLink, Filter, Share2, Heart, Eye, ChevronDown, ChevronUp } from "lucide-react";
import StatsCard from "../../components/StatsCard";
import ButtonGroup from "../../components/TabsData";
import BannerSection from "../../components/HeroBanner";

const SuccessStories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedStory, setExpandedStory] = useState(null);

  const successStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      batch: "2018",
      branch: "Computer Science",
      currentRole: "Senior Software Engineer at Google",
      company: "Google",
      category: "technology",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      story: "From a small town dreamer to working at one of the world's biggest tech companies, Sarah's journey is truly inspiring. She started coding in her first year and never looked back.",
      fullStory: "Sarah Johnson's journey from a small-town student to a Senior Software Engineer at Google is a testament to dedication and continuous learning. During her time at university, she participated in numerous hackathons, contributed to open-source projects, and maintained a strong academic record. Her breakthrough came during her final year when she developed an AI-powered application that caught the attention of tech recruiters. Today, she leads a team of 15 engineers working on Google's core search algorithms.",
      achievements: [
        "Led development of Google's new search algorithm",
        "Published 5 research papers in top-tier conferences",
        "Mentored 50+ junior engineers",
        "Keynote speaker at Google I/O 2023"
      ],
      quote: "The university gave me not just knowledge, but the confidence to dream big and the skills to make those dreams reality.",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      featured: true,
      readTime: "5 min read",
      likes: 234,
      views: 1520
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      batch: "2016",
      branch: "Biomedical Engineering",
      currentRole: "Chief Medical Officer at MedTech Innovations",
      company: "MedTech Innovations",
      category: "healthcare",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      story: "Michael revolutionized patient care through his innovative medical devices. His startup has now saved thousands of lives and is valued at over $100 million.",
      fullStory: "Dr. Michael Chen combined his engineering background with medical expertise to create life-saving medical devices. His company, MedTech Innovations, developed a revolutionary heart monitoring system that can predict cardiac events 24 hours in advance. The company went from a garage startup to a $100M valuation in just 4 years, with their devices now used in over 500 hospitals worldwide.",
      achievements: [
        "Developed AI-powered cardiac monitoring system",
        "Raised $50M in Series B funding",
        "FDA approval for 3 medical devices",
        "Featured in Time Magazine's 'Top Innovators Under 40'"
      ],
      quote: "Engineering principles applied to healthcare can literally save lives. That's what drives me every day.",
      linkedin: "https://linkedin.com/in/michaelchen",
      featured: true,
      readTime: "6 min read",
      likes: 189,
      views: 1203
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      batch: "2019",
      branch: "Data Science",
      currentRole: "VP of Data Science at Netflix",
      company: "Netflix",
      category: "technology",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      story: "Emily's data science expertise helped Netflix personalize content for millions of users. Her algorithms have increased user engagement by 40%.",
      fullStory: "Emily Rodriguez joined Netflix as a junior data scientist and rapidly climbed the ranks due to her innovative approach to recommendation algorithms. Her work on personalization engines has been instrumental in Netflix's global expansion strategy. She now leads a team of 30+ data scientists and her algorithms serve over 200 million subscribers worldwide.",
      achievements: [
        "Improved Netflix recommendation accuracy by 40%",
        "Led data science team expansion across 5 countries",
        "Published breakthrough research on ML personalization",
        "Speaker at 20+ international data science conferences"
      ],
      quote: "Data science is about understanding human behavior at scale. Every algorithm we build impacts millions of lives.",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      featured: false,
      readTime: "4 min read",
      likes: 156,
      views: 892
    },
    {
      id: 4,
      name: "Alex Thompson",
      batch: "2015",
      branch: "Business Administration",
      currentRole: "CEO & Founder of EcoTech Solutions",
      company: "EcoTech Solutions",
      category: "entrepreneurship",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      story: "Alex built a sustainable technology company from scratch, now employing 200+ people and reducing carbon emissions by millions of tons annually.",
      fullStory: "Alex Thompson founded EcoTech Solutions with a mission to combat climate change through innovative technology. Starting with solar panel optimization software, the company has expanded to comprehensive renewable energy solutions. Under Alex's leadership, EcoTech has helped reduce global carbon emissions by over 2 million tons and has been recognized as one of the fastest-growing clean tech companies.",
      achievements: [
        "Grew company from 2 to 200+ employees in 5 years",
        "Secured $75M in Series C funding",
        "Winner of 'Green Tech Entrepreneur of the Year'",
        "Company valued at $500M in latest funding round"
      ],
      quote: "Business should be a force for good. We're proving that profitability and sustainability go hand in hand.",
      linkedin: "https://linkedin.com/in/alexthompson",
      featured: true,
      readTime: "7 min read",
      likes: 298,
      views: 1876
    },
    {
      id: 5,
      name: "Dr. Priya Patel",
      batch: "2017",
      branch: "Chemical Engineering",
      currentRole: "Research Director at Pharmaceutical Giants Inc.",
      company: "Pharmaceutical Giants Inc.",
      category: "research",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b6cb?w=400&h=400&fit=crop&crop=face",
      story: "Priya's groundbreaking research in drug development has led to 3 FDA-approved medications that treat rare diseases affecting children.",
      fullStory: "Dr. Priya Patel dedicated her career to developing treatments for rare pediatric diseases. Her research team has successfully brought three life-saving drugs to market, providing hope to thousands of families worldwide. Her work combines cutting-edge chemical engineering with compassionate healthcare, earning her recognition as one of the top researchers in pharmaceutical sciences.",
      achievements: [
        "3 FDA-approved drugs for rare pediatric diseases",
        "Published 40+ peer-reviewed research papers",
        "Recipient of the 'Humanitarian Researcher Award'",
        "Leading a $100M research initiative"
      ],
      quote: "Every child deserves a fighting chance. That's what drives our research every single day.",
      linkedin: "https://linkedin.com/in/priyapatel",
      featured: false,
      readTime: "5 min read",
      likes: 167,
      views: 743
    },
    {
      id: 6,
      name: "James Williams",
      batch: "2014",
      branch: "Finance",
      currentRole: "Managing Director at Goldman Sachs",
      company: "Goldman Sachs",
      category: "finance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      story: "James rose through the ranks of Wall Street to become one of the youngest Managing Directors at Goldman Sachs, managing a $2B portfolio.",
      fullStory: "James Williams started his career as an analyst and demonstrated exceptional talent in financial modeling and client relationships. His innovative approach to sustainable investing has attracted major institutional clients and generated over $2B in assets under management. He's now leading Goldman Sachs' ESG investment initiative.",
      achievements: [
        "Youngest MD in Goldman Sachs' history",
        "Manages $2B+ in assets under management",
        "Pioneer in sustainable finance strategies",
        "Keynote speaker at World Economic Forum"
      ],
      quote: "Finance has the power to drive positive change. We're investing in a better future.",
      linkedin: "https://linkedin.com/in/jameswilliams",
      featured: false,
      readTime: "4 min read",
      likes: 134,
      views: 654
    }
  ];

  const categories = [
    { value: "all", label: "All Stories", count: successStories.length },
    { value: "technology", label: "Technology", count: successStories.filter(s => s.category === "technology").length },
    { value: "healthcare", label: "Healthcare", count: successStories.filter(s => s.category === "healthcare").length },
    { value: "entrepreneurship", label: "Entrepreneurship", count: successStories.filter(s => s.category === "entrepreneurship").length },
    { value: "research", label: "Research", count: successStories.filter(s => s.category === "research").length },
    { value: "finance", label: "Finance", count: successStories.filter(s => s.category === "finance").length }
  ];

  const filteredStories = selectedCategory === "all"
    ? successStories
    : successStories.filter(story => story.category === selectedCategory);

  const featuredStories = successStories.filter(story => story.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -6,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1, filter: "grayscale(0%)" },
    hover: {
      scale: 1.05,
      filter: "grayscale(0%)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const CategoryButton = ({ category, isActive, onClick }) => (
    <motion.button
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
        ? 'bg-blue-600 text-white shadow-lg'
        : 'bg-white text-slate-600 hover:bg-slate-50 hover:shadow-md border border-slate-200 border-solid'
        }`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center space-x-2">
        <span>{category.label}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
          }`}>
          {category.count}
        </span>
      </div>
    </motion.button>
  );

  const StoryCard = ({ story, index }) => (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 border-solid flex flex-col h-full"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={story.image}
          alt={story.name}
          className="w-full h-48 object-cover"
          variants={imageVariants}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <motion.div
            className="px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-md bg-white/20 border border-white/30 border-solid text-white"
            whileHover={{ scale: 1.05 }}
          >
            {story.category}
          </motion.div>
        </div>

        {/* Featured Badge */}
        {story.featured && (
          <div className="absolute top-3 right-3">
            <motion.div
              className="px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-md bg-cyan-400/90 border border-cyan-300/50 border-solid text-gray-900 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-3 h-3 mr-1" />
              Featured
            </motion.div>
          </div>
        )}

        {/* Batch Badge */}
        <div className="absolute bottom-3 left-3">
          <div className="px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-md bg-white/20 border border-white/30 border-solid text-white">
            Class of {story.batch}
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-3 right-3 flex items-center space-x-3 text-white">
          <div className="flex items-center space-x-1">
            <Heart className="w-4 h-4" />
            <span className="text-xs font-medium">{story.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span className="text-xs font-medium">{story.views}</span>
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors line-clamp-1">
              {story.name}
            </h3>
            <div className="flex items-center space-x-2 text-slate-600 mb-1">
              <span className="text-sm font-medium line-clamp-1">{story.currentRole.split(' at ')[0]}</span>
            </div>
            <div className="text-slate-800 text-sm font-medium line-clamp-1">{story.company}</div>
          </div>
          <div className="text-xs text-slate-900 font-medium ml-3">
            {story.readTime}
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 border-solid p-4 rounded-xl mb-4 relative">
          {/* <Quote className="absolute top-2 left-2 w-4 h-4 text-slate-300" /> */}
          <p className="text-slate-700 italic text-sm leading-relaxed font-medium line-clamp-3">
            "{story.quote}"
          </p>
        </div>

        <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3 flex-1">
          {story.story}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex space-x-2">
            <motion.button
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-all duration-300"
              onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {expandedStory === story.id ? (
                <><ChevronUp className="w-4 h-4 mr-1 inline" />Less</>
              ) : (
                <><ChevronDown className="w-4 h-4 mr-1 inline" />More</>
              )}
            </motion.button>

            <motion.button
              className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors duration-300"
              onClick={() => window.open(story.linkedin, '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 text-slate-600" />
            </motion.button>

            <motion.button
              className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 className="w-4 h-4 text-slate-600" />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {expandedStory === story.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-slate-200 border-solid"
            >
              <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                {story.fullStory}
              </p>
              <div>
                <h4 className="font-bold text-slate-900 mb-3 text-sm">Key Achievements:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {story.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 border-solid"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Award className="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">

      {/* Hero Section */}
      <BannerSection
  title="Success Stories"
  subtitle="Celebrating the remarkable achievements of our alumni who are making a difference in the world"
  bgTheme={4} 
/>

      <StatsCard
        stats={[
          {
            icon: Users,
            number: successStories.length,
            title: "Success Stories",
            iconColor: "#2563eb", // blue-600
          },
          {
            icon: Star,
            number: featuredStories.length,
            title: "Featured Stories",
            iconColor: "#2563eb",
          },
          {
            icon: TrendingUp,
            number: 6,
            title: "Industry Sectors",
            iconColor: "#2563eb",
          },
          {
            icon: Briefcase,
            number: 500,
            title: "Alumni Placed",
            iconColor: "#2563eb",
          },
        ]}
      />


      {/* Category Filters */}
      <motion.section
        className="pt-12 pb-5 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-1">
            <Filter className="w-6 h-6 text-slate-500 font-bold mr-3" />
            <h2 className="text-3xl font-bold text-slate-500">Filter by Category</h2>
          </div>

          <ButtonGroup
            buttons={categories.map((category) => ({
              id: category.value,
              label: category.label,
              tooltip: category.label,
            }))}
            onClick={setSelectedCategory}
            activeButton={selectedCategory}
            size="md"
            rounded="2xl"
            theme="primary" // or any theme you want
            fullWidth={false}
            gap={true} // or false if you want them joined
            animated={true}
          />
        </div>
      </motion.section>

      {/* Featured Stories Section */}
      <AnimatePresence>
        {selectedCategory === "all" && (
          <motion.section
            className="pb-10 pt-5 px-5 bg-gradient-to-r shadow-2xl rounded-2xl mx-15 from-blue-100 to-cyan-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Stories</h2>
                <p className="text-slate-600 text-md max-w-xl mx-auto leading-relaxed">
                  Spotlight on our most inspiring alumni achievements
                </p>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {featuredStories.map((story, index) => (
                  <motion.div key={story.id} variants={itemVariants}>
                    <StoryCard story={story} index={index} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* All Stories Grid */}
      <motion.section
        className="pb-10 mt-5 pt-5 px-5 bg-gradient-to-r shadow-2xl rounded-2xl mx-15 from-blue-50 to-cyan-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >

        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-slate-900 mb-5">Other Stories</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredStories.map((story, index) => (
              <motion.div key={story.id} variants={itemVariants}>
                <StoryCard story={story} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-white mb-6 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Share Your Success Story
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            Inspire the next generation of alumni by sharing your journey and achievements
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <motion.button
              className="bg-white text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Submit Your Story
            </motion.button>
            <motion.button
              className="border-2 border-white border-solid text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Story Guidelines
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default SuccessStories;