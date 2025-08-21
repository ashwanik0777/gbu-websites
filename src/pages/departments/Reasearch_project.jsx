import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  Calendar,
  DollarSign,
  Users,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react";
import BannerSection from "../../components/HeroBanner";
import StatsCard from "../../components/StatsCard";

/* -------------------------- Data Definitions -------------------------- */

const heroData = {
  title: "Transformative Research Initiatives",
  description:
    "Our research projects span cutting-edge technologies and address real-world challenges, funded by prestigious government agencies and industry partners.",
};

const statsData = [
  { icon: Award, value: 75, label: "Active Projects", color: "text-blue-600" },
  { icon: DollarSign, value: "₹45Cr", label: "Total Funding", color: "text-green-600" },
  { icon: Users, value: 120, label: "Researchers Involved", color: "text-purple-600" },
  { icon: CheckCircle, value: 45, label: "Completed Projects", color: "text-orange-600" },
];

const ongoingProjects = [
  {
    tag: "AI/ML",
    status: "Active",
    gradient: "from-blue-50 to-indigo-100",
    title: "AI-Powered Smart Healthcare Monitoring System",
    description:
      "Development of an intelligent healthcare monitoring system using IoT sensors, machine learning algorithms, and real-time data analytics for early disease detection and patient monitoring in rural healthcare settings.",
    duration: "2023-2026",
    team: "8 researchers",
    fundingAgency: "SERB",
    grant: "₹2.5 Cr",
    pi: "Dr. Rajesh Kumar",
    department: "CSE",
    progress: "65%",
  },
  {
    tag: "5G/6G",
    status: "Active",
    gradient: "from-green-50 to-emerald-100",
    title: "Next-Generation Wireless Communication for Smart Cities",
    description:
      "Research and development of advanced 5G/6G communication protocols, massive MIMO systems, and network optimization algorithms for smart city infrastructure including traffic management, environmental monitoring, and public safety.",
    duration: "2024-2027",
    team: "12 researchers",
    fundingAgency: "DST",
    grant: "₹3.2 Cr",
    pi: "Dr. Meera Krishnan",
    department: "ECE",
    progress: "35%",
  },
  {
    tag: "Cybersecurity",
    status: "Active",
    gradient: "from-purple-50 to-pink-100",
    title: "Quantum-Resistant Cryptography for Critical Infrastructure",
    description:
      "Development of post-quantum cryptographic algorithms and protocols to secure critical infrastructure against quantum computing threats. Focus on banking, power grids, and government communication systems.",
    duration: "2023-2025",
    team: "6 researchers",
    fundingAgency: "DRDO",
    grant: "₹1.8 Cr",
    pi: "Dr. Amit Patel",
    department: "CSE",
    progress: "80%",
  },
];

const projectCategories = [
  {
    icon: Award,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Government Funded",
    items: [
      { label: "SERB Projects", value: 15 },
      { label: "DST Projects", value: 12 },
      { label: "DRDO Projects", value: 8 },
      { label: "CSIR Projects", value: 6 },
    ],
    totalFunding: "₹28 Cr",
  },
  {
    icon: Target,
    bg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Industry Collaboration",
    items: [
      { label: "TCS Partnership", value: 8 },
      { label: "Infosys Projects", value: 6 },
      { label: "Intel Collaboration", value: 4 },
      { label: "Qualcomm Projects", value: 3 },
    ],
    totalFunding: "₹12 Cr",
  },
  {
    icon: Clock,
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "International Projects",
    items: [
      { label: "EU Horizon Projects", value: 3 },
      { label: "NSF Collaboration", value: 2 },
      { label: "JSPS Fellowship", value: 2 },
      { label: "Newton Fund", value: 1 },
    ],
    totalFunding: "₹5 Cr",
  },
];

