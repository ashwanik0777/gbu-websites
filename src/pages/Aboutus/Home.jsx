import WelcomePage from "../../components/home/HeroBanner.jsx";
import QuickLinks from "../../components/home/Quicklink.jsx"
import AboutSection from "../../components/home/Aboutsection.jsx";
import Glance from "../../components/home/Glance.jsx";
import VisionaryLeadership from "../../components/home/Visionary.jsx";
import LatestUpdates from "../../components/home/Latest.jsx";
import CampusGallery from "../../components/home/Gallery.jsx";
import ExcellenceSection from "../../components/home/Education.jsx";
import CampusLifeSection from "../../components/home/Campus.jsx";
import HiringSection from "../../components/home/Placement.jsx";
import VirtualTour from "../../components/home/VirtualTour.jsx";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";
function Home() {
  return (
    <SearchableWrapper>
      <div className="min-h-screen flex flex-col">

        <WelcomePage />
        <QuickLinks />
        <AboutSection />
        <Glance />
        <VisionaryLeadership />
        <LatestUpdates />
        <CampusGallery />
        <ExcellenceSection />
        <CampusLifeSection />

        <HiringSection />
        <VirtualTour />

      </div>
    </SearchableWrapper>
  );
}

export default Home;
