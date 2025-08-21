import React from "react";

import Publications from "./Publications"
import FundedProjects from "./FundedProjects";

import BannerSection from "../../../components/HeroBanner.jsx";
import SearchableWrapper from "../../../components/Searchbar/SearchableWrapper.jsx";

const Index = () => {
  return (
    <SearchableWrapper>
      <>
        <BannerSection
          title="Research & Innovation at GBU"
          subtitle="Driving groundbreaking research and fostering innovation across multiple disciplines. Explore our research excellence, cutting-edge laboratories, and startup ecosystem."
          bgTheme={4} // Pick a theme index from 1-10
        />

        <Publications />

        <FundedProjects />
      </>
    </SearchableWrapper>
  );
};

export default Index;
