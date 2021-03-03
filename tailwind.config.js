module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'charlie-brown': "url('/src/img/charlie-brown.svg')",
            })
        }
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
