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
        pacific_blue: '#1dbbc3',
      },
    },
  },
  variants: {},
  plugins: [],
};