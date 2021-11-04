module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      'title': ['Cabin Sketch',],
      'body': ['Noto Sans JP', 'Kosugi Maru','sans-serif'],
    },
    extend: {
      colors:{
        'primary': '#4b57db',
        'brown': '#62b0ff',
        indigo: '#5c6ac4',
      },
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
