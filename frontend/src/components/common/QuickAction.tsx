
import { QuickActionProps } from "@/types/app.types";

export function QuickAction({title, description, icon, iconClassname, onClick, className}: QuickActionProps){
    return(
        <div
        onClick={onClick}
        className={`flex gap-3 items-center p-4 border-dashed border-gray-300 border-2 rounded-md cursor-pointer hover:bg-gray-50 ${className}`}>
        <p className={`p-2 rounded-md ${iconClassname}`}> {icon}</p>
         <p className="text-lg flex flex-col font-semibold">{title} <span className="text-sm font-normal">{description}</span></p>
        </div>
    );
}