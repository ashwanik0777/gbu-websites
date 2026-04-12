export const ADMIN_PORTAL_ACCOUNTS_KEY = "gbu_admin_portal_accounts";

export const DEFAULT_ADMIN_PORTAL_ACCOUNTS = [
  {
    id: "acc-admin-1",
    name: "Central Admin",
    username: "admin",
    password: "admin123",
    role: "admin",
    status: "active",
    linkedFacultyId: "",
    linkedSchool: "",
  },
  {
    id: "acc-school-1",
    name: "School Office",
    username: "school",
    password: "school123",
    role: "school",
    status: "active",
    linkedFacultyId: "",
    linkedSchool: "SOICT",
  },
  {
    id: "acc-faculty-1",
    name: "Default Faculty",
    username: "faculty",
    password: "faculty123",
    role: "teacher",
    status: "active",
    linkedFacultyId: "gbu-faculty-demo-1",
    linkedSchool: "SOICT",
  },
];
