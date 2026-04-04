export const SCHOOL_DASHBOARD_STORAGE_KEY = "gbu_school_dashboard_data";

export const DEFAULT_SCHOOL_DASHBOARD_DATA = {
  schoolName: "School of Information and Communication Technology",
  schoolCode: "SOICT",
  deanName: "Prof. (Dr.) Rajeev Malhotra",
  email: "soict.office@gbu.ac.in",
  phone: "+91-120-234-9988",
  websiteUrl: "https://www.gbu.ac.in/USICT/",
  address: "Academic Block A, Gautam Buddha University, Greater Noida",
  bannerImage:
    "https://www.gbu.ac.in/USICT/media/img/slider/1.jpg",
  schoolDescription:
    "Leading innovation in computer science, AI, cybersecurity, and digital transformation with cutting-edge research facilities and strong industry collaboration.",
  highlights: ["AI & ML", "Cybersecurity", "Software Engineering", "Data Science"],
  departments: [
    {
      id: "dept-cse",
      name: "Computer Science & Engineering",
      code: "CSE",
      hod: "Dr. Neha Bansal",
      contactEmail: "cse@gbu.ac.in",
      contactPhone: "+91-120-234-2211",
      about:
        "Department of CSE focuses on algorithms, full stack systems, AI engineering, and modern software architecture.",
      programs: ["B.Tech CSE", "M.Tech CSE", "Ph.D. CSE"],
      labs: ["AI Lab", "Cloud Lab", "Software Engineering Lab"],
      notices: ["Mid-sem exam schedule published", "Project review on Friday"],
      researchAreas: ["Machine Learning", "Computer Vision", "Distributed Systems"],
      facultyPagePath: "/schools/ict/faculty",
      profilePath: "/schools/ict/departments/cse",
    },
    {
      id: "dept-it",
      name: "Information Technology",
      code: "IT",
      hod: "Dr. Aman Tiwari",
      contactEmail: "it@gbu.ac.in",
      contactPhone: "+91-120-234-2212",
      about:
        "Department of IT delivers practical and industry-focused curriculum in enterprise systems, devops, and applied computing.",
      programs: ["B.Tech IT", "M.Tech IT"],
      labs: ["Network Lab", "DevOps Lab"],
      notices: ["Internship orientation this week"],
      researchAreas: ["Cloud Computing", "Network Security"],
      facultyPagePath: "/schools/ict/faculty",
      profilePath: "/schools/ict/departments/it",
    },
    {
      id: "dept-ece",
      name: "Electronics & Communication Engineering",
      code: "ECE",
      hod: "Dr. Pooja Sinha",
      contactEmail: "ece@gbu.ac.in",
      contactPhone: "+91-120-234-2213",
      about:
        "ECE department develops expertise in communication systems, embedded electronics, and VLSI design.",
      programs: ["B.Tech ECE", "M.Tech ECE"],
      labs: ["Embedded Systems Lab", "Communication Lab"],
      notices: ["Lab practical dates released"],
      researchAreas: ["Signal Processing", "VLSI", "Embedded AI"],
      facultyPagePath: "/schools/ict/faculty",
      profilePath: "/schools/ict/departments/ece",
    }
  ],
  pages: [
    { id: "about", name: "About", path: "/schools/ict", status: "published", owner: "School Office" },
    { id: "faculty", name: "Faculty", path: "/schools/ict/faculty", status: "published", owner: "Academic Cell" },
    { id: "placement", name: "Placement", path: "/schools/ict/placement", status: "published", owner: "Placement Cell" },
    { id: "labs", name: "Laboratories", path: "/schools/ict/about/labs", status: "published", owner: "Department Admin" },
    { id: "activities", name: "Activities", path: "/schools/ict/about/activities", status: "published", owner: "Student Affairs" },
    { id: "contact", name: "Contact", path: "/schools/ict/contact", status: "published", owner: "School Office" }
  ],
  announcements: [
    { id: "ann-1", text: "Admissions open for PG programs.", active: true },
    { id: "ann-2", text: "School research colloquium on Monday.", active: true }
  ],
};
