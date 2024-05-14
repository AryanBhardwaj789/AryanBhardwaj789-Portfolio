/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*","./html/*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
      },
      colors: {
        'eminence': '#711B88',
        'magnolia' : '#F7F0F5',
        'plum' : '#F6F4F4',
        'blackolive' : '#292E1E',
      },
      spacing: {
        '128' : '28rem',
        '200' : '46rem',
      },
      brightness: {
        25: '.25',
        30: '.30',
        35: '.35',
        40: '.40',
        45: '.45'
      },
      fontSize: {
        base: ['16px', '26px'],
      },
      animation: {
        'spin-slow': 'spin 1s ease-in-out 1',
      },
      backgroundImage: {
        'background-projects' : "url('/assets/images/BG-Projects-Dark.jpg')"
      }
    },
  },
  plugins: [],
}

