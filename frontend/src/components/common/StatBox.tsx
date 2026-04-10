import { StatBoxProps } from "@/types/app.types";

export const StatBox: React.FC<StatBoxProps> = ({
  label,
  value,
  color,
  icon,
}) => {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    pink: "bg-pink-100 text-pink-600",
    green: "bg-green-100 text-green-600",
  };

  return (
    <div className={`flex flex-col items-center py-4 rounded-md ${colors[color]}`}>
      <p className="flex items-center text-xl">{icon && icon}{value}</p>

      <p className="text-xs text-black flex items-center gap-1">
        {label}
      </p>
    </div>
  );
};
