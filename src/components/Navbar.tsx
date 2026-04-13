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
    ['rgba(2, 21, 35, 0)', 'rgba(2, 21, 35, 0.9)']
  );

  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 0 0 transparent', '0 10px 30px rgba(0, 0, 0, 0.5)']
  );

  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.05)']
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

  const menuItems = [
    { href: '/', label: 'Inicio' },
    { href: '/services', label: 'Servicios' },
    { href: '#methodology', label: 'Metodología' },
    { href: '/about', label: 'Nosotros' }
  ];

  return (
    <motion.nav
      className="fixed w-full z-50 backdrop-blur-md"
      style={{
        backgroundColor: navBackground,
        boxShadow: navShadow,
        borderBottomWidth: '1px',
        borderBottomColor: navBorder
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
          <Link href="/" className="flex items-center group">
            <motion.div
              className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0"
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
            <span className="ml-3 text-xl font-black tracking-tighter text-on-surface hidden sm:block">
              Ekali Solutions
            </span>
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
                  className="relative px-5 py-2.5 text-on-surface/80 font-bold rounded-xl overflow-hidden group tracking-tight"
                >
                  <motion.span
                    className="absolute inset-0 bg-primary/10 rounded-xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </span>
                  <motion.span
                    className="absolute bottom-1 left-5 right-5 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <motion.a
                href="/contact"
                className="ml-4 bg-gradient-to-r from-primary to-primary-container text-on-primary px-7 py-3 rounded-xl font-black text-sm inline-block relative overflow-hidden group shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Contáctanos</span>
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
            className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-surface-variant/20 border border-outline-variant/30 text-on-surface"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-current rounded-full origin-center"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 9 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-current rounded-full"
                animate={{
                  opacity: isOpen ? 0 : 1,
                  x: isOpen ? 20 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-current rounded-full origin-center"
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
                className="px-2 pt-2 pb-6 space-y-2 bg-surface-container/95 backdrop-blur-2xl rounded-[2rem] mt-2 border border-outline-variant/20 shadow-2xl mb-4"
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
                      className="block px-6 py-5 text-xl text-on-surface/80 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all duration-300 font-bold"
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
                  <Link
                    href="/contact"
                    className="block mx-2 mt-4 bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-5 rounded-2xl font-black text-center text-xl shadow-lg shadow-primary/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Contáctanos
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
