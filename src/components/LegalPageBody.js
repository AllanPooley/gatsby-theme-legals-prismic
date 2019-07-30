/** @jsx jsx */
import { jsx } from 'theme-ui'
import { LegalPageNavigation } from './LegalPageNavigation';
import { LegalPageSection } from './LegalPageSection';
import { generateKey } from '../helpers';

const LegalPageBody = ({ sections }) => (
  <section className="legal-page-body">
    <div
      className="container"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '100px 20px',
        position: 'relative',
      }}
    >
      <div className="col col-left">
        <LegalPageNavigation
          sections={sections}
        />
      </div>
      <div className="col col-right">
        { sections && sections.map((section, index) => (
            <LegalPageSection
              key={generateKey(index)}
              index={index}
              section={section}
            />
          ))}
      </div>
    </div>
  </section>
);

export default LegalPageBody;
