export const DUMMY_FACULTY_ID = "gbu-faculty-demo-1";
export const FACULTY_PROFILE_STORAGE_PREFIX = "gbu_faculty_profile_";

export const DUMMY_FACULTY_MEMBER = {
  id: DUMMY_FACULTY_ID,
  name: "Dr. Ananya Sharma",
  designation: "Associate Professor",
  specialization: "Artificial Intelligence and Data Science",
  department: "Computer Science & Engineering",
  school: "Information & Communication Technology",
  experience_years: 11,
  publications: 32,
  education: "Ph.D. (CSE), M.Tech (CSE)",
  qualification: "PhD",
  email: "ananya.sharma@gbu.ac.in",
  phone: "+91-120-234-5678",
  office: "Room B-214, ICT Block",
  image: "",
  image_url: "https://ui-avatars.com/api/?name=Ananya+Sharma&size=256&background=1d4ed8&color=ffffff",
  faculty_url: "https://www.gbu.ac.in/faculty/ananya-sharma",
  researchAreas: [
    "Machine Learning",
    "Natural Language Processing",
    "Responsible AI"
  ]
};

export const DUMMY_FACULTY_TAB_DATA = {
  qualifications: {
    qualifications: [
      {
        degree: "Ph.D. in Computer Science",
        institution: "Indian Institute of Technology",
        year: "2021",
        location: "Delhi, India",
        specialization: "Machine Learning and Data Mining",
        type: "doctorate"
      },
      {
        degree: "M.Tech in Computer Science & Engineering",
        institution: "Gautam Buddha University",
        year: "2018",
        location: "Greater Noida, India",
        specialization: "Software Engineering",
        type: "masters"
      },
      {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "Gautam Buddha University",
        year: "2016",
        location: "Greater Noida, India",
        specialization: "Computer Science",
        type: "bachelors"
      }
    ],
    experience: [
      {
        position: "Associate Professor",
        department: "School of Information and Communication Technology",
        institution: "Gautam Buddha University",
        duration: "2022 - Present",
        type: "academic",
        responsibilities: [
          "Leading research in Machine Learning and AI",
          "Teaching graduate and undergraduate courses",
          "Supervising PhD and Master's students",
          "Contributing to curriculum development"
        ]
      },
      {
        position: "Assistant Professor",
        department: "Department of Computer Science",
        institution: "Gautam Buddha University",
        duration: "2021 - 2022",
        type: "academic",
        responsibilities: [
          "Conducted research in recommendation systems",
          "Taught courses in data structures and algorithms",
          "Mentored undergraduate students",
          "Published research papers in peer-reviewed journals"
        ]
      }
    ]
  },
  teaching: {
    philosophy:
      "Dr. Ananya Sharma believes in an interactive learning environment where theory is connected with real-world problem solving.",
    courses: [
      {
        code: "CS301",
        name: "Machine Learning Fundamentals",
        semester: "Fall 2024",
        level: "UG",
        batch: "2022-2026",
        credits: 4,
        students: 45,
        description: "Introduction to machine learning algorithms and applications",
        slides: [
          { id: 1, title: "Introduction to ML", filename: "ML_Intro.pdf", uploadDate: "2024-01-15" }
        ]
      },
      {
        code: "CS501",
        name: "Advanced Data Mining",
        semester: "Spring 2024",
        level: "PG",
        batch: "2023-2025",
        credits: 3,
        students: 28,
        description: "Advanced data mining techniques and analytics",
        slides: [
          { id: 2, title: "Data Mining Overview", filename: "DataMining_Overview.pdf", uploadDate: "2024-01-10" }
        ]
      }
    ]
  },
  publications: {
    publications: [
      {
        title: "Deep Learning Approaches for Cybersecurity in IoT Networks",
        authors: "A. Sharma, P. Sharma, R. Singh",
        venue: "IEEE Transactions on Network and Service Management",
        year: 2024,
        type: "journal",
        doi: "10.1109/TNSM.2024.1234567",
        citations: 45,
        quartile: "Q1",
        impactFactor: 4.682
      }
    ],
    patents: [
      {
        title: "AI-Based Intrusion Detection System for IoT Networks",
        applicationNo: "202341012345",
        status: "Filed",
        filedYear: 2024,
        country: "India",
        patentOffice: "Indian Patent Office",
        inventors: ["Dr. Ananya Sharma", "Priya Sharma", "Rajesh Singh"],
        description: "A machine learning framework for real-time IoT threat detection.",
        technicalField: "Cybersecurity, Machine Learning, IoT",
        applicationDate: "15th March 2024"
      }
    ]
  },
  patents: {
    patents: [
      {
        title: "Context-Aware Recommendation Engine for Educational Platforms",
        applicationNo: "202341023456",
        status: "Under Examination",
        filedYear: 2023,
        country: "India",
        patentOffice: "Indian Patent Office",
        inventors: ["Dr. Ananya Sharma", "Neha Gupta"],
        description: "Personalized educational recommendation framework.",
        technicalField: "Machine Learning, Education Technology",
        applicationDate: "8th September 2023"
      }
    ]
  },
  certifications: {
    certifications: [
      {
        title: "Google Cloud Professional Machine Learning Engineer",
        platform: "Google Cloud",
        year: 2024,
        validUntil: "2026",
        credentialId: "GCP-PML-2024-789456",
        skills: ["Machine Learning", "TensorFlow", "Google Cloud Platform"],
        level: "Professional",
        verified: true
      }
    ],
    professionalDevelopment: [
      {
        title: "Faculty Development Program on AI & ML",
        organizer: "AICTE",
        year: 2023,
        duration: "2 weeks",
        type: "FDP"
      }
    ]
  },
  talks: {
    invitedTalks: [
      {
        title: "AI-Driven Cybersecurity: Challenges and Opportunities",
        event: "International Conference on Cybersecurity",
        date: "March 15, 2024",
        venue: "New Delhi",
        host: "IEEE Computer Society",
        role: "Keynote Speaker",
        audience: "500+ Researchers and Industry Professionals",
        type: "keynote",
        hasRecording: true,
        hasSlides: true,
        description: "AI and cybersecurity trends with practical applications."
      }
    ]
  },
  administration: {
    administrativeRoles: [
      {
        role: "Faculty Coordinator - Research & Development",
        department: "School of ICT",
        institution: "Gautam Buddha University",
        duration: "2023 - Present",
        status: "ongoing",
        responsibilities: [
          "Coordinate research activities",
          "Facilitate industry-academia collaborations"
        ]
      }
    ],
    committees: [
      { name: "Board of Studies - Computer Science", role: "Member", period: "2022 - Present" }
    ]
  },
  researchGroup: {
    phdScholars: [
      {
        name: "Priya Sharma",
        program: "PhD Computer Science",
        year: "2023 - Present",
        researchArea: "Machine Learning for Cybersecurity",
        status: "First Year",
        publications: 2,
        email: "priya.sharma@gbu.ac.in",
        thesis: "Deep Learning Approaches for Intrusion Detection in IoT Networks"
      }
    ],
    postdocs: [
      {
        name: "Dr. Suresh Patel",
        position: "Postdoctoral Fellow",
        duration: "2023 - 2025",
        researchArea: "AI Ethics and Fairness",
        previousInstitute: "IIT Delhi",
        publications: 12,
        email: "suresh.patel@gbu.ac.in"
      }
    ],
    researchAssistants: [
      {
        name: "Neha Gupta",
        program: "M.Tech Computer Science",
        year: "2024 - Present",
        project: "Cybersecurity Framework for IoT",
        role: "Research Assistant",
        email: "neha.gupta@gbu.ac.in"
      }
    ]
  },
  researchProjects: {
    projects: [
      {
        title: "AI-Driven Cybersecurity Framework for IoT Networks",
        fundingAgency: "Department of Science & Technology (DST)",
        role: "Principal Investigator",
        duration: "2023 - 2026",
        budget: "₹12,50,000",
        status: "ongoing",
        description: "ML algorithms for real-time IoT threat detection and prevention.",
        collaborators: ["Dr. Rajesh Singh", "Dr. Priya Sharma"],
        deliverables: ["Novel ML algorithms", "Research publications"]
      }
    ]
  },
  socialImpact: {
    socialActivities: [
      {
        title: "Digital Literacy Program for Rural Communities",
        organization: "NSS Unit, Gautam Buddha University",
        duration: "2023 - Present",
        type: "community-outreach",
        beneficiaries: "500+ villagers",
        location: "Villages around Greater Noida",
        description: "Digital literacy initiatives for rural communities.",
        impact: ["Trained 500+ villagers", "Established digital learning centers"],
        images: 3
      }
    ]
  },
  awards: {
    awards: [
      {
        title: "Excellence in Research Award",
        awardingBody: "Gautam Buddha University",
        year: 2024,
        category: "institutional",
        level: "university",
        description: "Recognized for outstanding research contributions.",
        significance: "Top faculty award"
      }
    ],
    achievements: [
      {
        title: "Reviewer for Top-Tier Journals",
        description: "Regular reviewer for IEEE and ACM journals",
        count: "15+ journals"
      }
    ]
  },
  other: {
    message: "No Information Available"
  }
};

