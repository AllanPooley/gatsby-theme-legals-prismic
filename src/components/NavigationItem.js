/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  getSectionAffix,
} from '../helpers'

export const NavigationItem = ({
  index,
  isActive,
  scrollToHandler,
  sectionTitle,
}) => (
  <li
    className="nav-item"
    sx={{
      marginBottom: '30px',
    }}
  >
    <button
      type="button"
      className="anchor-link"
      onClick={event => scrollToHandler(event, index)}
      aria-label={`Jump to ${sectionTitle} section`}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        "&:focus-within,&:hover": {
          cursor: 'pointer',
        }
      }}
    >
      <span
        className="count"
        sx={{
          fontSize: 0,
          letterSpacing: 1,
          textTransform: 'uppercase',
          marginRight: '10px',
          color: isActive ? 'primary' : 'text',
        }}
      >
        {getSectionAffix(index)}
      </span>
      <span
        className="section-title"
        sx={{
          fontSize: 0,
          letterSpacing: 1,
          textTransform: 'uppercase',
          textAlign: 'left',
          color: isActive ? 'primary' : 'text',
          fontWeight: isActive ? 'medium' : 'regular',
        }}
      >
        {sectionTitle}
      </span>
    </button>
  </li>
)
