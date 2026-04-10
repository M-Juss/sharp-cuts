import {StatCard} from '@/components/common/StatCard';
import {ClipboardList, PhilippinePeso, Users, Star} from 'lucide-react';
import {ReactNode} from 'react';

type BranchPerformance = {
  name: string;
  address: string;
  clients: number;
  bookings: number;
  revenue: number;
  icon: ReactNode;
};

type OverviewProps = {
  performances: BranchPerformance[];
};

export function Overview({performances}: OverviewProps) {
  return (
    <div className="lg:col-span-3 col-span-1 flex flex-col">
      <h1 className="text-4xl mb-1 font-medium">Business Overview</h1>
      <p className="mb-4 ">Welcome back, Business Owner!</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-4 ">
        <StatCard
          title="Total Branches"
          value={10}
          icon={<ClipboardList size={24} />}
          trend="+5.4%"
          trendColor="green"
          iconBg="bg-blue-500"
        />

        <StatCard
          title="Total Revenue"
          value={12500}
          icon={<PhilippinePeso size={24} />}
          trend="+10.5%"
          trendColor="green"
          iconBg="bg-green-500"
        />

        <StatCard
          title="Total Clients"
          value={34}
          icon={<Users size={24} />}
          trend="+17.1%"
          trendColor="green"
          iconBg="bg-purple-500"
        />

        <StatCard
          title="Total Bookings"
          value={4.9}
          icon={<Star size={24} />}
          trend="+99.4%"
          trendColor="green"
          iconBg="bg-yellow-500"
        />
      </div>
      <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-4 space-y-4">
        <h2 className="text-xl font-semibold">Branch Performance</h2>
        {performances.map(performance => (
          <div
            key={performance.name}
            className="flex items-center justify-between bg-gray-50 p-4 rounded-md gap-5"
          >
            <div className="flex">
              <div className="bg-purple-200 text-purple-600 rounded-md p-2 mr-4">
                {performance.icon}
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-xl">{performance.name}</p>
                <p className="text-sm">{performance.address}</p>
              </div>
            </div>
            <div className="flex gap-10 text-center">
              <div className="flex flex-col">
                <p className="font-medium text-xl">{performance.clients}</p>
                <p className="text-sm">Clients</p>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-xl">{performance.bookings}</p>
                <p className="text-sm">Bookings</p>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-xl">{performance.revenue}</p>
                <p className="text-sm">Revenue</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