export const DUMMY_FACULTY_DETAIL = {
  ...DUMMY_FACULTY_MEMBER,
  tags: ["PhD", "AI", "Research Mentor"],
  cv: "https://www.gbu.ac.in/faculty/ananya-sharma/cv",
  googleScholar: "https://scholar.google.com/",
  orcid: "https://orcid.org/",
  shortBio:
    "Dr. Ananya Sharma is an Associate Professor in the School of ICT with over 11 years of teaching and research experience. Her current work focuses on practical AI systems for education and social impact.",
  fullBio:
    "Dr. Ananya Sharma is an Associate Professor in the School of Information and Communication Technology at GBU. She has published extensively in reputed journals and conferences and has guided multiple postgraduate dissertations. Her research focuses on machine learning, natural language processing, and responsible AI for public systems. She actively collaborates with interdisciplinary teams and contributes to curriculum modernization for AI and data science programs.",
  researchAreas: [
    {
      title: "Machine Learning for Education",
      description:
        "Designing predictive and adaptive models to improve student outcomes and institutional planning."
    },
    {
      title: "Natural Language Processing",
      description:
        "Developing NLP pipelines for multilingual text analysis and knowledge extraction."
    },
    {
      title: "Responsible AI",
      description:
        "Building transparent and fair AI systems with governance-aware evaluation."
    },
    {
      title: "Data-driven Public Services",
      description:
        "Applying analytics for decision support in governance and public service delivery."
    }
  ],
  tabData: DUMMY_FACULTY_TAB_DATA
};
