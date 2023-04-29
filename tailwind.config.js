/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1482D2',
        // secondary: '#F3F3F3',
        darkPrimary: '#0E5B93'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus', 'group-hover']
    },
  },
  plugins: [],
}
