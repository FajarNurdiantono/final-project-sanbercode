/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        bold: ['Roboto-Bold', 'Helvetica', 'Arial', 'sans-serif'],
        extrabold: ['Roboto-Black', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        800: '800',
        700: '700',
        600: '600',
        500: '500',
        400: '400',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
