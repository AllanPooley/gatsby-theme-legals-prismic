/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"

const LegalPageHero = ({ title, siteName, homePath }) => (
  <section
    className="legal-page-hero"
    sx={{
      backgroundColor: 'primary',
    }}
  >
    {siteName && <span>{siteName}</span>}
    <h1>{title}</h1>
    <Link
      className="back-to-home-link"
      to={homePath}
    >
      <span>Back to home</span>
    </Link>
  </section>
);

export default LegalPageHero;
