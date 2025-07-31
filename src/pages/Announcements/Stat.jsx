
import React, { useState, useEffect } from 'react';
import { Globe, TrendingUp, Target, Lightbulb, ArrowRight } from 'lucide-react';

const StrategicPerspective = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "Innovation distinguishes between a leader and a follower",
    "Excellence is never an accident; it is always the result of high intention",
    "The future belongs to those who prepare for it today",
    "Education is the most powerful weapon to change the world"
  ];

  const strategies = [
    {
      title: "Global Excellence",
      description: "Achieving world-class standards in education and research",
      progress: 85,
      icon: Globe,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Innovation Hub",
      description: "Creating a thriving ecosystem for innovation and entrepreneurship",
      progress: 78,
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Research Impact",
      description: "Producing high-impact research addressing global challenges",
      progress: 92,
      icon: Target,
      color: "from-green-400 to-green-600"
    },
    {
      title: "Industry Partnership",
      description: "Building strong industry collaborations and partnerships",
      progress: 88,
      icon: TrendingUp,
      color: "from-purple-400 to-purple-600"
    }
  ];

  const collaborations = [
    { country: "USA", universities: 12, color: "bg-red-500" },
    { country: "UK", universities: 8, color: "bg-blue-500" },
    { country: "Germany", universities: 6, color: "bg-yellow-500" },
    { country: "Australia", universities: 5, color: "bg-green-500" },
    { country: "Canada", universities: 4, color: "bg-purple-500" }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="relative h-96 bg-gradient-to-r from-cyan-900 via-blue-800 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3")',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Strategic Perspective</h1>
            <p className="text-xl opacity-90">Shaping the Future of Higher Education</p>
          </div>
        </div>
      </section>

      {/* Quote Ticker */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-2xl text-white font-light italic">
              "{quotes[currentQuote]}"
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Strategic Execution</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${strategy.color} rounded-2xl flex items-center justify-center mr-4`}>
                    <strategy.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{strategy.title}</h3>
                    <p className="text-gray-600">{strategy.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{strategy.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 bg-gradient-to-r ${strategy.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${strategy.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Collaborations Map */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Global Collaborations</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* World Map Placeholder */}
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <Globe className="w-32 h-32 text-blue-400 opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                  <div className="absolute top-4 left-4 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-12 right-8 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-12 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                {/* Collaboration Stats */}
                <div className="space-y-6">
                  {collaborations.map((collab, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-white/30">
                      <div className="flex items-center">
                        <div className={`w-4 h-4 ${collab.color} rounded-full mr-4`}></div>
                        <span className="text-lg font-semibold text-gray-800">{collab.country}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-800 mr-2">{collab.universities}</span>
                        <span className="text-gray-600">Universities</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Vision 2030</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Top 50 Universities</h3>
                  <p className="text-gray-600">Achieve ranking among top 50 universities in India</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">2027</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Global Recognition</h3>
                  <p className="text-gray-600">Establish international accreditation and partnerships</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">2030</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation Leader</h3>
                  <p className="text-gray-600">Become a leading innovation and research hub</p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto">
                  Learn More About Our Vision
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
</>
  );
};

export default StrategicPerspective;
