import React, { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// === UTILS ===
const cn = (...classes) => classes.filter(Boolean).join(" ");

// === CARD ===
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    whileHover={{ y: -8, scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 250, damping: 20 }}
    className={cn(
      "rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow cursor-pointer",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 text-center", className)} {...props} />
));
CardContent.displayName = "CardContent";

// === BADGE ===
const Badge = ({ className, children }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={cn(
      "inline-flex items-center rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-semibold shadow-md",
      className
    )}
  >
    {children}
  </motion.div>
);

// === TABS ===
const Tabs = ({ tabs, activeTab, setActiveTab }) => (
  <div className="flex w-full mb-8 justify-center gap-2 flex-wrap">
    {tabs.map((tab) => (
      <button
        key={tab.value}
        onClick={() => setActiveTab(tab.value)}
        className={cn(
          "py-2 px-4 rounded-full font-semibold transition-colors shadow-sm",
          activeTab === tab.value
            ? "bg-blue-600 text-white shadow-md"
            : "bg-blue-50 text-blue-700 hover:bg-blue-100"
        )}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

const TabsContent = ({ value, activeTab, children }) =>
  value === activeTab ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  ) : null;

// === COMPONENT ===
const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("faculty");

  const facultyTeam = [
    {
      name: "Vice Chancellor",
      role: "Convener",
      department: "GBU Leadership",
      designation: "Vice Chancellor",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      email: "vc@gbu.ac.in",
    },
    {
      name: "Dr. Gaurav Kumar",
      role: "Faculty Lead & Convener",
      department: "School of ICT",
      designation: "Assistant Professor",
      email: "gaurav.kumar@gbu.ac.in",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Technical Advisor",
      department: "School of ICT",
      designation: "Associate Professor",
      email: "priya.sharma@gbu.ac.in",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Dr. Rajesh Singh",
      role: "Research Advisor",
      department: "School of ICT",
      designation: "Assistant Professor",
      email: "rajesh.singh@gbu.ac.in",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const studentTeam = [
    {
      name: "Arjun Patel",
      role: "Full-Stack Developer",
      department: "B.Tech CSE",
      designation: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/arjunpatel",
    },
    {
      name: "Priya Verma",
      role: "UI/UX Designer",
      department: "B.Tech CSE",
      designation: "2nd Year",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/priyaverma",
    },
    {
      name: "Rohit Kumar",
      role: "Backend Developer",
      department: "B.Tech IT",
      designation: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/rohitkumar",
    },
    {
      name: "Sneha Gupta",
      role: "Frontend Developer",
      department: "B.Tech CSE",
      designation: "2nd Year",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/snehagupta",
    },
    {
      name: "Vikram Singh",
      role: "AI/ML Developer",
      department: "M.Tech CSE",
      designation: "1st Year",
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/vikramsingh",
    },
    {
      name: "Ananya Sharma",
      role: "Quality Assurance",
      department: "B.Tech IT",
      designation: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/ananyasharma",
    },
  ];

  const TeamCard = ({ member, isStudent = false }) => (
    <Card>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative mb-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
            />
            <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              {isStudent ? member.designation : member.role}
            </Badge>
          </div>
          <h3 className="font-bold text-lg mb-1 text-gray-800">{member.name}</h3>
          <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
          <p className="text-gray-600 text-sm mb-1">{member.department}</p>
          <p className="text-gray-500 text-xs mb-4">{member.designation}</p>
          <div className="flex justify-center gap-3">
            {member.email && (
              <motion.a
                href={`mailto:${member.email}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-blue-50 rounded-full shadow hover:shadow-md transition"
              >
                <Mail className="w-4 h-4 text-blue-600" />
              </motion.a>
            )}
            {member.linkedin && (
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-blue-50 rounded-full shadow hover:shadow-md transition"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );

  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Team
      </h2>

      <Tabs
        tabs={[
          { value: "faculty", label: "Faculty Team" },
          { value: "students", label: "Student Interns" },
        ]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <TabsContent value="faculty" activeTab={activeTab}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyTeam.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="students" activeTab={activeTab}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentTeam.map((member, index) => (
            <TeamCard key={index} member={member} isStudent={true} />
          ))}
        </div>
      </TabsContent>
    </div>
  );
};

export default TeamSection;
