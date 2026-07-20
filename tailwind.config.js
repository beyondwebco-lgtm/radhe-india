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
          950: '#071324',
          900: '#0B1E36',
          800: '#0F2B4D',
          700: '#143864',
          600: '#1B4A82',
        },
        ocean: {
          400: '#38BDF8',
          500: '#0284C7',
          600: '#0369A1',
          700: '#075985',
        },
        teal: {
          400: '#2DD4BF',
          500: '#00A896',
          600: '#0D9488',
          700: '#0F766E',
        },
        gold: {
          300: '#FDE047',
          400: '#EAB308',
          500: '#D4AF37',
          600: '#CA8A04',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
