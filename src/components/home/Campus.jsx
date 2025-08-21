import React, { useEffect, useState } from "react";

export default function CampusLifeSection() {
  const [testimonials, setTestimonials] = useState([]);
  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, "");
  const CAMPUS_LIFE_API = `${BASE}/landing/campus-life/`;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(CAMPUS_LIFE_API);
        const data = await response.json();
        if (Array.isArray(data)) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Failed to fetch campus life data:", error);
      }
    };
    fetchTestimonials();
  }, []);

  // Function to extract category from card_content
  const getCategory = (cardContent) => {
    if (cardContent.includes('Students Life')) return 'Students Life';
    if (cardContent.includes('Sports')) return 'Sports & Recreation';
    if (cardContent.includes('Cultural')) return 'Cultural Activities';
    if (cardContent.includes('Hostel')) return 'Hostel Life';
    return cardContent.split('-')[0]?.trim() || 'Campus Life';
  };

  // Function to get icon based on category
  const getCategoryIcon = (category) => {
    const icons = {
      'Students Life': '🎓',
      'Sports & Recreation': '⚽',
      'Cultural Activities': '🎭',
      'Hostel Life': '🏠',
      'Campus Life': '🏫'
    };
    return icons[category] || '🏫';
  };

  // Function to get gradient based on category
  const getCategoryGradient = (category) => {
    const gradients = {
      'Students Life': 'from-blue-500 to-purple-600',
      'Sports & Recreation': 'from-green-500 to-teal-600',
      'Cultural Activities': 'from-orange-500 to-red-600',
      'Hostel Life': 'from-pink-500 to-purple-600',
      'Campus Life': 'from-indigo-500 to-blue-600'
    };
    return gradients[category] || 'from-gray-500 to-gray-600';
  };

  // Navigation function
  const handleCardClick = (item) => {
    let src = '';
    
    switch(item.id) {
      case 1:
        src = '/campus-life/students-life';
        break;
      case 2:
        src = '/campus-life/sports-fitness';
        break;
      case 3:
        src = '/announcements/news-notifications';
        break;
      case 4:
        src = '/campus-life/hostel-detailed';
        break;
      default:
        src = '/campus-life/hero';
    }
    
    window.location.href = src;
  };

  return (
    <div className="px-6 md:px-20 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-4">
          Campus Life at GBU
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mb-6 rounded-full" />
        <p className="text-gray-600 mb-4 max-w-3xl mx-auto text-lg leading-relaxed">
          Experience a vibrant campus life filled with learning, growth, and
          unforgettable memories. Our diverse community of students creates an
          environment where everyone can thrive.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {testimonials.map((item, index) => {
          const category = getCategory(item.card_content);
          const icon = getCategoryIcon(category);
          const gradient = getCategoryGradient(category);
          
          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200/50 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[21rem] hover:h-96"
            >
              {/* Image container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Image overlay */}
                <div className={`absolute inset-0  opacity-40`} />

                {/* Icon container */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-xl shadow-lg border border-white/30">
                  {icon}
                </div>
               
              </div>

              {/* Content container - now expands with card */}
              <div className="p-6 flex flex-col h-32 group-hover:h-48 transition-all duration-300">
                {/* Basic content - always visible */}
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                    {category}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Expanded content - shows on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-1 flex flex-col justify-end">
                  {/* Progress bar */}
                  <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden mb-3">
                    <div className={`h-full bg-gradient-to-r ${gradient} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`} />
                  </div>

                  {/* Call to action */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 font-medium">Explore more</span>
                    <div className={`w-4 h-4 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center`}>
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Additional info for hostel */}
                  {item.id === 4 && (
                    <div className="mt-1">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {['📶', '🍽️', '🏥', '🎮'].map((emoji, i) => (
                            <span key={i} className="text-xs opacity-70">{emoji}</span>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">Wi-Fi • Food • Medical • Recreation</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ID badge for reference */}
              <div className="absolute top-2 left-2 opacity-30">
                <div className="w-5 h-5 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">{item.id}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Loading state */}
      {testimonials.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
        </div>
      )}
    </div>
  );
}
