/** @jsx jsx */
import { jsx } from 'theme-ui'
import { HtmlContent } from '../common'
import { getSectionId } from '../../util/helpers'
import { InView } from 'react-intersection-observer'
import { Styled } from 'theme-ui'

const LegalPageSection = ({ index, section, sectionInViewHandler }) => {
  const {
    sectionHeading,
    content,
  } = section
  const sectionId = getSectionId(index, sectionHeading.text)
  return (
    <InView
      id={sectionId}
      className="legal-page-section"
      sx={{
        padding: '30px 0',
        maxWidth: '750px',
      }}
      rootMargin="-100px 0px 0px"
      as="div"
      onChange={(inView) => sectionInViewHandler(index, inView)}
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
    </InView>
  )
};

export default LegalPageSection;
