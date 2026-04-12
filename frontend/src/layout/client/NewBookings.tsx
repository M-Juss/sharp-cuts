import {NewBookingForm} from '@/forms/NewBookingForm';
import { getClientProfile } from '@/services/client.api';
import { ClientProfile } from '@/types/app.types';
import {
  LayoutDashboard,
  Scissors
} from 'lucide-react';
import { useEffect, useState } from 'react';

export function NewBookings({setActiveTab}) {

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
        <h1 className="text-3xl font-semibold">New Booking</h1>
        <button
          onClick={() => setActiveTab('bookings')}
          className="bg-zinc-600 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer"
        >
          {' '}
          <LayoutDashboard size={15} /> Back to Dashboard
        </button>
      </div>

      <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-8 mb-4">
      {loading && <p className="text-gray-400 text-sm mb-4">Loading profile...</p>}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="flex space-x-3 mb-2 ">
          <p className="bg-client p-1 my-auto rounded-md text-white">
            <Scissors size={35} />
          </p>
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Book your Appointment</p>
            <p>Fill in the details below</p>
          </div>
        </div>

        <NewBookingForm profile={profile} />

      </div>
    </div>
  );
}
