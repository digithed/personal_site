/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const brandColor = colors.indigo;
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@ninjha01/nitro-ui/dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: brandColor
      },
    },
  },
  plugins: [],
}
