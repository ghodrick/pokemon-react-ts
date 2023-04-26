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
        },
        planta: {
          DEFAULT: "#78c850",
          lighter: "#91d76e",
          darker: "#5fb03a"
        },
        agua: {
          DEFAULT: "#6890f0",
          lighter: "#7da9f7",
          darker: "#4f6ec9"
        },
        fuego: {
          DEFAULT: "#f08030",
          lighter: "#f79d6e",
          darker: "#c95e1d"
        },
        electrico: {
          DEFAULT: "#f8d030",
          lighter: "#fde46e",
          darker: "#c7a21d"
        },
        hielo: {
          DEFAULT: "#98d8d8",
          lighter: "#b3e6e6",
          darker: "#70b2b2"
        },
        lucha: {
          DEFAULT: "#c03028",
          lighter: "#d76e6e",
          darker: "#9d1f1f"
        },
        veneno: {
          DEFAULT: "#a040a0",
          lighter: "#c06ec0",
          darker: "#7d2f7d"
        },
        tierra: {
          DEFAULT: "#e0c068",
          lighter: "#e6d69d",
          darker: "#b29d4f"
        },
        volador: {
          DEFAULT: "#a890f0",
          lighter: "#c6b7f7",
          darker: "#8169c9"
        },
        psiquico: {
          DEFAULT: "#f85888",
          lighter: "#f97db3",
          darker: "#c93d6e"
        },
        bicho: {
          DEFAULT: "#a8b820",
          lighter: "#c1d96e",
          darker: "#80911f"
        },
        roca: {
          DEFAULT: "#b8a038",
          lighter: "#d1c16e",
          darker: "#8c762f"
        },
        fantasma: {
          DEFAULT: "#705898",
          lighter: "#8e7db3",
          darker: "#56466e"
        },
        dragon: {
          DEFAULT: "#7038f8",
          lighter: "#8e7db3",
          darker: "#56466e"
        },
        acero: {
          DEFAULT: "#b8b8d0",
          lighter: "#d1d1e6",
          darker: "#8c8c9d"
        },
        normal: {
          DEFAULT: "#a8a878",
          lighter: "#c1c196",
          darker: "#808058"
        },
        siniestro: {
          DEFAULT: "#705848",
          lighter: "#8e7b6e",
          darker: "#56433d"
        },
        hada: {
          DEFAULT: "#ee99ac",
          lighter: "#f4bdc6",
          darker: "#c66f83"
        }

      },
      textColor: {
        'contrast-primary': {
          DEFAULT: '#ffffff'
        }
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
        title: 'Lexend, sans-serif',
        mono: '"Chivo Mono", monospace'
      },
    },
  },
  plugins: [],
}

