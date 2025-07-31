import React, { useEffect, useState } from "react";
import { 
  GraduationCap, 
  Star, 
  Handshake, 
  Trophy, 
  Scale, 
  User, 
  Brain, 
  Building2, 
  CheckCircle, 
  Calendar, 
  Target, 
  Medal, 
  TreePine, 
  University, 
  Sprout, 
  Book, 
  Home, 
  Drama, 
  ArrowRight,
  ChevronDown,
  Award,
  Users,
  MapPin,
  BookOpen,
  Globe,
  Shield,
  Zap
} from "lucide-react";
import BannerSection from "../../components/HeroBanner";
import StatsCard from "../../components/StatsCard";

export default function AboutUsPage() {
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const recognitions = [
    {
      id: 1,
      title: "UGC Recognition",
      body: "University Grants Commission of India",
      details: "F.9-18/2009 (CRP-I) dated 13 May 2009 under section 2(f) of UGC Act 1956. Empowered to award degrees under section 22 of the UGC Act 1956.",
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "NAAC Accredited",
      body: "B+ Grade Accreditation",
      details: "Recognised under UGC Section 12B and NAAC accredited with B+ Grade, ensuring quality education standards.",
      icon: Star,
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 3,
      title: "AIU Membership",
      body: "Association of Indian Universities",
      details: "Granted membership of the Association of Indian Universities, connecting us with premier institutions across India.",
      icon: Handshake,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      title: "ISO Certified",
      body: "ISO 9001:2008 Certification",
      details: "Accredited by Joint Accreditation System of Australia & New Zealand (JAS-ANZ), vide 1015QBC26 for quality management.",
      icon: Trophy,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const approvals = [
    {
      title: "Bar Council of India",
      program: "5-Year Integrated B.A. LLB Programme",
      school: "School of Law, Justice, & Governance",
      description: "Approved program preparing students for legal practice with comprehensive curriculum.",
      icon: Scale,
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "National Council for Teacher Education (NCTE)",
      program: "Two-Year B.Ed. Programme",
      school: "Department of Education & Training, School of Humanities & Social Sciences",
      description: "NCTE recognized program for aspiring educators and teaching professionals.",
      icon: User,
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Rehabilitation Council of India",
      program: "M.Phil. (Clinical Psychology) - 2 Years Programme",
      school: "Department of Psychology & Mental Health, School of Humanities & Social Sciences",
      description: "Specialized program for clinical psychology professionals and mental health practitioners.",
      icon: Brain,
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Council of Architecture, India",
      program: "B.Arch. and M.Arch. Programmes in Architecture and Planning",
      school: "Department of Architecture & Planning, School of Engineering",
      description: "Professional architecture programs approved for practice and higher studies.",
      icon: Building2,
      color: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
   
      <BannerSection
        title="History of Gautam Buddha University"
        subtitle="A Journey of Excellence in Education"
        bgTheme={7}
        />
      

    {/* Stats Section - Separate from Banner */}
          
    <StatsCard
      stats={[
        { number: 511, subtitle: "Acres of Green Campus", icon: TreePine, iconColor: "#16a34a" },
        { numberText: "17+", subtitle: "Years of Academic Excellence", icon: Calendar, iconColor: "#4f46e5" },
        { numberText: "B+", subtitle: "NAAC Accreditation", icon: Medal, iconColor: "#eab308" },
        { numberText: "4+", subtitle: "Statutory Approvals", icon: Shield, iconColor: "#a855f7" }
      ]}
    />
    {/* University Overview */}
      <section 
        id="overview" 
        data-animate 
        className={`py-20 bg-white transition-opacity duration-1000 ${
          isVisible.overview ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <span className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
                  <University className="w-4 h-4" />
                  <span>About Our University</span>
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Excellence in <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Education</span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  <strong>Gautam Buddha University</strong>, established by the <strong>Uttar Pradesh Act (9) of 2002</strong>, 
                  commenced its first academic session at its 511 acres lush green campus at Greater Noida in <strong>August 2008</strong>.
                </p>
                <p>
                  The University is fully funded by the <strong>New Okhla Industrial Development Authority (NOIDA)</strong> 
                  and the <strong>Greater Noida Industrial Development Authority (GNIDA)</strong>, both undertakings of the 
                  Government of Uttar Pradesh.
                </p>
                <p>
                  The University is <strong>recognized by the University Grants Commission</strong> under UGC Act and is a 
                  member of the <strong>Association of Indian Universities</strong>. All academic programmes offered by the 
                  University are recognised by the University Grants Commission of India and various other Statutory Bodies and Councils.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <University className="w-8 h-8 text-indigo-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Established</h3>
                  <p className="text-gray-600">UP Act (9) of 2002</p>
                  <p className="text-sm text-indigo-600 mt-1">August 2008</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <Sprout className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Campus</h3>
                  <p className="text-gray-600">511 Acres</p>
                  <p className="text-sm text-green-600 mt-1">Greater Noida</p>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  GBU
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">UGC Recognized</h4>
                      <p className="text-gray-600 text-sm">Section 2(f) & 12B</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">NAAC Accredited</h4>
                      <p className="text-gray-600 text-sm">B+ Grade</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      <Handshake className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">AIU Member</h4>
                      <p className="text-gray-600 text-sm">Association of Indian Universities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section 
        id="recognitions" 
        data-animate 
        className={`py-20 bg-white transition-opacity duration-1000 ${
          isVisible.recognitions ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              <span>Our Achievements</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recognized & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Accredited</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our numerous recognitions and certifications from prestigious institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitions.map((recognition, index) => {
              const IconComponent = recognition.icon;
              return (
                <div 
                  key={recognition.id}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${recognition.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {recognition.title}
                  </h3>
                  
                  <p className="text-gray-600 font-medium mb-4">
                    {recognition.body}
                  </p>
                  
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {recognition.details}
                  </p>
                  
                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${recognition.color} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statutory Approvals */}
      <section 
        id="approvals" 
        data-animate 
        className={`py-20 bg-white transition-opacity duration-1000 ${
          isVisible.approvals ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              <CheckCircle className="w-4 h-4" />
              <span>Professional Approvals</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Statutory <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Approvals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our academic programs are approved and recognized by various statutory bodies and professional councils, ensuring quality education and career opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {approvals.map((approval, index) => {
              const IconComponent = approval.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 ${approval.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                        {approval.title}
                      </h3>
                      
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-gray-500 font-medium">Programme:</span>
                          <p className="text-lg font-semibold text-gray-800">{approval.program}</p>
                        </div>
                        
                        <div>
                          <span className="text-sm text-gray-500 font-medium">School/Department:</span>
                          <p className="text-gray-700">{approval.school}</p>
                        </div>

                        <div>
                          <p className="text-gray-600 leading-relaxed">{approval.description}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex items-center space-x-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-teal-600 rounded-full group-hover:animate-pulse" />
                        </div>
                        <span className="text-sm font-medium text-green-600 inline-flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4" />
                          <span>Approved</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section 
        id="campus" 
        data-animate 
        className={`py-20 bg-white transition-opacity duration-1000 ${
          isVisible.campus ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
              <Users className="w-4 h-4" />
              <span>Experience GBU</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Life at <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">GBU</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the vibrant campus life that awaits you at our 511-acre green campus in Greater Noida, fully funded by NOIDA and GNIDA.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Excellence",
                description: "State-of-the-art facilities with programs recognized by UGC and various statutory bodies",
                icon: Book,
                color: "from-blue-500 to-indigo-600",
                features: ["UGC Recognized Programs", "Research Facilities", "Digital Library", "Smart Campus"]
              },
              {
                title: "Campus Facilities",
                description: "Everything you need for a comfortable and enriching campus life experience",
                icon: Home,
                color: "from-green-500 to-teal-600",
                features: ["511-Acre Green Campus", "Modern Infrastructure", "Hostel Facilities", "Medical Center"]
              },
              {
                title: "Professional Development",
                description: "Multiple statutory approvals ensuring career-ready graduates",
                icon: Drama,
                color: "from-purple-500 to-pink-600",
                features: ["Industry Connections", "Professional Programs", "Skill Development", "Placement Support"]
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
