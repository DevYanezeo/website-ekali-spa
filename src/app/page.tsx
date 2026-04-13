'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  ParallaxImage,
  TextReveal,
  WireframeBackground,
  MorphingBlob,
  GlowingOrb,
  HoverCard3D,
  MagneticButton
} from '../components/animations';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="overflow-hidden bg-background text-on-background selection:bg-primary/30">
      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: heroY }} className="w-full h-full relative">
            <Image 
              className="w-full h-full object-cover opacity-30" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiZO0YwXDFFMkXhE2kE0um6gv2ArmL6OOrobWmLt5s_KXj9ECs-L1VJBOsh5peGl2QNznqRf9KLw7yO3jBnyy-EWVR92wzWBdz9RS9upDv71TX8HjqyI0RKsDelzK3oHIBlAekXb_2NjbzgjWjJ23bEa-_8V3T0SIFfYrkW97bjTZSxce36YwBEbisBBAzxoXkExdMjOmTMH07BjOGuyB8d6YSlp9xkJPcKD7l97wezx9TtfLVMnBpOo9GZi3h4PaKHcM4kWILUWw"
              alt="Cybersecurity background"
              fill
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/80 to-surface"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-4xl">
            <ScrollReveal direction="up">
              <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-bold mb-6 tracking-widest text-sm uppercase">
                Ekali Solutions
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8">
                Páginas web que <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  convierten
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
                Sitios web modernos, e-commerce y apps móviles con React y Next.js. Arquitectura digital de alto rendimiento para negocios exigentes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <MagneticButton>
                  <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 group shadow-xl shadow-primary/20">
                    Iniciar Proyecto
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </MagneticButton>
                
                <MagneticButton>
                  <a href="#methodology" className="bg-surface-variant/20 border border-outline-variant/30 backdrop-blur-md text-on-surface px-10 py-5 rounded-xl font-bold text-lg hover:bg-surface-variant/40 transition-colors inline-block">
                    Nuestra Metodología
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==========================================
          METODOLOGÍA SECTION
          ========================================== */}
      <section className="py-32 bg-surface-container-low" id="methodology">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Nuestra Metodología</h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
              Un enfoque estructurado y ágil para garantizar el éxito de cada proyecto digital.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                num: '01', 
                icon: 'search', 
                title: 'Descubrimiento', 
                desc: 'Análisis profundo de requerimientos, objetivos de negocio y usuarios finales.' 
              },
              { 
                num: '02', 
                icon: 'architecture', 
                title: 'Arquitectura', 
                desc: 'Diseño de la infraestructura, base de datos y experiencia de usuario (UX/UI).' 
              },
              { 
                num: '03', 
                icon: 'code', 
                title: 'Desarrollo', 
                desc: 'Construcción iterativa con tecnologías modernas y estándares de código limpio.' 
              },
              { 
                num: '04', 
                icon: 'rocket_launch', 
                title: 'Despliegue', 
                desc: 'Pruebas de calidad, optimización de rendimiento y puesta en producción.' 
              }
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative p-8 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all group h-full">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black text-sm group-hover:bg-primary group-hover:text-on-primary transition-all">
                    {step.num}
                  </div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6 block">
                    {step.icon}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.4} className="mt-20">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-[2.5rem] p-12 border border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold mb-4">¿Listo para modernizar su infraestructura?</h3>
                <p className="text-on-surface-variant text-lg">
                  Nuestra metodología se adapta a las necesidades específicas de su empresa, asegurando una transición fluida hacia la excelencia digital.
                </p>
              </div>
              <MagneticButton>
                <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-container transition-colors shadow-lg shadow-primary/20">
                  Agendar Consultoría
                </button>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================
          DESARROLLO WEB Y MÓVIL
          ========================================== */}
      <section className="py-32 bg-surface" id="solutions">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Desarrollo Web y Móvil</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                  Construimos experiencias digitales optimizadas para la conversión, utilizando las tecnologías más avanzadas del mercado para garantizar escalabilidad y seguridad.
                </p>
                
                <StaggerContainer className="space-y-8">
                  {[
                    { icon: 'corporate_fare', title: 'Sitios web corporativos', desc: 'Presencia digital de alto impacto alineada con los objetivos de su marca.' },
                    { icon: 'shopping_cart', title: 'E-commerce completo', desc: 'Plataformas de venta robustas con integración de pagos y logística.' },
                    { icon: 'smartphone', title: 'Apps móviles', desc: 'Aplicaciones nativas y progresivas con enfoque en la experiencia de usuario.' }
                  ].map((item, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                          <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                          <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </ScrollReveal>
            </div>
            
            <div className="lg:col-span-7">
              <ScrollReveal direction="right">
                <HoverCard3D>
                  <div className="rounded-3xl overflow-hidden bg-surface-container-low p-3 shadow-2xl">
                    <div className="relative h-[600px] rounded-2xl overflow-hidden">
                      <Image 
                        className="object-cover" 
                        src="/Computador.png"
                        alt="Desarrollo Web Ekali"
                        fill
                      />
                    </div>
                  </div>
                </HoverCard3D>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          AUTOMATIZACIÓN
          ========================================== */}
      <section className="py-32 bg-surface-container-low" id="expertise">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Automatización que reduce HH</h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
              Optimización de procesos mediante Microsoft Power Platform.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'widgets', title: 'Power Apps', desc: 'Desarrollo de aplicaciones personalizadas para digitalizar tareas manuales y optimizar la toma de decisiones interna.' },
              { icon: 'bolt', title: 'Power Automate', desc: 'Conexión de flujos de trabajo entre sus aplicaciones y servicios favoritos para automatizar notificaciones y archivos.' },
              { icon: 'bar_chart', title: 'Power BI', desc: 'Transformación de datos en información procesable mediante paneles interactivos y análisis de autoservicio.' }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-surface-container p-10 rounded-3xl border border-outline-variant/10 hover:border-secondary transition-all group h-full flex flex-col shadow-lg">
                  <span className="material-symbols-outlined text-secondary text-5xl mb-8 block group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
                  <p className="text-on-surface-variant text-lg mb-8 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  <div className="h-1.5 w-0 bg-secondary group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          INFRAESTRUCTURA
          ========================================== */}
      <section className="py-32 bg-surface" id="consulting">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up">
            <div className="bg-surface-container-high rounded-[3rem] overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 opacity-10">
                <Image 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMb8_rKGc1Yy0JwpPojhifPONq9f2kvNe1GLQzJxt1bRx6naOvPQWYteTYE-A1B8Z9xdM2B7wAUjN-MM8jBesbMVf8N1NI1F6h084MfP2NycCy40aufNNhuh-PDGUQKkabuRwybvy59MsqSJuwFIe3lmKyxEHVibrRqE2hrlOl2IAFDzNz7mhXM6519r43kNA7HHbUB_krETrs_Gy-uIg-TtmFIiVjkzibjzznc7qQr5Bb658wJEq7usquP4-Y_zzAHaN3P4jBkEc"
                  alt="Infrastructure grid"
                  fill
                />
              </div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 md:p-20">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Infraestructura escalable</h2>
                  <div className="space-y-12">
                    {[
                      { num: '01', title: 'Migración a la nube', desc: 'Traslado seguro de sus activos, bases de datos y aplicaciones a entornos cloud resilientes.' },
                      { num: '02', title: 'DevOps y CI/CD', desc: 'Automatización de la entrega de software para ciclos de desarrollo más rápidos y estables.' },
                      { num: '03', title: 'Contenedores', desc: 'Implementación de Docker y Kubernetes para una portabilidad total de sus servicios.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-8 group">
                        <span className="text-primary font-black text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                          {item.num}
                        </span>
                        <div>
                          <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                          <p className="text-on-surface-variant text-lg leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="hidden lg:block relative h-full min-h-[600px]">
                  <Image 
                    className="object-cover" 
                    src="/serrvidores.png"
                    alt="Servidores Ekali"
                    fill
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================
          CONTACTO
          ========================================== */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Contáctenos</h2>
              <p className="text-on-surface-variant text-xl mb-12 max-w-lg">
                Estamos listos para transformar su visión en una realidad digital de alto rendimiento. Solicite una consultoría inicial.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">mail</span>
                  </div>
                  <span className="text-2xl font-medium">ekali.solutions@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">location_on</span>
                  </div>
                  <span className="text-2xl font-medium">Santiago, Chile</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="bg-surface-container rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-outline-variant/10">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant">Nombre</label>
                      <input 
                        className="w-full bg-surface-container-highest border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all outline-none text-on-surface" 
                        type="text" 
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant">Email</label>
                      <input 
                        className="w-full bg-surface-container-highest border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all outline-none text-on-surface" 
                        type="email" 
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant">Proyecto</label>
                    <textarea 
                      className="w-full bg-surface-container-highest border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all outline-none text-on-surface" 
                      rows={5}
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>
                  
                  <button 
                    className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-black py-6 rounded-2xl text-xl hover:opacity-90 transition-all hover:scale-[1.02] shadow-xl shadow-primary/20" 
                    type="submit"
                  >
                    Enviar Consulta
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
