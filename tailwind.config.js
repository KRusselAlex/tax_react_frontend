/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d4b5f",
        secondaryColor: "#F8F9FA",
        third: '#17232d',
        buttonColor: "#325872",
        buttonHover: "#71a3bf",
      }
    },
  },
  plugins: [],
}