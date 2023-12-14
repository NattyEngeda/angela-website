/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d5ac89",
        secondary: "#cdab8a",
        third: "#dcccbc",
      },
    },
  },
  plugins: [],
}
