import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#047857",
        secondary: "#10b981",
        accent: "#f8fafc",
        background: "#f0fdf4",
        foreground: "#064e3b",
      },
    },
  },
  plugins: [],
};

export default config;
