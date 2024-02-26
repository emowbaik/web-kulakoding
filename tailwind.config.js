/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        lightmode: "#F3F3F3",
        darkmode: "#0C143C",
        kuning: "#FFAC0B",
        bluelight: "#3E9ACF",
        light: "#FFF",
        dark: "#212538",
        tertiary: "#13172E",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
