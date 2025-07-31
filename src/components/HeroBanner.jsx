import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const bgThemes = {
  1: {
    sectionBg: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
    circles: [
      { class: "top-16 left-16 w-20 h-20 bg-blue-100/40 animate-none" },
      { class: "bottom-20 right-20 w-28 h-28 bg-indigo-200/30 animate-pulse" },
    ],
  },
  2: {
    sectionBg: "bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100",
    circles: [
      { class: "top-10 right-10 w-24 h-24 bg-pink-200/30 animate-none" },
      { class: "bottom-10 left-10 w-20 h-20 bg-purple-100/40 animate-ping" },
    ],
  },
  3: {
    sectionBg: "bg-gradient-to-r from-orange-50 via-yellow-50 to-amber-50",
    circles: [
      { class: "top-1/3 left-1/4 w-24 h-24 bg-orange-200/30 animate-pulse" },
      { class: "bottom-1/3 right-1/4 w-28 h-28 bg-yellow-200/30 animate-none" },
    ],
  },
  4: {
    sectionBg: "bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50",
    circles: [
      { class: "top-20 right-1/3 w-16 h-16 bg-teal-200/30 animate-none" },
      { class: "bottom-20 left-1/3 w-32 h-32 bg-cyan-100/30 animate-ping" },
    ],
  },
  5: {
    sectionBg: "bg-gradient-to-br from-fuchsia-50 to-violet-50",
    circles: [
      { class: "top-10 left-1/2 w-24 h-24 bg-fuchsia-200/30 animate-none" },
      { class: "bottom-10 right-1/2 w-20 h-20 bg-violet-100/30 animate-pulse" },
    ],
  },
  6: {
    sectionBg: "bg-gradient-to-tr from-emerald-50 via-lime-50 to-green-50",
    circles: [
      { class: "top-1/4 left-10 w-28 h-28 bg-emerald-100/30 animate-none" },
      { class: "bottom-1/4 right-10 w-28 h-28 bg-lime-200/30 animate-ping" },
    ],
  },
  7: {
    sectionBg: "bg-gradient-to-br from-rose-50 to-sky-50",
    circles: [
      { class: "top-12 right-12 w-32 h-32 bg-rose-200/30 animate-none" },
      { class: "bottom-12 left-12 w-20 h-20 bg-sky-200/30 animate-pulse" },
    ],
  },
  8: {
    sectionBg: "bg-gradient-to-br from-gray-50 to-zinc-100",
    circles: [
      { class: "top-1/2 left-16 w-24 h-24 bg-gray-300/30 animate-none" },
      { class: "bottom-1/2 right-16 w-32 h-32 bg-zinc-200/30 animate-pulse" },
    ],
  },
  9: {
    sectionBg: "bg-gradient-to-br from-red-50 to-yellow-50",
    circles: [
      { class: "top-0 right-1/4 w-32 h-32 bg-red-200/30 animate-none" },
      { class: "bottom-0 left-1/4 w-28 h-28 bg-yellow-200/30 animate-pulse" },
    ],
  },
  10: {
    sectionBg: "bg-gradient-to-br from-indigo-50 to-pink-50",
    circles: [
      { class: "top-24 left-24 w-20 h-20 bg-indigo-200/30 animate-none" },
      { class: "bottom-24 right-24 w-28 h-28 bg-pink-200/30 animate-pulse" },
    ],
  },
};


const BannerSection = ({ title, subtitle, bgTheme = 1 }) => {
  const theme = bgThemes[bgTheme] || bgThemes[1];

  return (
    <section className={clsx("relative min-h-[45vh] flex items-center justify-center overflow-hidden", theme.sectionBg)}>
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        {theme.circles.map((circle, idx) => (
          <div key={idx} className={clsx("absolute rounded-full", circle.class)} />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="transition-all duration-1000 ease-out opacity-100 translate-y-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 mb-8 font-medium">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

BannerSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  bgTheme: PropTypes.number,
};

export default BannerSection;
