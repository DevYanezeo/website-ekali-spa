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
      <section className="relative h-[70vh] md:h-[80vh] bg-darker overflow-hidden w-full">
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
              <div className="w-full px-6">
                <div className="mb-8 flex justify-center">
                  <Image 
                    src="/logo_idea.png" 
                    alt="Ekali Solutions" 
                    width={200} 
                    height={200}
                    className="drop-shadow-2xl"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl text-white/90 mb-8">
                  {slide.subtitle}
                </p>
                <a 
                  href="/contact"
                  className="inline-block btn-primary text-white px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        ))}
        
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 md:p-4 rounded-full transition-all"
          aria-label="Anterior"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 md:p-4 rounded-full transition-all"
          aria-label="Siguiente"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-12' 
                  : 'bg-white/50 hover:bg-white/80 w-3'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="w-full py-20 bg-primary">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-20">
            <div>
              <span className="inline-block px-5 py-2 bg-white/20 text-white rounded-full text-sm font-bold mb-6">
                DESARROLLO WEB Y MÓVIL
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Páginas web que convierten
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Realizamos sitios web modernos, e-commerce, aplicaciones móviles y plataformas digitales con React, Next.js y tecnologías de vanguardia.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white">Sitios web corporativos</h3>
                    <p className="text-white/80 text-sm">Landing pages y portales institucionales</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white">E-commerce completo</h3>
                    <p className="text-white/80 text-sm">Tiendas online con pasarelas de pago</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white">Apps móviles</h3>
                    <p className="text-white/80 text-sm">iOS y Android nativas o híbridas</p>
                  </div>
                </li>
              </ul>
              <a href="/services" className="btn-secondary text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2">
                Ver Más
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="relative h-[400px] overflow-hidden">
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

      <section className="w-full py-20 bg-secondary">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-20">
            <div className="order-2 lg:order-1 relative h-[400px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Power Platform"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block px-5 py-2 bg-white/20 text-white rounded-full text-sm font-bold mb-6">
                MICROSOFT POWER PLATFORM
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Automatización que reduce HH
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Brindamos eficiencia con Power Apps, Power Automate y Power BI. Eliminamos tareas manuales y optimizamos procesos empresariales.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white">Power Apps custom</h3>
                    <p className="text-white/80 text-sm">Aplicaciones empresariales sin código tradicional</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white">Automatización de procesos</h3>
                    <p className="text-white/80 text-sm">Power Automate para flujos y workflows</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white">Business Intelligence</h3>
                    <p className="text-white/80 text-sm">Dashboards Power BI en tiempo real</p>
                  </div>
                </li>
              </ul>
              <a href="/services" className="btn-accent text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2">
                Descubre Cómo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-accent">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-20">
            <div>
              <span className="inline-block px-5 py-2 bg-white/20 text-white rounded-full text-sm font-bold mb-6">
                ARQUITECTURAS EMPRESARIALES
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Soluciones escalables
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Diseñamos arquitecturas cloud robustas en Microsoft Azure, APIs RESTful, microservicios y sistemas preparados para crecer.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white">Cloud Azure</h3>
                    <p className="text-white/80 text-sm">Infraestructura escalable y segura</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white">APIs y Microservicios</h3>
                    <p className="text-white/80 text-sm">.NET Core y Node.js modernos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-white">DevOps y CI/CD</h3>
                    <p className="text-white/80 text-sm">Automatización de despliegues</p>
                  </div>
                </li>
              </ul>
              <a href="/contact" className="btn-primary text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2">
                Contáctanos
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="relative h-[400px] overflow-hidden">
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

      <section className="w-full py-20 bg-surface">
        <div className="w-full">
          <div className="text-center mb-12 px-6">
            <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
              CASO DE ÉXITO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              CGE Comercializadora
            </h2>
            <p className="text-xl text-text-muted">
              Sistema de gestión de proyectos con Power Platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 px-6 md:px-12 lg:px-20">
            <div className="bg-white p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">La Empresa</h3>
              <p className="text-text-muted text-sm">
                CGE, líder en distribución eléctrica en Chile
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">El Problema</h3>
              <p className="text-text-muted text-sm">
                Excel manual, sin centralización, múltiples versiones, horas perdidas
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">La Solución</h3>
              <p className="text-text-muted text-sm">
                Power Apps, workflows automáticos, Power BI con KPIs real-time
              </p>
            </div>
          </div>

          <div className="bg-white p-8 shadow-xl mx-6 md:mx-12 lg:mx-20">
            <h3 className="text-2xl font-bold text-center text-dark mb-6">Resultados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">100%</div>
                <p className="text-text-muted text-sm">Centralización</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-1">-70%</div>
                <p className="text-text-muted text-sm">HH manuales</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-1">Real-time</div>
                <p className="text-text-muted text-sm">Dashboards</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">+90%</div>
                <p className="text-text-muted text-sm">Satisfacción</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-dark relative overflow-hidden">
        <div className="w-full text-center relative z-10 px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-2xl text-white/90 mb-10">
            Agenda una consulta gratuita
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact"
              className="bg-white text-primary hover:bg-gray-50 px-12 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1"
            >
              Contáctanos
            </a>
            <a 
              href="https://www.linkedin.com/company/ekali-consultoria/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-dark px-12 py-5 rounded-xl font-bold text-xl transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}