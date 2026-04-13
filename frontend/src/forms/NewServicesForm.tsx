import { DialogTitle } from '@/components/ui/dialog';
import {InputWithLabel} from '../components/common/InputWithField';
import {Button} from '../components/ui/button';
import {KeyRound} from 'lucide-react';

export function NewServicesForm() {
  return (
    <div className="bg-zinc-900 border border-client rounded-xl py-8 px-10 flex flex-col text-white shadow-2xl">
      <DialogTitle className="sr-only">Add New Service</DialogTitle>
      <h1 className="text-xl flex items-center justify-center gap-3 border border-client rounded-xl p-2 mb-6">
        <KeyRound size={30} className="bg-client p-1 rounded-md" />
        Add New Service
      </h1>

        <form className="flex flex-col w-full space-y-5">
          <InputWithLabel
            label="Service"
            id="service"
            type="text"
            placeholder="Service name"
          />

          <div className="flex gap-3 ">
            <InputWithLabel
              label="Duration"
              id="duration"
              type="text"
              placeholder="Minutes"
            />

            <InputWithLabel
              label="Price"
              id="price"
              type="numeric"
              placeholder="Peso"
            />
          </div>
          <label htmlFor="" className="flex flex-col">
            <p className="mb-1">Description</p>
            <textarea
              name=""
              id=""
              rows={5}
              className="border border-white rounded-md text-sm p-2"
            ></textarea>
          </label>

          <Button type="submit" className="w-full font-semibold bg-client hover:bg-client/90">
            Submit
          </Button>
        </form>
      </div>
  );
}
