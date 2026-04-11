// app/client/layout.tsx
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true); // 👈 start as true

  useEffect(() => {
    const token = localStorage.getItem('authorization');
    if (!token) {
      router.replace('/login');
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChecking(false); // ✅ token exists, safe to render
    }
  }, []);

if (checking) return (
  <div className="min-h-screen bg-primary-landing/90 flex items-center justify-center">
  </div>
);
  return <>{children}</>;
}