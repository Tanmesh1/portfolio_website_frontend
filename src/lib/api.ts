export const createSessionId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `session-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? '').trim().replace(/\/+$/, '');

export const buildApiUrl = (path: string) => {
  if (!apiBaseUrl) {
    return path;
  }

  return `${apiBaseUrl}${path}`;
};

export const fetchWithTimeout = async (
  url: string,
  options: RequestInit = {},
  timeoutMs = 15000,
): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeoutId);
  }
};
