export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-surface-secondary">
        {/* Background decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl top-1/4 -right-32 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -bottom-32 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center animate-fade-in">
          <div className="mb-8">
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-dark leading-tight">
            Impulsamos tu negocio con{' '}
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-2">
              Power Platform y desarrollo a medida
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            Automatización, apps empresariales y soluciones full-stack para empresas que buscan resultados reales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="/contact" 
              className="group bg-gradient-to-r from-secondary to-secondary-hover text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              Comenzar Proyecto
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/services" 
              className="bg-white hover:bg-surface-secondary text-primary px-8 py-4 rounded-xl font-semibold text-lg border-2 border-primary/20 hover:border-primary transition-all duration-300 shadow-lg"
            >
              Ver Servicios
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 pt-12 border-t border-foreground/10">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">Power Platform</div>
              <div className="text-foreground/70 font-medium">Especialización Principal</div>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">Full-Stack</div>
              <div className="text-foreground/70 font-medium">Desarrollo Completo</div>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">CGE</div>
              <div className="text-foreground/70 font-medium">Proyectos Reales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-surface-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Nuestros Servicios
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Soluciones <span className="text-primary">Especializadas</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Desarrollamos software a medida y automatizamos procesos con las mejores tecnologías
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 - Power Platform */}
            <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20 animate-slide-up">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">Power Platform</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Apps empresariales, flujos automatizados y dashboards inteligentes que eliminan tareas manuales.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Power Apps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Power Automate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Power BI
                </li>
              </ul>
            </div>

            {/* Service 2 - Full Stack */}
            <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-secondary/20 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-secondary transition-colors">Desarrollo Full Stack</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Web, móvil y APIs con React, Next.js y .NET. Soluciones completas de punta a punta.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  React & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  .NET Core APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Apps Móviles
                </li>
              </ul>
            </div>

            {/* Service 3 - Cloud & DevOps */}
            <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-accent/20 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-accent transition-colors">Cloud & DevOps</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Azure, CI/CD y microservicios. Infraestructura escalable y automatización de despliegues.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Azure Cloud
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  CI/CD Pipelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Microservicios
                </li>
              </ul>
            </div>

            {/* Service 4 - Consultoría */}
            <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-dark to-dark-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-dark-light transition-colors">Consultoría Estratégica</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Diagnóstico, hoja de ruta y arquitectura. Te guiamos en tu transformación digital.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-dark"></span>
                  Transformación Digital
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-dark"></span>
                  Arquitectura Software
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-dark"></span>
                  Estrategia Tech
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Éxito - CGE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Caso de Éxito
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Proyecto <span className="text-primary">CGE Comercializadora</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 border border-primary/10">
            <div className="text-center mb-8">
              <div className="text-3xl font-bold text-primary mb-4">CGE Comercializadora</div>
              <p className="text-xl text-dark font-semibold mb-6">
                Sistema de gestión de proyectos y obras con Power Apps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-dark mb-3">✅ Solución implementada:</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Power Apps con frontend intuitivo</li>
                  <li>• Base de datos normalizada</li>
                  <li>• Manejo de estados y workflows</li>
                  <li>• Dashboards en Power BI</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-dark mb-3">📈 Resultados:</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Gestión centralizada de proyectos</li>
                  <li>• KPIs en tiempo real</li>
                  <li>• Reducción de tareas manuales</li>
                  <li>• Mejor toma de decisiones</li>
                </ul>
              </div>
            </div>
            
            <p className="text-center text-foreground/70 italic">
              "Solución escalable que mejoró la eficiencia operacional y la visibilidad de los proyectos."
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Experiencia Real</h3>
              <p className="text-foreground/70">
                Proyectos concretos con empresas como CGE. Soluciones probadas, no solo promesas.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-accent/5 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Rápido y Confiable</h3>
              <p className="text-foreground/70">
                Implementación ágil con metodologías modernas. Resultados medibles en tiempo récord.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                🤝
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Soporte Completo</h3>
              <p className="text-foreground/70">
                Desde el diagnóstico hasta el soporte post-lanzamiento. Te acompañamos siempre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Intermedio */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            ¿Quieres automatizar procesos con Power Platform?
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            Agenda una reunión y descubre cómo podemos optimizar tu negocio.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Agendar Reunión
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Us Short */}
      <section className="py-24 px-6 bg-surface-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8">
            Sobre <span className="text-primary">Ekali Solutions</span>
          </h2>
          <p className="text-2xl text-dark font-semibold mb-8 leading-relaxed">
            Consultora joven especializada en <span className="text-primary">Power Platform</span> y <span className="text-secondary">desarrollo full-stack</span>.
          </p>
          <p className="text-xl text-foreground/70 leading-relaxed mb-6">
            Hemos trabajado en proyectos reales con empresas como <span className="font-semibold text-dark">CGE Comercializadora</span>, 
            entregando soluciones escalables, innovadoras y alineadas a cada cliente.
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed">
            <span className="font-semibold text-dark">Qué hacemos:</span> Power Platform, desarrollo web/móvil, cloud y consultoría. <br />
            <span className="font-semibold text-dark">Cómo lo hacemos:</span> Metodologías ágiles, arquitectura sólida y tecnologías modernas. <br />
            <span className="font-semibold text-dark">Por qué confiar:</span> Experiencia real, resultados medibles y compromiso total.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-0 left-0"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl bottom-0 right-0"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            ¿Listo para <span className="text-white/90">transformar</span> tu negocio?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contáctanos para una consultoría gratuita sobre Power Platform y desarrollo a medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary hover:bg-surface-secondary px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Contactar Ahora
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/ekali-consultoria/" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Ver LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
