/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    screens: {
      sm: '500px',
      md: '900px',
      lg: '1400px',
      xl: '1800px',
    },
    fontFamily: {
      jalnanTtf: ['JalnanTtf', 'JalnanOTF'],
    },
    opacity: {
      0: '0',
      2: '0.2',
      4: '0.4',
      6: '0.6',
      8: '0.8',
      10: '1',
    },
    backgroundColor: {
      bg: {
        10: 'rgba(22, 22, 22)',
        9: 'rgba(22, 22, 22,.9)',
        8: 'rgba(22, 22, 22,.8)',
        7: 'rgba(22, 22, 22,.7)',
        6: 'rgba(22, 22, 22,.6)',
        5: 'rgba(22, 22, 22,.5)',
        4: 'rgba(22, 22, 22,.4)',
        3: 'rgba(22, 22, 22,.3)',
        2: 'rgba(22, 22, 22,.2)',
        1: 'rgba(22, 22, 22,.1)',
      },
      itemBg: 'rgba(53, 53, 53, 0.5)',
    },
    borderRadius: {
      default: '14px',
    },
    colors: {
      titleText: '#eeeeee',
      subTitleText: '#5d5d5d',
      itemText: '#5d5d5d',
      text: '#eeeeee',
    },
    extend: {},
  },
  plugins: [],
}
