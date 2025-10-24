'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 py-2">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <Image
                src="/logo_idea.png"
                alt="Ekali Solutions Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary leading-tight">Ekali</span>
              <span className="text-base font-medium text-secondary leading-tight">Solutions</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-slate-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium">Inicio</Link>
            <Link href="/services" className="px-4 py-2 text-slate-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium">Servicios</Link>
            <Link href="/about" className="px-4 py-2 text-slate-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium">Nosotros</Link>
            <a href="/contact" className="ml-3 btn-primary text-white px-8 py-3 rounded-xl font-bold text-sm">Contáctanos</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200" aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-white rounded-xl mt-2 border border-slate-200 shadow-lg">
              <Link href="/" className="block px-4 py-3 text-slate-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium" onClick={() => setIsOpen(false)}>Inicio</Link>
              <Link href="/services" className="block px-4 py-3 text-slate-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium" onClick={() => setIsOpen(false)}>Servicios</Link>
              <Link href="/about" className="block px-4 py-3 text-slate-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium" onClick={() => setIsOpen(false)}>Nosotros</Link>
              <a href="/contact" className="block mx-2 my-2 btn-primary text-white px-6 py-3 rounded-xl font-bold text-center" onClick={() => setIsOpen(false)}>Contáctanos</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
