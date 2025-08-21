import React, { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';

function Landing() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    setOffset({ x, y });
  };

  const transformStyle = (factor, delay) => {
    if (isMobile) return {};

    return {
      transform: loaded
        ? `translate(${offset.x * factor}px, ${offset.y * factor}px)`
        : `translateY(40px)`,
      opacity: loaded ? 1 : 0,
      transition: loaded
        ? `transform 0.3s ease-out, opacity 0.6s ease-out ${delay}ms`
        : 'none',
    };
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        'relative w-screen h-screen overflow-hidden bg-black',
        'parallax-container'
      )}
    >
      {/* Cloud Layer (Back) */}
      <img
        src="/assets/new_cloud.jpg"
        alt="Cloud"
        className={cn(
          'absolute top-0 left-0 w-full h-full object-cover object-center',
          'layer'
        )}
        style={transformStyle(20, 100)}
      />

      {/* Mid Layer */}
      <img
        src="/assets/GBU11.webp"
        alt="Mid"
        className={cn(
          'absolute top-0 left-0 w-full h-full object-cover object-center',
          'layer'
        )}
        style={transformStyle(10, 300)}
      />

      {/* Foreground Layer */}
      <img
        src="/assets/Hostel_Image.webp"
        alt="Foreground"
        className={cn(
          'absolute top-0 left-0 w-full h-full object-cover object-center',
          'layer'
        )}
        style={transformStyle(30, 500)}
      />
    </div>
  );
}

export default Landing;
