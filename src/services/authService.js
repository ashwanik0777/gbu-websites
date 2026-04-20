import axios from "axios";

const API_BASE = import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:3000";

const authClient = axios.create({
  baseURL: `${API_BASE}/api/auth`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginByRole = async ({ role, email, password }) => {
  const response = await authClient.post(`/login/${role}`, { email, password });
  return response.data;
};

export const requestForgotPasswordOtp = async ({ email }) => {
  const response = await authClient.post("/forgot-password/request-otp", { email });
  return response.data;
};

export const verifyForgotPasswordOtp = async ({ email, otp, newPassword, confirmPassword }) => {
  const response = await authClient.post("/forgot-password/verify-otp", {
    email,
    otp,
    newPassword,
    confirmPassword,
  });
  return response.data;
};

export const fetchCurrentUser = async (accessToken) => {
  const response = await authClient.get("/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const logoutSession = async (refreshToken) => {
  const response = await authClient.post("/logout", { refreshToken });
  return response.data;
};
