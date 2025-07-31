import React from "react";
import Hero from "../../components/departments/coedt/Hero";
import AboutSection from "../../components/departments/coedt/AboutCEDT";
import Mentors from "../../components/departments/coedt/Mentors";
import PartnersCarousel from "../../components/departments/coedt/PartnersCarousel";
import ProjectsSection from "../../components/departments/coedt/ProjectsSection";
import DroneCourseCard from "../../components/departments/coedt/DroneCourseCard";
import FacilitiesSwiper from "../../components/departments/coedt/FacilitiesSwiper";
import RecentTalks from "../../components/departments/coedt/RecentTalks";
import MediaCoverage from "../../components/departments/coedt/MediaCoverage";

import omnipresent from "../../assets/omnipresent.png";

import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";

import droneImage from "../../assets/Drone.png";

import Talks from "../../assets/Talks.png";

import mentor1 from "../../assets/mentor1.png";
import mentor2 from "../../assets/mentor2.png"
import mentor3 from "../../assets/mentor3.png"
import mentor4 from "../../assets/mentor4.png"
import mentor5 from "../../assets/mentor5.png"
import mentor6 from "../../assets/mentor6.png"
import mentor7 from "../../assets/mentor7.png"
import mentor8 from "../../assets/mentor8.png"
import mentor9 from "../../assets/mentor9.png"
import mentor10 from "../../assets/mentor10.png"
import mentor11 from "../../assets/mentor11.png"

import { PenTool, Wrench, Send, Rocket } from "lucide-react";
import BannerSection from "../../components/HeroBanner";

const mentorsData = [
  {
    type: "GBU",
    image: "http://meow.tilchattaas.com/media/leadership/Screenshot_2025-06-24_at_10.41.43AM.png",
    name: "Prof. Rana Pratap Singh",
    role: "Honorable Vice Chancellor, GBU",
    qualifications: "Ph.D. in Environmental Science",
    expertise: "Leadership, Research Management, Academic Planning, Innovation in Higher Education",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor1,
    name: "Dr. Rajesh Mishra",
    role: "Chairperson - CEDT",
    qualifications: "Ph.D. (IIT Kharagpur), M.Tech. (IIT Kharagpur), B.E. (Electronics Engineering)",
    expertise: "Networks, Signal Processing, Communication Systems, RAMS",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor2,
    name: "Dr. O. V. Singh",
    role: "Member - CEDT",
    qualifications: "Ph.D. (Jamia Milia Islamia, New Delhi)",
    expertise: "Power Systems, Renewable Energy Sources, Electric Vehicles, Artificial Intelligence",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor3,
    name: "Dr. Navaid Zafar Rizvi",
    role: "Coordinator & Convener - CEDT",
    qualifications: "Ph.D., MS (TU Darmstadt, Germany), MS (HFU, Germany)",
    expertise: "ML for ICs, VLSI Design, HF Electronics and Communication, Microsystems",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor4,
    name: "Prof. Sanjay Kumar Sharma",
    role: "Dean, USICT",
    qualifications: "Ph.D. in Computer Science",
    expertise: "Information Technology, Artificial Intelligence, Nanotechnology, Research Methodology, Research & Publication Ethics",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor5,
    name: "Dr. Manmohan Singh Shishodia",
    role: "Member - CEDT",
    qualifications: "Ph.D. (IIT Delhi)",
    expertise: "Plasmonics, Nanoplasmonics, Semiconductor Optoelectronics, Theoretical and Computational Physics",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor6,
    name: "Dr. Navin Kumar",
    role: "Member - CEDT",
    qualifications: "Ph.D. (JNU)",
    expertise: "Animal Biotechnology, Regenerative Medicine, Immunology, Host-Pathogen Interaction, Human Physiology, Medical Lab Technology, Molecular Medicine",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: mentor7,
    name: "Dr. Vimlesh Kumar Ray",
    role: "Co-coordinator - CEDT",
    qualifications: "Ph.D. (GBU)",
    expertise: "Adhoc and Sensor Networks, Wireless Communications, UAV Communications, Control Systems",
    linkedin: "#",
  },
  {
    type: "Collaborator",
    image: mentor8,
    name: "Mr. Aakash Sinha",
    role: "Founder & CEO Omnipresent Robo Tech",
    qualifications: "MS (Robotics) – Carnegie Mellon University, USA",
    about: "Professor of Practice at Shiv Nadar University. Has rich drone-making experience with Lockheed-Martin and iRobot Corp. Founder of India's leading drone-based services company.",
    linkedin: "#",
  },
  {
    type: "Collaborator",
    image: mentor9,
    name: "Mr. Souraj S R",
    role: "R&D Lead, Omnipresent Robo Tech",
    qualifications: "Mechatronics Engineering (Nehru Institute of Engineering and Technology)",
    about: "Expertise in assemblies, hardware integration, PCB design, piloting, RPA design, and manufacturing of drones. Successfully developed India's longest 50km-range drone and led major Survey of India mapping projects.",
    linkedin: "#",
  },
  {
    type: "Collaborator",
    image: mentor10,
    name: "Ms. Jyoti Vashishtha",
    role: "CTO, Omnipresent Robo Tech",
    qualifications: "MS (University of California, US), MS (TU Munich, Germany)",
    about: "Expert in wireless communications, robotics, and AI. Winner of the Top 20 Women in Comp Sc award from US NSF and Dept. of Science and Technology, Gold Medalist.",
    linkedin: "#",
  },
  {
    type: "Collaborator",
    image: mentor11,
    name: "Mr. Shravan Yadav",
    role: "Drone Expert, Omnipresent Robo Tech",
    qualifications: "B.Tech. in Aeronautical Engineering",
    about: "Specialist in drone piloting and operations with experience in developing advanced UAV platforms and training programs.",
    linkedin: "#",
  },
];

