import {QuickAction} from '@/components/common/QuickAction';
import {StatCard} from '@/components/common/StatCard';
import {BranchManagerTab} from '@/types/app.types';
import {
  ClipboardList,
  PhilippinePeso,
  Users,
  Star,
  UserPlus
} from 'lucide-react';

type BranchInfo = {
  name: string;
  totalAdmin: number;
  totalClient: number;
};

type OverviewProps = {
  branchInfo: BranchInfo;
  setActiveTab: (tab: BranchManagerTab) => void;
};

export function Overview({branchInfo, setActiveTab}: OverviewProps) {
  return (
    <div className="lg:col-span-3 col-span-1 flex flex-col">
      <h1 className="text-4xl mb-1 font-medium">Dashboard Overview</h1>
      <p className="mb-4 ">Downtown Branch - Downtown Branch Manager</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-4 ">
        <StatCard
          title="Total Bookings"
          value={10}
          icon={<ClipboardList size={24} />}
          trend="+5.4%"
          trendColor="green"
          iconBg="bg-blue-500"
        />

        <StatCard
          title="Revenue this Month "
          value={12500}
          icon={<PhilippinePeso size={24} />}
          trend="+10.5%"
          trendColor="green"
          iconBg="bg-green-500"
        />

        <StatCard
          title="Active Clients"
          value={34}
          icon={<Users size={24} />}
          trend="+17.1%"
          trendColor="green"
          iconBg="bg-purple-500"
        />

        <StatCard
          title="Avg. Rating"
          value={4.9}
          icon={<Star size={24} />}
          trend="+99.4%"
          trendColor="green"
          iconBg="bg-yellow-500"
        />
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mb-4 lg:gap-6">
        <div className="flex flex-col">
          <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-4 my-4 ">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className=" grid grid-cols-1 gap-3  ">
              <QuickAction
                title="Add New Admin"
                description="Assign admin to your branch"
                icon={<UserPlus />}
                iconClassname="text-orange-700 bg-yellow-100"
                onClick={() => setActiveTab('admins')}
              />

              <QuickAction
                title="View Clients"
                description="Manage client database"
                icon={<UserPlus />}
                iconClassname="text-blue-700 bg-blue-100"
                onClick={() => setActiveTab('clients')}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-4 my-4 ">
          <h2 className="text-xl font-semibold mb-4">Brach Information</h2>
          <div className="space-y-2 ">
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
              <p>Branch Name</p>
              <p>{branchInfo.name}</p>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
              <p>Total Admins</p>
              <p>{branchInfo.totalAdmin}</p>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
              <p>Total Client</p>
              <p>{branchInfo.totalClient}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
