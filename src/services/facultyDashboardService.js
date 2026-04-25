import apiClient from "./apiClient";
import axios from "axios";
import { backendBaseUrl } from "../config/apiConfig";
import { getPortalSession } from "../utils/portalSession";

/* ─── Auth-aware client for /api/v1 endpoints ─── */

const authApiClient = () => {
  const session = getPortalSession();
  const headers = { "Content-Type": "application/json" };
  if (session?.accessToken) {
    headers.Authorization = `Bearer ${session.accessToken}`;
  }
  return axios.create({
    baseURL: `${backendBaseUrl}/api/v1`,
    timeout: 15000,
    headers,
  });
};

/* ─── Faculty self-service (logged-in faculty) ─── */

export const fetchMyFacultyProfile = async () => {
  const response = await authApiClient().get("/faculty/me/profile");
  return response?.data?.data || null;
};

export const updateMyFacultyProfile = async (profileData) => {
  const response = await authApiClient().put("/faculty/me/profile", profileData);
  return response?.data?.data || null;
};

/* ─── Public endpoints (no auth) ─── */

export const fetchFacultyPublicProfile = async (facultyId) => {
  const response = await apiClient.get(`/faculty/${facultyId}/public`);
  return response?.data?.data || null;
};

export const fetchFacultyPublicList = async (params = {}) => {
  const response = await apiClient.get("/faculty/public", { params });
  return {
    items: response?.data?.data?.items || [],
    pagination: response?.data?.data?.pagination || {},
  };
};

/* ─── Admin endpoints ─── */

export const adminGetFacultyList = async (params = {}) => {
  const response = await authApiClient().get("/admin/faculty", { params });
  return {
    items: response?.data?.data?.items || [],
    pagination: response?.data?.data?.pagination || {},
  };
};

export const adminGetFacultyProfile = async (facultyId) => {
  const response = await authApiClient().get(`/admin/faculty/${facultyId}`);
  return response?.data?.data || null;
};

export const adminCreateFacultyProfile = async (profileData) => {
  const response = await authApiClient().post("/admin/faculty", profileData);
  return response?.data?.data || null;
};

export const adminUpdateFacultyProfile = async (facultyId, profileData) => {
  const response = await authApiClient().put(`/admin/faculty/${facultyId}`, profileData);
  return response?.data?.data || null;
};

export const adminDeleteFacultyProfile = async (facultyId) => {
  const response = await authApiClient().delete(`/admin/faculty/${facultyId}`);
  return response?.data?.data || null;
};
