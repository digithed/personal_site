/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const brandColor = colors.indigo;
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