const partnersData = [
  {
    name: "Omnipresent Robot Tech",
    type: "Industrial Partner",
    description: "India's leading drone-based services company with expertise in drone manufacturing, aerial mapping, and robotics solutions.",
    image: omnipresent,
    year: "2021",
  },
  {
    name: "IASC Sector Skill Council",
    type: "Training Partner",
    description: "Committed to developing a skilled workforce in instrumentation, automation, and communication through specialized training programs.",
    image: "/assets/Iasc.png",
    year: "2020",
  },
];

const coedtProjects = [
  {
    name: "X8 Drones",
    description:
      "X8 PRO multirotor frame is a professional UAV platform designed to be lightweight, rigid, and powerful for various aerial applications.",
    image: project1,
    category: "UAV Platform",
    year: "2023",
    status: "Prototype",
    technologies: ["Multirotor", "Composite Materials"],
  },
  {
    name: "Talon to VTOL Drone",
    description:
      "Transforming the Talon fixed-wing drone into a VTOL aircraft capable of vertical take-off, hover, and landing for enhanced operational flexibility.",
    image: project2,
    category: "R&D",
    year: "2024",
    status: "Ongoing",
    technologies: ["VTOL", "Aero Design"],
  },
  {
    name: "GCS Team (Ground Control System)",
    description:
      "Developing a web application providing mission planning and control functionality similar to ArduPilot, accessible from any device.",
    image: project3,
    category: "Software",
    year: "2024",
    status: "Ongoing",
    technologies: ["Web App", "ArduPilot"],
  },
  {
    name: "Battery Management System",
    description:
      "Designing an intelligent battery management system to monitor and optimize drone power performance and safety.",
    image: project4,
    category: "Electronics",
    year: "2023",
    status: "Prototype",
    technologies: ["BMS", "Embedded Systems"],
  },
  {
    name: "Anti-Drone Systems",
    description:
      "Creating a system to detect, track, and neutralize unauthorized drones, ensuring secure airspace for critical infrastructure and drone fleets.",
    image: project5,
    category: "Security",
    year: "2024",
    status: "Research",
    technologies: ["RF Jamming", "AI Detection"],
  },
];

