/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#8b5cf6',
        secondary: '#f43f5e',
      }
    },
  },
  darkMode: 'class',
}
