import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import LegalPageHero from "../components/LegalPageHero"
import LegalPageBody from "../components/LegalPageBody"
import LegalPageNavigation from "../components/LegalPageNavigation"

export default function Template({ data }) {
  const { markdownRemark: legalPage } = data
  const { html, frontmatter } = legalPage
  const { title } = frontmatter
  return (
    <Layout title={legalPage.frontmatter.title}>
      <LegalPageHero
        title={title}
      />
      <LegalPageBody
        content={html}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query LegalPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
