import Home from "../pages/Aboutus/Home.jsx";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InternshipProgrammes from "../pages/Placement/InternshipProgrammes.jsx";

import PlacementStatistics from "../pages/Placement/PlacementStatistics.jsx";
const PlacementBrochure = React.lazy(() =>
  import("../pages/Placement/PlacementBrochure")
);
import TrainingCareerServices from "../pages/Placement/TrainingCareerServices.jsx";
import AdmissionProcess from "../pages/Admission/AdmissionProcess.jsx";
import CoursesOffered from "../pages/Admission/CoursesOffered.jsx";
import EligibilityReservation from "../pages/Admission/EligibilityReservation.jsx";
import FeeStructure from "../pages/Admission/FeeStructure.jsx";
import InternationalAdmissions from "../pages/Admission/InternationalAdmissions.jsx";
import NewsDetail from "../pages/Announcements/NewsDetail.jsx";
import NewsNotifications from "../pages/Announcements/NewsNotifications.jsx";
import EventsPage from "../pages/Announcements/EventsPage.jsx";
import NewsLetter from "../pages/Announcements/NewsLetter.jsx";
import EventDetail from "../pages/Announcements/EventDetail.jsx";
import MediaGallery from "../pages/Announcements/MediaGallery.jsx";
import Notice from "../pages/Announcements/Notice.jsx";
import NoticeDetail from "../pages/Announcements/NoticeDetail.jsx";

import AlumniNetwork from "../pages/Alumni/AlumniNetwork.jsx";
import EventsReunions from "../pages/Alumni/EventsReunions.jsx";
import AlumniRegistration from "../pages/Alumni/AlumniRegistration.jsx";
import SuccessStories from "../pages/Alumni/SuccessStories.jsx";

import ContactDirectory from "../pages/directory/ContactDirectory.jsx";

import HostelDining from "../pages/campusLife/HostelDining.jsx";
import HostelDetailed from "../pages/campusLife/HostelDetailed.jsx";
import SportsCultural from "../pages/campusLife/SportsCultural.jsx";
import ClubsMain from "../pages/clubs/ClubsMain.jsx";

import NSS from "../pages/campusLife/NSS.jsx";
import NCC from "../pages/campusLife/NCC.jsx";
import MeditationCenter from "../pages/campusLife/MeditationCenter.jsx";
import Overview from "../pages/campusLife/Overview.jsx";
import ClubDetail from "../pages/clubs/ClubDetail.jsx";
import GrievanceMain from "../pages/grievance/GrievanceMain.jsx";
import { AuthProvider } from "../components/Grievance/contexts/AuthContext";
import ProtectedRoute from "../components/Grievance/ProtectedRoute";
import StudentDashboard from "../pages/grievance/StudentDashboard";
import StaffDashboard from "../pages/grievance/StaffDashboard";
import AdminDashboard from "../pages/grievance/AdminDashboard";
import Login from "../pages/grievance/Login";
import TrackComplaint from "../pages/grievance/TrackComplaint";
import FAQ from "../pages/grievance/FAQ";
import Contact from "../pages/grievance/Contact";
import EscalationPolicy from "../pages/grievance/EscalationPolicy";
import ComplaintDetail from "../pages/grievance/ComplaintDetail";
import FacultyDashboard from "../pages/grievance/FacultyDashboard";
import Biotechnology from "../pages/departments/Biotechnology.jsx";
import Engineering from "../pages/departments/Engineering.jsx";
import Law from "../pages/departments/Law.jsx";
import Management from "../pages/departments/Management.jsx";
import Humanities from "../pages/departments/Humanities.jsx";
import Vocational from "../pages/departments/Vocational.jsx";
import Buddhist from "../pages/departments/Buddhist.jsx";
import CourseDetails from "../components/departments/CourseDetailed.jsx"; 
import SitemapMain from "../pages/Sitemap/SitemapMain.jsx";
import Sitemap from "../pages/Sitemap/Sitemap.jsx";
import SitemapAbout from "../pages/Sitemap/SitemapAbout.jsx";
import SitemapContact from "../pages/Sitemap/SitemapContact.jsx";
import SitemapAcademics from "../pages/Sitemap/SitemapAcademics.jsx";
import InstitutionInnovation from "../pages/Reasearch/InstitutionInnovation.jsx";
import GBUHistory from "../pages/Aboutus/History.jsx";

