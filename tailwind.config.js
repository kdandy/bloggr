/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      overpass: ["Overpass"],
      ubuntu: ["Ubuntu"],
    },
    extend: {
      colors: {
        lRed: "hsl(353, 100%, 62%)",
        vlRed: "hsl(13, 100%, 72%)",
        vdBlue: "hsl(208, 49%, 24%)",
        footer: "hsl(240, 10%, 16%)",
      },
    },
  },
  plugins: [],
};
