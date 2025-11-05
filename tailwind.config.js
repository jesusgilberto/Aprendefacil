/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rosa-principal': '#ff1493',
        'rosa-claro': '#ff80ab',
        'rosa-oscuro': '#c71585',
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