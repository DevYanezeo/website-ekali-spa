export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 space-y-24 bg-background min-h-screen">
      {/* Header Section */}
      <section className="relative px-8">
        <div className="absolute w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -top-40 -right-20 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Servicios</span>
            </h1>
            <p className="text-2xl md:text-3xl text-on-surface-variant max-w-3xl leading-relaxed">
              Transformación digital con resultados reales. Soluciones robustas para desafíos modernos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Desarrollo Full-Stack',
                icon: 'code',
                color: 'primary',
                desc: 'Apps web y móviles con tecnologías modernas.',
                features: ['Frontend con React y Next.js', 'APIs RESTful y GraphQL', 'Aplicaciones móviles nativas/híbridas']
              },
              {
                title: 'Soluciones Cloud',
                icon: 'cloud',
                color: 'secondary',
                desc: 'Infraestructura cloud optimizada con Azure.',
                features: ['Arquitectura de microservicios', 'DevOps & CI/CD', 'Optimización de costos Cloud']
              },
              {
                title: 'Punto de Venta POS',
                icon: 'point_of_sale',
                color: 'primary',
                desc: 'Sistemas POS a medida con integración completa.',
                features: ['Gestión de inventario crítico', 'Reportes analíticos 360°', 'Integraciones ERP']
              },
              {
                title: 'Transformación Digital',
                icon: 'auto_awesome',
                color: 'secondary',
                desc: 'Modernización de procesos empresariales.',
                features: ['Diagnóstico estratégico', 'Automatización de flujos', 'Soporte y mejora continua']
              }
            ].map((service, i) => (
              <div key={i} className="bg-surface-container rounded-[2.5rem] overflow-hidden border border-outline-variant/10 group hover:border-primary/30 transition-all duration-500 shadow-xl">
                <div className="p-10 md:p-12">
                  <div className={`w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center mb-8 text-${service.color} group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                  </div>
                  <h3 className="text-3xl font-black text-on-surface mb-6 tracking-tight">{service.title}</h3>
                  <p className="text-on-surface-variant text-xl mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center space-x-4 text-on-surface-variant">
                        <span className={`material-symbols-outlined text-${service.color} text-sm`}>circle</span>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-surface-container-high to-surface-container p-16 rounded-[3rem] border border-outline-variant/10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-8 tracking-tighter">¿Tienes un proyecto en mente?</h2>
              <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
                Estamos listos para llevar tu visión a la realidad con tecnología de clase mundial.
              </p>
              <a href="/contact" className="inline-block bg-primary text-on-primary px-12 py-5 rounded-2xl font-black text-xl hover:bg-primary-container transition-all shadow-2xl shadow-primary/20 hover:scale-105">
                Iniciar Proyecto
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
  );
}
