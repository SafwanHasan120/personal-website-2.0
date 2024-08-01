/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14ddac",
        "primary-content": "#000000",
        "primary-dark": "#10ae88",
        "primary-light": "#37edc1",

        secondary: "#4714dd",
        "secondary-content": "#f5f2fe",
        "secondary-dark": "#3810ae",
        "secondary-light": "#6537ed",
        
        background: "#151e1c",
        foreground: "#202d2a",
        border: "#354b45",
        foreforeground: "#354b46",

        copy: "#fbfcfc",
        "copy-light": "#d2dfdc",
        "copy-lighter": "#96b5ae",
      },
      fontFamily: {
        'main': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'], // Added Poppins
      },
    },
  },
  plugins: [],
}

