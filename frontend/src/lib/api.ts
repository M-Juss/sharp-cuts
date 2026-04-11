
import { ApiResponse } from '@/types/app.types';

export async function authFetch<T = null>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token = localStorage.getItem('authorization');

  const response = await fetch(url, {
    ...options,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': token } : {}),
      ...options.headers,
    },
  });

  const data: ApiResponse<T> = await response.json();

  if (response.status === 401) {
    localStorage.removeItem('authorization');
    window.location.href = '/login';
  }

  if (!response.ok) {
    const err = new Error(data.message || 'Request failed');
    (err as any).errors = data.errors ?? null;
    throw err;
  }

  return data;
}