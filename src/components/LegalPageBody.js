/** @jsx jsx */
import { jsx } from 'theme-ui'
import { LegalPageNavigation } from './LegalPageNavigation'
import { LegalPageSection } from './LegalPageSection'
import { generateKey } from '../helpers'

const LegalPageBody = ({ activeSection, sectionInViewHandler, sections }) => (
  <section className="legal-page-body">
    <div
      className="container"
      sx={{
        display: 'flex',
        flexDirection: ['column', 'column', 'row', 'row'],
        maxWidth: '1240px',
        margin: '0 auto',
        padding: ['0', '0', '100px 20px', '100px 20px'],
        position: 'relative',
      }}
    >
      <div
        className="col col-left"
        sx={{
          width: ['100%', '100%', '250px', '300px'],
          marginRight: ['0px', '0px', '30px', '50px'],
          position: ['sticky', 'sticky', 'static', 'static'],
          top: '0',
          zIndex: '2',
        }}
      >
        <LegalPageNavigation
          activeSection={activeSection}
          sections={sections}
        />
      </div>
      <div
        className="col col-right"
        sx={{
          flex: '1',
          marginLeft: ['0px', '0px', '30px', '50px'],
          padding: ['60px 20px', '60px 20px', '0 0 400px', '0 0 400px']
        }}
      >
        { sections && sections.map((section, index) => (
            <LegalPageSection
              key={generateKey(index)}
              index={index}
              section={section}
              sectionInViewHandler={sectionInViewHandler}
            />
          ))}
      </div>
    </div>
  </section>
)

export default LegalPageBody
