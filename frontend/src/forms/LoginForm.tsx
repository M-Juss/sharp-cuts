'use client';
import {useForm} from 'react-hook-form';
import {InputWithLabel} from '../components/common/InputWithField';
import {Button} from '../components/ui/button';
import {
  loginSchema,
  type LoginFormValues
} from '@/validations/auth.validation';
import {zodResolver} from '@hookform/resolvers/zod';
import {loginRequest} from '@/services/auth.api';
import {useRouter} from 'next/navigation';

export function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting}
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await loginRequest(data.email, data.password);
      console.log('Log in data:', response);

      if (response.data?.user.user_type === 'client') {
        router.push('/clients');
      } else if (response.data?.user.user_type === 'admin') {
        router.push('/admin');
      } else if (response.data?.user.user_type === 'manager') {
        router.push('/manager');
      }  else {
        alert('Unknown user type');
      }
    } catch (error: any) {
          // Map Laravel field errors back into the form
          if (error.errors) {
            Object.entries(error.errors).forEach(([field, messages]) => {
              setError(field as keyof LoginFormValues, {
                type: 'server',
                message: (messages as string[])[0]  // first message per field
              });
            });
          } else {
            // Non-field error (e.g. server crash) — set on a root error
            setError('root', { type: 'server', message: error.message });
          }
        }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full my-5 space-y-7 relative "
    >
      {errors.root && (
        <p className="text-sm text-red-500 bg-red-50 p-2 rounded">
          {errors.root.message}
        </p>
      )}

      <InputWithLabel
        label="Email"
        id="email"
        type="text"
        placeholder="email@gmail.com"
        {...register('email')}
      />
      {errors.email && (
        <p className="text-xs text-red-500 absolute bottom-24 ">
          {errors.email.message}
        </p>
      )}

      <InputWithLabel
        label="Password"
        id="password"
        type="password"
        placeholder="Password"
        {...register('password')}
      />
      {errors.password && (
        <p className="text-xs text-red-500 absolute bottom-3">
          {errors.password.message}
        </p>
      )}

      <Button
        type="submit"
        className="w-full font-semibold bg-client"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Logging in...' : 'Log in'}
      </Button>
    </form>
  );
}
