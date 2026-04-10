import { ApiResponse } from "@/types/app.types";


export async function loginRequest(email: string, password: string): Promise<ApiResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  const data:  ApiResponse = await response.json();

  if (!response.ok) {
    const err = new Error(data.message || 'Request failed');
    (err as any).errors = data.errors ?? null;
    throw err;
  }

  localStorage.setItem('authorization', data.data?.token);
  localStorage.setItem('user', JSON.stringify(data.data?.user.user_type));

  return data;
}

export async function createNewClient(
  email: string,
  password: string,
  contact_number: string,
  full_name: string,
  user_type: string
): Promise<ApiResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, contact_number, full_name, user_type })
  });

  const data:  ApiResponse = await response.json();

  if (!response.ok) {
    const err = new Error(data.message || 'Request failed');
    (err as any).errors = data.errors ?? null;
    throw err;
  }

  return data;
}
