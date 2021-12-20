module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true, // center
      padding: "2rem", // padding
    },
    plugins: [
      require("@tailwindcss/forms"),
    ],
    extends: {
      zIndex: {
        '1000': '1000',
      }
    }
  },
};
