/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandColor: 'rgba(255, 77, 0, 1)',
        background: 'rgba(255, 77, 0, 0.6)',
        backgroundMedium: '#FFE9E0',
        backgroundLight: 'rgba(255, 233, 224, 0.6)',
        textLight: 'rgba(0, 0, 0, 0.81)',
        textLight2: 'rgba(149, 145, 144, 1)',
        textBold: 'rgba(0, 0, 0, 1)',
        white: '#FFFFFF',
        logoGradient2: 'rgba(37, 73, 211, 1)',
        logoGradient3: 'rgba(255, 81, 6, 1)',
        logoGradient4: 'rgba(252, 80, 5, 1)',
      },
      fontFamily: {
        body: 'Space Grotesk, sans-serif',
        logo: 'Oleo Script, cursive',
      }
    }
  },
  plugins: []
};
