import React from 'react';
import HtmlContentStyle from '../../styles/htmlContentStyle';

const HtmlContent = ({ content }) => (
  <>
    <HtmlContentStyle />
    <div
      className="gatsby-theme-legals-html-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </>
);

export default HtmlContent;
