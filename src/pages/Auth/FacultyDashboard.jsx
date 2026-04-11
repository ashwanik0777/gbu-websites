import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DUMMY_FACULTY_DETAIL,
  DUMMY_FACULTY_ID,
  FACULTY_PROFILE_STORAGE_PREFIX,
} from "../../Data/facultyDummyData";
import SidebarNav from "../../components/faculty/dashboard/SidebarNav";
import TopSummary from "../../components/faculty/dashboard/TopSummary";
import ProfileForms from "../../components/faculty/dashboard/ProfileForms";
import TabDataEditors from "../../components/faculty/dashboard/TabDataEditors";
import ProfilePreview from "../../components/faculty/dashboard/ProfilePreview";
import {
  deepClone,
  FACULTY_SIDEBAR_SECTIONS,
  parseCommaList,
} from "../../components/faculty/dashboard/constants";

const STORAGE_KEY = `${FACULTY_PROFILE_STORAGE_PREFIX}${DUMMY_FACULTY_ID}`;

const getInitialProfile = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return deepClone(DUMMY_FACULTY_DETAIL);
    const parsed = JSON.parse(raw);
    return {
      ...deepClone(DUMMY_FACULTY_DETAIL),
      ...parsed,
      researchAreas: Array.isArray(parsed.researchAreas)
        ? parsed.researchAreas
        : deepClone(DUMMY_FACULTY_DETAIL.researchAreas),
      tabData: {
        ...deepClone(DUMMY_FACULTY_DETAIL.tabData),
        ...(parsed.tabData || {}),
      },
    };
  } catch {
    return deepClone(DUMMY_FACULTY_DETAIL);
  }
};

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(() => getInitialProfile());
  const [message, setMessage] = useState("");
  const [newAreaTitle, setNewAreaTitle] = useState("");
  const [newAreaDesc, setNewAreaDesc] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [activeSection, setActiveSection] = useState("dashboard-header");

  useEffect(() => {
    setTagsInput(Array.isArray(profile.tags) ? profile.tags.join(", ") : "");
  }, [profile.tags]);

  const summary = useMemo(
    () => [
      { label: "Experience", value: `${profile.experience_years || 0} years` },
      { label: "Publications", value: profile.publications || 0 },
      { label: "Department", value: profile.department || "-" },
      { label: "School", value: profile.school || "-" },
    ],
    [profile]
  );

  const updateField = (key, value) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
    setMessage("");
  };

  const updateTags = (value) => {
    setTagsInput(value);
    setProfile((prev) => ({ ...prev, tags: parseCommaList(value) }));
    setMessage("");
  };

  const updateResearchArea = (index, key, value) => {
    setProfile((prev) => {
      const updated = [...(prev.researchAreas || [])];
      updated[index] = { ...updated[index], [key]: value };
      return { ...prev, researchAreas: updated };
    });
    setMessage("");
  };

  const addResearchArea = () => {
    if (!newAreaTitle.trim() || !newAreaDesc.trim()) return;
    setProfile((prev) => ({
      ...prev,
      researchAreas: [
        ...(prev.researchAreas || []),
        { title: newAreaTitle.trim(), description: newAreaDesc.trim() },
      ],
    }));
    setNewAreaTitle("");
    setNewAreaDesc("");
    setMessage("");
  };

  const removeResearchArea = (index) => {
    setProfile((prev) => ({
      ...prev,
      researchAreas: (prev.researchAreas || []).filter((_, i) => i !== index),
    }));
    setMessage("");
  };

  const replaceTabDataSection = (sectionKey, sectionValue) => {
    setProfile((prev) => ({
      ...prev,
      tabData: {
        ...(prev.tabData || {}),
        [sectionKey]: sectionValue,
      },
    }));
    setMessage("");
  };

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    setMessage("Faculty dashboard data saved successfully.");
  };

  const handleReset = () => {
    const resetData = deepClone(DUMMY_FACULTY_DETAIL);
    setProfile(resetData);
    setTagsInput(Array.isArray(resetData.tags) ? resetData.tags.join(", ") : "");
    localStorage.removeItem(STORAGE_KEY);
    setMessage("Profile reset to default dummy data.");
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    setActiveSection(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const onScroll = () => {
      const candidates = FACULTY_SIDEBAR_SECTIONS
        .map((section) => {
          const element = document.getElementById(section.id);
          if (!element) return null;
          const { top } = element.getBoundingClientRect();
          return { id: section.id, top: Math.abs(top - 120) };
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);

      if (candidates.length) {
        setActiveSection(candidates[0].id);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        <SidebarNav
          sections={FACULTY_SIDEBAR_SECTIONS}
          activeSection={activeSection}
          onSelect={scrollToSection}
          onSave={handleSave}
          onReset={handleReset}
          onViewPublic={() => navigate(`/academics/faculty/${DUMMY_FACULTY_ID}`)}
          onLogout={() => navigate("/login")}
        />

        <div className="flex-1 space-y-6">
          <TopSummary
            profile={profile}
            summary={summary}
            message={message}
            onSave={handleSave}
            onOpenPublic={() => navigate(`/academics/faculty/${DUMMY_FACULTY_ID}`)}
          />

          <ProfileForms
            profile={profile}
            tagsInput={tagsInput}
            onUpdateField={updateField}
            onUpdateTags={updateTags}
            onUpdateResearchArea={updateResearchArea}
            onAddResearchArea={addResearchArea}
            onRemoveResearchArea={removeResearchArea}
            newAreaTitle={newAreaTitle}
            newAreaDesc={newAreaDesc}
            setNewAreaTitle={setNewAreaTitle}
            setNewAreaDesc={setNewAreaDesc}
          />

          <TabDataEditors
            tabData={profile.tabData || {}}
            onReplaceTabData={replaceTabDataSection}
          />

          <ProfilePreview profile={profile} />
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
