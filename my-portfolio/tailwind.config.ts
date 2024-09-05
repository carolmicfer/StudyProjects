import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#F7FBEF',
        'secondary': '#B1C1C0',
        'tertiary': '#DCEDB9',
        'quaternary': '#D2E59E',
        'quinary': '#CBD081',
        'senary': '#918868',
        'septenary': '#23211A',
      }
    },
  },
  plugins: [],
};
export default config;
