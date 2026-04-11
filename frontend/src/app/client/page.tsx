'use client';
import {
  Scissors,
  SquareUserRound,
  LayoutDashboard,
  ClipboardClock,
  LogOut
} from 'lucide-react';
import {useState} from 'react';
import { ClientTab } from '@/types/app.types';
import {Overview} from '@/layout/client/Overview';
import {Profile} from '@/layout/client/Profile';
import {Bookings} from '@/layout/client/Bookings';
import { NewBookings } from '@/layout/client/NewBookings';

export default function ClientPage() {
  const [activeTab, setActiveTab] = useState<ClientTab>('overview');

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50">
      {/*Top Navigation*/}
      <div className="sticky top-0 left-0 bg-white px-4 py-3 w-full flex items-center justify-between z-40 text-black">
        <div className="flex items-center gap-3">
          <p className="bg-client p-1 rounded-md text-white">
            <Scissors />
          </p>
          <p className="">Sharp Cuts</p>
        </div>

        <div className="flex text-black items-center space-x-3 bg-gray-100 py-2 px-4 rounded-md">
          <SquareUserRound size={25} className="text-black/60" />
          <p>John Doe</p>
        </div>
      </div>

      {/*Dashboard Content*/}
      <div className=" grid lg:grid-cols-4 lg:gap-6 grid-cols-1 p-4 text-black/80 space-y-5 mx-20">
        {/*sidebar*/}
        <div className="lg:grid-cols-1 lg:h-fit flex flex-col bg-white rounded-xl shadow-md border border-gray-200 space-y-2 p-4 font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center px-4 py-3 rounded-md space-x-3 ${
              activeTab === 'overview'
                ? 'bg-client text-white'
                : 'text-black/80 hover:bg-gray-100'
            }`}
          >
            <LayoutDashboard />
            <p>Overview</p>
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`w-full flex items-center px-4 py-3 rounded-md space-x-3 ${
              activeTab === 'bookings'
                ? 'bg-client text-white'
                : 'text-black/80 hover:bg-gray-100'
            }`}
          >
            <ClipboardClock />
            <p>My Booking</p>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center px-4 py-3 rounded-md space-x-3 ${
              activeTab === 'profile'
                ? 'bg-client text-white'
                : 'text-black/80 hover:bg-gray-100'
            }`}
          >
            <SquareUserRound />
            <p>Profile</p>
          </button>

          <button className="w-full flex items-center px-4 py-3 rounded-md space-x-3 text-red-500 hover:bg-red-100">
            <LogOut />
            <p>Logout</p>
          </button>
        </div>

        {/*Overview Tab*/}
        {activeTab === 'overview' && <Overview setActiveTab={setActiveTab} />}

        {/*Bookings Tab*/}
        {activeTab === 'bookings' && (
          <Bookings OnNewBookingClick={() => setActiveTab('newBookings')} />
        )}

        {/*Profile Tab*/}
        {activeTab === 'profile' && <Profile />}

        {/*NewVookings Tab*/}
        {activeTab === 'newBookings' && (
          <NewBookings setActiveTab={setActiveTab} />
        )}
      </div>
    </div>
  );
}
