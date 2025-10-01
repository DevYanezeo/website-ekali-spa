'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur-md border-b border-foreground/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12">
              <Image
                src="/logo-ekali.png"
                alt="Ekali Solutions Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <span className="text-xl font-bold text-foreground">
              Ekali<span className="text-primary">SpA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              Inicio
            </Link>
            <Link 
              href="/about" 
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              Nosotros
            </Link>
            <Link 
              href="/services" 
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              Servicios
            </Link>
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-surface/95 backdrop-blur-md rounded-lg mt-2 border border-foreground/10">
              <Link 
                href="/" 
                className="block px-3 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                href="/contact" 
                className="block mx-3 my-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