const AcademicCalendar = React.lazy(() =>
  import("../pages/Academic/AcademicCalendar.jsx")
);
const CBCSFramework = React.lazy(() =>
  import("../pages/Academic/CBCSFramework.jsx")
);
const CentersOfExcellence = React.lazy(() =>
  import("../pages/Academic/CentersOfExcellence.jsx")
);
const Faculty = React.lazy(() => import("../pages/Academic/Faculty.jsx"));
const FacultyDetail = React.lazy(() =>
  import("../pages/Academic/FacultyDetail.jsx")
);
const InternationalCollaboration = React.lazy(() =>
  import("../pages/Academic/InternationalCollaboration.jsx")
);

const ReportsPublications = React.lazy(() =>
  import("../pages/Academic/ReportsPublications.jsx")
);
const Schools = React.lazy(() => import("../pages/Academic/Schools.jsx"));

const Disclosures = lazy(() => import("../pages/Aboutus/Disclosures.jsx"));
const History = lazy(() => import("../pages/Aboutus/History.jsx"));
const Policies = lazy(() => import("../pages/Aboutus/Policies.jsx"));
const AboutGbu = lazy(() => import("../pages/Aboutus/AboutGbu.jsx"));

const Chancellor = lazy(() => import("../pages/Aboutus/Chancellor.jsx"));
const Governance = lazy(() => import("../pages/Aboutus/Governance.jsx"));
const ViceChancellor = lazy(() =>
  import("../pages/Aboutus/ViceChancellor.jsx")
);

const FundedProjects = lazy(() =>
  import("../pages/Reasearch/researchhighlights/FundedProjects")
);
const StartUp = lazy(() =>
  import("../pages/Reasearch/incubations/StartUp.jsx")
);
const Index = lazy(() =>
  import("../pages/Reasearch/researchhighlights/Index.jsx")
);
const Publications = lazy(() =>
  import("../pages/Reasearch/researchhighlights/Publications.jsx")
);

const ResearchCenters = lazy(() =>
  import("../pages/Reasearch/ResearchCenters.jsx")
);
const Incubation = lazy(() => import("../pages/Reasearch/incubations/Incubation.jsx"));
const Ipr = lazy(() => import("../pages/Reasearch/ipr/Ipr.jsx"));

// ICT School components (lazy loaded) - Update these paths according to your project structure
const ICTPage = lazy(() => import("../pages/departments/ICTPage"));
const ICTFaculty = lazy(() => import("../pages/departments/Faculty"));
const CSE = lazy(() => import("../pages/departments/CSE"));
const IT = lazy(() => import("../pages/departments/IT"));
const ECE = lazy(() => import("../pages/departments/ECE"));
const ICTContact = lazy(() => import("../pages/departments/Contact"));
const ResearchArea = lazy(() => import("../pages/departments/Research_area"));
const ResearchProjects = lazy(() =>
  import("../pages/departments/Reasearch_project")
);
const ResearchScholars = lazy(() =>
  import("../pages/departments/Reasearch_Scholar")
);
const TrainingConsultancy = lazy(() => import("../pages/departments/Training"));
const Patents = lazy(() => import("../pages/departments/Patent"));
const BoardOfStudies = lazy(() => import("../pages/departments/BoardOfStudy"));
import SchoolsLayout from "../components/departments/SchoolsLayout.jsx";
import Dean from "../components/departments/Dean.jsx";
import Conferences from "../pages/departments/Usict_activities.jsx";
import LaboratoryCards from "../pages/departments/laboratries.jsx";
// import NewsLetter from "../pages/Announcements/NewsLetter.jsx";
// import MediaCoverage from "../pages/Announcements/MediaCoverage.jsx";
import Placement_home from "../pages/Placement/Placement_home.jsx";

import RecruitMain from "../pages/recruitments/RecruitMain.jsx";


import BookingMain from "../pages/booking/BookingMain.jsx";
import FacilityBookingPage from "../components/booking/FacilityBookingPage.jsx";
import TenderMain from "../pages/tenders/TenderMain.jsx";


import RTI from "../pages/RTI.jsx";

import StaffMembers from "../pages/departments/StaffMembers.jsx";
import Coedt from "../pages/departments/Coedt.jsx";
import Raem from "../pages/departments/Raem.jsx";
import CyberSecurity from "../pages/departments/CyberSecurity.jsx";

import DAC from "../pages/dac/DAC.jsx";
import PlacementDashboard from "../pages/departments/PlacementDashboard.jsx";
import ContactBanner from "../pages/Contact/ContactBanner.jsx";
// import DACmain from "../pages/dac/DACmain.jsx";




