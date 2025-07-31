import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BannerSection from "../../components/HeroBanner";

const laboratories = [
  {
    name: "Advance Analog and Digital Communication Lab",
    faculty: "Dr. Priyanka Goyal",
    support: "Mr. Anmol Nagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    isNew: true,
    category: "Communication"
  },
  {
    name: "Advance DSP Lab",
    faculty: "Dr. Rajesh Mishra",
    support: "Mr. Himanshu Saini",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    isNew: true,
    category: "Processing"
  },
  {
    name: "Artificial Intelligence and Robotic Lab",
    faculty: "Dr. Anurag Singh Baghel",
    support: "Mr. Anmol Nagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "AI/Robotics"
  },
  {
    name: "Basic Electronics Lab",
    faculty: "Dr. Priyanka Goyal",
    support: "Ms. Ravindra Kumar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Electronics"
  },
  {
    name: "Computer Laboratory-I",
    faculty: "Dr. Pradeep Tomar",
    support: "Mrs. Sunita",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Computing"
  },
  {
    name: "Computer Laboratory-II",
    faculty: "Dr. Arun Solanki",
    support: "Mrs. Sunita",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    category: "Computing"
  },
  {
    name: "Computer Networking Lab",
    faculty: "Dr. Neeta Singh",
    support: "Ms. Sanjeev Kumar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Networking"
  },
  {
    name: "Cyber Security Lab",
    faculty: "Dr. Aarti Gautam Dinker",
    support: "Mr. Sanjeev Kumar",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
    category: "Security"
  },
  {
    name: "Design Lab (WCN)",
    faculty: "Dr. Neeta Singh",
    support: "Mr. Sanjeev Kumar",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    category: "Design"
  },
  {
    name: "Design Lab (VLSI Design)",
    faculty: "Dr. Navid Zafar Rizvi",
    support: "Mr. Anmol Nagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Design"
  },
  {
    name: "Digital Electronics Lab",
    faculty: "Dr. R. B. Singh",
    support: "Mr. Himanshu Saini",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Electronics"
  },
  {
    name: "Digital IC Design Lab",
    faculty: "Dr. Navid Zafar Rizvi",
    support: "Mr. Anmol Nagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Design"
  },
  {
    name: "Electronics Circuits Lab",
    faculty: "Dr. Priyanka Goyal",
    support: "Ms. Ravindra Kumar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Electronics"
  },
  {
    name: "Electronics Workshop",
    faculty: "Dr. Vimlesh Kumar",
    support: "Ms. Himanshu Saini",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Electronics"
  },
  {
    name: "Expert System Lab",
    faculty: "Dr. Arun Solanki",
    support: "Mrs. Sunita",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "AI/Robotics"
  },
  {
    name: "Logic Design Lab",
    faculty: "Dr. Anurag Singh Baghel",
    support: "Mr. Anmol Nagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Design"
  },
  {
    name: "Multimedia Technology",
    faculty: "Dr. Pradeep Tomar",
    support: "Mrs. Sunita",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Computing"
  },
  {
    name: "Microwave and Antenna Lab",
    faculty: "Dr. Navid Zafar Rizvi",
    support: "Mr. Ravindra Kumar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Communication"
  },
  {
    name: "Microwave Engineering Lab",
    faculty: "Dr. Navid Zafar Rizvi",
    support: "Mr. Ravindra Kumar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Communication"
  },
  {
    name: "Microprocessor and Interface Lab",
    faculty: "Dr. Navid Zafar Rizvi",
    support: "Mr. Anmol Nagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Processing"
  },
  {
    name: "Optical Communication Lab",
    faculty: "Dr. Rajesh Mishra",
    support: "Mr. Ravindra Kumar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Communication"
  },
  {
    name: "Parallel Processing Lab",
    faculty: "Dr. Neeta Singh",
    support: "Ms. Sanjeev Kumar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Processing"
  },
  {
    name: "Research Project Lab",
    faculty: "Dr. Pradeep Tomar",
    support: "Mrs. Sunita",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Research"
  },
  {
    name: "Software Engineering Lab",
    faculty: "Dr. Sandhya Tarar",
    support: "Ms. Sanjeev Kumar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLAeCAdQnVrZ6GOZwqQsLI4WMz9LHaF7W0A&s",
    category: "Computing"
  },
];

