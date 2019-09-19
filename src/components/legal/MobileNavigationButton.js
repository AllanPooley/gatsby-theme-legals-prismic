/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  MobileNavigationIcon
} from '.';
import {
  getSectionAffix,
} from '../../util/helpers';

const MobileNavigationButton = ({
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
      <MobileNavigationIcon />
    </div>
  </button>
);

export default MobileNavigationButton;
