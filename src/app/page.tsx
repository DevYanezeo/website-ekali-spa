'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Desarrollo de Software',
      subtitle: 'Páginas web y aplicaciones móviles que impulsan tu negocio',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop'
    },
    {
      title: 'Microsoft Power Platform',
      subtitle: 'Automatización empresarial que reduce horas-hombre',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop'
    },
    {
      title: 'Arquitecturas Empresariales',
      subtitle: 'Soluciones cloud escalables y robustas',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="overflow-hidden bg-background">
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] bg-darker overflow-hidden w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              <Image 
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover opacity-40"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-darker/60"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center text-center z-10">
              <div className="w-full px-4 sm:px-6">
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <Image 
                    src="/logo_idea.png" 
                    alt="Ekali Solutions" 
                    width={120}
                    height={120}
                    className="drop-shadow-2xl w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
                  />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 px-2">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 px-4">
                  {slide.subtitle}
                </p>
                <a 
                  href="/contact"
                  className="inline-block btn-primary text-white px-8 py-4 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        ))}
        
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full transition-all touch-manipulation"
          aria-label="Anterior"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full transition-all touch-manipulation"
          aria-label="Siguiente"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all touch-manipulation ${
                index === currentSlide 
                  ? 'bg-white w-8 sm:w-12' 
                  : 'bg-white/50 hover:bg-white/80 w-2 sm:w-3'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-primary">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center px-4 sm:px-6 md:px-12 lg:px-20">
            <div>
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-white/20 text-white rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 md:mb-6">
                DESARROLLO WEB Y MÓVIL
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                Páginas web que convierten
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                Sitios web modernos, e-commerce y apps móviles con React y Next.js.
              </p>
              
              {/* Lista visible solo en tablet+ */}
              <ul className="hidden sm:flex sm:flex-col space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start gap-2 md:gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-0.5 md:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white text-sm md:text-base">Sitios web corporativos</h3>
                    <p className="text-white/80 text-xs md:text-sm">Landing pages y portales institucionales</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-0.5 md:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white text-sm md:text-base">E-commerce completo</h3>
                    <p className="text-white/80 text-xs md:text-sm">Tiendas online con pasarelas de pago</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-0.5 md:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white text-sm md:text-base">Apps móviles</h3>
                    <p className="text-white/80 text-xs md:text-sm">iOS y Android nativas o híbridas</p>
                  </div>
                </li>
              </ul>
              
              <a href="/services" className="btn-secondary text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl font-bold inline-flex items-center gap-2 text-xs sm:text-sm md:text-base touch-manipulation">
                Ver Más
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Imagen visible solo en desktop */}
            <div className="hidden lg:block relative h-[400px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Desarrollo Web"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-secondary">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center px-4 sm:px-6 md:px-12 lg:px-20">
            {/* Imagen visible solo en desktop */}
            <div className="hidden lg:block order-2 lg:order-1 relative h-[400px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Power Platform"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-white/20 text-white rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 md:mb-6">
                MICROSOFT POWER PLATFORM
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                Automatización que reduce HH
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                Power Apps, Power Automate y Power BI para automatizar procesos.
              </p>
              
              {/* Lista visible solo en tablet+ */}
              <ul className="hidden sm:flex sm:flex-col space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start gap-2 md:gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-0.5 md:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white text-sm md:text-base">Power Apps</h3>
                    <p className="text-white/80 text-xs md:text-sm">Apps internas sin código, formularios personalizados</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-0.5 md:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white text-sm md:text-base">Power Automate</h3>
                    <p className="text-white/80 text-xs md:text-sm">Automatización de flujos y procesos repetitivos</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-0.5 md:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white text-sm md:text-base">Power BI</h3>
                    <p className="text-white/80 text-xs md:text-sm">Dashboards y reportes en tiempo real</p>
                  </div>
                </li>
              </ul>
              
              <a href="/services" className="btn-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl font-bold inline-flex items-center gap-2 text-xs sm:text-sm md:text-base touch-manipulation">
                Ver Más
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-accent">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center px-4 sm:px-6 md:px-12 lg:px-20">
            <div>
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-white/20 text-white rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 md:mb-6">
                ARQUITECTURAS EN LA NUBE
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                Infraestructura escalable
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                Arquitecturas cloud en Azure, AWS y GCP con DevOps y CI/CD.
              </p>
              
              {/* Lista visible solo en tablet+ */}
              <ul className="hidden sm:flex sm:flex-col space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start gap-2 md:gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-0.5 md:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white text-sm md:text-base">Migración a la nube</h3>
                    <p className="text-white/80 text-xs md:text-sm">Azure, AWS, Google Cloud, multi-cloud</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-0.5 md:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white text-sm md:text-base">DevOps y CI/CD</h3>
                    <p className="text-white/80 text-xs md:text-sm">Automatización de despliegues y pipelines</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-0.5 md:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white text-sm md:text-base">Contenedores</h3>
                    <p className="text-white/80 text-xs md:text-sm">Docker, Kubernetes, microservicios</p>
                  </div>
                </li>
              </ul>
              
              <a href="/services" className="btn-secondary text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl font-bold inline-flex items-center gap-2 text-xs sm:text-sm md:text-base touch-manipulation">
                Ver Más
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Imagen visible solo en desktop */}
            <div className="hidden lg:block relative h-[400px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                alt="Cloud Architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 sm:py-12 md:py-16 lg:py-20 bg-surface">
        <div className="w-full">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-3">
              CASO DE ÉXITO
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-2 sm:mb-3">
              CGE Comercializadora
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-muted">
              Sistema de gestión con Power Platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="bg-white p-4 sm:p-5 shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-dark mb-1 sm:mb-2">La Empresa</h3>
              <p className="text-text-muted text-xs sm:text-sm">
                CGE, distribución eléctrica en Chile
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-dark mb-1 sm:mb-2">El Problema</h3>
              <p className="text-text-muted text-xs sm:text-sm">
                Excel manual, sin centralización
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-dark mb-1 sm:mb-2">La Solución</h3>
              <p className="text-text-muted text-xs sm:text-sm">
                Power Apps + Power BI
              </p>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 md:p-8 shadow-xl mx-4 sm:mx-6 md:mx-12 lg:mx-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-dark mb-4 sm:mb-6">Resultados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
                <p className="text-text-muted text-xs sm:text-sm">Centralización</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1">-70%</div>
                <p className="text-text-muted text-xs sm:text-sm">HH manuales</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">Real-time</div>
                <p className="text-text-muted text-xs sm:text-sm">Dashboards</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">+90%</div>
                <p className="text-text-muted text-xs sm:text-sm">Satisfacción</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 sm:py-16 md:py-20 bg-dark relative overflow-hidden">
        <div className="w-full text-center relative z-10 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8">
            Agenda una consulta gratuita
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-4">
            <a 
              href="/contact"
              className="bg-white text-primary hover:bg-gray-50 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1 touch-manipulation"
            >
              Contáctanos
            </a>
            <a 
              href="https://www.linkedin.com/company/ekali-consultoria/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-dark px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all touch-manipulation"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}