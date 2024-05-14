/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
      rounded: px0_200,

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

      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.disabled': {
          opacity: '20%',
          cursor: 'auto',
          transition: 'all 0.3s',
        },

        '.primary': {
          color: '#fff',
          background: '#171717',
          transition: 'all 0.3s',

          '&:hover': {
            background: '#686868',
          },

          '&.disabled:hover': {
            color: '#fff',
            background: '#171717',
          },
        },

        '.secondary': {
          color: '#171717',
          background: '#fff',
          border: '1px solid #171717',
          transition: 'all 0.3s',

          '&:hover': {
            color: '#686868',
            border: '1px solid #686868',
          },

          '&.disabled:hover': {
            color: '#171717',
            background: '#fff',
            border: '1px solid #171717',
          },
        },

        '.btn-large': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          fontSize: '18px',
          height: '56px',
          minWidth: '160px',
          borderRadius: '60px',
          padding: '0 40px',
          fontWeight: '500',
        },

        '.btn-medium': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          fontSize: '18px',
          height: '40px',
          minWidth: '140px',
          borderRadius: '60px',
          padding: '0 20px',
        },

        '.btn-small': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          fontSize: '16px',
          height: '36px',
          minWidth: '110px',
          borderRadius: '60px',
          padding: '0 15px',
        },

        '.btn-tiny': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          fontSize: '14px',
          height: '32px',
          minWidth: '80px',
          borderRadius: '60px',
          padding: '0 15px',
        },
      });
    }),
  ],
};
