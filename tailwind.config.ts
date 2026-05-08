import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:    '#0a0720',
          navy:    '#15103a',
          purple:  '#2d1b69',
          violet:  '#5b21b6',
          magenta: '#7c3aed',
          blue:    '#2563eb',
          sky:     '#0ea5e9',
          yellow:  '#facc15',
          gold:    '#f59e0b',
          cyan:    '#22d3ee',
          light:   '#e0e7ff',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'system-ui', 'sans-serif'],
      },
      animation: {
        'twinkle':      'twinkle 3s ease-in-out infinite',
        'float':        'float-ud 3.5s ease-in-out infinite',
        'gold-glow':    'gold-glow 2.5s ease-in-out infinite',
        'phone-pulse':  'phone-pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'hero-glow':    'hero-glow 4s ease-in-out infinite',
        'spin-slow':    'spin 10s linear infinite',
        'bounce-slow':  'bounce 2.5s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(1)' },
          '50%':      { opacity: '1',    transform: 'scale(1.4)' },
        },
        'float-ud': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        'gold-glow': {
          '0%, 100%': { boxShadow: '0 0 16px rgba(250,204,21,0.45), 0 4px 20px rgba(0,0,0,0.3)' },
          '50%':      { boxShadow: '0 0 36px rgba(250,204,21,0.85), 0 4px 24px rgba(0,0,0,0.35)' },
        },
        'phone-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.65)' },
          '60%':      { boxShadow: '0 0 0 22px rgba(34,197,94,0)' },
        },
        'hero-glow': {
          '0%, 100%': { opacity: '0.35' },
          '50%':      { opacity: '0.75' },
        },
      },
      backgroundImage: {
        'hero-gradient':  'radial-gradient(ellipse at 50% 30%, #2d1b69 0%, #15103a 50%, #0a0720 100%)',
        'card-gradient':  'linear-gradient(135deg, rgba(45,27,105,0.5) 0%, rgba(21,16,58,0.7) 100%)',
        'gold-gradient':  'linear-gradient(135deg, #facc15 0%, #f59e0b 100%)',
        'cyan-gradient':  'linear-gradient(135deg, #22d3ee 0%, #60a5fa 100%)',
        'green-gradient': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
      },
    },
  },
  plugins: [],
}

export default config
