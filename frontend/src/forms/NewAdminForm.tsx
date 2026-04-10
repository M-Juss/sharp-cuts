import { Scissors } from "lucide-react";
import { InputWithLabel } from "../components/common/InputWithField";
import { Button } from "../components/ui/button";

export function NewAdminForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-zinc-900 border border-accent rounded-xl py-8 px-10 flex flex-col text-white shadow-2xl">
      
      <h1 className="text-xl flex items-center justify-center gap-3 border border-accent rounded-xl p-2 mb-6">
        <Scissors size={30} className="bg-accent p-1 rounded-md" />
        Add Admin
      </h1>

      <form className="flex flex-col w-full space-y-4">

        <div className="flex gap-3">
          <InputWithLabel label="Firstname" id="firstname" type="text" placeholder="John" />
          <InputWithLabel label="Lastname" id="lastname" type="text" placeholder="Doe" />
        </div>

        <InputWithLabel label="Contact Number" id="contact_number" type="text" placeholder="09999999999" />

        <InputWithLabel label="Email" id="email" type="text" placeholder="email@gmail.com" />

        <InputWithLabel label="Password" id="password" type="password" placeholder="Password" />

        <InputWithLabel label="Confirm Password" id="confirm_password" type="password" placeholder="Confirm Password" />

        <div className="flex gap-2">
          <Button type="submit" className="w-full font-semibold bg-accent">
            Submit
          </Button>
        </div>

      </form>
    </div>
  );
}