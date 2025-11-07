/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        'default': '500ms',
      }
    },
  },
  plugins: [],
}