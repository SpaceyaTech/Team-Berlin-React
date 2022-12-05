/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    borderRadius: {
      '8px': '8px',
    },
    colors: {
      secondaryGreen: '#03A47E',
      primaryWhite: '#EBFBF7',
      darkText: '#13131A',
      'spaceYaTech_text': '#252533',
      'spaceYaTech_white': '#ffffff',
    },
    spacing: {
      '1vw': '1vw',
      '1.65vh': '1.65vh',
      '3.7vh': '3.7vh',
      '7.5vh': '7.5vh',
      '8vh': '8vh',
      '10vh': '10vh',
      '22vh': '22vh',
      '32vw': '32vw',
      '42vw': '42vw',
      '44vw': '44vw',
      '48vh': '48vh',
      '56vh': '56vh',
      '56vw': '56vw',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    fontSize: {
      '2vh': '2vh',
      '3vh': '3vh',
      '4vh': '4vh',
    },
    extend: {
      lineHeight: {
        '5.7vh': '5.7vh',
      }
    }
  },
  plugins: []
};
