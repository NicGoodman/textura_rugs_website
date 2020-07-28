module.exports = {
  purge: {
    enabled: false,
    content: ['./templates/**/*.html',
      './templates/**/*.twig',
    ],
  },
  theme: {
    extend: {
      colors: {
        'rug-black': '#11111e',
        'rug-dark-blue': '#353a49',
        'rug-yellow': '#feba40',
        'rug-grey': '#c6c6c6',
        'rug-light-blue': '#bde3ef',
        'rug-white': '#fffdfd',
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '2/3-screen': '66vh',
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '2/3-screen': '66vh',
      },
    },
    fontFamily: {
      'nexa-rust-sans': ['NexaRustSans-Book', 'sans-serif'],
      'bioRhyme': ['BioRhyme', 'serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
    }
  },
  variants: {
    zIndex: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
}