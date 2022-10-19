module.exports = {
  content: [
    './src/pages//*.{js,jsx,ts,tsx}',
    './src/components//*.{js,jsx,ts,tsx}',
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

    // ALL COLORS
    colors: {
      main: '#252A41',
      bgColor: '#fff',
      accent: '#FB923C',
      orange: '#ff7849',
      button: '#2563EB',
      buttonHover: '#3B82F6',
      buttonDisabled: '#D6D3D1',
      text: '#9EA2C6',
      textLight: '#F8FAFC',
    },
    // BASE FONT
    fontFamily: {
      inter: ['Inter', 'sans-serif'], // class="font-inter"
      // exo: ['"Exo 2"', 'sans-serif'],
    },
    // THEME
    extend: {
      // backgroundColor: theme => ({
      //   ...theme('colors'),
      // }),

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
