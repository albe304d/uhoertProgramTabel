/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F1CBFF",

          secondary: "#F5F8A6",

          accent: "#ADE0FF",

          neutral: "#7D7259",

          "base-100": "#ffe4e6",

          info: "#2463EB",

          success: "#16A249",

          warning: "#DB7706",

          error: "#DC2828",
        },
      },
    ],
  },
};
