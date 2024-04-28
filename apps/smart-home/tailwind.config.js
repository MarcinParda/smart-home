const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111622',
        gray: {
          300: '#38404B',
          500: '#222D37',
          800: '#161C27',
        },
        yellow: '#FFED48',
        purple: '#825DFF',
        green: '#00FEB6',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
