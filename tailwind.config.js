/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Corporativa Ekali
        primary: {
          DEFAULT: '#193143', // Azul oscuro corporativo
          hover: '#0f1f2d',
          light: '#2a4a63',
        },
        secondary: {
          DEFAULT: '#1a7fe8', // Azul vibrante
          hover: '#1566c0',
          light: '#3d9cf0',
        },
        accent: {
          DEFAULT: '#22bb86', // Verde tecnológico
          hover: '#1a9b6e',
          light: '#3dd4a0',
        },
        background: '#F8FAFC',
        surface: '#FFFFFF',
        'surface-dark': '#f5f7f9',
        foreground: '#193143',
        'text-muted': '#7f929c',
        'text-light': '#9CA3AF',
        dark: '#1F2937',
        darker: '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'border-flow': 'borderFlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(26, 127, 232, 0.3), 0 0 40px rgba(26, 127, 232, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(26, 127, 232, 0.5), 0 0 60px rgba(26, 127, 232, 0.2)' 
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderFlow: {
          '0%, 100%': { borderColor: 'rgba(26, 127, 232, 0.3)' },
          '50%': { borderColor: 'rgba(34, 187, 134, 0.5)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(26, 127, 232, 0.3)',
        'glow-md': '0 0 25px rgba(26, 127, 232, 0.4)',
        'glow-lg': '0 0 40px rgba(26, 127, 232, 0.5)',
        'glow-accent': '0 0 25px rgba(34, 187, 134, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(26, 127, 232, 0.1)',
        'elevated': '0 10px 40px -10px rgba(0, 0, 0, 0.2)',
        'elevated-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-corporate': 'linear-gradient(135deg, #193143 0%, #1a7fe8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #22bb86 0%, #1a7fe8 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(26, 127, 232, 0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(34, 187, 134, 0.1) 0px, transparent 50%)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.4, 0.25, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '2000': '2000ms',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      blur: {
        'xs': '2px',
        '4xl': '72px',
        '5xl': '100px',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
