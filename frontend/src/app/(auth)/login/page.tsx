import { Scissors } from "lucide-react";
import { LoginForm } from "@/forms/LoginForm";
import Link from "next/link";

export default function Login(){
    return(
        <div className="min-h-screen flex justify-center items-center px-8 bg-primary-landing/90">
            <div className="flex flex-col px-12 py-8 bg-tertiary border  border-white/12 rounded-xl items-center text-center bg-tertiary-landing text-white">
                <Link href="/">
                    <div className="flex items-center gap-3 mb-4 cursor-pointer">
                        <p className='bg-client p-1 rounded-md'><Scissors/></p>
                        <p className=''>Sharp Cuts</p>
                    </div>
                </Link>
                <p className="text-3xl font-black mb-2">Welcome Back!</p>
                <p className="sm:text-md text-sm">Enter your email and password below to log in.</p>

                <LoginForm/>

                <div className="flex items-center space-x-1 justify-center">
                    <p className="text-sm text-neutral">Don't have an account? </p>
                    <Link href="/register" className="underline text-sm text-white hover:text-client cursor-pointer">Create here.</Link>
                </div>

            </div>
        </div>
    );
}