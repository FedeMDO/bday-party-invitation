import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      darkMode: 'false',
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-12deg) scale(1.5)' },
          '50%': { transform: 'rotate(12deg) scale(1)' },
        },
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
