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
        // Paleta profesional: Azul + Verde
        primary: {
          DEFAULT: '#1E3A8A', // Azul oscuro marino (se mantiene)
          hover: '#1E40AF',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#059669', // Verde esmeralda
          hover: '#047857',
          light: '#10B981',
        },
        accent: {
          DEFAULT: '#0891B2', // Cyan/Turquesa
          hover: '#0E7490',
          light: '#06B6D4',
        },
        background: '#F5F5F5', // Gris claro suave
        surface: '#FFFFFF',
        'surface-dark': '#E5E7EB',
        foreground: '#111827',
        'text-muted': '#6B7280',
        'text-light': '#9CA3AF',
        dark: '#1F2937', // Gris muy oscuro
        darker: '#111827',
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
