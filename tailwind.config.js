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
        // Nueva paleta corporativa seria y tecnológica
        background: '#F8FAFC', // Blanco humo muy claro
        foreground: '#193143', // Azul oscuro corporativo para textos
        primary: '#193143', // Azul oscuro corporativo (seriedad, tecnología)
        secondary: '#1a7fe8', // Azul vibrante como acento
        accent: '#22bb86', // Verde como acento complementario
        surface: '#FFFFFF', // Blanco puro para tarjetas
        'surface-secondary': '#f5f7f9', // Gris muy claro para secciones alternadas
        'text-soft': '#7f929c', // Gris azulado para textos suaves
        'bg-secondary': '#f5f7f9', // Fondo secundario gris azulado
        dark: '#193143', // Azul oscuro corporativo
        'dark-light': '#2a4558', // Azul oscuro claro
        // Hover states
        'primary-hover': '#0f1f2d',
        'secondary-hover': '#1566c0',
        'accent-hover': '#1a9b6e',
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
