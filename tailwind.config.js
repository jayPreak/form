/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
    fontWeight: {
      "extra-light": 300,
      light: 400,
      regular: 500,
      medium: 600,
      "semi-bold": 700,
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "32px",
      "5xl": "36px",
      "6xl": "40px",
    },
  },
  plugins: [],
};
