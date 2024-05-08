/** @type {import('tailwindcss').Config} */
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gray: {
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
        etc: {
          etc50: '#435463',
        },
      },
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
      rounded: px0_200,
    },
  },
  plugins: [],
};
