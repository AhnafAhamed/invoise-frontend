module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-purple": "#F4F3FA",
        "dark-purple": "#4C49ED",
        "main-gray": "#A1A0BD",
        "main-black": "#000000",
        "main-red": "#D14F4F",
      },
    },
    fontFamily: {
      inter: ["inter", "sans-serif"],
    },
  },
  plugins: [],
};
