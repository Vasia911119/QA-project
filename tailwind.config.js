module.exports = {
  content: [
    './src/pages//*.{js,jsx,ts,tsx}',
    './src/components//*.{js,jsx,ts,tsx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },
    // BASE FONT
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'], // class="font-montserrat"
      // exo: ['"Exo 2"', 'sans-serif'],
    },
    // THEME
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
      }),

      // ALL COLORS
      colors: {
        body: '#FAFAFA', // class="bg-body"
        accent: '#FEC830', // class="bg-accent text-accent border-accent"
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
