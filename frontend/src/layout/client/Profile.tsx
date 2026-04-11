import { EditClientProfileForm } from '@/forms/EditClientProfileForm';
import { useClientProfile } from '@/hooks/useClientProfile';
import { getClientProfile } from '@/services/client.api';
import { ClientProfile } from '@/types/app.types';
import { useState, useEffect } from 'react';

export function Profile() {
  
const [profile, setProfile] = useState<ClientProfile | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getClientProfile()
      .then((res) => setProfile(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);  

  return (
    <div className="lg:col-span-3 cols-span-1 flex flex-col w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold">My Profile</h1>
      </div>

      {loading && (
        <p className="text-gray-400 text-sm mb-4">Loading profile...</p>
      )}
      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}

      <EditClientProfileForm profile={profile} />

      <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 px-4 py-6 space-y-4">
        <h1 className="text-xl font-medium mb-2">Account Settings</h1>
        <div className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded-md">
          <div className="flex flex-col">
            <p className="text-md">Email Notifications</p>
            <p className="text-sm">Receive booking informations.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
          </label>
        </div>

        <div className="flex justify-between items-center mb-1 bg-gray-100 p-4 rounded-md">
          <div className="flex flex-col">
            <p className="text-md">SMS Reminder</p>
            <p className="text-sm">Get text message reminders</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
          </label>
        </div>

        <div className="flex flex-col lg:flex-row sm:space-y-2 lg:space-y-0 lg:space-x-2 mt-2 text-white">
          <button className="bg-client p-2 rounded-md">Change Password</button>
          <button className="bg-red-500 p-2 rounded-md">Delete Account</button>
        </div>
      </div>
    </div>
  );
}