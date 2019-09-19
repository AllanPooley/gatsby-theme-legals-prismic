export const theme = {
  space: [0, 4, 8, 16, 32],
  breakpoints: [
    '500px', '800px', '1080px',
  ],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    heading: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  fontSizes: [14, 16, 20, 24, 36, 44, 64, 80],
  fontWeights: {
    body: 400,
    regular: 400,
    medium: 500,
    subheading: 500,
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
    text: '#333333',
    background: '#FFFFFF',
    primary: '#6F2B9F',
    primaryDark: '#5B2589',
    primaryLight: '#BB75D1',
    white: '#FFFFFF',
    offWhite: '#FCFAFF',
    black: '#000000',
    offBlack: '#333333',
    grey: '#F3F3F3',
  },
  sizes: {
    wrapper: '1240px',
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: 'text',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    h1: {
      variant: 'textStyles.heading',
      fontSize: [5, 6, 6, 7],
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: [3, 3, 4, 4],
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 0,
    },
  },
}

export default theme
