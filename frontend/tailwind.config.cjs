/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "riso-red": "#FF665E",
        "riso-blue": "#0078BF",
        "riso-green": "#00A95C",
        "riso-purple": "#765BA7",
        "riso-yellow": "#FFE800",
        "riso-teal": "#00838A",
        "riso-gray": "#B8C7C4",
        "riso-red-dark": "#AB4540",
        "riso-blue-dark": "#005486",
        "riso-green-dark": "#007640",
        "riso-purple-dark": "#534075",
        "riso-yellow-dark": "#B3A200",
        "riso-teal-dark": "#005C61",
        "riso-gray-dark": "#252827",
      },
      borderWidth: {
        10: "10px",
        16: "16px",
      },
      fontFamily: {
        display: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
