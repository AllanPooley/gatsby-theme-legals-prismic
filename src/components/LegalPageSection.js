import React from 'react';
import { HtmlContent } from './HtmlContent';
import { getSectionId } from '../helpers';

export const LegalPageSection = ({ index, section }) => {
  const {
    sectionHeading,
    content,
  } = section;
  return (
    <div
      id={getSectionId(index)}
      className="legal-page-section"
    >
      <h2 className="section-title">{sectionHeading.text}</h2>
      <HtmlContent
        content={content.html}
      />
    </div>
  );
};
