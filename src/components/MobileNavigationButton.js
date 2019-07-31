/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  getSectionAffix,
} from '../helpers'
import theme from '../styles/theme'

export const MobileNavigationButton = ({
  navOpen,
  activeSection,
  sectionTitles,
  setNavOpenHandler
}) => (
  <button
    type="button"
    className="mobile-section-selector"
    onClick={() => setNavOpenHandler(!navOpen)}
    aria-label={`Jump to ${sectionTitles[activeSection]} section`}
    sx={{
      display: ['flex', 'flex', 'none', 'none'],
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: 'grey',
      padding: '21px 20px 20px',
    }}
  >
    <span
      className="current-active-section"
      sx={{
        display: 'block',
        fontSize: 0,
        letterSpacing: 1,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'primary',
        marginRight: '10px',
      }}
    >
      {`${getSectionAffix(activeSection)} ${sectionTitles[activeSection]}`}
    </span>
    <div className="icon">
      <svg
        viewBox="0 0 12 8"
        xmlns="http://www.w3.org/2000/svg"
        sx={{
          height: '12px',
          width: '8px',
          fill: theme.colors.primary
        }}
      >
        <path d="M9.6.154l1.697 1.697L5.65 7.5 0 1.851 1.697.154 5.65 4.106z" fillRule="nonzero" />
      </svg>
    </div>
  </button>
)
