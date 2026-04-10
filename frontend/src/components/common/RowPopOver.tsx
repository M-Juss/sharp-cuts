import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { EllipsisVertical } from "lucide-react"

export function RowPopOver() {
    return(
        <Popover>
            <PopoverTrigger asChild>
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <EllipsisVertical/>
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-fit p-2 flex flex-col gap-2">
                <button className="text-left text-sm px-2 py-1 rounded bg-green-400 ">Approve</button>
                <button className="text-left text-sm px-2 py-1 rounded bg-blue-400">Done</button>
                <button className="text-left text-sm px-2 py-1 rounded bg-red-400">Cancel</button>
            </PopoverContent>
        </Popover>
    );
}