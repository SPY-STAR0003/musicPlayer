/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        showToRight: {
          '0%': { transform: 'translateX(-3px)', opacity : 0},
          '100%': { transform: 'translateX(0px)', opacity : 1 }
        }
      },
      animation: {
        showToRight: 'showToRight .4s ease-in-out',
      }
    },
  },
  plugins: [],
}