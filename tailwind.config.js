/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "colors-colors-zinc-950": "#09090b",
        "colors-zinc-50": "#fafafa",
        gainsboro: "#e0e0e0",
        "colors-blue-600": "#2563eb",
        ghostwhite: "#fbfbff",
        dodgerblue: "#4d8aff",
        yellowgreen: "#84cc16",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
        "text-base-normal": "Inter",
      },
      borderRadius: {
        "781xl": "800px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      "21xl": "40px",
      "13xl": "32px",
      "77xl": "96px",
      "10xl": "29px",
      "29xl": "48px",
      "9xl": "28px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
