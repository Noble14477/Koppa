/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        primary: "#F27136",
        secondary: "#626264",
        accent: "#231F20",
        background: "#FFFFFF",
        textColor: "#231F20",
        rgb1: "rgba(8, 14, 44, 0.7)",
        rgb2: "rgba(8, 14, 44, 0.9)",
      },
      backgroundImage:{
        conBg: "url('../src/assets/pictures/conBg2.avif')",
        sketch1: "url('../src/assets/pictures/sketch1.jpg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

