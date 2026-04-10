'use client';
import { Scissors, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {

    const navLinks = [
        {name: 'Home', href: '#home'},
        {name: 'Services', href: '#services'},
        {name: 'About', href: '#about'},
        {name: 'Gallery', href: '#gallery'},
        {name: 'Testimonials', href: '#testimonial'},
        {name: 'Contact', href: '#contact'},
    ];

    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-4 bg-black/60 backdrop-blur flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
            <p className='bg-client p-1 rounded-md'><Scissors/></p>
            <p className=''>Sharp Cuts</p>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center md:gap-4 lg:gap-8'>
            {navLinks.map((link) => (
                <a key={link.name} href={link.href} className=" hover:text-client transition-colors duration-300 relative group">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                </a>
            ))}
        </nav>

        <Link href='/login' className='hidden md:block bg-client rounded-md px-3 py-1 hover:bg-white hover:text-client transition-all duration-300'>
            Log In
        </Link>

        {/* Mobile Menu Button */}
        <button 
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
            <div className='md:hidden fixed top-16 left-0 w-full bg-black/60 backdrop-blur border-t border-white/10 py-6 px-8 space-y-2 z-40 text-center grid grid-cols-2'>
                {navLinks.map((link)=> (
                <a onClick={() => setIsOpen(false)} key={link.name} href={link.href} className=" hover:bg-black/40 py-2 transition-colors duration-300 relative group">
                    {link.name}
                </a>
                ))}
            <Link href='/login' className='md:hidden col-span-2 mx-2 py-2 bg-client rounded-md hover:bg-white hover:text-client transition-all duration-300'>
                Log In
            </Link>
            </div>
        )}

    </header>
  );
}