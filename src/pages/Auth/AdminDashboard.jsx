import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Save,
  RotateCcw,
  LogOut,
  Shield,
  Users,
  UserPlus,
  School,
  CalendarDays,
  Newspaper,
  Bell,
  Images,
  Pencil,
  Trash2,
  Plus,
  KeyRound,
  Search,
  ListFilter,
  Download,
  Upload,
  Activity,
  AlertTriangle,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react";
import {
  DEFAULT_SCHOOL_DASHBOARD_DATA,
  SCHOOL_DASHBOARD_STORAGE_KEY,
} from "../../Data/schoolDashboardData";
import {
  ADMIN_PORTAL_ACCOUNTS_KEY,
  DEFAULT_ADMIN_PORTAL_ACCOUNTS,
} from "../../Data/adminDashboardData";
import {
  DUMMY_FACULTY_DETAIL,
  FACULTY_PROFILE_STORAGE_PREFIX,
} from "../../Data/facultyDummyData";

const deepClone = (value) => JSON.parse(JSON.stringify(value));
const ensureArray = (value, fallback) => (Array.isArray(value) ? value : fallback);
const ADMIN_ACTIVITY_LOG_KEY = "gbu_admin_activity_log";
const FACULTY_MAIL_QUEUE_KEY = "gbu_faculty_mail_queue";

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

const parseCsvRow = (line) => {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (ch === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
      continue;
    }
    current += ch;
  }
  result.push(current.trim());
  return result;
};

const toBool = (value, fallback = false) => {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (normalized === "true" || normalized === "yes" || normalized === "1") return true;
    if (normalized === "false" || normalized === "no" || normalized === "0") return false;
  }
  return fallback;
};

const cardClass = "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm";
const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-700";

const tabs = [
  { id: "overview", label: "Overview", icon: Shield },
  { id: "accounts", label: "User & Login Management", icon: KeyRound },
  { id: "faculty", label: "Faculty Management", icon: Users },
  { id: "school", label: "School Content", icon: School },
];

const schoolContentTabs = [
  { id: "basic", label: "Basic Settings", icon: School },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "news", label: "News", icon: Newspaper },
  { id: "notices", label: "Notices", icon: Bell },
  { id: "newsletters", label: "Newsletters", icon: Newspaper },
  { id: "gallery", label: "Event Gallery", icon: Images },
];

const Field = ({ label, children }) => (
  <div>
    <label className="mb-1 block text-sm font-medium text-slate-700">{label}</label>
    {children}
  </div>
);

const FilterBar = ({ searchValue, onSearchChange, searchPlaceholder, children, onClear }) => (
  <div className="mb-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
    <div className="flex flex-wrap items-center gap-2">
      <div className="relative min-w-[220px] flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 outline-none transition focus:border-slate-700"
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
        />
      </div>

      <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
        <span className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2 py-2 text-xs font-medium text-slate-600">
          <ListFilter className="h-3.5 w-3.5" /> Filters
        </span>
        {children}
        <button
          type="button"
          onClick={onClear}
          className="rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
        >
          Clear
        </button>
      </div>
    </div>
  </div>
);

const getInitialSchoolData = () => {
  try {
    const raw = localStorage.getItem(SCHOOL_DASHBOARD_STORAGE_KEY);
    if (!raw) return deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA);
    const parsed = JSON.parse(raw);
    return {
      ...deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA),
      ...parsed,
      events: ensureArray(parsed.events, deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.events || [])),
      news: ensureArray(parsed.news, deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.news || [])),
      newsletters: ensureArray(
        parsed.newsletters,
        deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.newsletters || []),
      ),
      notices: ensureArray(parsed.notices, deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.notices || [])),
      eventGallery: ensureArray(
        parsed.eventGallery,
        deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.eventGallery || []),
      ),
      tabContent: {
        ...deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.tabContent),
        ...(parsed.tabContent || {}),
      },
    };
  } catch {
    return deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA);
  }
};

const getInitialAccounts = () => {
  try {
    const raw = localStorage.getItem(ADMIN_PORTAL_ACCOUNTS_KEY);
    if (!raw) return deepClone(DEFAULT_ADMIN_PORTAL_ACCOUNTS);
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length
      ? parsed
      : deepClone(DEFAULT_ADMIN_PORTAL_ACCOUNTS);
  } catch {
    return deepClone(DEFAULT_ADMIN_PORTAL_ACCOUNTS);
  }
};

const getFacultyProfiles = () => {
  const list = [];
  try {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(FACULTY_PROFILE_STORAGE_PREFIX)) continue;
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const profile = JSON.parse(raw);
      if (profile && typeof profile === "object") {
        list.push(profile);
      }
    }
    if (!list.some((p) => p.id === DUMMY_FACULTY_DETAIL.id)) {
      list.push(DUMMY_FACULTY_DETAIL);
    }
  } catch {
    return [DUMMY_FACULTY_DETAIL];
  }
  return list;
};

