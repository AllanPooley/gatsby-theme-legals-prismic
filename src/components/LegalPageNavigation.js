/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react';
import {
  isClient,
  generateKey,
  getSectionAffix,
  getSectionId
} from '../helpers';

const scrollToPageSection = (event, index) => {
  if (event) event.preventDefault();
  const targetEl = document.getElementById(getSectionId(index));
  if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const isInView = (index, sectionOffset) => {
  const targetEl = document.getElementById(getSectionId(index));
  if (!targetEl) return false;
  const rect = targetEl.getBoundingClientRect();
  return (rect.top - sectionOffset) < 0;
};

export const LegalPageNavigation = (props) => {
  const {
    sections,
  } = props;
  const sectionOffset = 150;
  const [activeSection, setActiveSection] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const sectionTitles = sections && sections.map(section => section.sectionHeading.text);
  useEffect(() => {
    const findActiveSection = async () => {
      if (navOpen) setNavOpen(false);
      let currActiveSection = activeSection;
      sectionTitles.forEach((section, index) => {
        if (isInView(index, sectionOffset)) currActiveSection = index;
      });
      if (currActiveSection !== activeSection) setActiveSection(currActiveSection);
    };
    if (isClient) window.addEventListener('scroll', findActiveSection);
    return () => {
      if (isClient) window.addEventListener('scroll', findActiveSection);
    };
  });
  return (
    <nav
      className="legal-page-navigation"
      sx={{
        position: 'sticky',
        top: '100px',
        left: 0,
      }}
    >
      <div className="navigation-container">
        <button
          type="button"
          className="mobile-section-selector"
          onClick={() => setNavOpen(!navOpen)}
          aria-label={`Jump to ${sectionTitles[activeSection]} section`}
          sx={{
            display: ['flex', 'none', 'none'],
          }}
        >
          <span className="current-active-section">
            {`${getSectionAffix(activeSection)} ${sectionTitles[activeSection]}`}
          </span>
          <div className="icon">
            <svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.6.154l1.697 1.697L5.65 7.5 0 1.851 1.697.154 5.65 4.106z" fill="#FFF" fillRule="nonzero" />
            </svg>
          </div>
        </button>
        <ul className={`nav-items${navOpen ? ' nav-open' : ''}`}>
          { sectionTitles && sectionTitles.map((sectionTitle, index) => (
            <li
              key={generateKey(index)}
              className="nav-item"
            >
              <button
                type="button"
                className={`anchor-link${activeSection === index ? ' active' : ''}`}
                onClick={event => scrollToPageSection(event, index)}
                aria-label={`Jump to ${sectionTitle} section`}
              >
                <span className="count">{getSectionAffix(index)}</span>
                <span className="section-title">{sectionTitle}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
