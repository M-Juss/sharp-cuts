'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { BranchCard } from '@/components/common/BranchCard';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CreateBranchForm } from '@/forms/CreateBranchForm';
import { BranchCardProps } from '@/types/app.types';

type BranchesProps = {
  branches: BranchCardProps[];
};

export function Branches({ branches }: BranchesProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:col-span-3 col-span-1 flex flex-col">
      <h1 className="text-4xl mb-1 font-medium">Branch Management</h1>
      <p className="mb-4">Welcome back, Business Owner!</p>

      <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-4 my-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold mb-4">All Branches</h2>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="flex gap-1 py-2 px-3 bg-owner text-white rounded-md">
                <Plus size={18} /> Add
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl w-full">
              <CreateBranchForm onSuccess={() => setOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-3">
          {branches.map((branch) => (
            <BranchCard
              key={`${branch.name}-${branch.address}`}
              name={branch.name}
              address={branch.address}
              status={branch.status}
              manager={branch.manager}
              stats={branch.stats}
              onView={branch.onView}
              onEdit={branch.onEdit}
              onDelete={branch.onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