const LaboratoryCards = ({ laboratories }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-white">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 via-transparent to-gray-50/30"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Mouse follower */}
      <div
        className="fixed w-96 h-96 bg-gradient-radial from-blue-400/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none z-10 transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      <BannerSection
        title="Laboratories"
        subtitle="Explore Our Cutting-Edge Facilities"
        bgTheme={3}
      />

      <div className="relative z-20 mt-10">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {laboratories.map((lab, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card */}
              <div className="relative h-96 perspective-1000">
                <div className={`
                  relative w-full h-full transition-all duration-700 transform-style-preserve-3d
                  ${hoveredCard === index ? 'rotate-y-180' : ''}
                `}>

                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="relative h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl overflow-hidden shadow-2xl border border-blue-400/30 backdrop-blur-lg transform transition-all duration-500 hover:scale-105 hover:shadow-blue-400/50 hover:shadow-2xl">

                      {/* Glassmorphism overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>

                      {/* NEW badge with animation */}
                      {lab.isNew && (
                        <div className="absolute top-4 right-4 z-20">
                          <div className="relative">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                              NEW
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-sm animate-pulse"></div>
                          </div>
                        </div>
                      )}

                      {/* Category badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <div className="bg-black/30 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20 border-solid">
                          {lab.category}
                        </div>
                      </div>

                      {/* Image with overlay effects */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={lab.image}
                          alt={lab.name}
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400x200.png?text=Lab+Image";
                          }}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-800/80 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20 mix-blend-overlay"></div>
                      </div>

                      {/* Content */}
                      <div className="relative p-6 h-48 flex flex-col justify-between">
                        <div>
                          <h2 className="text-xl font-bold text-white mb-3 leading-tight line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                            {lab.name}
                          </h2>

                          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-300 mb-4 transition-all duration-500 group-hover:w-24"></div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-blue-100 text-sm">
                            <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                            <span className="font-medium">Faculty:</span>
                            <span className="text-white">{lab.faculty}</span>
                          </div>

                          <div className="flex items-center gap-2 text-blue-100 text-sm">
                            <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-200"></div>
                            <span className="font-medium">Support:</span>
                            <span className="text-white">{lab.support}</span>
                          </div>
                        </div>

                        {/* Hover indicator */}
                        <div className="absolute bottom-4 right-4 text-cyan-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <div className="flex items-center gap-1 text-xs font-medium">
                            <span>Hover for details</span>
                            <div className="w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
                          </div>
                        </div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-400/20 rounded-3xl"></div>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="h-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 rounded-3xl p-6 shadow-2xl border border-blue-400/30 backdrop-blur-lg flex flex-col justify-center items-center text-center">
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full flex items-center justify-center mb-4 animate-spin-slow">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          </div>
                        </div>

                        <h3 className="text-white font-bold text-lg mb-2">Lab Details</h3>
                        <div className="space-y-2 text-blue-100 text-sm">
                          <p><span className="font-semibold text-cyan-200">Category:</span> {lab.category}</p>
                          <p><span className="font-semibold text-cyan-200">Status:</span> {lab.isNew ? 'Newly Established' : 'Active'}</p>
                          <p><span className="font-semibold text-cyan-200">Type:</span> Research & Development</p>
                        </div>

                        <div className="mt-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 border-solid">
                          <span className="text-white font-medium text-sm">Fully Equipped</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

const Laboratory = () => {
  return <LaboratoryCards laboratories={laboratories} />;
};

export default Laboratory;