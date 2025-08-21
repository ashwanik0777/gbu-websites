import React, { useEffect, useRef, useState } from "react";

const StatItem = ({
  icon: Icon,
  number,
  numberText,
  title,
  subtitle,
  iconColor = "#6b21a8",
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  const isPureNumber = typeof number === "number" && !numberText;
  const displayText = isPureNumber ? count : numberText || "";

 useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && isPureNumber && !hasAnimated) {
        animateCount();
        setHasAnimated(true);
        observer.unobserve(entry.target); 
      }
    },
    { threshold: 0.5 }
  );

  if (ref.current && !hasAnimated) {
    observer.observe(ref.current);
  }

  return () => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  };
}, [hasAnimated, isPureNumber]); 



  const animateCount = () => {
    let start = 0;
    const end = number;
    const duration = 1000;
    const stepTime = Math.max(10, Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
  };

  return (
    <div
      ref={ref}
      className="text-center group transition-all duration-300 hover:shadow-2xl shadow-md rounded-2xl p-8 border-2 border-purple-200 bg-white"
    >
      {Icon && (
        <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: iconColor }} />
      )}
      {(isPureNumber || numberText) && (
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {displayText}
        </div>
      )}
      {title && <div className="text-gray-800 font-semibold">{title}</div>}
      {subtitle && <div className="text-gray-500 text-sm">{subtitle}</div>}
    </div>
  );
};

const StatsCard = ({ stats = [] }) => {
  // Dynamic grid column logic
  const getGridClasses = () => {
    const count = stats.length;
    if (count === 4) {
      return "grid-cols-2 md:grid-cols-4";
    } else if (count === 5) {
      return "grid-cols-3 md:grid-cols-5";
    } else if (count <= 2) {
      return "grid-cols-1 md:grid-cols-2";
    } else if (count === 3) {
      return "grid-cols-2 md:grid-cols-3";
    } else {
      return "grid-cols-2 md:grid-cols-4"; // fallback
    }
  };

  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-100 rounded-full blur-2xl opacity-30" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-100 rounded-full blur-2xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border-2 border-dashed border-purple-200 rounded-full opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className={`grid gap-8 ${getGridClasses()}`}>
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              number={stat.number}
              numberText={stat.numberText}
              title={stat.title}
              subtitle={stat.subtitle}
              iconColor={stat.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCard;
