module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
