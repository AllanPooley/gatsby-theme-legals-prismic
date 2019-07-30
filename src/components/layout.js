import React from "react"
import { Helmet } from "react-helmet"
import GlobalStyle from '../styles/global'
import { Layout as ThemeLayout, Main } from "theme-ui"

const Layout = ({ title, children }) => {
  return (
    <ThemeLayout>
      <GlobalStyle />
      <Helmet title={title} />
      <Main>
        {children}
      </Main>
    </ThemeLayout>

  )
}

export default Layout
