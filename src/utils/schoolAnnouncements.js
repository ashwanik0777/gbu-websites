import {
  DEFAULT_SCHOOL_DASHBOARD_DATA,
  SCHOOL_DASHBOARD_STORAGE_KEY,
} from "../Data/schoolDashboardData";

const safeArray = (value) => (Array.isArray(value) ? value : []);
const normalizeList = (value, fallback = []) => {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return fallback;
};
const normalizeBool = (value, fallback = false) => {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value.trim().toLowerCase() === "true";
  return fallback;
};

const readSchoolData = () => {
  if (typeof window === "undefined") {
    return DEFAULT_SCHOOL_DASHBOARD_DATA;
  }

  try {
    const raw = window.localStorage.getItem(SCHOOL_DASHBOARD_STORAGE_KEY);
    if (!raw) return DEFAULT_SCHOOL_DASHBOARD_DATA;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SCHOOL_DASHBOARD_DATA, ...parsed };
  } catch {
    return DEFAULT_SCHOOL_DASHBOARD_DATA;
  }
};

export const getSchoolAnnouncements = () => {
  const data = readSchoolData();
  const schoolName = data.schoolName || "GBU School";

  const galleryItems = safeArray(data.eventGallery);
  const galleryFallback = galleryItems[0]?.imageUrl || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200";

  const notices = safeArray(data.notices).map((item, index) => ({
    id: item.id || `notice-${index + 1}`,
    title: item.title || `Notice ${index + 1}`,
    date: item.date || new Date().toISOString().slice(0, 10),
    type: item.type || "General",
    priority: item.priority || "medium",
    content:
      item.content || `Official notice from ${schoolName}. Please check details with school office.`,
    pdfUrl: item.pdfUrl || "",
    image: item.image || "",
    imageLink: item.imageLink || item.link || "",
    isNew: normalizeBool(item.isNew, true),
    views: Number(item.views || 0),
    schoolName,
  }));

  const events = safeArray(data.events).map((item, index) => {
    const fallbackImage = galleryItems[index]?.imageUrl || galleryFallback;
    const eventDate = item.date || new Date().toISOString().slice(0, 10);
    const eventStart = new Date(eventDate);
    eventStart.setHours(0, 0, 0, 0);
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const isUpcoming = eventStart >= todayStart;

    return {
      id: item.id || `event-${index + 1}`,
      title: item.title || `Event ${index + 1}`,
      date: eventDate,
      startsAt: item.startsAt || eventDate,
      starts_at: item.starts_at || eventDate,
      endDate: item.endDate || item.endsAt || item.ends_at || eventDate,
      endsAt: item.endsAt || item.ends_at || item.endDate || eventDate,
      ends_at: item.ends_at || item.endsAt || item.endDate || eventDate,
      time: item.time || "10:00",
      location: item.venue || item.location || "Campus",
      venue: item.venue || item.location || "Campus",
      type: item.type || "Academic",
      mode: item.mode || "Offline",
      description:
        item.description || `${item.title || "Event"} organized by ${schoolName}.`,
      coverImageUrl: item.coverImageUrl || item.image || fallbackImage,
      image: item.image || item.coverImageUrl || fallbackImage,
      imageLink: item.imageLink || item.link || "",
      images: normalizeList(item.images, [item.image || item.coverImageUrl || fallbackImage]),
      attendees: Number(item.attendees || 100),
      price: item.price || "Free",
      organizer: item.organizer || schoolName,
      registrationUrl: item.registrationUrl || item.registration_url || "",
      isUpcoming,
      tags: normalizeList(item.tags, [item.type || "Event"]),
      year: new Date(eventDate).getFullYear().toString(),
      schoolName,
    };
  });

  const news = safeArray(data.news).map((item, index) => {
    const fallbackImage = galleryItems[index]?.imageUrl || galleryFallback;
    const publishedDate = item.date || new Date().toISOString().slice(0, 10);

    return {
      id: item.id || `news-${index + 1}`,
      title: item.title || `News ${index + 1}`,
      date: publishedDate,
      publishedAt: publishedDate,
      excerpt: item.excerpt || `${item.title || "News update"} from ${schoolName}.`,
      content: item.content || `${item.title || "News update"} from ${schoolName}.`,
      author: item.author || "School Office",
      department: item.department || schoolName,
      tags: normalizeList(item.tags, ["School Update"]),
      category: item.category || "Academic",
      priority: item.priority || "medium",
      views: Number(item.views || 0),
      likes: Number(item.likes || 0),
      coverImageUrl: item.coverImageUrl || item.image || fallbackImage,
      image: item.image || item.coverImageUrl || fallbackImage,
      imageLink: item.imageLink || item.link || "",
      featured: normalizeBool(item.featured, false),
      status: item.status || "published",
      schoolName,
    };
  });

  const newsletters = news.map((item, index) => ({
    id: item.id,
    title: item.title,
    issueNumber: `Vol. ${new Date(item.date).getFullYear()}, Issue ${index + 1}`,
    date: item.date,
    coverImage: item.coverImageUrl,
    excerpt: item.excerpt,
    pdfLink: item.pdfUrl || item.link || "",
    views: item.views || 0,
    category: item.category || "School Update",
    schoolName: item.schoolName,
  }));

  const explicitNewsletters = safeArray(data.newsletters).map((item, index) => ({
    id: item.id || `newsletter-${index + 1}`,
    title: item.title || `Newsletter ${index + 1}`,
    issueNumber:
      item.issueNumber || `Vol. ${new Date(item.date || new Date().toISOString()).getFullYear()}, Issue ${index + 1}`,
    date: item.date || new Date().toISOString().slice(0, 10),
    coverImage: item.coverImage || item.image || galleryFallback,
    imageLink: item.imageLink || item.link || "",
    excerpt: item.excerpt || `${item.title || "Newsletter"} from ${schoolName}.`,
    pdfLink: item.pdfLink || item.pdfUrl || item.link || "",
    views: Number(item.views || 0),
    category: item.category || "School Update",
    content: item.content || "",
    isPublished: normalizeBool(item.isPublished, true),
    schoolName,
  }));

  const mediaGallery = galleryItems.map((item, index) => ({
    id: item.id || `gallery-${index + 1}`,
    title: item.title || `Gallery ${index + 1}`,
    category: item.category || "Events",
    year: String(new Date(item.eventDate || new Date().toISOString()).getFullYear()),
    date: item.eventDate || new Date().toISOString().slice(0, 10),
    images: normalizeList(item.images, [item.imageUrl || galleryFallback]).slice(0, 4),
    coverImage: item.imageUrl || galleryFallback,
    imageLink: item.imageLink || item.link || "",
    schoolName,
  }));

  return {
    schoolName,
    notices,
    events,
    news,
    newsletters: explicitNewsletters.length ? explicitNewsletters : newsletters,
    mediaGallery,
    eventGallery: galleryItems,
  };
};
