import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#1F4D36',
        'brand-brown': '#8B5A2B',
        'brand-orange': '#F97316',
        'brand-charcoal': '#222222',
      },
    },
  },
  plugins: [],
};
export default config;
