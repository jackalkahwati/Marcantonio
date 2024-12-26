/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#1a2e44',
        'gold': '#ffd700',
        background: 'white',
        foreground: '#1a2e44',
        primary: {
          DEFAULT: '#ffd700',
          foreground: '#1a2e44',
        },
        secondary: {
          DEFAULT: '#1a2e44',
          foreground: 'white',
        },
        muted: {
          DEFAULT: '#f3f4f6',
          foreground: '#6b7280',
        },
      },
    },
  },
  plugins: [],
}
