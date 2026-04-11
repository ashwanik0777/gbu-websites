export const FACULTY_SIDEBAR_SECTIONS = [
  { id: "dashboard-header", label: "Dashboard" },
  { id: "personal-details", label: "Personal Details" },
  { id: "contact-links", label: "Contact & Links" },
  { id: "academic-content", label: "Academic Content" },
  { id: "research-areas", label: "Research Areas" },
  { id: "tab-data-editors", label: "Tab Data Editors" },
  { id: "profile-preview", label: "Public Preview" },
];

export const inputClass =
  "w-full rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 outline-none transition focus:border-stone-700";

export const deepClone = (value) => JSON.parse(JSON.stringify(value));

export const parseCommaList = (value) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
