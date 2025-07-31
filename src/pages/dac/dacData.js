// dacData.js
import { 
  Settings, 
  GraduationCap, 
  Brain, 
  Leaf, 
  Shield, 
  Target, 
  Rocket,
  Monitor,
  BookOpen,
  Bot,
  TreePine
} from "lucide-react";

export const corePillars = [
  {
    title: "Automation Across Departments",
    description: "Streamlining processes across all university departments with intelligent automation",
    icon: Settings,
  },
  {
    title: "Personalized Student Learning",
    description: "AI-driven personalized learning experiences tailored to each student's needs",
    icon: GraduationCap,
  },
  {
    title: "Emotionally Intelligent Experience",
    description: "Human-centered design that understands and responds to user emotions",
    icon: Brain,
  },
  {
    title: "Environmental Intelligence",
    description: "Smart environmental monitoring and sustainable campus management",
    icon: Leaf,
  },
  {
    title: "Smart Detection & Campus Security",
    description: "Advanced security systems with intelligent threat detection",
    icon: Shield,
  },
];

export const currentProgress = [
  {
    title: "Registration Portal",
    status: "Completed",
    description: "Smart Campus registration system with automated workflows",
    progress: 100,
  },
  {
    title: "Class Attendance Testing",
    status: "In Progress",
    description: "Automated attendance tracking system for classes",
    progress: 75,
  },
  {
    title: "Complaint/Feedback Module",
    status: "In Progress",
    description: "Centralized system for campus complaints and feedback",
    progress: 60,
  },
  {
    title: "Exam Attendance Prototype",
    status: "Completed",
    description: "Prototype for automated exam attendance management",
    progress: 100,
  },
];

export const dacFeatures = [
  {
    icon: Monitor,
    title: "Digital GBU",
    description: "Complete digital transformation"
  },
  {
    icon: BookOpen,
    title: "NEP 2020 Alignment",
    description: "Aligned with education policy"
  },
  {
    icon: Bot,
    title: "AI + Human Design",
    description: "Intelligent automation with human touch"
  },
  {
    icon: TreePine,
    title: "Green Campus",
    description: "Sustainable technology solutions"
  }
];

export const visionMission = {
  vision: {
    title: "Our Vision",
    icon: Target,
    content: "To digitally transform GBU by automating key processes, improving transparency, and enhancing user experience through scalable, secure, and smart solutions."
  },
  mission: {
    title: "Our Mission",
    icon: Rocket,
    content: "To create an emotionally intelligent, AI-powered, and sustainable smart campus."
  }
};

export const dacDescription = {
  title: "What is DAC?",
  subtitle: "The Digital Automation Cell (DAC) is GBU's dedicated innovation hub focused on transforming the university experience through cutting-edge technology and human-centered design.",
  quote: "We are not just building tools, we are transforming how a university works, lives, and evolves."
};