const coedtFacilities = [
  {
    title: "CEDT Research & Development Laboratory",
    description:
      "Equipped for end-to-end drone manufacturing with frameworks, propulsion, aerodynamics, communication, automation, payloads, security, and control systems.",
    image: "https://iirc.jnec.org/images/uav1.jpg",
  },
  {
    title: "Designing Lab",
    description:
      "Executed with expert guidance and AI-powered modeling, layout, and visualization software for precise design analysis.",
    image: "http://meow.tilchattaas.com/media/realtedimg/drone_center.webp",
  },
  {
    title: "Flying Zone",
    description:
      "511-acre campus with open spaces simplifying and streamlining the flight test process.",
    image:
      "https://images.shiksha.com/mediadata/images/articles/1648028576phpVlRT31.jpeg",
  },
  {
    title: "Assembly Lab",
    description:
      "In-house rapid prototyping and advanced manufacturing tools for streamlined assembly.",
    image: "https://www.grenonews.com/wp-content/uploads/2022/06/GBU.jpg",
  },
  {
    title: "Smart Classroom",
    description:
      "Modern teaching spaces with projectors, LCD panels, and an integrated learning management system.",
    image: "https://www.gbu.ac.in/facilities/assets/images/audi-04_1.jpeg",
  },
];

const coedtTalks = [
  {
    title: "How Drones Will Bring Big Disruptions in Industry and Jobs",
    speaker: "Akash Sinha",
    dateTime: "10th March 2022 · 3 PM",
    venue: "Main Auditorium, GBU",
    description:
      "Mr. Aakash Sinha (Founder & CEO, Omnipresent Robot Tech) discussed how drone technology will transform industry and create new job opportunities.",
    image: Talks,
    youtubeLink: "https://youtu.be/B3W3wQ4ZRPQ?si=fFNMi3zv43gu1PoJ",
  },

];

const mediaItems = [
  {
    title: "Drone Pilot Course at Gautam Buddha University",
    date: "2022-04-23",
    image: "https://static.wixstatic.com/media/bc6a73_ed122f7cc89e48619d459f4272eba491~mv2.jpg",
    description:
      "Gautam Buddha University to launch drone pilot training courses with short-term modules for aspiring drone operators.",
    link: "https://www.navodayatimes.in/news/khabre/drone-pilot-will-also-now-have-a-course-in-gautam-buddha-university/197826/",
  },
  {
    title: "GBU to Make History with First Drone Course in UP",
    date: "2022-05-20",
    image: project1,
    description:
      "Gautam Buddha University to launch UP’s first-ever drone certification course, marking a significant milestone.",
    link: "",
  }, {
    title: "Drone Courses to Boost Youth Employment at GBU",
    date: "2022-05-01",
    image: "https://static.wixstatic.com/media/bc6a73_009334d175304d4485f3f7eabe50dad5~mv2.jpeg/v1/fill/w_815,h_358,al_c,lg_1,q_80,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpeg",
    description: "Three new drone technology programs launching at GBU to support youth employment and skilling in drone manufacturing, piloting, and technology.",
    link: "https://www.patrika.com/noida-news/gautam-buddha-university-will-conduct-3-type-short-term-drone-course-7470045"
  },
  {
    title: "GBU to Become Smart Campus with Drone Manufacturing & Training",
    date: "2022-06-01",
    image: "https://static.wixstatic.com/media/bc6a73_d4a5adff6b184bd39773f481faab5635~mv2.jpg/v1/fill/w_815,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpg",
    description: "New developments at GBU to open employment avenues through drone manufacturing and pilot training initiatives.",
    link: ""
  },
  {
    title: "GBU at Bharat Drone Mahotsav 2022",
    date: "2022-05-27",
    image: "https://static.wixstatic.com/media/bc6a73_39c8b7fad71449f4814235f25c45bf6f~mv2.jpg/v1/fill/w_792,h_347,al_c,lg_1,q_80,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpg",
    description: "Gautam Buddha University showcased its drone technology centre at the Bharat Drone Mahotsav 2022 with student participation.",
    link: "https://www.grenonews.com/?p=57408"
  },
  {
    title: "Students at GBU Building Delivery Drones",
    date: "2022-07-01",
    image: "https://static.wixstatic.com/media/bc6a73_c395997f244f43d5bccd5310bd8deae2~mv2.jpeg/v1/fill/w_749,h_329,al_c,q_80,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpeg",
    description: "GBU students actively engaged in drone manufacturing projects including delivery drones for smart solutions.",
    link: "https://www.amarujala.com/delhi-ncr/noida/gbu-students-are-making-delivery-drones-noida-news-noi6522566115"
  },
  {
    title: "GBU to Make History with First Drone Course in UP",
    date: "2022-05-20",
    image: project1,
    description: "Gautam Buddha University to launch UP’s first-ever drone certification course, marking a significant milestone.",
    link: ""
  },
  {
    title: "Centre for Drone Studies Established at GBU",
    date: "2022-06-15",
    image: "https://static.wixstatic.com/media/bc6a73_069991b6d1a843e8a6867111d103a6ab~mv2.jpeg/v1/fill/w_815,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpeg",
    description: "Gautam Buddha University sets up a dedicated Centre for Drone Studies focusing on research, training, and development.",
    link: "https://www.shiksha.com/news/college-gautam-buddha-university-establishes-centre-for-drone-studies-blogId-86279"
  },

];


