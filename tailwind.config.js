/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#32227E',
        secondary: '#211754',
        bghero: '#18103CA8',
        accent: '#924FF3',
        yellow: '#FEC60F',
        orange: '#FF7547',
        gray: '#808080',
        blue: '#211754',
      },
      fontFamily: {
        sans: ['Alexandria', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
