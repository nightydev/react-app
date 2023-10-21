/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        content: "65px",
      },
    },
  },
  plugins: [],
}

