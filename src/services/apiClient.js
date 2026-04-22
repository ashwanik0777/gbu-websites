import axios from "axios";
import { getPortalSession } from "../utils/portalSession";
import { apiBaseUrl } from "../config/apiConfig";

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const session = getPortalSession();
  if (session?.accessToken) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${session.accessToken}`;
  }
  return config;
});

export default apiClient;
