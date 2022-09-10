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
        },
        ping2 : {
          "75%" : {
            transform: "scale(1.5)",
            opacity: 0,
          },
          "100%" : {
            transform: "scale(1.5)",
            opacity: 0,
          }
        }
      },
      animation: {
        showToRight: 'showToRight .4s ease-in-out',
        smallPing :  'ping2 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      }
    },
  },
  plugins: [],
}