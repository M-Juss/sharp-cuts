import {Plus, Clock, ClipboardClock, MapPin, BadgeCheck} from 'lucide-react';

type BookingsProps = {
  OnNewBookingClick: () => void;
};

export function Bookings({OnNewBookingClick}: BookingsProps) {
  return (
    <div className="lg:col-span-3 cols-span-1 flex flex-col w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold">My Bookings</h1>
        <button
          onClick={OnNewBookingClick}
          className="bg-client text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          {' '}
          <Plus size={15} /> New Booking
        </button>
      </div>

      <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-4 mb-4">
        <h2 className="text-xl font-semibold mb-4">Upcoming Appointment</h2>

        <div className=" flex flex-col p-4 bg-white rounded-xl shadow-md border border-gray-200 space-y-1 ">
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
            <p className="bg-yellow-200 text-yellow-700 py-1 px-2 rounded-2xl flex items-center gap-1 border border-yellow-700/30 text-xs ">
              {' '}
              <BadgeCheck size={18} /> Paid
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-4 mb-4 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Recent Appointment</h2>

        <div className=" flex flex-col p-4 bg-white rounded-xl shadow-md border border-gray-200 space-y-2 ">
          <div className="flex justify-between mb">
            <p className="text-xl font-semibold">Signature Haircut</p>
            <p className="text-client md:text-3xl sm:text-2xl text-xl">P 200</p>
          </div>

          <p className="md:text-lg text-sm ">with Marcus Jones</p>
          <p className="flex items-center gap-2 sm:text-sm text-xs ">
            {' '}
            <ClipboardClock size={15} /> 01/12/2026 <Clock size={15} /> 10:00 AM
            - 11:00 AM
          </p>

          <div className="flex space-x-2 mt-2">
            <p className="bg-green-200 text-green-700 py-1 px-2 rounded-2xl flex items-center gap-1 border border-green-700/30 text-xs ">
              {' '}
              <BadgeCheck size={18} /> Completed
            </p>
          </div>
        </div>

        <div className=" flex flex-col p-4 bg-white rounded-xl shadow-md border border-gray-200 space-y-2 ">
          <div className="flex justify-between mb">
            <p className="text-xl font-semibold">Signature Haircut</p>
            <p className="text-client md:text-3xl sm:text-2xl text-xl">P 200</p>
          </div>

          <p className="md:text-lg text-sm ">with Marcus Jones</p>
          <p className="flex items-center gap-2 sm:text-sm text-xs ">
            {' '}
            <ClipboardClock size={15} /> 01/12/2026 <Clock size={15} /> 10:00 AM
            - 11:00 AM
          </p>

          <div className="flex space-x-2 mt-2">
            <p className="bg-green-200 text-green-700 py-1 px-2 rounded-2xl flex items-center gap-1 border border-green-700/30 text-xs ">
              {' '}
              <BadgeCheck size={18} /> Completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
