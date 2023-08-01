/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/Components/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}