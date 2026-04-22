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
    limit: Number(pagination.limit) || 20,
    total: Number(pagination.total) || 0,
    totalPages: Number(pagination.totalPages) || 1,
  };
};

const normalizeFaculty = (item) => ({
  id: String(item?.id || ""),
  name: String(item?.name || "").trim(),
  designation: String(item?.designation || "").trim(),
  department: String(item?.department || "").trim(),
  school: String(item?.school || "").trim(),
  email: String(item?.email || "").trim(),
  phone: String(item?.phone || "").trim(),
  isActive: item?.isActive !== false,
  createdAt: String(item?.createdAt || ""),
  updatedAt: String(item?.updatedAt || ""),
});

const toPayload = (faculty) => ({
  id: String(faculty?.id || "").trim(),
  name: String(faculty?.name || "").trim(),
  designation: String(faculty?.designation || "").trim(),
  department: String(faculty?.department || "").trim(),
  school: String(faculty?.school || "").trim(),
  email: String(faculty?.email || "").trim(),
  phone: String(faculty?.phone || "").trim(),
  isActive: faculty?.isActive !== false,
});

export const listFacultyProfiles = async (params = {}) => {
  const response = await apiClient.get("/admin/faculty", {
    params: {
      query: params.query || "",
      department: params.department && params.department !== "all" ? params.department : "",
      school: params.school || "",
      status: params.status || "",
      page: params.page || 1,
      limit: params.limit || 100,
    },
  });

  return {
    items: unwrap(response).map(normalizeFaculty),
    pagination: normalizePagination(response?.data || {}),
  };
};

export const createFacultyProfile = async (faculty) => {
  const response = await apiClient.post("/admin/faculty", toPayload(faculty));
  return normalizeFaculty(response?.data?.data || {});
};

export const updateFacultyProfile = async (id, faculty) => {
  const response = await apiClient.put(`/admin/faculty/${id}`, toPayload(faculty));
  return normalizeFaculty(response?.data?.data || {});
};

export const deleteFacultyProfile = async (id) => {
  await apiClient.delete(`/admin/faculty/${id}`);
  return id;
};
