const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},

    // do not style with tailwind
    borderRadius: {},
    colors: {},
    boxShadow: {},
    borderColor: {},
    fontFamily: {
      sans: ['Lexend', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      display: defaultTheme.fontFamily.display,
      body: defaultTheme.fontFamily.body,
    },
  },
  plugins: [],
};
