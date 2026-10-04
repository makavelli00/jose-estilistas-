/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Paleta de marca: usar siempre estos nombres en vez de hex sueltos
      colors: {
        gold: {
          DEFAULT: '#d4af37',
          light: '#f9e29c',
          dark: '#b8860b',
        },
        surface: {
          DEFAULT: '#0a0a0a', // fondo de la página
          raised: '#161616', // tarjetas y paneles
          line: '#262626', // borde de tarjetas
          dots: '#333333', // puntos de la carta de precios
        },
        whatsapp: '#128C7E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      fontSize: {
        '2xs': '10px',
      },
      letterSpacing: {
        label: '0.2em', // botones y etiquetas de métricas
        eyebrow: '0.3em', // texto pequeño encima de los títulos
        'eyebrow-wide': '0.4em',
      },
      borderRadius: {
        card: '2.5rem',
        panel: '3rem',
      },
      minHeight: {
        tap: '44px', // tamaño mínimo de zona táctil (WCAG)
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f9e29c 50%, #b8860b 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(212, 175, 55, 0.1)',
        'whatsapp-glow': '0 0 40px rgba(37, 211, 102, 0.4)',
      },
    },
  },
  plugins: [],
}
