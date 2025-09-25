const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function api(path, options) {
  const res = await fetch(`${API_BASE}${path}`, options);
  if (!res.ok) throw new Error(`API ${res.status} on ${path}`);
  return res.json(); // ← always return parsed JSON
}