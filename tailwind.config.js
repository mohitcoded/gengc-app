/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gengc-purple': '#8B5CF6',
        'gengc-pink': '#EC4899',
        'gengc-cyan': '#06B6D4',
        'gengc-yellow': '#FBBF24',
        'gengc-dark': '#0F0F0F',
        'gengc-darker': '#050505',
      },
      backgroundImage: {
        'gradient-gengc': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #06B6D4 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0F0F0F 0%, #050505 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}