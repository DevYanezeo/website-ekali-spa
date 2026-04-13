export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 space-y-24 bg-background min-h-screen">
      {/* Header Section */}
      <section className="relative px-8">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -top-40 -left-20 opacity-30 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] top-0 -right-20 opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">EkaliSpA</span>
            </h1>
            <p className="text-2xl md:text-3xl text-on-surface-variant max-w-3xl leading-relaxed">
              Consultoría tech con resultados reales. Transformamos procesos con tecnología de vanguardia.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-12">
              <div className="bg-surface-container p-10 md:p-12 rounded-[2.5rem] border border-outline-variant/10 shadow-2xl">
                <p className="text-xl text-on-surface-variant leading-relaxed">
                  Consultoría tecnológica especializada en desarrollo de software, <span className="text-primary font-bold">Power Platform</span> y soluciones cloud. 
                  Transformamos procesos empresariales con tecnología que genera resultados reales y escalables.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-container-high p-8 rounded-3xl border-l-4 border-primary">
                  <h3 className="font-black text-2xl text-on-surface mb-4 tracking-tight">Nuestra Misión</h3>
                  <p className="text-on-surface-variant text-lg">
                    Impulsar el crecimiento de empresas con soluciones tecnológicas que generan resultados tangibles.
                  </p>
                </div>
                <div className="bg-surface-container-high p-8 rounded-3xl border-l-4 border-secondary">
                  <h3 className="font-black text-2xl text-on-surface mb-4 tracking-tight">Nuestra Visión</h3>
                  <p className="text-on-surface-variant text-lg">
                    Ser referentes regionales en transformación digital y arquitectura de software.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <h2 className="text-3xl font-black text-on-surface mb-10 tracking-tight">Nuestros Valores</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { icon: 'bolt', title: 'Innovación', desc: 'Soluciones avanzadas y eficientes.', color: 'text-primary' },
                    { icon: 'verified', title: 'Calidad', desc: 'Estándares altos en cada desarrollo.', color: 'text-secondary' },
                    { icon: 'groups', title: 'Colaboración', desc: 'Socios estratégicos de nuestros clientes.', color: 'text-primary' },
                    { icon: 'settings_suggest', title: 'Adaptabilidad', desc: 'Rápida adopción de nuevas tecnologías.', color: 'text-secondary' }
                  ].map((valor, i) => (
                    <div key={i} className="flex items-start space-x-6 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/5 hover:border-primary/20 transition-all group">
                      <div className={`w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${valor.color}`}>
                        <span className="material-symbols-outlined text-3xl">{valor.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-on-surface">{valor.title}</h3>
                        <p className="text-on-surface-variant mt-2 leading-relaxed">{valor.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-40 space-y-8">
                <h2 className="text-3xl font-black text-on-surface mb-10 tracking-tight">Especialización</h2>
                <div className="space-y-4">
                  {[
                    'Desarrollo Full-Stack (React, Next.js, .NET)',
                    'Soluciones Cloud en Microsoft Azure',
                    'Sistemas de Punto de Venta (POS)',
                    'Automatización Power Platform',
                    'Consultoría Estratégica Digital'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/10">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <span className="text-on-surface font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20">
                  <h4 className="text-xl font-bold mb-4">¿Hablamos?</h4>
                  <p className="text-on-surface-variant mb-6">Estamos listos para llevar su proyecto al siguiente nivel.</p>
                  <a href="/contact" className="inline-block w-full text-center bg-primary text-on-primary py-4 rounded-xl font-bold hover:bg-primary-container transition-all">
                    Iniciar Proyecto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
