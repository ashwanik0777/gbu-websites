import React from "react";
import { ArrowRight } from "lucide-react";

// ✅ Reusable Button component
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

// ✅ Reusable Hero component
const Hero = ({
  backgroundImage,
  title,
  highlightedText,
  subtitle,
  showTagline = false,
  taglineItems = [],
  primaryBtn = {},
  secondaryBtn = {},
}) => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 via-background to-purple-50 py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-10 left-32 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
            {title}
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {highlightedText}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Tagline with Icons */}
          {showTagline && (
            <div className="flex flex-wrap items-center justify-center gap-6 text-lg font-semibold text-gray-800 mb-10">
              {taglineItems.map(({ icon: Icon, text, color }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 transition-transform hover:scale-105"
                >
                  <Icon className={`w-6 h-6 ${color}`} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          )}

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryBtn?.label && (
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={primaryBtn.onClick}
              >
                {primaryBtn.label}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
            {secondaryBtn?.label && (
              <Button variant="outline" size="lg" onClick={secondaryBtn.onClick}>
                {secondaryBtn.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
