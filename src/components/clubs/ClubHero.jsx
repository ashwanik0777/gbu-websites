
import React, { useState } from 'react';
import { Play, Users, Award, ArrowLeft  } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchableWrapper from '../Searchbar/SearchableWrapper';
const Button = ({ children, className = '', variant = 'default', size = 'md', ...props }) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 text-gray-900 bg-white hover:bg-gray-100',
    ghost: 'bg-transparent text-gray-500 hover:bg-gray-200',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  return (
    <button
      className={`${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Badge = ({ children, className = '', ...props }) => (
  <span
    className={`inline-block rounded-full font-semibold text-xs px-3 py-1 ${className}`}
    {...props}
  >
    {children}
  </span>
); 

 

const ClubHero = ({ club }) => {
  const [showVideo, setShowVideo] = useState(false);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Technical': return 'bg-blue-500 hover:bg-blue-600';
      case 'Cultural': return 'bg-purple-500 hover:bg-purple-600';
      case 'Sports': return 'bg-green-500 hover:bg-green-600';
      case 'Social': return 'bg-orange-500 hover:bg-orange-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <>
    <SearchableWrapper>
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
        <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 py-4 z-10 relative">
          <Link 
            to="/campus-life/clubs-societies" 
            className="inline-flex items-center text-white hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            
          </Link>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img 
                  src={club.logo} 
                  alt={`${club.name} logo`}
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 border-white/20 bg-white/10 p-2"
                />
                <Badge className={`${getCategoryColor(club.category)} text-white px-4 py-2 text-sm font-semibold`}>
                  {club.category}
                </Badge>
              </div>

              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {club.name}
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                  {club.tagline}
                </p>
              </div>

              <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
                {club.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Users className="w-5 h-5 text-blue-200" />
                  <span className="text-sm font-medium">
                    {club.memberCount} Members
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Award className="w-5 h-5 text-yellow-200" />
                  <span className="text-sm font-medium">
                    {club.achievements.length} Achievements
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                 variant="outline" 
                  size="lg" 
                  className="border-white/30 text-blue-900 hover:bg-white/10 backdrop-blur-sm px-6 py-3"
                  onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Club
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-blue-900 hover:bg-white/10 backdrop-blur-sm px-6 py-3"
                  onClick={() => setShowVideo(true)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Intro
                </Button>
              </div>
            </div>

            {/* Right Content - Banner Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={club.banner} 
                  alt={`${club.name} banner`}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Club Introduction</h3>
              <Button 
                variant="ghost" 
                onClick={() => setShowVideo(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </Button>
            </div>
            <div className="p-4">
              <div className="aspect-video bg-gray-100 rounded flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p>Club introduction video would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </SearchableWrapper>
    </>
  );
};

export default ClubHero;
