import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Save,
  RotateCcw,
  LogOut,
  ExternalLink,
  Home,
  Users,
  Info,
  GraduationCap,
  FlaskConical,
  Briefcase,
  Phone,
  ChevronRight,
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
      tabContent: {
        ...deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.tabContent),
        ...(parsed.tabContent || {}),
      },
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

const MAIN_TABS = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    subTabs: ["Hero", "Highlights", "Announcements"],
  },
  {
    id: "faculty",
    label: "Faculty",
    icon: Users,
    subTabs: ["Directory", "Leadership", "Featured Faculty"],
  },
  {
    id: "about",
    label: "About Us",
    icon: Info,
    subTabs: ["Overview", "Dean Message", "Board & Staff", "Labs & Activities", "Centers of Excellence"],
  },
  {
    id: "departments",
    label: "Departments & Academic Programs",
    icon: GraduationCap,
    subTabs: ["Department List", "Programs", "Notices"],
  },
  {
    id: "research",
    label: "Research",
    icon: FlaskConical,
    subTabs: ["Profile", "Consultancy", "Scholars", "Projects", "Patents"],
  },
  {
    id: "placement",
    label: "Placement",
    icon: Briefcase,
    subTabs: ["Overview", "Top Recruiters", "Statistics"],
  },
  {
    id: "contact",
    label: "Contact Us",
    icon: Phone,
    subTabs: ["Office Details", "Map & Hours", "Helpdesk"],
  },
];

const SchoolDashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(getInitialSchoolData);
  const [message, setMessage] = useState("");
  const [activeMainTab, setActiveMainTab] = useState("home");
  const [activeSubTab, setActiveSubTab] = useState("Hero");

  const summary = useMemo(
    () => [
      { label: "Departments", value: data.departments.length },
      { label: "Managed Pages", value: data.pages.length },
      { label: "Highlights", value: data.highlights.length },
      { label: "Announcements", value: data.announcements.length },
    ],
    [data]
  );

  const currentMainTab = MAIN_TABS.find((tab) => tab.id === activeMainTab) || MAIN_TABS[0];

  const changeMainTab = (tabId) => {
    const tab = MAIN_TABS.find((item) => item.id === tabId) || MAIN_TABS[0];
    setActiveMainTab(tab.id);
    setActiveSubTab(tab.subTabs[0]);
  };

  const updateField = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setMessage("");
  };

  const updateTabContent = (section, key, value) => {
    setData((prev) => ({
      ...prev,
      tabContent: {
        ...prev.tabContent,
        [section]: {
          ...prev.tabContent[section],
          [key]: value,
        },
      },
    }));
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

  const saveAll = () => {
    localStorage.setItem(SCHOOL_DASHBOARD_STORAGE_KEY, JSON.stringify(data));
    setMessage("School dashboard data saved successfully.");
  };

  const resetAll = () => {
    setData(deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA));
    localStorage.removeItem(SCHOOL_DASHBOARD_STORAGE_KEY);
    setMessage("School dashboard reset to default data.");
  };

  const renderTabBody = () => {
    if (activeMainTab === "home") {
      return (
        <div className={cardClass}>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Home Tab Configuration</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Hero Title">
              <input className={inputClass} value={data.tabContent.home.heroTitle} onChange={(e) => updateTabContent("home", "heroTitle", e.target.value)} />
            </Field>
            <Field label="Hero Subtitle">
              <input className={inputClass} value={data.tabContent.home.heroSubtitle} onChange={(e) => updateTabContent("home", "heroSubtitle", e.target.value)} />
            </Field>
            <Field label="Banner Image URL">
              <input className={inputClass} value={data.bannerImage} onChange={(e) => updateField("bannerImage", e.target.value)} />
            </Field>
            <Field label="School Name">
              <input className={inputClass} value={data.schoolName} onChange={(e) => updateField("schoolName", e.target.value)} />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="School Description">
              <textarea className={`${inputClass} min-h-24`} value={data.schoolDescription} onChange={(e) => updateField("schoolDescription", e.target.value)} />
            </Field>
          </div>
        </div>
      );
    }

    if (activeMainTab === "faculty") {
      return (
        <div className={cardClass}>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Faculty Tab Configuration</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Faculty Page Route">
              <input className={inputClass} value={data.tabContent.faculty.facultyPagePath} onChange={(e) => updateTabContent("faculty", "facultyPagePath", e.target.value)} />
            </Field>
            <Field label="Faculty Intro Title">
              <input className={inputClass} value={data.tabContent.faculty.title} onChange={(e) => updateTabContent("faculty", "title", e.target.value)} />
            </Field>
            <Field label="Total Faculty Count Text">
              <input className={inputClass} value={data.tabContent.faculty.totalFacultyText} onChange={(e) => updateTabContent("faculty", "totalFacultyText", e.target.value)} />
            </Field>
            <Field label="Dean Name">
              <input className={inputClass} value={data.deanName} onChange={(e) => updateField("deanName", e.target.value)} />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Faculty Intro Description">
              <textarea className={`${inputClass} min-h-24`} value={data.tabContent.faculty.description} onChange={(e) => updateTabContent("faculty", "description", e.target.value)} />
            </Field>
          </div>
        </div>
      );
    }

    if (activeMainTab === "about") {
      return (
        <div className={cardClass}>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">About Us Tab Configuration</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="About Intro Title">
              <input className={inputClass} value={data.tabContent.about.introTitle} onChange={(e) => updateTabContent("about", "introTitle", e.target.value)} />
            </Field>
            <Field label="Dean Message Route">
              <input className={inputClass} value={data.tabContent.about.deanPath} onChange={(e) => updateTabContent("about", "deanPath", e.target.value)} />
            </Field>
            <Field label="Board Route">
              <input className={inputClass} value={data.tabContent.about.boardPath} onChange={(e) => updateTabContent("about", "boardPath", e.target.value)} />
            </Field>
            <Field label="Staff Route">
              <input className={inputClass} value={data.tabContent.about.staffPath} onChange={(e) => updateTabContent("about", "staffPath", e.target.value)} />
            </Field>
            <Field label="Labs Route">
              <input className={inputClass} value={data.tabContent.about.labsPath} onChange={(e) => updateTabContent("about", "labsPath", e.target.value)} />
            </Field>
            <Field label="Activities Route">
              <input className={inputClass} value={data.tabContent.about.activitiesPath} onChange={(e) => updateTabContent("about", "activitiesPath", e.target.value)} />
            </Field>
          </div>
          <div className="mt-4 space-y-4">
            <Field label="Overview Text">
              <textarea className={`${inputClass} min-h-24`} value={data.tabContent.about.overviewText} onChange={(e) => updateTabContent("about", "overviewText", e.target.value)} />
            </Field>
            <Field label="Dean Message Text">
              <textarea className={`${inputClass} min-h-24`} value={data.tabContent.about.deanMessage} onChange={(e) => updateTabContent("about", "deanMessage", e.target.value)} />
            </Field>
          </div>
        </div>
      );
    }

    if (activeMainTab === "departments") {
      return (
        <div className={cardClass}>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Departments & Academic Programs</h2>
          <div className="space-y-4">
            {data.departments.map((dept, index) => (
              <div key={dept.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-3 text-sm font-semibold text-slate-800">{dept.name || `Department ${index + 1}`}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Department Name">
                    <input className={inputClass} value={dept.name} onChange={(e) => updateDepartment(index, "name", e.target.value)} />
                  </Field>
                  <Field label="Department Code">
                    <input className={inputClass} value={dept.code} onChange={(e) => updateDepartment(index, "code", e.target.value)} />
                  </Field>
                  <Field label="HOD">
                    <input className={inputClass} value={dept.hod} onChange={(e) => updateDepartment(index, "hod", e.target.value)} />
                  </Field>
                  <Field label="Profile Path">
                    <input className={inputClass} value={dept.profilePath} onChange={(e) => updateDepartment(index, "profilePath", e.target.value)} />
                  </Field>
                </div>
                <div className="mt-3 space-y-3">
                  <Field label="Programs (comma separated)">
                    <input className={inputClass} value={dept.programs.join(", ")} onChange={(e) => updateDepartmentListField(index, "programs", e.target.value)} />
                  </Field>
                  <Field label="Notices (comma separated)">
                    <input className={inputClass} value={dept.notices.join(", ")} onChange={(e) => updateDepartmentListField(index, "notices", e.target.value)} />
                  </Field>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeMainTab === "research") {
      return (
        <div className={cardClass}>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Research Tab Configuration</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Profile Route">
              <input className={inputClass} value={data.tabContent.research.profilePath} onChange={(e) => updateTabContent("research", "profilePath", e.target.value)} />
            </Field>
            <Field label="Consultancy Route">
              <input className={inputClass} value={data.tabContent.research.consultancyPath} onChange={(e) => updateTabContent("research", "consultancyPath", e.target.value)} />
            </Field>
            <Field label="Scholars Route">
              <input className={inputClass} value={data.tabContent.research.scholarsPath} onChange={(e) => updateTabContent("research", "scholarsPath", e.target.value)} />
            </Field>
            <Field label="Projects Route">
              <input className={inputClass} value={data.tabContent.research.projectsPath} onChange={(e) => updateTabContent("research", "projectsPath", e.target.value)} />
            </Field>
            <Field label="Patents Route">
              <input className={inputClass} value={data.tabContent.research.patentsPath} onChange={(e) => updateTabContent("research", "patentsPath", e.target.value)} />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Research Intro Text">
              <textarea className={`${inputClass} min-h-24`} value={data.tabContent.research.introText} onChange={(e) => updateTabContent("research", "introText", e.target.value)} />
            </Field>
          </div>
        </div>
      );
    }

    if (activeMainTab === "placement") {
      return (
        <div className={cardClass}>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Placement Tab Configuration</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Placement Route">
              <input className={inputClass} value={data.tabContent.placement.path} onChange={(e) => updateTabContent("placement", "path", e.target.value)} />
            </Field>
            <Field label="Placement Stats Text">
              <input className={inputClass} value={data.tabContent.placement.statsText} onChange={(e) => updateTabContent("placement", "statsText", e.target.value)} />
            </Field>
            <Field label="Top Recruiters (comma separated)">
              <input className={inputClass} value={data.tabContent.placement.recruiters.join(", ")} onChange={(e) => updateTabContent("placement", "recruiters", e.target.value.split(",").map((x) => x.trim()).filter(Boolean))} />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Placement Overview">
              <textarea className={`${inputClass} min-h-24`} value={data.tabContent.placement.overview} onChange={(e) => updateTabContent("placement", "overview", e.target.value)} />
            </Field>
          </div>
        </div>
      );
    }

    return (
      <div className={cardClass}>
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Contact Us Tab Configuration</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Contact Route">
            <input className={inputClass} value={data.tabContent.contact.path} onChange={(e) => updateTabContent("contact", "path", e.target.value)} />
          </Field>
          <Field label="Office Hours">
            <input className={inputClass} value={data.tabContent.contact.officeHours} onChange={(e) => updateTabContent("contact", "officeHours", e.target.value)} />
          </Field>
          <Field label="Helpdesk Email">
            <input className={inputClass} value={data.tabContent.contact.helpdeskEmail} onChange={(e) => updateTabContent("contact", "helpdeskEmail", e.target.value)} />
          </Field>
          <Field label="Helpdesk Phone">
            <input className={inputClass} value={data.tabContent.contact.helpdeskPhone} onChange={(e) => updateTabContent("contact", "helpdeskPhone", e.target.value)} />
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Map URL">
            <input className={inputClass} value={data.tabContent.contact.mapUrl} onChange={(e) => updateTabContent("contact", "mapUrl", e.target.value)} />
          </Field>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        <aside className="lg:sticky lg:top-0 lg:w-72 lg:min-h-screen lg:self-start">
          <div className="flex h-full min-h-screen flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">School Navigation</h2>
            <p className="mt-1 text-xs text-slate-500">Main tabs and sub-groups</p>

            <div className="mt-3 space-y-2">
              {MAIN_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeMainTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => changeMainTab(tab.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
                      isActive ? "bg-slate-900 text-white shadow" : "bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                );
              })}
            </div>

            <div className="mt-auto rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Quick Actions</p>
              <div className="mt-2 space-y-2">
                <button onClick={saveAll} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                  <Save className="h-4 w-4" /> Save All
                </button>
                <button onClick={resetAll} className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                  <RotateCcw className="h-4 w-4" /> Reset
                </button>
                <button onClick={() => navigate("/academics/schools")} className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                  <ExternalLink className="h-4 w-4" /> View Schools Page
                </button>
                <button onClick={() => navigate("/login")} className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 hover:bg-rose-100">
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 space-y-6">
          <section className={cardClass}>
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">School Dashboard</h1>
            <p className="mt-1 text-sm text-slate-600">
              Full tab-wise management for school pages and sub-page groups.
            </p>
            {message ? <p className="mt-3 text-sm font-medium text-emerald-700">{message}</p> : null}
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {summary.map((item) => (
              <div key={item.label} className={cardClass}>
                <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
              </div>
            ))}
          </section>

          <section className={cardClass}>
            <div className="mb-3 flex flex-wrap gap-2">
              {currentMainTab.subTabs.map((subTab) => (
                <button
                  key={subTab}
                  type="button"
                  onClick={() => setActiveSubTab(subTab)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                    activeSubTab === subTab
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {subTab}
                </button>
              ))}
            </div>
            <p className="mb-4 text-xs text-slate-500">Current group: {currentMainTab.label} / {activeSubTab}</p>
            {renderTabBody()}
          </section>
        </main>
      </div>
    </div>
  );
};

export default SchoolDashboard;
