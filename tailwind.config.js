module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#030303",
        "white-primary": "#e6e5e5",
        "light-dark": {
          50: "#252727",
          70: "#383737",
        },
        background: "#f7f4f4",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "noto-sans": ["Noto Sans", "sans-serif"],
        "familjen-grotesk": ["Familjen Grotesk", "sans-serif"], // Added Familjen Grotesk
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
