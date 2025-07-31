import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/ICT.png",
      title: "School Of ICT",
      subtitle: "Shaping Tomorrow's Engineers Today",
    },
    {
      image: "/assets/CyberLab.jpeg",
      title: "State-of-the-Art Laboratories",
      subtitle: "Where Innovation Meets Technology",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop",
      title: "Research & Development",
      subtitle: "Pioneering Solutions for Tomorrow",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative h-[500px] overflow-hidden mt-10 shadow-lg"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent " />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-6 text-blue-100 font-light">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white shadow-md scale-110"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Landing;
