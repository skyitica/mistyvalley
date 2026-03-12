/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1e3a2f',
        cream: '#f5f0e8',
        sage: '#7a8c63',
        charcoal: '#1a1a1a',
        gold: '#c9a84c',
        bark: '#3d2b1f',
        mist: '#d4ddd5',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
    },
  },
  plugins: [],
};
