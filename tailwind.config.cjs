/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var","Helvetica Neue", "ui-sans-serif", 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', ],
      },
    },

    colors: {
      primary: {
        light: colors.sky["500"],
        DEFAULT: colors.sky["500"],
        dark: colors.sky["800"],
        200: colors.sky["200"],
        300: colors.sky["300"],
        400: colors.sky["400"],
        700: colors.sky["700"],
        800: colors.sky["800"],
        900: colors.sky["900"],
      },
      secondary: colors.yellow,
      neutral: colors.gray,
      gray: {
        light: colors.slate["500"],
        DEFAULT: colors.slate["500"],
        dark: colors.slate["800"],
        100: colors.slate["100"],
        200: colors.slate["200"],
        300: colors.slate["300"],
        400: colors.slate["400"],
        500: colors.slate["500"],
        600: colors.slate["600"],
        700: colors.slate["700"],
        800: colors.slate["800"],
        900: colors.slate["900"],
      },
    },
  },
  plugins: [],
});
