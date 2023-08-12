const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./indexModule/components/*.js",
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
    "./slices/**/*.js",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
      "primary-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
      none: "none",
    },
    colors: {
      transparent: "transparent",
      gray: colors.slate,
      white: colors.white,
    },
    extend: {
      colors: {
        primary: {
          50: "#faffff",
          light: "#b2ebf2",
          DEFAULT: "#26c6d4",
          dark: "#006064",
        },
        secondary: {
          light: "#FFECB3",
          DEFAULT: "#FFCA28",
          dark: "#FF6F00",
        },
        tertiary: {
          light: "#D1C4E9",
          DEFAULT: "#7E57C2",
          dark: "#311B92",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
};
