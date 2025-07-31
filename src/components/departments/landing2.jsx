import React, { useEffect, useState } from 'react';

const Landing = () => {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    // Generate random birds
    const generateBirds = () => {
      const birdArray = [];
      for (let i = 0; i < 10; i++) {
        birdArray.push({
          id: i,
          top: Math.random() * 30 + 5, 
          delay: Math.random() * 8,
          speed: Math.random() * 5 + 12,
          size: Math.random() * 0.4 + 0.8,
        });
      }
      setBirds(birdArray);
    };

    generateBirds();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100"></div>

      {/* Animated background elements - Behind everything */}
      <div className="absolute inset-0 z-10">
        {/* Floating clouds */}
        <div className="absolute top-12 left-20 w-28 h-14 bg-white/40 rounded-full blur-sm animate-pulse"
             style={{ animationDelay: '0s', animationDuration: '6s' }} />
        <div className="absolute top-16 right-32 w-36 h-18 bg-white/30 rounded-full blur-sm animate-pulse"
             style={{ animationDelay: '3s', animationDuration: '8s' }} />
        <div className="absolute top-28 left-1/2 w-24 h-12 bg-white/45 rounded-full blur-sm animate-pulse"
             style={{ animationDelay: '1.5s', animationDuration: '5s' }} />
        <div className="absolute top-8 left-1/3 w-20 h-10 bg-white/35 rounded-full blur-sm animate-pulse"
             style={{ animationDelay: '4s', animationDuration: '7s' }} />

        {/* Subtle sun with rays */}
        <div className="absolute top-6 right-12 w-40 h-40 bg-gradient-radial from-yellow-200/30 via-yellow-100/20 to-transparent rounded-full animate-pulse"
             style={{ animationDuration: '8s' }} />
        <div className="absolute top-8 right-14 w-36 h-36 bg-gradient-radial from-white/20 to-transparent rounded-full animate-pulse"
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Realistic SVG Birds - Above background, below text */}
      {birds.map((bird) => (
        <div
          key={bird.id}
          className="absolute pointer-events-none z-25"
          style={{
            top: `${bird.top}%`,
            left: '-80px',
            animation: `flyAcross ${bird.speed}s linear infinite`,
            animationDelay: `${bird.delay}s`,
            transform: `scale(${bird.size})`,
          }}
        >
          <svg width="60" height="40" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
            {/* Bird body */}
            <ellipse cx="30" cy="20" rx="8" ry="3" fill="#2d3748" opacity="0.9"/>

            {/* Bird head */}
            <circle cx="38" cy="18" r="2.5" fill="#2d3748" opacity="0.9"/>

            {/* Beak */}
            <polygon points="41,18 44,19 41,20" fill="#4a5568" opacity="0.8"/>

            {/* Left wing */}
            <path
              d="M22 17 Q12 12 8 15 Q15 20 22 21 Z"
              fill="#4a5568"
              opacity="0.8"
              style={{
                animation: `wingFlap 0.4s ease-in-out infinite alternate`,
                animationDelay: `${bird.delay}s`,
                transformOrigin: '22px 19px'
              }}
            />

            {/* Right wing */}
            <path
              d="M22 23 Q12 28 8 25 Q15 20 22 19 Z"
              fill="#4a5568"
              opacity="0.8"
              style={{
                animation: `wingFlap 0.4s ease-in-out infinite alternate-reverse`,
                animationDelay: `${bird.delay + 0.2}s`,
                transformOrigin: '22px 21px'
              }}
            />

            {/* Tail */}
            <path d="M22 20 Q16 18 14 20 Q16 22 22 20 Z" fill="#2d3748" opacity="0.7"/>
          </svg>
        </div>
      ))}

      {/* Base Image at Bottom - Fill properly */}
      <div className="absolute bottom-0 left-0 w-full z-20 h-full top-100">
        <img
          src="./assets/base.png"
          alt="college base"
          className="w-full h-full object-cover object-center"
          style={{
            display: 'block',
            filter: 'brightness(1.1) contrast(1.05) saturate(1.1)',
            imageRendering: 'crisp-edges'
          }}
          onError={(e) => {
            console.log('Image failed to load:', e.target.src);
            e.target.style.display = 'none';
          }}
          onLoad={(e) => {
            console.log('Image loaded successfully:', e.target.src);
          }}
        />
      </div>

      {/* Hero Content - Top half of screen */}
      <div className="absolute top-0 left-0 right-0 h-1/2 flex flex-col items-center justify-center text-center z-30 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600 mb-4 animate-fade-in-up drop-shadow-lg">
          Welcome To School Of Information And Communication Technology
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 max-w-2xl animate-fade-in-up-delay font-medium drop-shadow-md">
          Where dreams take flight and knowledge soars beyond horizons
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-2">
          <button className="px-6 py-3 md:px-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-purple-700">
            Discover More
          </button>
          <button className="px-6 py-3 md:px-8 border-2 border-blue-500 text-blue-600 font-semibold rounded-full hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* Floating particles - Behind text, above image */}
      <div className="absolute inset-0 pointer-events-none z-25">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              top: `${20 + Math.random() * 40}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes flyAcross {
          0% {
            transform: translateX(-80px) translateY(0px) scale(${1});
          }
          10% {
            transform: translateX(10vw) translateY(-8px) scale(${1});
          }
          30% {
            transform: translateX(30vw) translateY(-15px) scale(${1});
          }
          50% {
            transform: translateX(50vw) translateY(-5px) scale(${1});
          }
          70% {
            transform: translateX(70vw) translateY(-12px) scale(${1});
          }
          90% {
            transform: translateX(90vw) translateY(-3px) scale(${1});
          }
          100% {
            transform: translateX(120vw) translateY(0px) scale(${1});
          }
        }

        @keyframes wingFlap {
          0% {
            transform: rotateX(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(60deg) rotateZ(-10deg);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.8;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 1.2s ease-out 0.4s both;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 1.2s ease-out 0.8s both;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};


