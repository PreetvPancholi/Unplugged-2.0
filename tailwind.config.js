/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'safari-dark': '#0a0f0d',
        'safari-darker': '#111816',
        'safari-green': '#166534',
        'safari-green-light': '#15803d',
        'safari-amber': '#d97706',
        'safari-amber-light': '#f59e0b',
        'safari-cream': '#f5f0e8',
        'safari-muted': '#6b7280',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'jungle-gradient': 'linear-gradient(135deg, #0a0f0d 0%, #0d1f17 50%, #0a0f0d 100%)',
        'amber-gradient': 'linear-gradient(135deg, #d97706, #92400e)',
        'card-gradient': 'linear-gradient(145deg, #111816, #0d1a12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
