import {StatCard} from '@/components/common/StatCard';
import {ClipboardList, PhilippinePeso, Users, Star} from 'lucide-react';

type Appointment = {
  name: string;
  date: string;
  service: string;
  time: string;
};

type OverviewProps = {
  appointments: Appointment[];
};

export function Overview({appointments}: OverviewProps) {
  return (
    <div className="lg:col-span-3 col-span-1 flex flex-col">
      <h1 className="text-4xl mb-1 font-medium">Dashboard Overview</h1>
      <p className="mb-4 ">Welcome back, Admin User!</p>
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

      <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 px-4 py-6 space-y-3">
        <h2 className="text-2xl mb-4">Recent Bookings</h2>

        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="p-4 bg-blue-50  rounded-md flex items-center space-x-5"
          >
            <p className="w-3 h-3 bg-blue-500 rounded-full"></p>
            <div className="flex flex-col  w-full">
              <div className="flex justify-between items-center">
                <p className="text-xl ">{appointment.name}</p>
                <p>{appointment.date}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm">{appointment.service}</p>
                <p>{appointment.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
