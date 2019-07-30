/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"

const LegalPageHero = ({ title, siteName, homePath }) => (
  <section
    className="legal-page-hero"
    sx={{
      backgroundColor: 'primary',
      overflow: 'hidden',
      padding: '160px 0 0',
    }}
  >
    <div
      className="container"
      sx={{
        maxWidth: '1240px',
        padding: '0 20px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div
        className="content-container"
        sx={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '220px 100px 40px',
          backgroundColor: 'offWhite',
          position: 'relative',
          'z-index': '3',
        }}
      >
        {siteName && (
          <span
            sx={{
              fontSize: 0,
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            {siteName}
          </span>
        )}
        <h1
          className="page-title"
          sx={{
            fontSize: 4,
            maxWidth: '500px',
            padding: '40px 0'
          }}
        >
          {title}
        </h1>
        <Link
          className="back-to-home-link"
          to={homePath}
          sx={{
            fontSize: 0,
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          <span>Back to home</span>
        </Link>
      </div>
      <div
        className="outer-shadow"
        sx={{
          backgroundColor: 'primaryEvenLighter',
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          transform: 'translateX(-2vw) translateY(20%)',
          'z-index': '2',
        }}
      />
      <div
        className="outer-most-shadow"
        sx={{
          backgroundColor: 'primaryLighter',
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          transform: 'translateX(-5vw) translateY(40%)',
          'z-index': '1',
        }}
      />
    </div>
  </section>
);

export default LegalPageHero;
