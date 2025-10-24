import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
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
            </div>
            <p className="text-slate-300 max-w-md mb-8 leading-relaxed text-lg">
              Transformamos operaciones con{' '}
              <span className="font-bold text-white">Microsoft Power Platform</span> y{' '}
              <span className="font-bold text-accent">desarrollo full-stack</span>.
              <span className="block mt-2 text-slate-400">
                Automatización inteligente para empresas que buscan resultados reales.
              </span>
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:ekali.solutions@gmail.com" 
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-secondary/20 border border-white/20 hover:border-secondary/40 flex items-center justify-center transition-all duration-300 group"
                aria-label="Email"
              >
                <svg className="w-6 h-6 text-white group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/ekali-consultoria/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-secondary/20 border border-white/20 hover:border-secondary/40 flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-white group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Servicios
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="/services" className="text-slate-300 hover:text-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-accent transition-colors"></span>
                  Power Platform
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-300 hover:text-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-accent transition-colors"></span>
                  Desarrollo Full-Stack
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-300 hover:text-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-accent transition-colors"></span>
                  Cloud & DevOps
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-300 hover:text-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-accent transition-colors"></span>
                  Consultoría Estratégica
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contacto
            </h3>
            <ul className="space-y-5">
              <li>
                <span className="block font-semibold text-white mb-2 text-sm">Email</span>
                <a 
                  href="mailto:ekali.solutions@gmail.com" 
                  className="text-slate-300 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 text-secondary group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  ekali.solutions@gmail.com
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white mb-2 text-sm">Ubicación</span>
                <div className="text-slate-300 flex items-center gap-2">
                  <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Santiago, Chile
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm">
              © 2025 Ekali Solutions – Santiago, Chile. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/privacy" className="text-slate-400 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Privacidad
              </a>
              <a href="/terms" className="text-slate-400 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
