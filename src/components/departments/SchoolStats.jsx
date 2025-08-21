"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CounterValue = ({ end, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime;
      const duration = 2000;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [end, isInView]);

  return <span>{count}</span>;
};

const Counter = ({ value, label, suffix = "", isInView }) => (
  <div className="flex flex-col items-center px-8 py-2">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-blue-600"
    >
      <CounterValue end={value} isInView={isInView} />
      <span className="text-blue-600">{suffix}</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-sm text-gray-600 font-medium mt-1"
    >
      {label}
    </motion.div>
  </div>
);

const SchoolStats = ({ title, stats }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section className="py-10" ref={containerRef}>
      <div className="container mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-medium text-gray-800">{title}</h3>
          </motion.div>
        )}

        {stats && stats.length > 0 ? (
          <motion.div
            className="flex justify-center items-center flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <Counter
                  value={stat.value || 0}
                  label={stat.label || "No label"}
                  suffix={stat.suffix || ""}
                  isInView={isInView}
                />
                {index < stats.length - 1 && (
                  <div className="h-12 w-px bg-gray-200" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-gray-500">No stats available.</p>
        )}
      </div>
    </section>
  );
};

export default SchoolStats;
