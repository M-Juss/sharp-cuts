'use client';
import {Scissors} from 'lucide-react';
import {LayoutDashboard, Building2, LogOut} from 'lucide-react';
import {useState} from 'react';
import {BranchCard} from '@/components/common/BranchCard';
import {Overview} from '@/layout/owner/Overview';

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'branches' | 'logout'
  >('overview');

  const branchPerformance = [
    {
      name: 'Downtown Branch',
      address: '123 Barber Street, Sidetown ',
      clients: 180,
      bookings: 320,
      revenue: 7000,
      icon: <Building2 />
    },
    {
      name: 'Uptown Branch',
      address: '123 Barber Street, Sidetown ',
      clients: 180,
      bookings: 320,
      revenue: 7000,
      icon: <Building2 />
    },
    {
      name: 'Sidetown Branch',
      address: '123 Barber Street, Sidetown ',
      clients: 180,
      bookings: 320,
      revenue: 7000,
      icon: <Building2 />
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50">
      {/*Top Navigation*/}
      <div className="sticky top-0 left-0 bg-white px-4 py-2 w-full flex items-center justify-between z-40 text-black">
        <div className="flex items-center gap-3">
          <p className="bg-owner p-1 rounded-md text-white">
            <Scissors />
          </p>
          <p className="">Sharp Cuts</p>
        </div>

        <div className="flex text-black items-center space-x-3 bg-gray-100 py-2 px-4 rounded-md">
          <img src={null} alt="" className="p-4 bg-gray-400 rounded-full" />
          <p>John Doe</p>
        </div>
      </div>

      {/*Dashboard Content*/}
      <div className=" grid lg:grid-cols-4 lg:gap-6 grid-cols-1 p-4 text-black/80 space-y-5 ">
        {/*sidebar*/}
        <div className="lg:grid-cols-1 lg:h-fit flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 space-y-2 p-4 font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center px-4 py-3 rounded-md space-x-3 ${
              activeTab === 'overview'
                ? 'bg-owner text-white'
                : 'text-black/80 hover:bg-gray-100'
            }`}
          >
            <LayoutDashboard />
            <p>Overview</p>
          </button>

          <button
            onClick={() => setActiveTab('branches')}
            className={`w-full flex items-center px-4 py-3 rounded-md space-x-3 ${
              activeTab === 'branches'
                ? 'bg-owner text-white'
                : 'text-black/80 hover:bg-gray-100'
            }`}
          >
            <Building2 />
            <p>Branches</p>
          </button>

          <button className="w-full flex items-center px-4 py-3 rounded-md space-x-3 text-red-500 hover:bg-red-100">
            <LogOut />
            <p>Logout</p>
          </button>
        </div>

        {/*Main Content*/}
        {activeTab === 'overview' && (
          <Overview performances={branchPerformance} />
        )}
        {activeTab === 'branches' && (
          <div className="lg:col-span-3 col-span-1 flex flex-col">
            <h1 className="text-4xl mb-1 font-medium">Branch Management</h1>
            <p className="mb-4 ">Welcome back, Business Owner!</p>
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <BranchCard
                name="Downtown Branch"
                address="123 Barber Street, Downtown"
                status="active"
                manager={{
                  name: 'Downtown Branch Manager',
                  email: 'manager@gmail.com'
                }}
                stats={{
                  clients: 247,
                  bookings: 247,
                  revenue: 247
                }}
                onView={() => console.log('View')}
                onEdit={() => console.log('Edit')}
                onDelete={() => console.log('Delete')}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
