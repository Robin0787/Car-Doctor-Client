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
    backgroundImage: {
      "checkoutBanner": "url('/src/assets/images/checkout/checkout.png')"
    },
  },
  plugins: [require('daisyui')],
}