const completedProjects = [
  {
    icon: CheckCircle,
    title: "Blockchain-based Supply Chain Management System",
    description:
      "Developed a comprehensive blockchain solution for transparent and secure supply chain tracking with focus on pharmaceutical and food industries.",
    duration: "2021-2024",
    funding: "₹1.5 Cr",
    pi: "Dr. Vikram Singh",
    publications: 12,
    impact: "Technology transferred to 3 companies, 2 patents filed",
  },
  {
    icon: CheckCircle,
    title: "Energy-Efficient VLSI Design for IoT Devices",
    description:
      "Research on ultra-low power VLSI circuits and system design methodologies for battery-operated IoT sensors and wearable devices.",
    duration: "2020-2023",
    funding: "₹2.2 Cr",
    pi: "Dr. Suresh Reddy",
    publications: 15,
    impact: "90% power reduction achieved, licensed to semiconductor company",
  },
];

const upcomingProjects = [
  {
    status: "Planning Phase",
    icon: Clock,
    title: "Quantum Machine Learning Research Center",
    description:
      "Establishment of a dedicated research center for quantum computing and machine learning convergence.",
    start: "2025",
    funding: "₹10 Cr",
    duration: "5 years",
  },
  {
    status: "Proposal Submitted",
    icon: Clock,
    title: "Autonomous Vehicle Safety Systems",
    description:
      "Development of AI-powered safety systems for autonomous vehicles with focus on Indian traffic conditions.",
    start: "2025",
    funding: "₹4.5 Cr",
    duration: "4 years",
  },
  {
    status: "Under Review",
    icon: Clock,
    title: "Sustainable Computing Infrastructure",
    description:
      "Research on green computing technologies and sustainable data center architectures for reduced carbon footprint.",
    start: "2025",
    funding: "₹3.8 Cr",
    duration: "3 years",
  },
];

const impactPublications = [
  {
    label: "IEEE Journal Publications",
    value: 85,
    bg: "bg-blue-50",
    color: "text-blue-600",
    note: "High-impact journal publications",
  },
  {
    label: "Conference Papers",
    value: 145,
    bg: "bg-green-50",
    color: "text-green-600",
    note: "International conference presentations",
  },
  {
    label: "Patents Filed",
    value: 28,
    bg: "bg-purple-50",
    color: "text-purple-600",
    note: "National and international patents",
  },
  {
    label: "Technology Transfers",
    value: 12,
    bg: "bg-orange-50",
    color: "text-orange-600",
    note: "Successful industry collaborations",
  },
];

const impactSocial = [
  {
    color: "border-blue-500",
    title: "Healthcare Innovation",
    description:
      "AI-powered diagnostic tools developed by our team are being used in 15+ rural healthcare centers, improving early disease detection by 40%.",
  },
  {
    color: "border-green-500",
    title: "Smart Agriculture",
    description:
      "IoT-based crop monitoring systems have helped 500+ farmers increase crop yield by 25% while reducing water consumption by 30%.",
  },
  {
    color: "border-purple-500",
    title: "Education Technology",
    description:
      "Personalized learning platforms developed for K-12 education are being used by 10,000+ students across 50 schools.",
  },
  {
    color: "border-orange-500",
    title: "Environmental Monitoring",
    description:
      "Air quality monitoring network deployed in 3 cities provides real-time pollution data to local authorities and citizens.",
  },
];

const contactDetails = [
  {
    icon: Award,
    color: "text-blue-400",
    title: "Research Office",
    email: "research.office@techvision.edu",
    phone: "+1 (555) 123-4580",
  },
  {
    icon: DollarSign,
    color: "text-green-400",
    title: "Funding Support",
    email: "funding.support@techvision.edu",
    phone: "+1 (555) 123-4581",
  },
  {
    icon: Users,
    color: "text-purple-400",
    title: "Industry Relations",
    email: "industry.relations@techvision.edu",
    phone: "+1 (555) 123-4582",
  },
];

