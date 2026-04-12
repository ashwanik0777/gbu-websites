import React, { useMemo, useState } from "react";
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
    setMessage("Admin dashboard saved. School + Faculty + User login system updated.");
  };

  const resetAll = () => {
    setSchoolData(deepClone(DEFAULT_SCHOOL_DASHBOARD_DATA));
    setAccounts(deepClone(DEFAULT_ADMIN_PORTAL_ACCOUNTS));
    setFacultyProfiles([deepClone(DUMMY_FACULTY_DETAIL)]);
    localStorage.removeItem(SCHOOL_DASHBOARD_STORAGE_KEY);
    localStorage.removeItem(ADMIN_PORTAL_ACCOUNTS_KEY);
    setMessage("Admin dashboard reset to default data.");
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
    setSchoolData((prev) => {
      const next = [...(prev[listKey] || [])];
      if (editor.index === null || editor.index === undefined) next.push(editor.form);
      else next[editor.index] = editor.form;
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
        <div className="max-h-[420px] space-y-2 overflow-y-auto pr-1">
          {(schoolData[listKey] || []).map((item, index) => {
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
          <div className="max-h-[520px] space-y-2 overflow-y-auto pr-1">
            {accounts.map((acc, index) => (
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
                      onClick={() => setAccountEditor({ index, form: { ...acc } })}
                      className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
                    >
                      <Pencil className="h-3.5 w-3.5" /> Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => setAccounts((prev) => prev.filter((_, i) => i !== index))}
                      className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 hover:bg-rose-100"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
                    <input
                      className={inputClass}
                      value={accountEditor.form.password || ""}
                      onChange={(e) =>
                        setAccountEditor((prev) => ({ ...prev, form: { ...prev.form, password: e.target.value } }))
                      }
                    />
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
                    setAccounts((prev) => {
                      const next = [...prev];
                      if (accountEditor.index === null) next.push(form);
                      else next[accountEditor.index] = form;
                      return next;
                    });
                    setAccountEditor({ index: null, form: null });
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
        <h2 className="text-lg font-semibold text-slate-900">Faculty Management</h2>
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
              },
            })
          }
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
        >
          <Plus className="h-3.5 w-3.5" /> Add Faculty
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
                    onClick={() => setFacultyProfiles((prev) => prev.filter((_, i) => i !== index))}
                    className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 hover:bg-rose-100"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
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
                  setFacultyProfiles((prev) => {
                    const next = [...prev];
                    if (facultyEditor.index === null) next.push(facultyEditor.form);
                    else next[facultyEditor.index] = facultyEditor.form;
                    return next;
                  });
                  setFacultyEditor({ index: null, form: null });
                  setMessage("Faculty profile updated.");
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
            { key: "time", label: "Time" },
            { key: "venue", label: "Venue" },
            { key: "type", label: "Type" },
            { key: "organizer", label: "Organizer" },
            { key: "registrationUrl", label: "Registration URL" },
            { key: "description", label: "Description", type: "textarea" },
          ],
          {
            title: "",
            date: "",
            time: "",
            venue: "",
            type: "",
            organizer: "",
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
            { key: "priority", label: "Priority" },
            { key: "excerpt", label: "Excerpt", type: "textarea" },
            { key: "content", label: "Content", type: "textarea" },
          ],
          {
            title: "",
            date: "",
            category: "Academic",
            priority: "medium",
            excerpt: "",
            content: "",
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
            { key: "content", label: "Content", type: "textarea" },
          ],
          {
            title: "",
            date: "",
            type: "General",
            priority: "medium",
            isNew: true,
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
            { key: "pdfLink", label: "PDF Link" },
          ],
          {
            title: "",
            date: "",
            issueNumber: "",
            category: "School Update",
            pdfLink: "",
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
            { key: "imageUrl", label: "Image URL" },
          ],
          {
            title: "",
            eventDate: "",
            category: "Events",
            imageUrl: "",
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
                {/* simple 2 words only  */}
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
            <section className={cardClass}>
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
