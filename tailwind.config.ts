import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grape: "rgba(var(--grape))",
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        card:  "rgba(var(--card))",
        "copy-primary":  "rgba(var(--copy-primary))",
        "copy-secondary": "rgba(var(--copy-secondary))",
        cta: "rgba(var(--cta))",
        "cta-active": "rgba(var(--cta-active))",
        "cta-text": "rgba(var(--cta-text))"
      },
    },
  },
  plugins: [],
} satisfies Config;
