/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx',
    './*.{js,jsx,ts,tsx}',
    './**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dragon: 'dragon',
        space: 'space-mono',
        vermin: 'vermin-vibes',
      },
    },
  },
  plugins: [],
};
