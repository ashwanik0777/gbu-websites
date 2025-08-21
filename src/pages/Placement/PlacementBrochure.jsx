import React from 'react'
import { Award, BookOpen, Download, TrendingUp, Users } from 'lucide-react'
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper'
import StatsCard from '../../components/StatsCard';
function PlacementBrochure() {
  const statsHighlightData = [
  {
    icon: TrendingUp,
    numberText: "₹45 LPA",
    title: "Highest Package",
    iconColor: "#22c55e", // green-500
  },
  {
    icon: Users,
    numberText: "250+",
    title: "Number of Recruiters",
    iconColor: "#3b82f6", // blue-500
  },
  {
    icon: Award,
    numberText: "600+",
    title: "Internship Offers",
    iconColor: "#8b5cf6", // purple-500
  },
  {
    icon: BookOpen,
    numberText: "15+",
    title: "Top Sectors",
    iconColor: "#f97316", // orange-500
  },
];

  return (
    <SearchableWrapper>
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="pb-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         

          {/* Quick Highlights */}
        <StatsCard stats={statsHighlightData} />

          {/* What's Inside Section */}
         <div className="flex flex-col lg:flex-row justify-center items-center  gap-15   py-14">
  
  {/* Left Section */}
  <div className="w-full lg:w-1/2">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Inside?</h2>
    <div className="space-y-4">
      
      {/* Item 1 */}
      <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
        <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">📊</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Department-wise Placement Records</h3>
          <p className="text-gray-600 text-sm">Detailed statistics for all departments</p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">👥</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Alumni Success Stories</h3>
          <p className="text-gray-600 text-sm">Inspiring journeys of our graduates</p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">💼</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Recruiter Testimonials</h3>
          <p className="text-gray-600 text-sm">What companies say about our students</p>
        </div>
      </div>

      {/* Item 4 */}
      <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">🎯</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Training & Support Programs</h3>
          <p className="text-gray-600 text-sm">Comprehensive career development initiatives</p>
        </div>
      </div>

    </div>
  </div>

  {/* Right Section (Brochure Preview) */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <div 
      className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl inline-block hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
      onClick={() => window.open('https://www.gbu.ac.in/Content/admissions/brochures/Final_GBU_Brochure_2022.pdf', '_blank')}
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

</div>

          {/* Call to Action */}
          {/* <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore?</h2>
              <p className="text-gray-600 mb-6">Download our comprehensive placement brochure and discover endless career opportunities</p>
              <button
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
                onClick={() => window.open('https://www.gbu.ac.in/Content/admissions/brochures/Final_GBU_Brochure_2022.pdf', '_blank')}
              >
                <Download className="h-6 w-6 mr-3" />
                Download Full Brochure
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </div>
    </SearchableWrapper>
  )
}

export default PlacementBrochure