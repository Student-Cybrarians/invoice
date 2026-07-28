import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F7FA",
        surface: "#FFFFFF",
        primary: "#6495A3",
        secondary: "#599490",
        dark: "#204E4B",
        light: "#AFCDCB",
        muted: "#D3D1DE",
        border: "#E5E7EB",
        text: "#1E293B",
        "text-secondary": "#64748B",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(32, 78, 75, 0.06)",
        card: "0 4px 20px rgba(32, 78, 75, 0.08)",
      },
      transitionDuration: {
        250: "250ms",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.35s ease-out",
        slideIn: "slideIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
