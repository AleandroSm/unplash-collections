/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto-fit': 'repeat(auto-fit, minmax(400px, 1fr))',
      },
    },
  },
  plugins: [],
}

