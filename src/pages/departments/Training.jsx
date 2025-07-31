import React from "react";
import { Briefcase, Users, Award, Building, TrendingUp, CheckCircle } from "lucide-react";
import BannerSection from "../../components/HeroBanner";
import StatsCard from "../../components/StatsCard";



// ✅ Reusable Program Card
const ProgramCard = ({ bg, icon, title, subtitle, items, footer }) => (
  <div className={`bg-gradient-to-br ${bg} p-8 rounded-xl`}>
    <div className="flex items-center mb-6">
      {icon}
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="font-semibold">{subtitle}</p>
      </div>
    </div>
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
          <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
          <div className="flex justify-between text-xs text-gray-500">
            <span>{item.detail1}</span>
            <span>{item.detail2}</span>
          </div>
        </div>
      ))}
    </div>
    <div className={`mt-6 p-4 ${footer.bg} rounded-lg`}>
      <p className={`text-sm ${footer.textColor}`}>
        <strong>{footer.label}</strong> {footer.value}
      </p>
      <p className={`text-xs ${footer.textColor2}`}>{footer.note}</p>
    </div>
  </div>
);

// ✅ Reusable Consultancy Block
const ConsultancyBlock = ({ title, services }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
    <div className="space-y-4">
      {services.map((srv, idx) => (
        <div key={idx} className={`border-l-4 ${srv.border} pl-6`}>
          <h4 className="text-lg font-semibold text-gray-900">{srv.title}</h4>
          <p className="text-sm text-gray-600 mb-2">{srv.desc}</p>
          <ul className="text-xs text-gray-500 space-y-1">
            {srv.points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

// ✅ Reusable Success Story Card
const SuccessCard = ({ from, iconColor, quote, details }) => (
  <div className={`bg-gradient-to-br ${from} p-6 rounded-xl`}>
    <div className="flex items-center mb-4">
      <CheckCircle className={`h-8 w-8 ${iconColor} mr-3`} />
      <h3 className="text-lg font-semibold text-gray-900">{details.client}</h3>
    </div>
    <p className="text-sm text-gray-600 mb-4">{quote}</p>
    <div className="text-xs text-gray-500">
      {details.fields.map((f, i) => (
        <p key={i}>
          <strong>{f.label}:</strong> {f.value}
        </p>
      ))}
    </div>
  </div>
);

// ✅ Main TrainingConsultancy Page with Props
const TrainingConsultancy = ({ hero, stats, trainingPrograms, technicalConsultancy, businessConsultancy, successStories }) => {
  return (
    <div className="min-h-screen">
     
     <BannerSection
        title={hero.title}
        subtitle={hero.subtitle}
        bgTheme={9}
      />

      {/* Stats */}
     <StatsCard
        stats={stats.map((item) => ({
          icon: item.Icon,
          numberText: item.number,
          subtitle: item.label
        }))}
      />

      {/* Training Programs */}
      <section className="py-16 px-4 bg-white max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Training Programs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trainingPrograms.map((tp, i) => <ProgramCard key={i} {...tp} />)}
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="py-16 px-4 bg-gray-50 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Consultancy Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ConsultancyBlock title="Technical Consultancy" services={technicalConsultancy} />
          <ConsultancyBlock title="Business Consultancy" services={businessConsultancy} />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((s, i) => <SuccessCard key={i} {...s} />)}
        </div>
      </section>
    </div>
  );
};

// ✅ Export with Props Data Call
export default function TrainingConsultancyPage() {
  return (
    <TrainingConsultancy
      hero={{
        title: "Professional Excellence Through Training",
        subtitle: "TechVision Engineering College offers comprehensive training programs and consultancy services to bridge the gap between academia and industry, fostering continuous learning and innovation.",
      }}
      stats={[
        { Icon: Users, number: "5000+", label: "Professionals Trained", color: "text-green-600" },
        { Icon: Building, number: "200+", label: "Corporate Partners", color: "text-blue-600" },
        { Icon: Award, number: "150+", label: "Training Programs", color: "text-purple-600" },
        { Icon: TrendingUp, number: "98%", label: "Satisfaction Rate", color: "text-orange-600" },
      ]}
      trainingPrograms={[
        {
          bg: "from-blue-50 to-indigo-100",
          icon: <Briefcase className="h-12 w-12 text-blue-600 mr-4" />,
          title: "Corporate Training",
          subtitle: "Industry-Specific Solutions",
          items: [
            { title: "Artificial Intelligence & Machine Learning", desc: "Comprehensive AI/ML training for technical teams", detail1: "Duration: 40 hours", detail2: "Mode: Online/Offline" },
            { title: "Cybersecurity Awareness", desc: "Security protocols and threat management", detail1: "Duration: 24 hours", detail2: "Mode: Hybrid" },
            { title: "Digital Transformation", desc: "Technology adoption and change management", detail1: "Duration: 32 hours", detail2: "Mode: Online" },
          ],
          footer: {
            bg: "bg-blue-100",
            textColor: "text-blue-800",
            textColor2: "text-blue-600",
            label: "Price Range:",
            value: "₹15,000 - ₹50,000 per participant",
            note: "Group discounts available",
          },
        },
        {
          bg: "from-green-50 to-emerald-100",
          icon: <Users className="h-12 w-12 text-green-600 mr-4" />,
          title: "Faculty Development",
          subtitle: "Academic Excellence Programs",
          items: [
            { title: "Emerging Technologies Workshop", desc: "Latest trends in engineering education", detail1: "Duration: 5 days", detail2: "Participants: 30" },
            { title: "Research Methodology Training", desc: "Advanced research techniques and publication strategies", detail1: "Duration: 3 days", detail2: "Participants: 25" },
            { title: "Pedagogical Skills Enhancement", desc: "Modern teaching methodologies and assessment", detail1: "Duration: 4 days", detail2: "Participants: 40" },
          ],
          footer: {
            bg: "bg-green-100",
            textColor: "text-green-800",
            textColor2: "text-green-600",
            label: "Registration Fee:",
            value: "₹5,000 - ₹12,000",
            note: "Accommodation available on campus",
          },
        },
        {
          bg: "from-purple-50 to-pink-100",
          icon: <Award className="h-12 w-12 text-purple-600 mr-4" />,
          title: "Student Enhancement",
          subtitle: "Career Readiness Programs",
          items: [
            { title: "Industry Readiness Bootcamp", desc: "Technical skills and soft skills development", detail1: "Duration: 2 weeks", detail2: "Batch Size: 50" },
            { title: "Competitive Programming", desc: "Algorithm design and problem-solving techniques", detail1: "Duration: 6 weeks", detail2: "Batch Size: 30" },
            { title: "Entrepreneurship Development", desc: "Business planning and startup methodologies", detail1: "Duration: 4 weeks", detail2: "Batch Size: 25" },
          ],
          footer: {
            bg: "bg-purple-100",
            textColor: "text-purple-800",
            textColor2: "text-purple-600",
            label: "Special Offer:",
            value: "Free for TechVision students",
            note: "External students: ₹2,000 - ₹8,000",
          },
        },
      ]}
      technicalConsultancy={[
        {
          title: "AI/ML Implementation",
          desc: "End-to-end AI solution development and deployment",
          border: "border-blue-600",
          points: ["Machine Learning Model Development", "Computer Vision Applications", "Natural Language Processing", "Predictive Analytics Solutions"],
        },
        {
          title: "VLSI Design Services",
          desc: "Custom chip design and verification services",
          border: "border-green-600",
          points: ["Digital IC Design", "Analog Circuit Design", "FPGA Implementation", "Design Verification"],
        },
        {
          title: "IoT System Development",
          desc: "Complete IoT ecosystem design and implementation",
          border: "border-purple-600",
          points: ["Sensor Network Design", "Edge Computing Solutions", "Cloud Integration", "Mobile Application Development"],
        },
      ]}
      businessConsultancy={[
        {
          title: "Digital Transformation",
          desc: "Strategic technology adoption and process optimization",
          border: "border-orange-600",
          points: ["Technology Assessment", "Process Re-engineering", "Change Management", "ROI Analysis"],
        },
        {
          title: "Cybersecurity Audit",
          desc: "Comprehensive security assessment and recommendations",
          border: "border-red-600",
          points: ["Vulnerability Assessment", "Penetration Testing", "Security Policy Development", "Compliance Audit"],
        },
        {
          title: "Technology Strategy",
          desc: "IT roadmap planning and technology selection",
          border: "border-teal-600",
          points: ["Technology Roadmapping", "Vendor Selection", "Cost-Benefit Analysis", "Implementation Planning"],
        },
      ]}
      successStories={[
        {
          from: "from-blue-50 to-indigo-100",
          iconColor: "text-blue-600",
          quote: `"TechVision's AI training program helped our team transition from traditional software development to cutting-edge machine learning solutions."`,
          details: {
            client: "Tech Mahindra",
            fields: [
              { label: "Program", value: "AI/ML Corporate Training" },
              { label: "Participants", value: "150 engineers" },
              { label: "Duration", value: "3 months" },
            ],
          },
        },
        {
          from: "from-green-50 to-emerald-100",
          iconColor: "text-green-600",
          quote: `"The cybersecurity audit and training provided by TechVision significantly enhanced our security posture and employee awareness."`,
          details: {
            client: "State Bank of India",
            fields: [
              { label: "Service", value: "Cybersecurity Consultancy" },
              { label: "Scope", value: "500+ branches" },
              { label: "Impact", value: "95% threat reduction" },
            ],
          },
        },
        {
          from: "from-purple-50 to-pink-100",
          iconColor: "text-purple-600",
          quote: `"TechVision's IoT consultancy was instrumental in developing our smart traffic management system, reducing congestion by 40%."`,
          details: {
            client: "Smart City Project",
            fields: [
              { label: "Project", value: "Smart Traffic System" },
              { label: "Scale", value: "200 intersections" },
              { label: "Timeline", value: "18 months" },
            ],
          },
        },
      ]}
    />
  );
}
