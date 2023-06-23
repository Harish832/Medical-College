/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        alef: ['Alef', 'sans-serif'],
        didact: ['Didact Gothic', 'sans-serif'],
        pavanam: ['Pavanam', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        titi: ['Titillium Web', 'sans-serif'],
      },
      boxShadow: {
        'custom': 'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;',
      },
      backgroundImage: {
        "bw-pic1": "url('./assets/logo.png')",
      },
    },
  },
  plugins: [],
}