export default function AppRouter() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      <AuthProvider>
        <Routes>
          {/* About Us Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us/About GBU" element={<AboutGbu />} />
          <Route path="/aboutUs/GBUHistory" element={<History />} />
          <Route path="/about-us/chancellor-message" element={<Chancellor />} />
          <Route
            path="/about-us/vice-chancellor-message"
            element={<ViceChancellor />}
          />
          <Route
            path="/about-us/governance-committees"
            element={<Governance />}
          />

          <Route
            path="/about-us/policies-statutes-rti"
            element={<Policies />}
          />
          <Route
            path="/about-us/mandatory-disclosures"
            element={<Disclosures />}
          />

          {/* Academics */}
          <Route path="/academics" element={<h1>Academics</h1>} />
          <Route
            path="/academics/academic-calendar"
            element={<AcademicCalendar />}
          />
          <Route path="/academics/cbcs-framework" element={<CBCSFramework />} />
          <Route
            path="/academics/centers-of-excellence"
            element={<CentersOfExcellence />}
          />
          <Route path="/academics/faculty" element={<Faculty />} />
          <Route path="/academics/faculty/:id" element={<FacultyDetail />} />
          <Route
            path="/academics/international-collaboration"
            element={<InternationalCollaboration />}
          />

          <Route
            path="/academics/reports-publications"
            element={<ReportsPublications />}
          />
          <Route path="/academics/schools" element={<Schools />} />

          <Route path="/schools/ict" element={<SchoolsLayout />}>
            {/* ICT Home Page */}
            <Route index element={<ICTPage />} />

            {/* Faculty */}
            <Route path="faculty" element={<ICTFaculty />} />
            <Route path="placement" element={<PlacementDashboard />} />
            {/* About Section */}
            <Route
              path="about/coeidrone"
              element={<Coedt />}
            />
            <Route path="about/cyber" element={<CyberSecurity />} />
            <Route path="about/dean" element={<Dean />} />
            <Route
              path="about/coeiraem"
              element={<Raem />}
            />
            <Route path="about/board" element={<BoardOfStudies />} />
            <Route path="about/staff" element={<StaffMembers />} />
            <Route path="about/labs" element={<LaboratoryCards />} />
            <Route path="about/activities" element={<Conferences />} />

            {/* Departments */}
            <Route path="departments/cse" element={<CSE />} />
            <Route path="departments/it" element={<IT />} />
            <Route path="departments/ece" element={<ECE />} />

            {/* Research Section */}
            <Route path="research/profile" element={<ResearchArea />} />
            <Route
              path="research/consultancy"
              element={<TrainingConsultancy />}
            />
            <Route path="research/scholars" element={<ResearchScholars />} />
            <Route path="research/projects" element={<ResearchProjects />} />
            <Route path="research/patents" element={<Patents />} />

            {/* Contact Page */}
            <Route path="contact" element={<ICTContact />} />
          </Route>

          <Route path="/schools/biotechnology" element={<SchoolsLayout />}>
            {/* Biotechnology Home Page */}
            <Route index element={<Biotechnology />} />

            {/* Faculty */}
            <Route path="faculty" element={<ICTFaculty />} />

            {/* About Section */}
            <Route
              path="about/coeidrone"
              element={<h1>COE Drone - Coming Soon</h1>}
            />
            <Route path="about/dean" element={<Dean />} />
            <Route
              path="about/coeiraem"
              element={<h1>COE IRAEM - Coming Soon</h1>}
            />
            <Route path="about/board" element={<BoardOfStudies />} />
            <Route path="about/staff" element={<h1>Staff - Coming Soon</h1>} />
            <Route path="about/labs" element={<LaboratoryCards />} />
            <Route path="about/activities" element={<Conferences />} />

            {/* Departments */}
            <Route path="departments/cse" element={<CSE />} />
            <Route path="departments/it" element={<IT />} />
            <Route path="departments/ece" element={<ECE />} />

            {/* Research Section */}
            <Route path="research/profile" element={<ResearchArea />} />
            <Route
              path="research/consultancy"
              element={<TrainingConsultancy />}
            />
            <Route path="research/scholars" element={<ResearchScholars />} />
            <Route path="research/projects" element={<ResearchProjects />} />
            <Route path="research/patents" element={<Patents />} />

            {/* Contact Page */}
            <Route path="contact" element={<ICTContact />} />
          </Route>


          {/* ------------------------------------------------------------------------------------------------------------------ */}

          <Route path="/schools/engineering" element={<SchoolsLayout />}>
            {/* Engineering Home Page */}
            <Route index element={<Engineering />} />

            {/* Faculty */}
            <Route path="faculty" element={<ICTFaculty />} />

            {/* About Section */}
            <Route
              path="about/coeidrone"
              element={<h1>COE Drone - Coming Soon</h1>}
            />
            <Route path="about/dean" element={<Dean />} />
            <Route
              path="about/coeiraem"
              element={<h1>COE IRAEM - Coming Soon</h1>}
            />
            <Route path="about/board" element={<BoardOfStudies />} />
            <Route path="about/staff" element={<h1>Staff - Coming Soon</h1>} />
            <Route path="about/labs" element={<LaboratoryCards />} />
            <Route path="about/activities" element={<Conferences />} />

            {/* Departments */}
            <Route path="departments/cse" element={<CSE />} />
            <Route path="departments/it" element={<IT />} />
            <Route path="departments/ece" element={<ECE />} />

            {/* Research Section */}
            <Route path="research/profile" element={<ResearchArea />} />
            <Route
              path="research/consultancy"
              element={<TrainingConsultancy />}
            />
            <Route path="research/scholars" element={<ResearchScholars />} />
            <Route path="research/projects" element={<ResearchProjects />} />
            <Route path="research/patents" element={<Patents />} />

            {/* Contact Page */}
            <Route path="contact" element={<ICTContact />} />
          </Route>





          <Route path="/schools/buddhist" element={<SchoolsLayout />}>
            {/* Buddhist Home Page */}
            <Route index element={<Buddhist />} />

            {/* Faculty */}
            <Route path="faculty" element={<ICTFaculty />} />

            {/* About Section */}
            <Route
              path="about/coeidrone"
              element={<h1>COE Drone - Coming Soon</h1>}
            />
            <Route path="about/dean" element={<Dean />} />
            <Route
              path="about/coeiraem"
              element={<h1>COE IRAEM - Coming Soon</h1>}
            />
            <Route path="about/board" element={<BoardOfStudies />} />
            <Route path="about/staff" element={<h1>Staff - Coming Soon</h1>} />
            <Route path="about/labs" element={<LaboratoryCards />} />
            <Route path="about/activities" element={<Conferences />} />

            {/* Departments */}
            <Route path="departments/cse" element={<CSE />} />
            <Route path="departments/it" element={<IT />} />
            <Route path="departments/ece" element={<ECE />} />

            {/* Research Section */}
            <Route path="research/profile" element={<ResearchArea />} />
            <Route
              path="research/consultancy"
              element={<TrainingConsultancy />}
            />
            <Route path="research/scholars" element={<ResearchScholars />} />
            <Route path="research/projects" element={<ResearchProjects />} />
            <Route path="research/patents" element={<Patents />} />

            {/* Contact Page */}
            <Route path="contact" element={<ICTContact />} />
          </Route>





          <Route path="/schools/law" element={<SchoolsLayout />}>
            {/* Law Home Page */}
            <Route index element={<Law />} />

            {/* Faculty */}
            <Route path="faculty" element={<ICTFaculty />} />

            {/* About Section */}
            <Route
              path="about/coeidrone"
              element={<h1>COE Drone - Coming Soon</h1>}
            />

            <Route path="about/dean" element={<Dean />} />
            <Route
              path="about/coeiraem"
              element={<h1>COE IRAEM - Coming Soon</h1>}
            />
            <Route path="about/board" element={<BoardOfStudies />} />
            <Route path="about/staff" element={<h1>Staff - Coming Soon</h1>} />
            <Route path="about/labs" element={<LaboratoryCards />} />
            <Route path="about/activities" element={<Conferences />} />

            {/* Departments */}
            <Route path="departments/cse" element={<CSE />} />
            <Route path="departments/it" element={<IT />} />
            <Route path="departments/ece" element={<ECE />} />

            {/* Research Section */}
            <Route path="research/profile" element={<ResearchArea />} />
            <Route
              path="research/consultancy"
              element={<TrainingConsultancy />}
            />
            <Route path="research/scholars" element={<ResearchScholars />} />
            <Route path="research/projects" element={<ResearchProjects />} />
            <Route path="research/patents" element={<Patents />} />

            {/* Contact Page */}
            <Route path="contact" element={<ICTContact />} />
          </Route>







          <Route path="/schools/management" element={<SchoolsLayout />}>
            {/* Management Home Page */}
            <Route index element={<Management />} />

            {/* Faculty */}
            <Route path="faculty" element={<ICTFaculty />} />

            {/* About Section */}
            <Route
              path="about/coeidrone"
              element={<h1>COE Drone - Coming Soon</h1>}
            />
            <Route path="about/dean" element={<Dean />} />
            <Route
              path="about/coeiraem"
              element={<h1>COE IRAEM - Coming Soon</h1>}
            />
            <Route path="about/board" element={<BoardOfStudies />} />
            <Route path="about/staff" element={<h1>Staff - Coming Soon</h1>} />
            <Route path="about/labs" element={<LaboratoryCards />} />
            <Route path="about/activities" element={<Conferences />} />

            {/* Departments */}
            <Route path="departments/cse" element={<CSE />} />
            <Route path="departments/it" element={<IT />} />
            <Route path="departments/ece" element={<ECE />} />

            {/* Research Section */}
            <Route path="research/profile" element={<ResearchArea />} />
            <Route
              path="research/consultancy"
              element={<TrainingConsultancy />}
            />
            <Route path="research/scholars" element={<ResearchScholars />} />
            <Route path="research/projects" element={<ResearchProjects />} />
            <Route path="research/patents" element={<Patents />} />

            {/* Contact Page */}
            <Route path="contact" element={<ICTContact />} />
          </Route>





          <Route path="/schools/humanities" element={<SchoolsLayout />}>
            {/* Humanities Home Page */}
            <Route index element={<Humanities />} />

            {/* Faculty */}
            <Route path="faculty" element={<ICTFaculty />} />

            {/* About Section */}
            <Route
              path="about/coeidrone"
              element={<h1>COE Drone - Coming Soon</h1>}
            />
            <Route path="about/dean" element={<Dean />} />
            <Route
              path="about/coeiraem"
              element={<h1>COE IRAEM - Coming Soon</h1>}
            />
            <Route path="about/board" element={<BoardOfStudies />} />
            <Route path="about/staff" element={<h1>Staff - Coming Soon</h1>} />
            <Route path="about/labs" element={<LaboratoryCards />} />
            <Route path="about/activities" element={<Conferences />} />

            {/* Departments */}
            <Route path="departments/cse" element={<CSE />} />
            <Route path="departments/it" element={<IT />} />
            <Route path="departments/ece" element={<ECE />} />

            {/* Research Section */}
            <Route path="research/profile" element={<ResearchArea />} />
            <Route
              path="research/consultancy"
              element={<TrainingConsultancy />}
            />
            <Route path="research/scholars" element={<ResearchScholars />} />
            <Route path="research/projects" element={<ResearchProjects />} />
            <Route path="research/patents" element={<Patents />} />

            {/* Contact Page */}
            <Route path="contact" element={<ICTContact />} />
          </Route>





          <Route path="/schools/vocational" element={<SchoolsLayout />}>
            {/* Vocational Home Page */}
            <Route index element={<Vocational />} />

            {/* Faculty */}
            <Route path="faculty" element={<ICTFaculty />} />

            {/* About Section */}
            <Route
              path="about/coeidrone"
              element={<h1>COE Drone - Coming Soon</h1>}
            />
            <Route path="about/dean" element={<Dean />} />
            <Route
              path="about/coeiraem"
              element={<h1>COE IRAEM - Coming Soon</h1>}
            />
            <Route path="about/board" element={<BoardOfStudies />} />
            <Route path="about/staff" element={<h1>Staff - Coming Soon</h1>} />
            <Route path="about/labs" element={<LaboratoryCards />} />
            <Route path="about/activities" element={<Conferences />} />

            {/* Departments */}
            <Route path="departments/cse" element={<CSE />} />
            <Route path="departments/it" element={<IT />} />
            <Route path="departments/ece" element={<ECE />} />

            {/* Research Section */}
            <Route path="research/profile" element={<ResearchArea />} />
            <Route
              path="research/consultancy"
              element={<TrainingConsultancy />}
            />
            <Route path="research/scholars" element={<ResearchScholars />} />
            <Route path="research/projects" element={<ResearchProjects />} />
            <Route path="research/patents" element={<Patents />} />

            {/* Contact Page */}
            <Route path="contact" element={<ICTContact />} />
          </Route>



          {/* ------------------------------------------------------------------------------------------------------------------ */}




          {/* Admissions Routes */}
          <Route
            path="/admissions/admission-process"
            element={<AdmissionProcess />}
          />
          <Route
            path="/admissions/courses-offered"
            element={<CoursesOffered />}
          />
          <Route
            path="/admissions/eligibility-reservation"
            element={<EligibilityReservation />}
          />
          <Route
            path="/admissions/fee-structure-prospectus"
            element={<FeeStructure />}
          />
          <Route
            path="/admissions/international-admissions"
            element={<InternationalAdmissions />}
          />

          <Route
            path="/research/research-centers"
            element={<ResearchCenters />}
          />
          <Route path="/research/publications-patents" element={<Index />} />
          <Route path="/research/incubation" element={<Incubation />} />
          <Route path="/research/institution-innovation" element={<InstitutionInnovation />} />
          <Route path="/research/ipr-cell" element={<Ipr />} />

          {/* Campus Life Routes */}
          <Route
            path="/campus-life/hostel-facilities"
            element={<HostelDining />}
          />
          <Route path="/campus-life/hostel-detailed" element={<HostelDetailed />} />
          <Route path="/campus-life/hero" element={<Overview />} />
          <Route
            path="/campus-life/sports-fitness"
            element={<SportsCultural />}
          />

          <Route
            path="/campus-life/clubs-societies"
            element={<ClubsMain />}
          />
          <Route path="/club/:clubId" element={<ClubDetail />} />
          <Route path="/campus-life/NSS" element={<NSS />} />
          <Route path="/campus-life/NCC" element={<NCC />} />

          <Route
            path="/campus-life/meditation-center"
            element={<MeditationCenter />}
          />

          {/* Announcements Routes */}
          <Route
            path="/announcements/news-notifications"
            element={<NewsNotifications />}
          />
          <Route
            path="/announcements/news-notifications/:id"
            element={<NewsDetail />}
          />
          <Route
            path="/announcements/event-calendar"
            element={<EventsPage />}
          />
          <Route
            path="/announcements/event-calendar/:id"
            element={<EventDetail />}
          />
          <Route path="/announcements/notices" element={<Notice />} />
          <Route path="/announcements/notices/:id" element={<NoticeDetail />} />
          <Route
            path="/announcements/media-gallery"
            element={<MediaGallery />}
          />

          <Route
            path="/announcements/newsletter"
            element={<NewsLetter />}
          />

          {/* Placements Routes */}
          <Route path="/placements" element={<Placement_home />} />

          {/* Alumni Routes */}
          <Route path="/alumni/alumni-network" element={<AlumniNetwork />} />
          <Route path="/alumni/alumni-events" element={<EventsReunions />} />
          <Route
            path="/alumni/success-stories"
            element={<SuccessStories />}
          />
          <Route
            path="/alumni/become-mentor"
            element={<AlumniRegistration />}
          />

          {/* Grievance  */}
          <Route path="/grievance" element={<GrievanceMain />} />
          <Route path="/login/:role" element={<Login />} />
          <Route
            path="/student"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/staff"
            element={
              <ProtectedRoute allowedRoles={["staff"]}>
                <StaffDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faculty-dashboard"
            element={
              <ProtectedRoute allowedRoles={["faculty"]}>
                <FacultyDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/complaint/:id" element={<ComplaintDetail />} />
          <Route path="/track" element={<TrackComplaint />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/escalation-policy" element={<EscalationPolicy />} />


          {/* <Route path="/dacMain" element={<DACmain/>}/> */}
          <Route path="/dac" element={<DAC />} />




          <Route path="/booking" element={<BookingMain />} />
          <Route path="/booking/:facilityId" element={<FacilityBookingPage />} />





          <Route path="/tender" element={<TenderMain />} />


          <Route path="/rti" element={<RTI />} />
          <Route path="/contactUs" element={<ContactBanner />} />


          <Route path="/recruitments" element={<RecruitMain />} />


          <Route path="/sitemapMain" element={<SitemapMain />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/sitemapAbout" element={<SitemapAbout />} />
          <Route path="/sitemapContact" element={<SitemapContact />} />
          <Route path="/sitemapAcademics" element={<SitemapAcademics />} />

          <Route path="/contactDirectory" element={<ContactDirectory/>}/>

          {/* Course Details Routes - Dynamic Course Pages */}
          <Route path="/schools/departments/courseDetailed" element={<CourseDetails />} />
          {/* <Route path="/schools/departments/courseDetailed/:school/:course" element={<CourseDetails />} /> */}

        </Routes>
      </AuthProvider>
    </Suspense>
  );
}
