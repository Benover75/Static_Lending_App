/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#d0a0ff',
          200: '#c28dff',
          300: '#b47aff',
          400: '#a666ff',
          500: '#9653ff',
          600: '#8740ff',
          700: '#782cf9',
          800: '#6a19f2',
          900: '#5c06eb',
        }
      },
      boxShadow: {
        glow: '0 0 15px rgba(166, 77, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
