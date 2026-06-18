/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#0D2438', 800: '#1A3A5C', 500: '#2B5C8A', 100: '#E8EEF5' },
        gold: { 600: '#C9A227', 400: '#D4B347', 100: '#FDF4DC' },
        cream: { 50: '#F5F0E8' },
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
