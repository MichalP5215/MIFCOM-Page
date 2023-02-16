/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1220px',
      // => @media (min-width: 1280px) { ... }
    },
    letterSpacing: {
      tightest: '1px',
    },
    container: {
      center: true,
    },
    backgroundSize: {
      '50%': '50%',
      '75%': '75%',
      '77%': '77%',
      '93%': '93%',
      '16': '4rem',
    },
    skew: {
      'minus24': '-24deg',
      '24': '24deg',
    },
    extend: {
      lineHeight: {
        '2': '.65rem',
      },
      dropShadow: {
        'xl': '-1px 0 5px #000',
      },
      animation: {
        fade3: 'fadeIn3 3s forwards',
        fade4: 'fadeIn4 4s forwards',
        slideUp: 'slideUp 1s cubic-bezier(0.65, 0, 0.35, 1) both',
        moveRight: 'moveRight 3.5s linear alternate',
        moveLeft: 'moveLeft 3.5s linear alternate',
        grayscale: 'grayscale 3.5s linear alternate',
        intelLogo: 'intelLogo 2.5s forwards',
        nvidiaRTXCard: 'nvidiaRTXCard 3s forwards',
        nvidiaRTXCardLaptopBP: 'nvidiaRTXCardLaptopBP 3s forwards',
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
        moveRight: {
          '0%': { left: '-1%', filter: "grayscale(100%)" },
          '20%': { left: '-1%', filter: "grayscale(100%)" },
          '100%': { left: '9%', filter: "grayscale(0%)" },
        },
        moveLeft: {
          '0%': { left: '63%', filter: "grayscale(100%)" },
          '20%': { left: '63%', filter: "grayscale(100%)" },
          '100%': { left: '53%', filter: "grayscale(0%)" },
        },
        grayscale: {
          '0%': { filter: "grayscale(100%)" },
          '20%': { filter: "grayscale(100%)" },
          '100%': { filter: "grayscale(0%)" },
        },
        intelLogo: {
          '0%': { left: '35.1%', transform: "scale(.5)", opacity: 0 },
          '20%': { left: '35.1%', transform: "scale(.5)", opacity: 0 },
          '100%': { left: '14.1%', transform: "scale(1)", opacity: 1 },
        },
        nvidiaRTXCard: {
          '0%': { right: '-26%', transform: "scale(.5) translateY(0)", opacity: 0 },
          '20%': { right: '-26%', transform: "scale(.5) translateY(0)", opacity: 0 },
          '100%': { right: '-6%', transform: "scale(1) translateY(30%)", opacity: 1 },
        },
        nvidiaRTXCardLaptopBP: {
          '0%': { right: '-26%', transform: "scale(.5) translateY(0)", opacity: 0 },
          '20%': { right: '-26%', transform: "scale(.5) translateY(0)", opacity: 0 },
          '100%': { right: '3.5%', transform: "scale(1) translateY(30%)", opacity: 1 },
        },
      }),
      colors: {
        gray: '#828282',
        green: '#45ba00'
      },
      backgroundImage: {
        'headerBG': "url('./modules/assets/Header/title_background.png')",
        'headeLaptopLeft': "url('./modules/assets/Header/laptop_front.png')",
        'headeLaptopLeftScreen': "url('./modules/assets/Header/header-monitor-dark.png')",
        'headeLaptopLeftScreenBlink': "url('./modules/assets/Header/header-blink.png')",
        'headeLaptopLeftScreenEffect': "url('./modules/assets/Header/lensflare_header.png')",
        'headeLaptopRight': "url('./modules/assets/Header/laptop_right.png')",
        'intelLogo': "url('./modules/assets/Header/logo_i9logo.png')",
        'nvidiaLogo': "url('./modules/assets/Header/nvidia_logo.png')",
        'intelBlockBG': "url('./modules/assets/IntelBlock/Background_intel_block.png')",
        'intelBlockLaptop': "url('./modules/assets/IntelBlock/Laptop_intel_block.png')",
        'intelBlockIntelLogo': "url('./modules/assets/IntelBlock/intel-corei9-logo.png')",
        'nvidiaBlockBG': "url('./modules/assets/NvidiaBlock/Background_RTX_block.png')",
        'nvidiaBlockLaptop': "url('./modules/assets/NvidiaBlock/Laptop_NVIDIA_block.png')",
        'nvidiaBlockRTXlogo': "url('./modules/assets/NvidiaBlock/Nvidia_RTX_Logo.png')",
        'nvidiaBlockRTXGraphicCard': "url('./modules/assets/NvidiaBlock/RTX_graphic_card.png')",
      },
      fontFamily: {
        EurostileReg: ['Eurostile-Reg', 'sans-serif'],
        EurostileHeavy: ['Eurostile-Hea', 'sans-serif'],
        EurostileBol: ['Eurostile-Bol', 'sans-serif'],
        EurostileMed: ['Eurostile-Med', 'sans-serif'],
        EurostileConHea: ['EurostileCon-Hea', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
