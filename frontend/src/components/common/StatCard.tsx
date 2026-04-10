import {StatCardProps} from "@/types/app.types";

export function StatCard({title, value, icon, trend, trendColor = "gray", iconBg}: StatCardProps){

  const trendColorMap = {
    green: "text-green-600",
    red: "text-red-600",
    gray: "text-gray-500",
  };

  return (
    <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-md">
      <div className="flex flex-col">
        <div className="flex justify-between mb-4">
          <p className={`${iconBg} text-white p-3 rounded-md`}>
            {icon}
          </p>

          {trend && (
            <p className={`flex items-center gap-1 ${trendColorMap[trendColor]}`}>
              {trend}
            </p>
          )}
        </div>

        <p className="text-3xl font-semibold">{value}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );

}