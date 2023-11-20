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
        white: "#f8fafc",
        black: "#1e293b",
      },
    },
  },
  plugins: [],
} satisfies Config;
