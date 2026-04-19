import apiClient from "./apiClient";

const unwrap = (response) => {
  const payload = response?.data;
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (payload?.data && typeof payload.data === "object") return payload.data;
  if (payload && typeof payload === "object") return payload;
  return null;
};

const normalizeTender = (item) => ({
  id: item?.id ?? "",
  title: String(item?.title || "").trim(),
  description: String(item?.description || "").trim(),
  closingDate: String(item?.closingDate || "").slice(0, 10),
  documentUrl: String(item?.documentUrl || "").trim(),
  localId: String(item?.id || item?.localId || `tender-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`),
});

const toRequestPayload = (tender) => ({
  title: String(tender?.title || "").trim(),
  description: String(tender?.description || "").trim(),
  closingDate: String(tender?.closingDate || "").slice(0, 10),
  documentUrl: String(tender?.documentUrl || "").trim(),
});

export const listTenders = async () => {
  const response = await apiClient.get("/tenders");
  const payload = unwrap(response);
  const list = Array.isArray(payload) ? payload : [];
  return list.map(normalizeTender);
};

export const createTender = async (tender) => {
  const response = await apiClient.post("/tenders", toRequestPayload(tender));
  const payload = unwrap(response);
  return normalizeTender(payload);
};

export const updateTender = async (id, tender) => {
  const response = await apiClient.put(`/tenders/${id}`, toRequestPayload(tender));
  const payload = unwrap(response);
  return normalizeTender(payload);
};

export const deleteTender = async (id) => {
  await apiClient.delete(`/tenders/${id}`);
  return id;
};
