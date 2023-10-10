/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'second' : '#14191F',
        'third' : '#171E26',
        
      },
      textColor: {
    

      },

      screens: {
        'm': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      
    },
  },
  plugins: [],
}

