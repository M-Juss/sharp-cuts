import { Building2, Eye, PhilippinePeso, SquarePen , Trash } from "lucide-react";
import { BranchCardProps } from "@/types/app.types";
import { StatBox } from "./StatBox";

//comment
export const BranchCard: React.FC<BranchCardProps> = ({
  name,
  address,
  status,
  manager,
  stats,
  onView,
  onEdit,
  onDelete,
}) => {
    const statusStyles = {
        active: "text-green-600 bg-green-100 border-green-600",
        inactive: "text-gray-600 bg-gray-100 border-gray-400",
    };

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-4">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          <div className="p-2 text-purple-600 bg-purple-200 rounded-md">
            <Building2 />
          </div>
          <div className="flex flex-col">
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-600">{address}</p>
          </div>
        </div>

        <p
          className={`text-xs px-2 rounded-full border h-fit ${statusStyles[status]}`}
        >
          {status}
        </p>
      </div>

      {/* Manager */}
      <div className="flex flex-col bg-gray-100 p-2 rounded-md mb-2">
        <p className="text-xs mb-1 text-gray-600">Branch Manager</p>
        <p className="text-sm">{manager.name}</p>
        <p className="text-xs text-gray-600">{manager.email}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 w-full">
        <StatBox label="Clients" value={stats.clients} color="blue" />
        <StatBox label="Bookings" value={stats.bookings} color="pink" />
        <StatBox label="Revenue" value={stats.revenue} color="green" icon={<PhilippinePeso size={20} />} />
      </div>

      <div className="w-full h-0.5 bg-gray-200 my-3" />

      {/* Actions */}
      <div className="flex w-full space-x-2">
        <button
          onClick={onView}
          className="flex-1 flex justify-center items-center py-1 text-md rounded-md bg-purple-500 text-white gap-2"
        >
          <Eye size={16} /> View Details
        </button>

        <button
          onClick={onEdit}
          className="border border-gray-600 px-2 rounded-md"
        >
          <SquarePen size={17} />
        </button>

        <button
          onClick={onDelete}
          className="border px-2 rounded-md text-red-600"
        >
          <Trash size={17} />
        </button>
      </div>
    </div>
  );
};