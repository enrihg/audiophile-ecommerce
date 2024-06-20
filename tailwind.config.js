/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': 'hsl(21, 94%, 75%)',
        'primary-200': 'hsl(22, 65%, 57%)', 
        'light-100': 'hsl(0, 0%, 100%)',
        'light-200': 'hsl(0, 0%, 98%)',
        'light-300': 'hsl(0, 0%, 95%)',
        'dark-800': 'hsl(0, 0%, 6%)',
        'dark-900': 'hsl(0, 0%, 0%)'
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      // backgroundImage: {
      //   'mobile-dark' : "url('/src/assets/images/bg-mobile-dark.jpg')",
      //   'mobile-light' : "url('/src/assets/images/bg-mobile-light.jpg')",
      //   'desktop-dark' : "url('/src/assets/images/bg-desktop-dark.jpg')",
      //   'desktop-light' : "url('/src/assets/images/bg-desktop-light.jpg')",
      // },
      // boxShadow: {
      //   'shadow': '0 4px 4px 0 rgb(0, 0, 0, 0.25)'
      // }
    },
  },
  plugins: [],
}

