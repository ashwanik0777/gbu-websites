import {
  Cpu, Radio, Waves, Satellite, Users, Award, BookOpen, Lightbulb, GraduationCap, Shield, Cloud, Smartphone, Globe
} from "lucide-react";


export const eceData = {
   heroProps : {
    title: "Department of Electronics & Communication Engineering",
    highlight: "Electronics & Communication Engineering",
    subtitle:
      "Shaping the future of communications and electronics through innovation, research, and academic excellence.",
    primaryButton: { label: "Explore Programs" },
    secondaryButton: { label: "Research Areas" },
    backgroundImage:
      "https://images.unsplash.com/photo-1581090700227-4c4c1a7b8f17?auto=format&fit=crop&w=1920&q=80",
    features : [
  {
    icon: Cpu,
    bg: "bg-gradient-to-br from-pink-500 to-pink-600",
    title: "Embedded Systems",
    description: "Designing smart embedded solutions for diverse applications.",
  },
  {
    icon: Radio,
    bg: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    title: "Communication Systems",
    description: "Wireless, satellite, and optical communication research.",
  },
  {
    icon: Waves,
    bg: "bg-gradient-to-br from-green-500 to-green-600",
    title: "Signal Processing",
    description: "Advanced signal processing, VLSI design, and IoT integration.",
  },
],
  },

   hodProps : {
    title: "From the Desk of HOD, ECE",
    image: "https://www.gbu.ac.in/USICT/media/img/vidushii.jpg",
    name: "Dr. Vidushi Sharma",
    designation: "Head of Department",
    messageParagraphs: [
      "Greeting from the Department of Electronics and Communication Engineering!!",
      "I warmly welcome you to the Department of Electronics and Communication Engineering, Gautam Buddha University. Over all these years, we have made progress in imparting technical education to our students and bringing them at par with the ever-expanding horizons of Electronics and Communication Engineering and its application areas. At the undergraduate level, we offer four-year B. Tech. Programme, and four-year B. Tech. (Engineering Design) Programme. At the postgraduate level, we offer three areas of specialization for two-year M. Tech. Programmes: (i) Wireless Communication and Networks, (ii) VLSI Design, (iii) Railway Signalling Telecommunication and RAMS. We also offer Ph.D. Programmes for full time and working professionals in all areas where research is being currently conducted by our faculty members.",
      "The Electronics and Communication Engineering department has always placed prime emphasis on excellence in teaching and research. Faculty members have very good academic credentials and are highly motivated towards imparting the best of education, as well as pioneering research and development. Our courses are frequently updated in terms of depth as well as the subjects themselves, so that our students always remain on the forefront of technological advancement. Well-equipped laboratories and encouragement to pursue research have increased our students’ productivity in terms of placements, higher studies, and research contributions. It has been observed that student research contribution has increased tremendously during the last few years. We regularly organize seminars, workshops, conferences, faculty development programmes, skill enhancement programmes, expert talks, invited lectures, etc., that benefit our students as well as the staff members of our school.",
      "Thank you for visiting us. If you require any information, or wish to get in touch, please feel free to reach me via email.",
      "Dr. Vidushi Sharma",
      "Head, Department of Electronics and Communication Engineering",
      "Email: vidushi@gbu.ac.in Phone: 0120-2346080 (Ext.6080)"
    ],
    contact: {
      name: "Dr. Vidushi Sharma",
      designation: "Head of Department - ECE",
      email: "vidushi@gbu.ac.in",
      phone: "0120-2346080 (Ext.6080)"
    }
  },


   aboutProps : {
    heading: "About the Department",
    subheading:
      "Established in 1995, the ECE department has been at the forefront of electronics and communication research and education.",
    stats: [
      { icon: Users, label: "Students", value: "700+" },
      { icon: BookOpen, label: "Faculty", value: "40+" },
      { icon: Award, label: "Research Projects", value: "100+" },
      { icon: Lightbulb, label: "Patents Filed", value: "20+" },
    ],
    highlights: [
      {
        title: "Quality Education",
        description:
          "Undergraduate and postgraduate programs designed to equip students with strong fundamentals and industry-ready skills.",
        dotColor: "#ec4899",
      },
      {
        title: "Research Excellence",
        description:
          "Active research in wireless networks, IoT, VLSI design, and communication systems. Frequent publications in high-impact journals.",
        dotColor: "#f59e0b",
      },
      {
        title: "Industry Connect",
        description:
          "Partnerships with ISRO, DRDO, Intel, Texas Instruments, and other leading companies for research and student internships.",
        dotColor: "#10b981",
      },
    ],
    vision:
      "To be a leader in providing world-class education and research in electronics and communication technologies for sustainable development.",
    missionPoints: [
      "Deliver quality education in electronics and communication.",
      "Promote cutting-edge research in emerging fields.",
      "Encourage innovation and product development.",
      "Strengthen industry-academia collaboration.",
      "Contribute to technological advancement for societal benefit.",
    ],
  },

   programsData : [
    {
      title: "B.Tech Electronics & Communication Engineering",
      duration: "4 Years",
      intake: "100 Students",
      description:
        "A rigorous undergraduate program covering core areas of electronics and modern communication technologies.",
      image:
        "https://images.unsplash.com/photo-1684430598623-e04d754cec59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JTIyQW5hbG9nJTIwJTI2JTIwRGlnaXRhbCUyMEVsZWN0cm9uaWNzJTIyJTJDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIyTWljcm9wcm9jZXNzb3JzJTIwJTI2JTIwTWljcm9jb250cm9sbGVycyUyMiUyQyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMkNvbW11bmljYXRpb24lMjBTeXN0ZW1zJTIyJTJDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIyVkxTSSUyMERlc2lnbiUyMiUyQyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMkVtYmVkZGVkJTIwU3lzdGVtcyUyMiUyQyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMlNpZ25hbCUyMFByb2Nlc3NpbmclMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJJb1QlMjBBcHBsaWNhdGlvbnMlMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJXaXJlbGVzcyUyME5ldHdvcmtzJTIyJTJDfGVufDB8fDB8fHww",
      gradient: "from-pink-500 to-pink-600",
      highlights: [
        "Analog & Digital Electronics",
        "Microprocessors & Microcontrollers",
        "Communication Systems",
        "VLSI Design",
        "Embedded Systems",
        "Signal Processing",
        "IoT Applications",
        "Wireless Networks",
      ],
    },
    {
      title: "M.Tech Electronics & Communication Engineering",
      duration: "2 Years",
      intake: "40 Students",
      description:
        "Advanced postgraduate program focusing on research and specialization in communication, VLSI, and embedded systems.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
      gradient: "from-yellow-500 to-yellow-600",
      highlights: [
        "Advanced Communication",
        "VLSI Technology",
        "Embedded System Design",
        "Wireless & Mobile Networks",
        "Antenna & Microwave Engineering",
        "Digital Signal Processing",
        "Research Methodology",
        "Thesis Project",
      ],
    },
    {
      title: "PhD Electronics & Communication",
      duration: "3-5 Years",
      intake: "10 Students",
      description:
        "Doctoral program focused on pioneering research in electronics, communication systems, and allied technologies.",
      image:
        "https://images.unsplash.com/photo-1628582453226-a0027de09af1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCUyMkluZGVwZW5kZW50JTIwUmVzZWFyY2glMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJJbnRlcmRpc2NpcGxpbmFyeSUyMFByb2plY3RzJTIyJTJDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIyUGFwZXIlMjBQdWJsaWNhdGlvbnMlMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJJbnRlcm5hdGlvbmFsJTIwQ29uZmVyZW5jZXMlMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJJbmR1c3RyeSUyMFJlc2VhcmNoJTIwQ29sbGFib3JhdGlvbiUyMiUyQyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMlBhdGVudCUyMEZpbGluZyUyMiUyQyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMlRlYWNoaW5nJTIwQXNzaXN0YW50c2hpcCUyMiUyQyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMlRoZXNpcyUyMERlZmVuc2UlMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlNUQlMkN8ZW58MHx8MHx8fDA%3D",
      gradient: "from-green-500 to-green-600",
      highlights: [
        "Independent Research",
        "Interdisciplinary Projects",
        "Paper Publications",
        "International Conferences",
        "Industry Research Collaboration",
        "Patent Filing",
        "Teaching Assistantship",
        "Thesis Defense",
      ],
    },
  ],

   facultyMembers : [
    {
      name: "Dr. Mangal Das",
      position: "Assistant Professor",
      specialization: "Semiconductor Fabrication Nanotechnology Robotics AI/ML",
      email: "mangal.das@gbu.ac.in",
      achievements: "Indian Institute of Technology Indore",
      image: "https://faculty.gbu.ac.in/uploads/photos/676049327abf5_Mangal_Das_2024-min.JPG", 
      color: "from-pink-500 to-pink-600",
      extraIcon: Award,
    },
    {
      name: "Dr. Navaid Zafar Rizvi",
      position: "Assistant Professor",
      specialization: "Machine Intelligence for ICs, MEMS/VLSI Design, Antenna & Microwave Techniques & RF Technology, Microsystems Fabrication",
      email: "navaid@gbu.ac.in",
      achievements: "PhD , M.S- Inf. & Comm. Engg. (TUD-Darmstadt, Germany), M.S- Microsystems Engg. (HFU, Germany)",
      image: "https://faculty.gbu.ac.in/uploads/photos/66066a93789f0_navaid-rizvi.jpg", 
      color: "from-yellow-500 to-yellow-600",
      extraIcon: Award,
    },
    {
      name: "Dr. Priyanka Goyal",
      position: "Assistant Professor",
      specialization: "Field of teaching- Basic electronics, Analog Communication, Network Analysis and Synthesis, VHDL, Verilog, Low Power VLSI, Automation and Physical Design, Principles",
      email: "priyankag@gbu.ac.in",
      achievements: "PhD (2018) in Optoelectronics and VLSI (On-chip optical interconnects)",
      image: "https://faculty.gbu.ac.in/uploads/photos/66052fa591258_priyankag.jpg", 
      color: "from-green-500 to-green-600",
    },
    {
      name: "Dr. Rajesh Mishra",
      position: "Assistant Professor",
      specialization: "Networks, Signal Processing, Communication Systems, Reliability Engineering, RAMS",
      email: "rmishra@gbu.ac.in",
      achievements: "B.E. (Electronics Engineering), M. Tech. & Ph.D. (IIT Kharagpur)",
      image: "https://faculty.gbu.ac.in/uploads/photos/67c341c729a98_rajesh%20photo.jpg",
      color: "from-orange-500 to-orange-600",
    },
  ],


   facultyStats : {
    text: "Our department boasts 40+ dedicated faculty members contributing to diverse domains of ECE.",
    stats: [
      {
        icon: BookOpen,
        value: "400+",
        label: "Research Papers",
        bg: "bg-pink-50",
        color: "text-pink-600",
      },
      {
        icon: Award,
        value: "40+",
        label: "Awards",
        bg: "bg-yellow-50",
        color: "text-yellow-600",
      },
      {
        icon: null,
        custom: "PhD",
        value: "95%",
        label: "PhD Faculty",
        bg: "bg-green-50",
        color: "bg-green-600",
      },
      {
        icon: null,
        custom: "Exp",
        value: "12+",
        label: "Avg Experience",
        bg: "bg-orange-50",
        color: "bg-orange-600",
      },
    ],
  },
   researchAreas : [
    {
      icon: Satellite,
      title: "Wireless & Mobile Communication",
      description: "Next-gen wireless networks, 5G/6G, and mobile communication systems.",
      projects: ["5G Testbed", "IoT Communication", "Smart City Connectivity"],
      image: "https://source.unsplash.com/400x300/?5g,network,tower", // Wireless Communication
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Shield,
      title: "Embedded Systems & IoT",
      description: "Designing intelligent embedded and IoT solutions for smart applications.",
      projects: ["Smart Agriculture", "Healthcare IoT", "Home Automation"],
      image: "https://source.unsplash.com/400x300/?iot,embedded,smart-device", // Embedded IoT
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      icon: Waves,
      title: "Signal & Image Processing",
      description: "Digital signal processing, image analysis, biomedical applications.",
      projects: ["Medical Image Processing", "Speech Recognition", "Remote Sensing"],
      image: "https://source.unsplash.com/400x300/?signal-processing,image-analysis,biomedical", // Signal/Image
      gradient: "from-green-500 to-lime-500",
    },
    {
      icon: Cpu,
      title: "VLSI Design",
      description: "Design and fabrication of integrated circuits, SoC, and FPGA systems.",
      projects: ["Low-Power VLSI", "Nanoelectronics", "MEMS"],
      image: "https://source.unsplash.com/400x300/?vlsi,chip,semiconductor", // VLSI
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: Globe,
      title: "Optical & Microwave Communication",
      description: "Research in optical fiber communication, antennas, and microwave engineering.",
      projects: ["Smart Antennas", "Microwave Circuits", "Optical Sensors"],
      image: "https://source.unsplash.com/400x300/?fiber-optic,microwave,antenna", // Optical/Microwave
      gradient: "from-indigo-500 to-blue-500",
    },
  ],


   researchStats : [
    { value: "60+", label: "Research Projects", bg: "bg-pink-500/20" },
    { value: "₹8Cr+", label: "Research Funding", bg: "bg-yellow-500/20" },
    { value: "200+", label: "Publications", bg: "bg-green-500/20" },
    { value: "12+", label: "Patents Filed", bg: "bg-purple-500/20" },
  ],

   topAchievers : [
    {
      name: "Rohan Agarwal",
      year: "B.Tech ECE 2024",
      achievement:
        "Gold Medalist in National Robotics Challenge, Internship at Qualcomm",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["Robotics", "Embedded C", "PCB Design", "IoT"],
    },
    {
      name: "Isha Mehta",
      year: "M.Tech ECE 2023",
      achievement:
        "Published 4 papers on VLSI, Best Paper Award at IEEE Conference",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["VLSI Design", "FPGA", "SystemVerilog", "Signal Processing"],
    },
    {
      name: "Ankit Sharma",
      year: "B.Tech ECE 2024",
      achievement:
        "Winner of National IoT Hackathon, Founder of IoT Start-Up",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["IoT", "Arduino", "Python", "Wireless Networks"],
    },
  ],

   achievements : [
    {
      title: "IEEE Student Chapter",
      description: "Active IEEE chapter with 250+ ECE students",
      icon: Award,
      color: "text-pink-600",
    },
    {
      title: "VLSI Research",
      description: "150+ papers published in reputed ECE journals",
      icon: BookOpen,
      color: "text-yellow-600",
    },
    {
      title: "Industry Tie-Ups",
      description: "MoUs with ISRO, Intel, and DRDO for research & training",
      icon: Lightbulb,
      color: "text-green-600",
    },
    {
      title: "Placement Success",
      description: "95% placements in core ECE companies & PSUs",
      icon: GraduationCap,
      color: "text-purple-600",
    },
  ]
};