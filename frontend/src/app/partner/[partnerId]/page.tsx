'use client';
import {Scissors, EllipsisVertical} from 'lucide-react';
import {User, Users, UserStar} from 'lucide-react';
import {LayoutDashboard, LogOut} from 'lucide-react';
import {useState} from 'react';
import {Overview} from '@/layout/partner/Overview';
import {Services} from '@/layout/partner/Services';
import {Teams} from '@/layout/partner/Teams';
import {Clients} from '@/layout/partner/Clients';
import {Admins} from '@/layout/partner/Admins';
import {BranchManagerTab} from '@/types/app.types';

export default function BranchManagerDashboard() {
  const [activeTab, setActiveTab] = useState<BranchManagerTab>('admins');

  const adminData = [
    {
      name: 'Mark',
      email: 'mark@gmail.com',
      phone: '09786758372',
      date: '01/20/2026',
      status: 'active',
      action: <EllipsisVertical />
    },
    {
      name: 'Justin',
      email: 'justin@gmail.com',
      phone: '09782731212',
      date: '01/20/2026',
      status: 'active',
      action: <EllipsisVertical />
    },
    {
      name: 'Micmic',
      email: 'micmic@gmail.com',
      phone: '09412478172',
      date: '01/20/2026',
      status: 'active',
      action: <EllipsisVertical />
    },
    {
      name: 'Sayson',
      email: 'sayson@gmail.com',
      phone: '09786123181',
      date: '01/20/2026',
      status: 'active',
      action: <EllipsisVertical />
    }
  ];

  const clientData = [
    {
      name: 'John Doe',
      email: 'jd@gmail.com',
      phone: '09141248971',
      totalBookings: 10,
      totalSpent: 1000,
      lastVisit: '01/10/2026',
      status: 'active'
    },
    {
      name: 'Jane Doe',
      email: 'janed@gmail.com',
      phone: '09769301381',
      totalBookings: 5,
      totalSpent: 2500,
      lastVisit: '01/15/2026',
      status: 'active'
    },
    {
      name: 'Jake Doe',
      email: 'jaked@gmail.com',
      phone: '09478194812',
      totalBookings: 20,
      totalSpent: 5300,
      lastVisit: '01/20/2026',
      status: 'active'
    }
  ];

  const teamMembers = [
    {
      img: '/AboutImage.jpg',
      name: 'Mark Justin Sayson',
      title: 'Master Barber'
    },
    {
      img: '/AboutImage.jpg',
      name: 'Nathaniel Joy Alvarez',
      title: 'Master Barber'
    },
    {
      img: '/AboutImage.jpg',
      name: 'Mark Angelo Icban',
      title: 'Master Barber'
    }
  ];

  const defaultServices = [
    {title: 'Signature Haircut', durationMin: 45, price: 250},
    {title: 'Classic Cut', durationMin: 35, price: 200},
    {title: 'Royal Shave', durationMin: 30, price: 230},
    {title: 'Beard Trim & Style', durationMin: 40, price: 350},
    {title: 'Executive Package', durationMin: 60, price: 450}
  ];

  const branchInfo = {
    name: 'Downtown Branch',
    totalAdmin: 10,
    totalClient: 40
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50">
      {/*Top Navigation*/}
      <div className="sticky top-0 left-0 bg-white px-4 py-3 w-full flex items-center justify-between z-40 text-black">
        <div className="flex items-center gap-3">
          <p className="bg-manager p-1 rounded-md text-white">
            <Scissors />
          </p>
          <p className="">Sharp Cuts</p>
        </div>

        <div className="flex text-black items-center space-x-3 bg-gray-100 py-2 px-4 rounded-md">
          <User size={25} className="text-black/60" />
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
                ? 'bg-manager text-white'
                : 'text-black/80 hover:bg-gray-100'
            }`}
          >
            <LayoutDashboard />
            <p>Overview</p>
          </button>

          <button
            onClick={() => setActiveTab('admins')}
            className={`w-full flex items-center px-4 py-3 rounded-md space-x-3 ${
              activeTab === 'admins'
                ? 'bg-manager text-white'
                : 'text-black/80 hover:bg-gray-100'
            }`}
          >
            <UserStar />
            <p>Admins</p>
          </button>

          <button
            onClick={() => setActiveTab('clients')}
            className={`w-full flex items-center px-4 py-3 rounded-md space-x-3 ${
              activeTab === 'clients'
                ? 'bg-manager text-white'
                : 'text-black/80 hover:bg-gray-100'
            }`}
          >
            <User />
            <p>Clients</p>
          </button>

          <button
            onClick={() => setActiveTab('teams')}
            className={`w-full flex items-center px-4 py-3 rounded-md space-x-3 ${
              activeTab === 'teams'
                ? 'bg-manager text-white'
                : 'text-black/80 hover:bg-gray-100'
            }`}
          >
            <Users />
            <p>Team</p>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`w-full flex items-center px-4 py-3 rounded-md space-x-3 ${
              activeTab === 'services'
                ? 'bg-manager text-white'
                : 'text-black/80 hover:bg-gray-100'
            }`}
          >
            <Scissors />
            <p>Services</p>
          </button>

          <button className="w-full flex items-center px-4 py-3 rounded-md space-x-3 text-red-500 hover:bg-red-100">
            <LogOut />
            <p>Logout</p>
          </button>
        </div>

        {activeTab === 'overview' && (
          <Overview branchInfo={branchInfo} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'admins' && (
          <Admins admins={adminData} onAddClick={() => console.log} />
        )}

        {activeTab === 'clients' && <Clients clients={clientData} />}

        {activeTab === 'teams' && (
          <Teams teams={teamMembers} onAddClick={() => console.log} />
        )}

        {activeTab === 'services' && (
          <Services services={defaultServices} onAddClick={() => console.log} />
        )}
      </div>
    </div>
  );
}
