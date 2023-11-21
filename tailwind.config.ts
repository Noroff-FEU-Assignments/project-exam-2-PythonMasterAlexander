import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
} satisfies Config;
