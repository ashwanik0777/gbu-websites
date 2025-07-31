import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Brain,
  Zap,
  Shield,
  Database,
} from "lucide-react";
import BannerSection from "../../components/HeroBanner";
import StatsCard from "../../components/StatsCard";

const ResearchArea = ({
  hero,
  stats,
  domains,
  centers,
  funding,
  collaborations,
  impacts,
  quickLinks,
}) => {
  return (
    <>
      {/* Hero */}
      <BannerSection
        title={hero.title}
        subtitle={hero.subtitle}
        bgTheme={1}
      />

      {/* Stats */}
      <StatsCard
        stats={stats.map((item) => ({
          icon: item.icon,
          number: item.number,
          numberText: typeof item.number === 'string' ? item.number : undefined,
          subtitle: item.label
        }))}
      />

      {/* Domains */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Major Research Domains</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {domains.map((d, i) => (
              <div key={i} className={`bg-gradient-to-br ${d.bg} p-8 rounded-xl`}>
                <div className="flex items-center mb-6">
                  <d.icon className={`h-12 w-12 ${d.color} mr-4`} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{d.title}</h3>
                    <p className={`${d.color} font-semibold`}>{d.tagline}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700 mb-6">
                  {d.points.map((p, j) => (
                    <li key={j} className="flex items-start">
                      <span className={`w-2 h-2 ${d.color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                      <div>
                        <strong>{p.title}</strong>
                        <p className="text-sm text-gray-600">{p.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Key Faculty:</strong> {d.faculty}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Research Projects:</strong> {d.projects} | <strong>Funding:</strong> {d.funding}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Specialized Research Centers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {centers.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{c.title}</h3>
                <p className="text-gray-600 mb-4">{c.desc}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {c.details.map((d, j) => (
                    <li key={j}>• {d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Funding & Collaboration */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Funding Sources</h2>
            <div className="space-y-4">
              {funding.map((f, i) => (
                <div key={i} className={`flex items-center justify-between p-4 rounded-lg ${f.bg}`}>
                  <div>
                    <h3 className="font-semibold text-gray-900">{f.title}</h3>
                    <p className="text-sm text-gray-600">{f.subtitle}</p>
                  </div>
                  <span className={`${f.color} font-bold`}>{f.amount}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">International Collaborations</h2>
            <div className="space-y-6">
              {collaborations.map((c, i) => (
                <div key={i} className={`border-l-4 pl-6 ${c.border}`}>
                  <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{c.desc}</p>
                  <p className="text-xs text-gray-500">{c.extra}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      {/* <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Research Impact & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((i, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className={`text-3xl font-bold ${i.color} mb-2`}>{i.number}</div>
                <p className="text-gray-600 mb-4">{i.label}</p>
                <p className="text-sm text-gray-500">{i.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      
      {/* <section className="py-16 px-4 bg-white text-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Explore More Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white ">
            {quickLinks.map((l, i) => (
              <Link key={i} to={l.href} className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-color shadow-2xl">
                <l.icon className={`h-12 w-12 ${l.color} mx-auto mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{l.title}</h3>
                <p className="text-gray-300 text-sm">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

// ✅ ✅ ✅ Full Data Props Call
export default function ResearchPage() {
  return (
    <ResearchArea
      hero={{
        title: "Research Excellence at TechVision",
        subtitle: "Our research ecosystem spans cutting-edge domains in engineering and technology, fostering innovation that addresses global challenges and shapes the future of technology.",
      }}
      stats={[
        { icon: BookOpen, color: "text-indigo-600", number: "150+", label: "Active Research Projects" },
        { icon: Users, color: "text-blue-600", number: 85, label: "Research Faculty" },
        { icon: Award, color: "text-green-600", number: "500+", label: "Publications" },
        { icon: TrendingUp, color: "text-purple-600", number: "₹25Cr", label: "Research Funding" },
      ]}
      domains={[
        {
          icon: Brain,
          color: "text-blue-600",
          bg: "from-blue-50 to-indigo-100",
          title: "Artificial Intelligence & Machine Learning",
          tagline: "Leading Research Domain",
          points: [
            { title: "Deep Learning & Neural Networks", desc: "Advanced architectures for computer vision and NLP" },
            { title: "Computer Vision & Image Processing", desc: "Medical imaging, autonomous systems, surveillance" },
            { title: "Natural Language Processing", desc: "Chatbots, sentiment analysis, language models" },
            { title: "Reinforcement Learning", desc: "Game AI, robotics, decision-making systems" },
          ],
          faculty: "Dr. Rajesh Kumar, Dr. Priya Sharma, Dr. Neha Agarwal",
          projects: "25",
          funding: "₹8.5 Cr",
        },
        {
          icon: Zap,
          color: "text-green-600",
          bg: "from-green-50 to-emerald-100",
          title: "VLSI Design & Electronics",
          tagline: "Core Engineering Research",
          points: [
            { title: "Low Power VLSI Design", desc: "Energy-efficient chip design for mobile devices" },
            { title: "RF & Microwave Engineering", desc: "5G/6G communication systems, antenna design" },
            { title: "Embedded Systems & IoT", desc: "Smart sensors, edge computing, industrial IoT" },
            { title: "Signal Processing", desc: "Biomedical signals, audio/video processing" },
          ],
          faculty: "Dr. Meera Krishnan, Dr. Suresh Reddy, Dr. Amit Kumar",
          projects: "22",
          funding: "₹6.8 Cr",
        },
        {
          icon: Shield,
          color: "text-red-600",
          bg: "from-red-50 to-pink-100",
          title: "Cybersecurity & Information Security",
          tagline: "Critical Infrastructure Protection",
          points: [
            { title: "Network Security & Intrusion Detection", desc: "Advanced threat detection, zero-day exploits" },
            { title: "Cryptography & Blockchain", desc: "Post-quantum cryptography, DeFi security" },
            { title: "Digital Forensics", desc: "Cyber crime investigation, evidence analysis" },
            { title: "IoT Security", desc: "Secure device communication, privacy protection" },
          ],
          faculty: "Dr. Amit Patel, Dr. Vikram Singh, Dr. Kavita Jain",
          projects: "18",
          funding: "₹5.2 Cr",
        },
        {
          icon: Database,
          color: "text-purple-600",
          bg: "from-purple-50 to-violet-100",
          title: "Data Science & Big Data Analytics",
          tagline: "Data-Driven Innovation",
          points: [
            { title: "Big Data Processing", desc: "Distributed computing, real-time analytics" },
            { title: "Predictive Analytics", desc: "Healthcare predictions, financial modeling" },
            { title: "Data Mining & Visualization", desc: "Pattern discovery, interactive dashboards" },
            { title: "Business Intelligence", desc: "Decision support systems, performance analytics" },
          ],
          faculty: "Dr. Anita Gupta, Dr. Rahul Mehta, Dr. Pooja Sharma",
          projects: "20",
          funding: "₹4.5 Cr",
        },
      ]}
      centers={[
        { title: "Center for AI & Robotics", desc: "Interdisciplinary research in artificial intelligence, machine learning, and autonomous systems.", details: ["Director: Dr. Rajesh Kumar", "Established: 2020", "Research Fellows: 25", "Industry Partners: 8"] },
        { title: "Microelectronics Research Lab", desc: "Advanced research in VLSI design, nanoelectronics, and semiconductor technology.", details: ["Director: Dr. Meera Krishnan", "Established: 2018", "Research Fellows: 20", "Clean Room Facility: Yes"] },
        { title: "Cybersecurity Research Center", desc: "Cutting-edge research in information security, cryptography, and digital forensics.", details: ["Director: Dr. Amit Patel", "Established: 2019", "Research Fellows: 18", "Security Lab: Advanced"] },
        { title: "Data Science & Analytics Hub", desc: "Big data research, predictive analytics, and business intelligence solutions.", details: ["Director: Dr. Anita Gupta", "Established: 2021", "Research Fellows: 22", "Computing Cluster: 500 cores"] },
        { title: "IoT & Smart Systems Lab", desc: "Internet of Things, smart cities, and industrial automation research.", details: ["Director: Dr. Vikram Singh", "Established: 2020", "Research Fellows: 15", "Test Bed: Smart Campus"] },
        { title: "Renewable Energy Systems", desc: "Sustainable energy research, smart grids, and energy optimization systems.", details: ["Director: Dr. Suresh Reddy", "Established: 2017", "Research Fellows: 12", "Solar Farm: 100kW"] },
      ]}
      funding={[
        { title: "Department of Science & Technology (DST)", subtitle: "Government of India", amount: "₹8.5 Cr", bg: "bg-blue-50", color: "text-blue-600" },
        { title: "Science & Engineering Research Board (SERB)", subtitle: "Early Career Research Awards", amount: "₹6.2 Cr", bg: "bg-green-50", color: "text-green-600" },
        { title: "Industry Collaborations", subtitle: "TCS, Infosys, Intel, Qualcomm", amount: "₹5.8 Cr", bg: "bg-purple-50", color: "text-purple-600" },
        { title: "Council of Scientific & Industrial Research", subtitle: "CSIR Research Grants", amount: "₹4.5 Cr", bg: "bg-orange-50", color: "text-orange-600" },
      ]}
      collaborations={[
        { title: "Massachusetts Institute of Technology (MIT)", desc: "Collaboration in AI and Machine Learning Research", extra: "Joint Publications: 12 | Exchange Programs: Active", border: "border-blue-600" },
        { title: "Stanford University", desc: "VLSI Design and Computer Architecture Research", extra: "Joint Publications: 8 | Faculty Exchange: 2 per year", border: "border-green-600" },
        { title: "University of Cambridge", desc: "Cybersecurity and Cryptography Research", extra: "Joint Publications: 6 | Research Fellows: 3", border: "border-purple-600" },
        { title: "National University of Singapore", desc: "IoT and Smart Systems Development", extra: "Joint Publications: 10 | Student Exchange: Active", border: "border-orange-600" },
      ]}
      impacts={[
        { number: "500+", label: "Research Publications", note: "SCI/Scopus Indexed", color: "text-blue-600" },
        { number: "45", label: "Patents Filed", note: "National & International", color: "text-green-600" },
        { number: "28", label: "Awards & Recognitions", note: "National & International", color: "text-purple-600" },
        { number: "15", label: "Technology Transfers", note: "To Industry Partners", color: "text-orange-600" },
      ]}
      quickLinks={[
        { href: "/training-consultancy", icon: Users, color: "text-blue-400", title: "Training & Consultancy", desc: "Professional development and industry services" },
        { href: "/research-scholars", icon: BookOpen, color: "text-green-400", title: "Research Scholars", desc: "Meet our brilliant research community" },
        { href: "/research-projects", icon: Award, color: "text-purple-400", title: "Research Projects", desc: "Current and completed research initiatives" },
        { href: "/patents", icon: TrendingUp, color: "text-orange-400", title: "Patents", desc: "Our intellectual property portfolio" },
      ]}
    />
  );
}