/* ---------------------------- Components ---------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Hero = ({ data }) => (
 <BannerSection
    title={data.title}
    subtitle={data.description}
    bgTheme={1}
  />
);

const Stats = ({ data }) => (
  <StatsCard 
    stats={data.map((item) => ({
      icon: item.icon,
      ...(typeof item.value === 'string' 
        ? { numberText: item.value } 
        : { number: item.value }),
      subtitle: item.label
    }))}
  />
);

const OngoingProjects = ({ projects }) => (
  <motion.section
    className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <div className="max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Ongoing Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className={`p-6 rounded-xl shadow-lg bg-gradient-to-br ${proj.gradient} hover:shadow-xl transition-all`}
            whileHover={{ scale: 1.03 }}
          >
            <span className="text-sm bg-black/10 text-black px-2 py-1 rounded-full inline-block mb-2">
              {proj.tag}
            </span>
            <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
            <p className="text-gray-700 mb-4">{proj.description}</p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>Duration: {proj.duration}</p>
              <p>Team: {proj.team}</p>
              <p>Funding: {proj.grant}</p>
              <p>PI: {proj.pi} ({proj.department})</p>
              <p>Progress: {proj.progress}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const ProjectCategories = ({ categories }) => (
  <motion.section
    className="py-16 px-4 bg-white"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <div className="max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Project Categories</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${cat.bg} mb-4`}>
              <cat.icon className={`${cat.iconColor} w-6 h-6`} />
            </div>
            <h4 className="text-xl font-bold mb-2">{cat.title}</h4>
            <ul className="text-gray-600 mb-4 space-y-1">
              {cat.items.map((item, idx) => (
                <li key={idx}>
                  {item.label}: <span className="font-semibold">{item.value}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-gray-700">
              Total Funding: {cat.totalFunding}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const CompletedProjects = ({ projects }) => (
  <motion.section
    className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <div className="max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Completed Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <proj.icon className="w-8 h-8 text-green-600 mb-2" />
            <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
            <p className="text-gray-700 mb-2">{proj.description}</p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>Duration: {proj.duration}</p>
              <p>Funding: {proj.funding}</p>
              <p>PI: {proj.pi}</p>
              <p>Publications: {proj.publications}</p>
              <p>Impact: {proj.impact}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const UpcomingProjects = ({ projects }) => (
  <motion.section
    className="py-16 px-4 bg-white"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <div className="max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 border-solid hover:shadow-xl transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <proj.icon className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="text-xl font-bold mb-1">{proj.title}</h4>
            <span className="text-sm inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full mb-2">
              {proj.status}
            </span>
            <p className="text-gray-700 mb-2">{proj.description}</p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>Start: {proj.start}</p>
              <p>Funding: {proj.funding}</p>
              <p>Duration: {proj.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const ImpactPublications = ({ items }) => (
  <motion.section
    className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-blue-50"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <div className="max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Research Impact</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={`p-6 rounded-xl shadow-lg ${item.bg} hover:shadow-xl transition-all`}
            whileHover={{ scale: 1.05 }}
          >
            <h4 className={`text-3xl font-bold mb-1 ${item.color}`}>{item.value}+</h4>
            <p className="text-lg font-semibold mb-1">{item.label}</p>
            <p className="text-sm text-gray-600">{item.note}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const ImpactSocial = ({ items }) => (
  <motion.section
    className="py-16 px-4 bg-white"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <div className="max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Social Impact</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={`p-6 rounded-xl shadow-lg border-t-4 ${item.color} bg-white hover:shadow-xl transition-all`}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const ContactDetails = ({ contacts }) => (
  <motion.section
    className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <div className="max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contacts.map((contact, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <contact.icon className={`w-10 h-10 mx-auto mb-4 ${contact.color}`} />
            <h4 className="text-xl font-bold mb-2">{contact.title}</h4>
            <p className="text-gray-700">{contact.email}</p>
            <p className="text-gray-700">{contact.phone}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);
/* ---------------------------- Main Page ---------------------------- */

const ResearchProjects = () => {
  return (
    <div className="min-h-screen">
      <Hero data={heroData} />
      <Stats data={statsData} />
      <OngoingProjects projects={ongoingProjects} />
      <ProjectCategories categories={projectCategories} />
      <CompletedProjects projects={completedProjects} />
      <UpcomingProjects projects={upcomingProjects} />
      <ImpactPublications items={impactPublications} />
      <ImpactSocial items={impactSocial} />
      <ContactDetails contacts={contactDetails} />
    </div>
  );
};

export default ResearchProjects;
