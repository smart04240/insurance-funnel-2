module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    screens: {
      ssm: '440px',
      mmd: '800px'
    },
    extend: {
      minHeight: {
        '125': '31.25rem'
      },
      maxWidth: {
        '25': '6.25rem',
        '200': '50rem',
      },
      minWidth: {
        '25': '6.25rem',
        '200': '50rem',
      },
      width: {
        '5.5/12': '47%',
        '2.5/5': '42%'
      },
      transitionDuration: {
        '400': '400ms'
      },
      boxShadow: {
        default: '0 0 5px #949494',
      },
      borderWidth: {
        '3': '3px'
      },
      fontSize: {
        '2.5xl': '1.8rem'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
