'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputWithLabel } from '@/components/common/InputWithField';
import { SelectWithLabel } from '@/components/common/SelectWithLabel';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Building2 } from 'lucide-react';
import {
  CreateBranchFormValues,
  createBranchSchema,
} from '@/validations/new.branch.validation';
import { ApiResponse } from '@/types/app.types';

const steps: {
  title: string;
  fields: (keyof CreateBranchFormValues)[];
}[] = [
  {
    title: 'Branch Information',
    fields: ['name', 'location'],
  },
  {
    title: 'Partner Personal Information',
    fields: ['first_name', 'last_name', 'contact_number', 'status'],
  },
  {
    title: 'Partner Account Information',
    fields: ['email', 'password', 'confirm_password'],
  },
];

const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

interface CreateBranchFormProps {
  apiUrl?: string;
  onSuccess?: () => void;
}

export function CreateBranchForm({ apiUrl, onSuccess }: CreateBranchFormProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = steps[stepIndex];
  const progressValue = ((stepIndex + 1) / steps.length) * 100;

  const {
    register,
    control,
    handleSubmit,
    trigger,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<CreateBranchFormValues>({
    resolver: zodResolver(createBranchSchema),
    defaultValues: {
      name: '',
      location: '',
      first_name: '',
      last_name: '',
      contact_number: '',
      status: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    mode: 'onTouched',
  });

  const onNext = async () => {
    const isCurrentStepValid = await trigger(currentStep.fields);
    if (!isCurrentStepValid) return;
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const onBack = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: CreateBranchFormValues) => {
    const endpoint = apiUrl ?? `${process.env.NEXT_PUBLIC_API_URL}/branch`;
    const token = localStorage.getItem('authorization');

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(token ? { Authorization: token } : {}),
      },
      body: JSON.stringify(data),
    });

    const payload: ApiResponse | null = await response.json().catch(() => null);

    if (!response.ok) {
      const apiErrors = payload?.errors ?? null;
      if (apiErrors) {
        Object.entries(apiErrors).forEach(([field, messages]) => {
          setError(field as keyof CreateBranchFormValues, {
            type: 'server',
            message: messages[0],
          });
        });
      } else {
        setError('root', {
          type: 'server',
          message: payload?.message ?? 'Failed to submit form',
        });
      }
      return;
    }

    onSuccess?.();
  };

  return (
    <div className="bg-zinc-900 border border-client rounded-xl py-8 px-10 flex flex-col text-white shadow-2xl w-full">
      <h1 className="text-xl flex items-center justify-center gap-3 border border-client rounded-xl p-2 mb-6">
        <Building2 size={30} className="bg-client p-1 rounded-md" />
        Create New Branch
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full space-y-2">
        <div className="space-y-1 mb-1">
          <p className="text-xs text-neutral text-start">
            Step {stepIndex + 1} of {steps.length}
          </p>
          <Progress value={progressValue} className="h-2 bg-zinc-700" />
        </div>

        <h2 className="text-lg font-semibold text-start">{currentStep.title}</h2>

        {errors.root && (
          <p className="text-sm text-red-500 bg-red-50 p-2 rounded text-start">
            {errors.root.message}
          </p>
        )}

        {stepIndex === 0 && (
          <div className="space-y-2">
            <div>
              <InputWithLabel
                label="Branch Name"
                id="name"
                placeholder="Main Branch"
                {...register('name')}
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>

            <div>
              <InputWithLabel
                label="Branch Address"
                id="location"
                placeholder="123 Street, City"
                {...register('location')}
              />
              {errors.location && (
                <p className="text-xs text-red-500">{errors.location.message}</p>
              )}
            </div>
          </div>
        )}

        {stepIndex === 1 && (
          <div className="space-y-2">
            <div>
              <InputWithLabel
                label="First Name"
                id="first_name"
                placeholder="John"
                {...register('first_name')}
              />
              {errors.first_name && (
                <p className="text-xs text-red-500">{errors.first_name.message}</p>
              )}
            </div>

            <div>
              <InputWithLabel
                label="Last Name"
                id="last_name"
                placeholder="Doe"
                {...register('last_name')}
              />
              {errors.last_name && (
                <p className="text-xs text-red-500">{errors.last_name.message}</p>
              )}
            </div>

            <div>
              <InputWithLabel
                label="Contact Number"
                id="contact_number"
                placeholder="09999999999"
                {...register('contact_number')}
              />
              {errors.contact_number && (
                <p className="text-xs text-red-500">{errors.contact_number.message}</p>
              )}
            </div>

            <div>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <SelectWithLabel
                    id="status"
                    label="Status"
                    placeholder="Select status"
                    groupLabel="Status"
                    options={statusOptions}
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                )}
              />
              {errors.status && (
                <p className="text-xs text-red-500">{errors.status.message}</p>
              )}
            </div>
          </div>
        )}

        {stepIndex === 2 && (
          <div className="space-y-2">
            <div>
              <InputWithLabel
                label="Email"
                id="email"
                placeholder="email@example.com"
                {...register('email')}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <InputWithLabel
                label="Password"
                id="password"
                type="password"
                placeholder="********"
                {...register('password')}
              />
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div>
              <InputWithLabel
                label="Confirm Password"
                id="confirm_password"
                type="password"
                placeholder="********"
                {...register('confirm_password')}
              />
              {errors.confirm_password && (
                <p className="text-xs text-red-500">{errors.confirm_password.message}</p>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center gap-3 pt-2">
          {stepIndex > 0 && (
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="border-zinc-600 text-zinc-900 hover:bg-zinc-800 hover:text-white"
            >
              Back
            </Button>
          )}

          {stepIndex < steps.length - 1 ? (
            <Button type="button" onClick={onNext} className="ml-auto bg-client hover:bg-client/90">
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="ml-auto bg-client hover:bg-client/90"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
