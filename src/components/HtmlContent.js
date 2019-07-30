import React from 'react'
import HtmlContentStyle from '../styles/htmlContentStyle'

export const HtmlContent = ({ className, content }) => (
  <>
    <div
      className={`html-content ${className ? ` ${className}` : ''}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
    <HtmlContentStyle />
  </>
)
