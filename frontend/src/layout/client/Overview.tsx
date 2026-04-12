import {
  ClipboardClock,
  CircleCheckBig,
  Clock,
  MapPin,
  BadgeCheck,
  Plus,
  Settings
} from 'lucide-react';
import {ClientTab} from '@/types/app.types';

type OverviewProps = {
  setActiveTab: (tab: ClientTab) => void;
};

export function Overview({setActiveTab}: OverviewProps) {
  return (
    <div className="flex flex-col w-full lg:col-span-3 sm:col-span-1 ">
      <h1 className="text-4xl font-semibold mb-2">Welcome back, John!</h1>
      <p className="">Heres what's happening with your booking</p>

      <div className="grid grid-cols-2 gap-4 my-4">
        <div className="flex flex-col p-4 bg-blue-500 text-white rounded-md space-y-3 ">
          <ClipboardClock size={45} />
          <p className="text-4xl font-semibold">5</p>
          <p className="text-md">Upcoming Booking</p>
        </div>
        <div className="flex flex-col p-4 bg-green-500 text-white rounded-md space-y-3 ">
          <CircleCheckBig size={45} />
          <p className="text-4xl font-semibold">12</p>
          <p className="text-md">Completed Visits</p>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-4 ">
        <h2 className="text-xl font-semibold mb-4">Next Booking</h2>

        <div className=" flex flex-col p-4 bg-yellow-100 rounded-md border border-yellow-300 space-y-1 ">
          <div className="flex justify-between mb">
            <p className="text-xl font-semibold">Signature Haircut</p>
            <p className="text-client md:text-3xl sm:text-2xl text-xl">P 200</p>
          </div>

          <p className="md:text-lg text-sm ">with Marcus Jones</p>
          <p className="flex items-center gap-2 sm:text-sm text-xs ">
            {' '}
            <Clock size={15} /> 10:00 AM - 11:00 AM
          </p>
          <p className="flex items-center gap-2 sm:text-sm text-xs ">
            {' '}
            <ClipboardClock size={15} /> 01/12/2026
          </p>
          <p className="flex items-center gap-2 sm:text-sm text-xs ">
            {' '}
            <MapPin size={15} /> Downtown 123 Main Street, City
          </p>

          <div className="flex space-x-2 mt-2">
            <p className="bg-blue-200 text-blue-700 py-1 px-2 rounded-2xl flex items-center gap-1 border border-blue-700/30 text-xs ">
              {' '}
              <Clock size={18} /> Up coming
            </p>
            <p className="bg-green-200 text-green-700 py-1 px-2 rounded-2xl flex items-center gap-1 border border-green-700/30 text-xs ">
              {' '}
              <BadgeCheck size={18} /> Paid
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-4 my-4 ">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

        <div className=" grid sm:grid-cols-2 grid-cols-1 gap-5 cursor-pointer ">
          <div
            onClick={() => setActiveTab('bookings')}
            className="flex items-center gap-3 p-4 border-dashed border-gray-300 border-2 rounded-md"
          >
            <p className="text-client p-2 bg-yellow-100 rounded-md">
              {' '}
              <Plus size={25} />
            </p>
            <p className="text-lg  flex flex-col font-semibold">
              New Booking{' '}
              <span className="text-sm font-normal">
                Schedule your next visit
              </span>
            </p>
          </div>

          <div
            onClick={() => setActiveTab('profile')}
            className="flex gap-3 items-center p-4 border-dashed border-gray-300 border-2 rounded-md cursor-pointer"
          >
            <p className="text-blue-700 p-2 bg-blue-200 rounded-md">
              {' '}
              <Settings size={25} />
            </p>
            <p className="text-lg flex flex-col font-semibold">
              Settings{' '}
              <span className=" text-sm font-normal">Manage your account</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
