import theme from '../styles/theme'
import { createGlobalStyle } from 'styled-components'

const HtmlContentStyle = createGlobalStyle`
.html-content {
  em {
    font-style: italic;
  }

  p {
    margin-bottom: 20px;

    strong {
      font-weight: ${theme.fontWeights.bold};
    }
  }

  a {
    color: ${theme.colors.primary}
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 30px;
    margin-bottom: 20px;

    &:first-child {
      margin-top: 0;
    }
  }

  h2 {
    margin-top: 60px;

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    margin-top: 40px;

    &:first-child {
      margin-top: 0;
    }
  }

  a {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  ul, ol {
    width: 90%;
    padding-left: 25px;
    margin-bottom: 25px;

    li {
      margin-left: 15px;
      margin-bottom: 30px;
      font-weight: ${theme.fontWeights.medium};
    }
  }

  ul {
    list-style-type: none;

    li {
      position: relative;

      &:before {
        content: '';
        height: 3px;
        width: 3px;
        border: 2px solid ${theme.colors.primary};
        border-radius: 50%;
        position: absolute;
        top: 10px;
        left: -25px;
        z-index: 1;
      }
    }
  }

  ol {
    list-style-type: decimal;

    li {
      margin-left: 10px;
      text-indent: 0.5em;
    }
  }
}
`
export default HtmlContentStyle
