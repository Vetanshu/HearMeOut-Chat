/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        lobster:["Lobster Two", "sans-serif"],
        satisfy:["Satisfy", "cursive"]
      }
    },
  },
  plugins: [require("daisyui")],
}

