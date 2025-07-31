import { useState, useEffect } from 'react';
import { Badge } from './ui/Badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StudentStartup = ( {startupData={startups: [], stats: {}}}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simulated dynamic data (replace with API later)


  const { startups, stats } = startupData;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % startups.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [startups.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % startups.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + startups.length) % startups.length);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Seed Funded':
        return 'bg-green-500 text-white';
      case 'Angel Funded':
        return 'bg-emerald-500 text-white';
      case 'Pre-Seed':
        return 'bg-blue-500 text-white';
      case 'MVP Ready':
        return 'bg-purple-500 text-white';
      case 'Prototype':
        return 'bg-orange-500 text-white';
      case 'Bootstrapped':
        return 'bg-indigo-500 text-white';
      case 'Incubated':
        return 'bg-pink-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-800">
            Student Startups
          </h2>
          <p className="text-xl text-gray-600">Empowering the next generation of entrepreneurs</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white backdrop-blur-sm rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">{startups.length}</div>
            <div className="text-gray-600">Active Student Startups</div>
          </div>
          <div className="bg-white backdrop-blur-sm rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalFunding}</div>
            <div className="text-gray-600">Total Funding Raised</div>
          </div>
          <div className="bg-white backdrop-blur-sm rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalDepartments}</div>
            <div className="text-gray-600">Departments Represented</div>
          </div>
        </div>


        <div className="relative shadow-2xl border-0 bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden">
          <div className="relative h-96">
            {startups.map((startup, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50">
                    <div className="mb-4">
                      <Badge className={getStatusColor(startup.status)}>
                        {startup.status}
                      </Badge>
                      <Badge className="ml-2 bg-gray-100 text-gray-800">
                        {startup.year}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      {startup.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{startup.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-indigo-700">
                        Founded by: {startup.founder}
                      </p>
                      <p className="text-lg font-bold text-green-600">
                        Funding: {startup.funding}
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={startup.image}
                      alt={startup.name}
                      className="w-full h-full object-cover rounded-tr-xl rounded-br-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent rounded-tr-xl rounded-br-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2 bg-gradient-to-r from-gray-50 to-blue-50">
          {startups.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-blue-600 shadow-lg scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudentStartup;
