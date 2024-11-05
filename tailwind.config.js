/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/main/resources/templates/*.html', './src/main/resources/templates/**/*.svg'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'taming-thymeleaf-green': 'darkseagreen'
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};

