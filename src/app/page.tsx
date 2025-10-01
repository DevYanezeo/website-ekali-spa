export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface/50"></div>
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-secondary/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Consultoría Tecnológica Premium
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Transformamos ideas en 
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              soluciones digitales
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            En <span className="font-semibold text-primary">EkaliSpA</span> desarrollamos aplicaciones, 
            servicios cloud y consultoría especializada que impulsan el crecimiento de tu negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="/contact" 
              className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Comenzar Proyecto
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/services" 
              className="bg-surface hover:bg-surface/80 text-foreground px-8 py-4 rounded-xl font-semibold text-lg border border-foreground/20 hover:border-primary/50 transition-all duration-300"
            >
              Ver Servicios
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-16 border-t border-foreground/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground/70">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">5+</div>
              <div className="text-foreground/70">Años Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-foreground/70">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestras <span className="text-primary">Especialidades</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Soluciones tecnológicas completas diseñadas para impulsar tu negocio hacia el futuro digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group bg-surface/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-surface transition-all duration-500 border border-foreground/5 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8L22 12L18 16" />
                  <path d="M6 8L2 12L6 16" />
                  <path d="M12 2L12 22" transform="rotate(90 12 12)" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Desarrollo Full-Stack</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Aplicaciones web y móviles modernas con React, Next.js, .NET Core y las mejores prácticas del desarrollo actual.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-surface/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-surface transition-all duration-500 border border-foreground/5 hover:border-secondary/20 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-hover flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Azure Cloud</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Infraestructura cloud escalable, servicios serverless y DevOps en Microsoft Azure para maximizar el rendimiento.
              </p>
              <div className="flex items-center text-secondary font-medium group-hover:translate-x-2 transition-transform duration-300">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-surface/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-surface transition-all duration-500 border border-foreground/5 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" y1="22" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Consultoría Estratégica</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Asesoramiento en transformación digital, arquitectura de software y estrategias tecnológicas para empresas.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                Ver más
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-12 border border-foreground/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-primary">transformar</span> tu negocio?
            </h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Contáctanos hoy para una consultoría gratuita y descubre cómo podemos impulsar tu proyecto hacia el éxito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Agenda tu Consultoría Gratuita
              </a>
              <a 
                href="tel:+56912345678" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
