/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F0F4F8",
          100: "#D9E2EC",
          200: "#BCCCDC",
          300: "#9FB3C8",
          400: "#829AB1",
          500: "#627D98",
          600: "#486581",
          700: "#334E68",
          800: "#102A43",
          900: "#0A192F",
          950: "#060F1E",
        },
        gold: {
          50: "#FFFDF0",
          100: "#FFF9C4",
          200: "#FFF185",
          300: "#FFE647",
          400: "#FFD700",
          500: "#D4AF37",
          600: "#B38F24",
          700: "#8C6D14",
          800: "#664F0A",
          900: "#403104",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #B38F24 100%)",
        "gold-text": "linear-gradient(135deg, #FFF185 0%, #FFD700 30%, #D4AF37 70%, #9B7B1B 100%)",
        "navy-gradient": "linear-gradient(135deg, #0A192F 0%, #102A43 50%, #060F1E 100%)",
        "hero-overlay": "radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 25, 47, 0.85) 60%, rgba(6, 15, 30, 0.98) 100%)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
