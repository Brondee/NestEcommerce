/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dullPink: "#F6F1FB",
        darkPink: "#CC9FB2",
        dullBlue: "#F0F7FF",
      },
      fontSize: {
        40: "40px",
        50: "50px",
        60: "60px",
        100: "100px",
      },
      borderRadius: {
        "4xl": "38px",
      },
      borderWidth: {
        6: "6px",
        7: "7px",
      },
      width: {
        "28per": "28%",
      },
      fontFamily: {
        openSans: "'Open Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
