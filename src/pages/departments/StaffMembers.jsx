 import React from "react";
import { motion } from "framer-motion";
import BannerSection from "../../components/HeroBanner";

 const staffData = [
  {
    department: "Electronics and Communication Engineering",
    short: "ECE",
    members: [
      {
        name: "Mr. Ravindra Kumar",
        designation: "Technical Superintendent",
        phone: "9560539604",
        email: "ravindra@gbu.ac.in",
        image: "/staff/ravindra.jpg",
      },
      {
        name: "Mr. Himanshu Saini",
        designation: "Technical Superintendent",
        phone: "9540593279",
        email: "himanshu@gbu.ac.in",
        image: "/staff/himanshu.jpg",
      },
      {
        name: "Mr. Anmol Nagar",
        designation: "Technical Superintendent",
        phone: "9910997540",
        email: "anmol@gbu.ac.in",
        image: "/staff/anmol.jpg",
      },
      {
        name: "Mr. Amit Kumar",
        designation: "Lab Assistant",
        phone: "9266097577",
        email: "amitk2193@gmail.com",
        image: "/staff/amit.jpg",
      },
      {
        name: "Mr. Chandra Pal Sharma",
        designation: "Lab Assistant",
        phone: "7703842834",
        email: "sharmachandrapal855@gmail.com",
        image: "/staff/chandrapal.jpg",
      },
      {
        name: "Mr. Amar Singh",
        designation: "Lab Assistant",
        phone: "7275294737",
        email: "amaripec2006@gmail.com",
        image: "/staff/amar.jpg",
      },
    ],
  },
  {
    department: "Computer Science and Engineering",
    short: "CSE",
    members: [
      {
        name: "Mr. Sanjeev Kumar",
        designation: "Technical Assistant",
        phone: "9760070427",
        email: "sanjeev@gbu.ac.in",
        image: "/staff/sanjeev.jpg",
      },
      {
        name: "Mrs. Sunita",
        designation: "Technical Assistant",
        phone: "9871741203",
        email: "sunita@gbu.ac.in",
        image: "/staff/sunita.jpg",
      },
      {
        name: "Mr. Nitin Kumar",
        designation: "Lab Assistant",
        phone: "8650431181",
        email: "nitinkumarmathur1968@gmail.com",
        image: "/staff/nitin.jpg",
      },
      {
        name: "Mr. Arjit",
        designation: "Lab Assistant",
        phone: "9313404138",
        email: "arjitkumar38@gmail.com",
        image: "/staff/arjit.jpg",
      },
      {
        name: "Mr. Rahul Kumar",
        designation: "Lab Assistant",
        phone: "9319799226",
        email: "davidrahulk1019@gmail.com",
        image: "/staff/rahul.jpg",
      },
      {
        name: "Mrs. Kirti Chaudhary",
        designation: "Lab Assistant",
        phone: "9457714863",
        email: "kirtitevatiya43@gmail.com",
        image: "/staff/kirti.jpg",
      },
    ],
  },
  {
    department: "Administration",
    short: "Admin",
    members: [
      {
        name: "Mr. Shamem Raza",
        designation: "Executive Assistant",
        phone: "9910300194",
        email: "shamem@gbu.ac.in",
        image: "/staff/shameem.jpg",
      },
      {
        name: "Mr. Salendra Kumar",
        designation: "Office Attendant",
        phone: "7701809870",
        email: "salendra@gbu.ac.in",
        image: "/staff/salendra.jpg",
      },
      {
        name: "Mr. Lalit Sharma",
        designation: "Office Assistant",
        phone: "8510927518",
        email: "lalit.sharma812@gmail.com",
        image: "/staff/lalit.jpg",
      },
      {
        name: "Mr. Arvind Kumar",
        designation: "Office Attendant",
        phone: "9625397081",
        email: "talibarvind@gmail.com",
        image: "/staff/arvind.jpg",
      },
      {
        name: "Mr. Ritesh Kumar",
        designation: "Lab Attendant",
        phone: "9458876635",
        email: "ritesh945887@gmail.com",
        image: "/staff/ritesh.jpg",
      },
      {
        name: "Mr. Raghuveer Verma",
        designation: "Office Attendant",
        phone: "8506929538",
        email: "raghuveervermagbu@gmail.com",
        image: "/staff/raghuveer.jpg",
      },
      {
        name: "Mr. Anish",
        designation: "Office Attendant",
        phone: "7505056660",
        email: "anishkhansofiya75075000@gmail.com",
        image: "/staff/anish.jpg",
      },
      {
        name: "Mr. Vivek",
        designation: "Office Attendant",
        phone: "8433209830",
        email: "Vivekkumar897961@gmail.com",
        image: "/staff/vivek.jpg",
      },
      {
        name: "Mr. Monu Tevatiya",
        designation: "Office Attendant",
        phone: "7599497598",
        email: "teotiamonu98@gmail.com",
        image: "/staff/monu.jpg",
      },
    ],
  },
];

function StaffMembers({ staffData }) {
  return (
    <>
    <BannerSection
      title="Staff Members"
      subtitle="Meet Our Dedicated Team"
      bgTheme={2}
    />
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="space-y-16">
          {staffData.map((dept, deptIndex) => (
            <div
              key={deptIndex}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-gray-100 overflow-hidden backdrop-blur-sm"
              style={{
                animation: `fadeInUp 0.8s ease-out ${deptIndex * 0.2}s both`,
              }}
            >
              <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 p-6 rounded-xl mb-6 relative overflow-hidden">
                <h2 className="text-2xl text-center font-bold text-white relative z-10">
                  {dept.department}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {dept.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border-l-4 border-blue-300 hover:border-blue-500 transition-all duration-300 hover:shadow-md shadow-xl transform hover:-translate-y-2 flex flex-col"
                    style={{
                      animation: `slideInLeft 0.6s ease-out ${
                        deptIndex * 0.2 + memberIndex * 0.1
                      }s both`,
                    }}
                  >
                    <div className="p-4 flex flex-col items-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://cdn-icons-png.flaticon.com/512/847/847969.png";
                        }}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100"
                      />
                      <h3 className="font-bold text-gray-800 text-lg text-center">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 text-sm text-center mb-2">
                        {member.designation}
                      </p>
                    </div>

                    <div className="border-t border-gray-200 p-4 space-y-2 mt-auto">
                      <div className="flex items-center text-sm text-gray-700">
                        <svg
                          className="w-4 h-4 text-blue-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="font-mono text-xs">
                          {member.phone}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <svg
                          className="w-4 h-4 text-blue-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
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
}

export default function StaffPage() {
  return <StaffMembers staffData={staffData} />;
}
