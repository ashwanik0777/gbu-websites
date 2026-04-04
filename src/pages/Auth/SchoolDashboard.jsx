import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  LogOut,
  ExternalLink,
  Megaphone,
  LayoutTemplate,
  GraduationCap,
  Users,
  BookOpen,
} from "lucide-react";
import {
  DEFAULT_SCHOOL_DASHBOARD_DATA,
  SCHOOL_DASHBOARD_STORAGE_KEY,
} from "../../Data/schoolDashboardData";

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const getInitialSchoolData = () => {
  try {
    const raw = localStorage.getItem(SCHOOL_DASHBOARD_STORAGE_KEY);
    if (!raw) return deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA);
    const parsed = JSON.parse(raw);
    return {
      ...deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA),
      ...parsed,
      highlights: Array.isArray(parsed.highlights)
        ? parsed.highlights
        : deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.highlights),
      departments: Array.isArray(parsed.departments)
        ? parsed.departments
        : deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.departments),
      pages: Array.isArray(parsed.pages)
        ? parsed.pages
        : deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.pages),
      announcements: Array.isArray(parsed.announcements)
        ? parsed.announcements
        : deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.announcements),
    };
  } catch {
    return deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA);
  }
};

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-700";

const cardClass = "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm";

const Field = ({ label, children }) => (
  <div>
    <label className="mb-1 block text-sm font-medium text-slate-700">{label}</label>
    {children}
  </div>
);

const SchoolDashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(getInitialSchoolData);
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState("school-overview");
  const [newHighlight, setNewHighlight] = useState("");
  const [newAnnouncement, setNewAnnouncement] = useState("");

  const sections = [
    { id: "school-overview", label: "Overview", icon: Building2 },
    { id: "school-profile", label: "School Profile", icon: BookOpen },
    { id: "departments", label: "Departments", icon: GraduationCap },
    { id: "pages", label: "Pages & Ownership", icon: LayoutTemplate },
    { id: "announcements", label: "Announcements", icon: Megaphone },
  ];

  const summary = useMemo(
    () => [
      { label: "Departments", value: data.departments.length, icon: GraduationCap },
      { label: "Managed Pages", value: data.pages.length, icon: LayoutTemplate },
      { label: "Highlights", value: data.highlights.length, icon: Users },
      { label: "Announcements", value: data.announcements.length, icon: Megaphone },
    ],
    [data]
  );

  const updateField = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setMessage("");
  };

  const updateDepartment = (index, key, value) => {
    setData((prev) => {
      const departments = [...prev.departments];
      departments[index] = { ...departments[index], [key]: value };
      return { ...prev, departments };
    });
    setMessage("");
  };

  const updateDepartmentListField = (index, key, rawValue) => {
    const parsed = rawValue
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    updateDepartment(index, key, parsed);
  };

  const addDepartment = () => {
    setData((prev) => ({
      ...prev,
      departments: [
        ...prev.departments,
        {
          id: `dept-${Date.now()}`,
          name: "",
          code: "",
          hod: "",
          contactEmail: "",
          contactPhone: "",
          about: "",
          programs: [],
          labs: [],
          notices: [],
          researchAreas: [],
          facultyPagePath: "/schools/ict/faculty",
          profilePath: "/schools/ict/departments/cse",
        },
      ],
    }));
    setMessage("");
  };

  const removeDepartment = (index) => {
    setData((prev) => ({
      ...prev,
      departments: prev.departments.filter((_, i) => i !== index),
    }));
    setMessage("");
  };

  const togglePageStatus = (index) => {
    setData((prev) => {
      const pages = [...prev.pages];
      pages[index] = {
        ...pages[index],
        status: pages[index].status === "published" ? "draft" : "published",
      };
      return { ...prev, pages };
    });
    setMessage("");
  };

  const updatePage = (index, key, value) => {
    setData((prev) => {
      const pages = [...prev.pages];
      pages[index] = { ...pages[index], [key]: value };
      return { ...prev, pages };
    });
    setMessage("");
  };

  const addHighlight = () => {
    if (!newHighlight.trim()) return;
    setData((prev) => ({ ...prev, highlights: [...prev.highlights, newHighlight.trim()] }));
    setNewHighlight("");
    setMessage("");
  };

  const removeHighlight = (index) => {
    setData((prev) => ({
      ...prev,
      highlights: prev.highlights.filter((_, i) => i !== index),
    }));
    setMessage("");
  };

  const addAnnouncement = () => {
    if (!newAnnouncement.trim()) return;
    setData((prev) => ({
      ...prev,
      announcements: [
        ...prev.announcements,
        { id: `ann-${Date.now()}`, text: newAnnouncement.trim(), active: true },
      ],
    }));
    setNewAnnouncement("");
    setMessage("");
  };

  const removeAnnouncement = (index) => {
    setData((prev) => ({
      ...prev,
      announcements: prev.announcements.filter((_, i) => i !== index),
    }));
    setMessage("");
  };

  const toggleAnnouncement = (index) => {
    setData((prev) => {
      const announcements = [...prev.announcements];
      announcements[index] = { ...announcements[index], active: !announcements[index].active };
      return { ...prev, announcements };
    });
    setMessage("");
  };

  const saveAll = () => {
    localStorage.setItem(SCHOOL_DASHBOARD_STORAGE_KEY, JSON.stringify(data));
    setMessage("School dashboard data saved successfully.");
  };

  const resetAll = () => {
    setData(deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA));
    localStorage.removeItem(SCHOOL_DASHBOARD_STORAGE_KEY);
    setMessage("School dashboard reset to default data.");
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveSection(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        <aside className="lg:sticky lg:top-0 lg:w-72 lg:min-h-screen lg:self-start">
          <div className="flex h-full min-h-screen flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">School Navigation</h2>
            <p className="mt-1 text-xs text-slate-500">School and department management</p>

            <div className="mt-3 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                      isActive
                        ? "bg-slate-900 text-white shadow"
                        : "bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {section.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-auto rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Quick Actions</p>
              <div className="mt-2 space-y-2">
                <button
                  onClick={saveAll}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  <Save className="h-4 w-4" /> Save All
                </button>
                <button
                  onClick={resetAll}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  <RotateCcw className="h-4 w-4" /> Reset
                </button>
                <button
                  onClick={() => navigate("/academics/schools")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  <ExternalLink className="h-4 w-4" /> View Schools Page
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 hover:bg-rose-100"
                >
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 space-y-6">
          <section id="school-overview" className={cardClass}>
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">School Dashboard</h1>
            <p className="mt-1 text-sm text-slate-600">
              Manage school profile, departments, pages, and announcements from one place.
            </p>
            {message ? <p className="mt-3 text-sm font-medium text-emerald-700">{message}</p> : null}
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {summary.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className={cardClass}>
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                    <Icon className="h-4 w-4 text-slate-500" />
                  </div>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
                </div>
              );
            })}
          </section>

          <section id="school-profile" className={cardClass}>
            <h2 className="mb-4 text-lg font-semibold text-slate-900">School Profile</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="School Name">
                <input className={inputClass} value={data.schoolName} onChange={(e) => updateField("schoolName", e.target.value)} />
              </Field>
              <Field label="School Code">
                <input className={inputClass} value={data.schoolCode} onChange={(e) => updateField("schoolCode", e.target.value)} />
              </Field>
              <Field label="Dean Name">
                <input className={inputClass} value={data.deanName} onChange={(e) => updateField("deanName", e.target.value)} />
              </Field>
              <Field label="Official Email">
                <input className={inputClass} value={data.email} onChange={(e) => updateField("email", e.target.value)} />
              </Field>
              <Field label="Phone">
                <input className={inputClass} value={data.phone} onChange={(e) => updateField("phone", e.target.value)} />
              </Field>
              <Field label="Website URL">
                <input className={inputClass} value={data.websiteUrl} onChange={(e) => updateField("websiteUrl", e.target.value)} />
              </Field>
              <Field label="Banner Image URL">
                <input className={inputClass} value={data.bannerImage} onChange={(e) => updateField("bannerImage", e.target.value)} />
              </Field>
              <Field label="Address">
                <input className={inputClass} value={data.address} onChange={(e) => updateField("address", e.target.value)} />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="School Description">
                <textarea
                  className={`${inputClass} min-h-24`}
                  value={data.schoolDescription}
                  onChange={(e) => updateField("schoolDescription", e.target.value)}
                />
              </Field>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-sm font-semibold text-slate-700">Highlights</p>
              <div className="flex flex-wrap gap-2">
                {data.highlights.map((item, index) => (
                  <span key={`hl-${index}`} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700">
                    {item}
                    <button onClick={() => removeHighlight(index)} className="text-rose-600 hover:text-rose-700">
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <input
                  className={inputClass}
                  value={newHighlight}
                  onChange={(e) => setNewHighlight(e.target.value)}
                  placeholder="Add highlight"
                />
                <button
                  onClick={addHighlight}
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  <Plus className="h-4 w-4" /> Add
                </button>
              </div>
            </div>
          </section>

          <section id="departments" className={cardClass}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Departments</h2>
              <button
                onClick={addDepartment}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <Plus className="h-4 w-4" /> Add Department
              </button>
            </div>

            <div className="space-y-4">
              {data.departments.map((dept, index) => (
                <div key={dept.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-800">Department #{index + 1}</p>
                    <button
                      onClick={() => removeDepartment(index)}
                      className="inline-flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700 hover:bg-rose-100"
                    >
                      <Trash2 className="h-3 w-3" /> Remove
                    </button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Department Name">
                      <input className={inputClass} value={dept.name} onChange={(e) => updateDepartment(index, "name", e.target.value)} />
                    </Field>
                    <Field label="Department Code">
                      <input className={inputClass} value={dept.code} onChange={(e) => updateDepartment(index, "code", e.target.value)} />
                    </Field>
                    <Field label="HOD Name">
                      <input className={inputClass} value={dept.hod} onChange={(e) => updateDepartment(index, "hod", e.target.value)} />
                    </Field>
                    <Field label="Contact Email">
                      <input className={inputClass} value={dept.contactEmail} onChange={(e) => updateDepartment(index, "contactEmail", e.target.value)} />
                    </Field>
                    <Field label="Contact Phone">
                      <input className={inputClass} value={dept.contactPhone} onChange={(e) => updateDepartment(index, "contactPhone", e.target.value)} />
                    </Field>
                    <Field label="Department Profile Path">
                      <input className={inputClass} value={dept.profilePath} onChange={(e) => updateDepartment(index, "profilePath", e.target.value)} />
                    </Field>
                  </div>

                  <div className="mt-4 space-y-3">
                    <Field label="About Department">
                      <textarea
                        className={`${inputClass} min-h-20`}
                        value={dept.about}
                        onChange={(e) => updateDepartment(index, "about", e.target.value)}
                      />
                    </Field>
                    <Field label="Programs (comma separated)">
                      <input
                        className={inputClass}
                        value={dept.programs.join(", ")}
                        onChange={(e) => updateDepartmentListField(index, "programs", e.target.value)}
                      />
                    </Field>
                    <Field label="Labs (comma separated)">
                      <input
                        className={inputClass}
                        value={dept.labs.join(", ")}
                        onChange={(e) => updateDepartmentListField(index, "labs", e.target.value)}
                      />
                    </Field>
                    <Field label="Notices (comma separated)">
                      <input
                        className={inputClass}
                        value={dept.notices.join(", ")}
                        onChange={(e) => updateDepartmentListField(index, "notices", e.target.value)}
                      />
                    </Field>
                    <Field label="Research Areas (comma separated)">
                      <input
                        className={inputClass}
                        value={dept.researchAreas.join(", ")}
                        onChange={(e) => updateDepartmentListField(index, "researchAreas", e.target.value)}
                      />
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="pages" className={cardClass}>
            <h2 className="mb-4 text-lg font-semibold text-slate-900">School / Department Pages</h2>
            <div className="space-y-3">
              {data.pages.map((page, index) => (
                <div key={page.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    <Field label="Page Name">
                      <input className={inputClass} value={page.name} onChange={(e) => updatePage(index, "name", e.target.value)} />
                    </Field>
                    <Field label="Route Path">
                      <input className={inputClass} value={page.path} onChange={(e) => updatePage(index, "path", e.target.value)} />
                    </Field>
                    <Field label="Owner">
                      <input className={inputClass} value={page.owner} onChange={(e) => updatePage(index, "owner", e.target.value)} />
                    </Field>
                    <Field label="Status">
                      <button
                        onClick={() => togglePageStatus(index)}
                        className={`w-full rounded-xl border px-3 py-2 text-sm font-medium ${
                          page.status === "published"
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border-amber-200 bg-amber-50 text-amber-700"
                        }`}
                      >
                        {page.status}
                      </button>
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="announcements" className={cardClass}>
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Announcements</h2>
            <div className="space-y-3">
              {data.announcements.map((item, index) => (
                <div key={item.id} className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-slate-700">{item.text}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleAnnouncement(index)}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${
                        item.active
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 bg-white text-slate-600"
                      }`}
                    >
                      {item.active ? "Active" : "Inactive"}
                    </button>
                    <button
                      onClick={() => removeAnnouncement(index)}
                      className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-medium text-rose-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex gap-2">
              <input
                className={inputClass}
                value={newAnnouncement}
                onChange={(e) => setNewAnnouncement(e.target.value)}
                placeholder="Add new announcement"
              />
              <button
                onClick={addAnnouncement}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <Plus className="h-4 w-4" /> Add
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SchoolDashboard;
