/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fourTwo': '4fr 2fr',
        "footerCol": '2fr 1fr 1fr 1fr 1fr'
      },
    },
  },
  plugins: [require('daisyui')],
}

