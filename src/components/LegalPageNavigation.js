/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import {
  isClient,
  generateKey,
  getSectionId
} from '../helpers'
import { MobileNavigationButton } from './MobileNavigationButton'
import { NavigationItem } from './NavigationItem'

const scrollToPageSection = (event, sectionId) => {
  if (event) event.preventDefault()
  const targetEl = document.getElementById(sectionId)
  if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const isInView = (index, sectionOffset, sectionId) => {
  const targetEl = document.getElementById(sectionId)
  if (!targetEl) return false
  const rect = targetEl.getBoundingClientRect()
  return (rect.top - sectionOffset) < 0
}

export const LegalPageNavigation = (props) => {
  const {
    sections,
  } = props
  const sectionOffset = 150
  const [activeSection, setActiveSection] = useState(0)
  const [navOpen, setNavOpen] = useState(false)
  const sectionTitles = sections && sections.map(section => section.sectionHeading.text)
  console.log(sectionTitles);
  useEffect(() => {
    const findActiveSection = async () => {
      if (navOpen) setNavOpen(false)
      let currActiveSection = activeSection
      sectionTitles.forEach((section, index) => {
        const thisSectionId = getSectionId(index, sectionTitles[index]);
        if (isInView(index, sectionOffset, thisSectionId)) currActiveSection = index
      })
      if (currActiveSection !== activeSection) setActiveSection(currActiveSection)
    }
    if (isClient) window.addEventListener('scroll', findActiveSection)
    return () => {
      if (isClient) window.addEventListener('scroll', findActiveSection)
    }
  })
  return (
    <nav
      className="legal-page-navigation"
      sx={{
        position: 'sticky',
        top: ['-1px', '-1px', '100px', '100px'],
        left: 0,
      }}
    >
      <div className="navigation-container">
        <MobileNavigationButton
          navOpen={navOpen}
          activeSection={activeSection}
          sectionTitles={sectionTitles}
          setNavOpenHandler={setNavOpen}
        />
        <ul
          className={`nav-items${navOpen ? ' nav-open' : ''}`}
          sx={{
            visibility: [
              navOpen ? 'visible' : 'hidden',
              navOpen ? 'visible' : 'hidden',
              'visible',
              'visible',
            ],
            opacity: [
              navOpen ? '1' : '0',
              navOpen ? '1' : '0',
              '1',
              '1',
            ],
            zIndex: 2,
            boxShadow: [
              'rgba(33, 38, 44, 0.1) 0px 2px 4px 0px',
              'rgba(33, 38, 44, 0.1) 0px 2px 4px 0px',
              'none',
              'none',
            ],
            width: '100%',
            position: ['absolute', 'absolute', 'static', 'static'],
            backgroundColor: [
              'offWhite',
              'offWhite',
              'transparent',
              'transparent',
            ],
            padding: ['40px 20px', '40px 20px', '0', '0'],
            textAlign: ['center', 'center', 'left', 'left'],
            transition: 'visibility .2s,opacity .2s ease-out',
            alignItems: 'center',
          }}
        >
          { sectionTitles && sectionTitles.map((sectionTitle, index) => (
            <NavigationItem
              key={generateKey(index)}
              isActive={activeSection === index}
              sectionTitle={sectionTitle}
              index={index}
              scrollToHandler={scrollToPageSection}
            />
          ))}
        </ul>
      </div>
    </nav>
  )
}
