export const TENDERS_STORAGE_KEY = "gbu_tenders_data";

export const DEFAULT_TENDERS = [
  {
    id: 1,
    title: "Supply of IT Equipment and Software Licenses",
    description:
      "Procurement of computers, servers, and enterprise software licenses for government offices.",
    closingDate: "2025-07-15",
    documentUrl: "/documents/tender-001.pdf",
  },
  {
    id: 2,
    title: "Construction of Municipal Water Treatment Plant",
    description:
      "Design, construction and commissioning of water treatment facility with 50ML/day capacity.",
    closingDate: "2025-07-22",
    documentUrl: "/documents/tender-002.pdf",
  },
  {
    id: 3,
    title: "Digital Infrastructure Upgrade Project",
    description:
      "Upgrade of fiber optic network and installation of 5G infrastructure across the city.",
    closingDate: "2025-08-10",
    documentUrl: "/documents/tender-004.pdf",
  },
  {
    id: 4,
    title: "Maintenance Services for Public Transportation Fleet",
    description:
      "Comprehensive maintenance and repair services for city bus fleet including spare parts.",
    closingDate: "2025-06-30",
    documentUrl: "/documents/tender-003.pdf",
  },
  {
    id: 5,
    title: "Renewable Energy Solar Panel Installation",
    description:
      "Installation of solar panels on government buildings with total capacity of 2MW.",
    closingDate: "2025-07-05",
    documentUrl: "/documents/tender-005.pdf",
  },
];

const parseDateOnly = (dateValue) => {
  if (!dateValue) return null;
  const parsed = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed;
};

const addDays = (dateValue, days) => {
  const next = new Date(dateValue);
  next.setDate(next.getDate() + days);
  return next;
};

export const getTenderAutoHideDate = (closingDate) => {
  const closing = parseDateOnly(closingDate);
  if (!closing) return null;
  return addDays(closing, 1);
};

export const isTenderActive = (tender, now = new Date()) => {
  const closing = parseDateOnly(tender?.closingDate);
  if (!closing) return false;

  const hideStart = addDays(closing, 2);
  return now < hideStart;
};

export const splitTendersByStatus = (tenders, now = new Date()) => {
  const normalized = Array.isArray(tenders) ? tenders : [];

  const current = normalized
    .filter((item) => isTenderActive(item, now))
    .sort((a, b) => String(a.closingDate || "").localeCompare(String(b.closingDate || "")));

  const archived = normalized
    .filter((item) => !isTenderActive(item, now))
    .sort((a, b) => String(b.closingDate || "").localeCompare(String(a.closingDate || "")));

  return { current, archived };
};
