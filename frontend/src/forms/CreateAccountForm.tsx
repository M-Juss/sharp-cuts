'use client';

import { useForm } from 'react-hook-form';
import { InputWithLabel } from '../components/common/InputWithField';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateAccountFormValues,
  createAccountSchema
} from '../validations/auth.validation';
import { Button } from '../components/ui/button';
import { createNewClient } from '@/services/auth.api';
import { useRouter } from 'next/navigation';

export function CreateAccountForm() {
  const router = useRouter();

 const {
    register,
    handleSubmit,
    setError,           
    formState: { errors, isSubmitting }
  } = useForm<CreateAccountFormValues>({
    resolver: zodResolver(createAccountSchema)
  });

  const onSubmit = async (data: CreateAccountFormValues) => {
    try {
      await createNewClient(data.first_name, data.last_name, data.email, data.contact_number, data.password);
      router.push('/login');
    } catch (error: any) {
      if (error.errors) {
        Object.entries(error.errors).forEach(([field, messages]) => {
          setError(field as keyof CreateAccountFormValues, {
            type: 'server',
            message: (messages as string[])[0]  
          });
        });
      } else {
        setError('root', { type: 'server', message: error.message });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full my-2 space-y-2"
    >
          {errors.root && (
        <p className="text-sm text-red-500 bg-red-50 p-2 rounded text-start">
          {errors.root.message}
        </p>
      )}
      <div>
        <InputWithLabel
          label="Firstname"
          {...register('first_name')}
        />
        {errors.first_name && (
          <p className="text-xs text-red-500 text-start">
            {errors.first_name.message}
          </p>
        )}
      </div>

      <div>
        <InputWithLabel
          label="Lastname"
          {...register('last_name')}
        />
        {errors.last_name && (
          <p className="text-xs text-red-500 text-start">
            {errors.last_name.message}
          </p>
        )}
      </div>

      <div>
        <InputWithLabel
          label="Email"
          {...register('email')}
        />
        {errors.email && (
          <p className="text-xs text-red-500 text-start">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <InputWithLabel
          label="Contact Number"
          {...register('contact_number')}
        />
        {errors.contact_number && (
          <p className="text-xs text-red-500 text-start">
            {errors.contact_number.message}
          </p>
        )}
      </div>

      <div>
        <InputWithLabel
          label="Password"
          type="password"
          {...register('password')}
        />
        {errors.password && (
          <p className="text-xs text-red-500 text-start">
            {errors.password.message}
          </p>
        )}
      </div>

      <div>
        <InputWithLabel
          label="Confirm Password"
          type="password"
          {...register('confirm_password')}
        />
        {errors.confirm_password && (
          <p className="text-xs text-red-500 text-start">
            {errors.confirm_password.message}
          </p>
        )}
      </div>

      <Button className='bg-client mt-4' type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </Button>
    </form>
  );
}