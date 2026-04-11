'use client';
import {
  Scissors,
  SquareUserRound,
  LayoutDashboard,
  ClipboardList,
  LogOut
} from 'lucide-react';
import {useState} from 'react';
import {Overview} from '@/layout/client/Overview';
import {Bookings} from '@/layout/client/Bookings';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'bookings' | 'logout'
  >('bookings');

  const mockUpBookings = [
    {
      id: '1',
      clientName: 'John Doe',
      clientEmail: 'john@example.com',
      service: 'Signature Haircut',
      barber: 'Marcus Williams',
      date: '2026-01-20',
      time: '10:00 AM',
      price: 250,
      status: 'confirmed'
    },
    {
      id: '2',
      clientName: 'Michael Smith',
      clientEmail: 'michael@example.com',
      service: 'Executive Package',
      barber: 'James Rodriguez',
      date: '2026-01-20',
      time: '2:00 PM',
      price: 275,
      status: 'pending'
    },
    {
      id: '3',
      clientName: 'David Johnson',
      clientEmail: 'david@example.com',
      service: 'Classic Cut',
      barber: 'Andre Thompson',
      date: '2026-01-21',
      time: '11:00 AM',
      price: 230,
      status: 'confirmed'
    },
    {
      id: '4',
      clientName: 'Robert Brown',
      clientEmail: 'robert@example.com',
      service: 'Royal Shave',
      barber: 'Marcus Williams',
      date: '2026-01-21',
      time: '3:00 PM',
      price: 300,
      status: 'completed'
    },
    {
      id: '5',
      clientName: 'William Davis',
      clientEmail: 'william@example.com',
      service: 'Beard Trim & Style',
      barber: 'James Rodriguez',
      date: '2026-01-22',
      time: '1:00 PM',
      price: 300,
      status: 'pending'
    }
  ];

  const appointments = [
    {
      name: 'John Doe',
      date: '01/20/2026',
      service: 'Signature Haircut',
      time: '10:00 - 11:00 AM'
    },
    {
      name: 'Jane Smith',
      date: '01/21/2026',
      service: 'Beard Trim',
      time: '11:00 - 11:30 AM'
    },
    {
      name: 'Mike Johnson',
      date: '01/22/2026',
      service: 'Hair + Wash',
      time: '12:00 - 1:00 PM'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50">
      {/*Top Navigation*/}
      <div className="sticky top-0 left-0 bg-white px-4 py-3 w-full flex items-center justify-between z-40 text-black">
        <div className="flex items-center gap-3">
          <p className="bg-admin p-1 rounded-md text-white">
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
      <div className=" grid lg:grid-cols-4 lg:gap-6 grid-cols-1 p-4 text-black/80 space-y-5 ">
        {/*sidebar*/}
        <div className="lg:grid-cols-1 lg:h-fit flex flex-col bg-white rounded-xl shadow-md border border-gray-200 space-y-2 p-4 font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center px-4 py-3 rounded-md space-x-3 ${
              activeTab === 'overview'
                ? 'bg-admin text-white'
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
                ? 'bg-admin text-white'
                : 'text-black/80 hover:bg-gray-100'
            }`}
          >
            <ClipboardList />
            <p>Bookings</p>
          </button>

          <button className="w-full flex items-center px-4 py-3 rounded-md space-x-3 text-red-500 hover:bg-red-100">
            <LogOut />
            <p>Logout</p>
          </button>
        </div>

        {/*Main Content*/}
        {activeTab === 'overview' && <Overview appointments={appointments} />}

        {/*Bookings Tab*/}
        {activeTab === 'bookings' && (
          <Bookings
            bookings={mockUpBookings}
            onFilterClick={() => console.log()}
          />
        )}
      </div>
    </div>
  );
}
