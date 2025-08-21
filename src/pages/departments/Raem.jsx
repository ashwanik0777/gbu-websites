import React from "react";
import Hero from "../../components/departments/raem/Hero";
import AboutRAEM from "../../components/departments/raem/AboutRAEM";
import FunctionalAreasSwiper from "../../components/departments/raem/FunctionalAreasSwiper";
import CoursesOffered from "../../components/departments/raem/CourseOffered";
import EventGallery from "../../components/departments/raem/EventGallery";
import { PenTool, Wrench, Send, Rocket } from "lucide-react";

import RaemImage from "../../assets/Raem.png";

import fnarea1 from "../../assets/fnarea1.png";
import fnarea2 from "../../assets/fnarea2.png";
import fnarea3 from "../../assets/fnarea3.png";
import fnarea4 from "../../assets/fnarea4.png";
import BannerSection from "../../components/HeroBanner";

const functionalAreas = [
  {
    title: "Signal, Telecom and RAMS",
    description:
      "Specialized focus on Railway Signaling, Telecom & Optical Fiber Technology, and RAMS to enhance safety, reliability, and efficiency in railway operations.",
    image: fnarea1,
  },
  {
    title: "Education & Training Programs",
    description:
      "Short-term courses, Certificate Programs, One-Year Diploma, and Two-Year M.Tech in Railway Signaling, Telecom, and RAMS to develop skilled professionals.",
    image: fnarea2,
  },
  {
    title: "Research and Development in Mobility",
    description:
      "Product development, lab establishment for ERTMS Level 1 & 2, and advanced R&D in traffic signaling, rolling stock, and reliability solutions.",
    image: fnarea3,
  },
  {
    title: "Alternative Energy Solutions",
    description:
      "Exploring hydrogen-powered vehicles, solar energy, and other renewable techniques to promote sustainable transportation systems.",
    image: fnarea4,
  },
  {
    title: "Maintenance & Optimization",
    description:
      "Forecasting reliability, managing inventory, preventive and corrective maintenance, and developing optimization solutions for smooth operations.",
    image:
      "https://img.freepik.com/premium-photo/smart-grid-optimization-renewable-energy_1022456-162721.jpg",
  },
];

const myCourses = [
  {
    title: "Reliability Availability Maintainability & Safety (RAMS)",
    duration: "3 Months / 6 Months / 2 Years",
    description:
      "Learn theoretical concepts, methodologies, models, and tools for function preservation and failure prevention across asset life cycles.",
    eligibility:
      "B.Tech/B.E with 2 years experience / Diploma holders with 3 years work experience.",
    fee: "₹50,000 – ₹4,00,000",
    highlights: [
      "Function Preservation",
      "Failure Prevention",
      "Reliability Modelling",
      "System Safety",
      "RAMS Tools",
      "Lifecycle Management",
    ],
    gradient: "from-blue-500 to-blue-600",
    bgImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVIlJrs7nn3dc8dqjjmkDMV4uco-oPkYtwg&s",
    syllabusLinks: [
      { label: "Fundamentals", url: "https://example.com/rams-fundamentals.pdf" },
      { label: "Advanced", url: "https://example.com/rams-advanced.pdf" }
    ]
  },
  {
    title: "Prognostics & Health Management (PHM)",
    duration: "3 Months / 6 Months",
    description:
      "Develop tools and methods for assessing and managing the remaining useful life (RUL) of assets aligned with business objectives.",
    eligibility:
      "B.Tech/B.E with 2 years experience / Diploma holders with 3 years work experience.",
    fee: "₹45,000 – ₹90,000",
    highlights: [
      "RUL Prediction",
      "Condition Monitoring",
      "Failure Forecasting",
      "Data Analytics",
      "Health Assessment",
      "Decision Support",
    ],
    gradient: "from-purple-500 to-purple-600",
    bgImage:
      "https://eda.europa.eu/images/default-source/images/battage-cropped?auto=format&fit=crop&w=800&q=80",
    syllabusLinks: [
      { label: "Basic", url: "https://example.com/phm-basic.pdf" },
      { label: "Advanced", url: "https://example.com/phm-advanced.pdf" }
    ]
  },
  {
    title: "Maintenance Engineering (ME)",
    duration: "3 Months / 6 Months",
    description:
      "Gain foundational knowledge of maintenance engineering for industrial assets and infrastructure, covering life cycle perspectives.",
    eligibility:
      "B.Tech/B.E with 2 years experience / Diploma holders with 3 years work experience.",
    fee: "₹45,000 – ₹90,000",
    highlights: [
      "Maintenance Planning",
      "Preventive Maintenance",
      "Asset Management",
      "Reliability Improvement",
      "Lifecycle Costing",
      "Industrial Application",
    ],
    gradient: "from-green-500 to-green-600",
    bgImage:
      "https://www.aviationjobsearch.com/storage/AJS/uploads/hub/advices/QnNoMqGb8rk4SV01DyNOOSZXATjxnQ8voaBk5Y5T.png?auto=format&fit=crop&w=800&q=80",
    syllabusLinks: [
      { label: "Fundamentals", url: "https://example.com/maintenance-fundamentals.pdf" }
    ]
  },
];

