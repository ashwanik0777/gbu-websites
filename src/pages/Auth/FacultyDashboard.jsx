import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Save,
  RotateCcw,
  User,
  Mail,
  Phone,
  Building2,
  GraduationCap,
  BookOpen,
  Globe,
  Plus,
  Trash2,
  ExternalLink,
  LogOut,
} from "lucide-react";
import {
  DUMMY_FACULTY_DETAIL,
  DUMMY_FACULTY_ID,
  FACULTY_PROFILE_STORAGE_PREFIX,
} from "../../Data/facultyDummyData";

const STORAGE_KEY = `${FACULTY_PROFILE_STORAGE_PREFIX}${DUMMY_FACULTY_ID}`;

const deepClone = (value) => JSON.parse(JSON.stringify(value));

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
    };
  } catch {
    return deepClone(DUMMY_FACULTY_DETAIL);
  }
};

const Field = ({ label, children }) => (
  <div>
    <label className="mb-1 block text-sm font-medium text-stone-700">{label}</label>
    {children}
  </div>
);

const inputClass =
  "w-full rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 outline-none transition focus:border-stone-700";

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(getInitialProfile);
  const [message, setMessage] = useState("");
  const [newAreaTitle, setNewAreaTitle] = useState("");
  const [newAreaDesc, setNewAreaDesc] = useState("");
  const [tagsInput, setTagsInput] = useState(
    Array.isArray(getInitialProfile().tags) ? getInitialProfile().tags.join(", ") : ""
  );
  const [activeSection, setActiveSection] = useState("dashboard-header");

  const sidebarSections = [
    { id: "dashboard-header", label: "Dashboard", icon: Building2 },
    { id: "personal-details", label: "Personal Details", icon: User },
    { id: "contact-links", label: "Contact & Links", icon: Phone },
    { id: "academic-content", label: "Academic Content", icon: GraduationCap },
    { id: "research-areas", label: "Research Areas", icon: BookOpen },
    { id: "profile-preview", label: "Public Preview", icon: Globe },
  ];

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
    const parsedTags = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    setProfile((prev) => ({ ...prev, tags: parsedTags }));
    setMessage("");
  };

  const updateResearchArea = (index, key, value) => {
    setProfile((prev) => {
      const updated = [...prev.researchAreas];
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
        ...prev.researchAreas,
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
      researchAreas: prev.researchAreas.filter((_, i) => i !== index),
    }));
    setMessage("");
  };

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    setMessage("Profile updated successfully. Open faculty detail page to see latest changes.");
  };

  const handleReset = () => {
    setProfile(deepClone(DUMMY_FACULTY_DETAIL));
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
      const candidates = sidebarSections
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
    <div className="min-h-screen bg-stone-100 p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        <aside className="lg:sticky lg:top-6 lg:h-fit lg:w-72">
          <div className="rounded-2xl border border-stone-300 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">Faculty Navigation</h2>
            <div className="mt-3 space-y-2">
              {sidebarSections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition ${
                      isActive
                        ? "bg-stone-900 text-white"
                        : "bg-white text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {section.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 rounded-xl border border-stone-200 bg-stone-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">Quick Actions</p>
              <div className="mt-2 space-y-2">
                <button
                  onClick={handleSave}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-stone-900 px-3 py-2 text-sm font-semibold text-white hover:bg-stone-800"
                >
                  <Save className="h-4 w-4" /> Save
                </button>
                <button
                  onClick={() => navigate(`/academics/faculty/${DUMMY_FACULTY_ID}`)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
                >
                  <ExternalLink className="h-4 w-4" /> View Public Profile
                </button>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1 space-y-6">
        <header id="dashboard-header" className="rounded-3xl border border-stone-300 bg-white p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">Faculty Portal</p>
              <h1 className="mt-1 text-2xl font-bold text-stone-900 md:text-3xl">Faculty Dashboard</h1>
              <p className="mt-1 text-sm text-stone-600">
                Update all profile fields here. These updates will reflect on the public Faculty Detail page.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => navigate(`/academics/faculty/${DUMMY_FACULTY_ID}`)}
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                <ExternalLink className="h-4 w-4" />
                Open Detail Page
              </button>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
              <button
                onClick={handleSave}
                className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-3 py-2 text-sm font-semibold text-white hover:bg-stone-800"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
              <button
                onClick={() => navigate("/login")}
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
          {message ? <p className="mt-3 text-sm font-medium text-emerald-700">{message}</p> : null}
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summary.map((item) => (
            <div key={item.label} className="rounded-2xl border border-stone-300 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-stone-500">{item.label}</p>
              <p className="mt-1 text-lg font-bold text-stone-900">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div id="personal-details" className="rounded-2xl border border-stone-300 bg-white p-5 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
              <User className="h-5 w-5" /> Personal Details
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full Name">
                <input className={inputClass} value={profile.name || ""} onChange={(e) => updateField("name", e.target.value)} />
              </Field>
              <Field label="Designation">
                <input className={inputClass} value={profile.designation || ""} onChange={(e) => updateField("designation", e.target.value)} />
              </Field>
              <Field label="Specialization">
                <input className={inputClass} value={profile.specialization || ""} onChange={(e) => updateField("specialization", e.target.value)} />
              </Field>
              <Field label="Department">
                <input className={inputClass} value={profile.department || ""} onChange={(e) => updateField("department", e.target.value)} />
              </Field>
              <Field label="School">
                <input className={inputClass} value={profile.school || ""} onChange={(e) => updateField("school", e.target.value)} />
              </Field>
              <Field label="Experience (Years)">
                <input
                  className={inputClass}
                  type="number"
                  min="0"
                  value={profile.experience_years || 0}
                  onChange={(e) => updateField("experience_years", Number(e.target.value || 0))}
                />
              </Field>
              <Field label="Total Publications">
                <input
                  className={inputClass}
                  type="number"
                  min="0"
                  value={profile.publications || 0}
                  onChange={(e) => updateField("publications", Number(e.target.value || 0))}
                />
              </Field>
            </div>
          </div>

          <div id="contact-links" className="rounded-2xl border border-stone-300 bg-white p-5 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
              <Mail className="h-5 w-5" /> Contact & Links
            </h2>
            <div className="space-y-4">
              <Field label="Email">
                <input className={inputClass} value={profile.email || ""} onChange={(e) => updateField("email", e.target.value)} />
              </Field>
              <Field label="Phone">
                <input className={inputClass} value={profile.phone || ""} onChange={(e) => updateField("phone", e.target.value)} />
              </Field>
              <Field label="Office">
                <input className={inputClass} value={profile.office || ""} onChange={(e) => updateField("office", e.target.value)} />
              </Field>
              <Field label="Faculty Profile URL">
                <input className={inputClass} value={profile.faculty_url || ""} onChange={(e) => updateField("faculty_url", e.target.value)} />
              </Field>
              <Field label="Profile Image URL">
                <input className={inputClass} value={profile.image_url || ""} onChange={(e) => updateField("image_url", e.target.value)} />
              </Field>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="CV Link">
                  <input className={inputClass} value={profile.cv || ""} onChange={(e) => updateField("cv", e.target.value)} />
                </Field>
                <Field label="Google Scholar Link">
                  <input className={inputClass} value={profile.googleScholar || ""} onChange={(e) => updateField("googleScholar", e.target.value)} />
                </Field>
              </div>
              <Field label="ORCID Link">
                <input className={inputClass} value={profile.orcid || ""} onChange={(e) => updateField("orcid", e.target.value)} />
              </Field>
              <Field label="Profile Tags (comma separated)">
                <input
                  className={inputClass}
                  value={tagsInput}
                  onChange={(e) => updateTags(e.target.value)}
                  placeholder="PhD, AI, Research Mentor"
                />
              </Field>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div id="academic-content" className="rounded-2xl border border-stone-300 bg-white p-5 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
              <GraduationCap className="h-5 w-5" /> Academic Content
            </h2>
            <div className="space-y-4">
              <Field label="Education Summary">
                <input className={inputClass} value={profile.education || ""} onChange={(e) => updateField("education", e.target.value)} />
              </Field>
              <Field label="Short Bio">
                <textarea
                  className={`${inputClass} min-h-24`}
                  value={profile.shortBio || ""}
                  onChange={(e) => updateField("shortBio", e.target.value)}
                />
              </Field>
              <Field label="Full Bio">
                <textarea
                  className={`${inputClass} min-h-36`}
                  value={profile.fullBio || ""}
                  onChange={(e) => updateField("fullBio", e.target.value)}
                />
              </Field>
            </div>
          </div>

          <div id="research-areas" className="rounded-2xl border border-stone-300 bg-white p-5 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
              <BookOpen className="h-5 w-5" /> Research Areas
            </h2>

            <div className="space-y-3">
              {profile.researchAreas?.map((area, index) => (
                <div key={`area-${index}`} className="rounded-xl border border-stone-200 p-3">
                  <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                    <div className="space-y-3">
                      <input
                        className={inputClass}
                        value={area.title || ""}
                        onChange={(e) => updateResearchArea(index, "title", e.target.value)}
                        placeholder="Area title"
                      />
                      <textarea
                        className={`${inputClass} min-h-20`}
                        value={area.description || ""}
                        onChange={(e) => updateResearchArea(index, "description", e.target.value)}
                        placeholder="Area description"
                      />
                    </div>
                    <button
                      onClick={() => removeResearchArea(index)}
                      className="inline-flex h-10 items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 text-sm font-medium text-rose-700 hover:bg-rose-100"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-stone-200 bg-stone-50 p-3">
              <p className="mb-3 text-sm font-semibold text-stone-700">Add New Research Area</p>
              <div className="grid gap-3">
                <input
                  className={inputClass}
                  value={newAreaTitle}
                  onChange={(e) => setNewAreaTitle(e.target.value)}
                  placeholder="Title"
                />
                <textarea
                  className={`${inputClass} min-h-20`}
                  value={newAreaDesc}
                  onChange={(e) => setNewAreaDesc(e.target.value)}
                  placeholder="Description"
                />
                <button
                  onClick={addResearchArea}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-3 py-2 text-sm font-semibold text-white hover:bg-stone-800"
                >
                  <Plus className="h-4 w-4" />
                  Add Area
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="profile-preview" className="rounded-2xl border border-stone-300 bg-white p-5 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
            <Globe className="h-5 w-5" /> Public Profile Preview
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-stone-200 p-3">
              <p className="text-xs uppercase text-stone-500">Name</p>
              <p className="font-semibold text-stone-900">{profile.name}</p>
            </div>
            <div className="rounded-xl border border-stone-200 p-3">
              <p className="text-xs uppercase text-stone-500">Designation</p>
              <p className="font-semibold text-stone-900">{profile.designation}</p>
            </div>
            <div className="rounded-xl border border-stone-200 p-3">
              <p className="text-xs uppercase text-stone-500">Email</p>
              <p className="font-semibold text-stone-900">{profile.email}</p>
            </div>
            <div className="rounded-xl border border-stone-200 p-3">
              <p className="text-xs uppercase text-stone-500">Phone</p>
              <p className="font-semibold text-stone-900">{profile.phone}</p>
            </div>
            <div className="rounded-xl border border-stone-200 p-3">
              <p className="text-xs uppercase text-stone-500">Department</p>
              <p className="font-semibold text-stone-900">{profile.department}</p>
            </div>
            <div className="rounded-xl border border-stone-200 p-3">
              <p className="text-xs uppercase text-stone-500">Office</p>
              <p className="font-semibold text-stone-900">{profile.office}</p>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
