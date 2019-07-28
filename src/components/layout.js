import React from "react"
import { Layout as ThemeLayout, Header, Main, Container } from "theme-ui"

const Layout = ({ children }) => {
  return (
    <ThemeLayout>
      <Header>Gatsby Events Theme</Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </ThemeLayout>
  )
}

export default Layout
