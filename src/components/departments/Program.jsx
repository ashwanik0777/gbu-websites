"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Reusable Badge
const Badge = ({ children, className = '', variant = 'default', ...props }) => {
  const baseStyle = 'inline-block rounded-full font-medium text-sm px-2 py-1';
  const variants = {
    default: 'bg-blue-200 text-blue-800',
    outline: 'border border-blue-400 bg-white text-blue-800',
  };
  return (
    <span
      className={`${baseStyle} ${variants[variant] || ''} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// Program Showcase Component
export default function ProgramsShowcase({ programs: externalPrograms = [] }) {
  const fallbackPrograms = [ 
    // your whole programs array here — same as you wrote above
    {
      name: 'B.Tech. Computer Science & Engineering',
      code: 'CSE',
      duration: '4 Years',
      specializations: ['AI & Robotics', 'Data Science', 'Cyber Security', 'Software Engineering'],
      image: 'https://images.unsplash.com/photo-1662638600476-d563fffbb072?w=600&auto=format&fit=crop&q=60',
      description: 'UG program in CSE with specializations in AI & Robotics, Data Science, Cyber Security and Software Engineering.',
    },
    // ... rest of your items
  ];

  const programs = externalPrograms.length > 0 ? externalPrograms : fallbackPrograms;

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [programs.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600">Cutting-edge engineering education</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden rounded-xl">
          <div className="p-0">
            <div className="relative h-96 overflow-hidden">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative">
                      <img
                        src={program.image}
                        alt={program.name}
                        className="w-full h-full object-cover block"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-white to-indigo-50">
                      <div className="mb-4 flex flex-wrap gap-2">
                        <Badge className="bg-blue-600 text-white text-lg px-3 py-1">
                          {program.code}
                        </Badge>
                        <Badge className="bg-gray-100 text-gray-800">
                          {program.duration}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">
                        {program.name}
                      </h3>
                      <p className="text-gray-700 mb-4">{program.description}</p>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Specializations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.specializations.map((spec, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="border-blue-400 text-blue-800"
                            >
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full z-10 w-10 h-10 flex items-center justify-center"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full z-10 w-10 h-10 flex items-center justify-center"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center py-6 space-x-2 bg-gray-50">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 shadow-lg scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
