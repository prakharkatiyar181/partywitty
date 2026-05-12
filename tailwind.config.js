/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#7C3AED',
          pink: '#EC4899',
          orange: '#F97316',
        },
        surface: {
          DEFAULT: '#E4E4E4',
          card: 'rgba(255, 255, 255, 0.3)',
          cardHover: 'rgba(255, 255, 255, 0.4)',
          sidebar: 'rgba(245, 245, 245, 0.85)',
          modal: 'rgba(255, 255, 255, 0.85)',
        },
        muted: {
          DEFAULT: '#4F4F4F',
          strong: '#000000',
          faint: 'rgba(0, 0, 0, 0.4)',
        },
      },
      backgroundImage: {
        'gradient-g1': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
        'gradient-g2': 'linear-gradient(135deg, #EC4899 0%, #F97316 100%)',
        'gradient-g3': 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(228,228,228,0.5) 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(124, 58, 237, 0.2)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.2)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.05)',
        'card-lg': '0 16px 48px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'slide-in-up': 'slideInUp 0.4s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(124,58,237,0.6)' },
        },
        slideInLeft: {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
