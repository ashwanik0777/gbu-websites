import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimpleLayout from '../../components/faculty/SimpleLayout';
import FacultyHeader from '../../components/faculty/FacultyHeader';
import SummaryDashboard from '../../components/faculty/SummaryDashboard';
import FacultyTabs from '../../components/faculty/FacultyTabs';
import TabContent from '../../components/faculty/TabContent';
import { TrendingUp, BookOpenCheck, Presentation, FolderOpen, FileText, FlaskConical, GraduationCap, Newspaper } from 'lucide-react';
import { DUMMY_FACULTY_ID, DUMMY_FACULTY_DETAIL, FACULTY_PROFILE_STORAGE_PREFIX } from '../../Data/facultyDummyData';
import { fetchFacultyPublicProfile } from '../../services/facultyDashboardService';

import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

const FacultyDetail = () => {
  const getSavedDummyProfile = () => {
    try {
      const raw = localStorage.getItem(`${FACULTY_PROFILE_STORAGE_PREFIX}${DUMMY_FACULTY_ID}`);
      if (!raw) return DUMMY_FACULTY_DETAIL;
      return { ...DUMMY_FACULTY_DETAIL, ...JSON.parse(raw) };
    } catch {
      return DUMMY_FACULTY_DETAIL;
    }
  };

  const { id } = useParams();
  const [faculty, setFaculty] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  const normalizeFacultyProfile = (member) => ({
    ...member,
    image_url: member.image_url,
    experience: `${member.experience_years || 0} years`,
    bio: member.faculty_url ? `View detailed profile here: ${member.faculty_url}` : '',
    shortBio: member.shortBio || member.bio || 'Faculty profile is available.',
    fullBio: member.fullBio || member.bio || 'Faculty profile details are available.',
    qualifications: member.qualifications || [member.education].filter(Boolean),
    experiences: member.experiences || [],
    researchInterests: member.researchInterests || [],
    courses: member.courses || [],
    administrations: member.administrations || [],
    achievements: member.achievements || [],
    recentPublications: member.recentPublications || [],
    projects: member.projects || [],
    researchGroup: member.researchGroup || [],
    patents: member.patents || [],
    certifications: member.certifications || [],
    invitedTalks: member.invitedTalks || [],
    socialImpact: member.socialImpact || [],
    quickLinks: member.quickLinks || [
      { label: 'Curriculum Vitae', icon: FileText, color: 'blue' },
      { label: 'Research Profile', icon: FlaskConical, color: 'green' },
      { label: 'Teaching Profile', icon: GraduationCap, color: 'purple' },
      { label: 'Publications', icon: Newspaper, color: 'orange' }
    ]
  });

  useEffect(() => {
    const fetchFaculty = async () => {
      setLoading(true);
      try {
      
        const backendProfile = await fetchFacultyPublicProfile(id);
        if (backendProfile) {
          setFaculty(normalizeFacultyProfile(backendProfile));
          setLoading(false);
          return;
        }
      } catch (backendErr) {
        console.warn('Backend fetch failed, trying fallbacks:', backendErr?.response?.status);
      }

      try {
        // 2. Try external API
        const res = await fetch(`${import.meta.env.VITE_HOST}/academic/faculty/members/`);
        const data = await res.json();
        const member = data.find((f) => String(f.id) === id);
        if (member) {
          setFaculty(normalizeFacultyProfile(member));
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn('External API fetch failed:', err);
      }

      // 3. Fall back to dummy data
      if (String(id) === String(DUMMY_FACULTY_ID)) {
        setFaculty(normalizeFacultyProfile(getSavedDummyProfile()));
      }
      setLoading(false);
    };

    fetchFaculty();
  }, [id]);

  if (loading || !faculty) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto mb-3" />
          <p className="text-gray-500">Loading faculty profile...</p>
        </div>
      </div>
    );
  }

  const tabItems = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'qualifications', label: 'QUALIFICATIONS & EXPERIENCE' },
    { id: 'teaching', label: 'TEACHING' },
    { id: 'administration', label: 'ADMINISTRATIONS' },
    { id: 'research-projects', label: 'RESEARCH PROJECTS' },
    { id: 'research-group', label: 'RESEARCH GROUP' },
    { id: 'publications', label: 'PUBLICATION' },
    { id: 'patents', label: 'PATENTS' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'talks', label: 'INVITED-TALKS' },
    { id: 'awards', label: 'AWARDS & ACHIEVEMENTS' },
    { id: 'social-impact', label: 'SOCIAL IMPACT' }
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