const getInitialActivityLog = () => {
  try {
    const raw = localStorage.getItem(ADMIN_ACTIVITY_LOG_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const getInitialMailQueue = () => {
  try {
    const raw = localStorage.getItem(FACULTY_MAIL_QUEUE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const generateStrongPassword = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789@#$%!&*";
  let password = "";
  for (let i = 0; i < 12; i += 1) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [message, setMessage] = useState("");
  const [activeSchoolSubTab, setActiveSchoolSubTab] = useState("basic");

  const [schoolData, setSchoolData] = useState(getInitialSchoolData);
  const [accounts, setAccounts] = useState(getInitialAccounts);
  const [facultyProfiles, setFacultyProfiles] = useState(getFacultyProfiles);

  const [accountEditor, setAccountEditor] = useState({ index: null, form: null });
  const [facultyEditor, setFacultyEditor] = useState({ index: null, form: null });
  const [collectionEditors, setCollectionEditors] = useState({});
  const [accountFilters, setAccountFilters] = useState({ query: "", role: "all", status: "all" });
  const [facultyFilters, setFacultyFilters] = useState({ query: "", department: "all" });
  const [collectionFilters, setCollectionFilters] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [activityLog, setActivityLog] = useState(getInitialActivityLog);
  const [mailQueue, setMailQueue] = useState(getInitialMailQueue);
  const backupInputRef = useRef(null);
  const bulkFacultyInputRef = useRef(null);

  const summary = useMemo(
    () => [
      { label: "Total Accounts", value: accounts.length },
      { label: "Faculty Profiles", value: facultyProfiles.length },
      { label: "School Events", value: schoolData.events?.length || 0 },
      { label: "News + Notices", value: (schoolData.news?.length || 0) + (schoolData.notices?.length || 0) },
    ],
    [accounts, facultyProfiles, schoolData],
  );

  const saveAll = () => {
    localStorage.setItem(SCHOOL_DASHBOARD_STORAGE_KEY, JSON.stringify(schoolData));
    localStorage.setItem(ADMIN_PORTAL_ACCOUNTS_KEY, JSON.stringify(accounts));
    facultyProfiles.forEach((faculty) => {
      if (faculty?.id) {
        localStorage.setItem(`${FACULTY_PROFILE_STORAGE_PREFIX}${faculty.id}`, JSON.stringify(faculty));
      }
    });
    setActivityLog((prev) => [
      {
        id: `log-${Date.now()}`,
        action: "Saved all dashboard data",
        time: new Date().toISOString(),
      },
      ...prev,
    ].slice(0, 12));
    setMessage("Admin dashboard saved. School + Faculty + User login system updated.");
  };

  const resetAll = () => {
    setSchoolData(deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA));
    setAccounts(deepClone(DEFAULT_ADMIN_PORTAL_ACCOUNTS));
    setFacultyProfiles([deepClone(DUMMY_FACULTY_DETAIL)]);
    localStorage.removeItem(SCHOOL_DASHBOARD_STORAGE_KEY);
    localStorage.removeItem(ADMIN_PORTAL_ACCOUNTS_KEY);
    setActivityLog((prev) => [
      {
        id: `log-${Date.now()}`,
        action: "Reset dashboard to defaults",
        time: new Date().toISOString(),
      },
      ...prev,
    ].slice(0, 12));
    setMessage("Admin dashboard reset to default data.");
  };

  useEffect(() => {
    localStorage.setItem(ADMIN_ACTIVITY_LOG_KEY, JSON.stringify(activityLog));
  }, [activityLog]);

  useEffect(() => {
    localStorage.setItem(FACULTY_MAIL_QUEUE_KEY, JSON.stringify(mailQueue));
  }, [mailQueue]);

  const buildUniqueUsername = (seed, existingAccounts) => {
    const sanitized = String(seed || "faculty.user")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9._-]/g, "") || "faculty.user";
    let candidate = sanitized;
    let suffix = 1;
    const existing = new Set(existingAccounts.map((item) => String(item.username || "").toLowerCase()));
    while (existing.has(candidate)) {
      candidate = `${sanitized}${suffix}`;
      suffix += 1;
    }
    return candidate;
  };

  const createFacultyAccount = (faculty, existingAccounts, passwordOverride) => {
    const usernameSeed = faculty.email ? faculty.email.split("@")[0] : faculty.id || faculty.name;
    const username = buildUniqueUsername(usernameSeed, existingAccounts);
    const password = passwordOverride || generateStrongPassword();
    return {
      id: `acc-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: faculty.name || username,
      username,
      password,
      role: "teacher",
      status: "active",
      linkedFacultyId: faculty.id || "",
      linkedSchool: faculty.school || schoolData.schoolCode || "",
    };
  };

  const downloadFacultyTemplate = () => {
    const header = [
      "name",
      "designation",
      "department",
      "school",
      "email",
      "phone",
      "createLoginAccount",
      "sendCredentialsEmail",
    ];
    const example = [
      "Dr. New Faculty",
      "Assistant Professor",
      "Computer Science",
      schoolData.schoolName || "School of ICT",
      "faculty@gbu.ac.in",
      "+91-9876543210",
      "true",
      "true",
    ];
    const csv = `${header.join(",")}\n${example.join(",")}\n`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "faculty_bulk_upload_template.csv";
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Faculty bulk upload template downloaded.");
  };

  const handleBulkFacultyUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const lines = text
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);
      if (lines.length < 2) {
        setMessage("CSV is empty. Please use the template and add at least one row.");
        return;
      }

      const headers = parseCsvRow(lines[0]).map((item) => item.trim());
      const requiredHeaders = ["name", "designation", "department", "school", "email", "phone"];
      const missing = requiredHeaders.filter((header) => !headers.includes(header));
      if (missing.length) {
        setMessage(`Missing required CSV columns: ${missing.join(", ")}`);
        return;
      }

      let nextAccounts = [...accounts];
      const uploadedFaculty = [];
      const queuedEmails = [];

      for (let i = 1; i < lines.length; i += 1) {
        const values = parseCsvRow(lines[i]);
        const row = Object.fromEntries(headers.map((header, idx) => [header, values[idx] || ""]));
        if (!row.name) continue;

        const faculty = {
          id: `faculty-${Date.now()}-${i}`,
          name: row.name,
          designation: row.designation,
          department: row.department,
          school: row.school || schoolData.schoolName || "",
          email: row.email,
          phone: row.phone,
        };
        uploadedFaculty.push(faculty);

        const shouldCreateLogin = toBool(row.createLoginAccount, true);
        const shouldSendEmail = toBool(row.sendCredentialsEmail, true);

        if (shouldCreateLogin) {
          const generatedPassword = generateStrongPassword();
          const account = createFacultyAccount(faculty, nextAccounts, generatedPassword);
          nextAccounts = [...nextAccounts, account];

          if (shouldSendEmail && faculty.email) {
            queuedEmails.push({
              id: `mail-${Date.now()}-${i}`,
              to: faculty.email,
              subject: "GBU Faculty Portal Credentials",
              status: "pending-backend",
              payload: {
                facultyName: faculty.name,
                username: account.username,
                password: account.password,
                linkedFacultyId: account.linkedFacultyId,
              },
              createdAt: new Date().toISOString(),
            });
          }
        }
      }

      if (!uploadedFaculty.length) {
        setMessage("No valid rows found in CSV.");
        return;
      }

      setFacultyProfiles((prev) => [...prev, ...uploadedFaculty]);
      setAccounts(nextAccounts);
      if (queuedEmails.length) {
        setMailQueue((prev) => [...queuedEmails, ...prev].slice(0, 100));
      }
      setActivityLog((prev) => [
        {
          id: `log-${Date.now()}`,
          action: `Bulk uploaded ${uploadedFaculty.length} faculty profiles`,
          time: new Date().toISOString(),
        },
        ...prev,
      ].slice(0, 12));
      setMessage(
        `Bulk upload completed: ${uploadedFaculty.length} faculty added, ${queuedEmails.length} credential emails queued.`,
      );
    } catch {
      setMessage("Bulk upload failed. Please upload a valid CSV template file.");
    } finally {
      event.target.value = "";
    }
  };

  const exportBackup = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      schoolData,
      accounts,
      facultyProfiles,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `gbu-admin-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setActivityLog((prev) => [
      {
        id: `log-${Date.now()}`,
        action: "Exported admin backup",
        time: new Date().toISOString(),
      },
      ...prev,
    ].slice(0, 12));
    setMessage("Backup exported successfully.");
  };

  const importBackup = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (!parsed || typeof parsed !== "object") throw new Error("Invalid file format");

      const importedSchoolData = parsed.schoolData
        ? { ...deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA), ...parsed.schoolData }
        : deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA);
      const importedAccounts = Array.isArray(parsed.accounts)
        ? parsed.accounts
        : deepClone(DEFAULT_ADMIN_PORTAL_ACCOUNTS);
      const importedFaculty = Array.isArray(parsed.facultyProfiles)
        ? parsed.facultyProfiles
        : [deepClone(DUMMY_FACULTY_DETAIL)];

      setSchoolData(importedSchoolData);
      setAccounts(importedAccounts);
      setFacultyProfiles(importedFaculty);
      localStorage.setItem(SCHOOL_DASHBOARD_STORAGE_KEY, JSON.stringify(importedSchoolData));
      localStorage.setItem(ADMIN_PORTAL_ACCOUNTS_KEY, JSON.stringify(importedAccounts));
      importedFaculty.forEach((faculty) => {
        if (faculty?.id) {
          localStorage.setItem(`${FACULTY_PROFILE_STORAGE_PREFIX}${faculty.id}`, JSON.stringify(faculty));
        }
      });

      setActivityLog((prev) => [
        {
          id: `log-${Date.now()}`,
          action: "Imported admin backup",
          time: new Date().toISOString(),
        },
        ...prev,
      ].slice(0, 12));
      setMessage("Backup imported and applied successfully.");
    } catch {
      setMessage("Backup import failed. Please select a valid JSON backup file.");
    } finally {
      event.target.value = "";
    }
  };

  const normalizeFieldInput = (field, value) => {
    if (field.type === "number") return Number(value || 0);
    if (field.type === "boolean") return value === true || value === "true";
    return value;
  };

  const openCollectionAdd = (listKey, template) => {
    setCollectionEditors((prev) => ({
      ...prev,
      [listKey]: { index: null, form: { ...template, id: `${listKey}-${Date.now()}` } },
    }));
  };

  const openCollectionEdit = (listKey, index, item) => {
    if (listKey === "eventGallery") {
      const sourceImages = toList(item.images);
      const baseImages = [item.imageUrl, ...sourceImages].map((image) => String(image || "").trim()).filter(Boolean);
      const uniqueImages = [...new Set(baseImages)].slice(0, 4);
      setCollectionEditors((prev) => ({
        ...prev,
        [listKey]: {
          index,
          form: {
            ...item,
            imageUrl: uniqueImages[0] || "",
            imageUrl2: uniqueImages[1] || "",
            imageUrl3: uniqueImages[2] || "",
            imageUrl4: uniqueImages[3] || "",
          },
        },
      }));
      return;
    }

    setCollectionEditors((prev) => ({
      ...prev,
      [listKey]: { index, form: { ...item } },
    }));
  };

  const updateCollectionFormField = (listKey, field, value) => {
    setCollectionEditors((prev) => ({
      ...prev,
      [listKey]: {
        ...(prev[listKey] || { index: null, form: {} }),
        form: {
          ...((prev[listKey] && prev[listKey].form) || {}),
          [field.key]: normalizeFieldInput(field, value),
        },
      },
    }));
  };

  const saveCollectionForm = (listKey) => {
    const editor = collectionEditors[listKey];
    if (!editor?.form) return;

    let nextForm = { ...editor.form };
    if (listKey === "eventGallery") {
      const galleryImages = [
        nextForm.imageUrl,
        nextForm.imageUrl2,
        nextForm.imageUrl3,
        nextForm.imageUrl4,
        ...toList(nextForm.images),
      ]
        .map((item) => String(item || "").trim())
        .filter(Boolean);

      const uniqueImages = [...new Set(galleryImages)].slice(0, 4);
      if (galleryImages.length > 4) {
        setMessage("Event Gallery supports maximum 4 images per item.");
      }
      nextForm = {
        ...nextForm,
        imageUrl: uniqueImages[0] || "",
        images: uniqueImages,
      };
      delete nextForm.imageUrl2;
      delete nextForm.imageUrl3;
      delete nextForm.imageUrl4;
    }

    setSchoolData((prev) => {
      const next = [...(prev[listKey] || [])];
      if (editor.index === null || editor.index === undefined) next.push(nextForm);
      else next[editor.index] = nextForm;
      return { ...prev, [listKey]: next };
    });
    setCollectionEditors((prev) => ({ ...prev, [listKey]: { index: null, form: null } }));
  };

  const deleteCollectionItem = (listKey, index) => {
    setSchoolData((prev) => ({
      ...prev,
      [listKey]: (prev[listKey] || []).filter((_, i) => i !== index),
    }));
  };

  const filteredAccounts = useMemo(() => {
    const query = accountFilters.query.trim().toLowerCase();
    return accounts
      .map((acc, index) => ({ acc, index }))
      .filter(({ acc }) => {
      const matchesQuery =
        !query ||
        [acc.name, acc.username, acc.linkedFacultyId, acc.linkedSchool]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(query);
      const matchesRole = accountFilters.role === "all" || acc.role === accountFilters.role;
      const matchesStatus = accountFilters.status === "all" || acc.status === accountFilters.status;
      return matchesQuery && matchesRole && matchesStatus;
      });
  }, [accounts, accountFilters]);

  const departmentOptions = useMemo(() => {
    const allDepartments = facultyProfiles
      .map((item) => (item.department || "").trim())
      .filter(Boolean);
    return [...new Set(allDepartments)].sort((a, b) => a.localeCompare(b));
  }, [facultyProfiles]);

  const filteredFacultyProfiles = useMemo(() => {
    const query = facultyFilters.query.trim().toLowerCase();
    return facultyProfiles
      .map((faculty, index) => ({ faculty, index }))
      .filter(({ faculty }) => {
      const matchesQuery =
        !query ||
        [faculty.name, faculty.designation, faculty.department, faculty.email, faculty.phone]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(query);
      const matchesDepartment =
        facultyFilters.department === "all" || faculty.department === facultyFilters.department;
      return matchesQuery && matchesDepartment;
      });
  }, [facultyProfiles, facultyFilters]);

  const healthChecks = useMemo(() => {
    const inactiveAccounts = accounts.filter((item) => item.status === "inactive").length;
    const schoolUsersWithoutCode = accounts.filter(
      (item) => item.role === "school" && !String(item.linkedSchool || "").trim(),
    ).length;
    const facultyWithoutEmail = facultyProfiles.filter((item) => !String(item.email || "").trim()).length;
    const sectionsMissingData = [
      { key: "events", value: schoolData.events?.length || 0, label: "Events" },
      { key: "news", value: schoolData.news?.length || 0, label: "News" },
      { key: "notices", value: schoolData.notices?.length || 0, label: "Notices" },
      { key: "newsletters", value: schoolData.newsletters?.length || 0, label: "Newsletters" },
      { key: "gallery", value: schoolData.eventGallery?.length || 0, label: "Event Gallery" },
    ]
      .filter((item) => item.value === 0)
      .map((item) => item.label);

    return [
      {
        id: "inactive-accounts",
        title: "Inactive Accounts",
        value: inactiveAccounts,
        status: inactiveAccounts > 0 ? "warning" : "good",
      },
      {
        id: "school-code",
        title: "School Users Missing Code",
        value: schoolUsersWithoutCode,
        status: schoolUsersWithoutCode > 0 ? "warning" : "good",
      },
      {
        id: "faculty-email",
        title: "Faculty Missing Email",
        value: facultyWithoutEmail,
        status: facultyWithoutEmail > 0 ? "warning" : "good",
      },
      {
        id: "sections-empty",
        title: "Empty Content Sections",
        value: sectionsMissingData.length,
        detail: sectionsMissingData.join(", "),
        status: sectionsMissingData.length > 0 ? "warning" : "good",
      },
    ];
  }, [accounts, facultyProfiles, schoolData]);

  const renderCollectionEditor = (listKey, title, fields, newItemTemplate) => (
    <div className={cardClass}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        <button
          type="button"
          onClick={() => openCollectionAdd(listKey, newItemTemplate)}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
        >
          <Plus className="h-3.5 w-3.5" /> Add
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <FilterBar
            searchValue={collectionFilters[listKey] || ""}
            onSearchChange={(value) =>
              setCollectionFilters((prev) => ({
                ...prev,
                [listKey]: value,
              }))
            }
            searchPlaceholder={`Search ${title.toLowerCase()}...`}
            onClear={() =>
              setCollectionFilters((prev) => ({
                ...prev,
                [listKey]: "",
              }))
            }
          />

          <div className="max-h-[420px] space-y-2 overflow-y-auto pr-1">
            {(schoolData[listKey] || [])
              .map((item, index) => ({ item, index }))
              .filter(({ item }) => {
                const query = (collectionFilters[listKey] || "").trim().toLowerCase();
                if (!query) return true;
                return Object.values(item || {})
                  .filter((value) => value !== null && value !== undefined)
                  .join(" ")
                  .toLowerCase()
                  .includes(query);
              })
              .map(({ item, index }) => {
                const primaryValue = item.title || item.name || item.id || `Item ${index + 1}`;
                return (
                  <div key={`${listKey}-${item.id || index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">{primaryValue}</p>
                        <p className="text-xs text-slate-500">Item {index + 1}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => openCollectionEdit(listKey, index, item)}
                          className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
                        >
                          <Pencil className="h-3.5 w-3.5" /> Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteCollectionItem(listKey, index)}
                          className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 hover:bg-rose-100"
                        >
                          <Trash2 className="h-3.5 w-3.5" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          {collectionEditors[listKey]?.form ? (
            <>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">
                  {collectionEditors[listKey].index === null ? "Add Item" : "Edit Item"}
                </p>
                <button
                  type="button"
                  onClick={() => setCollectionEditors((prev) => ({ ...prev, [listKey]: { index: null, form: null } }))}
                  className="text-xs font-medium text-slate-500 hover:text-slate-700"
                >
                  Cancel
                </button>
              </div>

              <div className="max-h-[350px] space-y-3 overflow-y-auto pr-1">
                {fields.map((field) => (
                  <Field key={`${listKey}-${field.key}`} label={field.label}>
                    {field.type === "textarea" ? (
                      <textarea
                        className={`${inputClass} min-h-20`}
                        value={collectionEditors[listKey].form[field.key] || ""}
                        onChange={(e) => updateCollectionFormField(listKey, field, e.target.value)}
                      />
                    ) : field.type === "boolean" ? (
                      <select
                        className={inputClass}
                        value={String(collectionEditors[listKey].form[field.key] ?? false)}
                        onChange={(e) => updateCollectionFormField(listKey, field, e.target.value)}
                      >
                        <option value="true">true</option>
                        <option value="false">false</option>
                      </select>
                    ) : (
                      <input
                        className={inputClass}
                        type={field.type || "text"}
                        value={collectionEditors[listKey].form[field.key] || ""}
                        onChange={(e) => updateCollectionFormField(listKey, field, e.target.value)}
                      />
                    )}
                  </Field>
                ))}
              </div>

              <button
                type="button"
                onClick={() => saveCollectionForm(listKey)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex h-full min-h-[140px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
              Select item to edit or click Add.
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderAccountsTab = () => (
    <div className="space-y-4">
      <div className={cardClass}>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">User Login ID & Password Management</h2>
          <button
            type="button"
            onClick={() =>
              setAccountEditor({
                index: null,
                form: {
                  id: `acc-${Date.now()}`,
                  name: "",
                  username: "",
                  password: "",
                  role: "teacher",
                  status: "active",
                  linkedFacultyId: "",
                  linkedSchool: schoolData.schoolCode || "",
                },
              })
            }
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
          >
            <UserPlus className="h-3.5 w-3.5" /> Create Login
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <FilterBar
              searchValue={accountFilters.query}
              onSearchChange={(value) => setAccountFilters((prev) => ({ ...prev, query: value }))}
              searchPlaceholder="Search by name, username, faculty ID, school code..."
              onClear={() => setAccountFilters({ query: "", role: "all", status: "all" })}
            >
              <select
                className="rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs font-medium text-slate-700"
                value={accountFilters.role}
                onChange={(e) => setAccountFilters((prev) => ({ ...prev, role: e.target.value }))}
              >
                <option value="all">All Roles</option>
                <option value="admin">admin</option>
                <option value="school">school</option>
                <option value="teacher">teacher</option>
              </select>
              <select
                className="rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs font-medium text-slate-700"
                value={accountFilters.status}
                onChange={(e) => setAccountFilters((prev) => ({ ...prev, status: e.target.value }))}
              >
                <option value="all">All Status</option>
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </FilterBar>

            <div className="max-h-[520px] space-y-2 overflow-y-auto pr-1">
              {filteredAccounts.map(({ acc, index: actualIndex }, index) => {
                return (
              <div key={acc.id || index} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{acc.name || acc.username}</p>
                    <p className="text-xs text-slate-500">
                      @{acc.username} • {acc.role} • {acc.status}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAccountEditor({ index: actualIndex, form: { ...acc } })}
                      className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
                    >
                      <Pencil className="h-3.5 w-3.5" /> Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => setAccounts((prev) => prev.filter((_, i) => i !== actualIndex))}
                      className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 hover:bg-rose-100"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                    </button>
                  </div>
                </div>
              </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            {accountEditor.form ? (
              <>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">
                    {accountEditor.index === null ? "Create Account" : "Edit Account"}
                  </p>
                  <button
                    type="button"
                    onClick={() => setAccountEditor({ index: null, form: null })}
                    className="text-xs font-medium text-slate-500 hover:text-slate-700"
                  >
                    Cancel
                  </button>
                </div>

                <div className="space-y-3">
                  <Field label="Full Name">
                    <input
                      className={inputClass}
                      value={accountEditor.form.name || ""}
                      onChange={(e) =>
                        setAccountEditor((prev) => ({ ...prev, form: { ...prev.form, name: e.target.value } }))
                      }
                    />
                  </Field>
                  <Field label="Username">
                    <input
                      className={inputClass}
                      value={accountEditor.form.username || ""}
                      onChange={(e) =>
                        setAccountEditor((prev) => ({ ...prev, form: { ...prev.form, username: e.target.value } }))
                      }
                    />
                  </Field>
                  <Field label="Password">
                    <div className="flex items-center gap-2">
                      <input
                        className={inputClass}
                        type={showPassword ? "text" : "password"}
                        value={accountEditor.form.password || ""}
                        onChange={(e) =>
                          setAccountEditor((prev) => ({ ...prev, form: { ...prev.form, password: e.target.value } }))
                        }
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-3 text-slate-600 hover:bg-slate-100"
                        title={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setAccountEditor((prev) => ({
                            ...prev,
                            form: { ...prev.form, password: generateStrongPassword() },
                          }))
                        }
                        className="inline-flex h-10 items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 text-xs font-medium text-slate-700 hover:bg-slate-100"
                      >
                        <Sparkles className="h-3.5 w-3.5" /> Generate
                      </button>
                    </div>
                  </Field>
                  <Field label="Role">
                    <select
                      className={inputClass}
                      value={accountEditor.form.role || "teacher"}
                      onChange={(e) =>
                        setAccountEditor((prev) => ({ ...prev, form: { ...prev.form, role: e.target.value } }))
                      }
                    >
                      <option value="admin">admin</option>
                      <option value="school">school</option>
                      <option value="teacher">teacher</option>
                    </select>
                  </Field>
                  <Field label="Status">
                    <select
                      className={inputClass}
                      value={accountEditor.form.status || "active"}
                      onChange={(e) =>
                        setAccountEditor((prev) => ({ ...prev, form: { ...prev.form, status: e.target.value } }))
                      }
                    >
                      <option value="active">active</option>
                      <option value="inactive">inactive</option>
                    </select>
                  </Field>
                  <Field label="Linked Faculty ID (optional)">
                    <input
                      className={inputClass}
                      value={accountEditor.form.linkedFacultyId || ""}
                      onChange={(e) =>
                        setAccountEditor((prev) => ({
                          ...prev,
                          form: { ...prev.form, linkedFacultyId: e.target.value },
                        }))
                      }
                    />
                  </Field>
                  <Field label="Linked School Code">
                    <input
                      className={inputClass}
                      value={accountEditor.form.linkedSchool || ""}
                      onChange={(e) =>
                        setAccountEditor((prev) => ({ ...prev, form: { ...prev.form, linkedSchool: e.target.value } }))
                      }
                    />
                  </Field>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const form = accountEditor.form;
                    if (!form.username || !form.password || !form.role) {
                      setMessage("Username, password and role are required.");
                      return;
                    }
                    const duplicate = accounts.some(
                      (item, idx) =>
                        idx !== accountEditor.index &&
                        String(item.username || "").toLowerCase() === String(form.username || "").toLowerCase(),
                    );
                    if (duplicate) {
                      setMessage("This username already exists. Please use a unique username.");
                      return;
                    }
                    setAccounts((prev) => {
                      const next = [...prev];
                      if (accountEditor.index === null) next.push(form);
                      else next[accountEditor.index] = form;
                      return next;
                    });
                    setAccountEditor({ index: null, form: null });
                    setActivityLog((prev) => [
                      {
                        id: `log-${Date.now()}`,
                        action: `Updated login account: ${form.username}`,
                        time: new Date().toISOString(),
                      },
                      ...prev,
                    ].slice(0, 12));
                    setMessage("Login account updated.");
                  }}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Save Account
                </button>
              </>
            ) : (
              <div className="flex h-full min-h-[180px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
                Select account to edit or create new login ID.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderFacultyTab = () => (
    <div className={cardClass}>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Faculty Management</h2>
          <p className="text-xs text-slate-500">Bulk upload with template + auto faculty login generation supported.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={downloadFacultyTemplate}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Download className="h-3.5 w-3.5" /> Download Template
          </button>
          <button
            type="button"
            onClick={() => bulkFacultyInputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Upload className="h-3.5 w-3.5" /> Bulk Upload CSV
          </button>
          <input
            ref={bulkFacultyInputRef}
            type="file"
            accept=".csv,text/csv"
            onChange={handleBulkFacultyUpload}
            className="hidden"
          />
          <button
            type="button"
            onClick={() =>
              setFacultyEditor({
                index: null,
                form: {
                  id: `faculty-${Date.now()}`,
                  name: "",
                  designation: "",
                  department: "",
                  school: schoolData.schoolName || "",
                  email: "",
                  phone: "",
                  createLoginAccount: true,
                  sendCredentialsEmail: true,
                  generatedPassword: generateStrongPassword(),
                },
              })
            }
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
          >
            <Plus className="h-3.5 w-3.5" /> Add Faculty
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <FilterBar
            searchValue={facultyFilters.query}
            onSearchChange={(value) => setFacultyFilters((prev) => ({ ...prev, query: value }))}
            searchPlaceholder="Search by name, designation, department, email, phone..."
            onClear={() => setFacultyFilters({ query: "", department: "all" })}
          >
            <select
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs font-medium text-slate-700"
              value={facultyFilters.department}
              onChange={(e) => setFacultyFilters((prev) => ({ ...prev, department: e.target.value }))}
            >
              <option value="all">All Departments</option>
              {departmentOptions.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </FilterBar>

          <div className="max-h-[520px] space-y-2 overflow-y-auto pr-1">
            {filteredFacultyProfiles.map(({ faculty, index: actualIndex }, index) => {
              return (
            <div key={faculty.id || index} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">{faculty.name || "Untitled Faculty"}</p>
                  <p className="text-xs text-slate-500">{faculty.designation || "No designation"}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFacultyEditor({ index: actualIndex, form: { ...faculty } })}
                    className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
                  >
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => setFacultyProfiles((prev) => prev.filter((_, i) => i !== actualIndex))}
                    className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 hover:bg-rose-100"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          {facultyEditor.form ? (
            <>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">
                  {facultyEditor.index === null ? "Add Faculty" : "Edit Faculty"}
                </p>
                <button
                  type="button"
                  onClick={() => setFacultyEditor({ index: null, form: null })}
                  className="text-xs font-medium text-slate-500 hover:text-slate-700"
                >
                  Cancel
                </button>
              </div>

              <div className="space-y-3">
                <Field label="Name"><input className={inputClass} value={facultyEditor.form.name || ""} onChange={(e) => setFacultyEditor((prev) => ({ ...prev, form: { ...prev.form, name: e.target.value } }))} /></Field>
                <Field label="Designation"><input className={inputClass} value={facultyEditor.form.designation || ""} onChange={(e) => setFacultyEditor((prev) => ({ ...prev, form: { ...prev.form, designation: e.target.value } }))} /></Field>
                <Field label="Department"><input className={inputClass} value={facultyEditor.form.department || ""} onChange={(e) => setFacultyEditor((prev) => ({ ...prev, form: { ...prev.form, department: e.target.value } }))} /></Field>
                <Field label="School"><input className={inputClass} value={facultyEditor.form.school || ""} onChange={(e) => setFacultyEditor((prev) => ({ ...prev, form: { ...prev.form, school: e.target.value } }))} /></Field>
                <Field label="Email"><input className={inputClass} value={facultyEditor.form.email || ""} onChange={(e) => setFacultyEditor((prev) => ({ ...prev, form: { ...prev.form, email: e.target.value } }))} /></Field>
                <Field label="Phone"><input className={inputClass} value={facultyEditor.form.phone || ""} onChange={(e) => setFacultyEditor((prev) => ({ ...prev, form: { ...prev.form, phone: e.target.value } }))} /></Field>
                <Field label="Create Login Account">
                  <select
                    className={inputClass}
                    value={String(facultyEditor.form.createLoginAccount ?? true)}
                    onChange={(e) =>
                      setFacultyEditor((prev) => ({
                        ...prev,
                        form: { ...prev.form, createLoginAccount: e.target.value === "true" },
                      }))
                    }
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </Field>
                <Field label="Send Credentials Email (queue for backend)">
                  <select
                    className={inputClass}
                    value={String(facultyEditor.form.sendCredentialsEmail ?? true)}
                    onChange={(e) =>
                      setFacultyEditor((prev) => ({
                        ...prev,
                        form: { ...prev.form, sendCredentialsEmail: e.target.value === "true" },
                      }))
                    }
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </Field>
                <Field label="Generated Password">
                  <div className="flex items-center gap-2">
                    <input className={inputClass} value={facultyEditor.form.generatedPassword || ""} readOnly />
                    <button
                      type="button"
                      onClick={() =>
                        setFacultyEditor((prev) => ({
                          ...prev,
                          form: { ...prev.form, generatedPassword: generateStrongPassword() },
                        }))
                      }
                      className="inline-flex h-10 items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 text-xs font-medium text-slate-700 hover:bg-slate-100"
                    >
                      <Sparkles className="h-3.5 w-3.5" /> Regenerate
                    </button>
                  </div>
                </Field>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (!facultyEditor.form?.name?.trim()) {
                    setMessage("Faculty name is required.");
                    return;
                  }
                  const facultyForm = {
                    ...facultyEditor.form,
                    createLoginAccount: toBool(facultyEditor.form.createLoginAccount, true),
                    sendCredentialsEmail: toBool(facultyEditor.form.sendCredentialsEmail, true),
                  };

                  setFacultyProfiles((prev) => {
                    const next = [...prev];
                    if (facultyEditor.index === null) next.push(facultyForm);
                    else next[facultyEditor.index] = facultyForm;
                    return next;
                  });

                  if (facultyForm.createLoginAccount) {
                    const isEdit = facultyEditor.index !== null;
                    const existingForFaculty = accounts.find(
                      (item) => item.linkedFacultyId && item.linkedFacultyId === facultyForm.id,
                    );
                    const generatedPassword = facultyForm.generatedPassword || generateStrongPassword();
                    const account = createFacultyAccount(facultyForm, accounts, generatedPassword);

                    if (!(isEdit && existingForFaculty)) {
                      setAccounts((prev) => [...prev, account]);
                    }

                    if (facultyForm.sendCredentialsEmail && facultyForm.email) {
                      setMailQueue((prev) => [
                        {
                          id: `mail-${Date.now()}`,
                          to: facultyForm.email,
                          subject: "GBU Faculty Portal Credentials",
                          status: "pending-backend",
                          payload: {
                            facultyName: facultyForm.name,
                            username: account.username,
                            password: account.password,
                            linkedFacultyId: facultyForm.id,
                          },
                          createdAt: new Date().toISOString(),
                        },
                        ...prev,
                      ].slice(0, 100));
                    }
                  }

                  setActivityLog((prev) => [
                    {
                      id: `log-${Date.now()}`,
                      action: `Updated faculty profile: ${facultyForm.name}`,
                      time: new Date().toISOString(),
                    },
                    ...prev,
                  ].slice(0, 12));
                  setFacultyEditor({ index: null, form: null });
                  setMessage("Faculty profile updated. Login + email queue processed as selected.");
                }}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Save Faculty
              </button>
            </>
          ) : (
            <div className="flex h-full min-h-[180px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
              Select faculty to edit or create new profile.
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderSchoolTab = () => (
    <div className="space-y-4">

       

      {activeSchoolSubTab === "basic" && (
        <div className={cardClass}>
          <h3 className="mb-4 text-lg font-semibold text-slate-900">School Basic Settings</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="School Name">
              <input
                className={inputClass}
                value={schoolData.schoolName || ""}
                onChange={(e) => setSchoolData((prev) => ({ ...prev, schoolName: e.target.value }))}
              />
            </Field>
            <Field label="School Code">
              <input
                className={inputClass}
                value={schoolData.schoolCode || ""}
                onChange={(e) => setSchoolData((prev) => ({ ...prev, schoolCode: e.target.value }))}
              />
            </Field>
            <Field label="Dean Name">
              <input
                className={inputClass}
                value={schoolData.deanName || ""}
                onChange={(e) => setSchoolData((prev) => ({ ...prev, deanName: e.target.value }))}
              />
            </Field>
            <Field label="School Email">
              <input
                className={inputClass}
                value={schoolData.email || ""}
                onChange={(e) => setSchoolData((prev) => ({ ...prev, email: e.target.value }))}
              />
            </Field>
            <Field label="Phone">
              <input
                className={inputClass}
                value={schoolData.phone || ""}
                onChange={(e) => setSchoolData((prev) => ({ ...prev, phone: e.target.value }))}
              />
            </Field>
            <Field label="Website URL">
              <input
                className={inputClass}
                value={schoolData.websiteUrl || ""}
                onChange={(e) => setSchoolData((prev) => ({ ...prev, websiteUrl: e.target.value }))}
              />
            </Field>
            <Field label="Banner Image URL">
              <input
                className={inputClass}
                value={schoolData.bannerImage || ""}
                onChange={(e) => setSchoolData((prev) => ({ ...prev, bannerImage: e.target.value }))}
              />
            </Field>
            <Field label="Address">
              <input
                className={inputClass}
                value={schoolData.address || ""}
                onChange={(e) => setSchoolData((prev) => ({ ...prev, address: e.target.value }))}
              />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="School Description">
              <textarea
                className={`${inputClass} min-h-28`}
                value={schoolData.schoolDescription || ""}
                onChange={(e) => setSchoolData((prev) => ({ ...prev, schoolDescription: e.target.value }))}
              />
            </Field>
          </div>
        </div>
      )}

      {activeSchoolSubTab === "events" &&
        renderCollectionEditor(
          "events",
          "Events",
          [
            { key: "title", label: "Event Title" },
            { key: "date", label: "Date", type: "date" },
            { key: "startsAt", label: "Starts At" },
            { key: "endDate", label: "End Date", type: "date" },
            { key: "endsAt", label: "Ends At" },
            { key: "time", label: "Time" },
            { key: "venue", label: "Venue" },
            { key: "location", label: "Location" },
            { key: "type", label: "Type" },
            { key: "mode", label: "Mode" },
            { key: "organizer", label: "Organizer" },
            { key: "attendees", label: "Attendees", type: "number" },
            { key: "price", label: "Price" },
            { key: "tags", label: "Tags (comma separated)" },
            { key: "image", label: "Image URL" },
            { key: "imageLink", label: "Image Click Link" },
            { key: "coverImageUrl", label: "Cover Image URL" },
            { key: "images", label: "Gallery Images (comma separated URLs)" },
            { key: "registrationUrl", label: "Registration URL" },
            { key: "description", label: "Description", type: "textarea" },
          ],
          {
            title: "",
            date: "",
            startsAt: "",
            endDate: "",
            endsAt: "",
            time: "",
            venue: "",
            location: "",
            type: "",
            mode: "Offline",
            organizer: "",
            attendees: 0,
            price: "Free",
            tags: "",
            image: "",
            imageLink: "",
            coverImageUrl: "",
            images: "",
            registrationUrl: "",
            description: "",
          },
        )}

      {activeSchoolSubTab === "news" &&
        renderCollectionEditor(
          "news",
          "News",
          [
            { key: "title", label: "News Title" },
            { key: "date", label: "Date", type: "date" },
            { key: "category", label: "Category" },
            { key: "author", label: "Author" },
            { key: "department", label: "Department" },
            { key: "tags", label: "Tags (comma separated)" },
            { key: "priority", label: "Priority" },
            { key: "featured", label: "Featured", type: "boolean" },
            { key: "views", label: "Views", type: "number" },
            { key: "likes", label: "Likes", type: "number" },
            { key: "image", label: "Image URL" },
            { key: "imageLink", label: "Image Click Link" },
            { key: "coverImageUrl", label: "Cover Image URL" },
            { key: "pdfUrl", label: "PDF URL" },
            { key: "link", label: "External Link" },
            { key: "excerpt", label: "Excerpt", type: "textarea" },
            { key: "content", label: "Content", type: "textarea" },
            { key: "status", label: "Status" },
          ],
          {
            title: "",
            date: "",
            category: "Academic",
            author: "School Office",
            department: "",
            tags: "",
            priority: "medium",
            featured: false,
            views: 0,
            likes: 0,
            image: "",
            imageLink: "",
            coverImageUrl: "",
            pdfUrl: "",
            link: "",
            excerpt: "",
            content: "",
            status: "draft",
          },
        )}

      {activeSchoolSubTab === "notices" &&
        renderCollectionEditor(
          "notices",
          "Notices",
          [
            { key: "title", label: "Notice Title" },
            { key: "date", label: "Date", type: "date" },
            { key: "type", label: "Type" },
            { key: "priority", label: "Priority" },
            { key: "isNew", label: "New Badge", type: "boolean" },
            { key: "views", label: "Views", type: "number" },
            { key: "image", label: "Image URL" },
            { key: "imageLink", label: "Image Click Link" },
            { key: "pdfUrl", label: "PDF URL" },
            { key: "content", label: "Content", type: "textarea" },
          ],
          {
            title: "",
            date: "",
            type: "General",
            priority: "medium",
            isNew: true,
            views: 0,
            image: "",
            imageLink: "",
            pdfUrl: "",
            content: "",
          },
        )}

      {activeSchoolSubTab === "newsletters" &&
        renderCollectionEditor(
          "newsletters",
          "Newsletters",
          [
            { key: "title", label: "Title" },
            { key: "date", label: "Date", type: "date" },
            { key: "issueNumber", label: "Issue Number" },
            { key: "category", label: "Category" },
            { key: "views", label: "Views", type: "number" },
            { key: "coverImage", label: "Cover Image URL" },
            { key: "imageLink", label: "Image Click Link" },
            { key: "pdfLink", label: "PDF Link" },
            { key: "excerpt", label: "Excerpt", type: "textarea" },
            { key: "content", label: "Content", type: "textarea" },
            { key: "isPublished", label: "Published", type: "boolean" },
          ],
          {
            title: "",
            date: "",
            issueNumber: "",
            category: "School Update",
            views: 0,
            coverImage: "",
            imageLink: "",
            pdfLink: "",
            excerpt: "",
            content: "",
            isPublished: true,
          },
        )}

      {activeSchoolSubTab === "gallery" &&
        renderCollectionEditor(
          "eventGallery",
          "Event Gallery",
          [
            { key: "title", label: "Gallery Title" },
            { key: "eventDate", label: "Event Date", type: "date" },
            { key: "category", label: "Category" },
            { key: "imageUrl", label: "Image 1 URL" },
            { key: "imageUrl2", label: "Image 2 URL" },
            { key: "imageUrl3", label: "Image 3 URL" },
            { key: "imageUrl4", label: "Image 4 URL" },
            { key: "imageLink", label: "Image Click Link" },
          ],
          {
            title: "",
            eventDate: "",
            category: "Events",
            imageUrl: "",
            imageUrl2: "",
            imageUrl3: "",
            imageUrl4: "",
            imageLink: "",
          },
        )}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-2 md:p-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        <aside className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:w-80 lg:self-start">
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Admin Navigation</h2>

            <div className="mt-3 flex-1 space-y-2 overflow-y-auto pr-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <div key={tab.id} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                        isActive ? "bg-slate-900 text-white shadow" : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </button>

                    {tab.id === "school" && isActive && (
                      <div className="relative ml-2 mt-2 space-y-2 pl-5">
                        <div className="pointer-events-none absolute bottom-2 left-1 top-2 w-1 rounded-full bg-gradient-to-b from-blue-200 via-indigo-200 to-sky-200" />
                        {schoolContentTabs.map((subTab) => {
                          const SubIcon = subTab.icon;
                          const isSubActive = activeSchoolSubTab === subTab.id;
                          return (
                            <button
                              key={subTab.id}
                              type="button"
                              onClick={() => setActiveSchoolSubTab(subTab.id)}
                              className={`group relative flex w-full items-center gap-2 rounded-2xl border px-3 py-2.5 text-left text-xs font-semibold transition-all duration-200 ${
                                isSubActive
                                  ? "border-blue-400 bg-blue-50 text-slate-900 shadow-sm"
                                  : "border-transparent bg-slate-50/70 text-slate-600 hover:border-slate-200 hover:bg-white hover:text-slate-900"
                              }`}
                            >
                              <span
                                className={`absolute -left-[18px] h-2.5 w-2.5 rounded-full ring-4 ring-white transition ${
                                  isSubActive ? "bg-blue-500" : "bg-slate-300 group-hover:bg-slate-400"
                                }`}
                              />
                              <SubIcon className={`h-3.5 w-3.5 ${isSubActive ? "text-blue-600" : "text-slate-500"}`} />
                              {subTab.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-auto rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="mt-2 space-y-2">
                <button
                  onClick={exportBackup}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  <Download className="h-4 w-4" /> Export Backup
                </button>
                {/* <button
                  onClick={() => backupInputRef.current?.click()}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  <Upload className="h-4 w-4" /> Import Backup
                </button> */}
                <input
                  ref={backupInputRef}
                  type="file"
                  accept="application/json"
                  onChange={importBackup}
                  className="hidden"
                />
                <button
                  onClick={saveAll}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  <Save className="h-4 w-4" /> Save All
                </button>
                {/* <button
                  onClick={resetAll}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  <RotateCcw className="h-4 w-4" /> Reset
                </button> */}
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
          <section className={cardClass}>
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-slate-600">
                Manage your school data, faculty profiles, and user accounts all in one place.

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

          {activeTab === "overview" && (
            <section className="space-y-4">
              <div className={cardClass}>
                <h2 className="mb-4 text-lg font-semibold text-slate-900">What You Can Control</h2>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-blue-100 p-2 text-blue-700"><KeyRound className="h-4 w-4" /></div>
                    <p className="font-semibold text-slate-900">User Management</p>
                    <p className="mt-1 text-sm text-slate-600">Generate login IDs/passwords for admin, school, and faculty users.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-green-100 p-2 text-green-700"><Users className="h-4 w-4" /></div>
                    <p className="font-semibold text-slate-900">Faculty Management</p>
                    <p className="mt-1 text-sm text-slate-600">Create and update faculty profiles directly from admin panel.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-indigo-100 p-2 text-indigo-700"><School className="h-4 w-4" /></div>
                    <p className="font-semibold text-slate-900">School Content</p>
                    <p className="mt-1 text-sm text-slate-600">Manage events, news, notices, newsletters, and gallery data.</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className={cardClass}>
                  <div className="mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <h3 className="text-base font-semibold text-slate-900">System Health Checks</h3>
                  </div>
                  <div className="space-y-2">
                    {healthChecks.map((item) => (
                      <div key={item.id} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-medium text-slate-800">{item.title}</p>
                          <span
                            className={`rounded-full px-2 py-1 text-xs font-semibold ${
                              item.status === "warning"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            {item.value}
                          </span>
                        </div>
                        {item.detail ? <p className="mt-1 text-xs text-slate-500">{item.detail}</p> : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={cardClass}>
                  <div className="mb-3 flex items-center gap-2">
                    <Activity className="h-4 w-4 text-blue-600" />
                    <h3 className="text-base font-semibold text-slate-900">Recent Activity</h3>
                  </div>
                  {activityLog.length ? (
                    <div className="max-h-[260px] space-y-2 overflow-y-auto pr-1">
                      {activityLog.map((log) => (
                        <div key={log.id} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                          <p className="text-sm font-medium text-slate-800">{log.action}</p>
                          <p className="mt-1 text-xs text-slate-500">{new Date(log.time).toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
                      No recent activity yet. Actions will appear here.
                    </p>
                  )}
                </div>
              </div>
            </section>
          )}

          {activeTab === "accounts" && renderAccountsTab()}
          {activeTab === "faculty" && renderFacultyTab()}
          {activeTab === "school" && renderSchoolTab()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
