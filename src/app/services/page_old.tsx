export default function ServicesPage() {
  return (
    <div className="space-y-20">
      {/* Header Section */}
      <section className="relative py-20">
        <div className="absolute w-80 h-80 bg-secondary/10 rounded-full blur-3xl -top-10 -right-20 opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros <span className="text-primary">Servicios</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para transformar tu negocio
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Service 1 */}
          <div className="bg-surface rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300">
            <div className="h-1 bg-primary"></div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Desarrollo Full-Stack</h3>
              <p className="text-foreground/70 mb-6">
                Aplicaciones web y móviles modernas, con tecnologías de última generación.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-foreground/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Frontend con React y Next.js</span>
                </li>
                <li className="flex items-center space-x-3 text-foreground/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>APIs RESTful y GraphQL</span>
                </li>
                <li className="flex items-center space-x-3 text-foreground/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Aplicaciones móviles iOS y Android</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-surface rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300">
            <div className="h-1 bg-secondary"></div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Soluciones Cloud</h3>
              <p className="text-foreground/70 mb-6">
                Implementación y optimización de infraestructura cloud en Microsoft Azure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-foreground/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Arquitectura serverless y microservicios</span>
                </li>
                <li className="flex items-center space-x-3 text-foreground/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>CI/CD y DevOps</span>
                </li>
                <li className="flex items-center space-x-3 text-foreground/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Optimización de costos y rendimiento</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-surface rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300">
            <div className="h-1 bg-primary"></div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Punto de Venta Personalizado</h3>
              <p className="text-foreground/70 mb-6">
                Sistemas POS a la medida de tu negocio, con integración completa.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-foreground/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Gestión de inventario y ventas</span>
                </li>
                <li className="flex items-center space-x-3 text-foreground/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Reportes y análisis en tiempo real</span>
                </li>
                <li className="flex items-center space-x-3 text-foreground/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Integración con sistemas contables</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-surface rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300">
            <div className="h-1 bg-secondary"></div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Transformación Digital</h3>
              <p className="text-foreground/70 mb-6">
                Asesoría y consultoría para la modernización de procesos y sistemas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-foreground/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Diagnóstico y hoja de ruta tecnológica</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-blue flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Optimización de rendimiento</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-blue flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mantenimiento y soporte continuo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center px-4 py-10">
        <p className="text-gray-300 text-lg mb-8">
          ¿Tienes un proyecto en mente o necesitas ayuda con un desafío tecnológico?
        </p>
        <a href="/contact" className="inline-block bg-accent-teal hover:bg-accent-blue text-white px-8 py-3 rounded-md font-medium text-lg shadow-lg transition-all">
          Contáctanos hoy
        </a>
      </section>
    </div>
  );
}
