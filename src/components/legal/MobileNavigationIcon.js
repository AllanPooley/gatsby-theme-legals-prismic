/** @jsx jsx */
import { jsx } from 'theme-ui';
import theme from '../../styles/theme';

const MobileNavigationIcon = () => (
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
);

export default MobileNavigationIcon;
