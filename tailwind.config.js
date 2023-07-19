module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { "900_0c": "#0000000c" },
        white: { A700: "#ffffff" },
        amber: { 500: "#fbbc05" },
        orange: {
          A700: "#ff6c0a",
          A700_7f: "#ff6c0a7f",
          A700_26: "#ff6c0a26",
          A700_33: "#ff6c0a33",
        },
        colors: "#ff6c0aff",
        gray: { 50: "#f8f8f8", 400: "#c2c2c2", 600: "#7c7c7c" },
        red: { 500: "#ea4335" },
        blue: { 700: "#1967d2", A200: "#4285f4" },
        blue_gray: { 900: "#333333", "900_01": "#33363f" },
        green: { 600: "#34a853", 800: "#188038" },
      },
      fontFamily: { generalsans: "General Sans", satoshi: "Satoshi" },
      textShadow: { ts: "0px 0px  8px #ff6c0a33" },
      boxShadow: {
        bs2: "0px 0px  8px 0px #ff6c0a7f",
        bs1: "0px 2px  8px 0px #ff6c0a26",
        bs: "0px 2px  8px 0px #0000000c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
