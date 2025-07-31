 
import React, { useState, useEffect } from 'react';
 
import axios from 'axios';
import { ArrowDown, Map } from 'lucide-react';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const baseStyle =
    'px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none';
  const variants = {
    default: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const CampusHero = () => {
  const [heroData, setHeroData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');
  const API_URL = `${BASE}/campuslife/campus-hero/`;

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await axios.get(API_URL);
        setHeroData(response.data || []);
      } catch (error) {
        console.error('Error fetching campus hero data:', error);
      }
    };

    fetchHeroData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroData.length]);

  const scrollToTour = () => {
    const element = document.querySelector('#campus-tour');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (heroData.length === 0) return null;

  return (
    <SearchableWrapper>
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {heroData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.background_image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              {heroData[currentSlide].title.split('GBU Campus Life')[0]}
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                GBU Campus Life
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {heroData[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a
                href={heroData[currentSlide].button1_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse"
                >
                  <Map className="mr-2" size={20} />
                  {heroData[currentSlide].button1_text}
                </Button>
              </a>

              <a
                href={heroData[currentSlide].button2_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/50 border-[1px] border-solid px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  {heroData[currentSlide].button2_text}
                </Button>
              </a>
            </div>

            {/* Slide Info */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex space-x-2">
                  {heroData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-yellow-400 scale-125' : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{heroData[currentSlide].title}</p>
                  <p className="text-sm">{heroData[currentSlide].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/70" size={32} />
      </div>
    </section>
    </SearchableWrapper>
  );
};

export default CampusHero;