import React from "react";
import PlacementBrochure from "./PlacementBrochure";
import InternshipProgrammes from "./InternshipProgrammes";
import PlacementStatistics from "./PlacementStatistics";
import TrainingCareerServices from "./TrainingCareerServices";
import CampusRecruiters from "./CampusRecruiters";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";
import BannerSection from "../../components/HeroBanner";

function Placement_home() {
  return (
    <SearchableWrapper>
      <BannerSection
        title="Placement Cell"
        subtitle="Connecting students with opportunities."
        bgTheme={1}
      />
      <PlacementBrochure />
      <InternshipProgrammes />
      <PlacementStatistics />
      <TrainingCareerServices />
      <CampusRecruiters />
    </SearchableWrapper>
  );
}

export default Placement_home;
