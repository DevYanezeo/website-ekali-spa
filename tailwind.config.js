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
        // Nueva paleta "Precisión Ágil" - Profesional y Moderna
        primary: {
          DEFAULT: '#0F172A', // Slate 900 - Profesional, confianza, autoridad
          hover: '#020617',
          light: '#1E293B',
        },
        secondary: {
          DEFAULT: '#3B82F6', // Blue 500 - Innovación, tecnología, claridad
          hover: '#2563EB',
          light: '#60A5FA',
        },
        accent: {
          DEFAULT: '#10B981', // Emerald 500 - Resultados, crecimiento, éxito
          hover: '#059669',
          light: '#34D399',
        },
        background: '#FFFFFF',
        surface: '#F8FAFC', // Slate 50
        'surface-dark': '#F1F5F9', // Slate 100
        foreground: '#0F172A',
        'text-muted': '#64748B', // Slate 500
        'text-light': '#94A3B8', // Slate 400
        dark: '#020617', // Slate 950
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
