/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./themes/bewater-blog-theme/layout/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        'night': '#04051b',
        'latenight': '#0b0c24',
        'blue': '#00ffff'
      }
    },
  },
  plugins: [],
}

