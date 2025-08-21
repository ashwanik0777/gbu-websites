import React from 'react';
import CourseDetailedLayout from './CourseDetailedLayout.jsx';

const CourseDetails = () => {
   const courseData = {
    id: "cs101",
    title: "B.Tech Computer Science & Engineering",
    subtitle: "Bachelor of Technology in Computer Science & Engineering",
    description: "Comprehensive undergraduate program designed to provide students with strong foundation in computer science principles, programming, software engineering, and emerging technologies.",
    duration: "4 Years",
    level: "Undergraduate",
    mode: "Full-time",
    intake: "120 Students",
    fee: "₹2,50,000 per year",
    rating: 4.8,
    reviews: 1247,
    accreditation: "AICTE Approved, NBA Accredited",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400"
    ],
    highlights: [
      "Industry-aligned curriculum",
      "100% placement assistance",
      "State-of-the-art labs",
      "Expert faculty",
      "Research opportunities",
      "International exposure"
    ],
    eligibility: [
      "10+2 with Physics, Chemistry, Mathematics",
      "Minimum 75% aggregate marks",
      "Valid JEE Main/Advanced score",
      "Age limit: 17-25 years"
    ],
    career_prospects: [
      "Software Engineer",
      "Data Scientist", 
      "System Analyst",
      "Product Manager",
      "Research Scientist",
      "Entrepreneur"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Mathematics I", "Physics", "Chemistry", "Engineering Graphics", "Programming Fundamentals"]
      },
      {
        semester: "Semester 2", 
        subjects: ["Mathematics II", "Data Structures", "Digital Logic", "Communication Skills", "Environmental Science"]
      },
      {
        semester: "Semester 3",
        subjects: ["Computer Organization", "Database Systems", "Object-Oriented Programming", "Mathematics III", "Economics"]
      },
      {
        semester: "Semester 4",
        subjects: ["Operating Systems", "Software Engineering", "Computer Networks", "Algorithm Analysis", "Statistics"]
      }
    ],
    faculty: [
      {
        name: "Dr. Rajesh Kumar",
        designation: "Professor & Head",
        specialization: "Machine Learning, AI",
        experience: "15 years",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
      },
      {
        name: "Dr. Priya Sharma", 
        designation: "Associate Professor",
        specialization: "Data Science, Analytics",
        experience: "12 years",
        image: "https://images.unsplash.com/photo-1494790108755-2616b332b692?w=150"
      }
    ],
    facilities: [
      "Advanced Computing Labs",
      "AI/ML Research Center", 
      "24/7 Library Access",
      "High-speed Internet",
      "Modern Classrooms",
      "Innovation Hub"
    ],
    testimonials: [
      {
        name: "Amit Patel",
        batch: "2023 Graduate",
        company: "Google",
        review: "The program provided excellent foundation in computer science. The faculty support and industry exposure helped me land my dream job.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80"
      },
      {
        name: "Sneha Reddy",
        batch: "2022 Graduate", 
        company: "Microsoft",
        review: "Outstanding curriculum and research opportunities. The practical approach to learning made complex concepts easy to understand.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80"
      }
    ]
  }

  const handleApplyClick = (courseId) => {
    console.log('Apply clicked for course:', courseId);
  };

  const handleDownloadBrochure = (courseId) => {
    console.log('Download brochure for course:', courseId);
  };

  const handleScheduleCall = (courseId) => {
    console.log('Schedule call for course:', courseId);
  };

  return (
    <CourseDetailedLayout
      courseData={courseData}
      onApplyClick={handleApplyClick}
      onDownloadBrochure={handleDownloadBrochure}
      onScheduleCall={handleScheduleCall}
    />
  );
};

export default CourseDetails;
