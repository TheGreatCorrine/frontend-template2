/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial-soft': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      colors: {
        'soft-peach': '#FFE4E1',
        'soft-orange': '#FFDAB9',
        'soft-pink': '#FFE6E6',
        'soft-coral': '#FFD6CC',
      }
    },
  },
  plugins: [],
} 