const Coedt = () => {
  return (
    <div>
      <BannerSection 
        title="Centre of Excellence in Drone Technology"
        subtitle="Empowering Innovation in Drone Technology"
        bgTheme={5}
/>
      <AboutSection
        sectionTitle="About Us"
        visionTitle="Our Vision"
        visionDescription={[
          "To be a national leader in drone innovation, education, and capacity-building, driving sustainable solutions and technological excellence.",
          "The CEDT is committed to systematizing knowledge, assistance, and skill-building concerning technical and social aspects of drone technology."
        ]}
        missionTitle="Our Mission"
        missionPoints={[
          "Train skilled drone pilots and technicians",
          "Develop indigenous drone systems and applications",
          "Foster research and innovation in aerial robotics",
          "Collaborate with industry and government bodies",
          "Promote safe and responsible use of drone technology",
        ]}
        storyTitle="Our Story"
        storyText="The Centre of Excellence – Drone Technology (CEDT) is a pioneering initiative..."
        whatWeDoTitle="What We Do"
        whatWeDoText="CEDT offers drone pilot training, data processing and analysis..."
        commitmentTitle="Our Commitment"
        commitmentText="We are dedicated to systematizing knowledge..."
        photos={[
          "https://static.wixstatic.com/media/bc6a73_a51fa15dce7d4c229f9090932d2071f3~mv2.jpg",
        ]}
      />

      <Mentors sectionTitle="Meet Our Mentors" mentors={mentorsData} />

      <PartnersCarousel
        sectionTitle="Our Collaborators"
        sectionSubtitle="Strategic partners supporting our mission"
        partners={partnersData}
        interval={5000}
      />
      <ProjectsSection
        title="Our Projects"
        subtitle="Innovative initiatives transforming ideas into reality"
        projects={coedtProjects}
      />
      <DroneCourseCard
        sectionTitle="Courses Offered by CEDT"
        sectionSubtitle="Innovative initiatives transforming ideas into reality"
        imageSrc={droneImage}
        imageAlt="Drone Training Course"
        badgeText="NEW"
        courseTitle="Training & Certification in Drone Designing & Piloting"
        courseDescription="Become a certified professional drone pilot. Master drone designing, flight concepts, assembly, maintenance, and real-time applications like agriculture, mapping, and flood damage assessment."
        duration="5 + 1 Weeks"
        price="₹49,000"
        eligibility="2nd Year+ Engineering, Diploma & Science Graduates"
        startDate="6th September 2022"
        venue="CEDT, USICT, Gautam Buddha University, Greater Noida"
        highlights={[
          "Industry and Academic Instructors",
          "DGCA Rules & Regulations",
          "25 Hours of Drone Flying Practice",
          "Job Placement Assistance",
        ]}
        syllabusLink="" // add your PDF link if you have one
      />

      <FacilitiesSwiper
        sectionTitle="Facilities Offered"
        facilities={coedtFacilities}
      />
      <RecentTalks
        sectionTitle="Recent Talks and Sessions"
        talks={coedtTalks}
      />
      <MediaCoverage
        sectionTitle="Media Coverage"
        sectionSubtitle="Explore how our work is making headlines"
        mediaItems={mediaItems}
      />
    </div>
  );
};

export default Coedt;
