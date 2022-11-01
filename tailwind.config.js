module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      smOnly: { max: '767.98px' },
      sm: '480px',
      mdOnly: { min: '768px', max: '1279.98px' },
      md: '768px',
      xl: '1280px',
      notXl: { max: '1279.98px' },
    },
    borderRadius: {
      none: '0',
      DEFAULT: '0.5rem',
    },
    // ALL COLORS

    // BASE FONT
    fontFamily: {
      inter: ['Inter', 'sans-serif'], // class="font-inter"
      // exo: ['"Exo 2"', 'sans-serif'],
    },
    // THEME
    extend: {
      colors: {
        blue: { 950: '#252A41' },
        orange: { 950: '#ff7849' },
        grey: { 350: '#9EA2C6' }, //text
        slate: { 50: '#F8FAFC' },
        // buttonDisabled: '#D6D3D1', stone 300

        // textLight: '#F8FAFC', slate 50
      },
      // TYPOGRAFY
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.grey[350]'),
            '--tw-prose-headings': theme('colors.grey[350]'),
            '--tw-prose-lead': 'var(--tw-prose-invert-lead)',
            '--tw-prose-links': 'var(--tw-prose-invert-links)',
            '--tw-prose-bold': theme('colors.grey[350]'),
            '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
            '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
            '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
            '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
            '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
            '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
            '--tw-prose-code': theme('colors.grey[350]'),
            '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
            '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
            '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
            '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
          },
        },
      }),

      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2.5rem',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
