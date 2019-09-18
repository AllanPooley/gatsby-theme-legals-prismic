import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout as ThemeLayout, Main } from 'theme-ui';
import GlobalStyle from '../../styles/global';

const Layout = (props) => {
  const {
    children,
    // location,
    seoData,
  } = props;
  const {
    metaTitle = null,
    metaDescription = null,
    openGraphImage = null,
  } = seoData;
  return (
    <ThemeLayout>
      <GlobalStyle />
      {metaTitle && metaTitle.text && (
        <Helmet title={metaTitle.text}>
          { metaDescription && metaDescription.text && (
            <meta name="description" content={metaDescription.text} />
          )}
          { openGraphImage && openGraphImage.url && (
            <meta name="image" content={openGraphImage.url} />
          )}
        </Helmet>
      )}
      <Main>
        {children}
      </Main>
    </ThemeLayout>
  );
};

export default Layout;
