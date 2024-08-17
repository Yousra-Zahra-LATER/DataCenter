/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#B4E380',  // Nom de la couleur personnalisée et sa valeur hex
        'custom-success': '#88D66C',
      },
    },
  },
  plugins: [],
}