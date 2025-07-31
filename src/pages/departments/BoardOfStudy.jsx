import React from "react";
import BannerSection from "../../components/HeroBanner";

// ✅ Fully props-based BoardOfStudies component
const BoardOfStudies = ({ departments }) => {
  return (
    <>
    <BannerSection
          title="Board of Studies"
          subtitle="Empowering Academic Excellence"
          bgTheme={10}
        />
     <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Department Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {departments.map((dept, deptIndex) => (
            <div
              key={deptIndex}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-gray-100 border-solid overflow-hidden backdrop-blur-sm"
              style={{
                animation: `fadeInUp 0.8s ease-out ${deptIndex * 0.2}s both`,
              }}
            >
              {/* Department Header */}
              <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                <h2 className="text-2xl font-bold text-white text-center tracking-wide relative z-10">
                  {dept.title}
                </h2>
              </div>

              {/* Members List */}
              <div className="p-8 space-y-8">
                {dept.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border-l-4 border-blue-300 hover:border-blue-500 transition-all duration-300 hover:shadow-md"
                    style={{
                      animation: `slideInLeft 0.6s ease-out ${deptIndex * 0.2 + memberIndex * 0.1
                        }s both`,
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-gray-800 text-lg">
                        {member.name}
                      </h3>
                      {member.role && (
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${member.role === "Chairperson"
                              ? "bg-blue-100 text-blue-800 shadow-sm"
                              : member.role === "HoD"
                                ? "bg-green-100 text-green-800 shadow-sm"
                                : member.role === "External Expert"
                                  ? "bg-purple-100 text-purple-800 shadow-sm"
                                  : "bg-gray-100 text-gray-800 shadow-sm"
                            }`}
                        >
                          {member.role}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-2 font-medium">
                      {member.designation}
                    </p>

                    {member.university && (
                      <p className="text-gray-600 text-sm mb-1">
                        {member.university}
                      </p>
                    )}

                    {member.location && (
                      <p className="text-gray-600 text-sm mb-4">
                        {member.location}
                      </p>
                    )}

                    {/* Contact Information */}
                    <div className="space-y-2 pt-3 border-t border-gray-200 border-solid">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-5 h-5 mr-3 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            ></path>
                          </svg>
                        </div>
                        <span className="font-mono text-xs">
                          {member.phone}
                        </span>
                      </div>

                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-5 h-5 mr-3 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                        <span className="font-mono text-xs text-blue-700 hover:text-blue-900 cursor-pointer">
                          {member.email}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
    </>
   
  );
};

// ✅ Parent Component (same file)
export default function App() {
  const departments = [
    {
      title: "Department of IT",
      members: [
        {
          name: "Dr. Arpit Bhardwaj",
          designation: "Dean, School of Information & Communication Technology",
          university: "Gautam Buddha University,",
          location: "Greater Noida",
          role: "Chairperson",
          phone: "+91-9876543210",
          email: "arpit.bhardwaj@gbu.ac.in",
        },
        {
          name: "Dr. Neeta Singh",
          designation: "Department of Information Technology",
          university: "School of ICT,",
          location: "Gautam Buddha University",
          role: "HoD",
          phone: "+91-9876543211",
          email: "neeta.singh@gbu.ac.in",
        },
        {
          name: "Dr. Arun Solanki",
          designation: "Department Of Computer Science Engineering,",
          university: "School of ICT,",
          location: "Gautam Buddha University",
          role: "Member",
          phone: "+91-9876543212",
          email: "arun.solanki@gbu.ac.in",
        },
        {
          name: "D. Vidushi Sharma",
          designation: "Department of ECE",
          university: "Delhi Technological University,",
          location: "Delhi",
          role: "",
          phone: "+91-9876543213",
          email: "vidushi.sharma@dtu.ac.in",
        },
      ],
    },
    {
      title: "Department of CSE",
      members: [
        {
          name: "Dr. Arpit Bhardwaj",
          designation: "Dean, School of Information & Communication Technology",
          university: "Gautam Buddha University,",
          location: "Greater Noida",
          role: "Chairperson",
          phone: "+91-9876543210",
          email: "arpit.bhardwaj@gbu.ac.in",
        },
        {
          name: "Dr. Arun Solanki",
          designation: "Department Of Computer Science Engineering",
          university: "School of ICT,",
          location: "Gautam Buddha University",
          role: "Member",
          phone: "+91-9876543212",
          email: "arun.solanki@gbu.ac.in",
        },
        {
          name: "Dr. Vidushi Sharma",
          designation: "Department of ECE,",
          university: "School of ICT,",
          location: "Delhi",
          role: "Member",
          phone: "+91-9876543213",
          email: "vidushi.sharma@ict.ac.in",
        },
        {
          name: "Dr. Neeta Singh",
          designation: "Department of Information Technology",
          university: "School of ICT,",
          location: "",
          role: "",
          phone: "+91-9876543211",
          email: "neeta.singh@gbu.ac.in",
        },
      ],
    },
    {
      title: "Department of ECE",
      members: [
        {
          name: "Dr. Arpit Bhardwaj",
          designation: "School of Information & Communication Technology,",
          university: "",
          location: "",
          role: "Chairperson",
          phone: "+91-9876543210",
          email: "arpit.bhardwaj@gbu.ac.in",
        },
        {
          name: "Prof. Brahmjit Singh",
          designation: "NIT, Kurukshetra",
          university: "",
          location: "",
          role: "External Expert",
          phone: "+91-9876543214",
          email: "brahmjit.singh@nitkkr.ac.in",
        },
        {
          name: "Prof. D.K. Lobiyal",
          designation: "JNU, Delhi",
          university: "",
          location: "",
          role: "External Expert",
          phone: "+91-9876543215",
          email: "dk.lobiyal@jnu.ac.in",
        },
        {
          name: "Dr. Vidushi Sharma",
          designation: "HoD, Department of ECE",
          university: "Gautam Buddha University",
          location: "",
          role: "Member",
          phone: "+91-9876543213",
          email: "vidushi.sharma@gbu.ac.in",
        },
        {
          name: "Dr. Rajesh Mishra",
          designation: "Department of ECE",
          university: "School of ICT,",
          location: "Gautam Buddha University",
          role: "",
          phone: "+91-9876543216",
          email: "rajesh.mishra@gbu.ac.in",
        },
      ],
    },
  ];

  return <BoardOfStudies departments={departments} />;
}
