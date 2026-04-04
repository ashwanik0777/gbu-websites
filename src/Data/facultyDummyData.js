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
  ]
};
