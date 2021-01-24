module.exports = {
  purge: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      body: ["Roboto", "sans-serif"],
      display: ["Roboto", "sans-serif"],
      sans: ["Roboto", "sans-serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
