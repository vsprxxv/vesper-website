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
        vesper: {
          white: '#FFFFFF',
          mist: '#F0F4F8',
          pale: '#D6E4F0',
          blue: '#5B82BC',
          navy: '#2C3E6B',
          dark: '#1A1A2E',
          grey: '#999999',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
