/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        footerBg: "#1a2936"
      },
      fontWeight: {
        black: 1500
      },
      maxWidth: {
        "1024px": "1024px"
      }
    }
  },
  plugins: []
};
