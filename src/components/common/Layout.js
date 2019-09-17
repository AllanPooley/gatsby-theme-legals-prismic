import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout as ThemeLayout, Main } from 'theme-ui';
import GlobalStyle from '../../styles/global';

const Layout = ({ title, siteName, children }) => {
  const pageTitle = siteName ? `${title} | ${siteName}` : title;
  return (
    <ThemeLayout>
      <GlobalStyle />
      <Helmet title={pageTitle} />
      <Main>
        {children}
      </Main>
    </ThemeLayout>
  );
};

export default Layout;
