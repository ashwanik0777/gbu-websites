import apiClient from "./apiClient";

export const listSchools = async () => {
  try {
    const response = await apiClient.get("/schools");
    return response.data?.data || [];
  } catch (error) {
    console.error("Failed to list schools", error);
    throw error;
  }
};

export const getSchoolDetails = async (id) => {
  try {
    const response = await apiClient.get(`/schools/${id}`);
    return response.data?.data || null;
  } catch (error) {
    console.error(`Failed to fetch school details for ${id}`, error);
    throw error;
  }
};

export const createSchool = async (payload) => {
  try {
    const response = await apiClient.post("/admin/schools", payload);
    return response.data?.data;
  } catch (error) {
    console.error("Failed to create school", error);
    throw error;
  }
};

export const updateSchool = async (id, payload) => {
  try {
    const response = await apiClient.put(`/admin/schools/${id}`, payload);
    return response.data?.data;
  } catch (error) {
    console.error(`Failed to update school ${id}`, error);
    throw error;
  }
};

export const deleteSchool = async (id) => {
  try {
    const response = await apiClient.delete(`/admin/schools/${id}`);
    return response.data?.data;
  } catch (error) {
    console.error(`Failed to delete school ${id}`, error);
    throw error;
  }
};
