/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
            'custom': ['"Manrope"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }