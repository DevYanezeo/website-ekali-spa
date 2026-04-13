'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <footer ref={ref} className="relative bg-surface-container-lowest border-t border-outline-variant/20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(167,200,255,0.05) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
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
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="/logo_idea.png"
                  alt="Ekali Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black text-on-surface tracking-tighter">
                Ekali Solutions
              </span>
            </motion.div>
            
            <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed text-lg">
              Transformamos operaciones con{' '}
              <motion.span 
                className="font-bold text-primary"
              >
                Microsoft Power Platform
              </motion.span>{' '}y{' '}
              <motion.span 
                className="font-bold text-secondary"
              >
                desarrollo full-stack
              </motion.span>.
              <span className="block mt-2 opacity-70">
                Automatización inteligente para empresas que buscan resultados reales.
              </span>
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { 
                  href: 'mailto:ekali.solutions@gmail.com',
                  icon: 'mail',
                  label: 'Email'
                },
                { 
                  href: 'https://www.linkedin.com/company/ekali-consultoria/',
                  icon: 'share',
                  label: 'LinkedIn',
                  external: true
                }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 rounded-xl bg-surface-container-high hover:bg-primary/20 border border-outline-variant/20 hover:border-primary/40 flex items-center justify-center text-on-surface hover:text-primary transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <span className="material-symbols-outlined">{social.icon}</span>
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
            <h3 className="font-bold text-on-surface mb-6 text-lg tracking-widest uppercase opacity-70">
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
                  <Link 
                    href="/services" 
                    className="text-on-surface-variant hover:text-primary flex items-center gap-2 group transition-colors"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      whileHover={{ scale: 1.5 }}
                    />
                    {service}
                  </Link>
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
            <h3 className="font-bold text-on-surface mb-6 text-lg tracking-widest uppercase opacity-70">
              Contacto
            </h3>
            <ul className="space-y-5">
              <li>
                <span className="block font-bold text-on-surface/50 mb-2 text-xs uppercase tracking-widest">Email</span>
                <a 
                  href="mailto:ekali.solutions@gmail.com" 
                  className="text-on-surface-variant hover:text-primary flex items-center gap-2 group transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                  ekali.solutions@gmail.com
                </a>
              </li>
              <li>
                <span className="block font-bold text-on-surface/50 mb-2 text-xs uppercase tracking-widest">Ubicación</span>
                <div className="text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Santiago, Chile
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-outline-variant/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-on-surface-variant/60 text-sm">
            © 2026 Ekali Solutions. Todos los derechos reservados.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/privacy" className="text-on-surface-variant/60 hover:text-primary text-sm transition-colors">
              Privacidad
            </Link>
            <Link href="/terms" className="text-on-surface-variant/60 hover:text-primary text-sm transition-colors">
              Términos
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
