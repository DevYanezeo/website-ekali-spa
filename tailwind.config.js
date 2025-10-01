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
        // Paleta tech premium
        background: '#111827',
        foreground: '#F3F4F6',
        primary: '#8B5CF6',
        secondary: '#0EA5E9',
        surface: '#1F2937',
        
        // Variantes para hover states
        'primary-hover': '#7C3AED', // Tono más oscuro del morado
        'secondary-hover': '#0284C7', // Tono más oscuro del celeste
      },
    },
  },
  plugins: [],
};
