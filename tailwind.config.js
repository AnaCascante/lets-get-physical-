/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#162660', // Color for primary
        secondary: '#D0E6FD', // Color for secondary
        tertiary: '#F1E4D1', // Third color
        quaternary: '#136ab9', // Fourth color
        quinary: '#2f96ca', // Fifth color
      },
    },
  },
  plugins: [],
};
