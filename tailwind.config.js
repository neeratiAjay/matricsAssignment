/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,txs}'],
  theme: {
    extend: {
      boxShadow: {
        'inner-red': 'inset 0 4px 6px rgba(255, 0, 0, 0.5)',
        'inner-blue': 'inset 0 2px 4px #4CDDFD',
        'inner-green': 'inset 0 4px 6px rgba(0, 255, 0, 0.5)',
        'inner-custom': 'inset 0 2px 4px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
