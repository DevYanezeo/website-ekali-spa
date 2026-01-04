'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  ParallaxImage,
  AnimatedCounter,
  FloatingElement,
  MagneticButton,
  TextReveal,
  WireframeBackground,
  MorphingBlob,
  GlowingOrb,
  HoverCard3D,
  SlideProgressBar
} from '../components/animations';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  const slides = [
    {
      title: 'Desarrollo de Software',
      subtitle: 'Páginas web y aplicaciones móviles que impulsan tu negocio',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
      accent: 'primary'
    },
    {
      title: 'Microsoft Power Platform',
      subtitle: 'Automatización empresarial que reduce horas-hombre',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      accent: 'secondary'
    },
    {
      title: 'Arquitecturas Empresariales',
      subtitle: 'Soluciones cloud escalables y robustas',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop',
      accent: 'accent'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="overflow-hidden bg-background">
      {/* Progress Bar */}
      <SlideProgressBar />

      {/* ==========================================
          HERO SECTION - Full screen with parallax
          ========================================== */}
      <section 
        ref={heroRef}
        className="relative h-[90vh] sm:h-[85vh] md:h-[90vh] bg-darker overflow-hidden w-full"
      >
        {/* Wireframe Background Animation */}
        <WireframeBackground className="z-0" />
        
        {/* Morphing Blobs */}
        <MorphingBlob className="w-[600px] h-[600px] top-[-200px] left-[-200px]" color="secondary" />
        <MorphingBlob className="w-[400px] h-[400px] bottom-[-100px] right-[-100px]" color="accent" />
        
        {/* Slides */}
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Background Image with Parallax */}
                <motion.div 
                  className="absolute inset-0"
                  style={{ y: heroY, scale: heroScale }}
                >
                  <Image 
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-darker/80 via-darker/60 to-darker/90" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/20" />
                </motion.div>
                
                {/* Content */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center text-center z-10"
                  style={{ opacity: heroOpacity }}
                >
                  <div className="w-full px-4 sm:px-6 max-w-5xl mx-auto">
                    {/* Logo with Float Animation */}
                    <motion.div 
                      className="mb-8 flex justify-center"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <FloatingElement amplitude={10} duration={5}>
                        <div className="relative">
                          <GlowingOrb className="-top-10 -left-10" size={150} />
                          <Image 
                            src="/logo_idea.png" 
                            alt="Ekali Solutions" 
                            width={140}
                            height={140}
                            className="drop-shadow-2xl w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 relative z-10"
                          />
                        </div>
                      </FloatingElement>
                    </motion.div>

                    {/* Title with Stagger Animation */}
                    <motion.h1 
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <span className="inline-block">
                        {slide.title.split(' ').map((word, i) => (
                          <motion.span
                            key={i}
                            className="inline-block mr-4"
                            initial={{ y: 50, opacity: 0, rotateX: -90 }}
                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: 0.5 + i * 0.1,
                              ease: [0.25, 0.4, 0.25, 1]
                            }}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p 
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-10 max-w-3xl mx-auto"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* CTA Button with Magnetic Effect */}
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <MagneticButton>
                        <a 
                          href="/contact"
                          className="inline-block btn-primary text-white px-10 py-5 sm:px-12 sm:py-5 md:px-14 md:py-6 rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(26,127,232,0.4)] transition-all duration-500"
                        >
                          <span className="flex items-center gap-3">
                            Contáctanos
                            <motion.svg 
                              className="w-6 h-6"
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </motion.svg>
                          </span>
                        </a>
                      </MagneticButton>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 glass-dark p-3 sm:p-4 rounded-full transition-all group"
          aria-label="Anterior"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        
        <motion.button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 glass-dark p-3 sm:p-4 rounded-full transition-all group"
          aria-label="Siguiente"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="relative h-3 rounded-full overflow-hidden bg-white/30"
              animate={{ width: index === currentSlide ? 48 : 12 }}
              transition={{ duration: 0.3 }}
              aria-label={`Ir a slide ${index + 1}`}
            >
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 6, ease: 'linear' }}
                  style={{ transformOrigin: 'left' }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-3 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ==========================================
          DESARROLLO WEB SECTION
          ========================================== */}
      <section className="relative w-full py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0f1f2d]" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 pattern-wireframe opacity-30" />
        
        {/* Floating Orbs */}
        <GlowingOrb className="top-20 right-20 hidden lg:block" size={300} />
        <MorphingBlob className="w-[500px] h-[500px] -bottom-48 -left-48" color="secondary" />

        <div className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-6 sm:px-8 md:px-16 lg:px-24">
            <ScrollReveal direction="left">
              <div>
                <motion.span 
                  className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-6 border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                  🚀 DESARROLLO WEB Y MÓVIL
                </motion.span>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  <TextReveal>Páginas web que convierten</TextReveal>
                </h2>
                
                <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
                  Sitios web modernos, e-commerce y apps móviles con React y Next.js que transforman visitantes en clientes.
                </p>
                
                <StaggerContainer className="space-y-5 mb-10" staggerDelay={0.15}>
                  {[
                    { title: 'Sitios web corporativos', desc: 'Landing pages y portales institucionales' },
                    { title: 'E-commerce completo', desc: 'Tiendas online con pasarelas de pago' },
                    { title: 'Apps móviles', desc: 'iOS y Android nativas o híbridas' }
                  ].map((item, i) => (
                    <StaggerItem key={i}>
                      <motion.div 
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group"
                        whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">{item.title}</h3>
                          <p className="text-white/60 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                
                <MagneticButton>
                  <a href="/services" className="btn-secondary text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 text-base">
                    Ver Más
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3} className="hidden lg:block">
              <HoverCard3D className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <ParallaxImage className="absolute inset-0" speed={0.2}>
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                    alt="Desarrollo Web"
                    fill
                    className="object-cover"
                  />
                </ParallaxImage>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                {/* Decorative Elements */}
                <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                    <span className="text-white/80 text-sm">Desarrollo en progreso...</span>
                  </div>
                </div>
              </HoverCard3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==========================================
          POWER PLATFORM SECTION
          ========================================== */}
      <section className="relative w-full py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary via-[#047857] to-[#065f46]" />
        
        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 pattern-dots opacity-20" />
        
        {/* Floating Shapes */}
        <FloatingElement className="absolute top-20 left-20 hidden lg:block" amplitude={20} duration={6}>
          <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 rotate-12" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-32 right-32 hidden lg:block" amplitude={15} duration={5} delay={1}>
          <div className="w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30" />
        </FloatingElement>

        <div className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-6 sm:px-8 md:px-16 lg:px-24">
            <ScrollReveal direction="left" delay={0.3} className="hidden lg:block order-2 lg:order-1">
              <HoverCard3D className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <ParallaxImage className="absolute inset-0" speed={0.2}>
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                    alt="Power Platform"
                    fill
                    className="object-cover"
                  />
                </ParallaxImage>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                  <div className="glass-dark rounded-xl p-3 flex-1 text-center">
                    <div className="text-2xl font-bold text-white">-70%</div>
                    <div className="text-white/60 text-xs">Horas manuales</div>
                  </div>
                  <div className="glass-dark rounded-xl p-3 flex-1 text-center">
                    <div className="text-2xl font-bold text-accent">+90%</div>
                    <div className="text-white/60 text-xs">Eficiencia</div>
                  </div>
                </div>
              </HoverCard3D>
            </ScrollReveal>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div>
                <motion.span 
                  className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-6 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  ⚡ MICROSOFT POWER PLATFORM
                </motion.span>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  <TextReveal>Automatización que reduce HH</TextReveal>
                </h2>
                
                <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
                  Power Apps, Power Automate y Power BI para automatizar procesos y tomar decisiones basadas en datos.
                </p>
                
                <StaggerContainer className="space-y-5 mb-10" staggerDelay={0.15}>
                  {[
                    { title: 'Power Apps', desc: 'Apps internas sin código, formularios personalizados', icon: '📱' },
                    { title: 'Power Automate', desc: 'Automatización de flujos y procesos repetitivos', icon: '⚙️' },
                    { title: 'Power BI', desc: 'Dashboards y reportes en tiempo real', icon: '📊' }
                  ].map((item, i) => (
                    <StaggerItem key={i}>
                      <motion.div 
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group"
                        whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">{item.title}</h3>
                          <p className="text-white/60 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                
                <MagneticButton>
                  <a href="/services" className="btn-primary text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 text-base">
                    Ver Más
                    <motion.svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==========================================
          CLOUD ARCHITECTURE SECTION
          ========================================== */}
      <section className="relative w-full py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0891B2] via-[#0e7490] to-[#164e63]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 pattern-grid opacity-30" />
        
        {/* Glowing Elements */}
        <GlowingOrb className="top-1/4 right-10 hidden xl:block" size={400} />
        
        {/* Floating geometric shapes */}
        <FloatingElement className="absolute top-32 right-1/4 hidden lg:block" amplitude={25} duration={7}>
          <div className="w-24 h-24 border-2 border-white/20 rounded-3xl rotate-45 backdrop-blur-sm" />
        </FloatingElement>

        <div className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-6 sm:px-8 md:px-16 lg:px-24">
            <ScrollReveal direction="left">
              <div>
                <motion.span 
                  className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-6 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  ☁️ ARQUITECTURAS EN LA NUBE
                </motion.span>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  <TextReveal>Infraestructura escalable</TextReveal>
                </h2>
                
                <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
                  Arquitecturas cloud en Azure, AWS y GCP con DevOps y CI/CD para máxima disponibilidad y rendimiento.
                </p>
                
                <StaggerContainer className="space-y-5 mb-10" staggerDelay={0.15}>
                  {[
                    { title: 'Migración a la nube', desc: 'Azure, AWS, Google Cloud, multi-cloud', icon: '🌐' },
                    { title: 'DevOps y CI/CD', desc: 'Automatización de despliegues y pipelines', icon: '🔄' },
                    { title: 'Contenedores', desc: 'Docker, Kubernetes, microservicios', icon: '📦' }
                  ].map((item, i) => (
                    <StaggerItem key={i}>
                      <motion.div 
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group"
                        whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">{item.title}</h3>
                          <p className="text-white/60 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                
                <MagneticButton>
                  <a href="/services" className="btn-secondary text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 text-base">
                    Ver Más
                    <motion.svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3} className="hidden lg:block">
              <HoverCard3D className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <ParallaxImage className="absolute inset-0" speed={0.2}>
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                    alt="Cloud Architecture"
                    fill
                    className="object-cover"
                  />
                </ParallaxImage>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0891B2]/60 via-transparent to-transparent" />
                {/* Cloud Icons Overlay */}
                <div className="absolute top-6 left-6 right-6 flex justify-between">
                  {['Azure', 'AWS', 'GCP'].map((cloud, i) => (
                    <motion.div 
                      key={cloud}
                      className="glass-dark rounded-xl px-4 py-2"
                      initial={{ y: -20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <span className="text-white text-sm font-medium">{cloud}</span>
                    </motion.div>
                  ))}
                </div>
              </HoverCard3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==========================================
          CASE STUDY SECTION - CGE
          ========================================== */}
      <section className="relative w-full py-20 sm:py-24 md:py-32 overflow-hidden bg-surface">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 gradient-mesh" />
        
        <div className="relative z-10 w-full px-6 sm:px-8 md:px-16 lg:px-24">
          <ScrollReveal className="text-center mb-16">
            <motion.span 
              className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              🏆 CASO DE ÉXITO
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
              CGE Comercializadora
            </h2>
            <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto">
              Sistema de gestión integral con Microsoft Power Platform
            </p>
          </ScrollReveal>

          {/* Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" staggerDelay={0.15}>
            {[
              { 
                icon: '🏢', 
                title: 'La Empresa', 
                desc: 'CGE, líder en distribución eléctrica en Chile con operaciones a nivel nacional',
                color: 'primary'
              },
              { 
                icon: '⚠️', 
                title: 'El Problema', 
                desc: 'Procesos manuales en Excel, datos descentralizados y falta de visibilidad',
                color: 'secondary'
              },
              { 
                icon: '✅', 
                title: 'La Solución', 
                desc: 'Sistema integrado con Power Apps y dashboards en tiempo real con Power BI',
                color: 'accent'
              }
            ].map((card, i) => (
              <StaggerItem key={i}>
                <HoverCard3D>
                  <motion.div 
                    className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full group"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-${card.color}/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {card.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-dark mb-3">{card.title}</h3>
                    <p className="text-text-muted">{card.desc}</p>
                  </motion.div>
                </HoverCard3D>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Results Box */}

        </div>
      </section>

      {/* ==========================================
          CTA SECTION
          ========================================== */}
      <section className="relative w-full py-24 sm:py-32 md:py-40 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-darker to-dark" />
        <WireframeBackground className="opacity-40" />
        
        {/* Glowing orbs */}
        <GlowingOrb className="top-1/4 left-1/4" size={400} />
        <GlowingOrb className="bottom-1/4 right-1/4" size={300} />
        
        <div className="relative z-10 w-full text-center px-6 sm:px-8">
          <ScrollReveal>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
            >
              ¿Listo para{' '}
              <span className="text-gradient-accent">transformar</span>
              {' '}tu empresa?
            </motion.h2>
            
            <motion.p 
              className="text-xl sm:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Agenda una consulta gratuita y descubre cómo podemos ayudarte
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MagneticButton>
                <a 
                  href="/contact"
                  className="inline-block bg-white text-primary hover:bg-slate-100 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] transition-all duration-500"
                >
                  <span className="flex items-center gap-3 justify-center">
                    Contáctanos
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </a>
              </MagneticButton>
              
              <MagneticButton>
                <a 
                  href="https://www.linkedin.com/company/ekali-consultoria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-3 justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </span>
                </a>
              </MagneticButton>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
