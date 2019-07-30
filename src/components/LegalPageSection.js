/** @jsx jsx */
import { jsx } from 'theme-ui'
import { HtmlContent } from './HtmlContent'
import { getSectionId } from '../helpers'

export const LegalPageSection = ({ index, section }) => {
  const {
    sectionHeading,
    content,
  } = section;
  return (
    <div
      id={getSectionId(index)}
      className="legal-page-section"
      sx={{
        marginBottom: '80px',
        maxWidth: '750px',
      }}
    >
      <h2
        className="section-title"
        sx={{
          marginBottom: '30px',
          fontSize: 3,
        }}
      >
        {sectionHeading.text}
      </h2>
      <HtmlContent
        content={content.html}
      />
    </div>
  );
};
