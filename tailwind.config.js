/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'vesper-white': '#ffffff',
        'vesper-mist': '#f5f5f5',
        'vesper-pale': '#e5e7eb',
        'vesper-grey': '#6b7280',
        'vesper-dark': '#9ca3af',
        'vesper-navy': '#6b7280',
        'vesper-blue': '#9ca3af',
      },
      fontFamily: {
        'display': ['Helvetica', 'Arial', 'sans-serif'],
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};