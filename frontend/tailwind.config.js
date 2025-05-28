/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'system': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['"SF Mono"', '"Menlo"', '"Monaco"', '"Consolas"', 'monospace'],
      },
      backdropBlur: {
        'sm': '6px',
      }
    },
  },
  plugins: [],
}
