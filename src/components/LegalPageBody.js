import React from 'react';
import { LegalPageNavigation } from './LegalPageNavigation';

const LegalPageBody = ({ content }) => (
  <section className="legal-page-body">
    <div className="container">
      <div className="col col-left">
        {/* <LegalPageNavigation
          sections={sections}
          isMobile={isMobile}
        /> */}
      </div>
      <div className="col col-right">
        <div
          className="legal-page-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  </section>
);

export default LegalPageBody;
