/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "riso-red": "#FF665E",
      "riso-blue": "#0078BF",
      "riso-green": "#00A95C",
      "riso-purple": "#765BA7",
      "riso-yellow": "#FFE800",
      "riso-teal": "#00838A",
      "riso-black": "#000000",
    },

    extend: {
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
