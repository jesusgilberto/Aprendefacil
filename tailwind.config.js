/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta infantil: rosa y azul pasteles, más acentos
        'rosa-principal': '#FF77B8',
        'rosa-claro': '#FFD6E8',
        'rosa-oscuro': '#FF2D95',
        'azul-principal': '#6EC6FF',
        'azul-claro': '#CFEFFF',
        'amarillo-soleado': '#FFD166',
        'verde-mint': '#8CE99A',
        'lila': '#CBA6FF',
      },
      fontFamily: {
        'comic': ['Comic Sans MS', 'cursive', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}