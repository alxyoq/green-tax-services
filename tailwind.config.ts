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
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          dark: "hsl(var(--color-primary-dark))",
          light: "hsl(var(--color-primary-light))",
        },
        secondary: "hsl(var(--color-secondary))",
        tertiary: "hsl(var(--color-tertiary))",
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        muted: "hsl(var(--color-muted))",
        accent: "hsl(var(--color-accent))",
        success: "hsl(var(--color-success))",
        warning: "hsl(var(--color-warning))",
        error: "hsl(var(--color-error))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-playfair)", "ui-serif", "Georgia"],
        body: ["var(--font-open-sans)", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideUpAndFade: "slideUpAndFade 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
