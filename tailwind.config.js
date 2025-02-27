/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['Quicksand', 'sans-serif'],
      },
      colors: {
        'soft-pink': '#FFB6C1',
        'light-pink': '#FFC0CB',
        'baby-pink': '#FFCCCC',
        'pastel-pink': '#FFE4E1',
        'soft-peach': '#FFDAB9',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      }
    },
  },
  plugins: [],
} 