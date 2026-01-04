'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform values based on scroll
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.98)']
  );
  
  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 0 0 transparent', '0 4px 30px rgba(0, 0, 0, 0.1)']
  );
  
  const navHeight = useTransform(scrollY, [0, 100], ['6rem', '4.5rem']);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu items with stagger animation
  const menuItems = [
    { href: '/', label: 'Inicio' },
    { href: '/services', label: 'Servicios' },
    { href: '/about', label: 'Nosotros' }
  ];

  return (
    <motion.nav 
      className="fixed w-full z-50 backdrop-blur-xl border-b border-slate-200/50"
      style={{ 
        backgroundColor: navBackground,
        boxShadow: navShadow
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div 
          className="flex justify-between items-center py-2"
          style={{ height: navHeight }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            <motion.div 
              className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center flex-shrink-0"
              style={{ scale: logoScale }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Image
                src="/logo_idea.png"
                alt="Ekali Solutions Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary leading-tight">
                Ekali
              </span>
              <span className="text-xs sm:text-sm md:text-base font-medium text-secondary leading-tight">
                Solutions
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.5, 
                  ease: 'easeOut'
                }}
              >
                <Link 
                  href={item.href} 
                  className="relative px-5 py-2.5 text-slate-700 font-medium rounded-xl overflow-hidden group"
                >
                  {/* Hover background */}
                  <motion.span
                    className="absolute inset-0 bg-primary/5 rounded-xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Text */}
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </span>
                  {/* Underline */}
                  <motion.span
                    className="absolute bottom-1 left-5 right-5 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <motion.a 
                href="/contact" 
                className="ml-4 btn-primary text-white px-7 py-3 rounded-xl font-bold text-sm inline-block relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Contáctanos</span>
                {/* Shine effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ translateX: ['100%', '-100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100/80 hover:bg-slate-200/80 transition-colors" 
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-slate-700 rounded-full origin-center"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 9 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-slate-700 rounded-full"
                animate={{
                  opacity: isOpen ? 0 : 1,
                  x: isOpen ? 20 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-slate-700 rounded-full origin-center"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -9 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <motion.div 
                className="px-2 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-xl rounded-2xl mt-2 border border-slate-200 shadow-xl mb-4"
              >
                {menuItems.map((item, i) => (
                  <motion.div 
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.3, ease: 'easeOut' }}
                  >
                    <Link 
                      href={item.href} 
                      className="block px-5 py-4 text-lg text-slate-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium" 
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.3, ease: 'easeOut' }}
                >
                  <a 
                    href="/contact" 
                    className="block mx-2 mt-4 btn-primary text-white px-6 py-4 rounded-xl font-bold text-center text-lg" 
                    onClick={() => setIsOpen(false)}
                  >
                    Contáctanos
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
