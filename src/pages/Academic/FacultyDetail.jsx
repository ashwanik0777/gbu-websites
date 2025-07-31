import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimpleLayout from '../../components/faculty/SimpleLayout';
import FacultyHeader from '../../components/faculty/FacultyHeader';
import SummaryDashboard from '../../components/faculty/SummaryDashboard';
import FacultyTabs from '../../components/faculty/FacultyTabs';
import TabContent from '../../components/faculty/TabContent';
import { TrendingUp, BookOpenCheck, Presentation, FolderOpen } from 'lucide-react';

import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

const FacultyDetail = () => {
  const { id } = useParams(); // 👈 get id from URL
  const [faculty, setFaculty] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await fetch(`https://meow.tilchattaas.com/academic/faculty/members/`);
        const data = await res.json();
        const member = data.find((f) => String(f.id) === id); // match by ID
        if (member) {
          setFaculty({
            ...member,
            experience: `${member.experience_years} years`,
            bio: `View detailed profile here: ${member.faculty_url}`,
            qualifications: [member.education],
            experiences: [],
            researchInterests: [],
            courses: [],
            administrations: [],
            achievements: [],
            recentPublications: [],
            projects: [],
            researchGroup: [],
            patents: [],
            certifications: [],
            invitedTalks: [],
            socialImpact: [],
          });
        }
      } catch (err) {
        console.error('Error loading faculty:', err);
      }
    };

    fetchFaculty();
  }, [id]);

  if (!faculty) return <div className="p-10 text-center">Loading...</div>;

  const tabItems = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'qualifications', label: 'QUALIFICATIONS & EXPERIENCE' },
    { id: 'teaching', label: 'TEACHING' },
    { id: 'administrations', label: 'ADMINISTRATIONS' },
    { id: 'research', label: 'RESEARCH PROJECTS' },
    { id: 'researchGroup', label: 'RESEARCH GROUP' },
    { id: 'publications', label: 'PUBLICATION' },
    { id: 'patents', label: 'PATENTS' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'invitedTalks', label: 'INVITED-TALKS' },
    { id: 'achievements', label: 'AWARDS & ACHIEVEMENTS' },
    { id: 'socialImpact', label: 'SOCIAL IMPACT' }
  ];

  const summaryStats = [
    {
      icon: TrendingUp,
      value: faculty.experience,
      label: 'Experience',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: BookOpenCheck,
      value: `${faculty.publications || 0}+`,
      label: 'Publications',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Presentation,
      value: `--`,
      label: 'Talks Delivered',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: FolderOpen,
      value: `--`,
      label: 'Projects',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <SearchableWrapper>
    <SimpleLayout>
      <FacultyHeader faculty={faculty} />
      <FacultyTabs tabItems={tabItems} activeTab={activeTab} onTabChange={setActiveTab} />
      <TabContent activeTab={activeTab} profile={faculty} />
    </SimpleLayout>
    </SearchableWrapper>
  );
};

export default FacultyDetail;
