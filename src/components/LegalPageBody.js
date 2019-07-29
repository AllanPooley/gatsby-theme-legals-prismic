import React from 'react';
import { LegalPageNavigation } from './LegalPageNavigation';
import { LegalPageSection } from './LegalPageSection';
import { generateKey } from '../helpers';

const LegalPageBody = ({ sections }) => (
  <section className="legal-page-body">
    <div className="container">
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
