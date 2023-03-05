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
      "teal-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
      none: "none",
    },
    colors: {
      transparent: "transparent",
      black: {
        500: "#4F5665",
        600: "#0B132A",
      },
      green: {
        500: "#ffb371",
      },
      gray: {
        50: "#f9fafb",
        100: "#EEEFF2",
        400: "#AFB5C0",
        500: "#DDDDDD",
      },
      white: colors.white,
      orange: colors.orange,
      teal: colors.teal,
      cyan: colors.cyan,
      zinc: colors.zinc,
    },
    extend: {
      colors: {
        primary: {
          100: "#B4EAEC",
          300: "#7DCFD3",
          500: "#51B2B6",
          700: "#319398",
          900: "#18858A",
        },
        secondary: {
          100: "#FFDEC2",
          300: "#FFC696",
          500: "#FFB371",
          700: "#FC9F50",
          900: "#E57F27",
        },
        tertiary: {
          100: "#C6BEF0",
          300: "#9A8DDD",
          500: "#7566C6",
          700: "#5646AE",
          900: "#3D2B9E",
        },
        quaternary: {
          100: "#FFF3C2",
          300: "#FFEA96",
          500: "#FFE271",
          700: "#FCD950",
          900: "#E5BE27",
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
