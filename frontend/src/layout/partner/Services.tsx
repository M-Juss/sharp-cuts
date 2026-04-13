import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { NewServicesForm } from "@/forms/NewServicesForm";
import { Plus, PhilippinePesoIcon, EllipsisVertical } from "lucide-react";
import { useState } from "react";

type Service = {
  title: string;
  durationMin: number;
  price: number;
};

type ServicesProps = {
  services: Service[];
  onAddClick: () => void;
};

export function Services({ services, onAddClick }: ServicesProps) {
    const [openChangePassword, setOpenChangePassword] = useState(false);
    
  return (
    <div className="lg:col-span-3 col-span-1 flex flex-col">
      <h1 className="text-4xl mb-1 font-medium">Services Management</h1>
      <p className="mb-4 ">Downtown Branch - Downtown Branch Manager</p>
      <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-4 my-4 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold mb-4">Services</h2>
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
              <NewServicesForm />
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-1 gap-2 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full p-4  bg-white rounded-xl border border-gray-200 hover:bg-gray-100 transition ease-in"
            >
              <div className="flex flex-col">
                <p className="text-lg font-medium mb-1">{service.title}</p>
                <p className="text-xs ">Duration: {service.durationMin} min</p>
              </div>
              <div className="flex items-center space-x-3">
                <p className="flex text-xl  ">
                  <PhilippinePesoIcon size={25} />
                  {service.price}
                </p>
                <button>
                  <EllipsisVertical />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
