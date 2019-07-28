import React from "react"
import { Helmet } from "react-helmet"
import { Layout as ThemeLayout, Header, Main, Container } from "theme-ui"

const Layout = ({ title, children }) => {
  return (
    <ThemeLayout>
      <Helmet title={title} />
      <Header>Gatsby Legals Theme</Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </ThemeLayout>
  )
}

export default Layout
