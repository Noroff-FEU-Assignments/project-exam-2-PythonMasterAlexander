import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"'],
      },
      colors: {
        white: "#f8fafc", //Light mode background color
        black: "#1e293b", //Dark mode background color
      },
    },
  },
  plugins: [],
} satisfies Config;
