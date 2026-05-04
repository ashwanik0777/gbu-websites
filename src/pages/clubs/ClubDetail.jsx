import React, { useEffect, useState } from 'react';
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
import apiClient from '../../services/apiClient';

const toStringList = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return [];
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      try {
        const parsed = JSON.parse(trimmed);
        return Array.isArray(parsed)
          ? parsed.map((item) => String(item).trim()).filter(Boolean)
          : [];
      } catch (error) {
        return [];
      }
    }
    return trimmed
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
};

const toClubViewModel = (rawClub) => {
  const club = rawClub || {};
  const achievements = toStringList(club.achievements);

  return {
    id: club.id,
    name: String(club.name || 'Club').trim(),
    tagline: String(club.tagline || '').trim(),
    category: String(club.category || 'General').trim(),
    logo: String(club.logo || '').trim(),
    banner: String(club.banner || '').trim(),
    memberCount: Number(club.memberCount ?? club.member_count ?? 0),
    description: String(club.description || '').trim(),
    objectives:
      Array.isArray(club.objectives) && club.objectives.length
        ? club.objectives
        : ['Club objectives will be updated soon.'],
    history: String(club.history || 'Club history will be updated soon.').trim(),
    achievements: achievements.length
      ? achievements
      : ['Club achievements will be updated soon.'],
    policies: {
      codeOfConduct: toStringList(club.policies?.codeOfConduct),
      eligibility: toStringList(club.policies?.eligibility),
      responsibilities: toStringList(club.policies?.responsibilities),
      meetingFrequency:
        club.policies?.meetingFrequency || 'Meeting schedule will be updated soon.',
    },
    team: {
      facultyCoordinator: club.team?.facultyCoordinator || null,
      president: club.team?.president || null,
      vicePresident: club.team?.vicePresident || null,
      secretary: club.team?.secretary || null,
      treasurer: club.team?.treasurer || null,
      members: Array.isArray(club.team?.members) ? club.team.members : [],
    },
    events: Array.isArray(club.events) ? club.events : [],
    socialMedia: club.socialMedia || {},
    reports: Array.isArray(club.reports) ? club.reports : [],
    joinFormUrl: String(club.joinFormUrl || '').trim(),
  };
};

const ClubDetail = () => {
  const { clubId } = useParams();
  const fallbackClub = clubsData.find((item) => String(item.id) === String(clubId));
  const [club, setClub] = useState(fallbackClub ? toClubViewModel(fallbackClub) : null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchClub = async () => {
      const parsedId = Number.parseInt(String(clubId), 10);
      const isValidId = Number.isInteger(parsedId) && parsedId > 0;

      if (!isValidId) {
        if (isMounted) {
          setClub(fallbackClub ? toClubViewModel(fallbackClub) : null);
          setIsLoading(false);
        }
        return;
      }

      try {
        const response = await apiClient.get(`/clubs/${parsedId}`);
        const apiClub = response?.data?.data;
        if (!apiClub) {
          throw new Error('Invalid clubs API response');
        }

        const normalizedApiClub = toClubViewModel(apiClub);
        if (!isMounted) {
          return;
        }

        if (fallbackClub) {
          const normalizedFallback = toClubViewModel(fallbackClub);
          setClub(
            toClubViewModel({
              ...normalizedFallback,
              ...normalizedApiClub,
              achievements:
                normalizedApiClub.achievements.length > 0
                  ? normalizedApiClub.achievements
                  : normalizedFallback.achievements,
            }),
          );
        } else {
          setClub(normalizedApiClub);
        }
      } catch (error) {
        if (isMounted) {
          setClub(fallbackClub ? toClubViewModel(fallbackClub) : null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchClub();

    return () => {
      isMounted = false;
    };
  }, [clubId, fallbackClub]);

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50" />;
  }

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
      <ClubHero club={club} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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
