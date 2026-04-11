import { useEffect, useState } from 'react';
import { authFetch } from '@/lib/api'
import { ClientProfile } from '@/types/app.types';

export function useClientProfile() {
  const [profile, setProfile] = useState<ClientProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    authFetch<ClientProfile>(`${process.env.NEXT_PUBLIC_API_URL}/client/profile`)
      .then((res) => setProfile(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { profile, loading, error };
}