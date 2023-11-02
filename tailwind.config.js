/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      'height': '6.25rem',
      colors: {
        'bg-yellow': '#fff159'
      },
      gridTemplateColumns: {
        'custom': '162px minmax(340px, 580px) minmax(350px, 390px)'
      },
      gridTemplateRows: {
        'custom': '40px 28px'
      },
      boxShadow: {
        'custom': '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        'custom-hover': '0 8px 16px 0 rgba(0,0,0,.1)'
      },
      backgroundColor: {
        'custom': '#ebebeb'
      }
    },
  },
  plugins: [],
}

