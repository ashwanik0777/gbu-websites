
import React from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

// Card, Header, Title, Content, Badge Components
const Card = ({ className = "", children }) => (

  <motion.div
    className={`bg-white rounded-lg border-gray-300 shadow ${className}`}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);


const CardHeader = ({ className = "", children }) => (

  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

const CardTitle = ({ className = "", children }) => (
  <h2 className={`font-bold ${className}`}>{children}</h2>
);


const CardContent = ({ className = "", children }) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);

const Badge = ({ className = "", variant = "", children }) => {
  let base = "inline-block px-3 py-1 rounded-full text-xs font-semibold";
  let color =
    variant === "secondary"
      ? "bg-blue-100 text-blue-800"
      : variant === "outline"
      ? "border border-blue-400 text-blue-700 bg-white"
      : "bg-gray-100 text-gray-700";

  return <span className={`${base} ${color} ${className}`}>{children}</span>;
};

const NSSStructure = () => {
  const unitOfficers = [
    {
      name: "Unit-I",
      officers: [
        {
          name: "Dr. Ajay Kumar Kansal",
          department: "Assistant Professor, School of Management",
          designation: "Program Officer-I",
          image:
            "https://faculty.gbu.ac.in/uploads/photos/6605385fcad96_ajay.jpg",
        },
        {
          name: "Dr. Alpa Yadav",
          department:
            "Assistant Professor, School of Vocational Studies and Applied Sciences",
          designation: "Program Officer-II",
          image:
            "https://faculty.gbu.ac.in/uploads/photos/660534a85d1d9_alpa.jpg",
        },
      ],
    },
    {
      name: "Unit-II",
      officers: [
        {
          name: "Dr. Siddaramu",
          department:
            "Assistant Professor, School of Humanities and Social Sciences",
          designation: "Program Officer-I",
          image:
            "https://faculty.gbu.ac.in/uploads/photos/660bd29b8c6f3_pp.JPG",
        },
        {
          name: "Dr. Priyanka Goyal",
          department:
            "Assistant Professor, School of Information and Communication Technology",
          designation: "Program Officer-II",
          image:
            "https://faculty.gbu.ac.in/uploads/photos/66052fa591258_priyankag.jpg",
        },
      ],
    },
    {
      name: "Unit-III",
      officers: [
        {
          name: "Dr. Navin Kumar",
          department: "Assistant Professor, School of Biotechnology",
          designation: "Program Officer-I",
          image:
            "https://faculty.gbu.ac.in/uploads/photos/660536c6ac4a5_navinkumar.jpg",
        },
        {
          name: "Dr. Vibhavari",
          department:
            "Assistant Professor, School of Humanities and Social Sciences",
          designation: "Program Officer-II",
          image:
            "https://faculty.gbu.ac.in/uploads/photos/6605396206f88_vibhavari.jpg",
        },
      ],
    },
  ];
  const coordinators = [
    {
      name: "Dr. Jai Prakash Muyal",
      designation: "Assistant Professor, SoBT",
      tenure: "22/10/2022 - Present",
      description: "University Coordinator - NSS, GBU",
      image: "https://nss.gbu.ac.in/assets/leaderimg/jpmuyalsir.jpg",
    },
    {
      name: "Dr. Sushil Kumar",
      designation: "Assistant Professor, SoVSAS",
      tenure: "12/09/2015 - 21/10/2022",
      description: "University Coordinator - NSS, GBU",
      image: "https://nss.gbu.ac.in/assets/leaderimg/sushil-kumar.jpg",
    },
  ];

  const volunteerLeaders = [
    {
      name: "Rahul Kumar",
      role: "NSS Secretary",
      year: "Final Year",
      program: "B.Tech CSE",
      email: "rahul.kumar@student.edu",
      image: "/placeholder.svg",
      achievements: ["Best Volunteer 2023", "Leadership Award"],
    },
    {
      name: "Priya Singh",
      role: "Joint Secretary",
      year: "Third Year",
      program: "B.A. English",
      email: "priya.singh@student.edu",
      image: "/placeholder.svg",
      achievements: ["Community Service Award", "Event Coordinator"],
    },
    {
      name: "Amit Patel",
      role: "Volunteer Coordinator",
      year: "Second Year",
      program: "B.Com",
      email: "amit.patel@student.edu",
      image: "/placeholder.svg",
      achievements: ["Social Media Manager", "Event Organizer"],
    },
  ];

  const units = [
    { name: "Unit A", volunteers: 120, focus: "Community Health" },
    { name: "Unit B", volunteers: 95, focus: "Education Support" },
    { name: "Unit C", volunteers: 110, focus: "Environmental Conservation" },
    { name: "Unit D", volunteers: 85, focus: "Rural Development" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,

      transition: { delay: i * 0.2, duration: 0.5 },
    }),

  };

  return (
    <SearchableWrapper>
    <div className="space-y-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Program Officer Section */}
      <motion.div variants={fadeIn} initial="hidden" animate="visible">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          University Coordinators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-6  ">
          {coordinators.map((person, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow  hover:shadow-md
        hover:scale-105
        transform
        transition-all duration-300 p-6 space-y-4 md:space-y-0 md:space-x-6 border border-gray-200"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="text-center md:text-left space-y-1">
                <h3 className="text-lg font-semibold text-blue-700">
                  {person.name}
                </h3>
                <p className="text-gray-700">{person.designation}</p>
                <hr className="my-1 border-gray-300 w-12 mx-auto md:mx-0" />
                <p>
                  <span className="font-semibold">Tenure:</span> {person.tenure}
                </p>
                <p className="text-gray-700">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/*Program Officers unit wise*/}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Program Officers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {unitOfficers.map((unit) => (
          <div
            key={unit.name}
            className="
        flex-shrink-0
        bg-gradient-to-br from-white to-blue-50
        rounded-xl
        shadow
        border border-blue-200
        p-4
        flex flex-col
        cursor-pointer
        hover:shadow-md
        hover:scale-105
        transform
        transition-all duration-300
      "
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">
              {unit.name}
            </h3>
            <div className="flex flex-col gap-4">
              {unit.officers.map((officer, index) => (
                <div
                  key={index}
                  className="
              bg-white
              border border-gray-200
              rounded-lg
              p-3
              flex flex-col items-center text-center
            "
                >
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-24 h-24 object-cover rounded-full shadow mb-2"
                  />
                  <h4 className="font-semibold text-gray-800">
                    {officer.name}
                  </h4>
                  <p className="text-sm text-gray-600">{officer.department}</p>
                  <span
                    className="
                inline-block
                mt-2
                text-xs
                font-medium
                bg-blue-100
                text-blue-800
                px-2
                py-0.5
                rounded
              "
                  >
                    {officer.designation}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* Volunteer Leaders Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Volunteer Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteerLeaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={index + 1}
            >

              <Card className=" hover:shadow-md
        hover:scale-105
        transform
        transition-all duration-300 ">
                <CardContent className="p-6 text-center ">

                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200"
                  />

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 mb-2">
                    {leader.year} • {leader.program}
                  </p>

                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">
                      {leader.email}
                    </span>

                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {leader.achievements.map((achievement, idx) => (

                      <Badge key={idx} variant="outline">
                        {achievement}
                      </Badge>

                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NSS Units */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          NSS Units
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {units.map((unit, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={index + 1}
            >

              <Card className="text-center  hover:shadow-md
        hover:scale-105
        transform
        transition-all duration-300 ">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-blue-600">
                    {unit.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {unit.volunteers}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    Active Volunteers
                  </div>
                  <Badge className="w-full bg-blue-100 text-blue-800">
                    {unit.focus}
                  </Badge>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Organizational Chart */}

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Organizational Hierarchy
            </CardTitle>

          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-8">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                Program Officer
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="flex flex-wrap justify-center gap-4">

                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                  NSS Secretary
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                  Joint Secretary
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                  Volunteer Coordinator
                </div>

              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="flex flex-wrap justify-center gap-4">
                {units.map((unit, index) => (

                  <div
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg"
                  >

                    {unit.name} ({unit.volunteers} Volunteers)
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    </SearchableWrapper>
  );
};

export default NSSStructure;
