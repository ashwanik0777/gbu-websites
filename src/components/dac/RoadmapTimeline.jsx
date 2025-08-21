import React from "react";
import { CircleCheck, Clock, Calendar, Zap } from "lucide-react";
import { motion } from "framer-motion";

// --- Utility ---
const cn = (...classes) => classes.filter(Boolean).join(" ");

// --- Badge ---
const Badge = ({ className, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={cn(
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shadow-md transition",
      className
    )}
  >
    {children}
  </motion.div>
);

// --- Card ---
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    whileHover={{
      scale: 1.02,
      y: -2,
      boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
    }}
    whileTap={{
      scale: 0.99, 
      y: 0,       
    }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className={cn(
      "relative rounded-xl bg-white backdrop-blur p-10 shadow-2xl transition-all duration-300",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl md:text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-4", className)} {...props} />
));
CardContent.displayName = "CardContent";

// --- Timeline ---
const RoadmapTimeline = () => {
  const timelineData = [
    {
      dateRange: "24 May – 1 June 2025",
      milestone: "Orientation, Interviews & Team Finalization",
      status: "completed",
      description:
        "Complete team onboarding, role assignments, and project kick-off",
      icon: <CircleCheck className="w-5 h-5" />,
    },
    {
      dateRange: "June – July 2025",
      milestone:
        "UI/UX Design, GBU Website Re-designing, Registration Portal, Student Dashboard",
      status: "in-progress",
      description: "Core platform development and user interface improvements",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      dateRange: "Aug – Dec 2025",
      milestone: "Faculty Dashboard, Feedback System, Class Attendance",
      status: "planned",
      description:
        "Advanced features for faculty and automated attendance systems",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      dateRange: "Jan – Mar 2026",
      milestone: "Integration Testing, Deployment to SoICT",
      status: "planned",
      description: "System integration and pilot deployment in School of ICT",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      dateRange: "Apr – Dec 2026",
      milestone: "Smart Alert System, Admin Dashboard, AI Integration",
      status: "upcoming",
      description:
        "AI-powered features and comprehensive administrative tools",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      dateRange: "Jan – May 2027",
      milestone: "Rollout to All Schools, Sustainability Monitoring",
      status: "future",
      description:
        "University-wide deployment and environmental monitoring systems",
      icon: <Zap className="w-5 h-5" />,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500 text-white";
      case "in-progress":
        return "bg-yellow-500 text-white";
      case "planned":
        return "bg-blue-500 text-white";
      case "upcoming":
        return "bg-orange-500 text-white";
      case "future":
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "✅ Completed";
      case "in-progress":
        return "🟡 In Progress";
      case "planned":
        return "🔜 Planned";
      case "upcoming":
        return "🔜 Upcoming";
      case "future":
        return "🔜 Future";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="my-20 relative">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
        DAC Progress Timeline
      </h2>
      <p className="text-center text-gray-700 mb-12 text-lg">
        2-Year Roadmap Starting May 24, 2025
      </p>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>


        <div className="space-y-12 relative">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              {/* Animated dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full hidden md:block" 
                   style={{ top: '1.5rem' }}
              ></motion.div>

              <Card className="ml-0 md:ml-16">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="text-blue-600 mt-1"
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="leading-tight text-gray-800">
                          {item.milestone}
                        </CardTitle>
                        <p className="text-blue-600 font-semibold mt-1">
                          {item.dateRange}
                        </p>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(item.status)} shrink-0`}>
                      {getStatusText(item.status)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="pl-8 text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimeline;
