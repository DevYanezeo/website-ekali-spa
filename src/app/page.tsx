export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Nueva Identidad "Precisión Ágil" */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Grid de fondo profesional */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
        
        {/* Gradientes animados de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -top-96 -left-96 animate-pulse"></div>
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl top-1/4 -right-64 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl bottom-0 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Badge Profesional */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full mb-8 shadow-lg animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-primary">Microsoft Power Platform Partner</span>
          </div>
          
          {/* Headline Principal - Más Potente */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] animate-fade-in">
            <span className="block text-primary mb-2">
              Automatización que
            </span>
            <span className="block gradient-text text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary">
              multiplica resultados
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-700 max-w-4xl mx-auto mb-6 leading-relaxed font-medium animate-fade-in" style={{animationDelay: '0.1s'}}>
            Transformamos procesos manuales en sistemas inteligentes con{' '}
            <span className="text-secondary font-bold">Microsoft Power Platform</span> y{' '}
            <span className="text-accent font-bold">desarrollo full-stack</span>
          </p>
          
          {/* Prueba Social Inline */}
          <div className="flex items-center justify-center gap-2 mb-12 text-slate-600 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Proyectos reales con <span className="font-bold text-primary">CGE Comercializadora</span> y otras empresas</span>
          </div>
          
          {/* CTAs Rediseñados */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <a 
              href="/contact" 
              className="group btn-primary text-white px-10 py-5 rounded-xl font-bold text-lg flex items-center gap-3 hover:gap-4 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agendar Demo Gratuita
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/services" 
              className="btn-secondary text-white px-10 py-5 rounded-xl font-bold text-lg flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Ver Casos de Éxito
            </a>
          </div>
          
          {/* Stats Mejorados con Iconos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-slate-200 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">Power Platform</div>
              <div className="text-slate-600 font-medium">Especialización Core</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center mx-auto mb-4 shadow-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-secondary mb-2">Full-Stack</div>
              <div className="text-slate-600 font-medium">Desarrollo Completo</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-4 shadow-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-accent mb-2">Proyectos Reales</div>
              <div className="text-slate-600 font-medium">CGE & Más</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Rediseñada con Bento Grid Approach */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-6 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
              Áreas de Especialización
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Soluciones que <span className="gradient-text">transforman</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Dos áreas core que cubren toda tu necesidad de automatización y desarrollo
            </p>
          </div>
          
          {/* Bento Grid Layout Profesional */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* ÁREA 1: Microsoft Power Platform - Card Grande */}
            <div className="lg:col-span-2 group bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 hover:shadow-2xl transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 text-primary rounded-full text-xs font-bold mb-4">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    ESPECIALIZACIÓN PRINCIPAL
                  </div>
                  <h3 className="text-4xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">Microsoft Power Platform</h3>
                  <p className="text-xl text-slate-700 mb-6 leading-relaxed font-medium">
                    Apps empresariales, automatización de procesos y Business Intelligence sin código tradicional. 
                    <span className="block mt-2 text-accent font-bold">Velocidad x10 en desarrollo, ROI medible.</span>
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Power Apps</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Apps móviles y web custom para gestión interna, workflows y procesos</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Power Automate</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Flujos automatizados que eliminan tareas repetitivas y conectan sistemas</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Power BI</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Dashboards interactivos con KPIs en tiempo real para toma de decisiones</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* ÁREA 2: Desarrollo Full-Stack - Card Grande */}
            <div className="lg:col-span-2 group bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 rounded-3xl p-12 hover:shadow-2xl transition-all duration-500 border-2 border-secondary/20 hover:border-secondary/40 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl gradient-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-xs font-bold mb-4">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                    DESARROLLO AVANZADO
                  </div>
                  <h3 className="text-4xl font-bold text-secondary mb-4 group-hover:text-accent transition-colors">Desarrollo Full-Stack</h3>
                  <p className="text-xl text-slate-700 mb-6 leading-relaxed font-medium">
                    Aplicaciones web, móviles y APIs custom con las tecnologías más modernas del mercado.
                    <span className="block mt-2 text-accent font-bold">React, Next.js, .NET Core, Azure Cloud.</span>
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Web Apps</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">React, Next.js 15, TypeScript. SPA y SSR de alto rendimiento</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">APIs & Backend</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">.NET Core, Node.js. REST, GraphQL, microservicios escalables</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">Cloud & DevOps</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Azure, CI/CD pipelines, Docker, automatización de despliegues</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA de Servicios */}
          <div className="text-center mt-16">
            <a 
              href="/services" 
              className="inline-flex items-center gap-3 btn-accent text-white px-10 py-5 rounded-xl font-bold text-lg group"
            >
              Ver Todos los Servicios
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Caso de Éxito CGE - Storytelling Format */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/20 text-accent rounded-full text-sm font-bold mb-6 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              CASO DE ÉXITO DESTACADO
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Transformamos la gestión de{' '}
              <span className="gradient-text">CGE Comercializadora</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              De hojas Excel dispersas a un sistema centralizado con Power Platform
            </p>
          </div>

          {/* El Cliente */}
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200 mb-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-3">El Cliente</h3>
                <p className="text-xl text-slate-700 leading-relaxed">
                  <span className="font-bold">CGE Comercializadora</span> es una empresa líder en distribución eléctrica en Chile, 
                  con operaciones complejas que requieren gestión precisa de proyectos y obras en múltiples regiones.
                </p>
              </div>
            </div>
          </div>

          {/* El Desafío */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12 shadow-xl border-2 border-red-200 mb-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-red-700 mb-4">El Desafío</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-red-600 mb-2">0%</div>
                    <p className="text-slate-700 font-medium">Visibilidad centralizada de proyectos en tiempo real</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-red-600 mb-2">100s</div>
                    <p className="text-slate-700 font-medium">Horas mensuales perdidas en tareas manuales repetitivas</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-red-600 mb-2">∞</div>
                    <p className="text-slate-700 font-medium">Versiones diferentes de Excel sin sincronización</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-red-600 mb-2">😰</div>
                    <p className="text-slate-700 font-medium">Decisiones basadas en datos desactualizados o incompletos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* La Solución */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 shadow-xl border-2 border-blue-200 mb-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-xl gradient-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-blue-700 mb-6">La Solución Ekali</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900">Power Apps Frontend</h4>
                    </div>
                    <p className="text-sm text-slate-600">Interfaz intuitiva multi-dispositivo para gestión de proyectos, accesible desde cualquier lugar</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900">Base de Datos Normalizada</h4>
                    </div>
                    <p className="text-sm text-slate-600">Sharepoint + Dataverse con arquitectura escalable y relaciones bien definidas</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900">Workflows Automatizados</h4>
                    </div>
                    <p className="text-sm text-slate-600">Power Automate con flujos de aprobación, notificaciones y sincronización automática</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900">Dashboards Power BI</h4>
                    </div>
                    <p className="text-sm text-slate-600">KPIs en tiempo real, visibilidad completa y reportes automáticos para gerencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Los Resultados */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-12 shadow-xl border-2 border-emerald-200 mb-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-emerald-700 mb-6">Los Resultados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="text-6xl font-bold gradient-text mb-2">100%</div>
                    <p className="text-slate-700 font-medium">Centralización de proyectos</p>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="text-6xl font-bold gradient-text mb-2">-70%</div>
                    <p className="text-slate-700 font-medium">Reducción de tareas manuales</p>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="text-6xl font-bold gradient-text mb-2">Real-time</div>
                    <p className="text-slate-700 font-medium">KPIs actualizados al instante</p>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="text-6xl font-bold gradient-text mb-2">+90%</div>
                    <p className="text-slate-700 font-medium">Satisfacción del equipo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonio */}
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
            <div className="text-center max-w-4xl mx-auto">
              <svg className="w-16 h-16 text-secondary/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-2xl md:text-3xl text-slate-700 italic leading-relaxed mb-6">
                &ldquo;Ekali transformó completamente nuestra forma de gestionar proyectos. De procesos manuales caóticos pasamos a tener visibilidad total en tiempo real. 
                <span className="block mt-4 font-bold text-primary">La solución es escalable, robusta y mejoró drásticamente nuestra eficiencia operacional.&rdquo;</span>
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  CGE
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900 text-lg">CGE Comercializadora</div>
                  <div className="text-slate-600">Gerencia de Operaciones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Proceso - 4 Pasos */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              METODOLOGÍA ÁGIL
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Nuestro <span className="gradient-text">Proceso</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              4 pasos claros para transformar tu operación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Paso 1: Descubrimiento */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-400 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center text-white font-bold text-xl shadow-xl">
                  1
                </div>
                <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 mt-4 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Descubrimiento</h3>
                <p className="text-slate-700 leading-relaxed text-center mb-4">
                  Entendemos tu operación, identificamos procesos críticos y definimos objetivos medibles.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Workshop inicial
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Mapeo de procesos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    KPIs y métricas
                  </li>
                </ul>
              </div>
            </div>

            {/* Paso 2: Diseño */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-purple-200 hover:border-purple-400 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-xl">
                  2
                </div>
                <div className="w-20 h-20 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 mt-4 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">Diseño</h3>
                <p className="text-slate-700 leading-relaxed text-center mb-4">
                  Arquitectura técnica, UX/UI, flujos y definición de tecnologías óptimas.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Wireframes y prototipos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Arquitectura de datos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Stack tecnológico
                  </li>
                </ul>
              </div>
            </div>

            {/* Paso 3: Desarrollo */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-emerald-200 hover:border-emerald-400 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl gradient-accent flex items-center justify-center text-white font-bold text-xl shadow-xl">
                  3
                </div>
                <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 mt-4 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-4 text-center">Desarrollo</h3>
                <p className="text-slate-700 leading-relaxed text-center mb-4">
                  Sprints ágiles con entregas incrementales. Testing continuo y ajustes en tiempo real.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Desarrollo iterativo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Testing QA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Demos semanales
                  </li>
                </ul>
              </div>
            </div>

            {/* Paso 4: Despliegue */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-orange-200 hover:border-orange-400 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-xl">
                  4
                </div>
                <div className="w-20 h-20 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 mt-4 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-orange-700 mb-4 text-center">Despliegue</h3>
                <p className="text-slate-700 leading-relaxed text-center mb-4">
                  Go-live coordinado, capacitación del equipo y soporte post-lanzamiento.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    Deploy a producción
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    Capacitación usuarios
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    Soporte continuo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Intermedio Potente */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para <span className="underline decoration-accent decoration-4">automatizar</span> tu operación?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Agenda una demo gratuita y descubre cómo Power Platform puede transformar tu negocio en semanas, no meses.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="/contact" 
              className="group bg-white text-primary hover:bg-slate-50 px-12 py-6 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agendar Demo Gratuita
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/ekali-consultoria/" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 flex items-center gap-2 shadow-xl"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Síguenos en LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Us Mejorado */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              QUIÉNES SOMOS
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">
              Sobre <span className="gradient-text">Ekali Solutions</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200 mb-8">
            <p className="text-2xl md:text-3xl text-slate-800 font-semibold mb-8 leading-relaxed text-center">
              Consultora tecnológica especializada en{' '}
              <span className="gradient-text font-bold">Microsoft Power Platform</span> y{' '}
              <span className="text-secondary font-bold">desarrollo full-stack</span>.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed text-center mb-6">
              Trabajamos con empresas como <span className="font-bold text-primary">CGE Comercializadora</span>, 
              entregando soluciones escalables que generan valor real y resultados medibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 mx-auto shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Qué Hacemos</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                Power Platform, desarrollo web/móvil, cloud Azure, consultoría estratégica y automatización de procesos
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-xl gradient-secondary flex items-center justify-center mb-6 mx-auto shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Cómo lo Hacemos</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                Metodologías ágiles, arquitectura sólida, tecnologías modernas, testing continuo y entregas incrementales
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mb-6 mx-auto shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Por Qué Confiar</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                Experiencia real con clientes corporativos, resultados medibles, compromiso total y soporte continuo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Potente */}
      <section className="py-40 px-6 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-[600px] h-[600px] bg-white rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
          <div className="absolute w-[600px] h-[600px] bg-white rounded-full blur-3xl bottom-0 right-0 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute w-[400px] h-[400px] bg-white rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '0.7s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transforma tu negocio<br />
            <span className="text-white/90">con tecnología que funciona</span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed">
            No más hojas Excel dispersas. No más procesos manuales. <br />
            <span className="font-bold">Es tiempo de automatizar con Power Platform.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a 
              href="/contact" 
              className="group bg-white text-primary hover:bg-slate-50 px-14 py-7 rounded-2xl font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 flex items-center gap-4"
            >
              Comenzar Ahora
              <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/ekali-consultoria/" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-3 border-white text-white hover:bg-white hover:text-primary px-14 py-7 rounded-2xl font-bold text-2xl transition-all duration-300 flex items-center gap-3 shadow-2xl"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
