import {Search, Filter} from 'lucide-react';
import {RowPopOver} from '@/components/common/RowPopOver';

type Booking = {
  id: string;
  clientName: string;
  clientEmail: string;
  service: string;
  barber: string;
  date: string;
  time: string;
  price: number;
  status: string;
};

type BookingsProps = {
  bookings: Booking[];
  onFilterClick: () => void;
};

export function Bookings({bookings, onFilterClick}: BookingsProps) {
  const tableHeader = [
    'Client',
    'Services',
    'Barber',
    'Date & Time',
    'Price',
    'Status',
    'Actions'
  ];

  return (
    <div className="lg:col-span-3 col-span-1 flex flex-col">
      <h1 className="text-4xl mb-1 font-medium">Manage Bookings</h1>
      <p className="mb-4 ">Welcome back, Admin User!</p>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search bookings..."
              className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
            />
          </div>
          <button
            onClick={onFilterClick}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Filter</span>
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {tableHeader.map(header => (
                  <th
                    key={header}
                    className="px-6 py-4 text-left font-light text-lg  text-gray-900"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {bookings.map(booking => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 ">
                    <div>
                      <p className="text-lg">{booking.clientName}</p>
                      <p className="text-sm ">{booking.clientEmail}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4"> {booking.service}</td>
                  <td className="px-6 py-4">{booking.barber}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-lg">{booking.date}</p>
                      <p className="text-sm ">{booking.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">{booking.price}</td>
                  <td className="px-6 py-4">{booking.status}</td>
                  <td className="px-6 py-4">
                    <RowPopOver />
                  </td>
                </tr> // logic will be if pending option will be approved and cancel if Confirmed option is Done only
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
