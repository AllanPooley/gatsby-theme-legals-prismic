/** @jsx jsx */
import { jsx } from 'theme-ui'
import { HtmlContent } from './HtmlContent'
import { getSectionId } from '../helpers'
import { Styled } from 'theme-ui'

export const LegalPageSection = ({ index, section }) => {
  const {
    sectionHeading,
    content,
  } = section
  return (
    <div
      id={getSectionId(index)}
      className="legal-page-section"
      sx={{
        padding: '30px 0',
        maxWidth: '750px',
      }}
    >
      <Styled.h2
        className="section-title"
        sx={{
          marginBottom: '30px',
        }}
      >
        {sectionHeading.text}
      </Styled.h2>
      <HtmlContent
        content={content.html}
      />
    </div>
  )
}
