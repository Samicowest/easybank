/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
        grayBlue: "hsl(233, 8%, 62%)",
        lightGrayb: "hsl(220, 16%, 96%)",
        veryLightG: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        xxmd: "900px",
        xmd: "700px",
        xsm: "402px",
      },
    },
  },
  plugins: [],
};