const raemEvents = [
  {
    id: 1,
    title: "DMRC Visit",
    date: "2024-09-10",
    category: "Workshop",
    images: [
      {
        url: "http://raem.gbu.ac.in/images/demo/gallery/square/IMG_20190423_134947.jpg",
        caption: "Group Photo",
      },
      {
        url: "http://raem.gbu.ac.in/images/demo/gallery/v_long/20190423_132338.jpg",
        caption: "Discussion during visit",
      },
      {
        url: "http://raem.gbu.ac.in/images/demo/gallery/long/samsung%20pics%20dec%202019%20197.jpg",
        caption: "Hands-on demonstration",
      },
      {
        url: "http://raem.gbu.ac.in/images/demo/gallery/square/nmrc1.jpg",
        caption: "Interactive session",
      },
    ],
  },
];

const Raem = () => {
  return (
    <div>
      <BannerSection
        title="Center for Rapid and Alternative Energy Mobility"
        subtitle="Leading the Future of Rapid and Alternative Energy Mobility"
        bgTheme={8}
      />
      <AboutRAEM
        visionText={[
          "To be a national leader in research, innovation, and capacity-building for sustainable, rapid, and alternative energy mobility systems.",
          "RAEM aspires to create a robust ecosystem that bridges academia, industry, and government to advance railways, metro systems, hydrogen mobility, and renewable energy technologies.",
        ]}
        missionPoints={[
          "Conduct research & develop solutions in railway signaling, telecom, and RAMS",
          "Undertake collaborative and contract research with Indian Railways and industry",
          "Offer specialized Diploma, Certificate, and M.Tech. programs",
          "Provide hands-on training and internships in rapid and alternative energy mobility",
          "Promote sustainable, innovative transport solutions for India’s future",
        ]}
        sections={[
          {
            heading: "Our Story",
            text: "The Centre for Rapid and Alternative Energy Mobility (RAEM) is an initiative of Gautam Buddha University dedicated to advancing education, research, and innovation in rapid mobility systems, metro rail engineering, and alternative energy transportation such as hydrogen-powered vehicles and maglev trains.",
          },
          {
            heading: "What We Do",
            text: "RAEM offers specialized Diploma, Certificate, and M.Tech programs in Railway Signaling, Telecom, and RAMS. The Centre undertakes collaborative and contract research, provides training workshops, and develops indigenous solutions for the challenges faced by India's growing transportation sector.",
          },
          {
            heading: "Our Commitment",
            text: "We are committed to empowering the next generation of engineers, technologists, and innovators through industry-driven education, advanced R&D infrastructure, and meaningful partnerships with Indian Railways, NMRC, and DMRC.",
          },
        ]}
        photos={[RaemImage]} />
      <FunctionalAreasSwiper
        title="Key Functional Areas"
        functionalAreas={functionalAreas}
      />
      <CoursesOffered
        title="Courses Offered"
        description="Explore our specialized Certificate, Diploma & Degree programs tailored for industry professionals."
        courses={myCourses}
      />
      <EventGallery
        title="Our Events"
        subtitle="See highlights from our workshops & training"
        events={raemEvents}
      />
    </div>
  );
};

export default Raem;
