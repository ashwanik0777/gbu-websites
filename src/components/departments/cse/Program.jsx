import { GraduationCap, BookOpen, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Helper function to map program title to course parameter
const mapProgramToCourse = (programTitle) => {
  return programTitle?.toLowerCase().replace(/\s+/g, '-') || '';
};

// Custom Card components
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-2xl shadow-md border border-gray-200 transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-4 sm:px-6 pt-4 sm:pt-6 pb-2 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-base sm:text-lg leading-tight mb-1 ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-500 text-xs sm:text-sm mb-1 line-clamp-2 ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-4 sm:px-6 pb-4 sm:pb-6 pt-2 ${className}`}>{children}</div>
);

const Programs = ({
  heading = "Academic Programs",
  subheading = "Choose from our diverse range of programs designed to meet your academic and career goals in computer science.",
  programs = [],
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Enhanced responsive slides configuration
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1280) {
        setSlidesToShow(3); // xl: 3 slides
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // md: 2 slides
      } else {
        setSlidesToShow(1); // sm: 1 slide
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const totalSlides = Math.ceil(programs.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality with pause on hover
  useEffect(() => {
    let interval;
    
    const startAutoPlay = () => {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [totalSlides]);

  if (!programs || programs.length === 0) {
    return (
      <section className="py-8 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">No programs available</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="programs"
      className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
              {heading}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
              {subheading}
            </p>
          </div>

          {/* Slider Container with proper spacing */}
          <div className="relative mx-4 sm:mx-8 lg:mx-12">
            {/* Navigation Buttons - Hidden on mobile */}
            <button
              onClick={prevSlide}
              className="hidden sm:flex absolute -left-10 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-8 z-20 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="hidden sm:flex absolute -right-10 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-8 z-20 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
            </button>

            {/* Slides Container with overflow handling */}
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                  width: `${(programs.length * 100) / slidesToShow}%`,
                }}
                onMouseEnter={() => {
                  // Pause auto-play on hover (optional)
                }}
              >
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="px-2 sm:px-3 lg:px-4 flex-shrink-0 py-2"
                    style={{ width: `${100 / programs.length}%` }}
                  >
                    <Link to={`/schools/departments/courseDetailed?school=engineering&course=${mapProgramToCourse(program.title)}`}>
                    <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden border-0 shadow-lg h-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                      {/* Image Section with fixed height to prevent clipping */}
                      <div className="relative h-28 sm:h-32 md:h-36 lg:h-40 overflow-hidden flex-shrink-0">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${program.gradient || 'from-black/60 to-transparent'} opacity-80`}
                        ></div>
                        <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4">
                          <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-col flex-grow">
                        <CardHeader className="pb-2 flex-shrink-0">
                          <CardTitle className="text-sm sm:text-base lg:text-lg text-gray-900 line-clamp-2">
                            {program.title}
                          </CardTitle>
                          <CardDescription className="text-xs sm:text-sm line-clamp-2">
                            {program.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-3 sm:space-y-4 flex-grow flex flex-col">
                          {/* Duration and Intake Info */}
                          <div className="flex items-center justify-between text-xs sm:text-sm bg-gray-50 p-2 sm:p-3 rounded-lg flex-shrink-0">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 flex-shrink-0" />
                              <span className="font-medium truncate">{program.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 flex-shrink-0" />
                              <span className="font-medium truncate">{program.intake}</span>
                            </div>
                          </div>

                          {/* Key Areas Section */}
                          <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-xs sm:text-sm lg:text-base">
                              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                              Key Areas
                            </h4>
                            <div className="grid grid-cols-1 gap-1 sm:gap-1.5">
                              {program.highlights?.slice(0, 4).map((highlight, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs sm:text-sm bg-blue-50 px-2 py-1 rounded text-gray-700 line-clamp-1"
                                >
                                  • {highlight}
                                </span>
                              )) || <span className="text-xs text-gray-400">No highlights available</span>}
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card></Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile swipe indicators */}
            <div className="sm:hidden flex justify-center space-x-2 mt-4">
              <span className="text-xs text-gray-500">Swipe to see more</span>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    currentSlide === index
                      ? "bg-blue-600 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
