/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#25242C",
          "50":"#E9E9ED",
          "100":"#D0CFD8",
          "200":"#A2A0B1",
          "300":"#747089",
          "400":"#4E4C5D",
          "500":"#25242C",
          "600":"#1F1E24",
          "700":"#151519",
          "800":"#0E0E11",
          "900":"#070708"
        }
      },
      textColor: {
        'contrast-primary': {
          DEFAULT: '#ffffff'
        }
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
        title: 'Lexend, sans-serif'
      },
    },
  },
  plugins: [],
}

