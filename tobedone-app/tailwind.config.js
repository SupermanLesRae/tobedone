module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false,
  theme: {
    extend: {
       colors: {
        'fluorescent': '#12C9CC',
      },
    },
  },
  variants: {},
  plugins: [],
};