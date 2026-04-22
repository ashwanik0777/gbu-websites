import apiClient from "./apiClient";
import { backendBaseUrl } from "../config/apiConfig";

const apiRoot = backendBaseUrl;

const toArray = (value) => (Array.isArray(value) ? value : []);

const unwrapData = (response) => {
  const payload = response?.data;
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (payload?.data && typeof payload.data === "object") return payload.data;
  if (payload && typeof payload === "object") return payload;
  return null;
};

const safeDate = (value) => (value ? String(value).slice(0, 10) : "");

const toList = (value) => {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
};

const normalizeNotice = (item) => ({
  id: item?.id ?? "",
  title: String(item?.title || "Notice").trim(),
  content: String(item?.content || "").trim(),
  date: safeDate(item?.publishedDate || item?.published_date),
  type: String(item?.type || "General").trim(),
  priority: String(item?.priority || "medium").trim(),
  views: Number(item?.views || 0),
  isNew: Boolean(item?.isNew ?? item?.is_new),
  pdfUrl: String(item?.pdfUrl || item?.pdf_url || "").trim(),
  schoolName: "GBU",
});

const normalizeNews = (item) => ({
  id: item?.id ?? "",
  title: String(item?.title || "News").trim(),
  date: safeDate(item?.publishedAt || item?.published_date),
  publishedAt: safeDate(item?.publishedAt || item?.published_date),
  excerpt: String(item?.excerpt || "").trim(),
  content: String(item?.content || "").trim(),
  author: String(item?.author || "School Office").trim(),
  department: String(item?.department || "").trim(),
  tags: toList(item?.tags),
  category: String(item?.category || "General").trim(),
  priority: String(item?.priority || "medium").trim(),
  views: Number(item?.views || 0),
  likes: Number(item?.likes || 0),
  coverImageUrl: String(item?.image || item?.imageUrl || item?.coverImageUrl || "").trim(),
  image: String(item?.image || item?.imageUrl || item?.coverImageUrl || "").trim(),
  featured: Boolean(item?.featured ?? item?.isFeatured),
  status: String(item?.status || "published").trim(),
  schoolName: "GBU",
});

