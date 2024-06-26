/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", 'sans-serif'],
        jaro: ["jaro", 'sans-serif'],
        Poetsen: ["Poetsen One", 'sans-serif'],
        jose: ["Josefin Sans", 'sans-serif'],
      },
      animation:{
          "spin-slow": "spin 1s linear infinite"
      },
    },
  },
  plugins: [],
}

