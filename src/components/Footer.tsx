import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-accent mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="logo-bg relative w-20 h-20 flex items-center justify-center">
                <Image
                  src="/logo_idea.png"
                  alt="Ekali Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-primary">
                Ekali <span className="text-secondary">Solutions</span>
              </span>
            </div>
            <p className="text-foreground/70 max-w-md mb-6 leading-relaxed">
              Consultoría tecnológica especializada en desarrollo de software, 
              soluciones cloud y transformación digital para empresas innovadoras.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:ekali.solutions@gmail.com" className="text-foreground/60 hover:text-primary transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/ekali-consultoria/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Servicios</h3>
            <ul className="space-y-4">
              <li>
                <a href="/services" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Desarrollo Full-Stack
                </a>
              </li>
              <li>
                <a href="/services" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Soluciones Azure
                </a>
              </li>
              <li>
                <a href="/services" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Consultoría Tech
                </a>
              </li>
              <li>
                <a href="/services" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Sistemas POS
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="text-primary">
                <span className="block font-medium">Email</span>
                <a href="mailto:ekali.solutions@gmail.com" className="hover:text-secondary transition-colors duration-200">
                  ekali.solutions@gmail.com
                </a>
              </li>
              <li className="text-primary">
                <span className="block font-medium">Ubicación</span>
                Santiago, Chile
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary text-sm">
              © 2025 Ekali Solutions – Santiago, Chile
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-primary hover:text-secondary text-sm transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="/terms" className="text-primary hover:text-secondary text-sm transition-colors duration-200">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
