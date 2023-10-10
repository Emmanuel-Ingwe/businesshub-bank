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
        gray: {
          "100": "#150e28",
          "200": "#140d27",
          "300": "#100b20",
          "400": "rgba(255, 255, 255, 0.18)",
          "500": "rgba(255, 255, 255, 0.01)",
          "600": "rgba(255, 255, 255, 0.75)",
        },
        white: "#fff",
        hr: "rgba(255, 255, 255, 0.18)",
        blueviolet: {
          "100": "#903aff",
          "200": "rgba(144, 58, 255, 0.12)",
        },
        fuchsia: {
          "100": "#d434fe",
          "200": "rgba(212, 52, 254, 0.12)",
        },
        gradient: {
          general: 'linear-gradient(270deg,_#903aff,_#d434fe_56.42%,_#ff26b9_99.99%,_#fe34b9)',
          icon: 'linear-gradient(125.8deg, #9666FF 6.28%, #5645F5 99.52%)',
        },
        gainsboro: "rgba(217, 217, 217, 0.03)",
        red: "#ff0000",
        cornflowerblue: "#00a3ff",
        mediumslateblue: "#a866fd",
        deeppink: "#ff26b9",
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
