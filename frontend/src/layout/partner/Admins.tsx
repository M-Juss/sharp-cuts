'use client';

import { UserPlus } from 'lucide-react';
import { ReactNode, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { NewAdminForm } from '@/forms/NewAdminForm';

type Admin = {
  name: string;
  email: string;
  phone: string;
  date: string;
  status: string;
  action: ReactNode;
};

type AdminsProps = {
  admins: Admin[];
};

export function Admins({ admins }: AdminsProps) {
  const [open, setOpen] = useState(false);

  const adminHeader = [
    'Name',
    'Email',
    'Phone',
    'Assigned Date',
    'Status',
    'Actions',
  ];

  return (
    <div className="lg:col-span-3 col-span-1 flex flex-col">
      <h1 className="text-4xl mb-1 font-medium">Admin Management</h1>
      <p className="mb-4 ">Downtown Branch - Downtown Branch Manager</p>

      {/* 🔥 DIALOG BUTTON */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="flex gap-2 p-2 rounded-md bg-manager w-fit self-end text-white mb-4">
            <UserPlus size={25} /> Add New Admin
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-lg w-full p-0 bg-transparent border-none shadow-none backdrop-blur-md">
        
          <NewAdminForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* TABLE */}
      <div className="bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {adminHeader.map(header => (
                  <th
                    key={header}
                    className="px-6 py-4 text-left font-light text-lg text-gray-900"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {admins.map(data => (
                <tr key={data.email} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">{data.email}</td>
                  <td className="px-6 py-4">{data.phone}</td>
                  <td className="px-6 py-4">{data.date}</td>
                  <td className="px-6 py-4">{data.status}</td>
                  <td className="px-6 py-4">{data.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}