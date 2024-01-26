/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{.js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        "theme-color": "#344256",
      },
      fontSize: {
        xs: ["14px"],
        sm: ["16px"],
        base: ["21px"],
        "2xl": "28px",
      },
    },
  },
  plugins: [],
};
