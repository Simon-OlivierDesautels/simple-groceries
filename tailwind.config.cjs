/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#121314',
      'black-light': '#202123',
      'orange': '#C96720',
      'white': '#ffffff',
      'grey': '#4A4F55',
      'grey-light': '#989FA7',
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
