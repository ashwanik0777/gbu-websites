import React from 'react';
import CampusHero from './CampusHero';
import CampusStats from './CampusStats';
import HostelDining from "./HostelDining"
import StudentTestimonials from './StudentTestimonials';
import VirtualTour from "./VirtualTour";
import Header from "./Header";
import ClubsCouncils from './ClubsCouncils';
import Library from './Library';
import SportsCultural from "./SportsCultural";
import CafesFood from "./CafesFood";
import EcoCampus from "./EcoCampus";
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const Overview = () => {
  return (
    <SearchableWrapper>
   <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* <Header /> */}
      <main className="relative">
      <CampusHero />
      <VirtualTour/>
      <CampusStats />
      <HostelDining/>
       
      <Library/>
      <SportsCultural/>
      <CafesFood/>
      <EcoCampus/>
      <StudentTestimonials />
      </main>
    </div>
    </SearchableWrapper>
  );
};

export default Overview;
