import { DialogTitle } from "@/components/ui/dialog";
import { InputWithLabel } from "../components/common/InputWithField";
import { Button } from "../components/ui/button";
import { KeyRound } from "lucide-react";

export function NewBarberForm() {
  return (
    <div className="bg-zinc-900 border border-client rounded-xl py-8 px-10 flex flex-col text-white shadow-2xl">
      <DialogTitle className="sr-only">Add New Barber</DialogTitle>
      <h1 className="text-xl flex items-center justify-center gap-3 border border-client rounded-xl p-2 mb-6">
        <KeyRound size={30} className="bg-client p-1 rounded-md" />
        Add New Barber
      </h1>
      <img
        src=""
        alt=""
      />
      <label className="bg-client text-white px-3 py-1 rounded-md mb-4 cursor-pointer hover:scale-95 transition ease-in-out inline-block">
        Choose a profile
        <input type="file" className="hidden" />
      </label>

      <form className="flex flex-col w-full space-y-5">
        <InputWithLabel
          label="Firstname"
          id="firstname"
          type="text"
          placeholder="John"
        />

        <InputWithLabel
          label="Lastname"
          id="lastname"
          type="text"
          placeholder="Doe"
        />

        <InputWithLabel
          label="Email"
          id="email"
          type="text"
          placeholder="email@gmail.com"
        />

        <InputWithLabel
          label="Contact Number"
          id="contanct_number"
          type="text"
          placeholder="09999999999"
        />

        <Button type="submit" className="w-full font-semibold bg-client hover:bg-client/90">
          Submit
        </Button>
      </form>
    </div>
  );
}
