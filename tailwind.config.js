module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/component/**/*.{js,jsx,ts,tsx}',
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
    },
    // THEME
    extend: {
      colors: {
        blue: { 950: '#252A41' },
        orange: { 950: '#ff7849' },
        grey: { 350: '#9EA2C6' }, //text
        slate: { 50: '#F8FAFC' },
      },
      gridTemplateAreas: {
        'wide': [
          'header header header',
          'nav    main   main',
          'nav    footer footer',
        ],
        'slim': [
          'header',
          'nav',
          'main',
          'footer',
        ],
      },
      // TYPOGRAFY
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.grey[350]'),
            '--tw-prose-headings': theme('colors.grey[350]'),
            '--tw-prose-lead': theme('colors.grey[350]'),
            '--tw-prose-links': theme('colors.grey[350]'),
            '--tw-prose-bold': theme('colors.grey[350]'),
            '--tw-prose-counters': theme('colors.grey[350]'),
            '--tw-prose-bullets': theme('colors.grey[350]'),
            '--tw-prose-hr': theme('colors.grey[350]'),
            '--tw-prose-quotes': theme('colors.grey[350]'),
            '--tw-prose-quote-borders': theme('colors.grey[350]'),
            '--tw-prose-captions': theme('colors.grey[350]'),
            '--tw-prose-code': theme('colors.grey[350]'),
            '--tw-prose-pre-code': theme('colors.grey[350]'),
            '--tw-prose-pre-bg': theme('colors.grey[350]'),
            '--tw-prose-th-borders': theme('colors.grey[350]'),
            '--tw-prose-td-borders': theme('colors.grey[350]'),
          },
        },
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.blue[950]'),
            '--tw-prose-hr': theme('colors.blue[950]'),
            '--tw-prose-th-borders': theme('colors.blue[950]'),
            '--tw-prose-td-borders': theme('colors.blue[950]'),
            ul: {
              listStyle: 'outside',
              listStyleType: 'decimal',
            },
            li: {
              fontFamily: 'Inter, sans-serif',
              fontSize: 18,
              lineHeight: 1.4,
            },
            p: {
              fontFamily: 'Inter, sans-serif',
              fontSize: 18,
              lineHeight: 1.4,
            },
          },
        },
      }),

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
};
