module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/*.{js,jsx,ts,tsx}',
    './src/components/*.{js,jsx,ts,tsx}',
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
        // buttonDisabled: '#D6D3D1', stone 300

        // textLight: '#F8FAFC', slate 50
      },

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
}
