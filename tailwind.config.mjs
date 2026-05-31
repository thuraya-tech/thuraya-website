import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Manrope', 'Helvetica Neue', ...defaultTheme.fontFamily.sans],
        display: ['"Bricolage Grotesque"', 'Manrope', ...defaultTheme.fontFamily.sans],
        mono:    ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        arabic:  ['Tajawal', 'Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bone:           '#F7F4ED',
        'bone-warm':    '#EFEAE0',
        paper:          '#FFFEFB',
        ink:            '#0A1124',
        'ink-soft':     '#1B2440',
        steel:          '#4C5468',
        'steel-soft':   '#97A0B5',
        brass:          '#B8862E',
        'brass-hot':    '#D4A85B',
        'brass-deep':   '#8A6321',
        signal:         '#1F4FCC',
      },
      backgroundImage: {
        'paper-grain':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.04  0 0 0 0 0.06  0 0 0 0 0.14  0 0 0 0.05 0'/></filter><rect width='100%25' height='100%25' filter='url(%23g)'/></svg>\")",
        'tech-grid':
          "linear-gradient(to right, rgba(247,244,237,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(247,244,237,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'paper-grain': '220px 220px',
        'tech-grid':   '28px 28px',
      },
      boxShadow: {
        'paper': '0 1px 0 rgba(10, 17, 36, 0.05), 0 12px 36px -22px rgba(10, 17, 36, 0.22)',
        'brass': '0 0 0 1px rgba(184, 134, 46, 0.35), 0 8px 24px -10px rgba(184, 134, 46, 0.20)',
      },
      letterSpacing: {
        'eyebrow':       '0.26em',
        'eyebrow-tight': '0.18em',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
