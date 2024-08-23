/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        recipeText: "#2d334a",
        recipeStroke: "#094067",
      },
      backgroundColor: {
        recipeAccent: "#ffffffe6",
      },
      fontFamily: {
        recipeFont: ["Roboto", "sans-serif"],
      },
      scrollbar: ["rounded"],
    },
  },
  plugins: [],
};
