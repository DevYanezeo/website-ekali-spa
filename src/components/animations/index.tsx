'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, ReactNode, useEffect, useState } from 'react';

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.7,
  once = true 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });
  
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : {}}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER CONTAINER
// ============================================
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayStart?: number;
}

export function StaggerContainer({ 
  children, 
  className = '',
  staggerDelay = 0.1,
  delayStart = 0 
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayStart
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER ITEM
// ============================================
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// PARALLAX SECTION
// ============================================
interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxSection({ 
  children, 
  className = '',
  speed = 0.5 
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} className={className} style={{ y: smoothY }}>
      {children}
    </motion.div>
  );
}

// ============================================
// PARALLAX IMAGE
// ============================================
interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxImage({ 
  children, 
  className = '',
  speed = 0.3 
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.div 
      ref={ref} 
      className={className}
      style={{ y, scale }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// ANIMATED COUNTER
// ============================================
interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ 
  value, 
  className = '',
  duration = 2 
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');
  
  // Extract numeric part and suffix
  const numericMatch = value.match(/^([+-]?)(\d+)/);
  const prefix = numericMatch?.[1] || '';
  const numericValue = parseInt(numericMatch?.[2] || '0', 10);
  const suffix = value.replace(/^[+-]?\d+/, '');

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(numericValue * easeOutExpo);
      
      setDisplayValue(`${prefix}${current}${suffix}`);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericValue, prefix, suffix, value, duration]);

  return (
    <motion.span 
      ref={ref}
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {displayValue}
    </motion.span>
  );
}

// ============================================
// FLOATING ELEMENT
// ============================================
interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

export function FloatingElement({ 
  children, 
  className = '',
  amplitude = 15,
  duration = 4,
  delay = 0
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
        rotate: [-2, 2, -2]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// MAGNETIC BUTTON
// ============================================
interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export function MagneticButton({ children, className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) * 0.15;
    const y = (e.clientY - centerY) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// TEXT REVEAL
// ============================================
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const words = children.split(' ');

  return (
    <motion.span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.05,
            ease: [0.25, 0.4, 0.25, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// ============================================
// SCALE ON SCROLL
// ============================================
interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
}

export function ScaleOnScroll({ children, className = '' }: ScaleOnScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ scale, opacity }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SLIDE PROGRESS BAR
// ============================================
export function SlideProgressBar({ className = '' }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[100] ${className}`}
      style={{ scaleX }}
    />
  );
}

// ============================================
// ANIMATED GRID BACKGROUND
// ============================================
export function AnimatedGridBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,127,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,127,232,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(26,127,232,0.1)" />
            <stop offset="50%" stopColor="rgba(34,187,134,0.15)" />
            <stop offset="100%" stopColor="rgba(26,127,232,0.1)" />
          </linearGradient>
        </defs>
        
        {/* Horizontal animated lines */}
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={`${20 + i * 15}%`}
            x2="100%"
            y2={`${20 + i * 15}%`}
            stroke="url(#grid-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.5, 0.5, 0]
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
        
        {/* Vertical animated lines */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${10 + i * 12}%`}
            y1="0"
            x2={`${10 + i * 12}%`}
            y2="100%"
            stroke="url(#grid-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.3, 0.3, 0]
            }}
            transition={{
              duration: 5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// ============================================
// WIREFRAME ANIMATION BACKGROUND
// ============================================
export function WireframeBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wire-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(25,49,67,0.2)" />
            <stop offset="100%" stopColor="rgba(26,127,232,0.3)" />
          </linearGradient>
          <linearGradient id="wire-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34,187,134,0.2)" />
            <stop offset="100%" stopColor="rgba(26,127,232,0.2)" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated geometric shapes */}
        <motion.path
          d="M0,50 Q25,30 50,50 T100,50"
          stroke="url(#wire-gradient-1)"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
          style={{ 
            strokeDasharray: '10 5',
            transform: 'translateY(20%)'
          }}
        />
        
        <motion.circle
          cx="20%"
          cy="30%"
          r="80"
          stroke="url(#wire-gradient-2)"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [0.5, 1.2, 0.5],
            opacity: [0.1, 0.3, 0.1],
            rotate: 360
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        
        <motion.circle
          cx="80%"
          cy="70%"
          r="120"
          stroke="url(#wire-gradient-1)"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ 
            scale: [1, 0.6, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: -360
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating triangles */}
        <motion.polygon
          points="100,10 140,70 60,70"
          stroke="url(#wire-gradient-2)"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '100px 40px' }}
        />

        {/* Data flow lines */}
        {[...Array(3)].map((_, i) => (
          <motion.line
            key={`flow-${i}`}
            x1={`${20 + i * 30}%`}
            y1="100%"
            x2={`${30 + i * 25}%`}
            y2="0%"
            stroke={`rgba(26,127,232,${0.1 + i * 0.05})`}
            strokeWidth="2"
            strokeDasharray="5 15"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -100 }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </svg>

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(26,127,232,0.6) 0%, rgba(34,187,134,0.3) 100%)`,
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
            boxShadow: '0 0 20px rgba(26,127,232,0.4)'
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 4 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// MORPHING BLOB
// ============================================
export function MorphingBlob({ className = '', color = 'primary' }: { className?: string; color?: 'primary' | 'secondary' | 'accent' }) {
  const colors = {
    primary: 'rgba(25,49,67,0.15)',
    secondary: 'rgba(26,127,232,0.15)',
    accent: 'rgba(34,187,134,0.15)'
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{ background: colors[color] }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
        borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%']
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
}

// ============================================
// GLOWING ORB
// ============================================
export function GlowingOrb({ className = '', size = 200 }: { className?: string; size?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: 'radial-gradient(circle, rgba(26,127,232,0.4) 0%, rgba(34,187,134,0.2) 50%, transparent 70%)',
        filter: 'blur(40px)'
      }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
}

// ============================================
// HOVER CARD 3D
// ============================================
interface HoverCard3DProps {
  children: ReactNode;
  className?: string;
}

export function HoverCard3D({ children, className = '' }: HoverCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientY - centerY) / 10;
    const y = (centerX - e.clientX) / 10;
    setRotateX(x);
    setRotateY(y);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

