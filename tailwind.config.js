/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary-500))",
          50:  "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
          950: "hsl(var(--primary-950))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary-500))",
          50:  "hsl(var(--secondary-50))",
          100: "hsl(var(--secondary-100))",
          200: "hsl(var(--secondary-200))",
          300: "hsl(var(--secondary-300))",
          400: "hsl(var(--secondary-400))",
          500: "hsl(var(--secondary-500))",
          600: "hsl(var(--secondary-600))",
          700: "hsl(var(--secondary-700))",
          800: "hsl(var(--secondary-800))",
          900: "hsl(var(--secondary-900))",
          950: "hsl(var(--secondary-950))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        terciary: {
          DEFAULT: "hsl(var(--terciary-500))",
          50:  "hsl(var(--terciary-50))",
          100: "hsl(var(--terciary-100))",
          200: "hsl(var(--terciary-200))",
          300: "hsl(var(--terciary-300))",
          400: "hsl(var(--terciary-400))",
          500: "hsl(var(--terciary-500))",
          600: "hsl(var(--terciary-600))",
          700: "hsl(var(--terciary-700))",
          800: "hsl(var(--terciary-800))",
          900: "hsl(var(--terciary-900))",
          950: "hsl(var(--terciary-950))",
          foreground: "hsl(var(--terciary-foreground))",
        },
        container: {
          DEFAULT: "hsl(var(--container))",
          foreground: "hsl(var(--container-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral-500))",
          'foreground-light': "hsl(var(--neutral-foreground-light))",
          'foreground-dark': "hsl(var(--neutral-foreground-dark))",
          50:  "hsl(var(--neutral-50))",
          100: "hsl(var(--neutral-100))",
          200: "hsl(var(--neutral-200))",
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          500: "hsl(var(--neutral-500))",
          600: "hsl(var(--neutral-600))",
          700: "hsl(var(--neutral-700))",
          800: "hsl(var(--neutral-800))",
          900: "hsl(var(--neutral-900))",
          950: "hsl(var(--neutral-950))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        shadow: {
          DEFAULT: "hsl(var(--shadow))"
        },
        planta: {
          DEFAULT: 'hsl(var(--planta))',
          lighter: 'hsl(var(--planta-lighter))',
          darker: 'hsl(var(--planta-darker))'
        },
        agua: {
          DEFAULT: 'hsl(var(--agua))',
          lighter: 'hsl(var(--agua-lighter))',
          darker: 'hsl(var(--agua-darker))'
        },
        fuego: {
          DEFAULT: 'hsl(var(--fuego))',
          lighter: 'hsl(var(--fuego-lighter))',
          darker: 'hsl(var(--fuego-darker))'
        },
        electrico: {
          DEFAULT: 'hsl(var(--electrico))',
          lighter: 'hsl(var(--electrico-lighter))',
          darker: 'hsl(var(--electrico-darker))'
        },
        hielo: {
          DEFAULT: 'hsl(var(--hielo))',
          lighter: 'hsl(var(--hielo-lighter))',
          darker: 'hsl(var(--hielo-darker))'
        },
        lucha: {
          DEFAULT: 'hsl(var(--lucha))',
          lighter: 'hsl(var(--lucha-lighter))',
          darker: 'hsl(var(--lucha-darker))'
        },
        veneno: {
          DEFAULT: 'hsl(var(--veneno))',
          lighter: 'hsl(var(--veneno-lighter))',
          darker: 'hsl(var(--veneno-darker))'
        },
        tierra: {
          DEFAULT: 'hsl(var(--tierra))',
          lighter: 'hsl(var(--tierra-lighter))',
          darker: 'hsl(var(--tierra-darker))'
        },
        volador: {
          DEFAULT: 'hsl(var(--volador))',
          lighter: 'hsl(var(--volador-lighter))',
          darker: 'hsl(var(--volador-darker))'
        },
        psiquico: {
          DEFAULT: 'hsl(var(--psiquico))',
          lighter: 'hsl(var(--psiquico-lighter))',
          darker: 'hsl(var(--psiquico-darker))'
        },
        bicho: {
          DEFAULT: 'hsl(var(--bicho))',
          lighter: 'hsl(var(--bicho-lighter))',
          darker: 'hsl(var(--bicho-darker))'
        },
        roca: {
          DEFAULT: 'hsl(var(--roca))',
          lighter: 'hsl(var(--roca-lighter))',
          darker: 'hsl(var(--roca-darker))'
        },
        fantasma: {
          DEFAULT: 'hsl(var(--fantasma))',
          lighter: 'hsl(var(--fantasma-lighter))',
          darker: 'hsl(var(--fantasma-darker))'
        },
        dragon: {
          DEFAULT: 'hsl(var(--dragon))',
          lighter: 'hsl(var(--dragon-lighter))',
          darker: 'hsl(var(--dragon-darker))'
        },
        acero: {
          DEFAULT: 'hsl(var(--acero))',
          lighter: 'hsl(var(--acero-lighter))',
          darker: 'hsl(var(--acero-darker))'
        },
        normal: {
          DEFAULT: 'hsl(var(--normal))',
          lighter: 'hsl(var(--normal-lighter))',
          darker: 'hsl(var(--normal-darker))'
        },
        siniestro: {
          DEFAULT: 'hsl(var(--siniestro))',
          lighter: 'hsl(var(--siniestro-lighter))',
          darker: 'hsl(var(--siniestro-darker))'
        },
        hada: {
          DEFAULT: 'hsl(var(--hada))',
          lighter: 'hsl(var(--hada-lighter))',
          darker: 'hsl(var(--hada-darker))'
        }
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
        title: 'Lexend, sans-serif',
        mono: '"Chivo Mono", monospace'
      },
      borderRadius: {
        asd: '1px',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require('@shrutibalasa/tailwind-grid-auto-fit')
  ],
}