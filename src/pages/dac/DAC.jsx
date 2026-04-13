import React from "react";
import { Mail, CircleCheck, Clock } from "lucide-react";
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
  dacDescription,
} from "./dacData";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    whileHover={{
      y: -4,
      transition: { duration: 0.2, ease: "easeOut" },
    }}
    className={cn(
      "relative rounded-xl bg-white text-gray-900 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100",
      className,
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
    className={cn("text-lg sm:text-xl font-semibold leading-tight tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-gray-600", className)} {...props} />
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

function Badge({ className, children }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-blue-600 text-white px-2.5 py-0.5 text-xs font-medium",
        className,
      )}
    >
      {children}
    </div>
  );
}

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
    document.title = "Digital Automation Cell - MyGBU Smart Campus";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore the initiatives, team, and progress of GBU's Digital Automation Cell transforming university operations through AI and automation.",
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
            Building practical automation for Smart GBU
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Automation</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">AI Workflows</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Campus Systems</span>
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
          <Card className="bg-blue-50 border-purple-200">
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
              <CardTitle className="text-emerald-800 flex items-center gap-2 sm:gap-3">
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

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="mb-12 bg-indigo-50 border-indigo-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl sm:text-3xl text-indigo-800 mb-2">
                {dacDescription.title}
              </CardTitle>
              <CardDescription className="text-base text-gray-700 max-w-3xl mx-auto">
                {dacDescription.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <blockquote className="text-lg italic text-indigo-700 font-medium">
                  "{dacDescription.quote}"
                </blockquote>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {dacFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.94, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="text-center p-3 rounded-lg bg-white border border-gray-200"
                  >
                    <feature.icon className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                    <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">{feature.title}</p>
                    <p className="text-xs text-gray-500 hidden sm:block">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <RoadmapTimeline />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-gray-800">
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
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <DevelopmentGlimpses />

        <section className="mb-8">
          <div className="mb-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">People Behind DAC</h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Faculty mentors and student builders driving real campus transformation.
            </p>
          </div>
          <TeamSection />
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[1.2fr_auto] md:items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Join DAC Team</h3>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                If you are passionate about web development, AI systems, product design, or automation, apply to contribute to real university systems.
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                <Mail className="h-4 w-4" /> dac@gbu.ac.in
              </p>
            </div>

            <div className="justify-self-start md:justify-self-end">
              <ApplicationForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DAC;
