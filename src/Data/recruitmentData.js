export const RECRUITMENT_DASHBOARD_STORAGE_KEY = "gbu_recruitment_dashboard_data";

export const DEFAULT_RECRUITMENT_DASHBOARD_DATA = {
  categories: [
    {
      type: "teaching",
      title: "Teaching",
      icon: "GraduationCap",
      tabs: [
        {
          id: "professors",
          label: "Professor's",
          ref: "GBU/Admn/2025/01",
          date: "2025-05-15",
          title: "Advertisement of Professor's",
          status: "active",
          documents: [
            { name: "Extension Notice", description: "Official extension notification", url: "#" },
            { name: "Detailed Advertisement", description: "Complete vacancy details", url: "#" },
            { name: "Newspaper Publication", description: "Published notice copy", url: "#" },
            { name: "Application Form (PDF)", description: "Download PDF format", url: "#" },
            { name: "Application Form (Word)", description: "Download editable format", url: "#" }
          ]
        },
        {
          id: "retired",
          label: "Professor's (Retired)",
          ref: "GBU/Admn/2025/02",
          date: "2025-05-15",
          title: "Advertisement of Professor's (Retired)",
          status: "active",
          documents: [
            { name: "Extension Notice", description: "Official extension notification", url: "#" },
            { name: "Detailed Advertisement", description: "Complete vacancy details", url: "#" },
            { name: "Newspaper Publication", description: "Published notice copy", url: "#" },
            { name: "Application Form (PDF)", description: "Download PDF format", url: "#" },
            { name: "Application Form (Word)", description: "Download editable format", url: "#" }
          ]
        },
        {
          id: "associate",
          label: "Associate Professor's",
          ref: "GBU/Admn/2025/03",
          date: "2025-05-20",
          title: "Advertisement of Associate Professor's",
          status: "active",
          documents: [
            { name: "Extension Notice", description: "Official extension notification", url: "#" },
            { name: "Detailed Advertisement", description: "Complete vacancy details", url: "#" },
            { name: "Newspaper Publication", description: "Published notice copy", url: "#" },
            { name: "Application Form (PDF)", description: "Download PDF format", url: "#" },
            { name: "Application Form (Word)", description: "Download editable format", url: "#" }
          ]
        },
        {
          id: "assistant",
          label: "Assistant Professor's",
          ref: "GBU/Admn/2025/04",
          date: "2025-05-22",
          title: "Advertisement of Assistant Professor's",
          status: "active",
          documents: [
            { name: "Extension Notice", description: "Official extension notification", url: "#" },
            { name: "Detailed Advertisement", description: "Complete vacancy details", url: "#" },
            { name: "Newspaper Publication", description: "Published notice copy", url: "#" },
            { name: "Application Form (PDF)", description: "Download PDF format", url: "#" },
            { name: "Application Form (Word)", description: "Download editable format", url: "#" }
          ]
        }
      ]
    },
    {
      type: "non-teaching",
      title: "Non-Teaching",
      icon: "Users",
      tabs: [
        {
          id: "assistants",
          label: "Assistants",
          ref: "GBU/Admn/2025/05",
          date: "2025-05-15",
          title: "Advertisement for Assistants",
          status: "active",
          documents: [
            { name: "Extension Notice", description: "Official extension notification", url: "#" },
            { name: "Detailed Advertisement", description: "Complete vacancy details", url: "#" },
            { name: "Newspaper Publication", description: "Published notice copy", url: "#" },
            { name: "Application Form (PDF)", description: "Download PDF format", url: "#" },
            { name: "Application Form (Word)", description: "Download editable format", url: "#" }
          ]
        }
      ]
    },
    {
      type: "project-research",
      title: "Project / Research",
      icon: "FlaskConical",
      tabs: [
        {
          id: "interns",
          label: "Interns",
          ref: "GBU/Admn/2025/06",
          date: "2025-05-15",
          title: "Advertisement for Interns",
          status: "active",
          documents: [
            { name: "Extension Notice", description: "Official extension notification", url: "#" },
            { name: "Detailed Advertisement", description: "Complete vacancy details", url: "#" },
            { name: "Newspaper Publication", description: "Published notice copy", url: "#" },
            { name: "Application Form (PDF)", description: "Download PDF format", url: "#" },
            { name: "Application Form (Word)", description: "Download editable format", url: "#" }
          ]
        }
      ]
    },
    {
      type: "others",
      title: "Others",
      icon: "BriefcaseBusiness",
      tabs: [
        {
          id: "workers",
          label: "Workers",
          ref: "GBU/Admn/2025/07",
          date: "2025-05-15",
          title: "Advertisement of Workers",
          status: "active",
          documents: [
            { name: "Extension Notice", description: "Official extension notification", url: "#" },
            { name: "Detailed Advertisement", description: "Complete vacancy details", url: "#" },
            { name: "Newspaper Publication", description: "Published notice copy", url: "#" },
            { name: "Application Form (PDF)", description: "Download PDF format", url: "#" },
            { name: "Application Form (Word)", description: "Download editable format", url: "#" }
          ]
        }
      ]
    }
  ],
  archived: [
    {
      id: "archived2023",
      year: "2023",
      ref: "GBU/Admn/2023/01",
      date: "2023-01-10",
      title: "Archived Professor Recruitment 2023",
      status: "archived",
      documents: [
        { name: "Archived Advertisement", description: "Official archived recruitment notice", url: "#" },
        { name: "Published Notification", description: "Public notice copy", url: "#" }
      ]
    },
    {
      id: "archived2022",
      year: "2022",
      ref: "GBU/Admn/2022/05",
      date: "2022-08-12",
      title: "Archived Associate Recruitment 2022",
      status: "archived",
      documents: [
        { name: "Archived Advertisement", description: "Official archived recruitment notice", url: "#" },
        { name: "Published Notification", description: "Public notice copy", url: "#" }
      ]
    },
    {
      id: "archived2021",
      year: "2021",
      ref: "GBU/Admn/2021/12",
      date: "2021-12-05",
      title: "Archived Staff Recruitment 2021",
      status: "archived",
      documents: [
        { name: "Archived Advertisement", description: "Official archived recruitment notice", url: "#" },
        { name: "Published Notification", description: "Public notice copy", url: "#" }
      ]
    }
  ]
};

const deepClone = (value) => JSON.parse(JSON.stringify(value));

export const getRecruitmentDataFromStorage = () => {
  try {
    const raw = localStorage.getItem(RECRUITMENT_DASHBOARD_STORAGE_KEY);
    if (!raw) return deepClone(DEFAULT_RECRUITMENT_DASHBOARD_DATA);
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return deepClone(DEFAULT_RECRUITMENT_DASHBOARD_DATA);

    return {
      categories: Array.isArray(parsed.categories)
        ? parsed.categories
        : deepClone(DEFAULT_RECRUITMENT_DASHBOARD_DATA.categories),
      archived: Array.isArray(parsed.archived)
        ? parsed.archived
        : deepClone(DEFAULT_RECRUITMENT_DASHBOARD_DATA.archived),
    };
  } catch {
    return deepClone(DEFAULT_RECRUITMENT_DASHBOARD_DATA);
  }
};
