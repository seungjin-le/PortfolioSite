/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '500px',
      md: '900px',
      lg: '1400px',
      xl: '1800px',
    },
    fontFamily: {
      sans: ['JalnanTtf', 'JalnanOTF'],
      serif: ['JalnanTtf', 'JalnanOTF'],
    },
    opacity: {
      '0': '0',
      '2': '0.2',
      '4': '0.4',
      '6': '0.6',
      '8': '0.8',
      '10': '1',
    },
    extend: {},
  },
  plugins: [],
}
