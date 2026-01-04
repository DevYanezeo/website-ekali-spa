'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <footer ref={ref} className="relative bg-dark border-t border-white/10 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(26,127,232,0.1) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(34,187,134,0.1) 0%, transparent 70%)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative w-20 h-20 flex items-center justify-center">
                <Image
                  src="/logo_idea.png"
                  alt="Ekali Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white leading-tight">
                  Ekali
                </span>
                <span className="text-lg font-medium text-secondary leading-tight">
                  Solutions
                </span>
              </div>
            </motion.div>
            
            <p className="text-slate-300 max-w-md mb-8 leading-relaxed text-lg">
              Transformamos operaciones con{' '}
              <motion.span 
                className="font-bold text-white"
                whileHover={{ color: '#1a7fe8' }}
              >
                Microsoft Power Platform
              </motion.span>{' '}y{' '}
              <motion.span 
                className="font-bold text-accent"
                whileHover={{ color: '#22bb86' }}
              >
                desarrollo full-stack
              </motion.span>.
              <span className="block mt-2 text-slate-400">
                Automatización inteligente para empresas que buscan resultados reales.
              </span>
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { 
                  href: 'mailto:ekali.solutions@gmail.com',
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  ),
                  label: 'Email'
                },
                { 
                  href: 'https://www.linkedin.com/company/ekali-consultoria/',
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                  label: 'LinkedIn',
                  external: true
                }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 rounded-xl bg-white/5 hover:bg-secondary/20 border border-white/10 hover:border-secondary/40 flex items-center justify-center text-white hover:text-secondary transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </motion.span>
              Servicios
            </h3>
            <ul className="space-y-4">
              {[
                'Power Platform',
                'Desarrollo Full-Stack',
                'Cloud & DevOps',
                'Consultoría Estratégica'
              ].map((service, i) => (
                <motion.li key={i}>
                  <motion.a 
                    href="/services" 
                    className="text-slate-300 hover:text-accent flex items-center gap-2 group transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-accent transition-colors"
                      whileHover={{ scale: 1.5 }}
                    />
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.span>
              Contacto
            </h3>
            <ul className="space-y-5">
              <li>
                <span className="block font-semibold text-white mb-2 text-sm">Email</span>
                <motion.a 
                  href="mailto:ekali.solutions@gmail.com" 
                  className="text-slate-300 hover:text-accent flex items-center gap-2 group transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-4 h-4 text-secondary group-hover:text-accent group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  ekali.solutions@gmail.com
                </motion.a>
              </li>
              <li>
                <span className="block font-semibold text-white mb-2 text-sm">Ubicación</span>
                <div className="text-slate-300 flex items-center gap-2">
                  <motion.svg 
                    className="w-4 h-4 text-secondary" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </motion.svg>
                  Santiago, Chile
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider with animation */}
        <motion.div 
          className="h-px w-full overflow-hidden mb-10"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-slate-400 text-sm">
            © 2025 Ekali Solutions – Santiago, Chile. Todos los derechos reservados.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { href: '/privacy', icon: 'lock', label: 'Privacidad' },
              { href: '/terms', icon: 'doc', label: 'Términos' }
            ].map((link, i) => (
              <motion.a 
                key={i}
                href={link.href} 
                className="text-slate-400 hover:text-accent text-sm flex items-center gap-2 group transition-colors"
                whileHover={{ x: 3 }}
              >
                {link.icon === 'lock' ? (
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
