/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./frontend/index.html",
    "./frontend/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-900': '#1d2634',
        'gray-800': '#263043',
        'blue-500': '#2962ff',
        'orange-500': '#ff6d00',
        'green-500': '#2e7d32',
        'red-500': '#d50000',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
