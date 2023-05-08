module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false,
  theme: {
     fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    extend: {
       colors: {
        'fluorescent': '#12C9CC',
      },
    },
  },
  variants: {},
  plugins: [],
};