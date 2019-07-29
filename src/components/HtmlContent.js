import React from 'react';

export const HtmlContent = ({ className, content }) => (
  <div
    className={`html-content ${className ? ` ${className}` : ''}`}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);
