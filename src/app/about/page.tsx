export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section className="relative py-20">
        <div className="absolute w-80 h-80 bg-primary/10 rounded-full blur-3xl top-0 right-1/2 opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="text-primary">EkaliSpA</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Transformamos ideas en soluciones digitales que impulsan el futuro empresarial
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-surface rounded-xl p-8 md:p-10">
          <div className="max-w-none space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Somos una empresa de consultoría tecnológica especializada en el desarrollo de software, 
                mejora y construcción de aplicaciones, y soluciones informáticas a medida para empresas 
                que buscan transformar sus procesos.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Nuestro objetivo es impulsar la transformación digital de negocios, optimizar procesos 
                y crear plataformas innovadoras que potencien el crecimiento de nuestros clientes en el 
                competitivo entorno tecnológico actual.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
              <div className="bg-background p-6 rounded-lg border-l-2 border-primary">
                <h3 className="font-semibold text-xl text-foreground mb-3">Nuestra Misión</h3>
                <p className="text-foreground/70">
                  Brindar soluciones tecnológicas innovadoras que impulsen el crecimiento y 
                  éxito de nuestros clientes a través de desarrollos de alta calidad y consultoría especializada.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border-l-2 border-secondary">
                <h3 className="font-semibold text-xl text-foreground mb-3">Nuestra Visión</h3>
                <p className="text-foreground/70">
                  Ser referentes en transformación digital y desarrollo de software a medida 
                  en el mercado latinoamericano, conocidos por nuestra excelencia técnica e innovación.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Nuestros Valores</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Innovación</h3>
                    <p className="text-foreground/70 text-sm mt-1">Buscamos constantemente las soluciones más avanzadas y eficientes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Calidad</h3>
                    <p className="text-foreground/70 text-sm mt-1">Nos comprometemos con los más altos estándares de desarrollo</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Colaboración</h3>
                    <p className="text-foreground/70 text-sm mt-1">Trabajamos junto a nuestros clientes como verdaderos socios</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Adaptabilidad</h3>
                    <p className="text-foreground/70 text-sm mt-1">Nos adaptamos rápidamente a nuevas tecnologías y necesidades</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Áreas de Especialización</h2>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center space-x-3 text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Desarrollo Full-Stack (React, Next.js, .NET Core)</span>
                </li>
                <li className="flex items-center space-x-3 text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Soluciones Cloud en Microsoft Azure</span>
                </li>
                <li className="flex items-center space-x-3 text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Sistemas de Punto de Venta personalizados</span>
                </li>
                <li className="flex items-center space-x-3 text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Consultoría en transformación digital</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
