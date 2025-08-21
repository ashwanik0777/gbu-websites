import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";


const StudentAchievements = ({achievements=[]}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">
            Student Achievements
          </h2>
          <p className="text-xl text-gray-600">Celebrating excellence and innovation</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="shadow-2xl border-0 bg-white backdrop-blur-sm relative overflow-hidden rounded-xl">
          <div className="relative h-96">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-white">
                    <div className="mb-4 space-x-2">
                      <Badge className="bg-green-100 text-green-800">
                        {achievement.year}
                      </Badge>
                      <Badge
                        className={`${
                          achievement.department === "All"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {achievement.department} Department
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-blue-500 font-bold text-xl mb-2">
                      {achievement.achievement}
                    </p>
                    <p className="text-gray-600 mb-4">{achievement.description}</p>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-semibold text-blue-900">{achievement.student}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 z-20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 z-20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center py-6 space-x-2 bg-gray-50">
            {achievements.map((achievement, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 shadow-lg scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default StudentAchievements;
