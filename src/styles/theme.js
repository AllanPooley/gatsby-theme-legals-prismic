const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  color: 'text'
}

export const theme = {
  space: [0, 4, 8, 16, 32],
  breakpoints: [
    '500px', '800px', '1080px',
  ],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
    heading: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  },
  fontSizes: [14, 16, 20, 24, 36, 44, 64, 80],
  fontWeights: {
    body: 300,
    regular: 300,
    medium: 400,
    subheading: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  colors: {
    text: "#333333",
    background: "#FFFFFF",
    primary: "#5B2589",
    primaryLighter: "#6F2B9F",
    primaryEvenLighter: "#BB75D1",
    white: "#FFFFFF",
    offWhite: "#FCFAFF",
    black: "#000000",
    offBlack: "#333333",
    grey: "#F3F3F3",
  },
  sizes: {
    wrapper: "1240px",
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: [ 5, 6, 6, 7],
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
  }
}

export default theme
