/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        test: "#77a832",
      },
      fontFamily: {
        sans: ["Lufga", "sans-serif"],
      },
    },
  },

  plugins: [],
};
