/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bannerColo: '#FAE3B6',
        hoverBtnColo: '#FDBB57',
        countColo: '#FEECC8',
        fotterBgColo: '#CFA485',
    },
    fontFamily: {
      pop: ['Poppins', 'sans-serif'],
      fra: ['Libre Franklin', 'sans-serif'],
      pod: ['Podkova', 'serif'],
    },
    width: {
      container: '1320px',
    },
  },
  plugins: [],
}
}

