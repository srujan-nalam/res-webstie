/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF6B35',
        'light-orange': '#FF8C5A',
        'off-white': '#FFF9F5',
        'gold': '#FFD700',
        'text-dark': '#333333',
        'text-light': '#666666',
        'white': '#FFFFFF',
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
}

