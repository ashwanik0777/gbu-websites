import React, { useEffect, useState } from "react";
import { Code, Lightbulb, Rocket, Target, Trophy } from "lucide-react";
import Landing from "../../components/departments/Landing";
import AboutSection from "../../components/departments/AboutIct";
import SchoolStats from "../../components/departments/SchoolStats";
import LeadershipCard from "../../components/departments/Dean";
import DepartmentsSection from "../../components/departments/Deptcard";
import ProgramsShowcase from "../../components/departments/Program";
import FacultyCarousel from "../../components/departments/faculty_rotating.jsx";
import NoticeEvents from "../../components/departments/Notice.jsx";
import PlacementsSection from "../../components/departments/Placement.jsx";
import RecentPlacements from "../../components/departments/Recent_Placement.jsx";
import RecruitersShowcase from "../../components/departments/Recuritor_showcase";
import ClubsAchievements from "../../components/departments/Clubs_activevment.jsx";
import StudentAchievements from "../../components/departments/Student_achievements.jsx";
import StudentStartup from "../../components/departments/Startup.jsx";



const componentsMap = {
  Landing,
  AboutSection,
  SchoolStats,
  LeadershipCard,
  DepartmentsSection,
  ProgramsShowcase,
  FacultyCarousel,
  NoticeEvents,
  PlacementsSection,
  RecentPlacements,
  RecruitersShowcase,
  ClubsAchievements,
  StudentAchievements,
  StudentStartup,
};

