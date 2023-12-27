/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#1A2C38",
        secondary: "#213743",
        tertiary:"#071D2A"
      }
    },
  },
  plugins: [],
}

