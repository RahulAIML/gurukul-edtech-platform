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
        gurukul: {
          purple: {
            50: "#FAF5FF",
            100: "#F3E8FF",
            200: "#E9D5FF",
            300: "#D8B4FE",
            400: "#C084FC",
            500: "#A855F7",
            600: "#9333EA",
            700: "#7E22CE",
            800: "#6B21A8",
            900: "#581C87",
            950: "#3B0764",
          },
          orange: {
            50: "#FFF7ED",
            100: "#FFEDD5",
            200: "#FED7AA",
            300: "#FDBA74",
            400: "#FB923C",
            500: "#F97316",
            600: "#EA580C",
            700: "#C2410C",
            800: "#9A3412",
            900: "#7C2D12",
          },
          gold: {
            400: "#FBBF24",
            500: "#F59E0B",
            600: "#D97706",
          },
          blue: {
            50: "#F0F9FF",
            100: "#E0F2FE",
            200: "#BAE6FD",
            300: "#7DD3FC",
            400: "#38BDF8",
            500: "#0EA5E9",
            600: "#0284C7",
            700: "#0369A1",
            800: "#075985",
            900: "#0C4A6E",
          },
          navy: {
            800: "#0E1B38",
            900: "#0A1128",
            950: "#060B19",
            card: "#0C1633",
            cardBorder: "#1B2A56",
            tableHeader: "#0D1E42",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(124, 58, 237, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'glow-purple': '0 0 30px rgba(147, 51, 234, 0.35)',
        'glow-cyan': '0 0 30px rgba(14, 165, 233, 0.35)',
        'glow-gold': '0 0 25px rgba(245, 158, 11, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #FAF5FF 50%, #F5F3FF 100%)',
        'purple-gradient': 'linear-gradient(135deg, #6B21A8 0%, #4C1D95 100%)',
        'purple-button': 'linear-gradient(135deg, #7E22CE 0%, #581C87 100%)',
        'orange-gradient': 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
        'gold-button': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
