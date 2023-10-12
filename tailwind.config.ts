const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#212121",
        navbg: "#F5F8FC",
        secondary: "#028789",
        navcolor: "#EAF0FA",
        brown: "rgba(248, 180, 0, 0.1)",
        brownn: "rgba(248, 180, 0, 0.07)",
        deepbrown: "rgba(248, 180, 0, 0.37)"
      },
      fontFamily: {
        poppins: "Poppins",
        "clash-display": "'Clash Display'",
        voces: "Voces",
        volkhov: "Volkhov",
        "typo-hoop-demo": "'Typo Hoop Demo'",
        "made-tommy-outline": "'MADE TOMMY Outline'",
        "unica-one": "'Unica One'",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height',
      },
    },
  },
  plugins: [
  ],
};
