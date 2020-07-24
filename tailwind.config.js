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
    },
    fontFamily: {
      'nexa-rust-sans': ['', 'sans-serif'],
      'bioRhyme': ['', 'serif'],
      'quicksand': ['', 'sans-serif'],
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