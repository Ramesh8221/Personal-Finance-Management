/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1120',
          800: '#0F172A',
          700: '#1E293B',
          600: '#334155',
          500: '#475569',
        },
        finance: {
          income: '#10B981',    // green
          incomeDark: '#059669',
          expense: '#EF4444',   // red
          expenseDark: '#DC2626',
          saving: '#059669',
          accent: '#6366F1',    // indigo/purple
          accentBlue: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
