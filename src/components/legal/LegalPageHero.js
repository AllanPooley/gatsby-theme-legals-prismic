/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Link } from 'gatsby';


const LegalPageHero = ({ title, siteName, homePath }) => (
  <section
    className="legal-page-hero"
    sx={{
      backgroundColor: 'primaryDark',
      overflow: 'hidden',
      padding: ['100px 5% 0 0', '100px 5% 0 0', '100px 10% 0', '160px 10% 0'],
    }}
  >
    <div
      className="container"
      sx={{
        maxWidth: '1240px',
        padding: ['0', '0', '0 20px', '0 20px'],
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div
        className="content-container"
        sx={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: [
            '120px 20px 120px',
            '140px 20px 140px',
            '140px 100px 60px',
            '200px 100px 120px',
          ],
          backgroundColor: 'offWhite',
          position: 'relative',
          'z-index': '3',
        }}
      >
        {siteName && (
          <span
            sx={{
              display: 'block',
              fontSize: 1,
              letterSpacing: 1,
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {siteName}
          </span>
        )}
        <Styled.h1
          className="page-title"
          sx={{
            maxWidth: '600px',
            marginBottom: '40px',
          }}
        >
          {title}
        </Styled.h1>
        <Link
          className="back-to-home-link"
          to={homePath}
          sx={{
            color: 'primary',
          }}
        >
          <span
            sx={{
              fontSize: 1,
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            Back to home
          </span>
        </Link>
      </div>
      <div
        className="outer-shadow"
        sx={{
          backgroundColor: 'primaryLight',
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          transform: [
            'translateX(-2vw) translateY(-5%)',
            'translateX(-2vw) translateY(-5%)',
            'translateX(-2vw) translateY(20%)',
            'translateX(-2vw) translateY(20%)',
          ],
          'z-index': '2',
        }}
      />
      <div
        className="outer-most-shadow"
        sx={{
          backgroundColor: 'primary',
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          transform: [
            'translateX(-5vw) translateY(-10%)',
            'translateX(-5vw) translateY(-10%)',
            'translateX(-5vw) translateY(40%)',
            'translateX(-5vw) translateY(40%)',
          ],
          'z-index': '1',
        }}
      />
    </div>
  </section>
)

export default LegalPageHero
