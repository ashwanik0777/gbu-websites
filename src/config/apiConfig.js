const trimTrailingSlash = (value) => String(value || "").replace(/\/+$/, "");

const stripApiPrefix = (value) => trimTrailingSlash(value).replace(/\/api\/v1\/?$/, "");

const envApiBaseUrl = trimTrailingSlash(import.meta.env.VITE_API_BASE_URL || "");
const envBackendBaseUrl = stripApiPrefix(import.meta.env.VITE_BACKEND_BASE_URL || "");

export const backendBaseUrl = envBackendBaseUrl || stripApiPrefix(envApiBaseUrl);
export const apiBaseUrl = envApiBaseUrl || (backendBaseUrl ? `${backendBaseUrl}/api/v1` : "/api/v1");