const normalizeEvent = (item) => {
  const eventDate = safeDate(item?.starts_at || item?.startsAt || item?.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventStart = eventDate ? new Date(eventDate) : null;
  if (eventStart) eventStart.setHours(0, 0, 0, 0);

  return {
    id: item?.id ?? "",
    title: String(item?.title || "Event").trim(),
    date: eventDate,
    startsAt: item?.starts_at || item?.startsAt || item?.date || "",
    starts_at: item?.starts_at || item?.startsAt || item?.date || "",
    endDate: safeDate(item?.ends_at || item?.endsAt || item?.endDate || item?.date),
    endsAt: item?.ends_at || item?.endsAt || item?.endDate || item?.date || "",
    ends_at: item?.ends_at || item?.endsAt || item?.endDate || item?.date || "",
    time: String(item?.time_string || item?.time || "").trim(),
    location: String(item?.venue || item?.location || "Campus").trim(),
    venue: String(item?.venue || item?.location || "Campus").trim(),
    type: String(item?.type || "General").trim(),
    mode: String(item?.mode || "Offline").trim(),
    description: String(item?.description || "").trim(),
    coverImageUrl: String(item?.cover_image || item?.coverImage || item?.coverImageUrl || "").trim(),
    image: String(item?.cover_image || item?.coverImage || item?.coverImageUrl || "").trim(),
    images: toList(item?.gallery || item?.images),
    attendees: Number(item?.attendees || 0),
    price: String(item?.price || "Free").trim(),
    organizer: String(item?.organizer || "GBU").trim(),
    registrationUrl: String(item?.registration_url || item?.registrationUrl || "").trim(),
    isUpcoming: eventStart ? eventStart >= today : false,
    tags: toList(item?.tags),
    year: String(item?.year || (eventDate ? new Date(eventDate).getFullYear() : "")),
    schoolName: "GBU",
  };
};

const normalizeNewsletter = (item, index) => ({
  id: item?.id ?? `newsletter-${index + 1}`,
  title: String(item?.title || "Newsletter").trim(),
  issueNumber: String(item?.issueNumber || item?.issue_number || "").trim(),
  date: safeDate(item?.publishedDate || item?.published_date),
  coverImage: String(item?.coverImage || item?.cover_image_url || "").trim(),
  excerpt: String(item?.excerpt || "").trim(),
  pdfLink: String(item?.pdfUrl || item?.pdf_url || "").trim(),
  views: Number(item?.views || 0),
  category: String(item?.category || "School Update").trim(),
  schoolName: "GBU",
});

const normalizeMedia = (item, index) => {
  const images = toList(item?.images);
  return {
    id: item?.id ?? `gallery-${index + 1}`,
    title: String(item?.title || `Gallery ${index + 1}`).trim(),
    category: String(item?.category || "Events").trim(),
    year: String(item?.year || ""),
    date: safeDate(item?.publishedDate || item?.published_date),
    images,
    coverImage: images[0] || "",
    schoolName: "GBU",
  };
};

export const EMPTY_ANNOUNCEMENTS = Object.freeze({
  schoolName: "GBU",
  notices: [],
  news: [],
  events: [],
  newsletters: [],
  mediaGallery: [],
  eventGallery: [],
});

export const fetchAnnouncementsSnapshot = async () => {
  const [noticesRes, newsRes, eventsRes, newslettersRes, mediaRes] = await Promise.allSettled([
    apiClient.get("/announcements"),
    apiClient.get("/news"),
    apiClient.get("/events"),
    apiClient.get("/newsletters"),
    apiClient.get("/media-gallery"),
  ]);

  const notices = noticesRes.status === "fulfilled" ? toArray(unwrapData(noticesRes.value)).map(normalizeNotice) : [];
  const news = newsRes.status === "fulfilled" ? toArray(unwrapData(newsRes.value)).map(normalizeNews) : [];
  const events = eventsRes.status === "fulfilled" ? toArray(unwrapData(eventsRes.value)).map(normalizeEvent) : [];
  const newsletters = newslettersRes.status === "fulfilled"
    ? toArray(unwrapData(newslettersRes.value)).map(normalizeNewsletter)
    : [];
  const mediaGallery = mediaRes.status === "fulfilled"
    ? toArray(unwrapData(mediaRes.value)).map(normalizeMedia)
    : [];

  return {
    schoolName: "GBU",
    notices,
    news,
    events,
    newsletters,
    mediaGallery,
    eventGallery: mediaGallery,
  };
};

const normalizeRecruitmentItem = (item) => ({
  id: item?.id ?? "",
  label: String(item?.tabId || item?.tab_id || item?.referenceNo || item?.reference_no || "Recruitment").trim(),
  ref: String(item?.referenceNo || item?.reference_no || "").trim(),
  date: safeDate(item?.publishedDate || item?.published_date || item?.closingDate || item?.closing_date),
  title: String(item?.title || "Recruitment").trim(),
  status: String(item?.status || "current").trim(),
  tabId: String(item?.tabId || item?.tab_id || "").trim(),
  categoryType: String(item?.category || "others").trim(),
  year: String(item?.year || ""),
  documents: toArray(item?.documents).map((doc, idx) => ({
    id: doc?.id ?? `${item?.id || "recruitment"}-doc-${idx + 1}`,
    name: String(doc?.name || "Document").trim(),
    description: String(doc?.description || "Official recruitment document").trim(),
    url: String(doc?.url || doc?.fileUrl || doc?.file_url || "#").trim(),
    documentType: String(doc?.documentType || doc?.document_type || "").trim(),
    sortOrder: Number(doc?.sortOrder || doc?.sort_order || idx + 1),
  })),
});

const CATEGORY_META = {
  teaching: { title: "Teaching", icon: "GraduationCap" },
  "non-teaching": { title: "Non-Teaching", icon: "Users" },
  "project-research": { title: "Project / Research", icon: "FlaskConical" },
  others: { title: "Others", icon: "BriefcaseBusiness" },
};

const toRecruitmentDashboardShape = (items) => {
  const current = items.filter((item) => item.status !== "archived");
  const archived = items.filter((item) => item.status === "archived");

  const categoriesMap = current.reduce((acc, item) => {
    const key = item.categoryType || "others";
    if (!acc[key]) {
      const meta = CATEGORY_META[key] || CATEGORY_META.others;
      acc[key] = { type: key, title: meta.title, icon: meta.icon, tabs: [] };
    }
    acc[key].tabs.push(item);
    return acc;
  }, {});

  return {
    categories: Object.values(categoriesMap),
    archived: archived.map((item) => ({
      id: `archived-${item.id}`,
      year: String(item.year || ""),
      ref: item.ref,
      date: item.date,
      title: item.title,
      status: "archived",
      documents: item.documents,
    })),
  };
};

export const listRecruitments = async ({ page = 1, limit = 20, status = "all", grouped = false } = {}) => {
  const response = await fetch(`${apiRoot}/recruitments?page=${page}&limit=${limit}&status=${encodeURIComponent(status)}&grouped=${grouped ? "true" : "false"}`);
  if (!response.ok) {
    throw new Error("Unable to fetch recruitments");
  }

  const payload = await response.json();
  const data = payload?.data || {};
  const items = toArray(data.items).map(normalizeRecruitmentItem);

  return {
    items,
    meta: data.meta || { page, limit, total: items.length, pages: 1, offset: 0 },
    grouped: grouped
      ? {
          currentByCategory: data.currentByCategory || {},
          archivedByYear: data.archivedByYear || {},
        }
      : null,
  };
};

export const getRecruitmentDashboardData = async () => {
  const response = await listRecruitments({ page: 1, limit: 100, status: "all", grouped: false });
  return toRecruitmentDashboardShape(response.items);
};

export const getNoDataText = (kind) => {
  const map = {
    events: "No events available.",
    notices: "No notices available.",
    news: "No news available.",
    newsletters: "No newsletters available.",
    media: "No media gallery items available.",
    recruitments: "No recruitments available.",
    tenders: "No tenders available.",
  };
  return map[kind] || "No data available.";
};
