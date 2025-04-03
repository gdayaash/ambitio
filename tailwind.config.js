/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all files
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        grot: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".animate-gradient": {
          "background-size": "200% 200%",
          animation: "gradientMove 3s ease infinite",
        },
        "@keyframes gradientMove": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      });
    },
  ],
};
