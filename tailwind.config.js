/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx,md,mdx}',
    './sanity/**/*.{ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1320px'
      }
    },
    extend: {
      colors: {
        // Premium dark — confident, trades-grounded.
        ink: {
          950: '#0A0D12', // base background
          900: '#0F1319',
          800: '#151A22',
          700: '#1C232D',
          600: '#262E3A',
          500: '#3A4452'
        },
        bone: {
          50: '#F7F6F2',
          100: '#EFEDE6',
          200: '#DEDBD0',
          300: '#C2BEAE'
        },
        // Signal — high-vis safety amber, instantly reads "tradie" without being cheesy.
        signal: {
          50: '#FFF8EB',
          100: '#FFEFCC',
          200: '#FFDC8A',
          300: '#FFC854',
          400: '#FFB31F',
          500: '#F39200', // primary CTA
          600: '#D67700',
          700: '#A85B00',
          800: '#7A4200',
          900: '#502B00'
        },
        steel: {
          50: '#F1F4F8',
          100: '#DDE4EC',
          200: '#B4C2D2',
          300: '#8595AB',
          400: '#5C6B82',
          500: '#3F4D63',
          600: '#2D384A',
          700: '#1F2632'
        },
        success: '#1FAE6B',
        danger: '#E5484D'
      },
      fontFamily: {
        // Distinctive, characterful pairing — set via next/font in layout.
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace']
      },
      fontSize: {
        // Editorial scale
        'display-xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-lg': ['clamp(2.5rem, 5.5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-sm': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em', fontWeight: '600' }]
      },
      spacing: {
        section: 'clamp(4rem, 8vw, 7rem)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      boxShadow: {
        'glow-signal': '0 0 0 1px rgba(243,146,0,0.15), 0 8px 32px -8px rgba(243,146,0,0.45)',
        'card': '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)',
        'lift': '0 2px 0 0 rgba(255,255,255,0.05) inset, 0 32px 64px -24px rgba(0,0,0,0.8)'
      },
      backgroundImage: {
        'grid-faint':
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        'noise':
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'pipe-flow': 'pipeFlow 3.2s linear infinite'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' }
        },
        pipeFlow: {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' }
        }
      }
    }
  },
  plugins: []
};
