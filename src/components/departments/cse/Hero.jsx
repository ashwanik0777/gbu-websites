import React from 'react';
import { ArrowRight } from "lucide-react";
import { Code, Cpu, Database } from "lucide-react";

// Reusable Button
const Button = ({
  children,
  size = "md",
  variant = "default",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2";
  const sizes = {
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3 text-lg",
  };
  const variants = {
    default:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg",
    gradient:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg",
    outline:
      "border-2 border-blue-300 text-blue-700 bg-white hover:bg-blue-50 shadow-sm",
  };
  let variantClass = variants[variant] || variants.default;

  if (className.includes("bg-gradient-to-r")) variantClass = variants.gradient;
  if (className.includes("border-blue-300")) variantClass = variants.outline;

  return (
    <button
      className={`${base} ${sizes[size] || sizes.md} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// HERO SECTION (PROP BASED)
const HeroSection = ({
  title,
  highlight,
  subtitle,
  primaryButton,
  secondaryButton,
  features,
  backgroundImage
}) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-background to-purple-50 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
      </div>

      {/* Animated Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-10 left-32 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            {title}
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              {primaryButton.label}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              {secondaryButton.label}
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 bg-white/80 rounded-xl backdrop-blur-sm border border-blue-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 ${feature.bg} rounded-full flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
