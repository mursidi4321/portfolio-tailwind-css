/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary : '#0f766e',
        secondary: '#64748b',
        dark : '#0f172a'
      },
      screen: {
        'xl' : '1320px'
      }
    },
    
  },
  plugins: [],
}

