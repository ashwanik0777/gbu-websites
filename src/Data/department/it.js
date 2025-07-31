import {
    Code,
    Cpu,
    Database,
    Users,
    BookOpen,
    Award,
    Lightbulb,
    GraduationCap,
    Server, Smartphone, Shield ,Brain, Cloud
} from "lucide-react";

export const itData = {
    heroProps: {
        title: "Department of Information Technology",
        highlight: "Information Technology",
        subtitle:
            "Empowering the digital era through cutting-edge education and research in Information Technology.",
        primaryButton: { label: "Explore Programs" },
        secondaryButton: { label: "Research Areas" },
        backgroundImage:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
        features: [
  {
    icon: Server,
    bg: "bg-gradient-to-br from-teal-500 to-teal-600",
    title: "System Administration",
    description: "Server management and network infrastructure",
  },
  {
    icon: Smartphone,
    bg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    title: "Mobile Development",
    description: "iOS and Android application development",
  },
  {
    icon: Shield,
    bg: "bg-gradient-to-br from-blue-500 to-blue-600",
    title: "Cybersecurity",
    description: "Information security and risk management",
  },
],

    },

    hodProps: {
        title: "From the Desk of HOD, IT",
        image: "https://www.gbu.ac.in/USICT/media/img/Neeta.jpg",
        name: "Dr. Neeta Singh",
        designation: "Head of Department",
        messageParagraphs: [
            "Greeting from the Department of Information Technology!!",
            "Information technology, one of the fastest-growing technologies, has become a strategic function in every organization and lands its foot in every walk of our life. At the undergraduate level, we offer a four-year B. Tech. IT Programme and BCA. At the postgraduate level, we offer two areas of specialization for a two-year M.C.A: (i) Data Science and (ii) Artificial Intelligence. From the academic session 2022-23, the department is starting M.Tech. IT and M.Tech. Information and Cyberwarfare at the postgraduate level. We also offer Ph.D. programs in both full-time and working professional modes in all areas where our faculty members are currently conducting research.",
            "The department has well-qualified professional faculty members along with the non-teaching staff. Faculty members are not only contributing toward the holistic development of students but also work as resource persons at the national and international levels. The department has had an approved SWAYAM Local Chapter since 2020.",
            "We also encourage students to organize events, participate in various technical and co-curricular events organized by other colleges, and get involved in activities of social relevance. Furthermore, to promote co-curricular activities among students and faculty, the department has organized various events, competitions, and courses sponsored by NITTTR, DRDO, CSIR, etc. Most of our alumni find employment in companies of high repute in India and abroad.",
        ],
        contact: {
            name: "Dr. Neeta Singh",
            designation: "Head of Department - IT",
            email: "neeta@gbu.ac.in",
            phone: "0120-2346080 (Ext.6080)",
        },
    },

    aboutProps: {
        heading: "Department Statistics",
        subheading: "Leading the way in IT education",
        stats: [
            { icon: Users, label: "Students", value: "700+", color: "bg-emerald-500" },
            { icon: BookOpen, label: "Faculty", value: "40+", color: "bg-teal-500" },
            { icon: Award, label: "Research Projects", value: "100+", color: "bg-cyan-500" },
            { icon: Lightbulb, label: "Patents Filed", value: "20+", color: "bg-blue-500" },
        ],
        highlights: [
            {
                title: "Excellence in IT Education",
                description:
                    "Our B.Tech and M.Tech programs blend theory with practical skills to produce industry-ready graduates.",
                dotColor: "#10b981",
            },
            {
                title: "Industry-Oriented Research",
                description:
                    "Active research in data analytics, cloud computing, cybersecurity, and mobile technologies.",
                dotColor: "#14b8a6",
            },
            {
                title: "Strong Industry Ties",
                description:
                    "Partnerships with leading tech companies for internships, live projects, and placements.",
                dotColor: "#06b6d4",
            },
        ],
        vision:
            "To be a leading department in Information Technology education and research recognized globally.",
        missionPoints: [
            "Provide top-notch education in IT and allied areas.",
            "Promote research and innovation to solve real-world problems.",
            "Foster collaborations with industry and academia.",
            "Develop ethical IT professionals for societal development.",
        ],
    },


    programsData: [
        {
            title: "B.Tech Information Technology",
            duration: "4 Years",
            intake: "120 Students",
            description:
                "A comprehensive undergraduate program covering software development, networks, and emerging technologies.",
            image:
                "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JTIyRGF0YSUyMFN0cnVjdHVyZXMlMjAlMjYlMjBBbGdvcml0aG1zJTIyJTJDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIyV2ViJTIwJTI2JTIwTW9iaWxlJTIwRGV2ZWxvcG1lbnQlMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJEYXRhYmFzZSUyME1hbmFnZW1lbnQlMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJDb21wdXRlciUyME5ldHdvcmtzJTIyJTJDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIyQ2xvdWQlMjAlMjYlMjBJb1QlMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJJbmZvcm1hdGlvbiUyMFNlY3VyaXR5JTIyJTJDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIyRGV2T3BzJTIwJTI2JTIwQXV0b21hdGlvbiUyMiUyQyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMkNhcHN0b25lJTIwUHJvamVjdCUyMiUyQ3xlbnwwfHwwfHx8MA%3D%3D",
            gradient: "from-emerald-500 to-emerald-600",
            highlights: [
                "Data Structures & Algorithms",
                "Web & Mobile Development",
                "Database Management",
                "Computer Networks",
                "Cloud & IoT",
                "Information Security",
                "DevOps & Automation",
                "Capstone Project",
            ],
        },
        {
            title: "M.Tech Information Technology",
            duration: "2 Years",
            intake: "50 Students",
            description:
                "Postgraduate program with specializations in Data Analytics, Software Engineering, and IT Management.",
            image:
                "https://plus.unsplash.com/premium_photo-1661454577337-7738fd3dd478?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JTIyQWR2YW5jZWQlMjBTb2Z0d2FyZSUyMEVuZ2luZWVyaW5nJTIyJTJDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIyQmlnJTIwRGF0YSUyMEFuYWx5dGljcyUyMiUyQyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMk1hY2hpbmUlMjBMZWFybmluZyUyMiUyQyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMkVudGVycHJpc2UlMjBJVCUyMFNvbHV0aW9ucyUyMiUyQyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMklUJTIwR292ZXJuYW5jZSUyMCUyNiUyME1hbmFnZW1lbnQlMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJEZXZPcHMlMjBQcmFjdGljZXMlMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJEaXNzZXJ0YXRpb24lMjBQcm9qZWN0JTIyJTJDfGVufDB8fDB8fHww",
            gradient: "from-teal-500 to-teal-600",
            highlights: [
                "Advanced Software Engineering",
                "Big Data Analytics",
                "Machine Learning",
                "Enterprise IT Solutions",
                "IT Governance & Management",
                "DevOps Practices",
                "Dissertation Project",
            ],
        },
        {
            title: "Ph.D. in Information Technology",
            duration: "Minimum 3 Years",
            intake: "As per University Norms",
            description:
                "Doctoral research program focusing on advanced areas like AI, Data Science, Cybersecurity, and Next-Gen Computing.",
            image:
                "https://images.unsplash.com/photo-1612179426608-3330c558cb70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEN1dHRpbmclMjBlZGdlJTIwUmVzZWFyY2glMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJSZXNlYXJjaCUyME1ldGhvZG9sb2d5JTIyJTJDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIyVGhlc2lzJTIwJTI2JTIwUHVibGljYXRpb25zJTIyJTJDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIyU2VtaW5hcnMlMjAlMjYlMjBXb3Jrc2hvcHMlMjIlMkMlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJDb2xsYWJvcmF0aW9uJTIwd2l0aCUyMEluZHVzdHJ5JTIyJTJDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIySW50ZXJkaXNjaXBsaW5hcnklMjBSZXNlYXJjaCUyMiUyQyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMlJlc2VhcmNoJTIwRnVuZGluZyUyMFN1cHBvcnQlMjIlMkN8ZW58MHx8MHx8fDA%3D",
            gradient: "from-cyan-500 to-cyan-600",
            highlights: [
                "Cutting-edge Research",
                "Research Methodology",
                "Thesis & Publications",
                "Seminars & Workshops",
                "Collaboration with Industry",
                "Interdisciplinary Research",
                "Research Funding Support",
            ],
        },
    ],


    facultyMembers: [
        {
            name: "Dr. Neeta Singh",
            position: "Professor & Head",
            specialization: "Computer Networks, Wireless Networks, Mobile Computing, Wireless Technology, MANETs, VANETs, Next Generation Networks",
            email: "neeta@gbu.ac.in",
            achievements: "Ph.D. (Computer Science), M.Tech. ICT, Masters in Computers and Management, BSc.(PCM)",
            image: "https://www.gbu.ac.in/USICT/media/img/Neeta.jpg",
            color: "from-emerald-500 to-teal-500",
        },
        {
            name: "Prof. Sanjay Kumar Sharma",
            position: "Professor",
            specialization: "Information Technology, Artificial Intelligence, Nanotechnology, Research Methodology, Research & Publication Ethics",
            email: "ravikumar@gbu.ac.in",
            achievements: "Ph. D. 1993, Kurukshetra University, Kurukshetra",
            image: "https://faculty.gbu.ac.in/uploads/photos/66052fb965b32_sanjay.sharma.jpg",
            color: "from-teal-500 to-cyan-500",
        },
        {
            name: "Dr. Akash Kumar",
            position: "Associate Professor",
            specialization: "Battery Less Wireless Sensor Network, Internet of Things, Energy Harvesting, UAVs, Machine Learning, BlockChain",
            email: "akash.kumar@gbu.ac.in",
            achievements: "Ph.D. (IIIT-Allahabad), M.Tech. (IIIT-Allahabad), B.Tech. (UCE, RTU, Kota)",
            image: "https://faculty.gbu.ac.in/uploads/photos/6763ee8f77b1f_Akash%20Kumar%20(PWC2016003).jpg",
            color: "from-cyan-500 to-blue-500",
        },
        {
            name: "Dr. Maneet Singh",
            position: "Assistant Professor",
            specialization: "Opinion Mining, Social Network Analysis, Computational Social Science and Machine Learning",
            email: "maneet.singh@gbu.ac.in",
            achievements: "PhD (Indian Institute of Technology Ropar)",
            image: "https://faculty.gbu.ac.in/uploads/photos/67c1a9f10e9e1_profile_pic_ManeetSingh.jpg",
            color: "from-blue-500 to-indigo-500",
        },
    ],

    facultyStats: {
        text: "Our faculty team brings decades of experience in academics and industry.",
        stats: [
            {
                icon: BookOpen,
                value: "200+",
                label: "Research Papers",
                bg: "bg-emerald-50",
                color: "text-emerald-600",
            },
            {
                icon: Award,
                value: "25+",
                label: "Awards",
                bg: "bg-teal-50",
                color: "text-teal-600",
            },
            {
                custom: "PhD",
                value: "100%",
                label: "PhD Faculty",
                bg: "bg-cyan-50",
                color: "bg-cyan-600",
            },
            {
                custom: "Exp",
                value: "12+",
                label: "Avg Experience",
                bg: "bg-blue-50",
                color: "bg-blue-600",
            },
        ],
    },
    researchAreas: [
        {
            icon: Brain,
            title: "Data Science & Analytics",
            description: "Machine learning, big data processing, and business intelligence.",
            projects: ["Predictive Healthcare", "Financial Analytics", "Social Media Mining"],
            image:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
            gradient: "from-emerald-500 to-teal-500",
        },
        {
            icon: Cloud,
            title: "Cloud & Distributed Systems",
            description: "Cloud-native apps, microservices, and serverless architectures.",
            projects: ["Microservices", "Serverless Apps", "Edge Computing"],
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
            gradient: "from-teal-500 to-cyan-500",
        },
        {
            icon: Smartphone,
            title: "Mobile & IoT",
            description: "Cross-platform apps, IoT integration, and mobile security.",
            projects: ["IoT Devices", "Smart Apps", "Secure Mobile Frameworks"],
            image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80",

            gradient: "from-cyan-500 to-blue-500",
        },
        {
            icon: Shield,
            title: "Cybersecurity & Blockchain",
            description: "Network security, cryptography, and blockchain applications.",
            projects: ["Secure Communication", "Blockchain Voting", "IoT Security"],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80",
            gradient: "from-blue-500 to-indigo-500",
        },
    ],

    researchStats: [
        { value: "50+", label: "Research Projects", bg: "bg-emerald-500/20" },
        { value: "₹5Cr+", label: "Research Funding", bg: "bg-teal-500/20" },
        { value: "200+", label: "Publications", bg: "bg-cyan-500/20" },
        { value: "10+", label: "Patents Filed", bg: "bg-blue-500/20" },],

    topAchievers: [
        {
            name: "Arjun Kumar",
            year: "B.Tech IT 2024",
            achievement: "Microsoft Student Partner, Intern at Google",
            image:
                "https://images.unsplash.com/photo-1646415753793-dcfda1dfeee3?auto=format&fit=crop&w=400&q=80",
            skills: ["React", "Node.js", "Cloud", "Machine Learning"],
        },

        {
            name: "Rajeev Verma",
            year: "Ph.D. IT 2025",
            achievement: "Received DST Research Fellowship, AI Researcher",
            image:
                "https://images.unsplash.com/photo-1644904105846-095e45fca990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVuaXZlcnNpdHklMjBzdHVkZW50JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
            skills: ["AI", "Deep Learning", "Python", "NLP"],
        },
        {
            name: "Megha Singh",
            year: "B.Tech IT 2025",
            achievement: "Won Smart India Hackathon, Intern at Infosys",
            image:
                "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            skills: ["Java", "Cloud Computing", "Cybersecurity"],
        },
    ],

    achievements: [
        {
            title: "ACM Student Chapter",
            description: "Largest ACM chapter with 300+ IT students",
            icon: Award,
            color: "text-emerald-600",
        },
        {
            title: "Open Source Projects",
            description: "200+ student-led open-source projects",
            icon: BookOpen,
            color: "text-teal-600",
        },
        {
            title: "Tech Industry Tie-Ups",
            description: "Partnerships with Google, IBM, and TCS",
            icon: Lightbulb,
            color: "text-cyan-600",
        },
        {
            title: "Placement Record",
            description: "98% placements in top IT companies",
            icon: GraduationCap,
            color: "text-blue-600",
        },
    ],
};