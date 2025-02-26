import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EB0A1E",
        textDark: "#191919",
        titleGray: "#373737",
        grayLight: "#F7F7F7",
        black: "#000000",
        grey: "#CCC",
        menuGray: "#EFEEEF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        sm: "14px",
        md: "20px",
        lg: "28px",
        xl: "50px",
      },
    },
  },
  plugins: [],
} satisfies Config;
