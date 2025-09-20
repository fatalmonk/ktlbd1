/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Ananta-inspired color system
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#0B1F3A', // Ananta brand primary
          600: '#0a1a32',
          700: '#08152a',
          800: '#061022',
          900: '#040b1a',
          950: '#02060d',
        },
        accent: {
          50: '#f0fdff',
          100: '#ccf7fe',
          200: '#99eefd',
          300: '#66e5fc',
          400: '#33dcfb',
          500: '#00A3B4', // Ananta brand secondary
          600: '#0099a8',
          700: '#008a97',
          800: '#007b86',
          900: '#006c75',
          950: '#005d64',
        },
        neutral: {
          50: '#FFFFFF', // Ananta background base
          100: '#F7F7F9', // Ananta background soft
          200: '#E6E8EC', // Ananta border subtle
          300: '#D1D5DB', // Ananta border strong
          400: '#727784', // Ananta text muted
          500: '#515761', // Ananta text secondary
          600: '#1F2328', // Ananta text primary
          700: '#1a1e23',
          800: '#15191e',
          900: '#101419',
          950: '#0b0f14',
        },
        // Status colors from Ananta system
        status: {
          info: '#2563EB',
          success: '#16A34A',
          warning: '#D97706',
          danger: '#DC2626',
        },
        footer: '#1C1C1C',
      },
      fontFamily: {
        // Ananta typography system
        heading: ['Poppins', 'Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        numeric: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Ananta exact typography scale
        h1: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }], // 48px desktop
        h2: ['2.25rem', { lineHeight: '1.15' }], // 36px desktop
        h3: ['1.75rem', { lineHeight: '1.2' }], // 28px desktop
        h4: ['1.375rem', { lineHeight: '1.25' }], // 22px desktop
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        body: ['1rem', { lineHeight: '1.65' }], // 16px
        caption: ['0.875rem', { lineHeight: '1.5' }], // 14px
        overline: [
          '0.75rem',
          { lineHeight: '1.5', letterSpacing: '0.08em', textTransform: 'uppercase' },
        ], // 12px
        // Mobile responsive sizes
        'h1-mobile': ['2.125rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }], // 34px mobile
        'h2-mobile': ['1.75rem', { lineHeight: '1.15' }], // 28px mobile
        'h3-mobile': ['1.375rem', { lineHeight: '1.2' }], // 22px mobile
        'h4-mobile': ['1.125rem', { lineHeight: '1.25' }], // 18px mobile
        // Legacy sizes for compatibility
        display: ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        hero: ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        section: ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
      },
      spacing: {
        // Ananta spacing scale: [4, 8, 12, 16, 24, 32, 48, 64, 96]px
        1: '0.25rem', // 4px
        2: '0.5rem', // 8px
        3: '0.75rem', // 12px
        4: '1rem', // 16px
        6: '1.5rem', // 24px
        8: '2rem', // 32px
        12: '3rem', // 48px
        16: '4rem', // 64px
        24: '6rem', // 96px
        // Additional custom spacing
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
      animation: {
        // Ananta animation system: 200-400ms duration, ease-out easing
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'fade-in-slow': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'slide-up-slow': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        // New Ananta-style animations
        'zoom-hover': 'zoomHover 0.2s ease-out forwards',
        'brightness-hover': 'brightnessHover 0.2s ease-out forwards',
        'translate-hover': 'translateHover 0.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // Ananta-style hover animations
        zoomHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        brightnessHover: {
          '0%': { filter: 'brightness(1)' },
          '100%': { filter: 'brightness(0.95)' },
        },
        translateHover: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-2px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      // Ananta component system
      borderRadius: {
        none: '0',
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
        round: '999px',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.08)',
        medium: '0 12px 32px rgba(0,0,0,0.12)',
        hard: '0 2px 0 rgba(0,0,0,0.06)',
      },
      maxWidth: {
        ananta: '1200px', // Ananta max width
      },
      screens: {
        xs: '360px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
