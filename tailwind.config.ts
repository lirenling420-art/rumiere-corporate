import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#fafaf8',
        'beige': '#f5f1ed',
        'greige': '#d4c5b9',
        'charcoal': '#3a3a3a',
        'gold': '#c9a961',
        'light-gray': '#e8e6e3',
        'soft-gray': '#d9d5d0',
      },
      fontFamily: {
        'serif': ['"Noto Serif JP"', 'serif'],
        'sans': ['"Noto Sans JP"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
