import React from 'react';
import HtmlContentStyle from '../../styles/htmlContentStyle';

const HtmlContent = ({ content }) => (
  <>
    <div
      className="gatsby-theme-legals-html-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
    <HtmlContentStyle />
  </>
);

export default HtmlContent;
