/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#171717',
          G50: '#f8f8f8',
          G100: '#f0f0f0',
          G200: '#e6e6e6',
          G300: '#D5D5D5',
          G400: '#b0b0b0',
          G500: '#909090',
          G600: '#686868',
          G700: '#555555',
          G800: '#373737',
          G900: '#171717',
        },
        blue: {
          DEFAULT: '#0099FF',
          B50: '#DEF4FF',
          B100: '#CCEEFF',
          B200: '#99DBFF',
          B300: '#66C7FF',
          B400: '#33B1FF',
          B500: '#0099FF',
          B600: '#0086e5',
          B700: '#0074CC',
          B800: '#0062B2',
          B900: '#005299',
        },
      },
    },
  },
  plugins: [],
};
