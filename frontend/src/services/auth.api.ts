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

  localStorage.setItem('authorization', `Bearer ${data.data?.token}`);

  return data;
}

export async function createNewClient(
  first_name: string,
  last_name: string,
  email: string,
  contact_number: string,
  password: string,
): Promise<ApiResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/client`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, contact_number, first_name, last_name })
  });

  const data:  ApiResponse = await response.json();

  if (!response.ok) {
    const err = new Error(data.message || 'Request failed');
    (err as any).errors = data.errors ?? null;
    throw err;
  }

  return data;
}
