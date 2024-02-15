/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        black : "#1E1E1E",
        blue : "#3E51FF",
        white : "#ffffff",
      },
      fontSize  : {
        xs : "12px",
        sm : "18px",
        base : "20px",
        lg : "24px",
        xl : "30px" , 
        "2xl" : "40px",
        "3xl" : "50px",
      },
      spacing: {
        "1": "8px",
        "2": "12px",
        "3": "16px",
        "4": "24px",
        "5": "32px",
        "6": "48px",
        "7": "64px",
        "8": "96px",
        "9": "128px",
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius : {
        sm : "15px",
      },
      backgroundImage : {
        'hero-section' : "url('./Assests/bg.png')",
        'Our-bg' : "url('./Assests/Rectangle 14.png')",
        'Benefits-bg' : "url('./Assests/Rectangle 24.png')",
        'About-bg' : "url('./Assests/Rectangle 31.png')",
      },
      keyframes: {
        rotation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)'},
        },
        opacity : {
          '0%' : {opacity : 0 },
          '50%' : {opacity : 0.5},
          '100%' : {opacity :1 , transform: 'scale(1.1)'},
        },
        logo : {
          '0%' : {opacity : 0 },
          '50' : {opacity : 0.5 , transform : 'scale(1.2)'},
          '100%' : {opacity : 1 , transform : 'scale(1.1)'},
        }
      },
      animation: {
        rotation: 'rotation 2s ease infinite',
        opacity : 'opacity 3s ease infinite',
        logo : 'logo 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}