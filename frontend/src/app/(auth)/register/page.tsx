import {Scissors} from 'lucide-react';
import Link from 'next/link';
import { CreateAccountForm } from '@/forms/CreateAccountForm';

export default function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center px-8 text-center bg-primary-landing/90">
      <div className="flex flex-col px-12 py-6 bg-tertiary border border-white/12 rounded-xl items-center bg-tertiary-landing text-white">
        <Link href="/">
          <div className="flex items-center gap-3 mb-2 cursor-pointer">
            <p className="bg-client p-1 rounded-md">
              <Scissors />
            </p>
            <p className="">Sharp Cuts</p>
          </div>
        </Link>
        <p className="sm:text-3xl text-2xl font-black mb-2">
          Create an account
        </p>
        <p className="sm:text-md text-sm">
          Enter your details below to create and account
        </p>

        <CreateAccountForm />

        <div className="flex items-center space-x-1 justify-center">
          <p className="text-sm text-neutral">Already have an account? </p>
          <Link
            href="/login"
            className="underline text-sm text-white hover:text-client cursor-pointer"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
