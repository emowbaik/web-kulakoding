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
        primary: "#F5F8FD",
        secondary: "#212538",
        tertiary: "#13172E",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
