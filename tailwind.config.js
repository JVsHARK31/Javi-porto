/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sakura: {
          50: '#fff5f7',
          100: '#ffe3ed',
          200: '#ffc7db',
          300: '#ff9cc1',
          400: '#ff6ba7',
          500: '#ff4d94',
          600: '#ff1d7a',
          700: '#db005e',
          800: '#b30052',
          900: '#8a0043',
        },
        cream: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f1ea',
          300: '#ebe3d5',
          400: '#dfd3bd',
          500: '#d1c2a4',
        },
        jade: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-noto-serif-jp)', 'serif'],
      },
      backgroundImage: {
        'sakura-gradient': 'linear-gradient(135deg, #fff5f7 0%, #ffe3ed 50%, #ffc7db 100%)',
        'sakura-dark': 'linear-gradient(135deg, #1a0a0f 0%, #2d1520 50%, #4a2033 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fall': 'fall 10s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-cream-50',
    'from-sakura-400',
    'to-pink-500',
    'text-sakura-500',
    'dark:bg-gray-900',
  ],
}
