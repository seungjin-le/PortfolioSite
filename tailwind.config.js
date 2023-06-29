/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  mode: 'jit',
  theme: {
    screens: {
      sm: {max: '500px'},
      md: {max: '900px'},
      lg: {max: '1200px'},
      xl: {max: '1600px'},
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
      itemBg: 'rgba(53, 53, 53, 0.5)',
      pageBg: 'rgba(22, 22, 22,.1)',
      cursor: 'rgba(255, 255, 255,.1)',
    },
    backgroundImage: {
      header: 'linear-gradient(0deg, hsla(0, 0%, 10%, 0), #161616)',
    },
    borderRadius: {
      default: '14px',
      tags: '4px',
    },
    colors: {
      titleText: '#eeeeee',
      subTitleText: '#5d5d5d',
      itemText: '#5d5d5d',
      text: '#eeeeee',
    },
    boxShadow: {
      cursor: '0 0 30px 15px rgba(255, 255, 255, 0.7)',
    },
    extend: {
      transitionProperty: {
        default: '.5s',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