export default function DepartmentDynamicPage() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {

     const response = [
             { componentName: "Landing", enabled: true, position: 1 },
     
             {
               componentName: "AboutSection",
               enabled: true,
               position: 2,
               props: {
                 data: {
                   heading: "About Us",
                   subtitle: "School of Information and Communication Technology",
                   floatingIcons: [
                     { icon: <Code size={40} />, color: "text-blue-400", style: "top-20 left-10" },
                     { icon: <Lightbulb size={35} />, color: "text-purple-400", style: "top-32 right-20" },
                     { icon: <Rocket size={45} />, color: "text-indigo-400", style: "bottom-20 left-1/4" },
                   ],
                   cards: [
                     {
                       title: "Our Mission",
                       icon: <Target size={28} />,
                       bgGradient: "from-blue-500 to-purple-600",
                       content: (
                         <>
                           The{" "}
                           <span className="font-semibold text-blue-600">
                             School of Information and Communication Technology (SOICT/USICT)
                           </span>{" "}
                           is a premier institution committed to nurturing future-ready technocrats,
                           innovators, and entrepreneurs in the dynamic field of{" "}
                           <span className="font-semibold text-purple-600">
                             ICT (Information and Communication Technology)
                           </span>
                           .
                         </>
                       ),
                       highlight: (
                         <>
                           Guided by our vision of{" "}
                           <span className="font-semibold text-indigo-600">
                             excellence and ethics
                           </span>
                           , we empower students with cutting-edge knowledge, hands-on experience, and a
                           strong value system to thrive in the global digital economy.
                         </>
                       ),
                     },
                     {
                       title: "Our Commitment",
                       icon: <Trophy size={28} />,
                       bgGradient: "from-purple-500 to-pink-600",
                       content: (
                         <>
                           At SOICT, we don't just teach technology—we inspire{" "}
                           <span className="font-semibold text-purple-600">future pioneers</span>. Through{" "}
                           <span className="font-semibold text-indigo-600">
                             interdisciplinary research, hackathons, and mentorship
                           </span>
                           , we foster a culture of curiosity and excellence.
                         </>
                       ),
                       bullets: [
                         <span className="font-semibold text-gray-800">
                           Skilled, motivated, and ethically grounded professionals
                         </span>,
                         "Ready to tackle global challenges",
                         "Transform the ICT landscape",
                       ],
                     },
                   ],
                 },
               },
             },
     
              {
          componentName: "SchoolStats",
          enabled: true,
          position: 3,
          props: {
            title: "Our numbers speak for themselves",
            stats: [
              { value: 3, label: "Departments", suffix: "+" },
              { value: 15, label: "Courses", suffix: "+" },
              { value: 1200, label: "Students", suffix: "+" },
              { value: 45, label: "Faculty", suffix: "+" },
              { value: 200, label: "Publications", suffix: "+" },
              { value: 95, label: "Placement Rate", suffix: "%" },
            ],
          },
        },
        {
          componentName: "LeadershipCard",
          enabled: true,
          position: 4,
          props: {
            name: "Dr. Arpit Bhardwaj",
            title: "Dean (I/C) – School of ICT, GBU",
            image: "https://www.gbu.ac.in/USICT/media/img/arpit%20bhardwaj.jpg",
            description: `University School of Information and Communication Technology came into existence in 2008 with the primary objective of catering to all academic and research requirements in fields of electronics communication and computer science. The first academic session consisting of post-graduate program started in July 2009, and at present, it is successfully running undergraduate, post-graduate, and research programs in all emerging areas related to information and communication technology. The school is committed towards providing highest quality teaching education and producing technocrats who can work on the latest available technologies in the global context. To fulfill this aim and to provide education according to industrial requirement the extra academic activities like lectures from outside expert / workshops / symposiums / conferences are organized on a regular basis. First batch of postgraduate students has success fully passed in 2011, School has wonderful infrastructure having classrooms equipped with state of the art audio visual support and large number of functional laboratories equipped with state of the are instruments / hardware software and highly committed and dedicated faculty. School has already made a roadmap for its development for next 10 years in the form of “Vision 2020” document and is in real spirit marching on this roadmap for fulfilling the defined objectives. School aims to become a hub of higher end research activities and has started successfully its research program and have many research scholars on its roll, carrying research in all prominent areas of electronics / communication / computer engineering.\n\nI am more than confident to tell you that the best, most effective and finest weapon an academic organization can ever have is “knowledge” and it is a common quote in ICT field that “knowledge is power”. The USICT works on the sole objective of acquiring and propagating as much knowledge as possible to the students.`,
          },
        },

        {
          componentName: "DepartmentsSection",
          enabled: true,
          position: 5,
          props: {
            departments: [
              {
                name: "Computer Science & Engineering",
                code: "CSE",
                description:
                  "Pioneering research and education in AI, ML, Cyber Security, Data Science, Software Engineering and Robotics.",
                courses: [
                  "B.Tech CSE",
                  "B.Tech CSE (AI)",
                  "B.Tech CSE (Cyber Security)",
                  "B.Tech CSE (Data Science)",
                  "Integrated B.Tech–M.Tech CSE",
                  "M.Tech CSE (AI & Robotics)",
                  "M.Tech CSE (Data Science)",
                  "M.Tech CSE (Software Engineering)",
                  "M.Tech CSE (for Working Professionals)",
                  "Ph.D. CSE",
                ],
                faculty: 30,
                labs: 12,
                image:
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
                gradient: "from-blue-400 to-blue-600",
                link: "/schools/ict/departments/cse",
              },
              {
                name: "Information Technology",
                code: "IT",
                description:
                  "Focuses on AI, Machine Learning, Data Science, Information Security and practical IT applications.",
                courses: [
                  "B.Tech IT",
                  "B.Tech IT (AI & ML)",
                  "B.Tech IT (Data Science & ML)",
                  "B.C.A.",
                  "M.Tech ICT",
                  "M.Tech IT (Data Science & ML)",
                  "M.C.A. (Data Science)",
                  "M.C.A. (Artificial Intelligence)",
                  "Ph.D. ICT/IT",
                ],
                faculty: 22,
                labs: 10,
                image:
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
                gradient: "from-blue-600 to-blue-800",
                link: "/schools/ict/departments/it",
              },
              {
                name: "Electronics & Communication Engineering",
                code: "ECE",
                description:
                  "Covers VLSI, Embedded Systems, AI/ML in ECE, Wireless Communication, Signal Processing and Railway Signalling.",
                courses: [
                  "B.Tech ECE",
                  "B.Tech ECE (AI & ML)",
                  "B.Tech ECE (VLSI & Embedded)",
                  "Integrated B.Tech–M.Tech ECE",
                  "M.Tech ECE (Wireless Comm & Networks)",
                  "M.Tech ECE (VLSI Design)",
                  "M.Tech ECE (Railway Signalling, Telecom & RAMS)",
                  "Ph.D. ECE",
                ],
                faculty: 25,
                labs: 8,
                image:
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
                gradient: "from-blue-500 to-blue-700",
                link: "/schools/ict/departments/ece",
              },

            ],
          },
        },

        {
          componentName: "ProgramsShowcase",
          enabled: true,
          position: 6,
          props: {
            programs: [
              {
                name: 'B.Tech. Computer Science & Engineering',
                code: 'CSE',
                duration: '4 Years',
                specializations: ['AI & Robotics', 'Data Science', 'Cyber Security', 'Software Engineering'],
                image: 'https://images.unsplash.com/photo-1662638600476-d563fffbb072?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8J0RhdGElMjBTY2llbmNlJyUyQyUyMCdDeWJlciUyMFNlY3VyaXR5JyUyQyUyMCdTb2Z0d2FyZSUyMEVuZ2luZWVyaW5nJ3xlbnwwfHwwfHx8MA%3D%3D',
                description:
                  'UG program in CSE with specializations in AI & Robotics, Data Science, Cyber Security and Software Engineering.',
              },
              {
                name: 'Integrated B.Tech.–M.Tech. (CSE)',
                code: 'CSE–Dual',
                duration: '5 Years',
                specializations: ['AI & Robotics', 'Data Science', 'Software Engineering'],
                image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400',
                description:
                  '5‑year integrated CSE dual‑degree granting B.Tech + M.Tech in AI, Data Science or Software Engineering.',
              },
              {
                name: 'M.Tech. CSE',
                code: 'M.Tech CSE',
                duration: '2 Years',
                specializations: ['AI & Robotics', 'Data Science', 'Software Engineering'],
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&h=400',
                description:
                  'Postgraduate program in CSE offering specializations in AI & Robotics, Data Science, Software Engineering.',
              },
              {
                name: 'Ph.D. CSE',
                code: 'Ph.D CSE',
                duration: 'Varies',
                specializations: ['Computer Science & Engineering Research'],
                image: 'https://plus.unsplash.com/premium_photo-1716396586363-4b942672c2ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENvbXB1dGVyJTIwU2NpZW5jZSUyMCUyNiUyMEVuZ2luZWVyaW5nJTIwUmVzZWFyY2h8ZW58MHx8MHx8fDA%3D',
                description: 'Doctoral research in CSE across AI, ML, Cybersecurity, IoT and related areas.',
              },
              {
                name: 'B.Tech. Information Technology',
                code: 'IT',
                duration: '4 Years',
                specializations: ['AI & ML', 'Data Science & ML'],
                image: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCdBSSUyMCUyNiUyME1MJyUyQyUyMCdEYXRhJTIwU2NpZW5jZSUyMCUyNiUyME1MJydzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJ3xlbnwwfHwwfHx8MA%3D%3D',
                description: 'UG IT program with specializations in AI & ML, Data Science & Machine Learning.',
              },
              {
                name: 'M.Tech. IT / ICT',
                code: 'M.Tech IT',
                duration: '2 Years',
                specializations: ['Data Science & ML'],
                image: 'https://images.unsplash.com/photo-1653564142033-ab3532091515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGF0YSUyMFNjaWVuY2UlMjAlMjYlMjBNTCd8ZW58MHx8MHx8fDA%3D',
                description: 'Postgraduate ICT/IT program focused on Data Science and Machine Learning.',
              },
              {
                name: 'Ph.D. ICT/IT',
                code: 'Ph.D IT',
                duration: 'Varies',
                specializations: ['Information & Communication Technology Research'],
                image: 'https://plus.unsplash.com/premium_photo-1742926583033-56159b3cbf1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW5mb3JtYXRpb24lMjAlMjYlMjBDb21tdW5pY2F0aW9uJTIwVGVjaG5vbG9neSUyMFJlc2VhcmNoJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww',
                description: 'Doctoral research in Information & Communication Technology.',
              },
              {
                name: 'B.Tech. Electronics & Communication Engineering',
                code: 'ECE',
                duration: '4 Years',
                specializations: ['AI & ML', 'VLSI & Embedded Systems', 'Wireless Comm & Networks'],
                image: 'https://images.unsplash.com/photo-1744640326166-433469d102f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fCdBSSUyMCUyNiUyMFJvYm90aWNzJyUyQyUyMCdEYXRhJTIwU2NpZW5jZSclMkMlMjAnQ3liZXIlMjBTZWN1cml0eSclMkMlMjAnU29mdHdhcmUlMjBFbmdpbmVlcmluZyd8ZW58MHx8MHx8fDA%3D',
                description:
                  'UG ECE program with focus areas in AI/ML, VLSI & Embedded, Wireless Communication & Networks.',
              },
              {
                name: 'Integrated B.Tech.–M.Tech. (ECE)',
                code: 'ECE–Dual',
                duration: '5 Years',
                specializations: ['Wireless Networks', 'VLSI & Embedded Systems'],
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&h=400',
                description:
                  '5‑year integrated ECE dual‑degree programs in Wireless Communication, VLSI & Embedded Systems.',
              },
              {
                name: 'M.Tech. ECE',
                code: 'M.Tech ECE',
                duration: '2 Years',
                specializations: ['Wireless Comm & Networks', 'VLSI Design', 'Railway Signalling & RAMS'],
                image: 'https://images.unsplash.com/photo-1664526936810-ec0856d31b92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2lyZWxlc3MlMjBDb21tJTIwJTI2JTIwTmV0d29ya3MnJTJDJTIwJ1ZMU0klMjBEZXNpZ24nJTIwbGFifGVufDB8fDB8fHww',
                description:
                  'Postgraduate ECE specializing in Wireless Networks, VLSI Design, Railway Signalling & RAMS.',
              },
              {
                name: 'Ph.D. ECE',
                code: 'Ph.D ECE',
                duration: 'Varies',
                specializations: ['Electronics & Communication Engineering Research'],
                image: 'https://plus.unsplash.com/premium_photo-1726880460027-fab1b079b37a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8J0VsZWN0cm9uaWNzJTIwJTI2JTIwQ29tbXVuaWNhdGlvbiUyMEVuZ2luZWVyaW5nJTIwUmVzZWFyY2gnfGVufDB8fDB8fHww',
                description: 'Doctoral research in ECE areas including signal processing, VLSI, comm networks.',
              },
            ]
          },
        },
            {
          componentName: "FacultyCarousel",
          enabled: true,
          position: 7,
          props: {
            title: "Faculty of ICT",
            subTitle: "",
            facultyList: [
              {
                name: "Dr. Arpit Bhardwaj",
                title: "Dean, CSE",
                image:
                  "https://faculty.gbu.ac.in/uploads/photos/6735c61d170ee_WhatsApp%20Image%202024-11-14%20at%203.12.33%20PM.jpeg",
              },
              {
                name: "Dr. Arun Solanki",
                title: "HOD – CSE",
                image:
                  "https://faculty.gbu.ac.in/uploads/photos/67c6a617c08be_cropped-arun.jpg",
              },
              {
                name: "Dr. Aarti Gautam Dinker",
                title: "Assistant Professor – CSE",
                image: " https://faculty.gbu.ac.in/uploads/photos/6605300c5c849_aarti.jpg",
              },
              {
                name: "Dr. Anika",
                title: "Assistant Professor – CSE",
                image: "https://faculty.gbu.ac.in/uploads/photos/672ee826e3b19_Anika.jpg",
              },
              {
                name: "Dr. Anurag Singh Baghel",
                title: "Assistant Professor – CSE",
                image: "https://faculty.gbu.ac.in/uploads/photos/66052f4f5757a_asb.jpg",
              },
              {
                name: "Dr. Gaurav Kumar",
                title: "Assistant Professor – CSE",
                image:
                  "https://faculty.gbu.ac.in/uploads/photos/6721e9346dac1_Photo-removebg-preview.png",
              },
              {
                name: "Dr. Nitesh Singh Bhati",
                title: "Assistant Professor – CSE",
                image:
                  "https://faculty.gbu.ac.in/uploads/photos/671b256dd035a_WhatsApp%20Image%202024-10-25%20at%2010.05.19%20AM.jpeg",
              },
              {
                name: "Dr. Pradeep Tomar",
                title: "Assistant Professor – CSE",
                image:
                  "https://faculty.gbu.ac.in/uploads/photos/6603cfe3be87c_pradeep-tomar.jpg",
              },
              {
                name: "Dr. Rajendra Bahadur Singh",
                title: "Assistant Professor – CSE",
                image:
                  "https://faculty.gbu.ac.in/uploads/photos/6613ce13d7538_RBS_PIC.jpeg",
              },
              {
                name: "Dr. Raju Pal",
                title: "Assistant Professor – CSE",
                image:
                  "https://faculty.gbu.ac.in/uploads/photos/660a761667ced_CS%20Raju%20Pal.jpg",
              },
              {
                name: "Dr. Rakesh Kumar",
                title: "Assistant Professor – CSE",
                image:
                  "https://faculty.gbu.ac.in/uploads/photos/67c6cc28b50d0_SML_8821.JPG",
              },
              {
                name: "Dr. Shiraz Khurana",
                title: "Assistant Professor – CSE",
                image:
                  "https://faculty.gbu.ac.in/uploads/photos/672b4e0fd48e8_image%20(1).png",
              },
              {
                name: "Dr. Vimlesh Kumar Ray",
                title: "Assistant Professor – CSE",
                image: "https://faculty.gbu.ac.in/uploads/photos/66052fd60f82d_vimlesh.jpg",
              },
              {
                name: "Dr. Kartikeya Tiwari",
                title: "Assistant Professor – CSE",
                image:
                  "https://faculty.gbu.ac.in/uploads/photos/66475c0d84def_IMG-20240517-WA0009%20(1).jpg",
              },
              {
                name: "Dr. Maneet Singh",
                title: "Assistant Professor – IT",
                image: "https://faculty.gbu.ac.in/uploads/photos/67c1a9f10e9e1_profile_pic_ManeetSingh.jpg",
              },

            ],
          },
        },
        {
          componentName: "NoticeEvents",
          enabled: true,
          position: 8,
          props: {
            notices: [
              {
                title: "Back Paper Examination Date Sheet – Even Semester 2024–25",
                date: "2025-05-16",
                type: "Important",
              },
              {
                title: "Notice for Aadhaar e‑kyc through UPDESCO",
                date: "2025-06-03",
                type: "Administrative",
              },
              {
                title: "Tablet Distribution Program Scheduled",
                date: "2025-05-24",
                type: "General",
              },
              {
                title: "Office Order for Hostel & Mess Exemption",
                date: "2025-05-13",
                type: "Administrative",
              },
              {
                title: "Office Order for Hostel & Mess2 Exemption",
                date: "2025-05-13",
                type: "Administrative",
              },
              {
                title: "PhD Thesis Submission Guidelines Update",
                date: "2025-05-12",
                type: "Academic",
              },
              {
                title: "Summer Internship Opportunities 2025",
                date: "2025-05-10",
                type: "Placement",
              },
              {
                title: "Library Working Hours Extended",
                date: "2025-05-09",
                type: "General",
              },
              {
                title: "Research Grant Applications Open",
                date: "2025-05-08",
                type: "Research",
              },
              {
                title: "Campus Recruitment Drive - TCS",
                date: "2025-05-07",
                type: "Placement",
              },
              {
                title: "Student Council Elections Schedule",
                date: "2025-05-06",
                type: "Important",
              },
              {
                title: "Student Council Elections Schedule",
                date: "2025-05-06",
                type: "Important",
              },

            ],
            events: [
              {
                title: "Online National Article Writing Competition (GST)",
                date: "2025-06-30",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2NnCSPRdgMAEkEafMhZojs0fdgEv6hFY0A&s",
                description: "Organized by School of Law, extended submission date.",
              },
              {
                title: "Six‑Day Residential Vipassana Program",
                date: "2025-06-09",
                image: "https://data.gbu.ac.in/Events/1714148988_FIVE%20DAY%20VIPASSANA%20COURSE%20FEB2024_page-0001.jpg",
                description: "Well‑being retreat by School of Buddhist Studies.",
              },
              {
                title: "World Environment Day Report",
                date: "2025-06-05",
                image: "https://images.timesnownews.com/thumb/msid-151788925,thumbsize-1151391,width-1280,height-720,resizemode-75/151788925.jpg",
                description: "Activities report by Department of Environmental Science.",
              },
              {
                title: "SOBSC Vesak Day Celebrations",
                date: "2025-05-03",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwXCDOopXvx7WxXSEcJJJ86SzCi_HjeITTQ&s",
                description: "Celebration at School of Buddhist Studies & Civilization.",
              },
              {
                title: "ICSSR‑Sponsored AI Research Methodology Course",
                date: "2024-12-03",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQud5sjoe92WQkeO2ddUOccbSRysoFo6K5GvgRZzSeMy1a2DsromFso3Hp7ctE8W-e94&usqp=CAU",
                description: "10‑day course on integrating AI in research, sponsored by ICSSR.",
              },
              {
                title: "Digital India Talk Show",
                date: "2024-11-20",
                image: "https://negd.gov.in/wp-content/uploads/2025/01/gatishakti.jpeg",
                description: "Awareness session on e‑governance chaired by VC Prof. R.K. Sinha.",
              },
            ],
            initialNoticeCount: 5,
            sectionTitle: "Notices & Events",
            sectionSubtitle: "Stay updated with all updates"
          },
        },
        {
          componentName: "ClubsAchievements",
          enabled: true,
          position: 9,
          props: {
            clubs: [
              {
                name: "Techno Cultural Club",
                description: "Runs coding contests, hackathons, robotics, quizzes, poster-making & cultural events.",
                members: 150,
                category: "Technical & Cultural",
                facultyAdvisor: "Dr. Vimlesh Kumar Ray",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dlCh4LMQ-987UX_Ssas6havujpWSVCmIGw&s",
                socialLinks: {
                  instagram: "https://instagram.com/technoculture_gbu",
                  linkedin: "https://linkedin.com/company/techno-club-gbu",
                  email: "techno.ict.gbu@gmail.com"
                }
              },
              {
                name: "GDSC – Google Developer Student Club",
                description: "Peer-run community for workshops in Web Dev, Cloud, ML under GDSC umbrella.",
                members: 500,
                category: "Technical",
                facultyAdvisor: "Dr. Rajesh Mishra",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxT9G3gSxNZESl4NJH1NzcPq0kBF1XNyHcA&s",
                socialLinks: {
                  instagram: "https://instagram.com/gdsc_gbu",
                  linkedin: "https://linkedin.com/company/gdsc-gautam-buddha-university",
                  email: "gdsc@gbu.ac.in"
                }
              },
              {
                name: "IEEE Student Branch",
                description: "Professional branch organizing tech talks, paper contests & networking.",
                members: 60,
                category: "Professional",
                facultyAdvisor: "Dr. Vikram Singh",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxT9G3gSxNZESl4NJH1NzcPq0kBF1XNyHcA&s",
                socialLinks: {
                  linkedin: "https://linkedin.com/company/ieeestudentbranch",
                  twitter: "https://twitter.com/ieeestudents",
                  email: "ieee@gbu.ac.in"
                }
              },
              {
                name: "Programming / CodeChef Chapter",
                description: "Competitive coding community hosting Code Matrix, Learn to Code & hackathons.",
                members: 200,
                category: "Technical",
                facultyAdvisor: "Dr. Anurag Singh Baghel",
                image: "https://repository-images.githubusercontent.com/389157855/a2869f47-24d9-4e16-a6cc-b944855dc5f7",
                socialLinks: {
                  instagram: "https://instagram.com/codechef_gbu",
                  email: "codechef@gbu.ac.in"
                }
              },
              {
                name: "Robotics Club",
                description: "Builds autonomous systems & competes in national robotics events.",
                members: 45,
                category: "Technical",
                facultyAdvisor: "Dr. Vimlesh Kumar Ray",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dlCh4LMQ-987UX_Ssas6havujpWSVCmIGw&s",
                socialLinks: {
                  twitter: "https://twitter.com/robiotics_gbu",
                  email: "robotics@gbu.ac.in"
                }
              },
              {
                name: "Dhrishtikon – Debate Society",
                description: "Promotes free discussion, public speaking & debate competitions.",
                members: 80,
                category: "Cultural",
                facultyAdvisor: "Dr. Manjari Suman",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiaFXt6eK5fEvem3rwrqMkO-O3ERZm0rV9g&s",
                socialLinks: {
                  linkedin: "https://linkedin.com/company/drishtikon-gbu",
                  email: "drishtikon@gbu.ac.in"
                }
              },
              {
                name: "Cultural Council",
                description: "Oversees Drama, Dance, Music, Painting, Photography, Literature, Adventure clubs.",
                members: 300,
                category: "Cultural",
                facultyAdvisor: "Dr. Anand Pratap Singh",
                image: "https://www.palmbeachculture.com/wp/wp-content/uploads/2025/06/Art-Calls-32.jpg",
                socialLinks: {
                  facebook: "https://facebook.com/abhivyanjana",
                  instagram: "https://instagram.com/abhivyanjana_gbu",
                  email: "cultural@gbu.ac.in"
                }
              },
              {
                name: "Adventure Club",
                description: "Organizes trekking, camping and outdoor adventure activities.",
                members: 60,
                category: "Adventure",
                facultyAdvisor: "Dr. Sunita Gupta",
                image: "https://i.pinimg.com/736x/2a/9b/fd/2a9bfd335b50e86e48ad59b4b28aa5b5.jpg",
                socialLinks: {
                  email: "adventure@gbu.ac.in"
                }
              },
              {
                name: "Photography Club",
                description: "Encourages campus photography exhibitions & workshops.",
                members: 50,
                category: "Creative",
                facultyAdvisor: "Dr. Vidushi Sharma",
                image: "https://image-static.collegedunia.com/public/reviewPhotos/899143/unnamed.jpg",
                socialLinks: {
                  instagram: "https://instagram.com/photoclub_gbu",
                  email: "photography@gbu.ac.in"
                }
              },
              {
                name: "Art & Painting Club",
                description: "Hosts workshops & exhibitions to nurture visual arts on campus.",
                members: 40,
                category: "Creative",
                facultyAdvisor: "Dr. Anand Pratap Singh",
                image: "https://images.squarespace-cdn.com/content/v1/604e4790cbfeea1a501ac957/1664284358990-4TBHSR3TPHO2A3M8O79V/teen+photo.jpeg",
                socialLinks: {
                  email: "art@gbu.ac.in"
                }
              }
            ],
          }
        },

             {
               componentName: "PlacementsSection",
               enabled: true,
               position: 10,
               props: {
                 data: {
                   title: "Placements",
                   subTitle: "Connecting talent with opportunities",
                   heroImage:
                     "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=300&fit=crop",
                   placementStats: [
                     {
                       label: "Placement Rate",
                       value: "85‑90%",
                       color: "bg-green-500",
                     },
                     {
                       label: "Highest Package",
                       value: "₹51 LPA",
                       color: "bg-blue-500",
                     },
                     {
                       label: "Average Package",
                       value: "₹6 LPA",
                       color: "bg-purple-500",
                     },
                     {
                       label: "Companies Visited",
                       value: "150+",
                       color: "bg-yellow-500",
                     },
                   ],
                 },
               },
             },
             {
               componentName: "RecentPlacements",
               enabled: true,
               position: 11,
               props: {
                 data: {
                   heading: "Recent Placements",
                   subheading: "Our students securing positions at top companies",
                   sectionTitle: "Success Stories",
                   students: [
                      {
           name: "Rahul Sharma",
           company: "TCS",
           package: "₹6.5 LPA",
           department: "B.Tech CSE",
           photo: "https://images.unsplash.com/photo-1644904105846-095e45fca990?w=600&auto=format&fit=crop",
         },
         {
           name: "Priya Verma",
           company: "BlackRock",
           package: "₹16 LPA",
           department: "B.Tech IT",
           photo: "https://media.istockphoto.com/id/485372249/photo/beautiful-university-student-smiling-outside-the-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=LdrapmwsCdcEwRi7G_S5CMaeFQn4L27Yypsi476OfSQ=",
         },
         {
           name: "Amit Kumar",
           company: "Honda",
           package: "₹8.2 LPA",
           department: "B.Tech ME",
           photo: "https://images.unsplash.com/photo-1646415753793-dcfda1dfeee3?w=600&auto=format&fit=crop",
         },
         {
           name: "Neha Singh",
           company: "HDFC Bank",
           package: "₹7.5 LPA",
           department: "MBA Finance",
           photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80?w=200&h=200&fit=crop&crop=face",
         },
         {
           name: "Aditya Patel",
           company: "Paytm",
           package: "₹12 LPA",
           department: "B.Tech ECE",
           photo: "https://images.unsplash.com/photo-1644904105846-095e45fca990?w=600&auto=format&fit=crop",
         },
         {
           name: "Riya Gupta",
           company: "HCL Technologies",
           package: "₹7.8 LPA",
           department: "MCA",
           photo: "https://media.istockphoto.com/id/1362063465/photo/female-teen-student-with-a-backpack-and-books-smiling-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=wozjDZd9SxxOG6xGIu5Z1ncjPgeZmU_yvnVQMzqaEe8=",
         },
         {
           name: "Mohammed Siddiqui",
           company: "Wipro",
           package: "₹6.8 LPA",
           department: "B.Tech CSE",
           photo: "https://media.istockphoto.com/id/1995982413/photo/happy-black-male-student-with-glasses-and-backpack-on-yellow-background.jpg?s=612x612&w=0&k=20&c=zw5dSM_D91excDPc8QjBOcUE00U0yDpGFRpbNl-9VWM=",
         },
         {
           name: "Ananya Reddy",
           company: "OYO",
           package: "₹9.5 LPA",
           department: "MBA Marketing",
           photo: "https://media.istockphoto.com/id/1272815911/photo/young-indian-female-university-student-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=gIZZVJ3_oo9pxN0TtTaBCk7G8xBHO6vZWy9cJVt8jWA=",
         }
                   ],
                 },
               },
             },
             {
               componentName: "RecruitersShowcase",
               enabled: true,
               position: 12,
               props: {
                 recruitersData: [
                   {
                     name: "Samsung",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/samsung.png",
                   },
                   {
                     name: "TCS",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/tcs.png",
                   },
                   {
                     name: "Adobe",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/adobe.png",
                   },
                   {
                     name: "Tech Mahindra",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/tech.png",
                   },
                   { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
                   {
                     name: "Metro",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/metro.png",
                   },
                   {
                     name: "HCL",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/hcl.png",
                   },
                   {
                     name: "Byjus",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/byjus.png",
                   },
                   {
                     name: "Nagrro",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/nagrro.png",
                   },
                   {
                     name: "Apple",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/apple.png",
                   },
                   { name: "Byju's", logo: "https://logo.clearbit.com/byjus.com" },
                   {
                     name: "White Hat Junior",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/white.png",
                   },
                   {
                     name: "Hexaware",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/hexaware.png",
                   },
                   {
                     name: "Blinkit",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/blink-it-logo.png",
                   },
                   {
                     name: "Toppr",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/Toppr_logo.png",
                   },
                   {
                     name: "Wipro",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/wipro.png",
                   },
                   {
                     name: "Scaler",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/scaler.png",
                   },
                   {
                     name: "Chegg",
                     logo: "https://www.gbu.ac.in/USICT/media/img/recute/Chegg-Logo.png",
                   },
                 ],
               },
             },
             {
               componentName: "StudentStartup",
               enabled: true,
               position: 13,
               props: {
                 startupData: {
                   startups: [
                     {
                       name: "KOYAL FM",
                       founder: "GBU Incubation Team",
                       description:
                         "Campus-based community radio initiative by students",
                       funding: "University Supported",
                       status: "Incubated",
                       image:
                         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
                       year: "2020",
                     },
                   ],
                   stats: {
                     totalFunding: "₹19.3L+",
                     totalDepartments: 4,
                   },
                 },
               },
             },
             {
               componentName: "StudentAchievements",
               enabled: true,
               position: 14,
               props: {
                 achievements: [
                   {
                     title: "Smart India Hackathon 2024 (USICT Internal Round)",
                     achievement: "224 Participants",
                     year: "2024",
                     student: "USICT Students",
                     department: "CSE/IT/ECE",
                     image:
                       "https://i.ytimg.com/vi/znMbKz6ZPno/maxresdefault.jpg?w=400&h=250&fit=crop",
                     description:
                       "GBU hosted the internal SIH 2024 with 224 participants from USICT solving real-world challenges.",
                   },
                   {
                     title: "Shell Eco-Marathon, Manila",
                     achievement: "India Representation",
                     year: "2018",
                     student: "Sachin Mishra & Team (Mechanical)",
                     department: "Mechanical",
                     image:
                       "https://www.shellecomarathon.com/_jcr_content/root/main/section/simple_1063219968/promo_copy_copy.shellimg.jpeg/1706575524878/shell-eco-marathon-banner-home.jpeg?imwidth=301&impolicy=amidala-image&imdensity=1.25?w=400&h=250&fit=crop",
                     description:
                       "GBU's Mechanical team designed a hydrogen-powered Eco-Kart and represented India.",
                   },
                   {
                     title: "Elite Women's National Boxing Championship 2023",
                     achievement: "Hosted Event",
                     year: "2023",
                     student: "58 States & Club Athletes",
                     department: "Sports",
                     image:
                       "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w2440/f_auto/primary/cmgu8jns1geqgoyzmvll?w=400&h=250&fit=crop",
                     description:
                       "GBU hosted the 7th Elite Women's National Boxing Championship in Dec 2023.",
                   },
                   {
                     title: "AI Centre of Excellence Establishment",
                     achievement: "₹50 Cr UP Govt Funding",
                     year: "2024",
                     student: "USICT Researchers",
                     department: "CSE/IT",
                     image:
                       "https://pg-p.ctme.caltech.edu/wp-content/uploads/sites/4/2023/03/future_of_ai.jpg?w=400&h=250&fit=crop",
                     description:
                       "UP Govt & industry partners funded AI CoE at GBU to boost advanced tech research.",
                   },
                 ],
               },
             },
           ];


      const enabledSorted = response
        .filter((sec) => sec.enabled)
        .sort((a, b) => a.position - b.position);
      setSections(enabledSorted);
    };

    fetchSections();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {sections.map((section, idx) => {
        const Component = componentsMap[section.componentName];
        if (!Component) return null;

        return <Component key={idx} {...(section.props || {})} />;

      })}
    </div>
  );

}