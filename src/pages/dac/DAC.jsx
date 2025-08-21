import React from "react";
import { CircleCheck, Mail } from "lucide-react";
import TeamSection from "../../components/dac/TeamSection";
import DevelopmentGlimpses from "../../components/dac/DevelopmentGlimpses";
import ApplicationForm from "../../components/dac/ApplicationForm";
import RoadmapTimeline from "../../components/dac/RoadmapTimeline";
import { motion } from "framer-motion";
import { 
  corePillars, 
  currentProgress, 
  dacFeatures, 
  visionMission, 
  dacDescription 
} from "./dacData";

// === Utility ===
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// === Local Card with minimal motion ===
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    whileHover={{
      y: -4,
      transition: { duration: 0.2, ease: "easeOut" }
    }}
    className={cn(
      "relative rounded-xl bg-white text-gray-900 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100",
      className
    )}
    {...props}
  >
    {props.children}
  </motion.div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className={cn("flex flex-col space-y-1.5 p-4 sm:p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg sm:text-xl font-semibold leading-tight tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
    className={cn("p-4 sm:p-6 pt-0", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

// === Local Badge ===
function Badge({ className, children }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-blue-600 text-white px-2.5 py-0.5 text-xs font-medium",
        className
      )}
    >
      {children}
    </div>
  );
}

// === Minimal Animation Variants ===
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const DAC = () => {
  React.useEffect(() => {
    document.title = "Digital Automation Cell – MyGBU Smart Campus";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore the initiatives, team, and progress of GBU's Digital Automation Cell transforming university operations through AI and automation."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Explore the initiatives, team, and progress of GBU's Digital Automation Cell transforming university operations through AI and automation.";
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header Section */}
      <div className="relative bg-slate-900 text-white py-12 sm:py-16 md:py-20 px-4">
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Digital Automation Cell (DAC)
          </motion.h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 opacity-90">
            Driving the Future of Smart GBU
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base opacity-80">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Innovation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Automation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Human-Centric Intelligence
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        {/* Vision & Mission */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2 sm:gap-3">
                <visionMission.vision.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                {visionMission.vision.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {visionMission.vision.content}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2 sm:gap-3">
                <visionMission.mission.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                {visionMission.mission.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {visionMission.mission.content}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* What is DAC */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="mb-12 sm:mb-16 bg-indigo-50 border-indigo-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl sm:text-3xl text-indigo-800 mb-4">
                {dacDescription.title}
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
                {dacDescription.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6 sm:mb-8">
                <blockquote className="text-lg sm:text-xl italic text-indigo-700 font-medium">
                  "{dacDescription.quote}"
                </blockquote>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {dacFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-center p-3 sm:p-4 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  >
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-indigo-600" />
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      {feature.title}
                    </p>
                    <p className="text-xs text-gray-500 hidden sm:block">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Roadmap Timeline */}
        <RoadmapTimeline />

        {/* Core Pillars */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            Core Pillars
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {corePillars.map((pillar, index) => (
              <Card key={index} className="hover:border-blue-200 transition-colors duration-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 sm:gap-3 leading-tight">
                    <pillar.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{pillar.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Current Progress */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            Current Progress
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {currentProgress.map((item, index) => (
              <Card key={index} className="hover:border-green-200 transition-colors duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-sm sm:text-base">{item.title}</CardTitle>
                    <Badge className={item.status === 'Completed' ? 'bg-green-600' : 'bg-blue-600'}>
                      {item.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-xs sm:text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-2 rounded-full ${
                        item.progress === 100 ? 'bg-green-600' : 'bg-blue-600'
                      }`}
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 text-right">
                    {item.progress}% Complete
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <DevelopmentGlimpses />

        {/* Team Members */}
        <TeamSection />
      </div>
    </div>
  );
};

export default DAC;