import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ClubHero from '../../components/clubs/ClubHero';
import ClubAbout from '../../components/clubs/ClubAbout';
import ClubPolicies from '../../components/clubs/ClubPolicies';
import ClubTeam from '../../components/clubs/ClubTeam';
import ClubEvents from '../../components/clubs/ClubEvents';
import ClubSocialMedia from '../../components/clubs/ClubSocialMedia';
import ClubJoin from '../../components/clubs/ClubJoin';
import ClubReports from '../../components/clubs/ClubReports';
import ClubNavigation from '../../components/clubs/ClubNavigation';
import { clubsData } from '../../components/clubs/data/clubsData';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const ClubDetail = () => {
  const { clubId } = useParams();
  const club = clubsData.find(c => c.id === clubId);

  if (!club) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Club Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <SearchableWrapper>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ClubHero club={club} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            <section id="about">
              <ClubAbout club={club} />
            </section>
            
            <section id="policies">
              <ClubPolicies club={club} />
            </section>
            
            <section id="team">
              <ClubTeam club={club} />
            </section>
            
            <section id="events">
              <ClubEvents club={club} />
            </section>
            
            <section id="reports">
              <ClubReports club={club} />
            </section>
            
            <section id="join">
              <ClubJoin club={club} />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <ClubSocialMedia club={club} />
              <ClubNavigation />
            </div>
          </div>
        </div>
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default ClubDetail;
