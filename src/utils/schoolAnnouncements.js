import {
  EMPTY_ANNOUNCEMENTS,
  fetchAnnouncementsSnapshot,
} from "../services/announcementsService";

const ANNOUNCEMENTS_CACHE_KEY = "gbu_announcements_api_cache_v1";
const ANNOUNCEMENTS_REFRESH_MIN_INTERVAL_MS = 5000;

const toSafeAnnouncements = (value) => {
  if (!value || typeof value !== "object") {
    return { ...EMPTY_ANNOUNCEMENTS };
  }

  return {
    schoolName: value.schoolName || "GBU",
    notices: Array.isArray(value.notices) ? value.notices : [],
    events: Array.isArray(value.events) ? value.events : [],
    news: Array.isArray(value.news) ? value.news : [],
    newsletters: Array.isArray(value.newsletters) ? value.newsletters : [],
    mediaGallery: Array.isArray(value.mediaGallery) ? value.mediaGallery : [],
    eventGallery: Array.isArray(value.eventGallery) ? value.eventGallery : [],
  };
};

const readFromCache = () => {
  if (typeof window === "undefined") {
    return { ...EMPTY_ANNOUNCEMENTS };
  }

  try {
    const raw = window.localStorage.getItem(ANNOUNCEMENTS_CACHE_KEY);
    if (!raw) return { ...EMPTY_ANNOUNCEMENTS };
    return toSafeAnnouncements(JSON.parse(raw));
  } catch {
    return { ...EMPTY_ANNOUNCEMENTS };
  }
};

const saveToCache = (payload) => {
  if (typeof window === "undefined") return;

  try {
    const nextValue = JSON.stringify(payload);
    const previousValue = window.localStorage.getItem(ANNOUNCEMENTS_CACHE_KEY);

    // Avoid writing same payload repeatedly; this prevents storage-event ping-pong across tabs.
    if (previousValue === nextValue) {
      return;
    }

    window.localStorage.setItem(ANNOUNCEMENTS_CACHE_KEY, nextValue);
  } catch {
    // Ignore localStorage write issues and keep runtime data.
  }
};

let announcementsCache = readFromCache();
let announcementsRefreshPromise = null;
let lastAnnouncementsRefreshAt = 0;

export const getSchoolAnnouncements = () => announcementsCache;

export const refreshSchoolAnnouncements = async () => {
  const now = Date.now();

  if (announcementsRefreshPromise) {
    return announcementsRefreshPromise;
  }

  if (now - lastAnnouncementsRefreshAt < ANNOUNCEMENTS_REFRESH_MIN_INTERVAL_MS) {
    return announcementsCache;
  }

  announcementsRefreshPromise = fetchAnnouncementsSnapshot()
    .then((latest) => {
      announcementsCache = toSafeAnnouncements(latest);
      saveToCache(announcementsCache);
      lastAnnouncementsRefreshAt = Date.now();
      return announcementsCache;
    })
    .finally(() => {
      announcementsRefreshPromise = null;
    });

  return announcementsRefreshPromise;
};

export const syncAnnouncementsFromCache = () => {
  announcementsCache = readFromCache();
  return announcementsCache;
};
