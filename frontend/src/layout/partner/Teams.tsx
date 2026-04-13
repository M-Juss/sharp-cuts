import { NewBarberForm } from "@/forms/NewBarberForm";
import { Plus } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

type Team = {
  img: string;
  name: string;
  title: string;
};

type TeamsProps = {
  teams: Team[];
  onAddClick: () => void;
};

export function Teams({ teams, onAddClick }: TeamsProps) {
  const [openChangePassword, setOpenChangePassword] = useState(false);

  return (
    <div className="lg:col-span-3 col-span-1 flex flex-col">
      <h1 className="text-4xl mb-1 font-medium">Team Management</h1>
      <p className="mb-4 ">Downtown Branch - Downtown Branch Manager</p>
      <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-4 my-4 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold mb-4">Team Members</h2>
          <Dialog
            open={openChangePassword}
            onOpenChange={setOpenChangePassword}
          >
            <DialogTrigger asChild>
              <button className="flex gap-1 py-2 px-3  bg-manager text-white rounded-md ">
                {" "}
                <Plus /> Add
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg w-full p-0 bg-transparent border-none shadow-none backdrop-blur-md">
              <NewBarberForm />
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-3 ">
          {teams.map((member, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-full py-6  bg-white rounded-xl border border-gray-200 hover:shadow-xl transition ease-in"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={100}
                height={100}
                className="h-25 w-25 object-cover rounded-full mb-6"
              />
              <p className="text-xl font-medium mb-2">{member.name}</p>
              <p className="font-light text-sm ">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
