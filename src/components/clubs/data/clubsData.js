import tcclogo from "../../../assets/tcclogo.png";
import musiclogo from "../../../assets/musiclogo.png";
export const clubsData = [
  {
    id: 1,
    name: "Tech Innovators Club",
    tagline: "Building Tomorrow's Technology Today",
    category: "Technical",
    logo: tcclogo,
    banner: "https://www.gbu.ac.in/Content/img/club/techno.jpg",
    memberCount: 156,
    description:
      "A student-driven community focused on coding, product building, and real-world technology projects.",
    objectives: [
      "Encourage practical problem solving with technology",
      "Run peer learning sessions and technical workshops",
      "Create opportunities for hackathons and innovation",
    ],
    history:
      "Started as a small coding group and evolved into one of the most active technical student communities on campus.",
    achievements: [
      "Winner of Inter-University Hackathon 2023",
      "Hosted 15+ technical workshops",
      "Mentored student project teams",
    ],
    policies: {
      codeOfConduct: [
        "Respect all members and contributors",
        "Promote collaborative and ethical work",
      ],
      eligibility: [
        "Open to students from all schools",
        "Interest in technology and teamwork",
      ],
      responsibilities: [
        "President: Strategic leadership",
        "Secretary: Communication and operations",
      ],
      meetingFrequency: "Weekly meetings every Friday at 5:00 PM",
    },
    team: {
      facultyCoordinator: {
        id: "fc1",
        name: "Dr. Priya Sharma",
        role: "Faculty Coordinator",
        photo: "",
        department: "Computer Science & Engineering",
      },
      president: {
        id: "p1",
        name: "Rahul Kumar",
        role: "President",
        photo: "",
        department: "CSE, 4th Year",
      },
      vicePresident: {
        id: "vp1",
        name: "Ananya Singh",
        role: "Vice President",
        photo: "",
        department: "IT, 3rd Year",
      },
      secretary: {
        id: "s1",
        name: "Arjun Patel",
        role: "Secretary",
        photo: "",
        department: "CSE, 3rd Year",
      },
      treasurer: {
        id: "t1",
        name: "Sneha Gupta",
        role: "Treasurer",
        photo: "",
        department: "IT, 2nd Year",
      },
      members: [
        {
          id: "m1",
          name: "Vikash Yadav",
          role: "Technical Lead",
          photo: "",
          department: "CSE, 4th Year",
        },
      ],
    },
    events: [
      {
        id: "e1",
        title: "AI/ML Workshop",
        date: "2026-01-15",
        description: "Introductory workshop on practical AI/ML foundations.",
        image: "",
        type: "workshop",
        registrationLink: "#",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/techinnovators_gbu",
      linkedin: "https://linkedin.com/company/techinnovators-gbu",
      youtube: "https://youtube.com/techinnovatorsgbu",
    },
    reports: [
      {
        id: "r1",
        title: "Annual Report 2025-26",
        year: "2025-26",
        downloadUrl: "#",
        summary: "Summary of club activities, workshops, and outcomes.",
      },
    ],
    joinFormUrl: "https://forms.google.com/techinnovators",
  },
  {
    id: 2,
    name: "Cultural Society",
    tagline: "Celebrating Art, Music, and Heritage",
    category: "Cultural",
    logo: musiclogo,
    banner: "https://www.gbu.ac.in/Content/img/indexpageimg.jpg",
    memberCount: 203,
    description:
      "A creative platform for students to collaborate across music, dance, theatre, and cultural programs.",
    objectives: [
      "Promote cultural awareness on campus",
      "Provide a stage for student artists",
      "Organize annual cultural events",
    ],
    history:
      "Formed to nurture artistic talent and preserve cultural expression through student-led events.",
    achievements: [
      "Hosted annual university cultural festival",
      "Won Best Cultural Club recognition",
    ],
    policies: {
      codeOfConduct: [
        "Respect artistic diversity",
        "Be punctual and collaborative",
      ],
      eligibility: ["Open to all students", "Passion for arts and culture"],
      responsibilities: [
        "President: Event leadership",
        "Treasurer: Budget coordination",
      ],
      meetingFrequency: "Bi-weekly meetings every Tuesday at 4:00 PM",
    },
    team: {
      facultyCoordinator: {
        id: "fc2",
        name: "Prof. Kavita Mehta",
        role: "Faculty Coordinator",
        photo: "",
        department: "Fine Arts & Literature",
      },
      president: {
        id: "p2",
        name: "Aditya Raj",
        role: "President",
        photo: "",
        department: "English, 4th Year",
      },
      vicePresident: {
        id: "vp2",
        name: "Meera Kapoor",
        role: "Vice President",
        photo: "",
        department: "Music, 3rd Year",
      },
      secretary: {
        id: "s2",
        name: "Rohan Verma",
        role: "Secretary",
        photo: "",
        department: "Drama, 2nd Year",
      },
      treasurer: {
        id: "t2",
        name: "Ishita Sharma",
        role: "Treasurer",
        photo: "",
        department: "Fine Arts, 3rd Year",
      },
      members: [
        {
          id: "m2",
          name: "Karan Singh",
          role: "Music Director",
          photo: "",
          department: "Music, 4th Year",
        },
      ],
    },
    events: [
      {
        id: "e2",
        title: "Spring Cultural Festival",
        date: "2026-03-15",
        description:
          "A cultural showcase featuring performances and exhibitions.",
        image: "",
        type: "cultural",
        registrationLink: "#",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/cultural_society_gbu",
      youtube: "https://youtube.com/culturalsocietygbu",
    },
    reports: [
      {
        id: "r2",
        title: "Cultural Activities Report 2025-26",
        year: "2025-26",
        downloadUrl: "#",
        summary: "Annual summary of cultural programs and participation.",
      },
    ],
    joinFormUrl: "https://forms.google.com/culturalsociety",
  },
];
