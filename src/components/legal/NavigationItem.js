/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  getSectionAffix,
  getSectionId,
} from '../../util/helpers'

const NavigationItem = ({
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
      onClick={event => scrollToHandler(event, getSectionId(index, sectionTitle))}
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
          variant: 'textStyles.controls',
          marginRight: '10px',
          color: isActive ? 'primaryDark' : 'text',
        }}
      >
        {getSectionAffix(index)}
      </span>
      <span
        className="section-title"
        sx={{
          variant: 'textStyles.controls',
          textAlign: 'left',
          color: isActive ? 'primaryDark' : 'text',
          fontWeight: isActive ? 'bold' : 'regular',
        }}
      >
        {sectionTitle}
      </span>
    </button>
  </li>
);

export default NavigationItem;
