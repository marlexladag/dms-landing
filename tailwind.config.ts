import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#053B61',
        'primary-dark': '#032a47',
        'primary-light': '#0a5a94',
        accent: '#FE7702',
        'accent-dark': '#e56a00',
        'background-light': '#f7f8fa',
        'background-dark': '#0c1a2a',
        'navy-dark': '#021e36',
        'navy-light': '#0a3050',
        danger: '#ef4444',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        glow: '0 0 15px rgba(5, 59, 97, 0.3)',
        'glow-accent': '0 0 15px rgba(254, 119, 2, 0.3)',
      },
    },
  },
  plugins: [typography],
} satisfies Partial<Config>
