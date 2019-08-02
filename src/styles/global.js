import theme from '../styles/theme'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    /* stylelint-disable-next-line */
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }
  ol, ul, li {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  button,
  input {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:focus {
      outline: none;
    }
    &:invalid {
      box-shadow: none;
    }
  }
  /* Added to Fix Footer to bottom of viewport */
  html, body {
    height: 100%;
  }
  .siteRoot {
    padding: 60px 0 0 0;
    margin: 0 auto;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .siteContent {
    flex: 1;
  }
  /* Added to prevent scrolling when the menu is open */
  .contain {
    overflow: hidden;
  }
  button,
  input,
  textarea,
  select {
    color: ${theme.colors.text};
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    appearance: none;
    /* stylelint-disable-next-line */
    -webkit-appearance: none;
    /* stylelint-disable-next-line */
    -moz-appearance: none;
    border-radius: 0;
    resize: none;
    &:invalid {
      box-shadow: none;
    }
    &:focus {
      outline: 5px auto #5E9ED6;
      outline: 5px auto -webkit-focus-ring-color;
    }
  }
  body:not(.user-is-tabbing) button:focus,
  body:not(.user-is-tabbing) input:focus,
  body:not(.user-is-tabbing) select:focus,
  body:not(.user-is-tabbing) textarea:focus,
  body:not(.user-is-tabbing) a:focus  {
    outline: none;
  }
`
export default GlobalStyle
