/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'soccerblue': '#004AAB',
        'soocerred': '#FB2A2D',
      }
    },
  },
  plugins: [],
}

