module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'containers/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.js',
    ],
  },
  theme: {
    extend: {
      colors: {
        gray: {
          80: '#E5F0EE',
          650: '#5B6866',
        },
        purple: {
          150: '#EBEDFF',
          350: 'var(--green-350)',
        },
      },
      textColor: {
        primary: '#012D26',
        secondary: '#5B6866',
        terciary: '#3948FF',
      },
      borderRadius: {
        xl: 'var(--border-xl)',
        full: 'var(--border-full)',
      },
      opacity: {
        70: 'var(--opacity-70)',
      },
      zIndex: { 20: 20 },
    },
    borderRadius: {
      xl: '0.625rem',
    },
  },
}
