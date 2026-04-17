import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Save,
  RotateCcw,
  LogOut,
  Home,
  Users,
  CalendarDays,
  Newspaper,
  Bell,
  Images,
  Lock,
  Plus,
  Trash2,
  Pencil,
} from "lucide-react";
import {
  DEFAULT_SCHOOL_DASHBOARD_DATA,
  SCHOOL_DASHBOARD_STORAGE_KEY,
} from "../../Data/schoolDashboardData";
import {
  DUMMY_FACULTY_DETAIL,
  FACULTY_PROFILE_STORAGE_PREFIX,
} from "../../Data/facultyDummyData";

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const ACTIVE_TABS = [
  { id: "home", label: "Home", icon: Home },
  { id: "faculty-management", label: "Faculty Management", icon: Users },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "news", label: "News", icon: Newspaper },
  { id: "newsletters", label: "Newsletters", icon: Newspaper },
  { id: "notices", label: "Notices", icon: Bell },
  { id: "event-gallery", label: "Event Gallery", icon: Images },
];

const INACTIVE_TABS = [
  "About Us",
  "Departments & Academic Programs",
  "Research",
  "Placement",
  "Contact Us",
];

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-700";

const cardClass = "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm";

const Field = ({ label, children }) => (
  <div>
    <label className="mb-1 block text-sm font-medium text-slate-700">{label}</label>
    {children}
  </div>
);

const ensureArray = (value, fallback) => (Array.isArray(value) ? value : fallback);
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

const getInitialSchoolData = () => {
  try {
    const raw = localStorage.getItem(SCHOOL_DASHBOARD_STORAGE_KEY);
    if (!raw) return deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA);
    const parsed = JSON.parse(raw);
    return {
      ...deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA),
      ...parsed,
      highlights: ensureArray(parsed.highlights, deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.highlights)),
      departments: ensureArray(parsed.departments, deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.departments)),
      pages: ensureArray(parsed.pages, deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.pages)),
      announcements: ensureArray(parsed.announcements, deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.announcements)),
      events: ensureArray(parsed.events, deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.events || [])),
      news: ensureArray(parsed.news, deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.news || [])),
      notices: ensureArray(parsed.notices, deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.notices || [])),
      newsletters: ensureArray(parsed.newsletters, deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.newsletters || [])),
      eventGallery: ensureArray(parsed.eventGallery, deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.eventGallery || [])),
      tabContent: {
        ...deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA.tabContent),
        ...(parsed.tabContent || {}),
      },
    };
  } catch {
    return deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA);
  }
};

const getFacultyProfilesBySchool = (schoolName) => {
  const normalizedSchool = (schoolName || "").trim().toLowerCase();
  const list = [];

  try {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(FACULTY_PROFILE_STORAGE_PREFIX)) continue;
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const profile = JSON.parse(raw);
      if (!profile || typeof profile !== "object") continue;

      const profileSchool = (profile.school || "").trim().toLowerCase();
      if (!normalizedSchool || profileSchool === normalizedSchool) {
        list.push(profile);
      }
    }

    const dummySchool = (DUMMY_FACULTY_DETAIL.school || "").trim().toLowerCase();
    const hasDummy = list.some((item) => item.id === DUMMY_FACULTY_DETAIL.id);
    if ((!normalizedSchool || dummySchool === normalizedSchool) && !hasDummy) {
      list.push(DUMMY_FACULTY_DETAIL);
    }
  } catch {
    return [DUMMY_FACULTY_DETAIL];
  }

  return list;
};

const SchoolDashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(getInitialSchoolData);
  const [activeTab, setActiveTab] = useState("home");
  const [message, setMessage] = useState("");
  const [facultyRefreshKey, setFacultyRefreshKey] = useState(0);
  const [collectionEditors, setCollectionEditors] = useState({});
  const [facultyEditor, setFacultyEditor] = useState({ index: null, form: null });

  const facultyProfiles = useMemo(
    () => getFacultyProfilesBySchool(data.schoolName),
    [data.schoolName, facultyRefreshKey]
  );

  const summary = useMemo(
    () => [
      { label: "Faculty", value: facultyProfiles.length },
      { label: "Events", value: data.events?.length || 0 },
      { label: "News", value: data.news?.length || 0 },
      { label: "Newsletters", value: data.newsletters?.length || 0 },
      { label: "Notices", value: data.notices?.length || 0 },
    ],
    [facultyProfiles.length, data.events, data.news, data.newsletters, data.notices]
  );

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

  const saveAll = () => {
    localStorage.setItem(SCHOOL_DASHBOARD_STORAGE_KEY, JSON.stringify(data));
    setMessage("School dashboard updated successfully.");
  };

  const resetAll = () => {
    setData(deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA));
    localStorage.removeItem(SCHOOL_DASHBOARD_STORAGE_KEY);
    setMessage("School dashboard reset to default data.");
  };

  const saveFacultyProfile = (faculty) => {
    if (!faculty?.id) return;
    localStorage.setItem(`${FACULTY_PROFILE_STORAGE_PREFIX}${faculty.id}`, JSON.stringify(faculty));
    setFacultyRefreshKey((prev) => prev + 1);
    setMessage(`Faculty profile updated: ${faculty.name}`);
  };

  const deleteFacultyProfile = (facultyId) => {
    if (!facultyId) return;
    localStorage.removeItem(`${FACULTY_PROFILE_STORAGE_PREFIX}${facultyId}`);
    setFacultyRefreshKey((prev) => prev + 1);
    setFacultyEditor({ index: null, form: null });
    setMessage("Faculty profile deleted.");
  };

  const addFacultyProfile = () => {
    setFacultyEditor({
      index: null,
      form: {
        id: `faculty-${Date.now()}`,
        name: "",
        designation: "",
        department: "",
        school: data.schoolName || "",
        email: "",
        phone: "",
      },
    });
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

  const cancelCollectionEdit = (listKey) => {
    setCollectionEditors((prev) => ({
      ...prev,
      [listKey]: { index: null, form: null },
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

    setData((prev) => {
      const next = [...(prev[listKey] || [])];
      if (editor.index === null || editor.index === undefined) {
        next.push(nextForm);
      } else {
        next[editor.index] = nextForm;
      }
      return { ...prev, [listKey]: next };
    });

    setCollectionEditors((prev) => ({
      ...prev,
      [listKey]: { index: null, form: null },
    }));
    setMessage(`${listKey} item saved.`);
  };

  const deleteCollectionItem = (listKey, index) => {
    setData((prev) => ({
      ...prev,
      [listKey]: (prev[listKey] || []).filter((_, i) => i !== index),
    }));

    setCollectionEditors((prev) => {
      const current = prev[listKey] || { index: null, form: null };
      if (current.index === index) return { ...prev, [listKey]: { index: null, form: null } };
      return prev;
    });

    setMessage(`${listKey} item deleted.`);
  };

  const renderCollectionEditor = (listKey, title, fields, newItemTemplate) => (
    <div className={cardClass}>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <button
          type="button"
          onClick={() => openCollectionAdd(listKey, newItemTemplate)}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
        >
          <Plus className="h-3.5 w-3.5" /> Add New
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="max-h-[520px] space-y-2 overflow-y-auto pr-1">
          {(data[listKey] || []).map((item, index) => {
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

          {(data[listKey] || []).length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
              No items yet. Click Add New to create one.
            </div>
          )}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          {collectionEditors[listKey]?.form ? (
            <>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">
                  {collectionEditors[listKey].index === null ? "Add New Item" : "Edit Item"}
                </p>
                <button
                  type="button"
                  onClick={() => cancelCollectionEdit(listKey)}
                  className="text-xs font-medium text-slate-500 hover:text-slate-700"
                >
                  Cancel
                </button>
              </div>

              <div className="max-h-[440px] space-y-3 overflow-y-auto pr-1">
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
                Save Item
              </button>
            </>
          ) : (
            <div className="flex h-full min-h-[180px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
              Select an item to edit, or click Add New.
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderFacultyEditor = () => (
    <div className={cardClass}>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Faculty Management</h2>
          <p className="text-sm text-slate-600">Compact single form with add, edit and delete actions.</p>
        </div>
        <button
          type="button"
          onClick={addFacultyProfile}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
        >
          <Plus className="h-3.5 w-3.5" /> Add New
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="max-h-[520px] space-y-2 overflow-y-auto pr-1">
          {facultyProfiles.map((faculty, index) => (
            <div key={faculty.id || index} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">{faculty.name || "Untitled Faculty"}</p>
                  <p className="text-xs text-slate-500">{faculty.designation || "No designation"}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFacultyEditor({ index, form: { ...faculty } })}
                    className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
                  >
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteFacultyProfile(faculty.id)}
                    className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 hover:bg-rose-100"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          {facultyProfiles.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
              No faculty found. Click Add New to create one.
            </div>
          )}
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
              </div>

              <button
                type="button"
                onClick={() => {
                  saveFacultyProfile(facultyEditor.form);
                  setFacultyEditor({ index: null, form: null });
                }}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Save Faculty
              </button>
            </>
          ) : (
            <div className="flex h-full min-h-[180px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
              Select a faculty to edit, or click Add New.
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderBody = () => {
    if (activeTab === "home") {
      return (
        <div className={cardClass}>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Home Management</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="School Name">
              <input className={inputClass} value={data.schoolName || ""} onChange={(e) => updateField("schoolName", e.target.value)} />
            </Field>
            <Field label="Dean Name">
              <input className={inputClass} value={data.deanName || ""} onChange={(e) => updateField("deanName", e.target.value)} />
            </Field>
            <Field label="Hero Title">
              <input className={inputClass} value={data.tabContent.home.heroTitle || ""} onChange={(e) => updateTabContent("home", "heroTitle", e.target.value)} />
            </Field>
            <Field label="Hero Subtitle">
              <input className={inputClass} value={data.tabContent.home.heroSubtitle || ""} onChange={(e) => updateTabContent("home", "heroSubtitle", e.target.value)} />
            </Field>
            <Field label="Banner Image URL">
              <input className={inputClass} value={data.bannerImage || ""} onChange={(e) => updateField("bannerImage", e.target.value)} />
            </Field>
            <Field label="School Email">
              <input className={inputClass} value={data.email || ""} onChange={(e) => updateField("email", e.target.value)} />
            </Field>
          </div>

          <div className="mt-4">
            <Field label="School Description">
              <textarea className={`${inputClass} min-h-28`} value={data.schoolDescription || ""} onChange={(e) => updateField("schoolDescription", e.target.value)} />
            </Field>
          </div>
        </div>
      );
    }

    if (activeTab === "faculty-management") return renderFacultyEditor();

    if (activeTab === "events") {
      return renderCollectionEditor(
        "events",
        "Events Management",
        [
          { key: "title", label: "Event Title" },
          { key: "date", label: "Date", type: "date" },
          { key: "startsAt", label: "Starts At (ISO or date/time text)" },
          { key: "endDate", label: "End Date", type: "date" },
          { key: "endsAt", label: "Ends At (ISO or date/time text)" },
          { key: "time", label: "Time" },
          { key: "venue", label: "Venue" },
          { key: "location", label: "Location" },
          { key: "organizer", label: "Organizer" },
          { key: "type", label: "Type" },
          { key: "mode", label: "Mode (Offline/Online/Hybrid)" },
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
          organizer: "",
          type: "",
          mode: "Offline",
          attendees: 0,
          price: "Free",
          tags: "",
          image: "",
          imageLink: "",
          coverImageUrl: "",
          images: "",
          registrationUrl: "",
          description: "",
        }
      );
    }

    if (activeTab === "news") {
      return renderCollectionEditor(
        "news",
        "News Management",
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
        }
      );
    }

    if (activeTab === "newsletters") {
      return renderCollectionEditor(
        "newsletters",
        "Newsletter Management",
        [
          { key: "title", label: "Title" },
          { key: "date", label: "Date", type: "date" },
          { key: "category", label: "Category" },
          { key: "issueNumber", label: "Issue Number" },
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
          category: "School Update",
          issueNumber: "",
          views: 0,
          coverImage: "",
          imageLink: "",
          pdfLink: "",
          excerpt: "",
          content: "",
          isPublished: true,
        }
      );
    }

    if (activeTab === "notices") {
      return renderCollectionEditor(
        "notices",
        "Notice Management",
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
        }
      );
    }

    return renderCollectionEditor(
      "eventGallery",
      "Event Gallery Management",
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
      }
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 p-2 md:p-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        <aside className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:w-80 lg:self-start">
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">School Navigation</h2>

            <div className="mt-3 flex-1 space-y-2 overflow-y-auto pr-1">
              {ACTIVE_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                      isActive ? "bg-slate-900 text-white shadow" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-2">
                <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Upcoming Tabs</p>
                <div className="space-y-1">
                  {INACTIVE_TABS.map((label) => (
                    <button
                      key={label}
                      type="button"
                      disabled
                      className="flex w-full cursor-not-allowed items-center gap-2 rounded-lg px-3 py-2 text-left text-xs text-slate-400"
                    >
                      <Lock className="h-3.5 w-3.5" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="mt-2 space-y-2">
                <button onClick={saveAll} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                  <Save className="h-4 w-4" /> Save All
                </button>
                {/* <button onClick={resetAll} className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                  <RotateCcw className="h-4 w-4" /> Reset
                </button> */}
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
            <p className="mt-1 text-sm text-slate-600">Operational dashboard for school-level content and management.</p>
            {message ? <p className="mt-3 text-sm font-medium text-emerald-700">{message}</p> : null}
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {summary.map((item) => (
              <div key={item.label} className={cardClass}>
                <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
              </div>
            ))}
          </section>

          {renderBody()}
        </main>
      </div>
    </div>
  );
};

export default SchoolDashboard;
