/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'modal-overlay': 'rgba(38, 38, 38, 0.27)',
        'modal-btn-close': '#F23C3C'
      }
    },
  },
  plugins: [],
}
