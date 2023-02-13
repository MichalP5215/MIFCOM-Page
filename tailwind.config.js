/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        fade3: 'fadeIn3 3s forwards',
        fade4: 'fadeIn4 4s forwards',
        slideUp: 'slideUp 0.9s cubic-bezier(0.65, 0, 0.35, 1) both',
      },
      keyframes: ({
        fadeIn3: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeIn4: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(25%)' },
          '100%': { transform: 'translateY(0)' },
        },
      }),
      colors:{
        gray: '#828282'
      },
      backgroundImage: {
        'headerBG' : "url('./modules/assets/Header/title_background.png')",
      },
      fontFamily: {
        EurostileReg: ['Eurostile-Reg', 'sans-serif'],
        EurostileHeavy: ['Eurostile-Hea', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
