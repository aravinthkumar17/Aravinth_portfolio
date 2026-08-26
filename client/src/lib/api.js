const API_BASE = import.meta.env.VITE_API_BASE_URL ?? '/api';

export async function sendContactMessage(payload) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong. Please try again.');
  }

  return data;
}

export function resumeDownloadUrl() {
  return `${API_BASE}/resume`;
}
