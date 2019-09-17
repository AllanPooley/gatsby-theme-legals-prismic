import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const HtmlContentStyle = createGlobalStyle`
.gatsby-theme-legals-html-content {
  * {
    color: ${theme.colors.text}
  }

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
    text-decoration: underline;
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
    margin-bottom: 30px;

    li {
      margin-left: 15px;
      margin-bottom: 20px;
    }
  }

  ul {
    list-style-type: disc;

    li {
      list-style-type: disc;
      position: relative;
    }
  }

  ol {
    list-style-type: decimal;

    li {
      list-style-type: decimal;
      margin-left: 10px;
      text-indent: 0.5em;
    }
  }
}
`;
export default HtmlContentStyle;
