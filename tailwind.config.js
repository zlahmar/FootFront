/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'gunMetal' : '#2B3132',
      'eerieBlack' : '#18181C',
      'tiffanyBlue' : '#A8E1DC',
      'onyx' : '#393a3e',
      'powderBlue' : '#b2c7f0',
      'white' : '#ffffff',
      'gray':'#4f5459',
    },
    fontFamily: {
      title : ['Philosopher', 'sans-serif'],
      content : ['Mulish', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}