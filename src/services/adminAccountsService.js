import apiClient from "./apiClient";

const unwrap = (response) => {
  const payload = response?.data;
  if (Array.isArray(payload?.data?.items)) return payload.data.items;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload)) return payload;
  return [];
};

const normalizePagination = (payload) => {
  const pagination = payload?.data?.pagination || {};
  return {
    page: Number(pagination.page) || 1,
    limit: Number(pagination.limit) || 10,
    total: Number(pagination.total) || 0,
    totalPages: Number(pagination.totalPages) || 1,
  };
};

const normalizeAccount = (item) => ({
  id: item?.id,
  name: String(item?.name || "").trim(),
  username: String(item?.username || "").trim(),
  password: String(item?.password || ""),
  role: String(item?.role || "teacher"),
  status: String(item?.status || "active"),
  linkedFacultyId: String(item?.linkedFacultyId || ""),
  linkedSchool: String(item?.linkedSchool || ""),
  linkedDepartment: String(item?.linkedDepartment || ""),
});

const normalizeAuditLog = (item) => ({
  id: item?.id,
  action: String(item?.action || ""),
  entityType: String(item?.entityType || ""),
  entityId: String(item?.entityId || ""),
  summary: String(item?.summary || ""),
  metadata: item?.metadata && typeof item.metadata === "object" ? item.metadata : {},
  actor: {
    id: item?.actor?.id,
    name: String(item?.actor?.name || "System"),
    email: String(item?.actor?.email || ""),
    role: String(item?.actor?.role || ""),
  },
  createdAt: String(item?.createdAt || ""),
});

const toPayload = (account) => ({
  name: String(account?.name || "").trim(),
  username: String(account?.username || "").trim(),
  password: String(account?.password || ""),
  role: String(account?.role || "teacher"),
  status: String(account?.status || "active"),
  linkedFacultyId: String(account?.linkedFacultyId || "").trim(),
  linkedSchool: String(account?.linkedSchool || "").trim(),
  linkedDepartment: String(account?.linkedDepartment || "").trim(),
});

export const listAdminAccounts = async (params = {}) => {
  const response = await apiClient.get("/admin/accounts", {
    params: {
      query: params.query || "",
      role: params.role || "all",
      status: params.status || "all",
      page: params.page || 1,
      limit: params.limit || 10,
    },
  });

  return {
    items: unwrap(response).map(normalizeAccount),
    pagination: normalizePagination(response?.data || {}),
  };
};

export const listAdminAccountAuditLogs = async (params = {}) => {
  const response = await apiClient.get("/admin/accounts/audit-logs", {
    params: {
      query: params.query || "",
      action: params.action && params.action !== "all" ? params.action : "",
      page: params.page || 1,
      limit: params.limit || 8,
    },
  });

  return {
    items: unwrap(response).map(normalizeAuditLog),
    pagination: normalizePagination(response?.data || {}),
  };
};

export const createAdminAccount = async (account) => {
  const response = await apiClient.post("/admin/accounts", toPayload(account));
  return normalizeAccount(response?.data?.data || {});
};

export const updateAdminAccount = async (id, account) => {
  const response = await apiClient.put(`/admin/accounts/${id}`, toPayload(account));
  return normalizeAccount(response?.data?.data || {});
};

export const deleteAdminAccount = async (id) => {
  await apiClient.delete(`/admin/accounts/${id}`);
  return id;
};
